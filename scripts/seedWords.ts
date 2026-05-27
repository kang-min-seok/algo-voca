/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { config } from 'dotenv'
config({ path: '.env.local' })

import fs from 'fs'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, writeBatch } from 'firebase/firestore'
import { GoogleGenAI } from '@google/genai'
import { Pinecone } from '@pinecone-database/pinecone'
import { DEV_WORDS_DATASET } from '../src/data/geminiDevData.js'
import { DOC_READING_WORDS_DATASET } from '../src/data/geminiDocData.js'

// ── 상수 ──────────────────────────────────────────────────────────────────
const FIRESTORE_BATCH_SIZE = 400
const EMBED_BATCH_SIZE = 20       // 배치 단위 (이 단위로 임베딩 후 즉시 Pinecone flush)
const PINECONE_UPSERT_SIZE = 100
const EMBEDDING_MODEL = 'gemini-embedding-001'
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? 'algvoca-words'
const PROGRESS_FILE = 'scripts/.seed-progress.json'
const MAX_EMBED_RETRIES = 3

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

// ── Firebase 초기화 ────────────────────────────────────────────────────────
const app = initializeApp({
  apiKey:            process.env.VITE_FIREBASE_API_KEY!,
  authDomain:        process.env.VITE_FIREBASE_AUTH_DOMAIN!,
  projectId:         process.env.VITE_FIREBASE_PROJECT_ID!,
  storageBucket:     process.env.VITE_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
  appId:             process.env.VITE_FIREBASE_APP_ID!,
})
const db = getFirestore(app)

type WordEntry = (typeof DEV_WORDS_DATASET)[number]

// ── 진행 파일 ──────────────────────────────────────────────────────────────
function loadProgress(): Set<string> {
  try {
    const data = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8')) as { embeddedIds: string[] }
    const ids = new Set(data.embeddedIds)
    console.log(`  진행 파일 발견: ${ids.size}개 이미 완료`)
    return ids
  } catch {
    return new Set<string>()
  }
}

function saveProgress(ids: Set<string>): void {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ embeddedIds: [...ids] }, null, 2))
}

// 429 에러 응답에서 retryDelay 파싱 (단위: ms, +5s 버퍼 추가)
function parseRetryDelay(err: unknown): number {
  try {
    const msg = (err as Error).message
    const match = msg.match(/"retryDelay":"(\d+)s"/)
    if (match) return (parseInt(match[1]) + 5) * 1000
  } catch { /* ignore */ }
  return 65_000  // 파싱 실패 시 65초
}

// ── 단어 1개 임베딩 (429 시 retryDelay 대기 후 재시도) ──────────────────────
async function embedWord(ai: GoogleGenAI, word: WordEntry): Promise<number[]> {
  for (let attempt = 0; attempt <= MAX_EMBED_RETRIES; attempt++) {
    try {
      const result = await ai.models.embedContent({
        model: EMBEDDING_MODEL,
        contents: word.term,
        config: { taskType: 'RETRIEVAL_DOCUMENT' },
      })
      const values = result.embeddings?.[0]?.values
      if (!values) throw new Error(`임베딩 값 없음: ${word.term}`)
      return values
    } catch (err) {
      const is429 = (err as { status?: number }).status === 429
      if (is429 && attempt < MAX_EMBED_RETRIES) {
        const delay = parseRetryDelay(err)
        console.log(`  ⏳ 429 rate limit — ${Math.ceil(delay / 1000)}초 후 재시도 (${attempt + 1}/${MAX_EMBED_RETRIES})`)
        await sleep(delay)
        continue
      }
      throw err
    }
  }
  throw new Error('최대 재시도 횟수 초과')
}

// ── 1단계: Firestore 시드 ──────────────────────────────────────────────────
async function seedFirestore(allWords: WordEntry[]): Promise<void> {
  console.log(`\n[1/2] Firestore 업로드 (${allWords.length}개)...`)
  for (let i = 0; i < allWords.length; i += FIRESTORE_BATCH_SIZE) {
    const chunk = allWords.slice(i, i + FIRESTORE_BATCH_SIZE)
    const batch = writeBatch(db)
    for (const word of chunk) {
      batch.set(doc(db, 'words', word.id), word)
    }
    await batch.commit()
    console.log(`  ${i + chunk.length} / ${allWords.length} 완료`)
  }
  console.log('✅ Firestore 업로드 완료')
}

// ── 2단계: Gemini 임베딩 + Pinecone 업로드 ────────────────────────────────
async function embedAndUpload(allWords: WordEntry[]): Promise<void> {
  const geminiKey = process.env.GEMINI_API_KEY
  const pineconeKey = process.env.PINECONE_API_KEY
  if (!geminiKey || !pineconeKey) {
    console.log('\n[2/2] GEMINI_API_KEY 또는 PINECONE_API_KEY 미설정 → 건너뜀')
    console.log('      .env.local에 두 키를 추가한 뒤 다시 실행하세요.')
    return
  }

  const embeddedIds = loadProgress()
  const remaining = allWords.filter((w) => !embeddedIds.has(w.id))

  console.log(`\n[2/2] Gemini 임베딩 + Pinecone 업로드`)
  console.log(`  전체 ${allWords.length}개 | 완료 ${embeddedIds.size}개 | 남은 ${remaining.length}개`)

  if (remaining.length === 0) {
    console.log('✅ 이미 모두 완료되었습니다.')
    return
  }

  // Pinecone 인덱스 준비
  const pc = new Pinecone({ apiKey: pineconeKey })
  const existing = await pc.listIndexes()
  if (!existing.indexes?.find((idx) => idx.name === PINECONE_INDEX_NAME)) {
    console.log(`  인덱스 '${PINECONE_INDEX_NAME}' 생성 중...`)
    await pc.createIndex({
      name: PINECONE_INDEX_NAME,
      dimension: 3072,
      metric: 'cosine',
      spec: { serverless: { cloud: 'aws', region: 'us-east-1' } },
    })
    let ready = false
    while (!ready) {
      await sleep(1000)
      ready = (await pc.describeIndex(PINECONE_INDEX_NAME)).status?.ready ?? false
    }
    console.log('  인덱스 생성 완료')
  }
  const index = pc.index(PINECONE_INDEX_NAME)

  const ai = new GoogleGenAI({ apiKey: geminiKey })

  for (let i = 0; i < remaining.length; i += EMBED_BATCH_SIZE) {
    const batch = remaining.slice(i, i + EMBED_BATCH_SIZE)
    const batchVectors: { id: string; term: string; values: number[] }[] = []

    for (const word of batch) {
      const values = await embedWord(ai, word)
      batchVectors.push({ id: word.id, term: word.term, values })
    }

    // 배치 완료 즉시 Pinecone flush
    for (let j = 0; j < batchVectors.length; j += PINECONE_UPSERT_SIZE) {
      const upsertBatch = batchVectors.slice(j, j + PINECONE_UPSERT_SIZE)
      await index.upsert(upsertBatch.map(({ id, term, values }) => ({ id, values, metadata: { term } })))
    }

    // 진행 파일 갱신
    for (const { id } of batchVectors) embeddedIds.add(id)
    saveProgress(embeddedIds)

    console.log(`  임베딩+저장: ${embeddedIds.size} / ${allWords.length}`)
    if (i + EMBED_BATCH_SIZE < remaining.length) await sleep(1000)
  }

  console.log(`✅ Pinecone 업로드 완료 — ${embeddedIds.size}개 벡터 → '${PINECONE_INDEX_NAME}'`)

  // 모든 단어 완료 시 진행 파일 삭제
  if (embeddedIds.size >= allWords.length) {
    fs.unlinkSync(PROGRESS_FILE)
    console.log('  진행 파일 삭제 (완료)')
  }
}

// ── 실행 ──────────────────────────────────────────────────────────────────
async function main() {
  const allWords = [...DEV_WORDS_DATASET, ...DOC_READING_WORDS_DATASET]
  await seedFirestore(allWords)
  await embedAndUpload(allWords)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

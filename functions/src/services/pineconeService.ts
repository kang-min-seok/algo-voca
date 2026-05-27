import { Pinecone } from '@pinecone-database/pinecone'
import type { JobRole } from '../types'
import { ROLE_EMBEDDINGS } from '../constants/roleEmbeddings'

let pinecone: Pinecone | null = null

function getPinecone(): Pinecone {
  if (!pinecone) {
    const apiKey = process.env.PINECONE_API_KEY
    if (!apiKey) throw new Error('PINECONE_API_KEY is not set')
    pinecone = new Pinecone({ apiKey })
  }
  return pinecone
}

function isZeroVector(vector: number[]): boolean {
  return vector.every((v) => v === 0)
}

export async function queryRoleRelevance(
  jobRole: JobRole,
  wordCount: number,
): Promise<Map<string, number>> {
  const vector = ROLE_EMBEDDINGS[jobRole]

  // 플레이스홀더 벡터(전부 0)인 경우 Pinecone 쿼리 건너뜀
  if (isZeroVector(vector)) return new Map()

  const indexName = process.env.PINECONE_INDEX_NAME ?? 'algvoca-words'
  const index = getPinecone().index(indexName)
  const topK = Math.min(wordCount, 10000)
  const result = await index.query({ vector, topK, includeMetadata: false })

  const scores = new Map<string, number>()
  for (const match of result.matches) {
    scores.set(match.id, match.score ?? 0)
  }
  return scores
}

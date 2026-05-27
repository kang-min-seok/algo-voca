import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { getFirestore } from 'firebase-admin/firestore'
import { getAllWords } from '../services/wordService'
import { getWordRecords } from '../services/wordRecordService'
import { queryRoleRelevance } from '../services/pineconeService'
import { scoreWords, selectRecommendedWords } from '../algorithms/recommendation'
import type { JobRole } from '../types'

const RECOMMEND_COUNT = 10

export const recommend = onCall({ secrets: ['PINECONE_API_KEY'] }, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Must be authenticated')
  }

  const uid = request.auth.uid
  const db = getFirestore()
  const userSnap = await db.doc(`users/${uid}`).get()

  if (!userSnap.exists) {
    throw new HttpsError('not-found', 'User profile not found')
  }

  const jobRole = (userSnap.data()?.jobRole ?? 'other') as JobRole
  const [words, wordRecords] = await Promise.all([getAllWords(), getWordRecords(uid)])

  let pineconeScores = new Map<string, number>()
  try {
    pineconeScores = await queryRoleRelevance(jobRole, words.length)
  } catch (_err) {
    // Pinecone 미설정 또는 오류 시 relevance 0으로 추천 진행
  }

  const scored = scoreWords(words, wordRecords, pineconeScores, jobRole)
  return selectRecommendedWords(scored, RECOMMEND_COUNT)
})

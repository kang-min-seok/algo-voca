import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { processAnswer } from '../services/wordRecordService'
import type { AnswerCallData } from '../types'

export const answer = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Must be authenticated')
  }

  const uid = request.auth.uid
  const { sessionId, answers } = request.data as AnswerCallData

  if (!sessionId || !Array.isArray(answers) || answers.length === 0) {
    throw new HttpsError('invalid-argument', 'sessionId and answers are required')
  }

  await Promise.all(answers.map((a) => processAnswer(uid, a.wordId, a.quality, sessionId)))

  return { ok: true }
})

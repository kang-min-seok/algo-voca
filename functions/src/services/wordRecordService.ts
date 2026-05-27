import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore'
import { calculateSM2 } from '../algorithms/sm2'
import { calculateErrorScore } from '../algorithms/errorScore'
import type { WordRecord } from '../types'

const DEFAULT_SM2 = {
  repetitions: 0,
  efactor: 2.5,
  interval: 0,
}

const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000

export async function processAnswer(
  uid: string,
  wordId: string,
  quality: 0 | 1,
  sessionId: string,
): Promise<void> {
  const db = getFirestore()
  const recordRef = db.doc(`users/${uid}/wordRecords/${wordId}`)
  const answersRef = recordRef.collection('answers')

  const recordSnap = await recordRef.get()
  const existing = recordSnap.exists
    ? (recordSnap.data() as WordRecord & {
        nextReviewDate: FirebaseFirestore.Timestamp
        lastAnsweredAt: FirebaseFirestore.Timestamp
      })
    : null

  const sm2Input = existing
    ? {
        repetitions: existing.repetitions,
        efactor: existing.efactor,
        interval: existing.interval,
        nextReviewDate: existing.nextReviewDate.toDate(),
      }
    : { ...DEFAULT_SM2, nextReviewDate: new Date() }

  const sm2Quality = quality === 1 ? 4 : 1
  const newSM2 = calculateSM2(sm2Quality, sm2Input)

  const now = Timestamp.now()
  await answersRef.add({ answeredAt: now, quality, sessionId })

  const ninetyDaysAgo = Timestamp.fromMillis(Date.now() - NINETY_DAYS_MS)
  const recentSnap = await answersRef
    .where('answeredAt', '>=', ninetyDaysAgo)
    .orderBy('answeredAt', 'desc')
    .get()
  const recentAnswers = recentSnap.docs.map((d) => {
    const data = d.data()
    return {
      answeredAt: data.answeredAt as FirebaseFirestore.Timestamp,
      quality: data.quality as 0 | 1,
    }
  })

  const errorScore = calculateErrorScore(newSM2.efactor, recentAnswers)

  await recordRef.set(
    {
      wordId,
      repetitions: newSM2.repetitions,
      efactor: newSM2.efactor,
      interval: newSM2.interval,
      nextReviewDate: Timestamp.fromDate(newSM2.nextReviewDate),
      lastAnsweredAt: now,
      errorScore,
      totalAnswers: FieldValue.increment(1),
      correctAnswers: FieldValue.increment(quality === 1 ? 1 : 0),
    },
    { merge: true },
  )
}

export async function getWordRecords(uid: string): Promise<Map<string, WordRecord>> {
  const db = getFirestore()
  const snap = await db.collection(`users/${uid}/wordRecords`).get()
  const map = new Map<string, WordRecord>()

  for (const doc of snap.docs) {
    const data = doc.data() as WordRecord & {
      nextReviewDate: FirebaseFirestore.Timestamp
      lastAnsweredAt: FirebaseFirestore.Timestamp
    }
    map.set(doc.id, {
      ...data,
      nextReviewDate: data.nextReviewDate.toDate(),
      lastAnsweredAt: data.lastAnsweredAt?.toDate() ?? new Date(),
    })
  }

  return map
}

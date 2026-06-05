import { collection, getDocs } from 'firebase/firestore'
import type { Timestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { WordRecord } from '@/types'

function wordRecordsRef(uid: string) {
  return collection(db, 'users', uid, 'wordRecords')
}

export async function getWordRecords(uid: string): Promise<WordRecord[]> {
  const snap = await getDocs(wordRecordsRef(uid))
  return snap.docs.map((doc) => {
    const d = doc.data()
    return {
      wordId: doc.id,
      repetitions: d.repetitions ?? 0,
      efactor: d.efactor ?? 2.5,
      interval: d.interval ?? 0,
      nextReviewDate: (d.nextReviewDate as Timestamp).toDate(),
      lastAnsweredAt: (d.lastAnsweredAt as Timestamp).toDate(),
      errorScore: d.errorScore ?? 0,
      totalAnswers: d.totalAnswers ?? 0,
      correctAnswers: d.correctAnswers ?? 0,
    }
  })
}

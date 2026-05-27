import { getFirestore } from 'firebase-admin/firestore'
import type { Word } from '../types'

export async function getAllWords(): Promise<Word[]> {
  const db = getFirestore()
  const snap = await db.collection('words').get()
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Word))
}

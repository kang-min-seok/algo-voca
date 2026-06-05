import { httpsCallable } from 'firebase/functions'
import { collection, query, where, getDocs, documentId } from 'firebase/firestore'
import { functions, db } from './firebase'
import type { Word } from '@/types'

const recommendFn = httpsCallable(functions, 'recommend')

export async function getRecommendedWords(): Promise<Word[]> {
  const result = await recommendFn()
  return result.data as Word[]
}

function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size))
  return chunks
}

export async function getWordsByIds(wordIds: string[]): Promise<Map<string, Word>> {
  if (wordIds.length === 0) return new Map()
  const map = new Map<string, Word>()
  await Promise.all(
    chunk(wordIds, 30).map(async (ids) => {
      const q = query(collection(db, 'words'), where(documentId(), 'in', ids))
      const snap = await getDocs(q)
      snap.docs.forEach((d) => map.set(d.id, { id: d.id, ...d.data() } as Word))
    }),
  )
  return map
}

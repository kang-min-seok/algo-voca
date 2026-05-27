import { httpsCallable } from 'firebase/functions'
import { functions } from './firebase'
import type { Word } from '@/types'

const recommendFn = httpsCallable(functions, 'recommend')

export async function getRecommendedWords(): Promise<Word[]> {
  const result = await recommendFn()
  return result.data as Word[]
}

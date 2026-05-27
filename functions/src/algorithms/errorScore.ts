import type { Timestamp } from 'firebase-admin/firestore'

export interface AnswerRecord {
  answeredAt: Timestamp
  quality: 0 | 1
}

export function calculateErrorScore(efactor: number, recentAnswers: AnswerRecord[]): number {
  if (recentAnswers.length === 0) return 0.5

  const now = Date.now()
  let weightedErrors = 0
  let totalWeight = 0

  for (const answer of recentAnswers) {
    const daysAgo = (now - answer.answeredAt.toMillis()) / (1000 * 60 * 60 * 24)
    const weight = Math.exp(-0.1 * daysAgo)
    weightedErrors += weight * (1 - answer.quality)
    totalWeight += weight
  }

  const recentErrorRate = weightedErrors / totalWeight
  // (2.5 - efactor) / 1.2 → 0(쉬움) ~ 1(어려움)
  const difficultyScore = (2.5 - efactor) / 1.2

  return 0.6 * recentErrorRate + 0.4 * difficultyScore
}

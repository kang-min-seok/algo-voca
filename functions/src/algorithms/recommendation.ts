import type { Word, WordRecord, JobRole } from '../types'

interface ScoredWord {
  word: Word
  score: number
}

// 미학습 단어이거나 복습 기한이 된 단어만 후보로 포함
function getEligibleWords(
  words: Word[],
  wordRecords: Map<string, WordRecord>,
): { word: Word; record: WordRecord | null }[] {
  const today = new Date()
  return words
    .map((word) => ({ word, record: wordRecords.get(word.id) ?? null }))
    .filter(({ record }) => !record || record.nextReviewDate <= today)
}

export function scoreWords(
  words: Word[],
  wordRecords: Map<string, WordRecord>,
  pineconeScores: Map<string, number>,
  jobRole: JobRole,
): ScoredWord[] {
  const eligible = getEligibleWords(words, wordRecords)

  return eligible.map(({ word, record }) => {
    const importance = word.importanceByRole[jobRole] / 10
    const relevance = pineconeScores.get(word.id) ?? 0
    // 미학습: 0, 정답 위주(errorScore→0): 최대 -1, 오답 위주(errorScore→1): 최대 +1
    const errorContribution = record ? record.errorScore * 2 - 1 : 0

    return {
      word,
      score: 0.4 * importance + 0.4 * relevance + 0.2 * errorContribution,
    }
  })
}

export function selectRecommendedWords(scored: ScoredWord[], count: number): Word[] {
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.word)
}

import type { Word, WordRecord, JobRole } from '../types'

interface ScoredWord {
  word: Word
  score: number
  wordRecord: WordRecord | null
}

export function scoreWords(
  words: Word[],
  wordRecords: Map<string, WordRecord>,
  pineconeScores: Map<string, number>,
  jobRole: JobRole,
): ScoredWord[] {
  return words.map((word) => {
    const record = wordRecords.get(word.id) ?? null
    const importance = word.importanceByRole[jobRole] / 10
    const errorScore = record?.errorScore ?? 0.5
    const relevance = pineconeScores.get(word.id) ?? 0

    return {
      word,
      score: 0.4 * importance + 0.3 * errorScore + 0.3 * relevance,
      wordRecord: record,
    }
  })
}

export function selectRecommendedWords(scored: ScoredWord[], count: number): Word[] {
  const today = new Date()
  const overdue = scored.filter((s) => s.wordRecord && s.wordRecord.nextReviewDate <= today)
  const others = scored.filter((s) => !s.wordRecord || s.wordRecord.nextReviewDate > today)

  const MIN_OVERDUE = 3
  const forcedOverdue = overdue.slice(0, MIN_OVERDUE).map((s) => s.word)
  const remaining = [...overdue.slice(MIN_OVERDUE), ...others]
    .sort((a, b) => b.score - a.score)
    .slice(0, count - forcedOverdue.length)
    .map((s) => s.word)

  return [...forcedOverdue, ...remaining]
}

import { useState, useEffect } from 'react'
import { useAuth } from '@/features/auth/AuthContext'
import { getWordRecords } from '@/services/wordRecordService'
import { getWordsByIds } from '@/services/wordService'
import type { Word, WordRecord } from '@/types'

export interface WordStat {
  word: Word
  record: WordRecord
}

export interface StatsSummary {
  learnedWords: number
  totalAnswers: number
  overallAccuracy: number
  overdueCount: number
}

export interface StatsData {
  summary: StatsSummary
  mostStudied: WordStat[]    // totalAnswers 내림차순
  mostWrong: WordStat[]      // 오답 횟수 내림차순
  highErrorScore: WordStat[] // errorScore 내림차순
  strongest: WordStat[]      // interval 내림차순
  overdue: WordStat[]        // nextReviewDate 오름차순 (가장 오래된 것 먼저)
  loading: boolean
  error: string | null
}

const INITIAL: StatsData = {
  summary: { learnedWords: 0, totalAnswers: 0, overallAccuracy: 0, overdueCount: 0 },
  mostStudied: [],
  mostWrong: [],
  highErrorScore: [],
  strongest: [],
  overdue: [],
  loading: true,
  error: null,
}

export function useStats(): StatsData {
  const { user } = useAuth()
  const [data, setData] = useState<StatsData>(INITIAL)

  useEffect(() => {
    if (!user) return
    let cancelled = false

    setData(INITIAL)

    async function load() {
      try {
        const records = await getWordRecords(user!.uid)
        if (cancelled) return

        if (records.length === 0) {
          setData({ ...INITIAL, loading: false })
          return
        }

        const wordsMap = await getWordsByIds(records.map((r) => r.wordId))
        if (cancelled) return

        const stats: WordStat[] = records
          .filter((r) => wordsMap.has(r.wordId))
          .map((r) => ({ word: wordsMap.get(r.wordId)!, record: r }))

        const now = new Date()
        const totalAnswers = stats.reduce((s, i) => s + i.record.totalAnswers, 0)
        const totalCorrect = stats.reduce((s, i) => s + i.record.correctAnswers, 0)

        const mostStudied = [...stats].sort(
          (a, b) => b.record.totalAnswers - a.record.totalAnswers,
        )

        const mostWrong = [...stats]
          .filter((i) => i.record.totalAnswers - i.record.correctAnswers > 0)
          .sort(
            (a, b) =>
              b.record.totalAnswers - b.record.correctAnswers -
              (a.record.totalAnswers - a.record.correctAnswers),
          )

        const highErrorScore = [...stats]
          .filter((i) => i.record.errorScore > 0)
          .sort((a, b) => b.record.errorScore - a.record.errorScore)

        const strongest = [...stats]
          .filter((i) => i.record.interval > 0)
          .sort((a, b) => b.record.interval - a.record.interval)

        const overdue = [...stats]
          .filter((i) => i.record.nextReviewDate <= now)
          .sort(
            (a, b) =>
              a.record.nextReviewDate.getTime() - b.record.nextReviewDate.getTime(),
          )

        if (!cancelled) {
          setData({
            summary: {
              learnedWords: stats.length,
              totalAnswers,
              overallAccuracy:
                totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0,
              overdueCount: overdue.length,
            },
            mostStudied,
            mostWrong,
            highErrorScore,
            strongest,
            overdue,
            loading: false,
            error: null,
          })
        }
      } catch {
        if (!cancelled) {
          setData({ ...INITIAL, loading: false, error: '데이터를 불러오지 못했어요.' })
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [user])

  return data
}

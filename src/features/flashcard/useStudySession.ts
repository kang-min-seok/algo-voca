import { useState, useEffect, useRef } from 'react'
import type { Word, StudyAnswer } from '@/types'

export function useStudySession(words: Word[]) {
  const [queue, setQueue] = useState<Word[]>([])
  const [answeredFinal, setAnsweredFinal] = useState<Record<string, 0 | 1>>({})
  const [isFlipped, setIsFlipped] = useState(false)
  const [processedCount, setProcessedCount] = useState(0)
  const initializedRef = useRef(false)

  // words가 로드되면 큐 초기화 (1회만)
  useEffect(() => {
    if (!initializedRef.current && words.length > 0) {
      initializedRef.current = true
      setQueue(words)
    }
  }, [words])

  const currentWord = queue[0] ?? null
  const isComplete = initializedRef.current && queue.length === 0

  const flip = () => setIsFlipped((prev) => !prev)

  const handleAnswer = (quality: 0 | 1) => {
    if (!currentWord) return

    // 재시도 시 마지막 결과로 덮어씀 → Firestore에는 최종 결과만 저장
    setAnsweredFinal((prev) => ({ ...prev, [currentWord.id]: quality }))
    setIsFlipped(false)
    setProcessedCount((prev) => prev + 1)
    setQueue((prev) => {
      const [, ...rest] = prev
      // 틀리면 큐 뒤로 재추가
      return quality === 0 ? [...rest, currentWord] : rest
    })
  }

  const answers: StudyAnswer[] = Object.entries(answeredFinal).map(([wordId, quality]) => ({
    wordId,
    quality,
  }))

  return {
    currentWord,
    currentIndex: processedCount,
    total: processedCount + queue.length,
    isFlipped,
    flip,
    handleAnswer,
    isComplete,
    answers,
  }
}

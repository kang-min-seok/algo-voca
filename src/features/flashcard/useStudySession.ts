import { useState } from 'react'
import type { Word, StudyAnswer } from '@/types'

export function useStudySession(words: Word[]) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [answers, setAnswers] = useState<StudyAnswer[]>([])

  const isComplete = answers.length === words.length && words.length > 0
  const currentWord = words[currentIndex]

  const flip = () => setIsFlipped((prev) => !prev)

  const handleAnswer = (quality: 0 | 1) => {
    if (!currentWord) return
    setAnswers((prev) => [...prev, { wordId: currentWord.id, quality }])
    setIsFlipped(false)
    setCurrentIndex((prev) => prev + 1)
  }

  return {
    currentWord,
    currentIndex,
    isFlipped,
    flip,
    handleAnswer,
    isComplete,
    answers,
    total: words.length,
  }
}

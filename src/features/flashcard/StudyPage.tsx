import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { getRecommendedWords } from '@/services/wordService'
import FlashCard from './FlashCard'
import { useStudySession } from './useStudySession'
import type { Word } from '@/types'

export default function StudyPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const session = useStudySession(words)

  useEffect(() => {
    if (!user) return
    getRecommendedWords(user.uid)
      .then(setWords)
      .catch(() => setError('단어를 불러오지 못했습니다.'))
      .finally(() => setLoading(false))
  }, [user])

  useEffect(() => {
    if (session.isComplete) {
      navigate('/result', {
        state: { answers: session.answers, words },
        replace: true,
      })
    }
  }, [session.isComplete, session.answers, words, navigate])

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
        <p>단어를 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
        <p className="text-red-600 dark:text-red-400">{error}</p>
        <button
          className="py-2.5 px-5 bg-violet-600 text-white border-none rounded-lg text-sm font-semibold"
          onClick={() => navigate('/home')}
        >
          홈으로
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950">
      <div className="flex items-center justify-between px-5 pt-4">
        <button
          className="bg-transparent border-none text-sm text-slate-500 dark:text-slate-400 py-1 transition-colors hover:text-slate-800 dark:hover:text-slate-100"
          onClick={() => navigate('/home')}
        >
          ← 나가기
        </button>
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          {session.currentIndex + 1} / {session.total}
        </span>
      </div>

      <div className="h-1 bg-slate-200 dark:bg-slate-700 mx-5 mt-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-600 rounded-full transition-[width] duration-350 ease-in-out"
          style={{ width: `${(session.currentIndex / session.total) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-5 pt-6 pb-10">
        {session.currentWord && (
          <FlashCard
            word={session.currentWord}
            isFlipped={session.isFlipped}
            onFlip={session.flip}
            onAnswer={session.handleAnswer}
          />
        )}
      </div>
    </div>
  )
}

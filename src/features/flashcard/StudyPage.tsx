import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { getRecommendedWords } from '@/services/wordService'
import FlashCard from './FlashCard'
import { useStudySession } from './useStudySession'
import type { Word } from '@/types'
import { BsArrowLeft } from 'react-icons/bs'

export default function StudyPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const session = useStudySession(words)
  const [isExiting, setIsExiting] = useState(false)

  const handleAnswer = (quality: 0 | 1) => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      session.handleAnswer(quality)
      setIsExiting(false)
    }, 140)
  }

  useEffect(() => {
    if (!user) return
    getRecommendedWords()
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
      <div
        className="screen-scroll"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          color: 'var(--text-3)',
          fontSize: 14,
        }}
      >
        <div
          className="mono"
          style={{ color: 'var(--brand)', fontSize: 12, letterSpacing: '0.1em' }}
        >
          loading...
        </div>
        <p>단어를 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="screen-scroll"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: '24px',
        }}
      >
        <p style={{ fontSize: 14, color: 'var(--red)' }}>{error}</p>
        <button
          style={{
            padding: '12px 20px',
            borderRadius: 13,
            border: 'none',
            background: 'var(--brand)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 650,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/home')}
        >
          홈으로
        </button>
      </div>
    )
  }

  const progress = session.total > 0
    ? ((session.currentIndex + (session.isFlipped ? 0.5 : 0)) / session.total) * 100
    : 0

  return (
    <div
      className="screen-scroll"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: '16px 22px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => navigate('/home')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 'none',
            color: 'var(--text-2)',
            fontSize: 14.5,
            fontWeight: 600,
            padding: '6px 0',
            cursor: 'pointer',
          }}
        >
          <BsArrowLeft size={18} /> 나가기
        </button>
        <span className="mono" style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-2)' }}>
          <span style={{ color: 'var(--brand)', fontWeight: 700 }}>
            {String(session.currentIndex + 1).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--text-3)' }}> / {session.total}</span>
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ padding: '14px 22px 0' }}>
        <div
          style={{
            width: '100%',
            height: 8,
            background: 'var(--surface-3)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'var(--brand)',
              borderRadius: 8,
              transition: 'width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        </div>
      </div>

      {/* Answer dots */}
      <div
        style={{
          padding: '16px 22px 0',
          display: 'flex',
          gap: 5,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {words.map((word, i) => {
          const a = session.answers.find((ans) => ans.wordId === word.id)
          const isActive = i === session.currentIndex
          const dotColor = a
            ? a.quality === 1 ? 'var(--green)' : 'var(--red)'
            : isActive ? 'var(--brand)' : 'var(--surface-3)'
          return (
            <span
              key={i}
              style={{
                width: isActive ? 18 : 7,
                height: 7,
                borderRadius: 4,
                background: dotColor,
                transition: 'all 0.3s ease',
              }}
            />
          )
        })}
      </div>

      {/* Flash card */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '22px 22px 0',
        }}
      >
        {session.currentWord && (
          <FlashCard
            key={session.currentIndex}
            word={session.currentWord}
            isFlipped={session.isFlipped}
            onFlip={session.flip}
            onAnswer={handleAnswer}
            index={session.currentIndex}
            isExiting={isExiting}
          />
        )}
      </div>

      <div style={{ height: 28 }} />
    </div>
  )
}

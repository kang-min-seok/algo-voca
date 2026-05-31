import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { httpsCallable } from 'firebase/functions'
import { useAuth } from '@/features/auth/AuthContext'
import { functions } from '@/services/firebase'
import { saveStudySession } from '@/services/studySessionService'
import type { StudyResult } from '@/types'
import { BsArrowRepeat, BsCheckLg, BsXLg, BsLayers, BsStars } from 'react-icons/bs'

const answerFn = httpsCallable(functions, 'answer')

function scoreTone(percent: number) {
  if (percent >= 80) return { color: 'var(--green)', label: '훌륭해요' }
  if (percent >= 50) return { color: 'var(--amber)', label: '괜찮아요' }
  return { color: 'var(--red)', label: '복습이 필요해요' }
}

function ROLE_LABEL_MSG(percent: number) {
  if (percent >= 80) return '이 페이스라면 금방 마스터해요'
  if (percent >= 50) return '복습으로 채워나가요'
  return '복습 주기를 짧게 가져갈게요'
}

function StatBox({
  label,
  value,
  color,
  Icon,
}: {
  label: string
  value: number
  color: string
  Icon: React.ComponentType<{ size?: number }>
}) {
  return (
    <div
      style={{
        flex: 1,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 15,
        padding: '15px 10px',
        textAlign: 'center',
      }}
    >
      <span style={{ color, display: 'inline-flex' }}>
        <Icon size={17} />
      </span>
      <div
        style={{
          fontSize: 26,
          fontWeight: 820,
          color: 'var(--text)',
          letterSpacing: '-0.03em',
          marginTop: 4,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 600, marginTop: 1 }}>
        {label}
      </div>
    </div>
  )
}

export default function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()
  const state = location.state as StudyResult | null
  const savedRef = useRef(false)
  const [saveError, setSaveError] = useState(false)

  useEffect(() => {
    if (!state || !user || savedRef.current) return
    savedRef.current = true
    saveStudySession(user.uid, state.answers, state.words)
      .then((sessionId) => answerFn({ sessionId, answers: state.answers }))
      .catch(() => setSaveError(true))
  }, [state, user])

  if (!state) {
    navigate('/home', { replace: true })
    return null
  }

  const known = state.answers.filter((a) => a.quality === 1).length
  const unknown = state.answers.filter((a) => a.quality === 0).length
  const total = state.answers.length
  const percent = Math.round((known / total) * 100)
  const tone = scoreTone(percent)

  const unknownWords = state.words.filter((w) =>
    state.answers.find((a) => a.wordId === w.id && a.quality === 0)
  )

  const R = 78
  const C = 2 * Math.PI * R
  const [shownPercent, setShownPercent] = useState(0)

  useEffect(() => {
    let raf: number
    const start = performance.now()
    const dur = 900
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setShownPercent(Math.round(eased * percent))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [percent])

  return (
    <div className="screen-scroll fade-in">
      <div
        style={{
          padding: '40px 24px 36px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <span
            className="mono"
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: tone.color,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <BsStars size={13} /> session complete
          </span>
          <h1
            style={{
              margin: '12px 0 0',
              fontSize: 30,
              fontWeight: 820,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
            }}
          >
            학습 완료!
          </h1>
          <p style={{ margin: '8px 0 0', fontSize: 15, color: 'var(--text-2)' }}>
            {tone.label} · {ROLE_LABEL_MSG(percent)}
          </p>
        </div>

        {saveError && (
          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: 'var(--amber)',
              background: 'var(--amber-soft)',
              border: '1px solid color-mix(in oklab, var(--amber) 30%, transparent)',
              borderRadius: 10,
              padding: '10px 14px',
              textAlign: 'center',
            }}
          >
            학습 기록 저장에 실패했어요. 결과는 유지됩니다.
          </p>
        )}

        {/* Radial progress */}
        <div
          className="fade-up"
          style={{
            animationDelay: '0.08s',
            position: 'relative',
            width: 200,
            height: 200,
            margin: '26px 0 8px',
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke="var(--surface-3)"
              strokeWidth="14"
            />
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke={tone.color}
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C - (C * shownPercent) / 100}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 52,
                fontWeight: 850,
                letterSpacing: '-0.04em',
                color: tone.color,
                lineHeight: 1,
              }}
            >
              {shownPercent}
              <span style={{ fontSize: 24 }}>%</span>
            </span>
            <span
              className="mono"
              style={{
                fontSize: 12,
                color: 'var(--text-3)',
                marginTop: 4,
                letterSpacing: '0.05em',
              }}
            >
              정답률
            </span>
          </div>
        </div>

        {/* Stat boxes */}
        <div
          className="fade-up"
          style={{
            animationDelay: '0.14s',
            display: 'flex',
            gap: 10,
            width: '100%',
            marginTop: 16,
          }}
        >
          <StatBox label="알고있음" value={known} color="var(--green)" Icon={BsCheckLg} />
          <StatBox label="모름" value={unknown} color="var(--red)" Icon={BsXLg} />
          <StatBox label="전체" value={total} color="var(--text)" Icon={BsLayers} />
        </div>

        {/* Review word list */}
        {unknownWords.length > 0 ? (
          <div
            className="fade-up"
            style={{ animationDelay: '0.2s', width: '100%', marginTop: 26 }}
          >
            <span
              className="mono"
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <BsArrowRepeat size={13} /> 복습이 필요한 단어 · {unknownWords.length}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 13 }}>
              {unknownWords.map((w) => (
                <div
                  key={w.id}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--red)',
                    borderRadius: 13,
                    padding: '13px 15px',
                  }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}
                  >
                    {w.term}
                  </span>
                  <p
                    style={{
                      margin: '5px 0 0',
                      fontSize: 13.5,
                      color: 'var(--text-2)',
                      lineHeight: 1.45,
                    }}
                  >
                    {w.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="fade-up"
            style={{
              animationDelay: '0.2s',
              width: '100%',
              marginTop: 26,
              textAlign: 'center',
              background: 'var(--green-soft)',
              border: '1px solid color-mix(in oklab, var(--green) 30%, transparent)',
              borderRadius: 16,
              padding: '20px',
            }}
          >
            <span style={{ color: 'var(--green)', display: 'inline-flex' }}>
              <BsCheckLg size={26} />
            </span>
            <p
              style={{
                margin: '8px 0 0',
                fontSize: 15,
                fontWeight: 700,
                color: 'var(--text)',
              }}
            >
              완벽해요! 복습할 단어가 없어요.
            </p>
          </div>
        )}

        {/* Actions */}
        <div
          className="fade-up"
          style={{
            animationDelay: '0.26s',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 28,
          }}
        >
          <button
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: 13,
              border: 'none',
              background: 'var(--brand)',
              color: '#fff',
              fontSize: 16,
              fontWeight: 650,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
              transition: 'transform 0.12s ease',
            }}
            onClick={() => navigate('/study', { replace: true })}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.975)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <BsArrowRepeat size={17} /> 다시 학습하기
          </button>
          <button
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: 13,
              border: '1px solid var(--border)',
              background: 'var(--surface-2)',
              color: 'var(--text)',
              fontSize: 16,
              fontWeight: 650,
              cursor: 'pointer',
              transition: 'transform 0.12s ease',
            }}
            onClick={() => navigate('/home', { replace: true })}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.975)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  )
}

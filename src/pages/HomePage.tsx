import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { getStudySessions } from '@/services/studySessionService'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import type { StudySession } from '@/types'
import {
  BsBoxArrowRight,
  BsLayers,
  BsChevronDown,
  BsCheckLg,
  BsArrowRight,
  BsLightning,
  BsGraphUp,
} from 'react-icons/bs'

function scoreTone(percent: number) {
  if (percent >= 80) return { color: 'var(--green)', soft: 'var(--green-soft)', label: '훌륭해요' }
  if (percent >= 50) return { color: 'var(--amber)', soft: 'var(--amber-soft)', label: '괜찮아요' }
  return { color: 'var(--red)', soft: 'var(--red-soft)', label: '복습이 필요해요' }
}

function formatDate(date: Date): string {
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - date.getTime()) / 86_400_000)
  if (diffDays === 0) return '오늘'
  if (diffDays === 1) return '어제'
  return `${date.getMonth() + 1}월 ${date.getDate()}일`
}

function SessionRow({ session }: { session: StudySession }) {
  const [open, setOpen] = useState(false)
  const tone = scoreTone(session.percent)
  const reviewWords = session.answers.filter((a) => a.quality === 0)

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 1px 2px hsl(var(--shadow-color) / 0.14)',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '14px 16px',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            flexShrink: 0,
            background: tone.soft,
            color: tone.color,
            display: 'grid',
            placeItems: 'center',
            fontWeight: 800,
            fontSize: 14,
          }}
        >
          {session.percent}
          <span style={{ fontSize: 9, fontWeight: 600 }}>%</span>
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 14.5,
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 6,
            }}
          >
            {formatDate(session.completedAt)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                flex: 1,
                height: 6,
                background: 'var(--surface-3)',
                borderRadius: 6,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${session.percent}%`,
                  height: '100%',
                  background: tone.color,
                  borderRadius: 6,
                }}
              />
            </div>
            <span
              className="mono"
              style={{ fontSize: 11.5, color: 'var(--text-3)', whiteSpace: 'nowrap' }}
            >
              {session.knownWords}/{session.totalWords}
            </span>
          </div>
        </div>
        <span
          style={{
            color: 'var(--text-3)',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.25s ease',
            flexShrink: 0,
          }}
        >
          <BsChevronDown size={16} />
        </span>
      </button>

      {open && (
        <div className="fade-in" style={{ padding: '0 16px 16px' }}>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 13 }}>
            <span
              className="mono"
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-3)',
              }}
            >
              복습이 필요한 단어 · {reviewWords.length}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {reviewWords.length === 0 ? (
                <div
                  style={{
                    fontSize: 13.5,
                    color: 'var(--green)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                  }}
                >
                  <BsCheckLg size={15} /> 모든 단어를 맞혔어요!
                </div>
              ) : (
                reviewWords.map((w) => (
                  <div
                    key={w.wordId}
                    style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: 'var(--brand)',
                        flexShrink: 0,
                      }}
                    >
                      {w.term}
                    </span>
                    <span
                      style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.45 }}
                    >
                      {w.definition}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [sessions, setSessions] = useState<StudySession[]>([])
  const [historyLoading, setHistoryLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    getStudySessions(user.uid)
      .then(setSessions)
      .catch(() => {})
      .finally(() => setHistoryLoading(false))
  }, [user])

  const handleLogout = async () => {
    await logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="screen-scroll fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Sticky header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 22px',
          background: 'color-mix(in oklab, var(--bg) 80%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Logo size={18} />
        <div style={{ display: 'flex', gap: 8 }}>
          <ThemeToggle />
          <button
            onClick={handleLogout}
            aria-label="로그아웃"
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              color: 'var(--text-2)',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              transition: 'color 0.18s, border-color 0.18s',
            }}
          >
            <BsBoxArrowRight size={17} />
          </button>
        </div>
      </header>

      <div style={{ padding: '24px 22px 36px', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Greeting */}
        <div className="fade-up">
          <h1
            style={{
              margin: 0,
              fontSize: 25,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
            }}
          >
            안녕하세요 👋
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
            <span className="mono" style={{ fontSize: 13, color: 'var(--text-2)' }}>
              {user?.email}
            </span>
            {user?.displayName ? null : (
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--brand)',
                  background: 'var(--brand-tint)',
                  padding: '3px 8px',
                  borderRadius: 6,
                }}
              >
                개발자
              </span>
            )}
          </div>
        </div>

        {/* Today card */}
        <div className="fade-up" style={{ animationDelay: '0.05s', marginTop: 20 }}>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'var(--card-radius)',
              background: 'linear-gradient(145deg, var(--brand), color-mix(in oklab, var(--brand) 72%, #000))',
              color: '#fff',
              padding: 22,
              boxShadow: '0 16px 38px -16px color-mix(in oklab, var(--brand) 70%, transparent)',
            }}
          >
            {/* Background grid */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.5,
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.13) 1px, transparent 0)',
                backgroundSize: '16px 16px',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative' }}>
              <span
                className="mono"
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: 0.85,
                }}
              >
                오늘의 학습
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 10,
                  marginTop: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 52,
                    fontWeight: 850,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  10
                </span>
                <span style={{ fontSize: 18, fontWeight: 650, opacity: 0.92 }}>
                  개의 단어가
                  <br />
                  준비되어 있어요
                </span>
              </div>
              <p
                style={{
                  margin: '16px 0 0',
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  opacity: 0.85,
                }}
              >
                오늘 복습할 단어를 준비했어요. 약 4분이면 끝나요.
              </p>
              <button
                onClick={() => navigate('/study')}
                style={{
                  marginTop: 20,
                  width: '100%',
                  border: 'none',
                  borderRadius: 13,
                  padding: '15px',
                  background: '#fff',
                  color: 'var(--brand-ink)',
                  fontSize: 16,
                  fontWeight: 750,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  cursor: 'pointer',
                  transition: 'transform 0.14s ease',
                  boxShadow: '0 6px 18px -8px rgba(0,0,0,0.4)',
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                학습 시작 <BsArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats shortcut */}
        <div className="fade-up" style={{ animationDelay: '0.08s', marginTop: 12 }}>
          <button
            onClick={() => navigate('/stats')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--card-radius)',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'border-color 0.18s',
              boxShadow: '0 1px 2px hsl(var(--shadow-color) / 0.1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: 'var(--brand-tint)',
                color: 'var(--brand)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <BsGraphUp size={17} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>학습 통계</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-3)', marginTop: 2 }}>
                학습 현황과 취약 단어를 확인하세요
              </div>
            </div>
            <span style={{ color: 'var(--text-3)', flexShrink: 0 }}>
              <BsArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* Session history */}
        <div className="fade-up" style={{ animationDelay: '0.1s', marginTop: 30 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 14,
            }}
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
              <BsLayers size={13} /> 학습 내역
            </span>
            <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-3)' }}>
              {sessions.length} sessions
            </span>
          </div>

          {historyLoading ? (
            <p style={{ fontSize: 13.5, color: 'var(--text-3)', padding: '8px 0' }}>불러오는 중...</p>
          ) : sessions.length === 0 ? (
            <p style={{ fontSize: 13.5, color: 'var(--text-3)', lineHeight: 1.5 }}>
              아직 학습 기록이 없어요. 첫 학습을 시작해보세요!
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sessions.map((s) => (
                <SessionRow key={s.id} session={s} />
              ))}
            </div>
          )}
        </div>

        {/* Tip card */}
        <div className="fade-up" style={{ animationDelay: '0.15s', marginTop: 26 }}>
          <div
            style={{
              display: 'flex',
              gap: 13,
              alignItems: 'flex-start',
              background: 'var(--surface-2)',
              border: '1px dashed var(--border-strong)',
              borderRadius: 16,
              padding: '15px 16px',
            }}
          >
            <span style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 1 }}>
              <BsLightning size={18} />
            </span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>학습 팁</div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: 'var(--text-2)',
                  marginTop: 3,
                }}
              >
                뜻이 떠오르지 않아도 괜찮아요.{' '}
                <strong style={{ color: 'var(--text)' }}>"모름"</strong>을 솔직하게 누를수록
                SM-2가 복습 주기를 더 정확하게 맞춰줘요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

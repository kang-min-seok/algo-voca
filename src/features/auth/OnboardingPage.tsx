import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from './AuthContext'
import { db } from '@/services/firebase'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { JOB_ROLES } from '@/constants'
import type { JobRole } from '@/types'
import { BsArrowRight, BsCheckLg, BsStars } from 'react-icons/bs'

const ROLE_GLYPHS: Record<string, string> = {
  frontend: 'FE',
  backend: 'BE',
  devops: 'DO',
  fullstack: 'FS',
  other: '?',
}

export default function OnboardingPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [jobRole, setJobRole] = useState<JobRole | ''>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!jobRole) {
      setError('직군을 선택해주세요.')
      return
    }
    if (!user) return
    setError('')
    setLoading(true)
    try {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        jobRole,
        createdAt: new Date(),
      })
      navigate('/home')
    } catch {
      setError('프로필 저장에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="screen-scroll fade-in">
      {/* Top bar */}
      <div
        style={{
          padding: '20px 24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <ThemeToggle />
      </div>

      <div style={{ padding: '16px 24px 36px' }}>
        {/* Progress */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 22,
          }}
        >
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
                width: '66%',
                height: '100%',
                background: 'var(--brand)',
                borderRadius: 6,
                transition: 'width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
          </div>
          <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-3)', whiteSpace: 'nowrap' }}>
            2 / 3
          </span>
        </div>

        <span
          className="mono"
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <BsStars size={13} /> almost there
        </span>
        <h1
          style={{
            margin: '12px 0 6px',
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
          }}
        >
          거의 다 왔어요!
        </h1>
        <p
          style={{
            margin: '0 0 24px',
            fontSize: 15,
            lineHeight: 1.5,
            color: 'var(--text-2)',
          }}
        >
          직군을 알려주시면 그에 맞는 단어를 우선 추천해드려요.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {JOB_ROLES.map((role) => {
              const active = jobRole === role.value
              return (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setJobRole(role.value as JobRole)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    textAlign: 'left',
                    background: active ? 'var(--brand-tint)' : 'var(--surface)',
                    border: `1.5px solid ${active ? 'var(--brand)' : 'var(--border)'}`,
                    borderRadius: 15,
                    padding: '15px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.16s ease',
                    boxShadow: active
                      ? '0 0 0 4px color-mix(in oklab, var(--brand) 12%, transparent)'
                      : 'none',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 11,
                      flexShrink: 0,
                      background: active ? 'var(--brand)' : 'var(--surface-2)',
                      color: active ? 'var(--brand-fg)' : 'var(--text-2)',
                      border: `1px solid ${active ? 'transparent' : 'var(--border)'}`,
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      transition: 'all 0.16s ease',
                    }}
                  >
                    {ROLE_GLYPHS[role.value] ?? '?'}
                  </span>
                  <span style={{ flex: 1 }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: 15.5,
                        fontWeight: 700,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {role.label}
                    </span>
                  </span>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      flexShrink: 0,
                      border: `2px solid ${active ? 'var(--brand)' : 'var(--border-strong)'}`,
                      background: active ? 'var(--brand)' : 'transparent',
                      color: 'var(--brand-fg)',
                      display: 'grid',
                      placeItems: 'center',
                      transition: 'all 0.16s ease',
                    }}
                  >
                    {active && <BsCheckLg size={11} />}
                  </span>
                </button>
              )
            })}
          </div>

          {error && (
            <p
              style={{
                marginTop: 16,
                fontSize: 13,
                color: 'var(--red)',
                background: 'var(--red-soft)',
                border: '1px solid color-mix(in oklab, var(--red) 30%, transparent)',
                borderRadius: 10,
                padding: '11px 14px',
              }}
            >
              {error}
            </p>
          )}

          <div style={{ marginTop: 24 }}>
            <button
              type="submit"
              disabled={!jobRole || loading}
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
                cursor: !jobRole || loading ? 'not-allowed' : 'pointer',
                opacity: !jobRole || loading ? 0.5 : 1,
                transition: 'transform 0.12s ease, opacity 0.18s',
              }}
              onMouseDown={(e) =>
                jobRole && !loading && (e.currentTarget.style.transform = 'scale(0.975)')
              }
              onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              {loading ? '저장 중...' : '시작하기'}
              {!loading && <BsArrowRight size={17} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

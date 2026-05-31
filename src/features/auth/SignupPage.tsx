import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { FIREBASE_AUTH_ERRORS, JOB_ROLES } from '@/constants'
import type { JobRole } from '@/types'
import { BsArrowLeft, BsArrowRight, BsCheckLg } from 'react-icons/bs'

function Field({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  hint,
  autoFocus,
  mono,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  error?: string
  hint?: string
  autoFocus?: boolean
  mono?: boolean
}) {
  const [focus, setFocus] = useState(false)
  return (
    <label style={{ display: 'block' }}>
      <span
        style={{
          display: 'block',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--text-2)',
          marginBottom: 7,
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--surface)',
          border: `1.5px solid ${error ? 'var(--red)' : focus ? 'var(--brand)' : 'var(--border)'}`,
          borderRadius: 12,
          padding: '0 14px',
          boxShadow: focus ? '0 0 0 4px color-mix(in oklab, var(--brand) 14%, transparent)' : 'none',
          transition: 'border-color 0.16s ease, box-shadow 0.16s ease',
        }}
      >
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: 'var(--text)',
            fontSize: 15.5,
            padding: '13px 0',
            letterSpacing: mono ? '0' : '-0.01em',
            fontFamily: mono ? 'var(--font-mono)' : 'inherit',
          }}
        />
      </div>
      {(hint || error) && (
        <span
          style={{
            display: 'block',
            fontSize: 12.5,
            marginTop: 6,
            color: error ? 'var(--red)' : 'var(--text-3)',
          }}
        >
          {error || hint}
        </span>
      )}
    </label>
  )
}

export default function SignupPage() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [jobRole, setJobRole] = useState<JobRole | ''>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!jobRole) {
      setError('직군을 선택해주세요.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await signup(email, password, jobRole as JobRole)
      navigate('/home')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ''
      setError(FIREBASE_AUTH_ERRORS[code] ?? '회원가입에 실패했습니다.')
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
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => navigate('/')}
          aria-label="뒤로"
          style={{
            width: 38,
            height: 38,
            borderRadius: 11,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
          }}
        >
          <BsArrowLeft size={18} />
        </button>
        <ThemeToggle />
      </div>

      <div style={{ padding: '24px 24px 36px' }}>
        <span
          className="mono"
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
          }}
        >
          // signup
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
          계정 만들기
        </h1>
        <p style={{ margin: '0 0 26px', fontSize: 15, color: 'var(--text-2)' }}>30초면 충분해요.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field
            label="이메일"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="dev@example.com"
            mono
            autoFocus
          />
          <Field
            label="비밀번호"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="6자 이상"
            hint="영문·숫자 조합을 권장해요"
          />

          {/* Role picker */}
          <div>
            <span
              style={{
                display: 'block',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--text-2)',
                marginBottom: 10,
              }}
            >
              직군 선택
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
                      gap: 12,
                      textAlign: 'left',
                      background: active ? 'var(--brand-tint)' : 'var(--surface)',
                      border: `1.5px solid ${active ? 'var(--brand)' : 'var(--border)'}`,
                      borderRadius: 13,
                      padding: '13px 14px',
                      cursor: 'pointer',
                      transition: 'all 0.16s ease',
                      boxShadow: active
                        ? '0 0 0 4px color-mix(in oklab, var(--brand) 12%, transparent)'
                        : 'none',
                    }}
                  >
                    <span
                      style={{
                        flex: 1,
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {role.label}
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
                      {active && <BsCheckLg size={12} strokeWidth={1} />}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {error && (
            <p
              style={{
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

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 4,
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
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              transition: 'transform 0.12s ease, opacity 0.18s',
            }}
            onMouseDown={(e) => !loading && (e.currentTarget.style.transform = 'scale(0.975)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            {loading ? '가입 중...' : '회원가입'}
            {!loading && <BsArrowRight size={17} />}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 22, fontSize: 14, color: 'var(--text-2)' }}>
          이미 계정이 있으신가요?{' '}
          <button
            onClick={() => navigate('/login')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'var(--brand)',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { FIREBASE_AUTH_ERRORS } from '@/constants'
import { BsArrowLeft, BsGithub } from 'react-icons/bs'

function Field({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  autoFocus,
  mono,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  error?: string
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
      {error && (
        <span style={{ display: 'block', fontSize: 12.5, marginTop: 6, color: 'var(--red)' }}>
          {error}
        </span>
      )}
    </label>
  )
}

export default function LoginPage() {
  const { login, loginWithGithub } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGithubLogin = async () => {
    setError('')
    setLoading(true)
    try {
      const { isNewUser } = await loginWithGithub()
      navigate(isNewUser ? '/onboarding' : '/home')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ''
      setError(FIREBASE_AUTH_ERRORS[code] ?? 'GitHub 로그인에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/home')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ''
      setError(FIREBASE_AUTH_ERRORS[code] ?? '로그인에 실패했습니다.')
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
          // login
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
          다시 만나서 반가워요
        </h1>
        <p style={{ margin: '0 0 26px', fontSize: 15, color: 'var(--text-2)' }}>
          오늘의 단어가 기다리고 있어요.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field
            label="이메일"
            type="email"
            value={email}
            onChange={(v) => { setEmail(v); setError('') }}
            placeholder="dev@example.com"
            mono
            autoFocus
          />
          <Field
            label="비밀번호"
            type="password"
            value={password}
            onChange={(v) => { setPassword(v); setError('') }}
            placeholder="••••••••"
            error={error}
          />
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
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              transition: 'transform 0.12s ease, opacity 0.18s',
            }}
            onMouseDown={(e) => !loading && (e.currentTarget.style.transform = 'scale(0.975)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            margin: '20px 0',
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>또는</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <button
          type="button"
          onClick={handleGithubLogin}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: 13,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
            fontSize: 15,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            transition: 'background 0.18s ease',
          }}
        >
          <BsGithub size={19} />
          GitHub으로 로그인
        </button>

        <div style={{ textAlign: 'center', marginTop: 22, fontSize: 14, color: 'var(--text-2)' }}>
          아직 계정이 없으신가요?{' '}
          <button
            onClick={() => navigate('/signup')}
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
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

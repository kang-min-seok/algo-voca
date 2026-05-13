import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { FIREBASE_AUTH_ERRORS } from '@/constants'

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

  const inputClass =
    'w-full px-3.5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-[15px] outline-none transition-colors focus:border-violet-600 focus:[box-shadow:0_0_0_3px_rgba(124,58,237,0.1)]'

  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-105 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-8 py-10 max-[480px]:px-5 max-[480px]:py-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-7 text-center">로그인</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-800 dark:text-slate-100">
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
              autoFocus
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-800 dark:text-slate-100">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="6자 이상"
              required
              className={inputClass}
            />
          </div>
          {error && (
            <p className="text-[13px] text-red-600 dark:text-red-400 bg-red-600/10 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="py-3 bg-violet-600 text-white border-none rounded-lg text-[15px] font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>
        <div className="flex items-center gap-3 mt-5">
          <hr className="flex-1 border-slate-200 dark:border-slate-700" />
          <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">또는</span>
          <hr className="flex-1 border-slate-200 dark:border-slate-700" />
        </div>
        <button
          type="button"
          onClick={handleGithubLogin}
          disabled={loading}
          className="mt-4 w-full flex items-center justify-center gap-2.5 py-3 border border-slate-200 dark:border-slate-700 rounded-lg text-[15px] font-medium text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 shrink-0">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub으로 로그인
        </button>
        <p className="text-center mt-5 text-sm text-slate-500 dark:text-slate-400">
          계정이 없으신가요?{' '}
          <Link to="/signup" className="text-violet-600 dark:text-violet-400 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}

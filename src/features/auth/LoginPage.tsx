import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { FIREBASE_AUTH_ERRORS } from '@/constants'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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

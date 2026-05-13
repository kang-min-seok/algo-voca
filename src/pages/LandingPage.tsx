import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { APP_NAME } from '@/constants'

export default function LandingPage() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && user) navigate('/home', { replace: true })
  }, [user, loading, navigate])

  if (loading) return null

  return (
    <div className="flex-1 flex items-center justify-center py-10 px-5 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-120 flex flex-col items-center gap-5 text-center">
        <div className="inline-block py-1.5 px-3.5 bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/30 rounded-full text-[13px] font-medium">
          개발자를 위한 영단어 학습
        </div>
        <h1 className="text-[52px] max-[480px]:text-[40px] font-extrabold text-slate-800 dark:text-slate-100 tracking-[-1.5px] leading-tight">
          {APP_NAME}
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          직군에 맞는 영단어를 AI가 추천해드려요.
          <br />
          하루 10개씩, 꾸준히 학습하세요.
        </p>
        <div className="flex gap-3 w-full max-w-80 flex-col">
          <Link
            to="/signup"
            className="block py-3.5 bg-violet-600 text-white rounded-lg text-[15px] font-semibold no-underline transition-opacity hover:opacity-90 hover:no-underline"
          >
            시작하기
          </Link>
          <Link
            to="/login"
            className="block py-3.5 bg-transparent text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-lg text-[15px] font-medium no-underline transition-[border-color] hover:border-violet-600/30 hover:no-underline"
          >
            로그인
          </Link>
        </div>
        <ul className="list-none mt-2 p-0 flex flex-col gap-3 w-full max-w-80">
          <li className="flex items-center gap-2.5 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-100">
            <span className="text-lg shrink-0">🎯</span>
            <span>직군별 맞춤 단어 추천</span>
          </li>
          <li className="flex items-center gap-2.5 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-100">
            <span className="text-lg shrink-0">🔄</span>
            <span>플래시카드 학습 방식</span>
          </li>
          <li className="flex items-center gap-2.5 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-100">
            <span className="text-lg shrink-0">📈</span>
            <span>SM-2 알고리즘 기반 복습 주기</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

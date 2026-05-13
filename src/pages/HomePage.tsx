import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { APP_NAME } from '@/constants'

export default function HomePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950">
      <header className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <span className="text-lg font-extrabold text-violet-600 dark:text-violet-400 tracking-[-0.5px]">
          {APP_NAME}
        </span>
        <button
          className="bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-3 text-[13px] text-slate-500 dark:text-slate-400 transition-[border-color,color] hover:border-red-600 hover:text-red-600 dark:hover:text-red-400"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </header>

      <main className="flex-1 flex flex-col gap-4 py-6 px-5 max-w-135 w-full mx-auto box-border">
        <div className="mb-1">
          <h1 className="text-[26px] font-bold text-slate-800 dark:text-slate-100">안녕하세요 👋</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{user?.email}</p>
        </div>

        <div className="bg-violet-600 rounded-xl py-6 px-5 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold text-white">오늘의 학습</h2>
            <p className="text-[13px] text-white/80">10개의 단어가 준비되어 있어요</p>
          </div>
          <button
            className="shrink-0 py-3 px-5 bg-white text-violet-600 border-none rounded-lg text-sm font-bold whitespace-nowrap transition-opacity hover:opacity-90"
            onClick={() => navigate('/study')}
          >
            학습 시작
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">💡 학습 팁</p>
          <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
            플래시카드 앞면을 보고 뜻을 떠올린 후, 카드를 뒤집어 확인하세요.
            솔직하게 "알고있음 / 모름"을 선택할수록 복습 효과가 높아져요.
          </p>
        </div>
      </main>
    </div>
  )
}

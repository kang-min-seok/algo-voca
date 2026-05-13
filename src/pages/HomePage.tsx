import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { getStudySessions } from '@/services/studySessionService'
import { APP_NAME } from '@/constants'
import type { StudySession } from '@/types'

function formatDate(date: Date): string {
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - date.getTime()) / 86_400_000)

  if (diffDays === 0) return '오늘'
  if (diffDays === 1) return '어제'

  return `${date.getMonth() + 1}월 ${date.getDate()}일`
}

function PercentBar({ percent }: { percent: number }) {
  const color =
    percent >= 80 ? 'bg-green-500' : percent >= 50 ? 'bg-yellow-400' : 'bg-red-400'
  return (
    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-[width] ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

function SessionRow({ session }: { session: StudySession }) {
  const [expanded, setExpanded] = useState(false)
  const unknownAnswers = session.answers.filter((a) => a.quality === 0)

  return (
    <li className="flex flex-col gap-2">
      <button
        className="w-full flex items-center justify-between gap-3 py-3 px-4 bg-slate-50 dark:bg-slate-900 rounded-lg text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {formatDate(session.completedAt)}
            </span>
            <span
              className={`text-sm font-bold shrink-0 ${
                session.percent >= 80
                  ? 'text-green-600 dark:text-green-400'
                  : session.percent >= 50
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-red-600 dark:text-red-400'
              }`}
            >
              {session.percent}%
            </span>
          </div>
          <PercentBar percent={session.percent} />
          <span className="text-[12px] text-slate-400 dark:text-slate-500">
            {session.knownWords}/{session.totalWords}개 정답
          </span>
        </div>
        <span className="text-slate-400 dark:text-slate-500 text-xs shrink-0 ml-1">
          {expanded ? '▲' : '▼'}
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-3 flex flex-col gap-1.5">
          {session.unknownWords === 0 ? (
            <p className="text-[13px] text-green-600 dark:text-green-400">
              모든 단어를 맞혔어요!
            </p>
          ) : (
            <>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-1">
                복습 필요 단어
              </p>
              {unknownAnswers.map((a) => (
                <div
                  key={a.wordId}
                  className="flex justify-between items-center py-2 px-3 bg-red-600/8 dark:bg-red-500/10 rounded-lg"
                >
                  <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-100">
                    {a.term}
                  </span>
                  <span className="text-[12px] text-slate-500 dark:text-slate-400">
                    {a.definition}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </li>
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
          <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">
            학습 내역
          </h2>

          {historyLoading ? (
            <p className="text-[13px] text-slate-400 dark:text-slate-500">불러오는 중...</p>
          ) : sessions.length === 0 ? (
            <p className="text-[13px] text-slate-400 dark:text-slate-500">
              아직 학습 기록이 없어요. 첫 학습을 시작해보세요!
            </p>
          ) : (
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {sessions.map((s) => (
                <SessionRow key={s.id} session={s} />
              ))}
            </ul>
          )}
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

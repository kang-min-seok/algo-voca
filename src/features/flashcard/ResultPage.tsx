import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { saveStudySession } from '@/services/studySessionService'
import type { StudyResult } from '@/types'

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
      .then((_sessionId) => {
        // Phase 2에서 _sessionId를 answer Function에 전달할 예정
      })
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

  const unknownWords = state.words.filter((w) =>
    state.answers.find((a) => a.wordId === w.id && a.quality === 0)
  )

  return (
    <div className="flex-1 flex justify-center py-10 px-5 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-120 flex flex-col gap-6">
        <h1 className="text-[32px] font-bold text-slate-800 dark:text-slate-100 text-center">
          학습 완료!
        </h1>
        <p className="text-[15px] text-slate-500 dark:text-slate-400 text-center -mt-4">
          오늘의 학습 결과예요
        </p>

        {saveError && (
          <p className="text-[13px] text-red-500 dark:text-red-400 text-center">
            학습 기록 저장에 실패했어요. 결과는 유지됩니다.
          </p>
        )}

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-8 shadow-sm flex flex-col items-center gap-5">
          <div className="text-[56px] font-extrabold text-violet-600 dark:text-violet-400 leading-none">
            {percent}%
          </div>
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[28px] font-bold text-green-600 dark:text-green-400">{known}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">알고있음</span>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-[28px] font-bold text-red-600 dark:text-red-400">{unknown}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">모름</span>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-[28px] font-bold text-slate-800 dark:text-slate-100">{total}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">전체</span>
            </div>
          </div>
        </div>

        {unknownWords.length > 0 && (
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-3">
              복습이 필요한 단어
            </h2>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {unknownWords.map((w) => (
                <li
                  key={w.id}
                  className="flex justify-between items-center py-2.5 px-3 bg-red-600/10 rounded-lg"
                >
                  <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                    {w.term}
                  </span>
                  <span className="text-[13px] text-slate-500 dark:text-slate-400">{w.definition}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            className="py-3.5 bg-violet-600 text-white border-none rounded-lg text-[15px] font-semibold transition-opacity hover:opacity-90"
            onClick={() => navigate('/study', { replace: true })}
          >
            다시 학습하기
          </button>
          <button
            className="py-3.5 bg-transparent text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg text-[15px] font-medium transition-[border-color,color] hover:border-violet-600/30 hover:text-slate-800 dark:hover:text-slate-100"
            onClick={() => navigate('/home', { replace: true })}
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  )
}

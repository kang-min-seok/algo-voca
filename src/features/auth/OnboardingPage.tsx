import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from './AuthContext'
import { db } from '@/services/firebase'
import { JOB_ROLES } from '@/constants'
import type { JobRole } from '@/types'

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
    <div className="flex-1 flex items-center justify-center py-6 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-105 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-8 py-10 max-[480px]:px-5 max-[480px]:py-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">거의 다 왔어요!</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-7">
          맞춤 단어 추천을 위해 직군을 선택해주세요.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-100">직군 선택</label>
            <div className="flex flex-col gap-2">
              {JOB_ROLES.map((role) => (
                <label
                  key={role.value}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer text-sm text-slate-800 dark:text-slate-100 transition-colors hover:border-violet-600/30 hover:bg-violet-600/10"
                >
                  <input
                    type="radio"
                    name="jobRole"
                    value={role.value}
                    checked={jobRole === role.value}
                    onChange={() => setJobRole(role.value as JobRole)}
                    className="accent-violet-600 w-4 h-4 shrink-0"
                  />
                  {role.label}
                </label>
              ))}
            </div>
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
            {loading ? '저장 중...' : '시작하기'}
          </button>
        </form>
      </div>
    </div>
  )
}

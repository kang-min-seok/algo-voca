import type { StatsSummary } from './useStats'

interface CardProps {
  label: string
  value: string
  sub?: string
  accent?: boolean
}

function Card({ label, value, sub, accent }: CardProps) {
  return (
    <div
      className="flex flex-col gap-1 p-4 rounded-xl"
      style={
        accent
          ? { background: 'var(--brand)', border: '1px solid var(--brand)' }
          : { background: 'var(--surface)', border: '1px solid var(--border)' }
      }
    >
      <span
        className="text-[12px] font-medium"
        style={{ color: accent ? 'rgba(255,255,255,0.7)' : 'var(--text-2)' }}
      >
        {label}
      </span>
      <span
        className="text-2xl font-bold"
        style={{ color: accent ? '#ffffff' : 'var(--text)' }}
      >
        {value}
      </span>
      {sub && (
        <span
          className="text-[11px]"
          style={{ color: accent ? 'rgba(255,255,255,0.6)' : 'var(--text-3)' }}
        >
          {sub}
        </span>
      )}
    </div>
  )
}

export default function SummaryCards({ summary }: { summary: StatsSummary }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card label="학습한 단어" value={`${summary.learnedWords}개`} accent />
      <Card
        label="전체 정답률"
        value={`${summary.overallAccuracy}%`}
        sub={`총 ${summary.totalAnswers}회 응답`}
      />
      <Card
        label="복습 대기"
        value={`${summary.overdueCount}개`}
        sub="지금 복습이 필요한 단어"
      />
      <Card
        label="총 학습 횟수"
        value={`${summary.totalAnswers}회`}
        sub="모든 단어 응답 합산"
      />
    </div>
  )
}

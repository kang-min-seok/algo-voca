import { useNavigate } from 'react-router-dom'
import { useStats } from './useStats'
import type { WordStat } from './useStats'
import SummaryCards from './SummaryCards'
import WordRankList from './WordRankList'
import type { RankItem } from './WordRankList'

function toRankItems(
  stats: WordStat[],
  metricFn: (s: WordStat) => Pick<RankItem, 'metric' | 'metricColor' | 'bar'>,
): RankItem[] {
  return stats.map(({ word, record }) => ({
    wordId: record.wordId,
    term: word.term,
    definition: word.definition,
    ...metricFn({ word, record }),
  }))
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <header
      className="flex items-center gap-3 px-5 py-4"
      style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      <button
        className="transition-colors text-lg leading-none"
        style={{ color: 'var(--text-2)' }}
        onClick={onBack}
        aria-label="뒤로 가기"
      >
        ←
      </button>
      <span className="text-base font-bold" style={{ color: 'var(--text)' }}>학습 통계</span>
    </header>
  )
}

export default function StatsPage() {
  const navigate = useNavigate()
  const stats = useStats()

  if (stats.loading) {
    return (
      <div className="flex-1 flex flex-col" style={{ background: 'var(--bg)' }}>
        <Header onBack={() => navigate('/home')} />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[13px]" style={{ color: 'var(--text-3)' }}>통계를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  if (stats.error) {
    return (
      <div className="flex-1 flex flex-col" style={{ background: 'var(--bg)' }}>
        <Header onBack={() => navigate('/home')} />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[13px]" style={{ color: 'var(--red)' }}>{stats.error}</p>
        </div>
      </div>
    )
  }

  if (stats.summary.learnedWords === 0) {
    return (
      <div className="flex-1 flex flex-col" style={{ background: 'var(--bg)' }}>
        <Header onBack={() => navigate('/home')} />
        <div className="flex-1 flex flex-col items-center justify-center gap-3 px-5">
          <p className="text-base font-semibold" style={{ color: 'var(--text)' }}>
            아직 학습 기록이 없어요
          </p>
          <p className="text-[13px] text-center" style={{ color: 'var(--text-3)' }}>
            첫 학습을 완료하면 여기서 통계를 볼 수 있어요.
          </p>
          <button
            className="mt-2 py-2.5 px-5 text-white text-sm font-bold rounded-lg"
            style={{ background: 'var(--brand)' }}
            onClick={() => navigate('/study')}
          >
            학습 시작하기
          </button>
        </div>
      </div>
    )
  }

  const mostWrongItems = toRankItems(stats.mostWrong, ({ record }) => {
    const wrong = record.totalAnswers - record.correctAnswers
    const errorRate = Math.round((wrong / record.totalAnswers) * 100)
    return {
      metric: `${wrong}회 오답`,
      metricColor: 'var(--red)',
      bar: errorRate,
    }
  })

  const errorScoreItems = toRankItems(stats.highErrorScore, ({ record }) => ({
    metric: `${Math.round(record.errorScore * 100)}%`,
    metricColor: 'var(--amber)',
    bar: Math.round(record.errorScore * 100),
  }))

  const mostStudiedItems = toRankItems(stats.mostStudied, ({ record }) => ({
    metric: `${record.totalAnswers}회`,
    metricColor: 'var(--brand)',
  }))

  const strongestItems = toRankItems(stats.strongest, ({ record }) => ({
    metric: `${record.interval}일 주기`,
    metricColor: 'var(--green)',
  }))

  const overdueItems = toRankItems(stats.overdue, ({ record }) => {
    const days = Math.floor((Date.now() - record.nextReviewDate.getTime()) / 86_400_000)
    return {
      metric: days === 0 ? '오늘' : `${days}일 지남`,
      metricColor: days > 3 ? 'var(--red)' : 'var(--amber)',
    }
  })

  return (
    <div className="flex-1 flex flex-col" style={{ background: 'var(--bg)' }}>
      <Header onBack={() => navigate('/home')} />
      <main className="flex-1 flex flex-col gap-4 py-6 px-5 max-w-135 w-full mx-auto box-border">
        <SummaryCards summary={stats.summary} />

        {overdueItems.length > 0 && (
          <WordRankList
            title="복습 대기 단어"
            description="SM-2가 지금 복습하라고 판단한 단어예요"
            items={overdueItems}
            barColor="var(--amber)"
          />
        )}

        <WordRankList
          title="가장 많이 틀린 단어"
          description="누적 오답 횟수 기준"
          items={mostWrongItems}
          emptyMessage="아직 틀린 단어가 없어요."
          barColor="var(--red)"
        />

        <WordRankList
          title="최근 틀리는 경향"
          description="최근 90일 응답 기반 오답 가중 점수 — 높을수록 최근에 자주 틀린 단어예요"
          items={errorScoreItems}
          emptyMessage="오답 점수 데이터가 없어요."
          barColor="var(--amber)"
        />

        <WordRankList
          title="가장 많이 학습한 단어"
          description="총 응답 횟수 기준"
          items={mostStudiedItems}
        />

        <WordRankList
          title="잘 기억하는 단어"
          description="SM-2 복습 주기가 긴 단어 — 오래 기억하고 있는 단어예요"
          items={strongestItems}
          emptyMessage="아직 충분히 복습하지 않았어요."
          barColor="var(--green)"
        />
      </main>
    </div>
  )
}

import { useState } from 'react'

const DEFAULT_VISIBLE = 5

export interface RankItem {
  wordId: string
  term: string
  definition: string
  metric: string
  metricColor?: string
  bar?: number // 0~100
}

interface WordRankListProps {
  title: string
  description?: string
  items: RankItem[]
  emptyMessage?: string
  barColor?: string
}

export default function WordRankList({
  title,
  description,
  items,
  emptyMessage = '해당하는 단어가 없어요.',
  barColor = 'var(--brand)',
}: WordRankListProps) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? items : items.slice(0, DEFAULT_VISIBLE)

  return (
    <div
      className="rounded-xl p-5"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <div className="mb-4">
        <h2 className="text-base font-semibold" style={{ color: 'var(--text)' }}>{title}</h2>
        {description && (
          <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-3)' }}>{description}</p>
        )}
      </div>

      {items.length === 0 ? (
        <p className="text-[13px]" style={{ color: 'var(--text-3)' }}>{emptyMessage}</p>
      ) : (
        <>
          <ul className="flex flex-col gap-2">
            {visible.map((item, idx) => (
              <li
                key={item.wordId}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg"
                style={{ background: 'var(--surface-2)' }}
              >
                <span
                  className="text-[12px] font-bold w-5 shrink-0 text-center"
                  style={{ color: 'var(--text-3)' }}
                >
                  {idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[13px] font-semibold truncate"
                      style={{ color: 'var(--text)' }}
                    >
                      {item.term}
                    </span>
                    <span
                      className="text-[12px] font-bold shrink-0"
                      style={{ color: item.metricColor ?? 'var(--brand)' }}
                    >
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[11px] truncate mt-0.5" style={{ color: 'var(--text-3)' }}>
                    {item.definition}
                  </p>
                  {item.bar !== undefined && (
                    <div
                      className="w-full h-1 rounded-full overflow-hidden mt-1.5"
                      style={{ background: 'var(--surface-3)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.bar}%`, background: barColor }}
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {items.length > DEFAULT_VISIBLE && (
            <button
              className="mt-3 w-full py-2 text-[12px] transition-colors hover:text-violet-600"
              style={{ color: 'var(--text-3)' }}
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? '접기 ▲' : `전체 보기 (${items.length}개) ▼`}
            </button>
          )}
        </>
      )}
    </div>
  )
}

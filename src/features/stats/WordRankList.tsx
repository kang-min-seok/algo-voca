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
  barColor = 'bg-violet-500',
}: WordRankListProps) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? items : items.slice(0, DEFAULT_VISIBLE)

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
        {description && (
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-0.5">{description}</p>
        )}
      </div>

      {items.length === 0 ? (
        <p className="text-[13px] text-slate-400 dark:text-slate-500">{emptyMessage}</p>
      ) : (
        <>
          <ul className="flex flex-col gap-2">
            {visible.map((item, idx) => (
              <li
                key={item.wordId}
                className="flex items-center gap-3 py-2.5 px-3 bg-slate-50 dark:bg-slate-900 rounded-lg"
              >
                <span className="text-[12px] font-bold text-slate-400 dark:text-slate-500 w-5 shrink-0 text-center">
                  {idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 truncate">
                      {item.term}
                    </span>
                    <span
                      className={`text-[12px] font-bold shrink-0 ${
                        item.metricColor ?? 'text-violet-600 dark:text-violet-400'
                      }`}
                    >
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                    {item.definition}
                  </p>
                  {item.bar !== undefined && (
                    <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-1.5">
                      <div
                        className={`h-full rounded-full ${barColor}`}
                        style={{ width: `${item.bar}%` }}
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {items.length > DEFAULT_VISIBLE && (
            <button
              className="mt-3 w-full py-2 text-[12px] text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
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

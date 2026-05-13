import type { Word } from '@/types'

interface Props {
  word: Word
  isFlipped: boolean
  onFlip: () => void
  onAnswer: (quality: 0 | 1) => void
}

const faceCls =
  'absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg flex flex-col items-center justify-center p-8 gap-3 transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]'

export default function FlashCard({ word, isFlipped, onFlip, onAnswer }: Props) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div
        className="group relative w-full max-w-120 [aspect-ratio:3/2] [perspective:1000px] cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-4 focus-visible:rounded-xl"
        onClick={onFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ' ? onFlip() : undefined)}
        aria-label={isFlipped ? '카드 앞면으로 돌리기' : '카드 뒷면 보기'}
        data-flipped={String(isFlipped)}
      >
        <div
          className={`${faceCls} group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.1),0_16px_40px_rgba(0,0,0,0.06),0_0_0_2px_rgba(124,58,237,0.3)] group-data-[flipped=true]:[transform:rotateY(-180deg)]`}
        >
          <p className="text-[36px] max-[480px]:text-[28px] font-bold text-slate-800 dark:text-slate-100 text-center leading-tight">
            {word.term}
          </p>
          <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">클릭하여 뜻 보기</p>
        </div>
        <div
          className={`${faceCls} [transform:rotateY(180deg)] group-data-[flipped=true]:[transform:rotateY(0deg)]`}
        >
          <p className="text-[28px] max-[480px]:text-[22px] font-bold text-slate-800 dark:text-slate-100 text-center">
            {word.definition}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center italic leading-relaxed">
            {word.example}
          </p>
        </div>
      </div>

      {isFlipped && (
        <div className="flex gap-4 w-full max-w-120">
          <button
            className="flex-1 py-3.5 rounded-lg text-[15px] font-semibold transition-[opacity,transform] active:scale-[0.97] bg-red-600/10 text-red-600 dark:text-red-400 border border-red-600/20 hover:bg-red-600 hover:text-white"
            onClick={(e) => {
              e.stopPropagation()
              onAnswer(0)
            }}
          >
            모름
          </button>
          <button
            className="flex-1 py-3.5 rounded-lg text-[15px] font-semibold transition-[opacity,transform] active:scale-[0.97] bg-green-600/10 text-green-600 dark:text-green-400 border border-green-600/20 hover:bg-green-600 hover:text-white"
            onClick={(e) => {
              e.stopPropagation()
              onAnswer(1)
            }}
          >
            알고있음
          </button>
        </div>
      )}
    </div>
  )
}

import { BsEye, BsArrowRepeat } from 'react-icons/bs'
import type { Word } from '@/types'

interface Props {
  word: Word
  isFlipped: boolean
  onFlip: () => void
  onAnswer: (quality: 0 | 1) => void
  index: number
  isExiting?: boolean
}

function parseDefinition(definition: string) {
  const match = definition.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
  if (match) return { main: match[1].trim(), note: match[2].trim() }
  return { main: definition, note: null }
}

function clampTermSize(term: string) {
  if (term.length > 14) return 32
  if (term.length > 11) return 38
  return 44
}

const faceBase: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: 'var(--card-radius)',
  border: '1px solid var(--border)',
  background: 'var(--surface)',
  boxShadow:
    '0 2px 4px hsl(var(--shadow-color) / 0.2), 0 26px 50px -22px hsl(var(--shadow-color) / 0.7)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}

export default function FlashCard({ word, isFlipped, onFlip, onAnswer, index, isExiting }: Props) {
  return (
    <div
      className={isExiting ? 'card-exiting' : 'card-entering'}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, width: '100%' }}
    >
      {/* 3D card */}
      <div
        style={{ perspective: '1600px', width: '100%' }}
      >
        <div
          role="button"
          aria-label={isFlipped ? '카드 앞면으로 돌리기' : '카드 뒤집기'}
          onClick={onFlip}
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onFlip()}
          style={{
            position: 'relative',
            width: '100%',
            height: 380,
            cursor: 'pointer',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.62s cubic-bezier(0.62, 0.04, 0.3, 1)',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            outline: 'none',
          }}
        >
          {/* Front face */}
          <div style={faceBase}>
            {/* Editor chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderBottom: '1px solid var(--border)',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#e06c6c', opacity: 0.85 }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#e0b54c', opacity: 0.85 }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#5bb86f', opacity: 0.85 }} />
              </div>
              <span
                className="mono"
                style={{ fontSize: 11.5, color: 'var(--text-3)', letterSpacing: '0.04em' }}
              >
                term_{String(index + 1).padStart(2, '0')}.md
              </span>
            </div>

            {/* Term */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 22px 0',
                textAlign: 'center',
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: 'var(--brand)',
                  letterSpacing: '0.14em',
                  marginBottom: 18,
                  fontWeight: 600,
                }}
              >
                {'<word />'}
              </span>
              <h2
                className="mono"
                style={{
                  margin: 0,
                  fontSize: clampTermSize(word.term),
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  wordBreak: 'break-word',
                }}
              >
                {word.term}
              </h2>
              {word.sources && word.sources.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18, justifyContent: 'center' }}>
                  {word.sources.map((s) => (
                    <span
                      key={s}
                      className="mono"
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: 'var(--text-2)',
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        borderRadius: 6,
                        padding: '3px 7px',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Hint row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '14px',
                borderTop: '1px solid var(--border)',
                fontSize: 13.5,
                fontWeight: 550,
                color: 'var(--text-3)',
                flexShrink: 0,
              }}
            >
              <BsEye size={16} />
              <span>탭하여 뜻 보기</span>
            </div>
          </div>

          {/* Back face */}
          <div
            style={{
              ...faceBase,
              transform: 'rotateY(180deg)',
              overflowY: 'auto',
            }}
          >
            {/* Chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderBottom: '1px solid var(--border)',
                flexShrink: 0,
              }}
            >
              <span
                className="mono"
                style={{ fontSize: 11.5, color: 'var(--brand)', letterSpacing: '0.05em', fontWeight: 600 }}
              >
                {word.term}
              </span>
              <span
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.04em' }}
              >
                definition
              </span>
            </div>

            {/* Content */}
            <div
              style={{
                flex: 1,
                padding: '16px 22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                overflowY: 'auto',
              }}
            >
              <div>
                <span
                  className="mono"
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-3)',
                  }}
                >
                  뜻
                </span>
                {(() => {
                  const { main, note } = parseDefinition(word.definition)
                  return (
                    <>
                      <p
                        style={{
                          margin: '8px 0 0',
                          fontSize: 19,
                          fontWeight: 650,
                          lineHeight: 1.45,
                          color: 'var(--text)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {main}
                      </p>
                      {note && (
                        <p
                          style={{
                            margin: '8px 0 0',
                            fontSize: 13.5,
                            fontWeight: 500,
                            lineHeight: 1.55,
                            color: 'var(--text-2)',
                            letterSpacing: '-0.005em',
                          }}
                        >
                          {note}
                        </p>
                      )}
                    </>
                  )
                })()}
              </div>

              {word.example && (
                <div
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--brand)',
                    borderRadius: 10,
                    padding: '13px 14px',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-3)',
                    }}
                  >
                    example
                  </span>
                  <p
                    className="mono"
                    style={{
                      margin: '8px 0 0',
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: 'var(--text)',
                    }}
                  >
                    {word.example}
                  </p>
                  {word.exampleTranslation && (
                    <p
                      style={{
                        margin: '9px 0 0',
                        fontSize: 13.5,
                        lineHeight: 1.6,
                        color: 'var(--text-2)',
                      }}
                    >
                      {word.exampleTranslation}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Hint row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '14px',
                borderTop: '1px solid var(--border)',
                fontSize: 13.5,
                fontWeight: 550,
                color: 'var(--text-3)',
                flexShrink: 0,
              }}
            >
              <BsArrowRepeat size={15} />
              <span>탭하여 단어로 돌아가기</span>
            </div>
          </div>
        </div>
      </div>

      {/* Answer buttons */}
      <div style={{ width: '100%', minHeight: 60 }}>
        {isFlipped ? (
          <div className="fade-up" style={{ display: 'flex', gap: 12 }}>
            <button
              style={{
                flex: 1,
                padding: '15px',
                borderRadius: 13,
                border: '1px solid color-mix(in oklab, var(--red) 40%, transparent)',
                background: 'var(--red-soft)',
                color: 'var(--red)',
                fontSize: 16,
                fontWeight: 650,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                cursor: 'pointer',
                transition: 'transform 0.12s ease, background 0.18s',
              }}
              onClick={(e) => { e.stopPropagation(); onAnswer(0) }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.975)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              모름
            </button>
            <button
              style={{
                flex: 1,
                padding: '15px',
                borderRadius: 13,
                border: '1px solid color-mix(in oklab, var(--green) 40%, transparent)',
                background: 'var(--green-soft)',
                color: 'var(--green)',
                fontSize: 16,
                fontWeight: 650,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                cursor: 'pointer',
                transition: 'transform 0.12s ease, background 0.18s',
              }}
              onClick={(e) => { e.stopPropagation(); onAnswer(1) }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.975)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              알고있음
            </button>
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              color: 'var(--text-3)',
              fontSize: 13.5,
              paddingTop: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 7,
            }}
          >
            <BsEye size={15} /> 카드를 탭해서 뜻을 확인하세요
          </div>
        )}
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import {
  BsLightning, BsBullseye, BsLayers, BsArrowRepeat, BsArrowRight,
} from 'react-icons/bs'

const wordPreviews = [
  { term: 'idempotent', role: 'backend', def: '멱등성 · 여러 번 실행해도 결과가 같은 성질' },
  { term: 'hydration', role: 'frontend', def: '하이드레이션 · 서버 렌더 HTML에 JS를 붙이는 과정' },
  { term: 'orchestration', role: 'devops', def: '오케스트레이션 · 컨테이너 배포를 자동 조율' },
]

function WordPreview() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % wordPreviews.length), 2600)
    return () => clearInterval(t)
  }, [])

  const w = wordPreviews[i]

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 18px 40px -24px hsl(var(--shadow-color) / 0.7)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          padding: '12px 16px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#e06c6c' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#e0b54c' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#5bb86f' }} />
        <span
          className="mono"
          style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-3)' }}
        >
          ~/algovoca
        </span>
      </div>
      <div key={i} className="fade-in" style={{ padding: '18px 18px 20px' }}>
        <div style={{ marginBottom: 12 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--brand)' }}>
            $ recommend --role={w.role}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span
            className="mono"
            style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            {w.term}
          </span>
          <span
            className="mono"
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--brand)',
              background: 'var(--brand-tint)',
              padding: '3px 8px',
              borderRadius: 6,
            }}
          >
            fit {w.role}
          </span>
        </div>
        <p style={{ margin: '10px 0 0', fontSize: 14, color: 'var(--text-2)', lineHeight: 1.5 }}>
          {w.def}
        </p>
      </div>
    </div>
  )
}

const features = [
  {
    Icon: BsBullseye,
    title: '직군별 맞춤 추천',
    desc: '프론트·백엔드·DevOps에 따라 중요한 단어를 AI가 골라줘요',
  },
  {
    Icon: BsLayers,
    title: '플래시카드 학습',
    desc: '탭 한 번으로 뜻과 실제 공식문서 예문을 확인해요',
  },
  {
    Icon: BsArrowRepeat,
    title: 'SM-2 복습 주기',
    desc: '맞힌 단어는 멀리, 틀린 단어는 가깝게 — 자동으로 관리돼요',
  },
]

export default function LandingPage() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && user) navigate('/home', { replace: true })
  }, [user, loading, navigate])

  if (loading) return null

  return (
    <div className="screen-scroll fade-in">
      {/* Top bar */}
      <div
        style={{
          padding: '20px 24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo size={19} />
        <ThemeToggle />
      </div>

      {/* Hero */}
      <div style={{ padding: '30px 24px 8px' }}>
        <div className="fade-up" style={{ animationDelay: '0.02s' }}>
          <span
            className="mono"
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--brand)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <BsLightning size={13} /> dev vocabulary engine
          </span>
        </div>
        <h1
          className="fade-up"
          style={{
            animationDelay: '0.06s',
            margin: '16px 0 0',
            fontSize: 40,
            fontWeight: 820,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: 'var(--text)',
          }}
        >
          개발자의 영단어를
          <br />
          <span style={{ color: 'var(--brand)' }}>직군에 맞게</span> 학습하세요
        </h1>
        <p
          className="fade-up"
          style={{
            animationDelay: '0.1s',
            margin: '16px 0 0',
            fontSize: 16.5,
            lineHeight: 1.55,
            color: 'var(--text-2)',
            letterSpacing: '-0.01em',
          }}
        >
          직군에 맞는 기술 영단어를 AI가 추천하고,
          <br />
          플래시카드로 학습한 뒤 복습 주기까지 챙겨드려요.
        </p>
      </div>

      {/* Word preview card */}
      <div className="fade-up" style={{ animationDelay: '0.14s', padding: '24px 24px 8px' }}>
        <WordPreview />
      </div>

      {/* Feature list */}
      <div
        style={{
          padding: '16px 24px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {features.map((f, idx) => (
          <div
            key={f.title}
            className="fade-up"
            style={{
              animationDelay: `${0.2 + idx * 0.05}s`,
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '15px 16px',
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                flexShrink: 0,
                background: 'var(--brand-tint)',
                color: 'var(--brand)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <f.Icon size={20} />
            </span>
            <div>
              <div
                style={{
                  fontSize: 15.5,
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}
              >
                {f.title}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: 'var(--text-2)',
                  marginTop: 3,
                }}
              >
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div
        style={{
          padding: '26px 24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <button
          style={{
            width: '100%',
            padding: '16px 22px',
            borderRadius: 13,
            border: 'none',
            background: 'var(--brand)',
            color: '#fff',
            fontSize: 16.5,
            fontWeight: 650,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            boxShadow: '0 4px 12px -6px color-mix(in oklab, var(--brand) 60%, transparent)',
            transition: 'transform 0.12s ease, box-shadow 0.18s ease',
          }}
          onClick={() => navigate('/signup')}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.975)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        >
          시작하기 <BsArrowRight size={18} />
        </button>
        <button
          style={{
            width: '100%',
            padding: '16px 22px',
            borderRadius: 13,
            border: '1px solid var(--border)',
            background: 'var(--surface-2)',
            color: 'var(--text)',
            fontSize: 16.5,
            fontWeight: 650,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            transition: 'transform 0.12s ease',
          }}
          onClick={() => navigate('/login')}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.975)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'none')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        >
          이미 계정이 있어요 · 로그인
        </button>
      </div>
    </div>
  )
}

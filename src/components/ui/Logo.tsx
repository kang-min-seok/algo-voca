interface LogoProps {
  size?: number
}

export function Logo({ size = 22 }: LogoProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <span
        style={{
          width: size + 8,
          height: size + 8,
          borderRadius: (size + 8) * 0.32,
          background: 'var(--brand)',
          color: 'var(--brand-fg)',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: size * 0.62,
          letterSpacing: '-0.04em',
          boxShadow: '0 4px 14px -4px color-mix(in oklab, var(--brand) 60%, transparent)',
          flexShrink: 0,
        }}
      >
        {'</>'}
      </span>
      <span
        style={{
          fontSize: size,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
        }}
      >
        Algo<span style={{ color: 'var(--brand)' }}>Voca</span>
      </span>
    </span>
  )
}

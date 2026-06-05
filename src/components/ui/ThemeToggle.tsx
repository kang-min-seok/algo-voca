import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { dark, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="테마 전환"
      style={{
        width: 38,
        height: 38,
        borderRadius: 11,
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        color: 'var(--text-2)',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
        flexShrink: 0,
      }}
    >
      {dark ? <BsSun size={17} /> : <BsMoon size={17} />}
    </button>
  )
}

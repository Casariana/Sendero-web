import { useEffect, useState } from 'react'
import { getThemeForCurrentMonth, SPLASH_DURATION_MS } from '../data/monthlyThemes'
import { markSplashShown } from '../utils/splashStorage'
import MonthSpinner from './MonthSpinner'

const particleMap = {
  newYear: ['✦', '✧', '✦'],
  neighborhood: ['♥', '♥', '♥'],
  spring: ['✿', '✿', '✿'],
  children: ['★', '★', '★'],
  mother: ['♥', '♥', '♥'],
  father: ['♥', '♥', '♥'],
  independence: ['★', '★', '★'],
  flowers: ['✿', '✿', '✿'],
  friendship: ['♥', '♥', '♥'],
  health: ['♥', '♥', '♥'],
  christmasStart: ['✦', '✦', '✦'],
  christmas: ['✦', '✧', '✦'],
}

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const theme = getThemeForCurrentMonth()

  useEffect(() => {
    const timer = setTimeout(() => {
      markSplashShown()
      setVisible(false)
      onComplete()
    }, SPLASH_DURATION_MS)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!visible) return null

  return (
    <div className="splash-screen fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-cream px-6">
      <div className="splash-glow splash-glow-left absolute h-64 w-64 rounded-full bg-copper/10 blur-3xl" />
      <div className="splash-glow splash-glow-right absolute h-48 w-48 rounded-full bg-forest/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="/logo.jpeg"
          alt="Logo Sendero de la 80"
          className="mb-6 h-20 w-auto object-contain sm:h-28"
        />

        <div key={theme.month} className="splash-theme-enter flex flex-col items-center">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            {theme.label}
          </p>
          <h2 className="mb-2 text-xl font-bold text-copper-dark sm:text-2xl">
            {theme.title}
          </h2>
          <p className="mb-8 max-w-xs text-sm leading-relaxed text-ink-muted sm:max-w-md">
            {theme.subtitle}
          </p>

          <MonthSpinner
            icon={theme.icon}
            accent={theme.accent}
            particles={particleMap[theme.icon]}
          />
        </div>

        <p className="mt-8 text-sm font-medium text-ink-muted" role="status" aria-live="polite">
          Cargando portal...
        </p>

        <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-cream-dark sm:w-64">
          <div
            className="splash-progress h-full rounded-full bg-gradient-to-r from-copper via-bronze to-forest"
            style={{ animationDuration: `${SPLASH_DURATION_MS}ms` }}
          />
        </div>
      </div>
    </div>
  )
}

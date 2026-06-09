const SPLASH_STORAGE_KEY = 'sendero-splash-last-shown'
const SPLASH_INTERVAL_MS = 12 * 60 * 60 * 1000

export function getLastSplashShown() {
  const raw = localStorage.getItem(SPLASH_STORAGE_KEY)
  const parsed = Number(raw)
  return Number.isFinite(parsed) ? parsed : null
}

export function markSplashShown() {
  localStorage.setItem(SPLASH_STORAGE_KEY, String(Date.now()))
}

export function shouldShowSplash() {
  const lastShown = getLastSplashShown()
  if (lastShown === null) return true
  return Date.now() - lastShown >= SPLASH_INTERVAL_MS
}

export function getHoursUntilNextSplash() {
  const lastShown = getLastSplashShown()
  if (lastShown === null) return 0
  const remaining = SPLASH_INTERVAL_MS - (Date.now() - lastShown)
  return Math.max(0, remaining / (60 * 60 * 1000))
}

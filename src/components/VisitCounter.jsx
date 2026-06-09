import { useEffect, useState } from 'react'

const NAMESPACE = 'sendero-de-la-80'
const COUNTER_NAME = 'visitas'
const API_BASE = `https://api.counterapi.dev/v1/${NAMESPACE}/${COUNTER_NAME}`
const SESSION_HIT_KEY = 'sendero-visit-recorded'

function formatCount(value) {
  return new Intl.NumberFormat('es-CO').format(value)
}

function parseCount(data) {
  const raw = data?.count ?? data?.value
  const parsed = Number(raw)
  return Number.isFinite(parsed) ? parsed : null
}

export default function VisitCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const alreadyCounted = sessionStorage.getItem(SESSION_HIT_KEY)
    const endpoint = alreadyCounted ? API_BASE : `${API_BASE}/up`

    fetch(endpoint, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        const value = parseCount(data)
        if (value !== null) {
          setCount(value)
          if (!alreadyCounted) {
            sessionStorage.setItem(SESSION_HIT_KEY, 'true')
          }
        }
      })
      .catch(() => {
        setCount(null)
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="flex items-center gap-2 text-xs text-ink-muted sm:text-sm">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest-light shadow-[0_0_4px_rgba(64,145,108,0.6)]" />
      <span>
        Visitas:{' '}
        <strong className="font-semibold text-ink">
          {count !== null ? formatCount(count) : '—'}
        </strong>
      </span>
    </div>
  )
}

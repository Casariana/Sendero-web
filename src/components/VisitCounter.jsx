import { useEffect, useState } from 'react'

const SESSION_HIT_KEY = 'sendero-visit-recorded'

const API = {
  get: import.meta.env.DEV
    ? 'https://api.counterapi.dev/v1/sendero-de-la-80/visitas/'
    : '/.netlify/functions/visits',
  hit: import.meta.env.DEV
    ? 'https://api.counterapi.dev/v1/sendero-de-la-80/visitas/up'
    : '/.netlify/functions/visits?action=hit',
}

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
    let cancelled = false

    async function loadVisits() {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_HIT_KEY)

        if (!alreadyCounted) {
          const hitResponse = await fetch(API.hit)
          if (hitResponse.ok) {
            const hitData = await hitResponse.json()
            const hitValue = parseCount(hitData)
            if (!cancelled && hitValue !== null) {
              setCount(hitValue)
              sessionStorage.setItem(SESSION_HIT_KEY, 'true')
              return
            }
          }
        }

        const getResponse = await fetch(API.get)
        if (getResponse.ok) {
          const getData = await getResponse.json()
          const getValue = parseCount(getData)
          if (!cancelled && getValue !== null) {
            setCount(getValue)
          }
        }
      } catch {
        if (!cancelled) setCount(null)
      }
    }

    loadVisits()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-cream-dark bg-cream px-2 py-1 text-[11px] text-ink-muted sm:gap-2 sm:px-2.5 sm:py-1.5 sm:text-xs md:text-sm">
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-forest-light shadow-[0_0_4px_rgba(64,145,108,0.6)]" />
      <span className="whitespace-nowrap">
        Visitas:{' '}
        <strong className="font-semibold text-ink">
          {count !== null ? formatCount(count) : '—'}
        </strong>
      </span>
    </div>
  )
}

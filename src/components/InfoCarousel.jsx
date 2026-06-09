import { useCallback, useEffect, useState } from 'react'
import { announcements } from '../data/announcements'

const INTERVAL_MS = 6000

export default function InfoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index) => {
    setActiveIndex((index + announcements.length) % announcements.length)
  }, [])

  const goNext = useCallback(() => {
    goTo(activeIndex + 1)
  }, [activeIndex, goTo])

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1)
  }, [activeIndex, goTo])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(goNext, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [isPaused, goNext])

  const active = announcements[activeIndex]

  return (
    <section id="informacion" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="section-label mb-2">Comunicados</p>
          <h2 className="section-heading text-2xl font-bold sm:text-3xl">
            Publicaciones informativas
          </h2>
        </div>

        <div
          className="card-surface relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div key={active.id} className="animate-fade-in">
            <div className="relative h-56 sm:h-72 md:h-80">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="mb-3 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">
                  {active.tag}
                </span>
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {active.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  {active.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-cream-dark bg-white px-4 py-3 sm:px-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Publicación anterior"
              className="rounded-lg p-2 text-ink-muted transition hover:bg-cream hover:text-copper"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {announcements.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir a publicación ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-6 bg-copper'
                      : 'w-2 bg-cream-dark hover:bg-copper-light'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente publicación"
              className="rounded-lg p-2 text-ink-muted transition hover:bg-cream hover:text-copper"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

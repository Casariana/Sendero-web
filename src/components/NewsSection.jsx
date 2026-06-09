import { news } from '../data/news'

function formatDate(dateStr) {
  return new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr + 'T12:00:00'))
}

export default function NewsSection() {
  return (
    <section id="noticias" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="section-label mb-2">Actualidad</p>
          <h2 className="section-heading text-2xl font-bold sm:text-3xl">Noticias</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="card-surface flex flex-col rounded-2xl p-6 transition hover:shadow-md"
            >
              <time
                dateTime={item.date}
                className="mb-3 text-xs font-semibold uppercase tracking-wide text-copper"
              >
                {formatDate(item.date)}
              </time>
              <h3 className="mb-3 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-muted">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

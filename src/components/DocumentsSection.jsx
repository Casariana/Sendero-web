const documents = [
  {
    id: 1,
    title: 'Reglamento de Propiedad Horizontal',
    description:
      'Documento oficial que regula la convivencia, derechos y deberes de los propietarios y residentes del conjunto.',
    file: '/documents/reglamento-propiedad-horizontal.pdf',
    type: 'PDF',
  },
]

export default function DocumentsSection() {
  return (
    <section id="documentos" className="scroll-mt-28 bg-cream-dark/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="section-label mb-2">Archivos</p>
          <h2 className="section-heading text-2xl font-bold sm:text-3xl">Documentos</h2>
        </div>

        <div className="grid gap-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="card-surface flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cream-dark bg-cream">
                  <svg
                    className="h-6 w-6 text-copper"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{doc.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{doc.description}</p>
                  <span className="mt-2 inline-block text-xs text-ink-muted/70">
                    Formato: {doc.type}
                  </span>
                </div>
              </div>

              <a
                href={doc.file}
                download
                className="btn-secondary shrink-0 rounded-xl px-5 py-2.5 text-center text-sm font-semibold transition"
              >
                Descargar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

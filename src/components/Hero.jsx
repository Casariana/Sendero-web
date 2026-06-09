export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-28 border-b border-cream-dark bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="section-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Bienvenidos a{' '}
          <span className="text-copper">Sendero de la 80</span>
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Portal oficial de la unidad residencial. Aquí encontrará información
          actualizada, noticias, documentos y canales de contacto con la
          administración.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#informacion"
            className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold transition"
          >
            Ver publicaciones
          </a>
          <a
            href="#documentos"
            className="btn-outline rounded-xl px-6 py-3 text-sm font-semibold transition"
          >
            Ver documentos
          </a>
        </div>
      </div>
    </section>
  )
}

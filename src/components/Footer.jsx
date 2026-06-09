export default function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <img
          src="/logo.jpeg"
          alt="Logo Sendero de la 80"
          className="mx-auto mb-4 h-16 w-auto object-contain"
        />
        <p className="text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Sendero de la 80. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-xs text-ink-muted/70">
          Unidad residencial — Portal informativo para residentes y visitantes.
        </p>
      </div>
    </footer>
  )
}

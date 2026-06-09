import VisitCounter from './VisitCounter'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#pagos', label: 'Pagos' },
  { href: '#informacion', label: 'Información' },
  { href: '#noticias', label: 'Noticias' },
  { href: '#documentos', label: 'Documentos' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark bg-white/95 shadow-sm backdrop-blur-md">
      <div className="border-b border-cream-dark bg-cream px-4 py-1.5">
        <div className="mx-auto flex max-w-6xl justify-end">
          <VisitCounter />
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex shrink-0 items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Logo Sendero de la 80"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-cream hover:text-copper-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="flex gap-1 overflow-x-auto md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-muted transition hover:bg-cream hover:text-copper-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

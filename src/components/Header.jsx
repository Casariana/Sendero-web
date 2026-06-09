import { useEffect, useState } from 'react'
import VisitCounter from './VisitCounter'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#pagos', label: 'Pagos' },
  { href: '#informacion', label: 'Información' },
  { href: '#noticias', label: 'Noticias' },
  { href: '#documentos', label: 'Documentos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative sticky top-0 z-50 border-b border-cream-dark bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:py-3">
        <a href="#inicio" className="flex shrink-0 items-center" onClick={closeMenu}>
          <img
            src="/logo.jpeg"
            alt="Logo Sendero de la 80"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <VisitCounter />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cream-dark bg-cream text-ink transition hover:border-copper/30 hover:text-copper-dark lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav className="mx-auto hidden max-w-6xl items-center justify-center gap-1 border-t border-cream-dark px-4 py-2 lg:flex">
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

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-ink/20 lg:hidden"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-50 border-b border-cream-dark bg-white px-4 py-3 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-ink-muted transition hover:bg-cream hover:text-copper-dark"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}

const icons = {
  newYear: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <rect x="14" y="12" width="36" height="40" rx="4" fill="#f0ebe3" stroke="#a34b2d" strokeWidth="2" />
      <rect x="14" y="12" width="36" height="12" rx="4" fill="#a34b2d" />
      <text x="32" y="38" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">1</text>
      <path d="M46 8l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#c4622d" />
    </svg>
  ),
  neighborhood: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <path d="M10 40h16v-18l6-8 6 8v18h16v-24l-22-16-22 16z" fill="#2d6a4f" />
      <path d="M28 44h8v12h-8z" fill="#a34b2d" />
      <path d="M22 24c0-3 2-5 4-5s4 2 4 5" fill="none" stroke="#c4622d" strokeWidth="2" />
      <path d="M34 24c0-3 2-5 4-5s4 2 4 5" fill="#c4622d" />
    </svg>
  ),
  spring: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <path d="M32 52V30" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="32" cy="22" rx="14" ry="10" fill="#40916c" />
      <circle cx="22" cy="18" r="4" fill="#2d6a4f" />
      <circle cx="42" cy="18" r="4" fill="#2d6a4f" />
      <circle cx="32" cy="12" r="4" fill="#2d6a4f" />
    </svg>
  ),
  children: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <circle cx="32" cy="48" r="10" fill="#c4622d" />
      <path d="M32 38V18M32 18L22 28M32 18l10 10" stroke="#a34b2d" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="14" r="5" fill="#40916c" />
      <circle cx="44" cy="14" r="5" fill="#40916c" />
    </svg>
  ),
  mother: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <circle cx="32" cy="28" r="8" fill="#c4622d" />
      <path d="M20 48c0-8 5-14 12-14s12 6 12 14" fill="#a34b2d" />
      <circle cx="22" cy="20" r="5" fill="#e879a9" />
      <circle cx="32" cy="16" r="5" fill="#f472b6" />
      <circle cx="42" cy="20" r="5" fill="#e879a9" />
      <circle cx="27" cy="24" r="5" fill="#fbcfe8" />
      <circle cx="37" cy="24" r="5" fill="#fbcfe8" />
    </svg>
  ),
  father: (
    <svg viewBox="0 0 64 64" className="h-11 w-11 text-copper-dark" fill="currentColor" aria-hidden="true">
      <path d="M28 6h8l2 8-2 3 6 38H24L30 17l-2-3 2-8z" />
      <ellipse cx="32" cy="14" rx="7" ry="4" fill="#2d6a4f" />
    </svg>
  ),
  independence: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <rect x="12" y="14" width="40" height="28" rx="3" fill="#fbbf24" />
      <rect x="12" y="24" width="40" height="8" fill="#1d4ed8" />
      <rect x="12" y="32" width="40" height="10" fill="#b91c1c" />
      <path d="M32 10l3 8h8l-6 5 2 8-7-5-7 5 2-8-6-5h8z" fill="#1e293b" />
    </svg>
  ),
  flowers: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <rect x="28" y="36" width="8" height="18" rx="2" fill="#a34b2d" />
      <circle cx="32" cy="24" r="6" fill="#f472b6" />
      <circle cx="22" cy="28" r="6" fill="#fb7185" />
      <circle cx="42" cy="28" r="6" fill="#f43f5e" />
      <circle cx="26" cy="18" r="6" fill="#ec4899" />
      <circle cx="38" cy="18" r="6" fill="#db2777" />
      <circle cx="32" cy="26" r="5" fill="#fbbf24" />
    </svg>
  ),
  friendship: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <rect x="16" y="22" width="32" height="28" rx="4" fill="#c4622d" />
      <rect x="16" y="22" width="32" height="10" rx="4" fill="#a34b2d" />
      <path d="M32 22v-8M28 18h8" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 38h16M24 44h12" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  health: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="#ec4899" strokeWidth="4" />
      <path
        d="M32 18c-6 0-10 4-10 10 0 8 10 16 10 16s10-8 10-16c0-6-4-10-10-10z"
        fill="#f472b6"
      />
      <path d="M18 40c4 4 8 6 14 6M46 40c-4 4-8 6-14 6" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  christmasStart: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <path d="M32 8l4 10h10l-8 6 3 10-9-7-9 7 3-10-8-6h10z" fill="#fbbf24" />
      <path d="M20 44h24" stroke="#a34b2d" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="50" r="4" fill="#fbbf24" />
      <circle cx="32" cy="52" r="4" fill="#ef4444" />
      <circle cx="44" cy="50" r="4" fill="#22c55e" />
    </svg>
  ),
  christmas: (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <path d="M32 6l6 14h14l-11 9 4 14-13-9-13 9 4-14-11-9h14z" fill="#fbbf24" />
      <path d="M24 48h16v10H24z" fill="#a34b2d" />
      <circle cx="18" cy="22" r="3" fill="#fef08a" className="splash-twinkle" />
      <circle cx="48" cy="26" r="3" fill="#fef08a" className="splash-twinkle-delayed" />
      <circle cx="40" cy="14" r="2" fill="#fef08a" className="splash-twinkle" />
    </svg>
  ),
}

const ringColors = {
  copper: 'border-t-copper border-r-bronze',
  forest: 'border-t-forest border-r-forest-light',
  patriot: 'border-t-yellow-400 border-r-blue-600',
  pink: 'border-t-pink-400 border-r-pink-500',
  gold: 'border-t-yellow-400 border-r-amber-500',
}

export default function MonthSpinner({ icon, accent = 'copper', particles }) {
  const ringClass = ringColors[accent] ?? ringColors.copper

  return (
    <div className="splash-spinner relative flex h-24 w-24 items-center justify-center">
      <div
        className={`splash-spinner-ring absolute inset-0 rounded-full border-4 border-cream-dark ${ringClass}`}
      />
      <div className="relative flex items-center justify-center">{icons[icon]}</div>
      {particles?.map((particle, index) => (
        <span
          key={particle}
          className={`splash-particle splash-particle-${(index % 3) + 1}`}
        >
          {particle}
        </span>
      ))}
    </div>
  )
}

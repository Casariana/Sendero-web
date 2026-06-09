export const monthlyThemes = [
  {
    month: 1,
    label: 'Enero · Nuevo comienzo',
    title: '¡Feliz Año Nuevo!',
    subtitle: 'Un nuevo año para vivir mejor en nuestra comunidad de Sendero de la 80.',
    icon: 'newYear',
    accent: 'copper',
  },
  {
    month: 2,
    label: 'Febrero · Buena vecindad',
    title: 'Amor por el barrio',
    subtitle: 'En el conjunto construimos hogar con respeto, saludo y buena convivencia.',
    icon: 'neighborhood',
    accent: 'forest',
  },
  {
    month: 3,
    label: 'Marzo · Eterna primavera',
    title: 'Ciudad de flores',
    subtitle: 'Medellín florece y nuestro conjunto se llena de vida, verde y alegría.',
    icon: 'spring',
    accent: 'forest',
  },
  {
    month: 4,
    label: 'Abril · Mes del niño',
    title: 'Niño y recreación',
    subtitle: 'Celebramos a los más pequeños y los espacios donde juegan y crecen en familia.',
    icon: 'children',
    accent: 'copper',
  },
  {
    month: 5,
    label: 'Mayo · Día de la madre',
    title: '¡Feliz Día de la Madre!',
    subtitle: 'Gracias a quienes con amor sostienen el hogar y la vida en comunidad.',
    icon: 'mother',
    accent: 'copper',
  },
  {
    month: 6,
    label: 'Junio · Día del padre',
    title: '¡Feliz Día del Padre!',
    subtitle: 'Con cariño para quienes construyen hogar y comunidad en Sendero de la 80.',
    icon: 'father',
    accent: 'copper',
  },
  {
    month: 7,
    label: 'Julio · Independencia',
    title: '20 de julio',
    subtitle: 'Celebramos nuestra patria y el descanso en familia en el hogar y el conjunto.',
    icon: 'independence',
    accent: 'patriot',
  },
  {
    month: 8,
    label: 'Agosto · Feria de las Flores',
    title: 'Silleteros y tradición',
    subtitle: 'El orgullo antioqueño florece en Medellín y en el corazón de nuestra comunidad.',
    icon: 'flowers',
    accent: 'forest',
  },
  {
    month: 9,
    label: 'Septiembre · Amor y amistad',
    title: 'Quien tiene un amigo...',
    subtitle: '...tiene un tesoro. Celebramos la amistad entre vecinos y familias del conjunto.',
    icon: 'friendship',
    accent: 'copper',
  },
  {
    month: 10,
    label: 'Octubre · Cuidémonos',
    title: 'Salud y comunidad',
    subtitle: 'Nos cuidamos entre vecinos y apoyamos el bienestar de quienes nos rodean.',
    icon: 'health',
    accent: 'pink',
  },
  {
    month: 11,
    label: 'Noviembre · Luces de Navidad',
    title: 'Llega la Navidad',
    subtitle: 'Medellín empieza a brillar y el espíritu navideño llega a Sendero de la 80.',
    icon: 'christmasStart',
    accent: 'gold',
  },
  {
    month: 12,
    label: 'Diciembre · Novena y alumbrados',
    title: '¡Feliz Navidad!',
    subtitle: 'Novenas, luces y familia: celebramos juntos el cierre del año en comunidad.',
    icon: 'christmas',
    accent: 'gold',
  },
]

export const SPLASH_DURATION_MS = 5000

export function getThemeForCurrentMonth() {
  const month = new Date().getMonth() + 1
  return monthlyThemes.find((theme) => theme.month === month) ?? monthlyThemes[0]
}

// -----------------------------------------------------------------------------
// Categorías de soluciones. Alimentan el desplegable de la navegación y generan
// una página por categoría en /soluciones/<slug> con los proyectos relacionados.
// Cada proyecto (src/content/projects/*.md) declara a qué categorías pertenece
// en su campo `categories` (usa estos `slug`).
// -----------------------------------------------------------------------------

export interface Category {
  slug: string;
  /** Nombre completo (título de la página). */
  label: string;
  /** Etiqueta corta (chip / desplegable). */
  short: string;
  /** Descripción de una línea para la cabecera de la página y el SEO. */
  tagline: string;
  /** Icono decorativo. */
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'gps',
    label: 'GPS y localización',
    short: 'GPS',
    icon: '📍',
    tagline:
      'Rastreo y trazabilidad de largo alcance, incluso donde no llega la cobertura móvil.',
  },
  {
    slug: 'iot',
    label: 'IoT y firmware',
    short: 'IoT',
    icon: '📡',
    tagline:
      'Dispositivos conectados y sistemas embebidos: del microcontrolador al dato útil.',
  },
  {
    slug: 'techsport',
    label: 'TechSport & wearables',
    short: 'TechSport',
    icon: '🏃',
    tagline:
      'Tecnología para deporte y salud: medir el movimiento y convertirlo en métricas fiables.',
  },
  {
    slug: 'web',
    label: 'Diseño web',
    short: 'Web Design',
    icon: '🖥️',
    tagline:
      'Webs rápidas y paneles de datos para tu producto conectado o tu negocio.',
  },
  {
    slug: 'seo',
    label: 'SEO / GEO',
    short: 'SEO',
    icon: '🔎',
    tagline:
      'Posicionamiento en buscadores tradicionales y en los nuevos asistentes de IA.',
  },
];

export function categoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

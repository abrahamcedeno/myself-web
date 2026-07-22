// -----------------------------------------------------------------------------
// Configuración central del sitio.
// Edita AQUÍ tus datos (email, LinkedIn, GitHub) y se actualizan en toda
// la web (cabecera, contacto, footer y datos estructurados JSON-LD).
// -----------------------------------------------------------------------------

export const site = {
  name: 'Abraham Cedeño',
  // Nombre legal completo (coincide con LinkedIn y GitHub). Se usa en el SEO
  // (título, autor, datos estructurados) para posicionar también por él.
  legalName: 'Ashlyn Abraham Cedeño Holguín',
  role: 'Ingeniero de Software Embebido & IoT',
  location: 'Barcelona, España',
  locale: 'es_ES',
  // Titular / propuesta de valor (aparece en el hero y en las meta descripciones).
  tagline:
    'Firmware en C/C++, sistemas en tiempo real y fusión de sensores para dispositivos conectados. Del microcontrolador al dato útil.',
  seoDescription:
    'Ashlyn Abraham Cedeño Holguín (Abraham Cedeño), ingeniero de software embebido e IoT freelance en Barcelona. Firmware C/C++ sobre ARM Cortex-M, FreeRTOS, drivers de sensores, BLE y fusión de sensores. Del microcontrolador al dato fiable.',

  // Datos de contacto reales.
  email: 'abraham.ceho@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/ashlyn-abraham-cede%C3%B1o-holguin-9410a0200/',
  github: 'https://github.com/abrahamcedeno',

  // Palabras clave objetivo (SEO/GEO, mercado España).
  keywords: [
    'Ashlyn Abraham Cedeño Holguín',
    'Abraham Cedeño',
    'Abraham Cedeño ingeniero',
    'ingeniero freelance firmware',
    'desarrollo firmware C/C++',
    'ingeniero IoT Barcelona',
    'freelance sistemas embebidos España',
    'programador de microcontroladores',
    'desarrollo BLE',
    'fusión de sensores',
    'Edge AI',
    'FreeRTOS',
    'ARM Cortex-M',
  ],

  // Disponibilidad mostrada en el hero.
  available: true,
  availableText: 'Disponible para proyectos freelance · Barcelona / remoto',
} as const;

export type SiteConfig = typeof site;

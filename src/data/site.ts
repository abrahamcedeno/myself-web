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
  role: 'Desarrollador freelance: webs, sistemas embebidos y paneles de control',
  location: 'Barcelona, España',
  locale: 'es_ES',
  // Titular (aparece en el hero y en las meta descripciones).
  tagline:
    'Hago páginas web, dispositivos electrónicos y paneles de control para negocios y startups. Precio cerrado, proceso claro y una sola persona responsable de principio a fin.',
  seoDescription:
    'Abraham Cedeño (Ashlyn Abraham Cedeño Holguín), desarrollador e ingeniero freelance en Barcelona. Páginas web con SEO y GEO, sistemas embebidos (firmware C/C++, BLE, PCB) y paneles de control a medida. Tres niveles de precio por servicio.',

  // Datos de contacto reales.
  email: 'abraham.ceho@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/ashlyn-abraham-cede%C3%B1o-holguin-9410a0200/',
  github: 'https://github.com/abrahamcedeno',
  moovia: 'https://moovia.app',

  // URL de la aplicación web de Google Apps Script que recibe el formulario
  // (termina en /exec). Instrucciones en apps-script/formulario.gs.
  // Mientras esté vacía, el formulario usa FormSubmit como respaldo.
  formEndpoint: 'https://script.google.com/macros/s/AKfycby9z10_b-rQR0IUPNsz3GnzpjfBZQ2aBF8yBDiCac9GBgUX1RWVsXKbgspeF7NuAubnjw/exec',

  // Palabras clave objetivo (SEO, búsquedas de selección).
  keywords: [
    'Ashlyn Abraham Cedeño Holguín',
    'Abraham Cedeño',
    'Abraham Cedeño freelance',
    'desarrollador freelance Barcelona',
    'desarrollo web Barcelona',
    'ingeniero sistemas embebidos freelance',
    'desarrollo firmware freelance',
    'paneles de control a medida',
    'ingeniero IoT Barcelona',
    'FreeRTOS',
    'ARM Cortex-M4',
    'BLE GATT',
    'fusión de sensores',
    'diseño PCB KiCad',
    'seguridad IoT',
    'MOOVIA',
  ],

  // Disponibilidad mostrada en el hero.
  available: true,
  availableText: 'Aceptando nuevos proyectos · Barcelona y remoto',
} as const;

export type SiteConfig = typeof site;

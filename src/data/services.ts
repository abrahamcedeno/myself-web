// -----------------------------------------------------------------------------
// Servicios freelance. Cada entrada genera su propia página en
// /servicios/<slug> (SEO + GEO) y una tarjeta en la home y en /servicios.
//
// Precios: "desde", en euros, IVA no incluido. Calculados sobre una tarifa
// de referencia de ~25 €/h. Para cambiar un precio, edítalo solo aquí.
// -----------------------------------------------------------------------------

export interface Tier {
  name: string;
  /** Precio "desde" en euros (número, para los datos estructurados). */
  price: number;
  /** Para quién es este nivel, en una frase. */
  ideal: string;
  includes: string[];
  delivery: string;
  revisions: string;
  featured?: boolean;
}

export interface Step {
  title: string;
  body: string;
  /** Qué tienes en la mano al acabar el paso. */
  output: string;
}

export interface Proof {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Nombre corto (nav, tarjetas). */
  name: string;
  icon: string;
  /** <title> y og:title. */
  metaTitle: string;
  /** meta description (≈150-160 caracteres). */
  metaDescription: string;
  /** H1 de la página. */
  h1: string;
  /** Subtítulo bajo el H1. */
  lead: string;
  /** Resumen de una línea para las tarjetas. */
  card: string;
  /** Respuesta directa y citable (GEO): qué es, para quién, dónde, cuánto. */
  answer: string;
  forWho: string[];
  tiers: Tier[];
  process: Step[];
  proof: Proof[];
  stack: string[];
  faqs: Faq[];
  keywords: string[];
  /** Nombre del tipo de servicio para schema.org (serviceType). */
  serviceType: string;
  ogImage: string;
}

export const services: Service[] = [
  // ---------------------------------------------------------------------------
  {
    slug: 'desarrollo-web',
    name: 'Páginas web',
    icon: '🖥️',
    metaTitle: 'Desarrollo de páginas web en Barcelona — desde 150 € | Abraham Cedeño',
    metaDescription:
      'Diseño y desarrollo de páginas web rápidas, con SEO y GEO para aparecer en Google y en asistentes de IA. Landing desde 150 €, web profesional y web con panel. Barcelona.',
    h1: 'Desarrollo de páginas web rápidas y que se encuentran',
    lead:
      'Webs para negocios y profesionales que cargan al instante, se ven bien en el móvil y están preparadas para aparecer en Google y en asistentes como ChatGPT o Gemini.',
    card: 'Landings, webs de empresa y webs con panel de administración. Con SEO y GEO de serie.',
    answer:
      'Abraham Cedeño es un desarrollador web freelance en Barcelona que crea páginas web estáticas y rápidas (Astro, Next.js, Firebase) con SEO local y GEO (optimización para buscadores de IA). Trabaja con negocios de toda España en remoto. Una landing cuesta desde 150 €, una web profesional de hasta 5 páginas desde 550 € y una web con panel de administración desde 1.200 € (IVA no incluido).',
    forWho: [
      'Negocios locales que necesitan aparecer cuando alguien busca su servicio en su zona.',
      'Profesionales y estudios que quieren una web propia, no una plantilla genérica.',
      'Empresas que necesitan gestionar contenido, reservas o un catálogo sin depender de nadie.',
    ],
    tiers: [
      {
        name: 'Landing',
        price: 150,
        ideal: 'Para tener presencia online rápido y con buena imagen.',
        includes: [
          '1 página con hasta 3 secciones',
          'Diseño adaptado a móvil, tablet y ordenador',
          'Botón de contacto, WhatsApp o formulario',
          'SEO básico: títulos, descripciones y sitemap',
          'Publicación en hosting gratuito (Firebase)',
        ],
        delivery: '3–5 días',
        revisions: '1 ronda de cambios',
      },
      {
        name: 'Web profesional',
        price: 550,
        ideal: 'Para negocios que quieren captar clientes desde Google.',
        includes: [
          'Hasta 5 páginas (inicio, servicios, sobre nosotros, contacto…)',
          'SEO local y GEO: datos estructurados para Google y buscadores de IA',
          'Alta en Google Search Console y analítica',
          'Optimización de velocidad (Lighthouse 90+)',
          'Aviso legal y política de privacidad (RGPD)',
        ],
        delivery: '2 semanas',
        revisions: '2 rondas de cambios',
        featured: true,
      },
      {
        name: 'Web + panel',
        price: 1200,
        ideal: 'Para gestionar tú mismo el contenido, las reservas o el catálogo.',
        includes: [
          'Todo lo de la web profesional',
          'Panel de administración con usuario y contraseña',
          'Base de datos: catálogo, reservas, clientes o noticias',
          'Formación para que lo uses sin depender de mí',
          '30 días de soporte tras la publicación',
        ],
        delivery: '3–4 semanas',
        revisions: '3 rondas de cambios',
      },
    ],
    process: [
      {
        title: 'Llamada inicial',
        body: '30 minutos, gratis y sin compromiso. Me cuentas tu negocio, a quién quieres llegar y qué webs te gustan.',
        output: 'Objetivos claros',
      },
      {
        title: 'Propuesta cerrada',
        body: 'Te envío por escrito el alcance, el precio final y las fechas. Sin sorpresas a mitad de proyecto.',
        output: 'Presupuesto y calendario',
      },
      {
        title: 'Estructura y diseño',
        body: 'Defino las páginas, los textos clave y el estilo visual. Lo validas antes de programar nada.',
        output: 'Diseño aprobado',
      },
      {
        title: 'Desarrollo',
        body: 'Programo la web y te paso un enlace de vista previa para que la revises en tu móvil mientras avanza.',
        output: 'Web funcionando en pruebas',
      },
      {
        title: 'Publicación y SEO',
        body: 'La publico con tu dominio, configuro Search Console y compruebo velocidad, móvil y datos estructurados.',
        output: 'Web publicada e indexable',
      },
      {
        title: 'Entrega y soporte',
        body: 'Te entrego accesos y código. Quedo disponible para dudas y pequeños ajustes durante las primeras semanas.',
        output: 'Web 100 % tuya',
      },
    ],
    proof: [
      {
        title: 'Web para un estudio de tatuajes',
        body: 'Web de portfolio y contacto para un tatuador, publicada y optimizada para móvil.',
        href: 'https://kearttt.com',
        linkLabel: 'kearttt.com',
      },
      {
        title: 'CRM web para una empresa de automoción',
        body: 'Publicación del stock de vehículos en abierto: +20 contactos por semana desde la primera semana.',
        href: '/#resultados',
        linkLabel: 'Ver caso',
      },
      {
        title: 'Esta misma web',
        body: 'Astro estática en Firebase, con datos estructurados por página. Coste de hosting: 0 €.',
      },
    ],
    stack: ['Astro', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'JSON-LD', 'Search Console'],
    faqs: [
      {
        q: '¿Cuánto cuesta una página web?',
        a: 'Una landing de una página cuesta desde 150 €, una web profesional de hasta 5 páginas desde 550 € y una web con panel de administración desde 1.200 €, IVA no incluido. Antes de empezar recibes un presupuesto cerrado.',
      },
      {
        q: '¿Qué es el GEO y por qué lo incluyes?',
        a: 'GEO (Generative Engine Optimization) es preparar la web para que asistentes de IA como ChatGPT, Gemini o Perplexity la entiendan y la citen. Se consigue con textos claros y factuales y con datos estructurados (schema.org).',
      },
      {
        q: '¿Tengo que pagar hosting o mantenimiento cada mes?',
        a: 'No necesariamente. Las webs estáticas se publican en hosting gratuito (Firebase), así que el único coste fijo es el dominio, unos 10–15 € al año. El mantenimiento es opcional.',
      },
      {
        q: '¿Trabajas solo en Barcelona?',
        a: 'Estoy en Barcelona, pero trabajo en remoto con clientes de toda España. Las reuniones se hacen por videollamada.',
      },
    ],
    keywords: [
      'desarrollo web Barcelona',
      'diseño de páginas web',
      'desarrollador web freelance',
      'página web para negocio',
      'web con SEO local',
      'GEO optimización IA',
      'landing page precio',
    ],
    serviceType: 'Desarrollo web',
    ogImage: '/og/desarrollo-web.png',
  },

  // ---------------------------------------------------------------------------
  {
    slug: 'desarrollo-sistemas-embebidos',
    name: 'Sistemas embebidos',
    icon: '⚙️',
    metaTitle: 'Desarrollo de sistemas embebidos y firmware freelance — Barcelona | Abraham Cedeño',
    metaDescription:
      'Firmware en C/C++ para ESP32 y ARM Cortex-M, FreeRTOS, BLE, sensores IMU y diseño de PCB en KiCad. Del prototipo al dispositivo validado. Ingeniero embebido freelance en Barcelona.',
    h1: 'Desarrollo de sistemas embebidos: firmware, sensores y PCB',
    lead:
      'Convierto una idea de dispositivo en hardware que funciona: firmware en C/C++, comunicación Bluetooth, sensores y la placa electrónica, validado con medidas reales.',
    card: 'Firmware C/C++, FreeRTOS, BLE, drivers de sensores y PCB en KiCad. Del prototipo al producto.',
    answer:
      'Abraham Cedeño es un ingeniero de sistemas embebidos freelance en Barcelona. Desarrolla firmware en C/C++ para ESP32 y ARM Cortex-M con FreeRTOS, comunicación BLE, drivers de sensores (IMU, SPI, I2C, UART), fusión de sensores y PCB en KiCad. Es fundador de MOOVIA, un wearable con firmware y PCB propios. Un diagnóstico cuesta desde 50 €, una funcionalidad o driver desde 500 € y un dispositivo completo desde 1.100 € (IVA no incluido).',
    forWho: [
      'Startups de hardware que necesitan sacar adelante el firmware o la electrónica de su producto.',
      'Empresas industriales que quieren conectar una máquina o un sensor.',
      'Equipos con un prototipo que falla y necesitan a alguien que lo depure con instrumentación.',
    ],
    tiers: [
      {
        name: 'Diagnóstico',
        price: 50,
        ideal: 'Para desbloquear un problema concreto de tu firmware o tu placa.',
        includes: [
          'Revisión de tu código o de tu esquemático/layout',
          'Depuración de 1 problema concreto',
          'Informe con la causa y la solución propuesta',
        ],
        delivery: '2–3 días',
        revisions: '1 consulta de seguimiento',
      },
      {
        name: 'Funcionalidad',
        price: 500,
        ideal: 'Para añadir una pieza a un producto que ya existe.',
        includes: [
          '1 driver o funcionalidad: sensor por SPI/I2C/UART, servicio BLE GATT o tarea FreeRTOS',
          'Probado en tu hardware o en placa de desarrollo',
          'Código fuente documentado en Git',
          'Medidas de validación (osciloscopio / analizador lógico)',
        ],
        delivery: '1–2 semanas',
        revisions: '2 rondas de ajustes',
        featured: true,
      },
      {
        name: 'Dispositivo completo',
        price: 1100,
        ideal: 'Para llevar una idea a un prototipo funcional.',
        includes: [
          'Arquitectura: microcontrolador, sensores y comunicación',
          'Firmware completo: drivers, BLE, FreeRTOS y bajo consumo',
          'PCB en KiCad (2–4 capas) con BOM, Gerbers y modelo 3D',
          'Puesta en marcha (bring-up) y validación con datos reales',
          'Documentación técnica para tu equipo o fabricante',
        ],
        delivery: '3–6 semanas',
        revisions: '3 rondas de ajustes',
      },
    ],
    process: [
      {
        title: 'Requisitos',
        body: 'Qué tiene que medir o controlar el dispositivo, con qué batería, a qué coste y con qué hardware cuentas ya.',
        output: 'Lista de requisitos',
      },
      {
        title: 'Arquitectura',
        body: 'Elijo microcontrolador, sensores y comunicación, y estimo consumo y coste. Lo decidimos juntos antes de escribir código.',
        output: 'Documento de arquitectura y presupuesto',
      },
      {
        title: 'Prototipo',
        body: 'Firmware sobre placa de desarrollo o tu hardware para probar que la idea funciona cuanto antes.',
        output: 'Prototipo que funciona',
      },
      {
        title: 'Firmware y PCB',
        body: 'Desarrollo el firmware definitivo y, si hace falta, diseño la placa en KiCad lista para fabricar.',
        output: 'Código y ficheros de fabricación',
      },
      {
        title: 'Validación',
        body: 'Mido con osciloscopio, analizador lógico y datos reales. Si no lo puedo medir, no lo doy por bueno.',
        output: 'Informe de pruebas',
      },
      {
        title: 'Entrega',
        body: 'Código en Git, documentación y ficheros de fabricación. Todo es tuyo y tu equipo puede continuar sin mí.',
        output: 'Transferencia completa',
      },
    ],
    proof: [
      {
        title: 'MOOVIA — wearable para entrenamiento de fuerza',
        body: 'PCB de 4 capas, firmware FreeRTOS en ARM Cortex-M4F y BLE: 999 Hz sin perder un paquete y 0,03 m/s de diferencia frente a un sistema comercial.',
        href: 'https://moovia.app',
        linkLabel: 'moovia.app',
      },
      {
        title: 'Driver de IMU desde cero',
        body: 'Driver del ICM-42688-P por SPI con FIFO y lecturas en ráfaga a 1 kHz.',
        href: '/#resultados',
        linkLabel: 'Ver caso',
      },
      {
        title: 'Fusión de sensores',
        body: 'Madgwick, Kalman y ZUPT para convertir una señal ruidosa en velocidad, altura y aceleración fiables.',
      },
    ],
    stack: ['C / C++', 'FreeRTOS', 'ESP32', 'ARM Cortex-M', 'BLE / GATT', 'SPI · I2C · UART', 'MQTT', 'KiCad'],
    faqs: [
      {
        q: '¿Con qué microcontroladores trabajas?',
        a: 'Principalmente ESP32 y ARM Cortex-M (Microchip, STM32, Nordic), en bare-metal o con FreeRTOS. Si tu proyecto usa otra familia, lo valoramos en la llamada inicial.',
      },
      {
        q: '¿Puedes diseñar también la placa electrónica?',
        a: 'Sí. Diseño PCB de 2 y 4 capas en KiCad con esquemático, BOM, Gerbers y modelo 3D, y hago la puesta en marcha con el prototipo montado.',
      },
      {
        q: '¿Cuánto cuesta desarrollar el firmware de un dispositivo?',
        a: 'Depende del alcance: un diagnóstico desde 50 €, una funcionalidad o driver desde 500 € y un dispositivo completo desde 1.100 €, IVA no incluido. Tras la fase de requisitos recibes un presupuesto cerrado.',
      },
      {
        q: '¿El código y los diseños son míos?',
        a: 'Sí. Al terminar recibes el código fuente, los ficheros de KiCad y la documentación, con todos los derechos de uso.',
      },
    ],
    keywords: [
      'desarrollo firmware freelance',
      'ingeniero sistemas embebidos Barcelona',
      'programación ESP32',
      'firmware ARM Cortex-M',
      'desarrollo BLE',
      'diseño PCB KiCad',
      'drivers de sensores IMU',
    ],
    serviceType: 'Desarrollo de sistemas embebidos',
    ogImage: '/og/desarrollo-sistemas-embebidos.png',
  },

  // ---------------------------------------------------------------------------
  {
    slug: 'paneles-de-control',
    name: 'Paneles de control',
    icon: '📊',
    metaTitle: 'Paneles de control y dashboards a medida — empresas e IoT | Abraham Cedeño',
    metaDescription:
      'Paneles de control web a medida: KPIs de tu negocio o datos de tus dispositivos IoT en tiempo real, con usuarios, alertas y exportación. Desde 300 €. Freelance en Barcelona.',
    h1: 'Paneles de control a medida para tu negocio o tus dispositivos',
    lead:
      'Reúno los datos que hoy tienes repartidos en Excel, en aplicaciones o en tus sensores, y los convierto en un panel web donde ves de un vistazo lo que importa.',
    card: 'Dashboards de KPIs y paneles IoT en tiempo real, con usuarios, alertas y exportación.',
    answer:
      'Abraham Cedeño desarrolla paneles de control (dashboards) web a medida en Barcelona: cuadros de mando de KPIs a partir de Excel, Google Sheets o bases de datos, y paneles IoT con datos de dispositivos en tiempo real por MQTT o BLE. Ha construido cuadros de mando para el Ayuntamiento de Barcelona y una clínica dental. Un panel esencial cuesta desde 300 €, uno profesional desde 900 € y un panel IoT en tiempo real desde 1.800 € (IVA no incluido).',
    forWho: [
      'Negocios que pierden horas cada semana juntando datos en hojas de cálculo.',
      'Empresas con sensores o máquinas que quieren ver su estado en tiempo real.',
      'Equipos que necesitan compartir indicadores con varias personas y permisos distintos.',
    ],
    tiers: [
      {
        name: 'Panel esencial',
        price: 300,
        ideal: 'Para ver tus indicadores clave sin abrir un Excel.',
        includes: [
          '1 fuente de datos: Excel, Google Sheets o base de datos',
          'Hasta 6 indicadores o gráficas',
          'Filtros por fecha y categoría',
          'Acceso web desde ordenador y móvil',
        ],
        delivery: '1 semana',
        revisions: '1 ronda de cambios',
      },
      {
        name: 'Panel profesional',
        price: 900,
        ideal: 'Para que todo el equipo trabaje con los mismos datos.',
        includes: [
          'Varias fuentes de datos combinadas',
          'Usuarios con login y permisos por rol',
          'Actualización automática de los datos',
          'Exportación a PDF y Excel',
          'Alertas por email cuando un indicador se sale de rango',
        ],
        delivery: '2–3 semanas',
        revisions: '2 rondas de cambios',
        featured: true,
      },
      {
        name: 'Panel IoT en tiempo real',
        price: 1800,
        ideal: 'Para monitorizar y controlar dispositivos conectados.',
        includes: [
          'Recepción de datos de dispositivos por MQTT, BLE o HTTP',
          'Base de datos de series temporales',
          'Gráficas en directo y alertas por umbral',
          'Envío de órdenes a los dispositivos desde el panel',
          'Despliegue y documentación',
        ],
        delivery: '4–6 semanas',
        revisions: '3 rondas de cambios',
      },
    ],
    process: [
      {
        title: 'Preguntas de negocio',
        body: 'Qué decisiones quieres tomar con el panel y qué indicadores las responden. Empiezo por ahí, no por las gráficas.',
        output: 'Lista de KPIs',
      },
      {
        title: 'Inventario de datos',
        body: 'Dónde están los datos, cómo de limpios están y cómo conectarlos de forma segura.',
        output: 'Mapa de fuentes',
      },
      {
        title: 'Boceto con tus datos',
        body: 'Una primera versión con datos reales para validar que el panel responde a tus preguntas.',
        output: 'Maqueta validada',
      },
      {
        title: 'Desarrollo',
        body: 'Conexión automática a las fuentes, usuarios, permisos y alertas. Revisas el avance en un enlace de pruebas.',
        output: 'Panel funcionando',
      },
      {
        title: 'Puesta en marcha',
        body: 'Despliegue, alta de usuarios y una sesión de formación para tu equipo.',
        output: 'Panel en producción',
      },
      {
        title: 'Evolución',
        body: 'Cuando el panel se usa aparecen nuevas preguntas. Puedo añadir indicadores o fuentes cuando lo necesites.',
        output: 'Mejora continua (opcional)',
      },
    ],
    proof: [
      {
        title: 'Ayuntamiento de Barcelona',
        body: 'Cuadro de mando presupuestario con Power BI, VBA y ETL en Python: indicadores que tardaban días, en segundos.',
        href: '/#resultados',
        linkLabel: 'Ver caso',
      },
      {
        title: 'Cuadro de mando para una clínica dental',
        body: 'CRM y panel económico que conecta pacientes, servicios y proveedores: de 4 horas semanales a al instante.',
        href: '/#resultados',
        linkLabel: 'Ver caso',
      },
      {
        title: 'Panel en tiempo real de MOOVIA',
        body: 'Panel web que recibe la telemetría del sensor por MQTT y la muestra en directo.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Python', 'MQTT', 'Power BI', 'SQL'],
    faqs: [
      {
        q: '¿Qué diferencia hay entre un panel de control y un Excel?',
        a: 'Un panel de control se actualiza solo a partir de tus fuentes de datos, se consulta desde cualquier dispositivo y muestra únicamente los indicadores que importan, con permisos por usuario. Un Excel hay que actualizarlo a mano.',
      },
      {
        q: '¿Puedo conectar mis sensores o máquinas al panel?',
        a: 'Sí. El panel IoT recibe datos de dispositivos por MQTT, BLE o HTTP. Como también desarrollo firmware, puedo encargarme del dispositivo y del panel.',
      },
      {
        q: '¿Cuánto cuesta un dashboard a medida?',
        a: 'Un panel esencial cuesta desde 300 €, un panel profesional con usuarios y alertas desde 900 € y un panel IoT en tiempo real desde 1.800 €, IVA no incluido.',
      },
      {
        q: '¿Mis datos están seguros?',
        a: 'El acceso es con usuario y contraseña y permisos por rol, y los datos se alojan en servicios con cifrado. Si hay datos personales, el diseño cumple el RGPD.',
      },
    ],
    keywords: [
      'panel de control a medida',
      'dashboard a medida',
      'cuadro de mando empresa',
      'dashboard IoT tiempo real',
      'panel de KPIs',
      'desarrollo dashboard Barcelona',
    ],
    serviceType: 'Desarrollo de paneles de control',
    ogImage: '/og/paneles-de-control.png',
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const formatPrice = (n: number) =>
  `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} €`;

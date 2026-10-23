// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL pública del sitio (Firebase Hosting, proyecto "freelancer-1de06").
// Firebase da dos URLs equivalentes: .web.app y .firebaseapp.com; usamos la
// primera como canónica. Si algún día usas dominio propio, cámbiala aquí.
// Sirve para sitemap, canonical y Open Graph.
const SITE = 'https://freelancer-1de06.web.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Salida 100% estática: sin servidor que mantener, coste ~0 y máximo rendimiento.
  output: 'static',
  // Sin barra final: coincide con firebase.json (trailingSlash: false) y con
  // las URLs canónicas, para que Google no vea duplicados.
  trailingSlash: 'never',
  // Preparado para futura versión en inglés sin rehacer nada.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/soluciones') && !page.includes('/gracias') })],
  vite: {
    plugins: [tailwindcss()],
  },
});

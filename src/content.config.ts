import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de proyectos del portfolio (Content Layer API de Astro).
// Cada caso vive en src/content/projects/*.md — añadir uno nuevo es crear un
// archivo más; la home lo recoge automáticamente ordenado por `order`.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Contexto → Reto → Qué hice → Resultado (resumen para la tarjeta).
    summary: z.string(),
    // Etiquetas de tecnología mostradas en la tarjeta.
    tags: z.array(z.string()),
    // Variante de color de la portada: 1 | 2 | 3 | 4.
    cover: z.number().min(1).max(4).default(1),
    // Enlaces opcionales (repo / demo). Si no hay, no se muestran.
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Orden de aparición (menor primero).
    order: z.number().default(99),
    // Marca los casos aún no publicables (no se renderizan).
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };

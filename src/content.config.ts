import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de proyectos / resultados (Content Layer API de Astro).
// Cada caso vive en src/content/projects/*.md — añadir uno nuevo es crear un
// archivo más; la home lo recoge automáticamente ordenado por `order`.
// Regla de contenido: SOLO datos reales y verificables, sin porcentajes.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Organización / contexto (p. ej. "MOOVIA · proyecto propio").
    org: z.string().default(''),
    // Mi rol en el proyecto.
    role: z.string().default(''),
    // Periodo (texto libre: "Ago 2025 — actualidad").
    period: z.string().default(''),
    // Resumen corto: el reto en una o dos frases.
    summary: z.string(),
    // Cifras conseguidas (lo primero que ve selección).
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    // Qué hice, en frases de acción.
    did: z.array(z.string()).default([]),
    // Etiquetas de tecnología.
    tags: z.array(z.string()),
    // Heredado de la versión anterior (ya no se usa en la home).
    categories: z.array(z.string()).default([]),
    // Variante de color: 1 | 2 | 3 | 4.
    cover: z.number().min(1).max(4).default(1),
    // Enlace opcional (web del proyecto, repo...).
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Orden de aparición (menor primero).
    order: z.number().default(99),
    // Casos no publicables (no se renderizan).
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };

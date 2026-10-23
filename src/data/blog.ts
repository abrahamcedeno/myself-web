import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Artículos publicados, del más reciente al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

/** Minutos de lectura aproximados (220 palabras/min). */
export const readingTime = (body = '') =>
  Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220));

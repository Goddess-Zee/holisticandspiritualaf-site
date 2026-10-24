import { getCollection, type CollectionEntry } from 'astro:content';

export type Writing = CollectionEntry<'writings'>;

export async function getWritings(): Promise<Writing[]> {
  const all = await getCollection('writings', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const readingTime = (body = '') => `${Math.max(1, Math.round(body.split(/\s+/).length / 230))} min read`;

export const formatLongDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export const excerpt = (body = '', n = 180) => {
  const text = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_#>`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length <= n ? text : text.slice(0, text.lastIndexOf(' ', n)) + '…';
};

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

// Cover image for cards: the essay's own image, or a themed image from the site.
const themeCovers: Record<string, string> = {
  'Ancestral Lineage': '/images/home/ancestral-women.webp',
  'Shadow Work & Healing': '/images/consultations/altar-tools.webp',
  'The Sovereign Feminine': '/images/consultations/sovereign-matriarch.webp',
  'Spiritual Practice': '/images/meditations/circle.webp',
};
export const coverFor = (w: Writing) => w.data.image ?? themeCovers[w.data.theme];

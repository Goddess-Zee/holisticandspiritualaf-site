import { XMLParser } from 'fast-xml-parser';
import { podcast } from '../data/site';
import snapshot from '../data/episodes-snapshot.json';

export type Episode = {
  title: string;
  number?: number;
  date: string; // ISO
  link: string;
  audio?: string;
  image?: string;
  summary: string;
  seconds?: number;
};

const PODBEAN = 'https://holisticandspiritualaf.podbean.com';

// Snapshot of the feed (Oct 24, 2026) — used only if Podbean can't be reached at build time.
// Columns: title, episode number (0 = none), date, Podbean slug, duration in seconds.
const fallback: Episode[] = (snapshot as [string, number, string, string, number][]).map(([title, n, d, slug, s]) => ({
  title,
  number: n || undefined,
  date: `${d}T22:00:00Z`,
  link: `${PODBEAN}/e/${slug}/`,
  summary: '',
  seconds: s,
}));

let cache: Episode[] | null = null;
let showArtwork: string | undefined;

const strip = (html = '') =>
  String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n)) + '…');

const toSeconds = (v: unknown): number | undefined => {
  if (v == null || v === '') return undefined;
  const parts = String(v).split(':').map(Number);
  if (parts.some(Number.isNaN)) return undefined;
  return parts.reduce((acc, p) => acc * 60 + p, 0);
};

export function parseFeed(xml: string): Episode[] {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '', parseTagValue: false });
  const doc = parser.parse(xml);
  showArtwork = doc?.rss?.channel?.['itunes:image']?.href ?? doc?.rss?.channel?.image?.url;
  const items = ([] as any[]).concat(doc?.rss?.channel?.item ?? []);
  return items.map((it) => {
    const n = Number(it['itunes:episode']);
    return {
      title: strip(it.title),
      number: n > 0 ? n : undefined,
      date: new Date(it.pubDate).toISOString(),
      link: String(it.link || PODBEAN),
      audio: it.enclosure?.url,
      image: it['itunes:image']?.href,
      summary: clip(strip(it['itunes:summary'] || it.description), 300),
      seconds: toSeconds(it['itunes:duration']),
    };
  });
}

export async function getEpisodes(): Promise<Episode[]> {
  if (cache) return cache;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch(podcast.feedUrl, { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) throw new Error(`Feed HTTP ${res.status}`);
    cache = parseFeed(await res.text());
    if (!cache.length) throw new Error('Feed had no items');
  } catch (err) {
    console.warn('[podcast] Feed unavailable, using snapshot:', (err as Error).message);
    cache = fallback;
  }
  return cache;
}

// The show cover from Podbean (updates on the site when you change it there); local copy as backup.
export async function getShowArtwork(): Promise<string> {
  await getEpisodes();
  return showArtwork ?? podcast.artwork;
}

export const episodeCount = (eps: Episode[]) => eps.reduce((m, e) => Math.max(m, e.number ?? 0), 0) || eps.length;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/New_York' });

export const formatDuration = (s?: number) => {
  if (!s) return '';
  const h = Math.floor(s / 3600);
  const m = Math.round((s % 3600) / 60);
  return h ? `${h} hr ${m} min` : `${m || 1} min`;
};

export const shortTitle = (t: string) =>
  t
    .replace(/^(ep\.?|episode)\s*[:;.]?\s*\d+\s*[:.\-–]?\s*/i, '')
    .replace(/\s*(w\/|with)\s*Goddess Zee\s*$/i, '')
    .replace(/^[”"]|[”"]$/g, '')
    .trim();

export const isSolo = (t: string) => /goddess zee\s*$/i.test(t.trim());

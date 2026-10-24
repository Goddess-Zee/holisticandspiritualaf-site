import { defineMiddleware } from 'astro:middleware';

// Every link that leaves the site (Amazon, Gumroad, Cal.com, Eventbrite, socials…)
// opens in a new tab, so visitors never lose their place here.
// Runs at build time for every page, and in `npm run dev`.
const SITE_HOSTS = ['holisticandspiritualaf.com', 'www.holisticandspiritualaf.com'];

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') ?? '').includes('text/html')) return res;

  const html = await res.text();
  const out = html.replace(/<a\b([^>]*?)\bhref="(https?:\/\/[^"]+)"([^>]*)>/gi, (tag, before, href, after) => {
    let host = '';
    try { host = new URL(href).hostname; } catch { return tag; }
    if (SITE_HOSTS.includes(host) || /\btarget=/.test(tag)) return tag;
    const attrs = `${before}href="${href}"${after}`.replace(/\s*\brel="[^"]*"/i, '');
    return `<a${attrs} target="_blank" rel="noopener">`;
  });

  return new Response(out, { status: res.status, statusText: res.statusText, headers: res.headers });
});

# Holistic and Spiritual AF — website

The site for [holisticandspiritualaf.com](https://holisticandspiritualaf.com), built with [Astro](https://astro.build) and hosted on Netlify.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

| What | File |
|---|---|
| Brand name, nav, social links, sessions & prices, books, courses, events, meditations, MailerLite IDs | `src/data/site.ts` |
| Essays (one markdown file each) | `src/content/writings/` |
| Podcast episodes | Pulled from the Podbean feed at build time (`src/lib/podcast.ts`); `src/data/episodes-snapshot.json` is the backup if the feed is down |
| Colors, fonts, layout | `src/styles/global.css` |
| Old GoDaddy URL redirects | `public/_redirects` |
| Images | `public/images/<page>/` — a missing image shows a labelled placeholder |

**Publish an essay:** open its file in `src/content/writings/` and change `draft: true` to `draft: false`.
**Add a class:** add an entry to `events` in `src/data/site.ts` (past events move to "Past classes" automatically).

## Netlify setup

1. In Netlify: **Add new site → Import from GitHub → `holisticandspiritualaf-site`**. Build settings come from `netlify.toml`.
2. **Forms:** the "Be a Guest" form is detected automatically. Turn on email notifications under *Site configuration → Forms*.
3. **New podcast episodes:** create a build hook (*Site configuration → Build & deploy → Build hooks*) and trigger it daily (a scheduled Netlify function, Zapier, or cron-job.org) so the latest episode appears without a code change.
4. **Domain:** add `holisticandspiritualaf.com` under *Domain management*. Keep any existing email (MX) records exactly as they are when moving DNS.

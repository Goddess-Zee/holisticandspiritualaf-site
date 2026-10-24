import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Essays imported from the Substack export. Set `draft: false` to publish one.
const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    theme: z.enum(['Ancestral Lineage', 'Shadow Work & Healing', 'The Sovereign Feminine', 'Spiritual Practice']),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    bookCandidate: z.boolean().default(false),
    source: z.string().optional(),
  }),
});

export const collections = { writings };

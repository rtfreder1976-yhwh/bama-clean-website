import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string(),
    service: z.string(),
    city: z.string().optional(),
    canonical: z.string(),
    schema: z.string().optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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

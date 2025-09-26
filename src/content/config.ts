import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
      tldr: z.string().optional(),
    }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    location: z.string().optional(),
    summary: z.string().optional(),
    technologies: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    status: z.enum(['planned', 'in-progress', 'completed']).default('planned'),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const quotes = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    source: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  work,
  projects,
  quotes,
};

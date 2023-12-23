import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
    github: z.string(),
    demo: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
};

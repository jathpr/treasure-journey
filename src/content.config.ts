import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journey = defineCollection({
  loader: glob({ base: "./src/content/journey", pattern: "**/*.md" }),
  schema: z.object({
    nodeId: z.string(),
    locale: z.enum(["be", "ru", "en"]),
    title: z.string(),
    order: z.number().int().positive(),
    summary: z.string(),
    linksTo: z.array(z.string()).default([]),
  }),
});

export const collections = { journey };

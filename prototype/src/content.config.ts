import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// A content file's path is its identity: theory/be.md means node "theory", language "be".
const journey = defineCollection({
  loader: glob({ base: "./src/content/journey", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    linksTo: z.array(z.string()).default([]),
  }),
});

export const collections = { journey };

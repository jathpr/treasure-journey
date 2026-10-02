import { defineConfig } from "astro/config";

// GitHub Pages serves this repository from /treasure-map; local development uses /.
const repository = process.env.GITHUB_REPOSITORY;
const [, repositoryName] = repository?.split("/") ?? [];

export default defineConfig({
  base: repositoryName ? `/${repositoryName}` : "/",
});

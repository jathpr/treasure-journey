import { defineConfig } from "astro/config";

// GitHub Pages serves this repository from /treasure-map; local development uses /.
const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split("/") ?? [];
const isUserSite = repositoryName === `${owner}.github.io`;

export default defineConfig({
  base: repositoryName && !isUserSite ? `/${repositoryName}` : "/",
});

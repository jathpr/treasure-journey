import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split("/") ?? [];
const isUserSite = repositoryName === `${owner}.github.io`;

export default defineConfig({
  ...(owner && { site: `https://${owner}.github.io` }),
  base: owner && repositoryName && !isUserSite ? `/${repositoryName}` : "/",
});

# Personal Astro site

This is a small, static Astro site about a personal spiritual journey.

The site is published from the `dev` branch at https://jathpr.github.io/.

## Run it

From this folder:

```sh
npm install
npm run dev
```

Astro prints a local URL, usually `http://localhost:4321`. Stop the server with `Ctrl+C`.

```sh
npm run build
npm run preview
```

`build` creates static HTML in `dist/`. `preview` serves that built version locally.

## How to find your way around

- `src/pages/` controls URLs. Astro creates a route from each file name. `[slug].astro` is a dynamic route; its `getStaticPaths()` function supplies the concrete pages Astro writes during the build.
- `src/content/journey/<node>/<language>.md` holds the text and outgoing graph links for a node. For example, `theory/be.md`, `theory/ru.md`, and `theory/en.md` are translations of one page.
- `src/content.config.ts` defines the shape of content Astro accepts. The node name and language come from the file path, so there is no duplicated `order` field.
- `src/components/` contains reusable pieces of page UI. The `.astro` file frontmatter (between `---`) runs on the server/build; the markup below it creates HTML.
- A `<style>` block in an Astro component is scoped to that component by default. `src/styles/global.css` holds only rules that are shared by the whole site.
- `src/layouts/SiteLayout.astro` is the shared page frame. Each page puts its own content in the layout's `<slot />`.
- `src/lib/` contains TypeScript used by pages and components: language labels/URLs, and graph loading/validation.
- Every language has an explicit URL prefix: `/be/`, `/ru/`, and `/en/`. A request to `/` (or an old node URL without a language prefix) redirects using the browser's preferred language; if it is not Belarusian, Russian, or English, the site defaults to Belarusian. Static hosting cannot inspect the request's `Accept-Language` header at build time, so this selection happens in the browser.

To add a page, create its language files under one node folder, then add that node's ID to the `linksTo` list on the page that should link to it. The graph edges, rather than a separate numeric order, define navigation.

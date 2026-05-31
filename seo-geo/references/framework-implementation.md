# Framework Implementation

Use this reference when writing code changes.

## Next.js App Router Default

Use official metadata file conventions and server-rendered routes:

- `app/layout.tsx`: default metadata, `metadataBase`, site title template, icons, manifest, default OG/Twitter settings.
- `generateMetadata()` in dynamic routes: page-specific title, description, canonical, OG image, robots, alternates, and locale.
- `app/sitemap.ts`: generate canonical indexable URLs. Split sitemaps when near platform limits or when large dynamic catalogs require route handlers.
- `app/robots.ts`: allow/disallow rules and sitemap URL.
- `opengraph-image.tsx` or static OG assets: useful for shareability and SERP preview quality.
- JSON-LD: emit a `<script type="application/ld+json">` from a server component near the page content. Keep schema generation typed and close to page data.

Prefer static generation or server rendering for pages that must be indexed. Avoid relying on client-only fetching for primary content, links, metadata, or schema.

## Next.js Checklist

- `metadataBase` is set to the production origin.
- Each page has a unique title and description.
- Canonicals use production absolute URLs.
- `alternates.languages` is correct when multilingual.
- `robots` metadata does not accidentally noindex production pages.
- Dynamic routes produce deterministic metadata and 404/redirect invalid slugs.
- Sitemap excludes drafts, noindex pages, expired products, filtered duplicates, and non-canonical URLs.
- OG image URLs are absolute and crawlable.
- JSON-LD is serialized safely with `<` escaped if using raw injection.
- Server components fetch page data once and reuse it for metadata/schema when possible.

## Astro

Use Astro for mostly static content and marketing sites:

- Generate static pages where possible.
- Use per-page frontmatter or SEO components for title, description, canonical, OG, and Twitter tags.
- Use `@astrojs/sitemap` or equivalent sitemap generation.
- Emit JSON-LD in page templates with data from content collections.
- Keep markdown/content collections typed and validate required SEO fields.

## React/Vite SPA

For public SEO pages, avoid pure client-side rendering as the only delivery path. Prefer:

- SSR/SSG through a framework.
- Pre-rendering for landing pages.
- Server-managed metadata and canonical URLs.
- HTML fallbacks for critical content and links.

If migration is not possible, verify rendered HTML with crawler-friendly tools and search console URL inspection after deploy.

## CMS and Ecommerce

For WordPress, Shopify, Webflow, headless CMS, and ecommerce platforms:

- Check plugin/theme output before adding custom schema to avoid duplicates.
- Centralize SEO fields in templates: title, description, slug, canonical, OG image, noindex, schema type.
- Create rules for collection/category/facet pages.
- Use product feeds or merchant feeds where platform-specific search surfaces require them.
- Validate canonical and pagination behavior on variants, tags, filters, and collections.

## Static HTML

For hand-authored pages:

- Put complete metadata in `<head>`.
- Use semantic HTML: one H1, ordered headings, nav, main, article/section, footer.
- Add canonical, OG/Twitter tags, and JSON-LD manually.
- Generate `sitemap.xml` and `robots.txt`.
- Keep assets optimized and dimensions fixed.

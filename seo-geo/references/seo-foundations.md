# SEO Foundations

Use this reference for durable SEO basics that also support AI search inclusion.

## Source Anchors

- Google Search Central SEO Starter Guide: crawlable pages, descriptive titles, useful content, site structure, and search-friendly URLs.
- Google Search Central Helpful Content guidance: people-first content, originality, expertise, trust, and "Who, How, Why".
- Google Search Central AI features guide: Google says normal SEO best practices remain relevant for AI Overviews and AI Mode; there are no special extra requirements.
- Bing Webmaster Guidelines: long-term visibility across Bing, Copilot, and AI search requires accessible content, quality, and avoidance of AI manipulation attempts.
- web.dev Core Web Vitals: monitor user-centered loading, interactivity, and visual stability metrics using field data where possible.

## Technical Checks

Check these before content rewrites:

- The important content is present in rendered HTML or reliably server-rendered.
- `robots.txt`, meta robots, X-Robots-Tag, middleware, auth gates, and staging flags do not block intended pages.
- Canonical URLs are absolute, self-consistent, and not pointing all variants to the homepage.
- Sitemaps include only canonical, indexable, 200-status URLs and include meaningful `lastmod` for frequently changed content.
- Pagination, faceted navigation, filtered pages, and programmatic pages have explicit index/noindex rules.
- Hreflang is reciprocal and uses correct language/region codes when multilingual pages exist.
- Redirect chains, mixed protocols, duplicate hostnames, and trailing-slash variants are normalized.
- Images have descriptive alt text when meaningful, dimensions to prevent layout shift, and crawlable URLs when image search matters.
- JavaScript does not hide critical content, links, metadata, or structured data from crawlers.

## Metadata

For each indexable page:

- Title: unique, specific, front-load the entity/query, avoid boilerplate stuffing.
- Meta description: summarize the page promise and differentiator; write for clicks, not ranking tricks.
- Canonical: one canonical URL per content item.
- Open Graph/Twitter: title, description, URL, image, image dimensions, and alt text when supported.
- Locale: set `lang`, `hreflang`, and regional targeting when relevant.

## Content Quality

Strengthen the page with:

- Original analysis, first-hand experience, data, examples, screenshots, demos, or methodology.
- Clear authorship, reviewer credentials, update dates, editorial policy, and contact/company information where trust matters.
- Specific answers early, then deeper evidence and nuance below.
- Natural headings that match user questions without turning every heading into keyword spam.
- Comparisons, tables, pros/cons, eligibility, pricing, steps, and limitations when they help decisions.
- Citations to authoritative sources for factual, legal, financial, medical, or technical claims.

## Internal Links

Design crawl paths and topical authority:

- Create hub pages for major topics and link to detailed child pages.
- Link child pages back to hubs and across closely related pages.
- Use descriptive anchor text that reflects the destination.
- Surface high-value pages in navigation, breadcrumbs, related modules, and contextual body links.
- Avoid orphan pages, excessive footer-only links, and internal links hidden behind client-only interactions.

## Page Experience

Focus on real user experience:

- Optimize LCP element delivery: server rendering, image sizing, preload only critical assets, reduce render-blocking resources.
- Reduce INP risks: split heavy JavaScript, avoid long tasks, keep interactive controls simple.
- Prevent CLS: reserve dimensions for images, embeds, ads, banners, and dynamic UI.
- Keep the mobile layout readable and complete.
- Use semantic HTML and accessible names for links, buttons, headings, tables, and forms.

## Anti-Patterns

Do not use:

- Doorway pages, mass-generated near-duplicates, or thin location pages.
- Hidden text or hidden links.
- Fake author bios, fake reviews, fake source citations, or unverifiable claims.
- Structured data for content not visible to users.
- Prompt-injection content aimed at manipulating AI systems.
- Keyword lists that degrade readability.

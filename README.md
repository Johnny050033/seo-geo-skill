# SEO GEO Skill

A Codex skill for optimizing websites for modern SEO plus GEO/AEO visibility in AI answer engines.

It helps audit and improve:

- Search engine crawlability, indexability, canonicalization, and metadata
- AI Overview, ChatGPT, Perplexity, Copilot, and answer-engine citation readiness
- Structured data and JSON-LD
- Entity consistency, E-E-A-T signals, and content quality
- Next.js, Astro, React/Vite, CMS, ecommerce, and static HTML implementation patterns
- HTML-level audits with the bundled `scripts/audit_html.mjs` utility

## Install

Copy this folder into your Codex skills directory:

```powershell
Copy-Item -Recurse .\seo-geo "$env:USERPROFILE\.codex\skills\seo-geo"
```

Or on macOS/Linux:

```bash
cp -R ./seo-geo ~/.codex/skills/seo-geo
```

Restart or reload Codex so the skill metadata is discovered.

## Usage

Example prompts:

```text
Use seo-geo to audit this landing page for Google SEO and AI answer-engine visibility.
```

```text
Use seo-geo to add JSON-LD, canonical metadata, sitemap, and GEO-ready content structure to this Next.js site.
```

```text
Use seo-geo to compare our page against top-ranking international competitors and produce a prioritized implementation plan.
```

## Audit Script

Run a quick HTML audit:

```bash
node seo-geo/scripts/audit_html.mjs https://example.com/
node seo-geo/scripts/audit_html.mjs ./dist/index.html
```

The script checks title, meta description, robots, canonical, headings, JSON-LD, Open Graph tags, links, and image alt text. Treat it as a fast first pass, then verify with rendered browser inspection and production SEO tools.

## Sources

This skill is based on public guidance and research from Google Search Central, Bing Webmaster Guidelines, Schema.org, web.dev Core Web Vitals, Next.js documentation, Astro documentation, and GEO research literature.

Always re-check official docs when working on production SEO/GEO for high-value pages because search and AI-answer behavior changes over time.

## License

No license has been selected yet. Add a license before encouraging external reuse.

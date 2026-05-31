# GEO and AI Search

Use this reference when optimizing for AI Overviews, AI Mode, ChatGPT browsing/search, Perplexity, Copilot, Claude-like answer engines, or other retrieval-plus-generation systems.

## Source Anchors

- Google Search Central AI features guidance: SEO fundamentals still apply to AI features; no special markup is required for AI Overviews or AI Mode.
- Bing Webmaster Guidelines: SEO best practices support visibility in Bing, Copilot, and AI-powered search; attempts to manipulate AI systems can reduce visibility or eligibility.
- GEO research, including "GEO: Generative Engine Optimization" and later work, frames the goal as improving inclusion, visibility, and citation in generated answers, not merely ranking in ten blue links.
- Schema.org and Google structured data docs support machine-readable entity and page meaning, but schema must reflect visible content and platform-specific requirements.

## GEO Goal

Optimize for answer-engine usefulness:

- Retrieval: the page can be discovered, crawled, indexed, and matched to natural-language questions.
- Understanding: entities, facts, relationships, dates, and page purpose are explicit.
- Trust: claims are sourced, authorship and organization identity are verifiable, and facts are consistent across the web.
- Citation: the page contains compact, quotable answer blocks and evidence that an AI system can cite without guessing.

## Content Pattern

For each target query cluster:

1. Write a concise answer in the first 100-150 words.
2. Define the main entity and related entities explicitly.
3. Add evidence: statistics, methods, screenshots, examples, product specs, comparison criteria, or cited sources.
4. Include "best for", "not for", limitations, pricing, dates, geographic availability, and update cadence when relevant.
5. Use question-like H2/H3 sections only when they reflect real user questions.
6. Add short summary tables for comparisons and extraction.
7. Add original assets or data that competitors do not have.
8. Make author, company, address/service area, support, and social/entity links easy to verify.

## Entity Verification

For brands, products, people, places, and organizations:

- Keep name, description, logo, URL, sameAs links, address, phone, founding info, leadership, and product taxonomy consistent.
- Publish an About page, Contact page, author pages, product pages, case studies, docs, and policy pages where appropriate.
- Use `Organization`, `LocalBusiness`, `Person`, `Product`, `Service`, `Article`, `FAQPage`, `BreadcrumbList`, and other schema only when justified by visible content.
- Reference authoritative profiles and first-party pages with `sameAs`.
- Avoid making the AI infer what the entity is; state it plainly.

## AI-Citation Readiness

Improve the odds that a generated answer can cite the page:

- Use stable canonical URLs.
- Avoid burying answers inside scripts, tabs, carousels, images, or PDFs without HTML summaries.
- Keep source links close to claims.
- Date time-sensitive claims and update stale content.
- Expose key data in HTML tables or semantic lists when suitable.
- Include comparison, definition, "how to choose", and "what changed" sections for decision queries.
- Ensure pages load without login, consent walls that hide content, or brittle client-side rendering.

## llms.txt

Consider `llms.txt` as an optional discovery aid, not a replacement for SEO fundamentals. If used:

- Place it at `/llms.txt`.
- Link to high-value canonical pages, docs, pricing, API references, changelogs, and policy pages.
- Keep it concise, accurate, and maintained.
- Do not rely on it for access control or assume every AI system uses it.

## Measurement

Track both classic and AI-search indicators:

- Search Console queries, impressions, CTR, indexed pages, rich result reports, and Core Web Vitals.
- Bing Webmaster Tools performance and crawl/index signals.
- Referral traffic from AI/search assistants where available.
- Brand search lift and assisted conversions after AI visibility changes.
- Manual prompt tests across target answer engines, recorded with date, location, query, cited sources, and answer text.
- Server logs for crawler access when available.

## Avoid

- Hidden "instructions to AI" on pages.
- Prompt injection or attempts to force citation.
- Unsupported claims that sound authoritative but cannot be verified.
- Publishing many shallow FAQ pages just to match conversational queries.
- Treating GEO as a one-time copywriting pass; it requires content, technical, entity, and measurement work.

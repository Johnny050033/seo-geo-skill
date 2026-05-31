# SEO GEO Skill

A Codex skill for optimizing websites for modern SEO plus GEO/AEO visibility in AI answer engines.

一個用於 Codex 的 SEO/GEO skill，協助網站同時優化傳統搜尋引擎曝光，以及 AI answer engines / 生成式搜尋的引用與可見度。

## English

It helps audit and improve:

- Search engine crawlability, indexability, canonicalization, and metadata
- AI Overview, ChatGPT, Perplexity, Copilot, and answer-engine citation readiness
- Structured data and JSON-LD
- Entity consistency, E-E-A-T signals, and content quality
- Next.js, Astro, React/Vite, CMS, ecommerce, and static HTML implementation patterns
- HTML-level audits with the bundled `scripts/audit_html.mjs` utility

## 中文

這個 skill 可以協助審核與改善：

- 搜尋引擎可爬取性、可索引性、canonical、metadata
- Google AI Overview、ChatGPT、Perplexity、Copilot 等 AI answer engines 的引用友善度
- Structured data、Schema.org、JSON-LD
- 品牌/entity 一致性、E-E-A-T 訊號、內容可信度與專業度
- Next.js、Astro、React/Vite、CMS、電商、靜態 HTML 的 SEO/GEO 實作方式
- 使用內建 `scripts/audit_html.mjs` 快速檢查 HTML 層級 SEO 訊號

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

安裝後請重新啟動或重新載入 Codex，讓 Codex 掃描到新的 skill metadata。

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

中文範例：

```text
用 seo-geo 幫我審核這個 landing page 的 Google SEO 與 AI 搜尋可見度。
```

```text
用 seo-geo 幫這個 Next.js 網站加入 JSON-LD、canonical metadata、sitemap，並整理成 GEO 友善的內容結構。
```

```text
用 seo-geo 比較我們的頁面和國際排名前段競品，整理優先級最高的 SEO/GEO 改進清單。
```

## Audit Script

Run a quick HTML audit:

```bash
node seo-geo/scripts/audit_html.mjs https://example.com/
node seo-geo/scripts/audit_html.mjs ./dist/index.html
```

The script checks title, meta description, robots, canonical, headings, JSON-LD, Open Graph tags, links, and image alt text. Treat it as a fast first pass, then verify with rendered browser inspection and production SEO tools.

這個 script 會檢查 title、meta description、robots、canonical、headings、JSON-LD、Open Graph、links、image alt 等訊號。它適合作為快速第一輪檢查，正式上線前仍建議搭配瀏覽器渲染檢查與專業 SEO 工具驗證。

## Sources

This skill is based on public guidance and research from Google Search Central, Bing Webmaster Guidelines, Schema.org, web.dev Core Web Vitals, Next.js documentation, Astro documentation, and GEO research literature.

Always re-check official docs when working on production SEO/GEO for high-value pages because search and AI-answer behavior changes over time.

此 skill 參考 Google Search Central、Bing Webmaster Guidelines、Schema.org、web.dev Core Web Vitals、Next.js documentation、Astro documentation，以及 GEO 相關研究。由於搜尋與 AI answer engine 的規則會持續變動，正式處理高價值頁面時，仍建議重新查核官方最新文件。

## License

MIT License.

採用 MIT License，可自由使用、修改、分享與二次開發；請保留原始 copyright 與 license notice。

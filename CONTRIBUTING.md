# Contributing

Thanks for helping improve SEO GEO Skill.

感謝你協助改進 SEO GEO Skill。

## What Helps

- Better SEO/GEO workflows based on official or well-cited sources
- New framework implementation notes for Next.js, Astro, CMS, ecommerce, or static sites
- Safer structured data examples
- Improvements to `scripts/audit_html.mjs`
- Clearer bilingual documentation
- Bug reports with reproduction steps

## Contribution Guidelines

- Keep the skill concise. Put detailed material in `seo-geo/references/` instead of overloading `SKILL.md`.
- Prefer official documentation, standards, primary research, or clearly attributed field-tested practices.
- Do not add manipulative tactics such as hidden AI instructions, fake citations, fake reviews, doorway pages, or schema that does not match visible content.
- Keep examples practical and production-safe.
- Use English or Traditional Chinese. Bilingual improvements are welcome.

## How to Propose Changes

1. Open an Issue first for major workflow or strategy changes.
2. Fork the repo and create a branch.
3. Make focused changes.
4. Run validation:

```bash
node seo-geo/scripts/audit_html.mjs https://example.com/
```

If you use Codex skill validation locally, validate the `seo-geo/` folder before opening a PR.

5. Open a Pull Request and explain what changed, why, and what sources support the change.

## 中文貢獻指南

- 請保持 skill 精簡；詳細 SEO/GEO 知識放在 `seo-geo/references/`。
- 優先引用官方文件、標準、主要研究或可驗證的一線實務。
- 請不要加入黑帽 SEO、隱藏式 AI 指令、假引用、假評論、doorway pages，或與頁面可見內容不一致的 schema。
- PR 請說明修改內容、原因、參考來源與測試方式。

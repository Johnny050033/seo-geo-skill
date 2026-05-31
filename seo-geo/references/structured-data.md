# Structured Data

Use this reference when adding or auditing JSON-LD and schema.

## Source Anchors

- Google Search Central structured data intro: structured data gives explicit clues about page meaning; Google recommends JSON-LD when possible.
- Google Search Central structured data policies: markup must follow content and spam policies; rich result appearance is not guaranteed.
- Google Search Central search gallery: use page-type-specific Google requirements for rich result eligibility.
- Schema.org: shared vocabulary for structured data across web pages and applications.
- Bing structured data guidance: structured annotations can help Bing understand and display content.

## Rules

- Prefer JSON-LD unless the framework or platform has a strong reason for another format.
- Mark up only content visible to users on the page.
- Use the most specific schema type that accurately describes the page.
- Include required Google properties for rich results and complete recommended properties when accurate.
- Use stable entity IDs with `@id` where pages reference the same organization, person, product, or place.
- Validate before shipping and monitor after deploy.

## Common Page Types

- Sitewide: `WebSite`, `Organization`, `BreadcrumbList`.
- Blog/editorial: `Article`, `BlogPosting`, `NewsArticle` when appropriate.
- Product/ecommerce: `Product`, `Offer`, `AggregateRating`, `Review`, `MerchantReturnPolicy`, `ShippingDetails` when visible and accurate.
- Service pages: `Service`, `Organization`, `LocalBusiness`, `FAQPage` if real FAQs are visible.
- Local pages: `LocalBusiness` subtype, address, geo, opening hours, service area, sameAs, aggregateRating only when valid.
- Documentation: `TechArticle`, `HowTo` only if step-by-step instructions are visible and match guidelines.
- Video/image-heavy pages: `VideoObject`, `ImageObject`, transcript/caption data when available.

## JSON-LD Pattern

Use an `@graph` when several entities connect:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "name": "Example",
      "url": "https://example.com/",
      "logo": "https://example.com/logo.png",
      "sameAs": ["https://www.linkedin.com/company/example"]
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com/",
      "name": "Example",
      "publisher": {"@id": "https://example.com/#organization"}
    }
  ]
}
```

## Validation

Use:

- Google Rich Results Test for supported Google features.
- Schema Markup Validator for schema syntax and vocabulary.
- Search Console rich result reports after deployment.
- Manual rendered HTML inspection to confirm JSON-LD is present and valid after client/server rendering.

## Red Flags

- Duplicate conflicting schemas from CMS plugins plus hand-coded JSON-LD.
- Organization names, URLs, logos, prices, ratings, or availability inconsistent with visible page content.
- FAQ schema on hidden or low-value boilerplate FAQs.
- Reviews copied from third parties without following platform policy.
- LocalBusiness schema on non-local pages.

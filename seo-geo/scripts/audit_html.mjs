#!/usr/bin/env node
import { readFile } from "node:fs/promises";

const target = process.argv[2];

if (!target) {
  console.error("Usage: node audit_html.mjs <url-or-html-file>");
  process.exit(1);
}

async function loadHtml(input) {
  if (/^https?:\/\//i.test(input)) {
    const res = await fetch(input, {
      headers: {
        "user-agent": "CodexSEOAudit/1.0 (+https://openai.com)"
      }
    });
    const html = await res.text();
    return { html, status: res.status, finalUrl: res.url };
  }

  return { html: await readFile(input, "utf8"), status: null, finalUrl: input };
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function attr(tag, name) {
  const re = new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const match = tag.match(re);
  return match ? (match[2] ?? match[3] ?? match[4] ?? "").trim() : "";
}

function firstTag(html, re) {
  const match = html.match(re);
  return match ? match[1].trim() : "";
}

function metaContent(html, key, value) {
  const re = new RegExp(`<meta\\b(?=[^>]*(?:${key})\\s*=\\s*["']${value}["'])[^>]*>`, "i");
  const tag = html.match(re)?.[0] ?? "";
  return tag ? attr(tag, "content") : "";
}

function allMatches(html, re, mapper) {
  return [...html.matchAll(re)].map(mapper).filter(Boolean);
}

const { html, status, finalUrl } = await loadHtml(target);
const title = stripTags(firstTag(html, /<title\b[^>]*>([\s\S]*?)<\/title>/i));
const description = metaContent(html, "name", "description");
const robots = metaContent(html, "name", "robots");
const canonicalTag = html.match(/<link\b(?=[^>]*rel\s*=\s*["'][^"']*\bcanonical\b[^"']*["'])[^>]*>/i)?.[0] ?? "";
const canonical = canonicalTag ? attr(canonicalTag, "href") : "";
const h1s = allMatches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, (m) => stripTags(m[1]));
const headings = allMatches(html, /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (m) => ({
  level: Number(m[1]),
  text: stripTags(m[2]).slice(0, 160)
}));
const jsonLdBlocks = allMatches(
  html,
  /<script\b(?=[^>]*type\s*=\s*["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi,
  (m) => m[1].trim()
);
const schemaTypes = [];
const schemaErrors = [];

for (const block of jsonLdBlocks) {
  try {
    const parsed = JSON.parse(block);
    const nodes = Array.isArray(parsed) ? parsed : [parsed, ...(parsed["@graph"] ?? [])];
    for (const node of nodes) {
      if (node && node["@type"]) schemaTypes.push(node["@type"]);
    }
  } catch (error) {
    schemaErrors.push(error.message);
  }
}

const links = allMatches(html, /<a\b[^>]*href\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)[^>]*>/gi, (m) =>
  m[1].replace(/^["']|["']$/g, "")
);
const images = allMatches(html, /<img\b[^>]*>/gi, (m) => ({
  src: attr(m[0], "src"),
  alt: attr(m[0], "alt")
}));

const report = {
  target,
  finalUrl,
  status,
  title: { value: title, length: title.length },
  description: { value: description, length: description.length },
  robots,
  canonical,
  h1Count: h1s.length,
  h1s,
  headingSample: headings.slice(0, 20),
  jsonLdBlockCount: jsonLdBlocks.length,
  schemaTypes: [...new Set(schemaTypes.flat())],
  schemaErrors,
  linkCount: links.length,
  internalLikeLinkCount: links.filter((href) => href.startsWith("/") || href.startsWith("#")).length,
  imageCount: images.length,
  imagesMissingAlt: images.filter((img) => !img.alt).slice(0, 20),
  openGraph: {
    title: metaContent(html, "property", "og:title"),
    description: metaContent(html, "property", "og:description"),
    image: metaContent(html, "property", "og:image"),
    url: metaContent(html, "property", "og:url")
  }
};

console.log(JSON.stringify(report, null, 2));

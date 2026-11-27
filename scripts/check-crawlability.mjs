// Crawlability gate for the static export. Run after `next build`:
//   node scripts/check-crawlability.mjs
//
// Fails (exit 1) if:
//   - a sitemap URL has no exported page, or is listed twice,
//   - an indexable, self-canonical page in out/ is missing from the sitemap,
//   - an indexable page cannot be reached from the homepage by following plain
//     <a href> links without running JavaScript (an orphan).
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
const BASE = (process.env.NEXT_PUBLIC_BASE_URL || "https://orangeotec.com").replace(/\/$/, "");

/** Every exported page as { path: "/x/", html }. */
function collectPages(dir = OUT, pages = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === "_next") continue;
      collectPages(full, pages);
    } else if (name === "index.html") {
      const rel = relative(OUT, dir).split(sep).join("/");
      pages.push({ path: rel ? `/${rel}/` : "/", html: readFileSync(full, "utf8") });
    }
  }
  return pages;
}

const pages = collectPages();
const byPath = new Map(pages.map((p) => [p.path, p]));

const canonicalOf = (html) =>
  html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]?.replace(BASE, "");
const isNoindex = (html) => /<meta name="robots" content="[^"]*noindex/.test(html);

const indexable = pages.filter(
  (p) => !isNoindex(p.html) && canonicalOf(p.html) === p.path,
);

// Sitemap
const sitemapXml = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(BASE, ""),
);
const sitemapPages = sitemapUrls.filter((u) => !/\.[a-z0-9]+$/i.test(u));
const sitemapSet = new Set(sitemapUrls);

const errors = [];
const dupes = sitemapUrls.filter((u, i) => sitemapUrls.indexOf(u) !== i);
dupes.forEach((u) => errors.push(`sitemap lists twice: ${u}`));
sitemapPages
  .filter((u) => !byPath.has(u))
  .forEach((u) => errors.push(`sitemap URL has no page: ${u}`));
sitemapUrls
  .filter((u) => /\.[a-z0-9]+$/i.test(u) && !existsSync(join(OUT, decodeURI(u))))
  .forEach((u) => errors.push(`sitemap file missing from out/: ${u}`));
indexable
  .filter((p) => !sitemapSet.has(p.path))
  .forEach((p) => errors.push(`indexable page not in sitemap: ${p.path}`));

// Link crawl from "/" — plain hrefs only, like a crawler without JS.
const seen = new Set(["/"]);
const queue = ["/"];
while (queue.length) {
  const page = byPath.get(queue.shift());
  if (!page) continue;
  for (const m of page.html.matchAll(/<a\b[^>]*\bhref="([^"#?]+)/g)) {
    let href = m[1].replace(BASE, "");
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    if (/\.[a-z0-9]+$/i.test(href)) continue;
    if (!href.endsWith("/")) href += "/";
    if (!seen.has(href)) {
      seen.add(href);
      queue.push(href);
    }
  }
}
const orphans = indexable.filter((p) => !seen.has(p.path));
orphans.forEach((p) => errors.push(`orphan (no crawlable link): ${p.path}`));

const linkedButMissing = [...seen].filter((u) => !byPath.has(u));

console.log(`exported pages:            ${pages.length}`);
console.log(`indexable, self-canonical: ${indexable.length}`);
console.log(`reachable by <a href>:     ${[...seen].filter((u) => byPath.has(u)).length}`);
console.log(`sitemap URLs:              ${sitemapUrls.length} (${sitemapPages.length} pages)`);
console.log(`orphans:                   ${orphans.length}`);
if (linkedButMissing.length) {
  console.log(`\nlinks to URLs with no page (would 404):\n  ${linkedButMissing.join("\n  ")}`);
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log("\nOK: sitemap and internal links cover every indexable page.");

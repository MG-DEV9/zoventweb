import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SERVICES_CATALOG, BLOG_POSTS } from '../src/data/zoventsData';

const SITE_URL = 'https://www.zovents.com';
const __dirname = dirname(fileURLToPath(import.meta.url));

const staticRoutes = [
  '/',
  '/about',
  '/holiday',
  '/gallery',
  '/contact',
  '/blog',
  '/legal/privacy',
  '/legal/terms',
  '/legal/refunds',
];

const serviceRoutes = SERVICES_CATALOG.map((s) => `/services/${s.slug}`);
const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

const allRoutes = Array.from(new Set([...staticRoutes, ...serviceRoutes, ...blogRoutes]));

const today = new Date().toISOString().slice(0, 10);

function priorityFor(route: string): string {
  if (route === '/') return '1.0';
  const depth = route.split('/').filter(Boolean).length;
  return depth > 1 ? '0.6' : '0.8';
}

const urlEntries = allRoutes
  .map(
    (route) =>
      `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priorityFor(route)}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, 'utf-8');

console.log(`Sitemap written to ${outPath} (${allRoutes.length} URLs).`);

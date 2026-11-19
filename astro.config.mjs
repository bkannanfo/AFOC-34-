import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dates de publication des articles, utilisées comme <lastmod> dans le sitemap.
const normalize = (value) => decodeURIComponent(value).toLowerCase().replace(/[^a-z0-9]/g, '');
const articleDates = new Map();
for (const collection of ['logement', 'consommation', 'conseils']) {
  const dir = path.join('src', 'content', collection);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.md'))) {
    const match = fs.readFileSync(path.join(dir, file), 'utf8').match(/^date:\s*(.+)$/m);
    if (!match) continue;
    const date = new Date(match[1].trim().replace(/^["']|["']$/g, ''));
    if (!Number.isNaN(date.getTime())) {
      articleDates.set(normalize(collection + '/' + file.replace(/\.md$/, '')), date);
    }
  }
}

export default defineConfig({
  site: 'https://afoc34.fr',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Exclut les pages de confirmation (post-formulaire) de l'index.
      filter: (page) => !/\/(merci-contact|success)\/?$/.test(page),
      // Les articles reçoivent leur date de publication comme <lastmod>.
      serialize(item) {
        const date = articleDates.get(normalize(new URL(item.url).pathname));
        if (date) item.lastmod = date.toISOString();
        return item;
      },
    }),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

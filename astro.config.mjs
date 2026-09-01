import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://growlightdb.ronaldleonardo.com',
  compressHTML: true,
  integrations: [sitemap()],
  build: { format: 'file' },
  server: {
    host: '0.0.0.0',
    port: 8081,
    allowedHosts: ['mia.ronaldleonardo.com', 'growlightdb.ronaldleonardo.com', 'www.tabletopharvest.com', 'tabletopharvest.com'],
  },
});
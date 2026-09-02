import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://growlightdb.tabletopharvest.com',
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  build: { format: 'file' },
  server: {
    host: '0.0.0.0',
    port: 8081,
    allowedHosts: ['growlightdb.tabletopharvest.com', 'growlightdb.ronaldleonardo.com', 'www.tabletopharvest.com', 'tabletopharvest.com'],
  },
});
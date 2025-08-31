import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server'; // <-- 导入 Vercel 适配器
import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: vercel(), // <-- 使用 Vercel 适配器
  integrations: [
    keystatic(),
    mdx(),
    sitemap(),
    react()
  ],
});
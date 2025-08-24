// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare'; // <-- 添加这一行

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	output: 'server', // <-- 重要！告诉 Astro 使用服务器端渲染
	adapter: cloudflare(), // <-- 重要！使用 Cloudflare 适配器
	integrations: [
		mdx(), 
		sitemap(), 
		keystatic(), 
		react()
	],
});
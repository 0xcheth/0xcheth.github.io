// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://0xcheth.github.io',
	integrations: [mdx(), sitemap()],
	base: '/', // For root-level deployment

});

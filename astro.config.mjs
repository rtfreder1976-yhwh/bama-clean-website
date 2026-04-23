// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://bamaclean.com',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    partytown({
      // Forward gtag calls from the web worker back to the main thread
      config: { forward: ['dataLayer.push'] },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Inline assets smaller than 4kb to reduce round trips
      assetsInlineLimit: 4096,
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});

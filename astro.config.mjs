import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    sitemap({
        customPages: ['https://opentronika.org/lcd-editor-pro/'],
      })],
  site:'https://opentronika.org',
});
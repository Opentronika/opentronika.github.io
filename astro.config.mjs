import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    sitemap({
        customPages: ['https://opentronika.org/lcd-editor-pro/'],
      }),
      astroI18next()],
  site:'https://opentronika.org',
});
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
  sitemap({
    customPages: ['https://opentronika.org/lcd-editor-pro/'],
  })],
  i18n: {
    locales: ["en", "es"], // Locales you want to support
    defaultLocale: "en", // Default locale (fallback)
    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
  site: 'https://opentronika.org',
});
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
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

  vite: {
    plugins: [tailwindcss()],
  },
});
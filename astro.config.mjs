import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rabbit.plantbased.studio',
  i18n: {
    defaultLocale: 'zh-hk',
    locales: ['zh-hk', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

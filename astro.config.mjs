import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lantaurabbit.com',
  i18n: {
    defaultLocale: 'zh-hk',
    locales: ['zh-hk', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

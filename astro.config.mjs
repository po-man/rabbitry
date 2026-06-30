import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.lantaurabbit.com',
  i18n: {
    defaultLocale: 'zh-hk',
    locales: ['zh-hk', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'zh-hk',
    locales: ['zh-hk', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

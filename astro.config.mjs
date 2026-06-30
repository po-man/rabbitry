import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://po-man.github.io',
  base: '/rabbitry',
  i18n: {
    defaultLocale: 'zh-hk',
    locales: ['zh-hk', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://land-slide.net',
  compressHTML: true,
  trailingSlash: 'never',
});

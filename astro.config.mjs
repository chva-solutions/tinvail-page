// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd ? 'https://chva-solutions.github.io' : 'http://localhost:4321',
  base: isProd ? '/tinvail-page/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});

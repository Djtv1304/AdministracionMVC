// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icons from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icons(),
  ],
});
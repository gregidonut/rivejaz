// @ts-check
import { defineConfig } from 'astro/config';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  integrations: [compressor()]
});
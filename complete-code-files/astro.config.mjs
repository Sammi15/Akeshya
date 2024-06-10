// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/2.5.0/remixicon.css' }
    ]
  }
});

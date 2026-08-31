import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jogadev.com",
  integrations: [sitemap()],
  build: {
    // Un archivo .html por ruta en vez de carpetas con index.html.
    // Cloudflare Pages sirve /trayectoria desde trayectoria.html sin redirección.
    format: "file",
  },
  compressHTML: true,
});

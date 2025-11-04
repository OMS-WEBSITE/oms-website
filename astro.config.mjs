// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
// https://astro.build/config
export default defineConfig({
  site: "https://omsnxt.netlify.app", // ✅ your live site URL
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    partytown({
      config: { forward: ["dataLayer.push"] },
    }),
    sitemap(), // ✅ generates sitemap.xml
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://omsnxt.netlify.app/sitemap-index.xml",
      host: "omsnxt.netlify.app",
    }),
  ],
});

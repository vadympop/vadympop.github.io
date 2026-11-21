// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Case studies are published but kept out of search for now (noindex + not in the sitemap)
const NOINDEX_PREFIXES = ["/projects/", "/experience/"];

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://vadym.work",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !NOINDEX_PREFIXES.some((prefix) => new URL(page).pathname.startsWith(prefix)),
    }),
  ],
  build: {
    // ~24 KB of CSS: inlining it removes the only render-blocking request
    inlineStylesheets: "always",
  },
  markdown: {
    // Plain monochrome code blocks styled in global.css (a fixed highlighter theme would ignore light/dark)
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://vadym.work",
  integrations: [mdx()],
  markdown: {
    // Plain monochrome code blocks styled in global.css (a fixed highlighter theme would ignore light/dark)
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

# vadym.work

Personal portfolio of Vadym Popovych, Python backend developer.

Built with [Astro](https://astro.build) (static output) and Tailwind CSS v4. Deployed to GitHub Pages at
[vadym.work](https://vadym.work).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check (astro check) + static build into dist/
npm run preview   # serve dist/
```

## Structure

```
src/
  components/   UI pieces (.astro), icons are inlined at build time (Icon.astro)
  data/         profile, contacts and other site data
  layouts/      page shell: <head>, theme bootstrap
  pages/        routes
  styles/       global CSS and theme tokens
public/         static files served as-is (CV, favicons, manifest)
```

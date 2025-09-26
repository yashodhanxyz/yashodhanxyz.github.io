# Yashodhan · Personal Site

Astro 5 project powering the marketing site, blog, and content portfolio for Yashodhan.

## Quick start

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start the local dev server
- `npm run lint` – run ESLint across Astro, TypeScript, and MDX content
- `npm run build` – generate the production build to `dist/`
- `npm run preview` – serve the production build locally

## Draft previews

Set the environment variable `PUBLIC_PREVIEW_DRAFTS=true` (e.g. in Vercel preview deployments) to surface draft blog posts in listings and detail routes.

## Deployment

This project targets Vercel. See `vercel.json` for the production redirect (www → apex) and long-lived cache headers. Plausible analytics is loaded only in production builds.

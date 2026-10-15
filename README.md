# Ahmad Danesh — Developer Portfolio

A bilingual (English / Dari) responsive portfolio built with React, Vite, Tailwind CSS and React Router. It includes a dark/light theme, page transitions, individual project detail routes, a project filter, accessible navigation and a Formspree contact form.

## Features

- Five main pages with real client-side routing: `/home`, `/projects`, `/skills`, `/about`, `/contact`.
- Individual case-study routes at `/projects/:projectId`.
- React Router route definitions are in `src/main.jsx` inside `<StrictMode>` as requested. React Router v6 future flags (`v7_startTransition` and `v7_relativeSplatPath`) are enabled to opt in early and silence those migration warnings.
- English and Dari language toggle; the page direction switches LTR/RTL and the choice is persisted locally.
- Dark and light theme toggle; the choice is persisted locally.
- Seven selected projects, each with a locally stored optimized WebP cover image, source repository link, accurate source-based description, and a project detail page.
- Responsive layout, mobile menu, keyboard focus indicators, reduced-motion support, form validation and visible service feedback.
- Vercel rewrite and Netlify fallback configuration for direct URL loads and browser refreshes.

## Important note about project imagery

The seven `public/images/*.webp` covers are original AI-generated *illustrative UI concepts* created for the portfolio. They are not screenshots of Ahmad's running repositories. Their alt text and on-page labels disclose this. The assignment asks for genuine screenshots; replace these concept covers with real screenshots captured from each running project before final submission.

## Requirements

- Node.js 20.19+ or 22.12+ recommended for Vite 7.
- npm.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Keep the terminal running while testing.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Contact form (Formspree)

The local `.env.local` file in the provided ZIP is set to the Formspree endpoint supplied by Ahmad:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mdeawvlq
```

Never put an account password or private API key in a `VITE_` environment variable. The Formspree endpoint is a public form endpoint. The form displays success only if Formspree returns a successful HTTP response.

When deploying to Vercel or Netlify, add an environment variable named `VITE_FORMSPREE_ENDPOINT` with the same value in the deployment dashboard, then trigger a fresh deployment/build. `.env.local` is excluded by `.gitignore` and will not be uploaded to GitHub automatically.

Verify the Formspree recipient/notification settings in the Formspree dashboard and send a real test submission before saying the form is verified.

## Routing and deployment

Routes are defined in `src/main.jsx`, inside `<StrictMode>` and `<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>`. These flags opt into the upcoming v7 behavior and suppress the corresponding future-flag warnings. `/` redirects to `/home`; unknown routes show a custom 404 page. Project detail routes use `/projects/<project-id>`.

- `vercel.json` rewrites application paths to `index.html`.
- `public/_redirects` contains the Netlify SPA fallback.

After deployment, directly open `/projects/study-hub` and refresh the page to confirm the host fallback works.

## Project selection

The selected project list uses repositories/features that could be verified from the public source available during this build: StudyHub, TaskFlow, and five React filtering exercises. It is not a verified audit of every repository in the GitHub account; the public repository listing could not be fully enumerated from the available network tool. Do not claim these are the objectively best projects across every repository until that review is completed.

## Before submitting the assignment

1. Replace each concept cover with a screenshot from the actual running app.
2. Publish the project apps and fill in each `liveUrl` in `src/data.js` only after it works. The Live Demo control is active only when a real `liveUrl` exists; otherwise the UI clearly says that a demo is not published.
3. Run `npm run build` and fix any errors.
4. Test all routes including direct navigation/refresh, both themes, both languages, mobile layout, focus/keyboard behavior, and the contact form.
5. Deploy to Vercel or Netlify and record the published URL.
6. Fill in the QA evidence and presentation/peer-feedback documents.

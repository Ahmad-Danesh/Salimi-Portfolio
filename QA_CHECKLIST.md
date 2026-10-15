# QA checklist — Ahmad Danesh Portfolio

**Important:** Items below distinguish code/configuration checks from tests that still must be performed on a machine with dependencies installed and on the deployed site. Do not mark Pending items as Pass without testing them.

## Code and repository checks

| Check | Status | Evidence / next step |
|---|---|---|
| Five required sections available as separate routes | Implemented; local test pending | `/home`, `/projects`, `/skills`, `/about`, `/contact` are defined in `src/main.jsx`. |
| React Router declaration inside `StrictMode` in `src/main.jsx` | Implemented | `BrowserRouter`, `Routes`, `Route`, and `Navigate` are in `src/main.jsx`. `v7_startTransition` and `v7_relativeSplatPath` future flags are enabled to suppress the two migration warnings. |
| Project detail routes | Implemented | `/projects/:projectId` route with a not-found state for unknown project IDs. |
| Vercel SPA fallback | Configured | `vercel.json` rewrites paths to `index.html`; must verify after deployment. |
| Netlify SPA fallback | Configured | `public/_redirects`; must verify after deployment. |
| Seven project cards have local image files | Checked | All configured `.webp` paths should match files in `public/images/`. These are concept artworks, not original app screenshots. |
| Bilingual English/Dari UI and RTL | Implemented; visual test pending | Language preference stored locally; document `lang` and `dir` updated by the provider. |
| Dark/light theme | Implemented; visual test pending | Theme preference stored locally and CSS variables updated. |
| Form has labels and validation | Implemented; interactive test pending | Labels use `htmlFor`/`id`; required fields and length/email validation are present. |
| Form shows success only on successful HTTP response | Implemented; service test pending | The handler rejects non-OK responses and displays an error instead of a fake success. |
| `npm install` | Not run in this build container | Network/DNS access to npm was unavailable when attempting dependency installation. Run locally. |
| `npm run build` | Pending | Must be executed locally after `npm install`; do not claim build success until confirmed. |

## Manual QA evidence to fill in

| Test | Result | Evidence / correction |
|---|---|---|
| Click every desktop navigation item; confirm route URL changes | Pending | |
| Click every mobile navigation item; menu closes and route changes | Pending | |
| Directly open `/projects/study-hub` and refresh | Pending | Test locally and after deployment. |
| Open `/unknown-route`; custom 404 appears | Pending | |
| Test all seven project links to GitHub | Pending | Confirm each target opens the expected repository/path. |
| Test every real Live Demo link | Pending | Live demo URLs are not provided yet; controls remain unavailable until a verified `liveUrl` is added to `src/data.js`. |
| Test invalid form (blank name, invalid email, short message) | Pending | Verify field-specific error messages. |
| Submit valid test form to Formspree | Pending | Confirm submission in Formspree and check recipient email/spam. |
| Test theme toggle on every route; preference persists on refresh | Pending | |
| Test English/Dari on every route; RTL layout is readable | Pending | |
| Test widths 320, 375, 768, 1024, 1440 px | Pending | Screenshot each width; fix overflow/overlap. |
| Keyboard tab/enter/space navigation and visible focus | Pending | |
| `prefers-reduced-motion` respected | Implemented in CSS; device test pending | |
| Browser console has no application errors or React key warnings | Pending | React Router future-flag warnings were addressed. A `mailto:` external-handler log and Chromium lazy-image intervention message are informational, not application errors. |
| Production build/preview | Pending | `npm run build`, then `npm run preview`. |
| Vercel/Netlify production URL opens and refreshes nested routes | Pending | Record the live URL here: __________________ |

## Before final submission

- Replace all seven illustrative concept covers with genuine screenshots from the running apps. Each current image has transparent wording in its alt text and an on-page label, and must not be submitted as a genuine app screenshot.
- Publish projects to obtain genuine live demo URLs, or leave the accurate “not published” status.
- Add the Formspree endpoint to the deployment environment variable `VITE_FORMSPREE_ENDPOINT` and redeploy after setting it.
- Recheck the public site and complete peer-feedback notes.

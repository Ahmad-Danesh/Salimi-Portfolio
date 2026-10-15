# Presentation outline — Ahmad Danesh Developer Portfolio

## 1. Project name and purpose
- Ahmad Danesh — Developer Portfolio.
- A bilingual React portfolio that presents selected course projects, learning goals, skills and contact information.

## 2. Problem it solves
- Provides a single place for a reviewer to explore my course projects, understand what each demonstrates, and find the public source repositories.

## 3. Main features to demonstrate
- Real client-side routes in `src/main.jsx`: `/home`, `/projects`, `/projects/:projectId`, `/skills`, `/about`, `/contact`.
- React Router routes are declared inside `StrictMode`.
- Responsive navigation with active route, mobile menu, English/Dari switch and RTL direction.
- Persisted dark/light theme.
- Reusable project card components and a filter interface.
- Project detail pages with source links and transparent live-demo status.
- Contact form validation and Formspree submission state handling.
- Reduced-motion CSS support and keyboard focus indicators.

## 4. React concepts used
- Components and reusable props.
- `useState` for language, theme, mobile menu, project filters and contact form.
- `useEffect` for updating document title/direction/theme and scroll position.
- React Router for declarative routes, nested project detail paths and 404 handling.
- `map()` and `filter()` for rendering/filtering project cards.
- Controlled form fields, validation and conditional status rendering.

## 5. Live demonstration plan
1. Visit `/home` and show the hero design.
2. Change theme to light, then back to dark.
3. Switch English/Dari and confirm layout direction changes.
4. Open `/projects`, filter the list, and open `/projects/study-hub`.
5. Refresh the project detail URL to show the deployment fallback works.
6. Visit `/skills`, `/about` and `/contact`.
7. Test invalid form submission, then show a valid Formspree submission only after verifying it in the Formspree dashboard.

## 6. Challenges and next improvements
- Create and capture genuine screenshots from each source app; current portfolio images are illustrative concept artwork, not real application screenshots.
- Publish the original projects to obtain real Live Demo URLs.
- Test the full production build, console, responsive breakpoints and route-refresh behavior.
- Improve README files and metadata of selected repositories.

## 7. What I learned
- Route declarations should be organized centrally in `src/main.jsx`.
- A portfolio needs accurate project evidence, not just attractive UI.
- Theme/language preferences and RTL direction should remain consistent across routes.
- Form success must be shown only after the remote form service confirms acceptance.

## Peer feedback record (complete after practice)
- Partner/reviewer: __________________
- Feedback received: __________________
- Changes made: __________________
- Date: __________________

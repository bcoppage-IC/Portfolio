# Portfolio

Personal portfolio site for Ben Coppage. Built with plain HTML, CSS, and vanilla JavaScript. No frameworks and no build step.

Live site: https://bcoppage-ic.github.io/Portfolio/

## Pages

- `index.html`: Home. Hero, featured Chicago dashboard, "At a glance" stats, and links to more projects.
- `projects.html`: Projects, in two groups. Data & Analysis (Chicago dashboard, central bank brief) and Writing (Brazil paper, Standing Orders).
- `experience.html`: Five job case stories from Echo Global Logistics, Credit Acceptance, and i.c.stars.
- `about.html`: About story, Background by career stage, and Skills.
- `brief.html`: Executive brief, "Do central bank wins translate to household wins?"
- `brazil.html`: Redirects to the Brazil paper card on `projects.html`.

Every page shares the same top bar and ends with the Contact section (`#contact`) and footer.

## Files

- `style.css`: all shared styles
- `site.js`: shared script for the phone menu, top bar border, reveal on scroll, and count-up stats
- `favicon.svg`: site icon
- `images/`: headshot (`photo.jpg`, square crop), dashboard screenshot (`chicago_dashboard.png`), brief charts, and the social preview image (`og-image.jpg`)
- `files/Executive_Brief_Coppage.pdf`: PDF version of the brief
- `files/Brief_Data_Coppage.xlsx`: data workbook behind the brief
- `resume.pdf`, `corruption_in_brazil.pdf`, `Standing_Orders.pdf`: linked documents

## Run locally

From the repo folder, run `python -m http.server`, then open http://localhost:8000.

## Features

- Fixed top bar that highlights the current page. It collapses into a menu button on phones.
- Count-up stats and fade-in sections, both turned off when reduced motion is set
- Responsive down to 360px
- Semantic HTML, visible focus states, and WCAG AA text contrast

## Status

- [x] Add headshot and `resume.pdf`
- [x] Link GitHub profile in the Contact section
- [x] Use an absolute `og:image` URL so LinkedIn previews work
- [ ] Replace `resume.pdf` with the current resume
- [ ] Replace the client description on the i.c.stars card once NDA clearance is confirmed

## Deploy with GitHub Pages

The site deploys from the `main` branch, root folder. Push to `main` and the live site updates in about a minute.

## Fonts

Inter and JetBrains Mono, loaded from Google Fonts.

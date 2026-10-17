# Portfolio

Personal portfolio site for Ben Coppage. Built with plain HTML, CSS, and vanilla JavaScript. No frameworks and no build step.

Live site: https://bcoppage-ic.github.io/Portfolio/

## Files

- `index.html`: main page content and inline script
- `brief.html`: executive brief, "Do central bank wins translate to household wins?"
- `style.css`: all styles
- `images/`: headshot (`photo.jpg`, square crop) and other site images
- `files/Executive_Brief_Coppage.pdf`: PDF version of the brief
- `files/Brief_Data_Coppage.xlsx`: data workbook behind the brief
- `resume.pdf`: resume for the download button

## Run locally

Open `index.html` in a browser. No install is needed.

## Features

- Sticky nav with an underline on the active section
- Consultative / Data toggle that changes the tagline and skill emphasis
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

# Xuan Qi — Academic Website

Official academic homepage of Xuan Qi (齐轩), Ph.D. student at the Italian Institute of Technology (IIT) and University of Genoa, with the AI for Good (AIGO) research group. Supervisor: Vittorio Murino.

## Website

- Live site: https://xuanqi99.github.io/
- Repository: https://github.com/xuanqi99/xuanqi99.github.io
- GitHub Pages source: `main`, `/ (root)`

This is a static HTML/CSS/JavaScript site. No framework, package installation, or build step is required. `.nojekyll` disables Jekyll processing.

## Files

- `index.html`: biography, academic profiles, publication news, selected publications, research interests
- `research.html`: Generative Modeling, Representation Geometry, Transfer Learning
- `publications.html`: the two supplied TMLR 2026 publications, with Paper and PDF links
- `cv.html`: current position, research interests, publications, academic profiles and email
- `contact.html`: email, profiles and affiliations
- `404.html`: custom error page with a domain-root base URL
- `styles.css`: responsive layout, light/dark themes and print styles
- `script.js`: theme preference, accessible mobile navigation and copyright year
- `assets/profile.svg`: neutral profile illustration, pending a real portrait

## Local preview

Run `python -m http.server 8000` in the repository root, then open `http://localhost:8000/`.

Regular pages use relative navigation and asset URLs. The custom 404 page uses `https://xuanqi99.github.io/` as its base so its home link and assets work at nested missing URLs. Update that base if the domain changes.

## Future additions

- Portrait: add `assets/profile.jpg`, then update the image source and alt text at the TODO in `index.html`. The existing portrait container preserves the layout.
- Full CV: add the real file at `assets/cv.pdf`, then enable a download link at the TODO in `cv.html`. There is currently no CV PDF download; the page contains only the supplied academic information and can be printed.

Publication details, June 2026 news dates, affiliations and profile URLs were provided by Xuan Qi. Keep publication entries synchronized across `index.html`, `publications.html` and `cv.html`. Only add links and biographical information that have been provided or confirmed.

## Deployment

Commit and push updates to `main`. GitHub Pages publishes from the repository root. In **Settings → Pages → Build and deployment**, the source is **Deploy from a branch**, with **main** and **/ (root)** selected.

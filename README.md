# Xuan Qi Academic Website

A lightweight, modern academic homepage inspired by the information architecture of Vittorio Murino's site, redesigned as a fast static site for GitHub Pages.

## Files

- `index.html` — homepage, news, selected publications, research overview
- `research.html` — research statement and themes
- `publications.html` — full publications list with year filters
- `cv.html` — web CV; includes Print / Save as PDF
- `contact.html` — contact and profile links
- `styles.css` — all visual styling
- `script.js` — dark mode, mobile navigation, publication filters
- `assets/` — portrait and publication thumbnails
- `404.html` — GitHub Pages fallback
- `.nojekyll` — serve the static files without Jekyll processing

## Deployment for this repository

- Repository: https://github.com/xuanqi99/xuanqi.github.io
- Branch: `main`
- Publishing folder: `/ (root)`
- Expected website: https://xuanqi99.github.io/xuanqi.github.io/

In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, then **main** and **/ (root)**, and click **Save**. No framework, package installation, or build command is required.

The account is `xuanqi99`, so `xuanqi.github.io` is a project repository. The account-level address `https://xuanqi99.github.io/` would require a repository named `xuanqi99.github.io`. The `404.html` base URL is pinned to this deployment so its stylesheet and home link work even for missing URLs several directories deep; update that base URL if the repository or domain changes.

All regular pages use relative links and asset paths. The CV is `cv.html`, with **Print / Save as PDF**; no separate PDF was supplied. If adding a PDF later, place it in `assets/` and link to it using a relative path.

To preview locally, run `python -m http.server 8000` in the repository root and visit `http://localhost:8000/`. The 404 page intentionally resolves its resources against the deployed site.

## Customize first

Search the project for these strings and replace them:

- `your.email@example.com`
- `https://scholar.google.com/`
- `https://www.linkedin.com/`
- `University / Lab Name`
- placeholder publication titles and authors

The supplied GitHub profile has been set to `https://github.com/xuanqi99`. All pages retain a visible template-content notice; publication links and generic Scholar/LinkedIn links are labeled as placeholders. Biography, research statements, news, education, experience, skills, location, email and affiliations remain supplied template content, not verified personal details. Replace those with your information and then remove the notices and placeholder labels as appropriate. Portrait and paper thumbnails are supplied placeholder SVGs.

Replace `assets/profile.svg` with a real image such as `assets/profile.jpg`, then update the `<img>` source in `index.html`.

## Deploy to GitHub Pages

### Option A — username.github.io

1. Create a GitHub repository named exactly `YOUR_GITHUB_USERNAME.github.io`.
2. Upload all files from this folder to the root of that repository.
3. Commit and push.
4. Open `https://YOUR_GITHUB_USERNAME.github.io`.

### Option B — normal repository

1. Create any public repository, e.g. `academic-homepage`.
2. Upload all files to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. Your site will appear at `https://YOUR_GITHUB_USERNAME.github.io/academic-homepage/`.

Because all internal links are relative, this template works both at the root domain and inside a repository subpath.

## Custom domain

After GitHub Pages is working:

1. Buy your preferred domain.
2. Open the repository's **Settings → Pages**.
3. Add the custom domain.
4. Configure the DNS records shown by GitHub at your registrar.
5. Enable **Enforce HTTPS**.

## Recommended content strategy

Keep the homepage short and high-signal:

- 1-sentence identity
- 3 research areas
- 3–5 selected publications
- 3–6 recent news items
- Scholar / GitHub / CV / email links above the fold

Put the complete bibliography on `publications.html`.

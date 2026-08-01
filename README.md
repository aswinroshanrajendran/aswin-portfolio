# Aswin Roshan — Portfolio

Single-file portfolio site: plain HTML/CSS/JS, GSAP for animation, no build step. Deployed free on GitHub Pages.

## Structure

- `index.html` — the whole site (one page, anchor-navigated sections: Home / About / Projects / Case Studies / Contact, floating dock nav)
- `aswin-cutout-transparent.svg`, `logo-icon.png`, `logo-mark.png` — the assets the site actually references
- `resources/` — raw source images (logo, portrait photos) kept for reference/future edits; not deployed
- `react-version/` — an earlier Vite + React + TypeScript + Tailwind + shadcn/ui scaffold, archived (not deployed, not deleted) in case that direction gets revisited

## Development

No build step. Either open `index.html` directly, or serve it locally:

```bash
npx http-server -p 5500 -c-1
```

## Deploying to GitHub Pages

1. Create the GitHub repo (any name works — this deploys via GitHub Actions, not branch-root serving, so no naming constraint).
2. Push to `main` — [.github/workflows/deploy.yml](.github/workflows/deploy.yml) deploys `index.html` and its three asset files automatically.
3. In the repo's Settings → Pages, set the source to "GitHub Actions" (one-time setup).

If you add new top-level assets the page references, add them to the `path:` list in `.github/workflows/deploy.yml` too.

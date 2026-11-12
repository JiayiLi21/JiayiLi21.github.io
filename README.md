# Jiayi Li academic homepage

The public site lives in `site/` and has no build-time dependencies.

- `site/index.html`: About, selected research, experience, and interests.
- `site/assets/styles.css`: responsive layout and light/dark appearance.
- `site/assets/site.js`: navigation, appearance, and email disclosure.
- `site/assets/images/`: portrait and favicon.
- `site/assets/logos/`: institutional affiliation marks.

Publications link directly to Google Scholar and public papers. Private CVs, manuscripts, preview screenshots, and source notes are not included.

Pushes to `main` publish `site/` to the `gh-pages` branch using `.github/workflows/deploy-pages.yml`.

The former VuePress site is preserved in `archive/vuepress-legacy-2026-08-30`.

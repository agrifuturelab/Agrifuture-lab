# Agri Future Lab — website starter

A separate, mobile-friendly, static website for the Agri Future Lab Facebook content brand. No framework, build process, paid hosting or API key required.

## What works
- Responsive homepage and section navigation
- English/Marathi switch for navigation and section headings (crop details and some educational text remain in English)
- Searchable seven-crop reference library with educational summaries
- Four working calculators: fertilizer nutrient mass, spray dilution from an *approved label rate*, area conversion, seed quantity
- Expandable science topics, AI/future-farming and student resources
- Facebook video cards, which become clickable after real URLs are configured
- Contact and Facebook links once configured

## Before publishing
1. Edit `data.js`: set `facebookUrl`, `contactEmail`, and each video's real `url`.
2. Replace placeholder video titles with actual video titles.
3. Review crop summaries with a local agronomist before relying on them for farming decisions.
4. Open `index.html` in a browser to test. All three files `index.html`, `styles.css`, `app.js` and `data.js` must remain together.

## Publish to GitHub Pages
1. Create a **new** GitHub repository, e.g. `agrifuture-lab` (do not modify your existing AgriSmart repository).
2. Upload `index.html`, `styles.css`, `app.js`, `data.js` to its root.
3. Open repository **Settings → Pages**; choose **Deploy from a branch**, branch `main`, folder `/ (root)`; Save.
4. Wait for deployment and open the URL displayed in Pages settings. The site URL is typically `https://YOUR-USERNAME.github.io/agrifuture-lab/`, but confirm the actual URL in GitHub.

## Not implemented in this static release
Live weather API, automated news feed, user login, AI chatbot, AI photo diagnosis, backend database, and video uploads. These need additional services and testing.

## Notes
- NPK fertilizer labels typically list N, P₂O₅, K₂O percentages; the calculator returns those nutrient-equivalent masses, not elemental P or K.
- The spray calculator is arithmetic only, **not a pesticide dose recommendation**.
- All crop content is general education; regional and product-specific guidance may differ.

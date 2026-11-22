# Agri Future Lab — Version 3.2

Live website: https://rohitrajethombre-sudo.github.io/Agrifuture-lab/

## Current features
- Searchable **36-crop** library with English and Marathi summaries and six expanded educational guide sections per crop
- English/Marathi language toggle
- Basic calculators: fertilizer nutrient mass, spray dilution (from approved label rate), land conversion, seed requirement
- Advanced nutrient and irrigation planning tools
- Field planning calculators: plant population, drip runtime, spray tank fills
- Learning: crop health, soil health, agriculture quiz and science resources
- Responsive layout and Facebook page link

## Important limitations
- Educational summaries are not crop-specific prescriptions. Confirm fertilizer rates, pesticide use, pest thresholds and local crop calendars with authorized extension services and registered product labels.
- All 36 crop entries and bilingual fields were checked in source; **full browser-based regression testing across every crop has not been completed**.
- Video gallery URLs and contact email are still placeholders until the site owner supplies verified links.

## Files
- `data.js`: original seven crops, Marathi summaries and site configuration
- `v31-crops.js`: 29 additional crops and Marathi summaries
- `v32-guides.js`: expanded six-section bilingual guide renderer
- `app.js`: main crop search, language toggle and base tools
- `v12.js`, `v13.js`, `v14.js`, `v20.js`, `v21.js`: additional tools and learning content
- `index.html`, `styles.css`: layout and styles

## Maintenance
GitHub Pages deploys automatically from `main`. Keep the site stable; only change content or fix confirmed bugs. Avoid publishing invented input doses or unverified external links.

# Worldview

An interactive dashboard on how **25 small nations** (all under 15M people) are adopting and governing AI.

- **Europe:** Estonia, Malta, Denmark, Finland, Norway, Ireland, Luxembourg, Iceland, Lithuania, Slovenia, Cyprus, Switzerland
- **Middle East:** UAE, Qatar, Bahrain, Jordan
- **Asia-Pacific:** Singapore, New Zealand, Bhutan
- **Africa:** Rwanda, Mauritius, Benin
- **Americas:** Uruguay, Costa Rica, Jamaica

The first six (Singapore, Estonia, UAE, Rwanda, Uruguay, Malta) have deeper profiles.

- **Overview**: an interactive world map (colour by readiness rank or AI use, region filters that zoom the map), AI-readiness heatmap (Oxford Insights 2025 pillar scores), generative-AI usage (Microsoft AI Diffusion), UAE vs Singapore usage trend, a 2017–2026 milestone timeline, and an at-a-glance comparison table.
- **Nation pages**: summary, stat tiles (World Bank, Oxford, Microsoft), readiness profile against the median of all 25, a locator map, sourced policy and governance facts filterable by topic, recent news, and what to watch.
- **News**: every development, newest first, filterable by nation and verification level.
- **Method**: how each claim was checked, corrections made, and limits.

Research cut-off: **10 October 2026**.

## Run it

No build step and no dependencies. Serve the folder:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765. Opening `index.html` directly also works.

## Files

| File | What it is |
|---|---|
| `index.html` | Page shell |
| `styles.css` | Styles with light and dark themes |
| `app.js` | Rendering, routing, and the SVG charts (vanilla JS) |
| `data/nations.js` | Data for the first six nations, plus shared metadata and sources |
| `data/nations-more.js` | Data for the other 19 nations |
| `vendor/` | d3-geo, d3-array, topojson-client and world-atlas (Natural Earth 110m), bundled so the map works offline |
| `METHODOLOGY.md` | Verification rules |

## Updating

Edit `data/nations.js` or `data/nations-more.js`. Each nation needs `group` (region), `geo` ([lon, lat] of the capital) and `isoN` (ISO numeric code, used to match map shapes). Each fact or news item looks like this:

```js
{
  date: "2026-06-14",            // YYYY, YYYY-MM or YYYY-MM-DD
  topic: "Institutions",          // facts only; drives the topic filter
  text: "...",                    // facts use `text`; news uses `title` + `summary`
  level: "verified",              // verified (3+ sources) | corroborated (2) | single (1)
  sources: [{ t: "Title", u: "https://..." }],
  note: "Optional: discrepancies between sources",
}
```

Keep `level` honest: it must match the number of **independent** sources that agree. Two pages from the same organisation count as one.

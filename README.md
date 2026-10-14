# Atlas

An interactive dashboard on how **102 small nations** (all under 15M people) are adopting and governing AI.

- **Europe (incl. South Caucasus):** Estonia, Malta, Denmark, Finland, Norway, Ireland, Luxembourg, Iceland, Lithuania, Slovenia, Cyprus, Switzerland, Sweden, Austria, Portugal, Greece, Latvia, Albania, Georgia, Armenia, Belgium, Czechia, Hungary, Croatia, Slovakia, Bulgaria, Serbia, Montenegro, Azerbaijan, Bosnia and Herzegovina, North Macedonia, Moldova, Belarus, Liechtenstein, Andorra, Monaco, San Marino
- **Middle East:** UAE, Qatar, Bahrain, Jordan, Kuwait, Oman, Lebanon, Palestine
- **Asia-Pacific (incl. Central Asia):** Singapore, New Zealand, Bhutan, Mongolia, Brunei, Kyrgyzstan, Laos, Fiji, Maldives, Tajikistan, Papua New Guinea, Tonga, Solomon Islands, Palau
- **Africa:** Rwanda, Mauritius, Benin, Tunisia, Botswana, Sierra Leone, Togo, Namibia, Cabo Verde, Seychelles, Gambia, Liberia, Mauritania, Libya, Congo, Gabon, Djibouti, Eswatini, Lesotho, Burundi, Comoros, São Tomé and Príncipe
- **Americas:** Uruguay, Costa Rica, Jamaica, El Salvador, Panama, Paraguay, Dominican Republic, Honduras, Trinidad and Tobago, Barbados, Bahamas, Guyana, Bolivia, Nicaragua, Belize, Suriname, Haiti, Saint Lucia, Antigua and Barbuda, Grenada, Saint Kitts and Nevis

**Features**
- **Overview:** highlights; a zoomable, draggable world map (colour by readiness or AI use, with region filters that zoom it); a searchable directory of every nation grouped by region; the readiness heatmap (Oxford Insights 2025); generative-AI use (Microsoft); AI talent (Stanford AI Index 2026); the UAE vs Singapore trend; milestones since 2024; and a sortable comparison table. Long rankings open on their top rows with a 'Show all' toggle.
- **Nation pages:** a zoomable locator map, stat tiles, the readiness profile against the median of all nations, facts newest first (with pre-2024 background behind a toggle), and news since 2024.
- **Collaborations:** cross-border AI partnerships (tech companies, shared EU supercomputers, development partners, government-to-government deals, treaties and regional blocs), with the most frequent partners charted and filters by type, partner and region.
- **News:** every development since January 2024, newest first, filterable by region, nation and verification level.
- **Method:** verification rules, the full audit, corrections, and limits.

Research cut-off: **10 October 2026** (12–14 October for the 57 nations added last).

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
| `data/nations-more.js` | Data for 19 more nations (added second) |
| `data/nations-more2.js` | Data for 20 more nations (added third) |
| `data/nations-more3.js` | Data for 25 more nations (added fourth) |
| `data/nations-more4.js` | Data for 6 more African nations (added fifth) |
| `data/nations-more5.js` | Data for 26 more nations (added sixth, including Saint Kitts and Nevis) |
| `data/collaborations.js` | Cross-border AI collaborations, each reusing an audited claim from the nation files |
| `vendor/` | d3-geo, d3-array, topojson-client and world-atlas (Natural Earth 110m), bundled so the map works offline |
| `METHODOLOGY.md` | Verification rules |

## Updating

Edit the matching file in `data/`. Each nation needs `group` (region), `geo` ([lon, lat] of the capital) and `isoN` (ISO numeric code, used to match map shapes). Each fact or news item looks like this:

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

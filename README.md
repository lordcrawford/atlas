# Atlas

An interactive dashboard on how **102 small nations** (all under 15M people) are adopting and governing AI.

- **Europe (incl. South Caucasus):** Estonia, Malta, Denmark, Finland, Norway, Ireland, Luxembourg, Iceland, Lithuania, Slovenia, Cyprus, Switzerland, Sweden, Austria, Portugal, Greece, Latvia, Albania, Georgia, Armenia, Belgium, Czechia, Hungary, Croatia, Slovakia, Bulgaria, Serbia, Montenegro, Azerbaijan, Bosnia and Herzegovina, North Macedonia, Moldova, Belarus, Liechtenstein, Andorra, Monaco, San Marino
- **Middle East:** UAE, Qatar, Bahrain, Jordan, Kuwait, Oman, Lebanon, Palestine
- **Asia-Pacific (incl. Central Asia):** Singapore, New Zealand, Bhutan, Mongolia, Brunei, Kyrgyzstan, Laos, Fiji, Maldives, Tajikistan, Papua New Guinea, Tonga, Solomon Islands, Palau
- **Africa:** Rwanda, Mauritius, Benin, Tunisia, Botswana, Sierra Leone, Togo, Namibia, Cabo Verde, Seychelles, Gambia, Liberia, Mauritania, Libya, Congo, Gabon, Djibouti, Eswatini, Lesotho, Burundi, Comoros, São Tomé and Príncipe
- **Americas:** Uruguay, Costa Rica, Jamaica, El Salvador, Panama, Paraguay, Dominican Republic, Honduras, Trinidad and Tobago, Barbados, Bahamas, Guyana, Bolivia, Nicaragua, Belize, Suriname, Haiti, Saint Lucia, Antigua and Barbuda, Grenada, Saint Kitts and Nevis

**Features**

Collaborations is the landing page. The site is behind a password gate (see below).

- **Collaborations:** AI agreements between countries (48 in all: 33 two-country deals and 15 groups such as the LUMI supercomputer consortium, the Council of Europe AI convention, the Global Partnership on AI and CARICOM's endorsement of the Caribbean AI policy roadmap). A compact list (flags, countries, a short label, the month) sits beside a world map that shows every agreement as a faint line. Picking one, or letting the tour step through them every 3 seconds, zooms the map to its countries, shades them and opens one panel with the full description and sources. Search by country or topic, or click a country on the map. Each agreement has its own link (`#collab/<id>`) that opens it with the tour paused. A Timeline view (`#collab/timeline`) plots every agreement by signing date, then lists them year by year. An Alignment view (`#collab/alignment`) shows which partner groups each nation's agreements are with (the United States, China, Europe, the Gulf states, Asia-Pacific, Africa, the Americas or global forums): a map coloured by each nation's main partner group, a few computed findings, and a sortable table with a dot per agreement. Company deals and aid projects are left out.
- **Overview:** a zoomable world map shaded by readiness rank (with region filters that zoom it), a sortable comparison table that keeps one index figure (the Oxford Insights readiness rank) for context, and links to the original sources for wider data (Oxford Insights, Microsoft's AI Diffusion reports, the Stanford AI Index, OECD.AI, the OECD Digital Economy Policy Platform and the World Bank). The readiness heatmap, the Microsoft AI-use charts and the Stanford talent chart were removed because they only re-plotted other people's data.- **Nation pages:** a zoomable locator map, stat tiles, the readiness profile against the median of all nations, a "Key documents" section (up to two official strategies, laws or guidance documents to read first), an "AI partners" section (a map from the nation to the governments it has AI agreements with, plus links to each agreement), facts newest first (with pre-2024 background behind a toggle), and news since 2024.
- **News:** every development since January 2024, newest first, filterable by region, nation and verification level.
- **Method:** verification rules, the full audit, corrections, and limits.
- **Profiles, saved items and review marks:** sign in (or create a profile) from the top bar. Every agreement, news item and key document has a ☆ to save it, a ✓ to mark it read and vetted, and a ⚠ to flag it as suspicious; the ✓ and ⚠ open a note box. The Saved & reviewed page (`#saved`, in the profile menu) lists them by kind, and can download a JSON copy.

## Password and profiles: what they do and don't protect

The password gate (`gate.js`) and the profiles are client-side only, because the site is static files:

- **Gate:** the page asks for the password before anything renders. The password is stored only as a SHA-256 hash, and "Remember on this device" keeps the browser unlocked (the profile menu has "Lock the site"). This keeps out casual visitors, but anyone who requests `data/*.js` directly can still read the data. For real protection, put the site behind the host's own access control (for example Cloudflare Access, Netlify or Vercel password protection, or HTTP basic auth on your own server). GitHub Pages cannot password-protect a site. To change the password, replace `PASS_HASH` in `gate.js` with the SHA-256 of the new one (`printf 'newpass' | shasum -a 256`).
- **Profiles:** stored in this browser's `localStorage` (name, random salt, salted SHA-256 of the password, and per profile the saved items and marks). They do not sync across browsers or devices, clearing site data deletes them, and anyone with access to the browser can read them. Use a password you don't use anywhere else. Moving this to a database later means replacing the `Store` object in `app.js`.

Research cut-off: **20 October 2026** for news (a search across all regions for 10–20 October); full research to 10 October 2026 (12–14 October for the 57 nations added last).

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
| `gate.js` | Password gate and the SHA-256 helper used for profile passwords |
| `styles.css` | Styles with light and dark themes |
| `app.js` | Rendering, routing, and the SVG charts (vanilla JS) |
| `data/nations.js` | Data for the first six nations, plus shared metadata and sources |
| `data/nations-more.js` | Data for 19 more nations (added second) |
| `data/nations-more2.js` | Data for 20 more nations (added third) |
| `data/nations-more3.js` | Data for 25 more nations (added fourth) |
| `data/nations-more4.js` | Data for 6 more African nations (added fifth) |
| `data/nations-more5.js` | Data for 26 more nations (added sixth, including Saint Kitts and Nevis) |
| `data/documents.js` | Up to two key documents per nation, each linking to the document or its official page |
| `data/collaborations.js` | Country-to-country AI collaborations (`bilateral` pairs and `group` hubs with members), plus map positions for partner countries that are not on the site |
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

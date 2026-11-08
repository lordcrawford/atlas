# Atlas

A dashboard on how countries outside the AI frontier use and govern AI.

## Scope

"Outside the frontier" means no frontier models and no key role in the chip supply chain. The yardstick is the Stanford AI Index 2026: the countries it credits with a notable model in 2025 (United States, China, South Korea, Canada, France, United Kingdom) and those it names in the chip supply chain (United States, South Korea, Taiwan) are left out. Singapore is kept as a named exception. Territories are not covered. The rule, the excluded list and the countries still to add are in `data/scope.js`.

126 countries so far: every sovereign state under 15 million people (121) plus India, Indonesia, Pakistan, Nigeria and Brazil. The other 63 in-scope countries are being added largest first, each once its facts have been sourced and checked.

- **Europe (incl. South Caucasus):** Estonia, Malta, Denmark, Finland, Norway, Ireland, Luxembourg, Iceland, Lithuania, Slovenia, Cyprus, Switzerland, Sweden, Austria, Portugal, Greece, Latvia, Albania, Georgia, Armenia, Belgium, Czechia, Hungary, Croatia, Slovakia, Bulgaria, Serbia, Montenegro, Azerbaijan, Bosnia and Herzegovina, North Macedonia, Moldova, Belarus, Liechtenstein, Andorra, Monaco, San Marino, Kosovo, Holy See
- **Middle East:** UAE, Qatar, Bahrain, Jordan, Kuwait, Oman, Lebanon, Palestine
- **Asia-Pacific (incl. Central Asia):** Singapore, New Zealand, Bhutan, Mongolia, Brunei, Kyrgyzstan, Laos, Fiji, Maldives, Tajikistan, Papua New Guinea, Tonga, Solomon Islands, Palau, Timor-Leste, Vanuatu, Samoa, Kiribati, Micronesia, Marshall Islands, Nauru, Tuvalu, Turkmenistan, India, Indonesia, Pakistan
- **Africa:** Rwanda, Mauritius, Benin, Tunisia, Botswana, Sierra Leone, Togo, Namibia, Cabo Verde, Seychelles, Gambia, Liberia, Mauritania, Libya, Congo, Gabon, Djibouti, Eswatini, Lesotho, Burundi, Comoros, São Tomé and Príncipe, South Sudan, Central African Republic, Eritrea, Guinea-Bissau, Equatorial Guinea, Nigeria
- **Americas:** Uruguay, Costa Rica, Jamaica, El Salvador, Panama, Paraguay, Dominican Republic, Honduras, Trinidad and Tobago, Barbados, Bahamas, Guyana, Bolivia, Nicaragua, Belize, Suriname, Haiti, Saint Lucia, Antigua and Barbuda, Grenada, Saint Kitts and Nevis, Cuba, Dominica, Saint Vincent and the Grenadines, Brazil

## Pages

The site opens on Collaborations and sits behind a password gate (see below).

- **Collaborations.** 49 AI agreements between governments: 33 two-country deals and 16 groups (LUMI, the Council of Europe AI convention, GPAI, CARICOM's AI roadmap, the Pacific Islands Forum's AI principles and so on). A list sits beside a globe that draws each agreement as a route. Picking one, or letting the tour run, turns the globe to its countries and opens the description and sources. Each agreement has its own link, `#collab/<id>`. Company deals and aid projects are not included.
- **Nations.** A country finder, a map shaded by readiness rank or governance model, a comparison table, and links to the source datasets (Oxford Insights, Microsoft's AI Diffusion reports, the Stanford AI Index, OECD.AI, the OECD Digital Economy Policy Platform, the World Bank). Each nation page has a locator map, stat tiles, a readiness profile against the median, up to two key documents, an AI partners section, facts newest first (pre-2024 background behind a toggle) and news since 2024.
- **News.** Everything since January 2024, with the preview image each source page publishes (hotlinked and credited, listed in `data/news-images.js`). Items confirmed by two or more sources come first. Sort by date or by a relevance score, filter by region, nation or number of sources.
- **Findings.** Six claims about what the data shows, counted live from the data, each opening to the nations behind it.
- **Governance model.** Four codes per nation: approach, rules, compute and bloc. Shown on the nation page with the facts each rests on, and usable as a map shading and a table view. The codes are editorial readings; the rules are in Method and `METHODOLOGY.md`.
- **Method.** Sourcing rules, the codebook, audit log, corrections and limits.
- **Maps.** The 3D/2D buttons switch every map between a globe and a flat map (remembered per browser). ⤢ opens a map in full view.
- **Profiles.** Sign in from the top bar. Agreements, news items and key documents can be saved (☆), marked read (✓), flagged (⚠) or annotated (✎). The Saved page (`#saved`) lists them and can download a JSON copy.

## Password and profiles

Everything is static files, so both are client-side only.

- **Gate** (`gate.js`): the password is stored as a SHA-256 hash and "Remember on this device" keeps the browser unlocked. It stops casual visitors, but anyone requesting `data/*.js` directly can read the data. For real protection use the host's access control (Vercel or Netlify password protection, Cloudflare Access, basic auth). To change the password, replace `PASS_HASH` with the output of `printf 'newpass' | shasum -a 256`.
- **Profiles** live in the browser's `localStorage` (name, salt, salted hash, saved items and marks) and do not sync between browsers or devices. Notes are never deleted: editing keeps earlier versions, there is no delete-profile button, and up to 30 snapshots per profile can be restored from the Saved page. In Chromium browsers, "Choose a backup file" on the Saved page writes every change to a JSON file; in Safari and Firefox use "Download a copy". Restores merge rather than replace. Clearing site data or a private window still wipes storage, which is why the backup file matters. Moving to a shared database means replacing the `Store` object in `app.js`.

Data as of 5 November 2026 (sixth audit). Earlier audits and the news cut-offs are listed in `METHODOLOGY.md`.

## Run it

No build step, no dependencies:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765. Opening `index.html` directly also works.

## Files

| File | What it is |
|---|---|
| `index.html` | Page shell |
| `gate.js` | Password gate and the SHA-256 helper |
| `styles.css` | Styles, light and dark |
| `app.js` | Rendering, routing, maps and charts (vanilla JS) |
| `data/nations.js` | First six nations, plus shared metadata and sources |
| `data/nations-more.js` … `nations-more6.js` | The rest of the under-15M states, in the order they were added |
| `data/nations-more7.js` | India, Indonesia, Pakistan, Nigeria, Brazil (added 5 November 2026) |
| `data/documents.js` | Up to two key documents per nation |
| `data/scope.js` | Who is left out and why, the exception, and the countries still to add |
| `data/news-images.js` | Preview image for each news source page |
| `data/models.js` | The governance codebook and each nation's codes with what they rest on |
| `data/collaborations.js` | Agreements (`bilateral` pairs and `group` hubs), plus map positions for partner countries not on the site |
| `vendor/` | d3-geo, d3-array, topojson-client, world-atlas (Natural Earth 110m) and the Raleway font (OFL) |
| `METHODOLOGY.md` | Sourcing rules and audit log |

## Updating

Edit the matching file in `data/`. Each nation needs `group` (region), `geo` ([lon, lat] of the capital) and `isoN` (ISO numeric code, used to match map shapes). A fact or news item:

```js
{
  date: "2026-06-14",            // YYYY, YYYY-MM or YYYY-MM-DD
  topic: "Institutions",          // facts only; one of the ten topics
  text: "...",                    // facts use `text`; news uses `title` + `summary`
  level: "verified",              // verified (3+ sources) | corroborated (2) | single (1)
  sources: [{ t: "Title", u: "https://..." }],
  note: "Optional: discrepancies between sources",
}
```

`level` must match the number of independent sources. Two pages from the same organisation count as one.

Topics: Strategy & readiness, Regulation, Institutions, Compute & infrastructure, Skills & education, Public sector, International, Economy, Research & models, Society & ethics.

Codes go in `data/models.js`: a value followed by what it rests on, which is the start of a fact's text, `"@id"` for an agreement, or `"#eu"`, `"#eea"`, `"#au"` for a membership. If a fact's opening words change, update the entry; the console warns when one no longer matches.

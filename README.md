# Atlas

An interactive dashboard on how **countries outside the AI frontier** are adopting and governing AI.

**Scope.** Atlas covers countries that neither produce frontier AI models nor hold a key place in the AI chip supply chain. The line follows a published yardstick, the Stanford AI Index 2026: left out are the countries it credits with a notable AI model in 2025 (United States, China, South Korea, Canada, France, United Kingdom) and those it names in the chip supply chain (United States, South Korea, Taiwan). Singapore, credited with one model, is kept as a named exception. Territories are not included. The rule, the excluded list and the countries still to add live in `data/scope.js`.

**Coverage so far: 126 countries**: every sovereign state under 15 million people (121) and the five largest of the rest (India, Indonesia, Pakistan, Nigeria, Brazil, in `data/nations-more7.js`). The other 63 larger countries inside the scope are being added largest first, each only once its facts are sourced and checked.

- **Europe (incl. South Caucasus):** Estonia, Malta, Denmark, Finland, Norway, Ireland, Luxembourg, Iceland, Lithuania, Slovenia, Cyprus, Switzerland, Sweden, Austria, Portugal, Greece, Latvia, Albania, Georgia, Armenia, Belgium, Czechia, Hungary, Croatia, Slovakia, Bulgaria, Serbia, Montenegro, Azerbaijan, Bosnia and Herzegovina, North Macedonia, Moldova, Belarus, Liechtenstein, Andorra, Monaco, San Marino, Kosovo, Holy See (Vatican City)
- **Middle East:** UAE, Qatar, Bahrain, Jordan, Kuwait, Oman, Lebanon, Palestine
- **Asia-Pacific (incl. Central Asia):** Singapore, New Zealand, Bhutan, Mongolia, Brunei, Kyrgyzstan, Laos, Fiji, Maldives, Tajikistan, Papua New Guinea, Tonga, Solomon Islands, Palau, Timor-Leste, Vanuatu, Samoa, Kiribati, Micronesia, Marshall Islands, Nauru, Tuvalu, Turkmenistan
- **Africa:** Rwanda, Mauritius, Benin, Tunisia, Botswana, Sierra Leone, Togo, Namibia, Cabo Verde, Seychelles, Gambia, Liberia, Mauritania, Libya, Congo, Gabon, Djibouti, Eswatini, Lesotho, Burundi, Comoros, São Tomé and Príncipe, South Sudan, Central African Republic, Eritrea, Guinea-Bissau, Equatorial Guinea
- **Americas:** Uruguay, Costa Rica, Jamaica, El Salvador, Panama, Paraguay, Dominican Republic, Honduras, Trinidad and Tobago, Barbados, Bahamas, Guyana, Bolivia, Nicaragua, Belize, Suriname, Haiti, Saint Lucia, Antigua and Barbuda, Grenada, Saint Kitts and Nevis, Cuba, Dominica, Saint Vincent and the Grenadines

**Features**

Collaborations is the landing page. The site is behind a password gate (see below).

- **Collaborations:** AI agreements between countries (49 in all: 33 two-country deals and 16 groups such as the LUMI supercomputer consortium, the Council of Europe AI convention, the Global Partnership on AI, CARICOM's endorsement of the Caribbean AI policy roadmap and the Pacific Islands Forum's AI principles). A compact list (flags, countries, a short label, the month) sits beside a 3D globe that shows every agreement as a faint route rising off the surface. Picking one, or letting the tour step through them every 6 seconds, turns the globe to its countries, shades them and opens one panel with the full description and sources. Search by country or topic, or click a country on the globe. Each agreement has its own link (`#collab/<id>`) that opens it with the tour paused. The **3D** and **2D** buttons in the map's corner switch every map on the site between the globe and a flat world map; the choice is remembered. Company deals and aid projects are left out.
- **Overview:** a map shaded by readiness rank, shown as a 3D globe or a flat 2D map (drag to look around; region filters move it to a region), a sortable comparison table that keeps one index figure (the Oxford Insights readiness rank) for context, and links to the original sources for wider data (Oxford Insights, Microsoft's AI Diffusion reports, the Stanford AI Index, OECD.AI, the OECD Digital Economy Policy Platform and the World Bank). The readiness heatmap, the Microsoft AI-use charts and the Stanford talent chart were removed because they only re-plotted other people's data.- **Nation pages:** a zoomable locator map, stat tiles, the readiness profile against the median of all nations, a "Key documents" section (up to two official strategies, laws or guidance documents to read first), an "AI partners" section (a map from the nation to the governments it has AI agreements with, plus links to each agreement), facts newest first (with pre-2024 background behind a toggle), and news since 2024.
- **News:** a lead story and a grid of cards, each with the preview image its source page publishes (loaded from the source's own site and credited; listed in `data/news-images.js`, rebuilt at each audit). Every development since January 2024, sortable by date or by relevance (one score combining trending, impact and insight, computed from each item's text, sources and date, with the reasons shown on each item), and filterable by region, nation and number of sources.
- **Findings:** six claims about what the data shows (who writes their own rules, who leads with strategy, how size and income track approach, where compute comes from, the role of outside bodies, and bloc ties). Every number is counted from the data when the page is drawn, and each group opens to the nations behind it, linked to the fact or agreement its code rests on.
- **Governance model:** each nation is coded on four questions: approach (rules first, adoption first, aligning, no AI policy yet), rules (own AI law or bill, EU AI Act, regional body or treaty, none on record), compute (national, shared, foreign partner, none on record) and bloc (Europe, United States, China, more than one, none on record). The nation page shows the codes with the facts they rest on, the Overview map can be shaded by any of them, and the Overview table has a Governance model view. The codes are editorial readings; the rules are in Method and `METHODOLOGY.md`.
- **Method:** verification rules, the codebook for the governance model, the full audit, corrections, and limits.
- **Profiles, saved items and review marks:** sign in (or create a profile) from the top bar. Every agreement, news item and key document has a ☆ to save it, a ✓ to mark it read and vetted, a ⚠ to flag it as suspicious, and a ✎ to add a note at any time (✓ and ⚠ also open the note box). The Saved & reviewed page (`#saved`, in the profile menu) has a toggle between Saved, Read & vetted, Seems suspicious and Notes, showing one list at a time, and can download a JSON copy.

## Password and profiles: what they do and don't protect

The password gate (`gate.js`) and the profiles are client-side only, because the site is static files:

- **Gate:** the page asks for the password before anything renders. The password is stored only as a SHA-256 hash, and "Remember on this device" keeps the browser unlocked; to ask for it again, clear the site's data in the browser. This keeps out casual visitors, but anyone who requests `data/*.js` directly can still read the data. For real protection, put the site behind the host's own access control (for example Cloudflare Access, Netlify or Vercel password protection, or HTTP basic auth on your own server). GitHub Pages cannot password-protect a site. To change the password, replace `PASS_HASH` in `gate.js` with the SHA-256 of the new one (`printf 'newpass' | shasum -a 256`).
- **Profiles:** stored in this browser's `localStorage` (name, random salt, salted SHA-256 of the password, and per profile the saved items and marks). They do not sync across browsers, devices or site addresses. To keep notes safe:
  - The site never deletes a note. Editing or clearing one keeps the earlier text under "Earlier versions", and each version can be restored. There is no "delete profile" button.
  - It keeps up to 30 snapshots of each profile (at most one every five minutes), which can be restored from the Saved page.
  - **Backup file:** in Chrome, Edge, Brave, Arc and Opera, "Choose a backup file" on the Saved page writes every change to a JSON file on the computer. That copy survives clearing the browser's data. Browsers ask for permission again after a restart ("Resume backups"). In Safari and Firefox, use "Download a copy" now and then; the profile menu counts the changes since the last download.
  - "Restore from a file" (a backup file or a download) and snapshot restores merge with what is there: nothing current is removed, and the newer version of each item wins.
  - A forgotten password can be reset in the sign-in box; the notes are kept.
  - The site asks the browser to keep its storage (`navigator.storage.persist()`).
  - Clearing site data, private windows and Safari's cleanup of sites not visited for a while still erase browser storage, which is why the backup file matters. A shared database would remove this risk; moving to one means replacing the `Store` object in `app.js`.

Research cut-off: **26 October 2026** for news (searches across all regions for 10–26 October); fifth full audit 26 October 2026; full research to 10 October 2026 (12–14 October for the 57 nations added in the fourth to sixth batches, and 21 October for the 19 added last).

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
| `data/nations-more7.js` | The first larger countries added after the scope widened (5 November 2026): India, Indonesia, Pakistan, Nigeria, Brazil |
| `data/nations-more6.js` | Data for the last 19 (added 21 October 2026): the remaining sovereign states under 15M people, plus Kosovo and the Holy See |
| `data/documents.js` | Up to two key documents per nation, each linking to the document or its official page |
| `data/scope.js` | What the site covers: who is left out as frontier and why, the one exception, and the in-scope countries still to add |
| `data/news-images.js` | For each news source page, the preview image that page publishes; the site links to it and never copies it |
| `data/models.js` | The coded governance model: the codebook (`fields`), the four codes per nation and what each rests on (`codes`) |
| `data/collaborations.js` | Country-to-country AI collaborations (`bilateral` pairs and `group` hubs with members), plus map positions for partner countries that are not on the site |
| `vendor/` | d3-geo, d3-array, topojson-client and world-atlas (Natural Earth 110m), bundled so the map works offline, and the Raleway font (`vendor/fonts`, SIL Open Font License) |
| `METHODOLOGY.md` | Verification rules |

## Updating

Edit the matching file in `data/`. Each nation needs `group` (region), `geo` ([lon, lat] of the capital) and `isoN` (ISO numeric code, used to match map shapes). Each fact or news item looks like this:

```js
{
  date: "2026-06-14",            // YYYY, YYYY-MM or YYYY-MM-DD
  topic: "Institutions",          // facts only; one of the ten topics below
  text: "...",                    // facts use `text`; news uses `title` + `summary`
  level: "verified",              // verified (3+ sources) | corroborated (2) | single (1)
  sources: [{ t: "Title", u: "https://..." }],
  note: "Optional: discrepancies between sources",
}
```

Keep `level` honest: it must match the number of **independent** sources that agree. Two pages from the same organisation count as one.

Fact topics are fixed at ten: Strategy & readiness, Regulation, Institutions, Compute & infrastructure, Skills & education, Public sector, International, Economy, Research & models, Society & ethics.

A nation's codes live in `data/models.js`. Each is a value followed by what it rests on: the start of a fact's text on that nation's page, `"@id"` for an agreement, or `"#eu"`, `"#eea"`, `"#au"` for a membership. If a fact's opening words are edited, update the matching entry; the browser console warns when one no longer matches.

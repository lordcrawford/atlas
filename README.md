# Archipelago

A dashboard on how countries outside the AI frontier use and govern AI.

The project was called Atlas until 23 November 2026. The old name remains in places a visitor never sees: the browser storage keys (`atlas-*`), the `ATLAS` data object, the backup file format and the Supabase table, so that saved notes and old backups keep working.

## Scope

"Outside the frontier" means no frontier models and no key role in the chip supply chain. The yardstick is the Stanford AI Index 2026: the countries it credits with a notable model in 2025 (United States, China, South Korea, Canada, France, United Kingdom) and those it names in the chip supply chain (United States, South Korea, Taiwan) are left out. Singapore is kept as a named exception. Territories are not covered. The rule, the excluded list and the countries still to add are in `data/scope.js`.

126 countries so far: every sovereign state under 15 million people (121) plus India, Indonesia, Pakistan, Nigeria and Brazil. The other 63 in-scope countries are being added largest first, each once its facts have been sourced and checked.

- **Europe (incl. South Caucasus):** Estonia, Malta, Denmark, Finland, Norway, Ireland, Luxembourg, Iceland, Lithuania, Slovenia, Cyprus, Switzerland, Sweden, Austria, Portugal, Greece, Latvia, Albania, Georgia, Armenia, Belgium, Czechia, Hungary, Croatia, Slovakia, Bulgaria, Serbia, Montenegro, Azerbaijan, Bosnia and Herzegovina, North Macedonia, Moldova, Belarus, Liechtenstein, Andorra, Monaco, San Marino, Kosovo, Holy See
- **Middle East:** UAE, Qatar, Bahrain, Jordan, Kuwait, Oman, Lebanon, Palestine
- **Asia-Pacific (incl. Central Asia):** Singapore, New Zealand, Bhutan, Mongolia, Brunei, Kyrgyzstan, Laos, Fiji, Maldives, Tajikistan, Papua New Guinea, Tonga, Solomon Islands, Palau, Timor-Leste, Vanuatu, Samoa, Kiribati, Micronesia, Marshall Islands, Nauru, Tuvalu, Turkmenistan, India, Indonesia, Pakistan
- **Africa:** Rwanda, Mauritius, Benin, Tunisia, Botswana, Sierra Leone, Togo, Namibia, Cabo Verde, Seychelles, Gambia, Liberia, Mauritania, Libya, Congo, Gabon, Djibouti, Eswatini, Lesotho, Burundi, Comoros, São Tomé and Príncipe, South Sudan, Central African Republic, Eritrea, Guinea-Bissau, Equatorial Guinea, Nigeria
- **Americas:** Uruguay, Costa Rica, Jamaica, El Salvador, Panama, Paraguay, Dominican Republic, Honduras, Trinidad and Tobago, Barbados, Bahamas, Guyana, Bolivia, Nicaragua, Belize, Suriname, Haiti, Saint Lucia, Antigua and Barbuda, Grenada, Saint Kitts and Nevis, Cuba, Dominica, Saint Vincent and the Grenadines, Brazil

## Pages

The site opens on Collaborations and is open to anyone.

- **Collaborations.** 55 AI agreements between governments: 35 two-country deals and 20 groups (LUMI, the Council of Europe AI convention, GPAI, the Paris Call on AI safety, CARICOM's AI roadmap, the Pacific Islands Forum's AI principles and so on). A list sits beside a globe that draws each agreement as a route. Picking one, or letting the tour run, turns the globe to its countries and opens the description and sources. Each agreement has its own link, `#collab/<id>`. Company deals and aid projects are not included.
- **Nations.** A country finder, a map shaded by readiness rank or governance model, and links to the source datasets (Oxford Insights, Microsoft's AI Diffusion reports, the Stanford AI Index, OECD.AI, the OECD Digital Economy Policy Platform, the World Bank). Each nation page has a locator map, stat tiles, a readiness profile against the median, up to two key documents, an AI partners section, facts newest first (pre-2024 background behind a toggle) and news since 2024.
- **News.** Everything since January 2024, with the preview image each source page publishes (hotlinked, linked back to the source page, listed in `data/news-images.js`). Items confirmed by two or more sources come first. Sort by date or by a relevance score, filter by region, nation or number of sources.
- **Findings.** Six claims about what the data shows, counted live from the data, each opening to the nations behind it.
- **Governance model.** Four codes per nation: approach, rules, compute and bloc. Shown on the nation page with the facts each rests on, and usable as a map shading. The codes are editorial readings; the rules are in Method and `METHODOLOGY.md`.
- **Method.** Sourcing rules, the codebook, audit log, corrections and limits.
- **Privacy, Terms, Contact** (`#privacy`, `#terms`, `#contact`), linked in the footer. The contact form posts to Web3Forms, which emails the message to the address its access key was made with, so no address appears in the site. Put the key in `W3F_KEY` in `app.js`.
- **Maps.** The 3D/2D buttons switch every map between a globe and a flat map (remembered per browser). ⤢ opens a map in full view.
- **Saving and flagging.** Anyone can save (☆) or flag (⚠) an agreement, news item or key document without signing in; the marks are kept in their own browser and listed on the Saved page (`#saved`), which can download a JSON copy. Flagging asks why, and a visitor's reason is emailed to the site owner through Web3Forms with the item it concerns. The read tick (✓) is the owner's review mark and is shown with sign-in. Sign-in (a named profile with a password, also browser-only) is shown only on a browser that has opened the private address `#signin` once; signing in merges that browser's unsigned marks into the profile.

## Accounts

Online accounts are switched off for now: `ACCOUNTS_ON` in `app.js` is `false` and the supabase-js script tag in `index.html` is commented out, so profiles are browser-only and nothing is sent to Supabase. The account code is kept. Turning it back on means flipping the flag, restoring the script tag, updating the Privacy Policy and Terms, and giving Supabase a custom email sender so password resets reach people. How it works when on:

- **Accounts** use Supabase: an email and a password, stored hashed by Supabase. "Confirm email" is off in Supabase, so a new account is signed in at once. "Forgot your password?" emails a reset link that returns to the site, so its address must be in Supabase's redirect URLs. Each account's saved items and notes sit in one row of `atlas_profiles`, which only that account can read or write. Create the table once by running `supabase/schema.sql` in the Supabase SQL Editor. The browser keeps its own copy, and every sync merges the two, so notes are never lost. A browser-only profile that is signed in when someone signs into an account is merged into it. Snapshots, the backup file and "Download a copy" still work as before. Supabase's built-in mail, used only for reset links, reaches only members of the Supabase team and sends a few emails an hour; anyone else needs custom SMTP set up in Supabase.

Data as of 22 November 2026 (eighth audit and news search). Earlier audits and the news cut-offs are listed in `METHODOLOGY.md`.

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
| `vercel.json` | Security headers sent with every page: a Content-Security-Policy (scripts only from this site, no inline scripts, connections only to this site and Web3Forms), no framing by other sites, no MIME sniffing, HTTPS only |
| `analytics.js` | Loads Vercel Web Analytics and Speed Insights (a file of its own so inline scripts can stay blocked) |
| `gate.js` | SHA-256 helper for browser-only profiles |
| `styles.css` | Styles, light and dark |
| `app.js` | Rendering, routing, maps and charts (vanilla JS) |
| `data/nations.js` | First six nations, plus shared metadata and sources |
| `data/nations-more.js` … `nations-more6.js` | The rest of the under-15M states, in the order they were added |
| `data/nations-more7.js` | India, Indonesia, Pakistan, Nigeria, Brazil (added 5 November 2026) |
| `data/updates-2026-11.js`, `updates-2026-11b.js` | News, facts, agreements and documents found in the two November 2026 searches (to 16 and to 22 November), pushed onto the nations they concern |
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

# Worldview

An interactive dashboard on how six small nations are adopting and governing AI: **Singapore, Estonia, the UAE, Rwanda, Uruguay and Malta**.

- **Overview**: AI-readiness heatmap (Oxford Insights 2025 pillar scores), generative-AI usage (Microsoft AI Diffusion), UAE vs Singapore usage trend, a 2017–2026 milestone timeline, and an at-a-glance comparison table.
- **Nation pages**: summary, stat tiles (World Bank, Oxford, Microsoft), readiness profile against the six-nation median, sourced policy and governance facts filterable by topic, recent news, and what to watch.
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
| `data/nations.js` | **All data**: facts, news, statistics and sources |
| `METHODOLOGY.md` | Verification rules |

## Updating

Edit `data/nations.js`. Each fact or news item looks like this:

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

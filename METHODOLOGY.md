# Methodology

## Verification levels

| Badge | Meaning |
|---|---|
| ✓✓✓ **Verified** | At least 3 independent sources agree on the substance of the claim |
| ✓✓ **Corroborated** | 2 independent sources agree |
| ! **Single source** | Only 1 source found. Shown, but flagged |

Pages from the same organisation count as **one** source. Primary sources (government releases, official documents, the publisher's own report) were preferred, then checked against independent coverage (news outlets, law firms, research bodies).

## Which sources count

Government and parliament sites, international organisations, established news outlets, law firms and recognised research bodies. Third-party AI-policy tracker sites (for example anuragverma.co, regulations.ai, levellers.ai, straitsai.institute, aipolicytracker.org), auto-generated regulation explainers, compliance-vendor blogs and personal blogs or newsletters are not used: they are not independent evidence, and several are projects much like this one.

## Index figures

These were read from the publisher's own data, not from secondary summaries:

- **Oxford Insights Government AI Readiness Index 2025**: the full rankings table (pp. 59–68) of the validated January 2026 report. The December 2025 release had errors, and many third-party sites still quote it (e.g. Estonia 19th, Uruguay 52nd, UAE 23rd).
- **Microsoft AI Diffusion**: the H2 2025 report appendix (PDF). Q1 2026 figures are from WAM and Telecom Review coverage. Q2 2026 figures are from Microsoft's 22 Sep 2026 release.
- **World Bank WDI**: population, GDP per capita and internet use, pulled from the World Bank API.

## Full audit (10 Oct 2026)

Every claim on the site was re-checked after the build:

1. All cited pages (~470) were fetched. A script extracted each claim's dates, numbers and names and tested whether every cited page contained them.
2. Each mismatch was reviewed by hand against the closest passage on the page.
3. Bot-blocked pages were opened in a browser where possible. Bot challenges (e.g. Bloomberg, gov.mt) were not bypassed, and readable independent sources replaced them.
4. Details no readable source supported were removed, and badges were lowered where three independent confirmations could not be found.
5. Articles that republish another outlet's text word for word count as one source.

## Fourth batch (12 Oct 2026)

The 25 nations added on 12 October 2026 went through the same audit before publication. All 140 cited pages (out of about 210 read during research) were fetched, every claim's dates and numbers were checked against them, and each claim the script could not confirm was reviewed by hand. Index figures (Oxford Insights, Microsoft, World Bank) were taken from the parsed source tables, not typed in. Several of these nations have little independent coverage, so more of their claims carry a single-source badge. Two outlets carrying the same wire report (for example the Vientiane Times story on Laos's draft AI strategy) count as one source.

## Fifth batch (13 Oct 2026)

Six African nations (Libya, Congo, Gabon, Djibouti, Eswatini, Lesotho) were added through the same audit: 27 claims, each checked against its cited pages, with the seven the script could not confirm reviewed by hand. Where only one source carries a detail (for example the cost of Gabon's data centre), the claim says so in a note. Microsoft's figure for Congo (7.8%) is a Central Africa regional estimate shared with Cameroon, Chad, the Central African Republic and DR Congo.

## Sixth batch (14 Oct 2026)

25 more nations were added through the same audit: 84 claims, each checked against its cited pages, with the ones the script could not confirm reviewed by hand. Four pages that block automated requests (two Antigua News Room articles and two UNDP pages) were read in a browser and are marked as such. Many of these states, especially microstates and Pacific and Caribbean islands, have little independent coverage, so a large share of their claims carry single-source badges. State media (for example in Belarus and Nicaragua) are flagged in notes.

During this batch the overview's EU AI Act highlight was corrected. It had said Norway and Iceland were already bound through the EEA; the Act is still under scrutiny for incorporation into the EEA Agreement, so the highlight now counts EU members only and lists the EEA states as pending.

## Third audit (20 Oct 2026)

- Every cited link (about 760) was fetched fresh and every claim, news item and collaboration re-checked against its sources; the 140 or so that the automatic check could not fully match were reviewed by hand, and pages that block automated requests were read in a browser. No page behind a bot check was bypassed.
- Sources removed under the source rule: Digital Policy Alert (a policy tracker), Nemko (compliance-vendor explainers), AI Baltics (an AI-law aggregator), Peter Fisk (a personal blog), Frank Group, Vistra, MindTitan, Singapore Legal Advice and Global Relay (consultancy and vendor content), Mappr (republished Microsoft's table) and Wikipedia. Also dropped: a dead Sierra Leone ministry page, a Jordan Times page behind a bot check, and a Hespress report that said only that Malta wanted to join GPAI.
- 16 badges were lowered to match the sources left. Replacements were added where a primary or news source exists: the US Commerce Department for the US–Uruguay memorandum (dated 10 April 2024, not 11), Jordan's digital-economy ministry and Jordan News for the HUMAIN memorandum, OECD.AI for Malta's GPAI membership, DPL News for El Salvador's 20%-of-GDP goal, Derasat for the UAE AI Charter, and Telecom Review for the Q1 2026 Microsoft figures.
- Removed: São Tomé and Príncipe's $10 billion "AI nation" memorandum (only a crypto news blog reported it) and the number of design meetings behind Uruguay's Instituto Vidart.
- CONATEL's website (Haiti) could not be reached; its one claim is kept with a note.

## Second audit (14 Oct 2026)

- Every cited link (about 730) was fetched again and every claim re-checked against its pages; mismatches were reviewed by hand.
- Every Oxford Insights rank and pillar score, Microsoft usage figure, World Bank statistic and Stanford AI Index talent figure was re-checked against the dataset. All 101 nations matched.
- Tracker, vendor-explainer and personal-blog sources were removed. 65 claims kept other credible sources (badges recalculated), about 10 were re-sourced, and 28, mostly "country X has no AI law" statements only trackers supported, were deleted. Summaries were edited to match.
- Corrected: Panama (strategy approved by Cabinet on 11 August 2026; an unverified resolution number removed), Sweden (an October 2025 inquiry proposing PTS as lead authority, not June 2026 interim authorities), Slovenia (National AI Strategy to 2030 adopted 5 March 2026), Greece (Daedalus not yet in full service), Georgia (news summary), and a Singapore MAS item whose cited OECD page no longer exists.
- Removed as unconfirmable without trackers: Hungary's 2026 decree moving AI supervision, Croatia's missed AI Act deadline, Malta's "72 actions", and several exact dates and decree numbers (Czechia, Slovakia, Congo, Maldives).

## Collaborations tab

The Collaborations tab lists only agreements between governments: two-country deals (memorandums, joint centres, compute or research agreements) and groups of countries (shared supercomputers, treaties, regional bodies). Deals with companies and projects run by development agencies are not on this tab; they stay on the nation pages.

Entries that match a claim already on a nation's page keep its text, badge and sources. New entries went through the same checks: fetched and token-checked, with every flagged mismatch reviewed by hand. Pages that block automated requests (IMDA, the Australian industry department, the Danish Data Protection Authority and the Council of Europe) were read in a browser and are marked so in the entry's note. Group entries rest on the strongest source for the group, and a note says when a single country's membership rests on one source.

Candidates dropped because no government or news source confirmed a country-to-country AI agreement: Qatar–United States, India–Mauritius, Bhutan–India, a Malta bilateral, Qatar–South Korea and Lithuania–Taiwan. (The Shanghai Cooperation Organisation was dropped in the first round and added in the second, once its September 2026 memorandum on AI was reported.)

A second round (14 October 2026) added 26 entries, from 25 to 51. Left out in that round: deals where one side was a company or an association rather than a government (Jordan–HUMAIN, Azerbaijan–Presight, a Saudi–Kuwaiti association MoU), a Georgia–Japan digital memorandum that mentions AI only in passing, a New Zealand–Korea joint statement, and anything involving Israel, which this site does not cover. ZDNet's report on the Singapore–US crosswalk no longer loads, so that entry rests on Singapore government sources, counted as one. Pages that block automated requests (the Nordic Council of Ministers, the Swedish government, ASEAN and Ukraine's Cabinet of Ministers) were read in a browser; Georgia's 1TV, which shows a bot check, was not used.

On the map, a solid line joins the two countries in a bilateral deal. A dashed line runs from each group member to the group's host or coordinator, which is a placement choice, not a claim about who leads. Partner countries that are not on the site (for example the United States, France and China) appear as hollow dots.

### Alignment view

The Alignment view sorts each nation's agreements by partner group. The groups are editorial: the United States; China (including WAICO in Shanghai); Europe (European countries plus the Council of Europe); the Gulf states (UAE, Qatar, Bahrain, Kuwait, Oman); Asia-Pacific (including India, Japan, South Korea, Taiwan and ASEAN); Africa; the Americas; global forums; and other (Lebanon, Jordan, Palestine). Nations on the site fall into these by region.

How agreements count: a two-country deal counts toward the other country's group. A group agreement counts toward its host or coordinator; for the host itself, it counts toward its listed members. Global forums (the Bletchley Declaration and the Global Partnership on AI) count as "global forums" for every member and are left out when picking a nation's main partner group. A tie for the main group shows as stripes.

The view counts only the agreements listed on this site. A nation missing from a column may still have ties with that group that are not recorded here, and nations with more coverage will show more agreements. The findings at the top of the view are computed from the same data whenever the page loads.

## Link check

All ~340 source URLs were requested programmatically. Broken links (404) were replaced with verified alternatives. Some publishers (Bloomberg, gov.mt, uaecabinet.ae, MaltaToday, openai.com and others) block automated requests (403) but open normally in a browser.

## Corrections made during checking

- Denmark's deepfake copyright bill was introduced in October 2026. Some sites report it as already law.
- Luxembourg's AI Act bill 8476 is still pending. One database lists it as a 2024 law.
- The UAE's 'first strategy' (Oct 2017) and its full National AI Strategy 2031 (Cabinet, Apr 2019) are separate steps.
- The UAE AI & Data Authority was approved on **14 June 2026**, not September.
- The UAE AI strategy was **launched in Oct 2017**, and the full **National AI Strategy 2031** was adopted by Cabinet in **Apr 2019**.
- Estonia's AI Leap expansion to vocational schools, announced for Sep 2026, is now only "being considered".
- A reported $17.5M Gates Foundation commitment to Rwanda's AI hub could not be confirmed and is excluded.

## Limits

- The 96 nations added after the first six have 2–5 key facts each, not full profiles.
- Microsoft reports one shared figure for several West African countries (Benin, Sierra Leone, Togo, Liberia, Mauritania) for Guyana, Suriname, Venezuela and French Guiana, for Congo and its Central African neighbours, for Tajikistan, and for Burundi. These are shown as hatched regional estimates.
- Map boundaries are Natural Earth 110m. They are approximate and don't imply any position on disputed borders. Tiny states are shown as dots.
- This is a snapshot as of 10 Oct 2026 (12–14 Oct for the last three batches), and the news feed does not update itself.
- Summaries and "stance" lines are editorial synthesis.
- Programme-reported figures (e.g. AI Leap teacher usage) are not independent evaluations.
- Disclosure: compiled by Claude (Anthropic). Anthropic is party to agreements described here (Rwanda MOU, Estonia AI Leap talks). Those facts rely on both parties' public statements.

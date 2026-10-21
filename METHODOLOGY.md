# Methodology

## Verification levels

| Badge | Meaning |
|---|---|
| **3+ sources** (green) | At least 3 independent sources agree on the substance of the claim |
| **2 sources** (blue) | 2 independent sources agree |
| **1 source** (amber) | Only 1 source found. Shown, but flagged |

The badge counts independent sources, so it can be lower than the number of links listed (two pages from one organisation count once). In the data files the levels are still called `verified`, `corroborated` and `single`.

Pages from the same organisation count as **one** source. Primary sources (government releases, official documents, the publisher's own report) were preferred, then checked against independent coverage (news outlets, law firms, research bodies).

## Which sources count

Government and parliament sites, international organisations, established news outlets, law firms and recognised research bodies. Third-party AI-policy tracker sites (for example anuragverma.co, regulations.ai, levellers.ai, straitsai.institute, aipolicytracker.org), auto-generated regulation explainers, compliance-vendor blogs and personal blogs or newsletters are not used: they are not independent evidence, and several are projects much like this one.

## Index figures

These were read from the publisher's own data, not from secondary summaries:

- **Oxford Insights Government AI Readiness Index 2025**: the full rankings table (pp. 59–68) of the validated January 2026 report. The December 2025 release had errors, and many third-party sites still quote it (e.g. Estonia 19th, Uruguay 52nd, UAE 23rd).
- **Microsoft AI Diffusion**: the H2 2025 report appendix (PDF). Q1 2026 figures are from WAM and Telecom Review coverage. Q2 2026 figures are from Microsoft's 22 Sep 2026 release.
- **World Bank WDI**: population, GDP per capita and internet use, pulled from the World Bank API.

Since 21 October 2026 the overview no longer re-plots these datasets (the readiness heatmap, the Microsoft AI-use charts and the Stanford talent chart were removed). The comparison table keeps the Oxford Insights readiness rank as context, nation pages keep their stat tiles, and the overview links to each publisher's own report.

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

## Reliability pass (20 Oct 2026)

- Sources that block automated requests were re-read through archived copies on the Internet Archive's Wayback Machine where one existed, or opened in a browser. Bot checks were never bypassed; where a page stayed blocked (for example some Lithuanian, Finnish and Norwegian government pages behind Cloudflare), the claim was checked against its other sources, and a further source was added where one was needed.
- Weaker sources were replaced where a stronger one exists: crypto-news sites for El Salvador's AI law and NVIDIA letter of intent (now Diario El Mundo and DCD), two AI-news newsletters for the France–UAE framework (now Reuters via AGBI and Computing), a newsletter for Bahrain's AI policy (now the iGA's own release, which also corrected the policy's name and date to the National Policy for the Use of AI, 27 July 2025), and small AI-news sites for the Firebird factory opening in Armenia (now Armenpress and ARKA). Norway's digitalisation strategy gained an Altinget report confirming its 26 September 2024 launch.
- Details that turned out to rest on one outlet were flagged in a note or the badge was lowered: the AWS scholarships in the Dominican Republic and the UAE's 70% faster-lawmaking projection. Uruguay's Latin American AI Index fact now uses the 2026 edition, which has primary and independent sources.

## Key documents

Each nation page lists up to two key documents: the national AI strategy or policy, an AI law, or official guidance. Each card links to the document itself, normally the issuing government's PDF, reached by following OECD.AI entries, press releases and ministry pages back to the file. Where a government publishes the document only as web pages (Uruguay's strategy, New Zealand's Public Service AI Framework, the UAE AI Charter) or has not posted it at all (Bahrain's AI policy, Oman's programme, Papua New Guinea's draft strategy), the card links the official page and its note says so. Belgium's AI 4 Belgium report links an archived copy because the original link no longer works. EU member states also list the EU AI Act, linked to the European Commission's AI Act page because EUR-Lex links were redirecting to its front page. Every file was opened and its first pages read on 20 October 2026; files on sites that block automated checks (Finland, Norway, the UAE and the Council of Europe) were checked through Internet Archive copies. Stand-ins that were not the document itself (OECD.AI summaries and European Commission country reports) were removed, so Mauritius, Tunisia, Lesotho, Libya, Hungary, Bulgaria, Latvia, Cyprus, Malta and Estonia now list fewer or no national documents until an official file can be found. 45 nations have at least one document listed. Each file also shows a "From" link: the page that publishes or links it where that was confirmed (for example the Czech ministry's press release), otherwise the issuing body's website.

## News update (20 Oct 2026)

Region-by-region searches for 10–20 October 2026 added nine news items, each checked against its sources: the 2026 Latin American AI Index for Uruguay, Costa Rica and the Dominican Republic (published by CENIA and ECLAC on 20 October), Anthropic's AI safety memorandum with Singapore, Abu Dhabi's $3.5 billion AI-government investment and TAMM Global, France–Kuwait data and AI cooperation, Finland's classified-information AI pilot, Fiji's push for responsible-AI standards and New Zealand's election split on AI regulation. Candidates left out: items dated before 10 October, company-only deals with no government party, and reports that could not be confirmed (an Iceland AI proposals report whose date could not be checked, and the UAE's WEF prize, which is an event rather than policy).

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

## News feed ranking

The news feed sorts by date (newest or oldest) or by relevance. There is no click or popularity data, so relevance is computed from each item's own text, sources and date. It is the average of three signals, each scaled from 0 to 1 across the items being ranked, plus a small bonus for 2 or 3+ independent sources. Each item shows the signals that placed it.

- **Trending:** items are matched to themes (strategies, laws, data centres and compute, partnerships, skills, AI in government services, rankings, safety and misuse, investment, China and WAICO). A theme's heat is the number of items on it, weighted by recency (roughly a 30-day decay). An item's trending score is its own recency (roughly a 3-week decay) times one plus the heat of its themes. The hottest themes over the last 60 days are shown as filters.
- **Impact:** keyword points for a law or binding rule adopted (5), a strategy or policy decision (4), billion-scale money (4), a new public body (3), million-scale money, compute infrastructure or an international agreement (2 each), minus 1.5 for events and trainings.
- **Insight:** points for data or an assessment such as an index, ranking, survey or report (3), a percentage (1.5), a comparison (1), up to three specific figures (0.75 each) and a noted caveat or source disagreement (1.5).

These are simple rules, not editorial judgements of importance.

## The last 19 nations (21 October 2026)

To cover every sovereign state under 15 million people, 19 more were added: Timor-Leste, Vanuatu, Samoa, Kiribati, Micronesia, the Marshall Islands, Nauru, Tuvalu, Turkmenistan, Cuba, Dominica, Saint Vincent and the Grenadines, South Sudan, the Central African Republic, Eritrea, Guinea-Bissau, Equatorial Guinea, Kosovo and the Holy See. Israel stays excluded, and territories (such as Puerto Rico, Greenland and Hong Kong) are not included. The list was built from the World Bank's population data (economies under 15 million, minus territories), plus the Holy See, which the World Bank does not cover.

- Index figures were read from the publishers' own files: Oxford Insights ranks and pillar scores from the validated 2025 report's table, Microsoft's H2 2025 figures from its report appendix, and World Bank figures from its API. Oxford Insights does not rank Kosovo or the Holy See, and the World Bank has no data for the Holy See; their pages say so instead of showing a number. Microsoft figures for South Sudan, Eritrea, the Central African Republic, Guinea-Bissau and Turkmenistan are shared regional estimates and are labelled as such.
- Every source was fetched and its key details checked by hand. Pages that block automated requests (Diario de Cuba, Ecofin, Natural Resources Canada) were read in a browser or from an Internet Archive copy, and say so in a note. Republished copies (PINA's copy of a World Bank release, a UN legal database's summary of a gazette) count as one source with the original.
- Two regional decisions are shared by several of these nations: the Pacific Islands Forum's endorsement of AI principles (September 2026, also added as a group on the Collaborations tab) and the African Union's Continental AI Strategy (July 2024).
- Left out: a reported AI centre of excellence in the Central African Republic, found only on a press-review site that republishes other outlets; a claim that Nauru has a "national digital transformation strategy", which no government source confirmed; the Marshall Islands' 2025 digital identity law, whose official text could not be read; and Dominica's membership of the World AI Cooperation Organization, which Chinese state media implied but did not state.
- Collaborations: Cuba was added to WAICO (Reuters names it among the 29 founding signatories), Dominica and Saint Vincent and the Grenadines were added to the CARICOM roadmap entry as CARICOM members, and a Pacific Islands Forum AI principles group was added.

## Collaborations tab

The Collaborations tab lists only agreements between governments: two-country deals (memorandums, joint centres, compute or research agreements) and groups of countries (shared supercomputers, treaties, regional bodies). Deals with companies and projects run by development agencies are not on this tab; they stay on the nation pages.

Entries that match a claim already on a nation's page keep its text, badge and sources. New entries went through the same checks: fetched and token-checked, with every flagged mismatch reviewed by hand. Pages that block automated requests (IMDA, the Australian industry department, the Danish Data Protection Authority and the Council of Europe) were read in a browser and are marked so in the entry's note. Group entries rest on the strongest source for the group, and a note says when a single country's membership rests on one source.

Candidates dropped because no government or news source confirmed a country-to-country AI agreement: Qatar–United States, India–Mauritius, Bhutan–India, a Malta bilateral, Qatar–South Korea and Lithuania–Taiwan. (The Shanghai Cooperation Organisation was dropped in the first round and added in the second, once its September 2026 memorandum on AI was reported.)

A second round (14 October 2026) added 26 entries, from 25 to 51. Left out in that round: deals where one side was a company or an association rather than a government (Jordan–HUMAIN, Azerbaijan–Presight, a Saudi–Kuwaiti association MoU), a Georgia–Japan digital memorandum that mentions AI only in passing, a New Zealand–Korea joint statement, and anything involving Israel, which this site does not cover. ZDNet's report on the Singapore–US crosswalk no longer loads, so that entry rests on Singapore government sources, counted as one. Pages that block automated requests (the Nordic Council of Ministers, the Swedish government, ASEAN and Ukraine's Cabinet of Ministers) were read in a browser; Georgia's 1TV, which shows a bot check, was not used.

A legitimacy check on 21 October 2026 re-read every entry to confirm that it is an AI agreement between governments, with sources that say so. Three were removed, from 51 to 48: Laos–China health AI (the Lao health ministry's partners were three Chinese companies, not the Chinese government), Haiti–Malaysia (a memorandum between the two telecom regulators that is not about AI; it stays on Haiti's page as a telecom fact) and the SICA regional entry (a digital-strategy presidency, not an AI agreement). Two were corrected: Serbia was added to WAICO, as one of the 29 countries that signed its founding agreement in Shanghai in July 2026; and the CARICOM entry now describes COTED's July 2026 endorsement of the UNESCO Caribbean AI Policy Roadmap, with a note that it rests on one newspaper column and that no CARICOM or UNESCO release confirming the date was found. Entries kept on a single source are badged as such: CARICOM, Georgia–South Korea, UAE–UK, UAE–India, Singapore–France, UAE–Malaysia–Rwanda, Ukraine–UK–Estonia and Singapore–US. The Laos–China AI centre entry is with the Guangxi regional government, not the national one, and says so.

On the map, a solid line joins the two countries in a bilateral deal. A dashed line runs from each group member to the group's host or coordinator, which is a placement choice, not a claim about who leads. Partner countries that are not on the site (for example the United States, France and China) appear as hollow dots.

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

- The 115 nations added after the first six have 1–5 key facts each, not full profiles. Some of the smallest (Eritrea, the Marshall Islands, Micronesia, Nauru) have almost no public AI activity, and their pages say so rather than padding them out.
- Microsoft reports one shared figure for several West African countries (Benin, Sierra Leone, Togo, Liberia, Mauritania) for Guyana, Suriname, Venezuela and French Guiana, for Congo and its Central African neighbours, for Tajikistan, and for Burundi. Nation pages label these as regional estimates.
- Map boundaries are Natural Earth 110m. They are approximate and don't imply any position on disputed borders. Tiny states are shown as dots.
- This is a snapshot. Full research ran to 10 Oct 2026 (12–14 Oct for the last three batches). A news update on 20 Oct 2026 searched each region for developments from 10 to 20 October and added nine items; it was not an exhaustive nation-by-nation search, so smaller nations may have recent news that is not here. The news feed does not update itself.
- Summaries and "stance" lines are editorial synthesis.
- Programme-reported figures (e.g. AI Leap teacher usage) are not independent evaluations.
- Disclosure: compiled by Claude (Anthropic). Anthropic is party to agreements described here (Rwanda MOU, Estonia AI Leap talks). Those facts rely on both parties' public statements.

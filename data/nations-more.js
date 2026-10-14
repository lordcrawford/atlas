// Worldview dataset, part 2: 19 additional small nations (added 10 Oct 2026).
// Same verification rules as data/nations.js (see METHODOLOGY.md).
// Index figures: Oxford Insights GAIRI 2025 (validated Jan 2026 table), Microsoft AI Diffusion H2 2025 appendix,
// World Bank WDI API. Oxford pillar order: see WORLDVIEW.meta.pillars.

window.WORLDVIEW.nations.push(
  // ------------------------------------------------------------------ DENMARK
  {
    id: "dk", name: "Denmark", flag: "🇩🇰", region: "Northern Europe (EU)", group: "Europe", geo: [12.57, 55.68], isoN: "208",
    stance: "Public-sector AI at scale, foundation-funded sovereign compute, and a novel deepfake law",
    summary:
      "Denmark combines a 2019 national strategy with a 2024 'strategic approach' that targets large-scale AI use in the public sector. Gefion, a sovereign AI supercomputer funded by the Novo Nordisk Foundation, opened in 2024. Denmark is also testing a new idea in law: using copyright to give people rights over deepfakes of their face and voice.",
    glance: { firstStrategy: "2019", latestStrategy: "2024 (Strategic Approach to AI)", newestBody: "Digital Taskforce for AI", newestBodyDate: "2024" },
    stats: { population: { v: 6009169, year: 2025 }, gdpPerCapita: { v: 76970, year: 2025 }, internet: { v: 99.8, year: 2024 } },
    oxford: { rank: 11, scores: [92.5, 59.51, 94.02, 85.26, 58.91, 90.01] },
    msAdoption: { h1_2025: 26.6, h2_2025: 28.7, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2024",
        text: "Denmark's 2024 Strategic Approach to AI builds on its 2019 National Strategy for AI. It sets up a Digital Taskforce for AI for 2024–27 to drive large-scale AI deployment across the public sector.",
        level: "corroborated",
        sources: [
          { t: "Danish Ministry of Digital Affairs - Strategic Approach to Artificial Intelligence (PDF)", u: "https://www.english.digmin.dk/Media/638719220318136690/Stategic%20Approach%20to%20Artificial%20Intelligence.pdf" },
          { t: "OECD - EU Coordinated Plan on AI progress, Denmark country note (Oct 2025)", u: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-1-country-notes_b0385317/denmark_86fcfcf7/89c393fa-en.pdf" },
        ],
      },
      {
        topic: "Compute", date: "2024-10-23",
        text: "Gefion, Denmark's AI supercomputer, was inaugurated on 23 October 2024 by King Frederik X and NVIDIA's Jensen Huang. It is an NVIDIA DGX SuperPOD with 1,528 H100 GPUs, run by the Danish Centre for AI Innovation, which was set up by the Novo Nordisk Foundation and the Export and Investment Fund of Denmark.",
        level: "verified",
        sources: [
          { t: "NVIDIA blog - Denmark launches leading sovereign AI supercomputer", u: "https://blogs.nvidia.com/blog/denmark-sovereign-ai-supercomputer" },
          { t: "Eviden - Gefion AI supercomputer inaugurated", u: "https://eviden.com/insights/news/gefion-ai-supercomputer-built-by-eviden-inaugurated-as-one-of-the-worlds-most-powerful-in-denmark" },
          { t: "The Copenhagen Post - Denmark launches first AI supercomputer", u: "https://cphpost.dk/2024-10-25/news/technology/denmark-launches-first-ai-supercomputer/" },
          { t: "Novo Nordisk Fonden - Danish Centre for AI Innovation", u: "https://novonordiskfonden.dk/en/projects/danish-centre-for-ai-innovation/" },
        ],
      },
      {
        topic: "Regulation", date: "2025",
        text: "Denmark applies the EU AI Act. The Agency for Digital Government is the coordinating national authority, with the Data Protection Agency and sector supervisors covering their own fields.",
        level: "single",
        sources: [
          { t: "Bird & Bird - AI Regulatory Horizon Tracker: Denmark", u: "https://www.twobirds.com/en/capabilities/artificial-intelligence/ai-legal-services/ai-regulatory-horizon-tracker/denmark" },
        ],
        note: "The sources disagree on the national supplementing law. One cites Act No. 467 of 14 May 2025 as in force. Bird & Bird reports that a later replacement bill was halted by the Danish election.",
      },
      {
        topic: "Deepfakes", date: "2026-10-08",
        text: "Denmark is introducing a bill to amend its Copyright Act so that people can stop the sharing of realistic digital imitations of their face and voice without consent. Protection would last 50 years after death, and satire and parody would be exempt.",
        level: "verified",
        sources: [
          { t: "Euronews - Denmark introduces a bill protecting people's faces and voices from deepfakes (8 Oct 2026)", u: "https://www.euronews.com/2026/10/08/denmark-introduces-a-bill-protecting-peoples-faces-and-voices-from-deepfakes" },
          { t: "European Commission IP Helpdesk - Denmark's proposed copyright rules on deepfakes (Jun 2026)", u: "https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/denmarks-proposed-copyright-rules-deepfakes-2026-06-01_en" },
          { t: "European Parliament Research Service - At a glance (2026)", u: "https://eprs.europarl.europa.eu/contents/publications/EPRS/2026/01/EPRS_ATA(2026)782611.html" },
        ],
        note: "Introduced, not yet passed. Some websites wrongly report it as already law.",
      },
    ],
    news: [
      {
        date: "2026-10-08", title: "Deepfake 'right to your own face' bill goes to parliament",
        summary: "This follows a June 2025 political agreement. Culture minister Zenia Stampe is now promoting the bill, and enforcement would run through the EU Digital Services Act.",
        level: "verified",
        sources: [
          { t: "Euronews", u: "https://www.euronews.com/2026/10/08/denmark-introduces-a-bill-protecting-peoples-faces-and-voices-from-deepfakes" },
          { t: "EC IP Helpdesk", u: "https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/denmarks-proposed-copyright-rules-deepfakes-2026-06-01_en" },
          { t: "CADE", u: "https://cadeproject.org/updates/denmark-proposes-landmark-law-to-protect-citizens-from-deepfake-misuse/" },
        ],
      },
    ],
    watch: ["Whether the deepfake copyright bill passes the Folketing, and how platforms comply.", "Final status of Denmark's AI Act supplementing law."],
  },

  // ------------------------------------------------------------------ FINLAND
  {
    id: "fi", name: "Finland", flag: "🇫🇮", region: "Northern Europe (EU)", group: "Europe", geo: [24.94, 60.17], isoN: "246",
    stance: "Early strategist and AI-literacy pioneer; decentralised AI Act enforcement; Nordic compute hub",
    summary:
      "Finland was one of the first countries with a national AI strategy (2017). It now hosts the LUMI AI Factory, the largest of the EU's AI Factories. It was also one of the first EU states to enact a national AI Act law, which took effect on 1 January 2026 and uses a decentralised model coordinated by Traficom.",
    glance: { firstStrategy: "2017", latestStrategy: "2017–2019 (folded into Digital Compass)", newestBody: "National AI Sanctions Board", newestBodyDate: "2026-01-01" },
    stats: { population: { v: 5646436, year: 2025 }, gdpPerCapita: { v: 56149, year: 2025 }, internet: { v: 93.7, year: 2024 } },
    oxford: { rank: 18, scores: [80.5, 61.63, 84.2, 81.77, 63.01, 62.0] },
    msAdoption: { h1_2025: 25.6, h2_2025: 27.3, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2017",
        text: "Finland's first AI strategy, 'Finland's Age of Artificial Intelligence' (Ministry of Economic Affairs and Employment, 2017), aimed to make Finland a leading country in applying AI. Follow-up reports came in 2018 and 2019.",
        level: "verified",
        sources: [
          { t: "European Commission (AI Watch, 2019) - Finland AI strategy country report (PDF)", u: "https://knowledge4policy.ec.europa.eu/sites/default/files/finland-ai-strategy-report.pdf" },
          { t: "EC AI Watch - Finland AI strategy report", u: "https://ai-watch.ec.europa.eu/countries/finland/finland-ai-strategy-report_en" },
          { t: "Digital Watch - Finland's Age of Artificial Intelligence", u: "https://dig.watch/resource/finlands-age-of-artificial-intelligence" },
        ],
        note: "Sources date it to October 2017 (interim report) or December 2017 (publication).",
      },
      {
        topic: "Regulation", date: "2026-01-01",
        text: "Finland's Act on the Supervision of Certain AI Systems (1377/2025) took effect on 1 January 2026. Traficom is the single point of contact and runs the sandbox, sector regulators supervise their own fields, and a National Sanctions Board can impose fines.",
        level: "verified",
        sources: [
          { t: "Bird & Bird - AI Regulatory Horizon Tracker: Finland", u: "https://www.twobirds.com/en/capabilities/artificial-intelligence/ai-legal-services/ai-regulatory-horizon-tracker/finland" },
          { t: "Hannes Snellman - Government proposal on implementing the AI Act", u: "https://www.hannessnellman.com/news-and-views/blog/draft-government-proposal-on-the-implementation-of-eus-ai-act-published/" },
          { t: "VLO Law Firm - AI Regulation in Finland 2026", u: "https://vlolawfirm.com/trackers/ai-regulation-finland" },
          { t: "ArtificialIntelligenceAct.eu - National implementation plans (Finland: Law 1377/2025, in force 1 Jan 2026)", u: "https://artificialintelligenceact.eu/national-implementation-plans/" },
        ],
      },
      {
        topic: "Compute", date: "2025-12-02",
        text: "The LUMI AI Factory, the largest of the EU's AI Factories, opened its main hub on 2 December 2025 at Aalto University's Otaniemi campus. CSC coordinates it on behalf of Finland, Czechia, Denmark, Estonia, Norway and Poland.",
        level: "verified",
        sources: [
          { t: "LUMI - LUMI AI Factory Hub opens in Finland", u: "https://lumi-supercomputer.eu/lumi-ai-factory-hub-opens-in-finland/" },
          { t: "CSC - First services from LUMI AI Factory launched", u: "https://csc.fi/en/media-release/first-services-from-lumi-ai-factory-launched-free-of-charge-for-companies-and-researchers-developing-ai/" },
          { t: "AI Finland - LUMI AI Factory", u: "https://aifinland.fi/en/lumi-ai-factory/" },
          { t: "DCD - Finland's Lumi AI Factory to deploy IQM quantum computer", u: "https://www.datacenterdynamics.com/en/news/finlands-lumi-ai-factory-to-deploy-iqm-halocene-h4-quantum-computer/" },
        ],
      },
      {
        topic: "Compute", date: "2025",
        text: "In 2025 the government backed a Nokia-led consortium's expression of interest to host one of the EU's planned AI gigafactories in Finland, potentially alongside the LUMI AI Factory in Kajaani.",
        level: "corroborated",
        sources: [
          { t: "Yle - Nokia-led bid for an AI gigafactory in Finland", u: "https://yle.fi/a/74-20171278" },
          { t: "Latvian Ministry of Economics - Latvia and Finland could jointly propose AI gigaproject (notes Finland submitted two projects)", u: "https://www.em.gov.lv/en/article/latvia-and-finland-could-jointly-propose-ai-gigaproject-european-support-competition" },
          { t: "Finnish Government - Finland supports Nokia-led consortium's expression of interest", u: "https://valtioneuvosto.fi/en/-/1410877/finland-supports-nokia-led-consortium-s-expression-of-interest-to-establish-ai-gigafactory-in-finland" },
        ],
        note: "No selection result had been announced at the research date.",
      },
    ],
    news: [
      {
        date: "2026-01-01", title: "National AI Act enforcement law takes effect",
        summary: "Finland now has a working AI Act enforcement system: Traficom coordinates, more than half a dozen sector supervisors share the work, and a sanctions board can fine up to the EU maximums.",
        level: "corroborated",
        sources: [
          { t: "Bird & Bird", u: "https://www.twobirds.com/en/capabilities/artificial-intelligence/ai-legal-services/ai-regulatory-horizon-tracker/finland" },
          { t: "VLO Law Firm", u: "https://vlolawfirm.com/trackers/ai-regulation-finland" },
        ],
      },
    ],
    watch: ["Whether Finland wins an EU AI gigafactory.", "An updated national AI strategy. Current policy sits inside the Digital Compass roadmap to 2030."],
  },

  // ------------------------------------------------------------------ NORWAY
  {
    id: "no", name: "Norway", flag: "🇳🇴", region: "Northern Europe (EEA)", group: "Europe", geo: [10.75, 59.91], isoN: "578",
    stance: "High usage, research-funded, cautious on rules; implementing the EU AI Act via the EEA",
    summary:
      "Norway published a national AI strategy in 2020 and a 2024 digitalisation strategy that aims to make it the world's most digitalised country by 2030. It has committed at least NOK 1 billion to AI research. It is outside the EU but set to follow the EU AI Act through the EEA, and is still passing its own AI Act law, with Nkom as coordinator. Its Gen-AI use (46%) is among the highest in Europe.",
    glance: { firstStrategy: "2020", latestStrategy: "2024 (Digitalisation strategy to 2030)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 5610870, year: 2025 }, gdpPerCapita: { v: 94594, year: 2025 }, internet: { v: 99, year: 2024 } },
    oxford: { rank: 10, scores: [88.0, 65.67, 94.02, 84.17, 60.57, 77.5] },
    msAdoption: { h1_2025: 45.3, h2_2025: 46.4, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2020-01-14",
        text: "Norway's National Strategy for Artificial Intelligence was presented on 14 January 2020 by the Ministry of Local Government and Modernisation, with a foreword by Digitalisation Minister Nikolai Astrup.",
        level: "verified",
        sources: [
          { t: "National Strategy for AI (2020), English PDF via OECD.AI", u: "https://wp.oecd.ai/app/uploads/2021/12/Norway_National_Strategy_for_Artificial_Intelligence_2020.pdf" },
          { t: "Telenor - Telenor sets a good example on AI upskilling", u: "https://www.telenor.com/media/newsroom/telenor-sets-a-good-example-on-ai-upskilling/" },
          { t: "EC AI Watch - Norway AI strategy report", u: "https://ai-watch.ec.europa.eu/countries/norway/norway-ai-strategy-report_en" },
        ],
      },
      {
        topic: "Funding", date: "2023-09",
        text: "The government committed at least NOK 1 billion over five years to research on AI and digital technology.",
        level: "corroborated",
        sources: [
          { t: "Research Professional News - Norway sets aside more than 1bn kroner for AI research", u: "https://www.researchprofessionalnews.com/rr-news-europe-nordics-2023-9-norway-sets-aside-more-than-1bn-kroner-for-ai-research/" },
          { t: "Innovation News Network - AI research to increase in Norway", u: "https://www.innovationnewsnetwork.com/artificial-intelligence-research-increase-in-norway-one-billion-kroner-investment/37419/" },
          { t: "Chambers - Artificial Intelligence 2025: Norway", u: "https://practiceguides.chambers.com/practice-guides/artificial-intelligence-2025/norway/trends-and-developments" },
        ],
        note: "As of April 2025, reporting said no funding decisions had yet been made.",
      },
      {
        topic: "Strategy", date: "2024-09-26",
        text: "Norway's national digitalisation strategy (September 2024) aims to make it the world's most digitalised country by 2030, including building a national AI infrastructure.",
        level: "single",
        sources: [
          { t: "Regjeringen - The Digital Norway of the Future, ch.1: the most digitalised country in the world", u: "https://www.regjeringen.no/en/documents/the-digital-norway-of-the-future/id3054645/?ch=2" },
          { t: "Global Relay Intelligence - Norway aims to become the world's most digitized country", u: "https://www.grip.globalrelay.com/norway-aims-to-become-the-worlds-most-digitized-country/" },
        ],
      },
      {
        topic: "Regulation", date: "2025",
        text: "Norway is implementing the EU AI Act through the EEA, but it is not yet Norwegian law. Nkom (the communications authority) will coordinate and serve as single point of contact. A draft law was put out for public consultation on 30 June 2025.",
        level: "single",
        sources: [
          { t: "Haavind - Artificial Intelligence Act (Tech Insight)", u: "https://haavind.no/techinsight/tech-insight/artificial-intelligence-act/" },
        ],
        note: "Sources give different dates for entry into force, ranging from summer 2026 to not before August 2027.",
      },
    ],
    news: [
      {
        date: "2026-10-05", title: "Norway proposes temporary ban on AI smart glasses in some public places",
        summary: "The proposal would bar AI glasses in places such as parks, beaches, schools and kindergartens, while an expert group advises on permanent rules.",
        level: "verified",
        sources: [
          { t: "The Irish Times (5 Oct 2026)", u: "https://www.irishtimes.com/business/2026/10/05/norway-first-country-to-propose-temporary-ban-on-ai-glasses-in-public-places/" },
          { t: "Business Standard", u: "https://www.business-standard.com/world-news/norway-proposes-temporary-ban-on-ai-glasses-in-public-spaces-126100500767_1.html" },
          { t: "The Next Web", u: "https://thenextweb.com/news/norway-temporary-ban-ai-glasses" },
          { t: "Telecompaper", u: "https://www.telecompaper.com/news/norwegian-govt-plans-interim-ban-on-ai-glasses-in-certain-public-places--1584760" },
        ],
      },
    ],
    watch: ["Passage of Norway's national AI Act law (KI-loven).", "A refreshed national AI strategy, reportedly in drafting to replace the 2020 plan."],
  },

  // ------------------------------------------------------------------ IRELAND
  {
    id: "ie", name: "Ireland", flag: "🇮🇪", region: "Western Europe (EU)", group: "Europe", geo: [-6.26, 53.35], isoN: "372",
    stance: "Big-Tech host building a distributed AI Act enforcement system around a new AI Office",
    summary:
      "Ireland hosts the EU headquarters of many large AI companies, which gives its AI Act enforcement extra weight. It refreshed its 2021 strategy in November 2024. In July 2026 it passed the Regulation of Artificial Intelligence Act and set up the AI Office of Ireland to coordinate 13 sector regulators, rather than creating a single AI regulator.",
    glance: { firstStrategy: "2021", latestStrategy: "2024 (strategy refresh)", newestBody: "AI Office of Ireland", newestBodyDate: "2026-07-30" },
    stats: { population: { v: 5484367, year: 2025 }, gdpPerCapita: { v: 131592, year: 2025 }, internet: { v: 97.2, year: 2024 } },
    oxford: { rank: 17, scores: [88.5, 64.71, 94.57, 74.12, 56.91, 60.25] },
    msAdoption: { h1_2025: 41.7, h2_2025: 44.6, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2024-11-06",
        text: "On 6 November 2024 the government published a refresh of its 2021 national AI strategy, 'AI – Here for Good'. It is organised into seven strands and adds measures such as a regulatory sandbox and support for SMEs.",
        level: "verified",
        sources: [
          { t: "DETE - Refreshed National AI Strategy (6 Nov 2024)", u: "https://enterprise.gov.ie/en/news-and-events/department-news/2024/november/06112024.html" },
          { t: "Pinsent Masons - Ireland's national AI strategy refresh: the seven strands", u: "https://www.pinsentmasons.com/out-law/analysis/ireland-national-ai-strategy-refresh-the-seven-strands" },
          { t: "OECD - EU Coordinated Plan on AI progress, Ireland country note (Oct 2025)", u: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-1-country-notes_b0385317/ireland_ee8f30e0/8e29cd6c-en.pdf" },
        ],
      },
      {
        topic: "Regulation", date: "2026-07-21",
        text: "The Regulation of Artificial Intelligence Act 2026 became law on 21 July 2026. It uses a distributed model: existing sector regulators, such as the Central Bank and the Data Protection Commission, supervise AI in their own fields.",
        level: "verified",
        sources: [
          { t: "Matheson - Irish Artificial Intelligence Act 2026 signed into law", u: "https://www.matheson.com/insights/irish-artificial-intelligence-act-2026-signed-into-law/" },
          { t: "Law Society Gazette - First head of Ireland's AI Office appointed", u: "https://www.lawsociety.ie/gazette/top-stories/2026/july/first-head-of-irelands-ai-office-appointed/" },
          { t: "Legal 500 - Deep dive into the Regulation of AI Bill 2026", u: "https://www.legal500.com/intelligence/ireland/corporate-commercial-law/a-deep-dive-into-the-regulation-of-artificial-intelligence-bill-2026" },
        ],
        note: "Sources count 13 or 15 market-surveillance authorities. The more recent sources say 13.",
      },
      {
        topic: "Institutions", date: "2026-07-30",
        text: "The AI Office of Ireland was set up as Ireland's central coordinator for the EU AI Act, with Paul Byrne (formerly of the Medical Council) as its first CEO. Mary Doyle was appointed chair of its board in August.",
        level: "verified",
        sources: [
          { t: "DETE - AI Office of Ireland established, Paul Byrne appointed CEO", u: "https://enterprise.gov.ie/en/news-and-events/department-news/2026/july/20260730.html" },
          { t: "MLex - Ireland sets up first AI Office with Paul Byrne as CEO", u: "https://www.mlex.com/mlex/articles/2508150" },
          { t: "The Irish Times - Government appoints chairwoman and board of new AI body", u: "https://www.irishtimes.com/technology/2026/08/05/government-appoints-chairwoman-and-board-of-new-ai-body/" },
        ],
      },
    ],
    news: [
      {
        date: "2026-07-30", title: "AI Office of Ireland launches with first CEO",
        summary: "The office opened just before the EU AI Act's 2 August 2026 application date, and its board followed on 5 August. A second AI bill is expected in autumn 2026.",
        level: "verified",
        sources: [
          { t: "DETE", u: "https://enterprise.gov.ie/en/news-and-events/department-news/2026/july/20260730.html" },
          { t: "Irish Legal News", u: "https://www.irishlegal.com/articles/mary-doyle-takes-the-helm-at-the-ai-office-of-ireland-as-its-first-chair" },
          { t: "Matheson", u: "https://www.matheson.com/insights/irish-artificial-intelligence-act-2026-signed-into-law/" },
        ],
      },
    ],
    watch: ["How Ireland's regulators enforce the AI Act against the large AI firms headquartered there.", "The follow-up AI bill expected in autumn 2026."],
  },

  // ------------------------------------------------------------------ LUXEMBOURG
  {
    id: "lu", name: "Luxembourg", flag: "🇱🇺", region: "Western Europe (EU)", group: "Europe", geo: [6.13, 49.61], isoN: "442",
    stance: "Sovereignty-first: national AI factory on EuroHPC compute, data-protection authority as AI regulator",
    summary:
      "Luxembourg's May 2025 strategy, 'Accelerating digital sovereignty 2030', pairs AI with data and quantum. At its centre is a national AI Factory built around the MeluXina-AI supercomputer, co-funded with the EU. Its AI Act bill would make the data-protection authority (CNPD) the main AI regulator, but parliament has not yet adopted it.",
    glance: { firstStrategy: "2019", latestStrategy: "2025 (Accelerating digital sovereignty 2030)", newestBody: "Luxembourg AI Factory", newestBodyDate: "2026" },
    stats: { population: { v: 686970, year: 2025 }, gdpPerCapita: { v: 147252, year: 2025 }, internet: { v: 99.1, year: 2025 } },
    oxford: { rank: 33, scores: [81.0, 57.65, 81.52, 75.46, 46.26, 66.54] },
    msAdoption: null,
    facts: [
      {
        topic: "Strategy", date: "2019-05-24",
        text: "Luxembourg's first national AI strategy, 'Artificial Intelligence: a strategic vision for Luxembourg', was presented on 24 May 2019 by Prime Minister Xavier Bettel and Deputy PM Étienne Schneider. It called itself a 'living document' to be updated over time.",
        level: "corroborated",
        sources: [
          { t: "Digital Luxembourg - Government defines its strategic vision for AI", u: "https://digital-luxembourg.public.lu/news/national-ai-vision-prioritizes-people" },
          { t: "Chronicle.lu - AI, digitisation strategies unveiled", u: "https://chronicle.lu/category/innovation/29342-ai-digitisation-strategies-unveiled" },
        ],
      },
      {
        topic: "Strategy", date: "2025-05-16",
        text: "In May 2025 Luxembourg published its AI strategy, 'Accelerating digital sovereignty 2030', alongside data and quantum strategies. It aims to make the country a hub for human-centred AI.",
        level: "verified",
        sources: [
          { t: "Gouvernement.lu - Luxembourg's AI Strategy (PDF)", u: "https://gouvernement.lu/dam-assets/images-documents/actualites/2025/05/16-strategies-ai-donnees-quantum/2024115332-ministere-etat-strategy-ai-en-bat-acc-ua.pdf" },
          { t: "EU Digital Skills & Jobs - Luxembourg AI Strategy 2030", u: "https://digital-skills-jobs.europa.eu/en/initiatives/national-strategies/luxembourg-artificial-intelligence-strategy-2030" },
          { t: "Chambers - Artificial Intelligence 2026: Luxembourg", u: "https://practiceguides.chambers.com/practice-guides/artificial-intelligence-2026/luxembourg/trends-and-developments" },
          { t: "20more.lu - MeluXina AI access guide 2026", u: "https://20more.lu/en/blog/luxembourg-ai-factory-meluxina-sme-access-guide-2026/" },
        ],
      },
      {
        topic: "Compute", date: "2026",
        text: "The national AI Factory is built around the MeluXina-AI supercomputer. Its estimated cost of €112 million is split equally between the EuroHPC Joint Undertaking and the Luxembourg state.",
        level: "corroborated",
        sources: [
          { t: "Luxembourg AI Factory - MeluXina-AI", u: "https://aifactory.lu/about/meluxina-ai" },
          { t: "Info-Lux - IA au Luxembourg : 112 M€", u: "https://www.info-lux.com/ia-luxembourg-frontaliers-entreprises/intelligence-artificielle/" },
          { t: "Chambers - Artificial Intelligence 2026: Luxembourg", u: "https://practiceguides.chambers.com/practice-guides/artificial-intelligence-2026/luxembourg/trends-and-developments" },
        ],
        note: "Reported GPU counts and go-live timing conflict. One source reports an €80M hardware contract signed on 22 July 2026 within the larger budget.",
      },
      {
        topic: "Regulation", date: "2024-12-23",
        text: "Bill 8476 (filed 23 December 2024) would make the CNPD Luxembourg's default AI Act market-surveillance authority and single point of contact. As of 2026 it was still a draft.",
        level: "verified",
        sources: [
          { t: "Arendt - New Luxembourg bill designates national authorities under the AI Act", u: "https://www.arendt.com/news-insights/news/new-luxembourg-bill-designates-national-authorities-under-the-ai-act-the-cnpd-takes-centre-stage/" },
          { t: "Paperjam - AI Act and Data Act: the CNPD at the forefront", u: "https://en.paperjam.lu/article/ai-act-and-data-act-the-cnpd-at-the-forefront" },
          { t: "Chambre des Députés - Bill 8476 full dossier (PDF)", u: "https://wdocs-pub.chd.lu/docs/compilation/docpa/pdf/8476_Dossier_Complet.pdf" },
        ],
        note: "One database lists it as a 'Law of 20 December 2024'. That is inconsistent with the bill's filing date and is not relied on here.",
      },
    ],
    news: [
      {
        date: "2026", title: "MeluXina-AI and the Luxembourg AI Factory come online",
        summary: "The factory offers compute, expertise and regulatory guidance to start-ups, SMEs and researchers. Half of MeluXina-AI's capacity is reportedly reserved for national use.",
        level: "corroborated",
        sources: [
          { t: "Luxembourg AI Factory", u: "https://aifactory.lu/about/meluxina-ai" },
          { t: "20more.lu - MeluXina AI access guide 2026", u: "https://20more.lu/en/blog/luxembourg-ai-factory-meluxina-sme-access-guide-2026/" },
        ],
      },
    ],
    watch: ["Adoption of Bill 8476 and the CNPD's sandbox."],
  },

  // ------------------------------------------------------------------ ICELAND
  {
    id: "is", name: "Iceland", flag: "🇮🇸", region: "Northern Europe (EEA)", group: "Europe", geo: [-21.94, 64.15], isoN: "352",
    stance: "Language-first: making sure AI speaks Icelandic",
    summary:
      "With fewer than 400,000 people, Iceland's central AI worry is language. After investing more than ISK 2 billion in Icelandic language technology, it partnered with OpenAI on GPT-4's Icelandic. It adopted a national AI policy in 2021. Like Norway, it follows the EU AI Act through the EEA.",
    glance: { firstStrategy: "2021", latestStrategy: "2021 (AI policy)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 392404, year: 2025 }, gdpPerCapita: { v: 98323, year: 2025 }, internet: { v: 98.2, year: 2024 } },
    oxford: { rank: 44, scores: [77.0, 58.43, 65.27, 66.61, 43.0, 76.53] },
    msAdoption: null,
    facts: [
      {
        topic: "Language", date: "2023-03",
        text: "Iceland partnered with OpenAI to improve GPT-4's Icelandic, at the initiative of the then President, as part of a national effort to keep the language viable in the AI era.",
        level: "verified",
        sources: [
          { t: "OpenAI - Government of Iceland: Preserving languages for the future", u: "https://openai.com/index/government-of-iceland/" },
          { t: "Iceland Review - GPT-4 to aid in the preservation of the Icelandic language", u: "https://www.icelandreview.com/news/gpt-4-to-aid-in-the-preservation-of-the-icelandic-language/" },
          { t: "Government of Iceland - Language technology programme for Icelandic 2024–2026 (PDF)", u: "https://www.government.is/library/01-Ministries/Ministry-of-culture-and-business-affairs/Language-technology-programme-for-icelandic-2024-2026-web.pdf" },
        ],
      },
      {
        topic: "Strategy", date: "2021-04",
        text: "Iceland's AI policy came from a five-person committee appointed by the Prime Minister's Office in October 2020, which reported in April 2021. It gives special attention to Icelandic language technology.",
        level: "single",
        sources: [
          { t: "IIIM - Iceland has a new AI policy (Apr 2021)", u: "https://www.iiim.is/2021/04/iceland-has-a-new-ai-policy/" },
        ],
      },
    ],
    news: [
      {
        date: "2026", title: "Health ministry publishes roadmap for AI in clinical practice",
        summary: "The guidance says AI should support clinical decisions but never replace professional judgement.",
        level: "single",
        sources: [{ t: "Iceland Review - Iceland publishes roadmap for safe use of AI in healthcare", u: "https://www.icelandreview.com/news/iceland-ai-healthcare-roadmap-clinical-practice-2026/" }],
      },
    ],
    watch: ["The OECD (2026) notes Iceland still lacks dedicated oversight for AI in public decision-making."],
  },

  // ------------------------------------------------------------------ LITHUANIA
  {
    id: "lt", name: "Lithuania", flag: "🇱🇹", region: "Northern Europe (EU)", group: "Europe", geo: [25.28, 54.69], isoN: "440",
    stance: "Fast AI Act implementer with an early sandbox and home-grown Lithuanian language models",
    summary:
      "Lithuania's Seimas approved amendments making the Communications Regulatory Authority (RRT) its AI Act regulator. It also runs an early regulatory sandbox. Open Lithuanian-language models are coming from industry, universities and the state. New 2026–2035 strategic guidelines aim to move from scattered projects to nationwide AI deployment.",
    glance: { firstStrategy: "2019", latestStrategy: "2026 (Strategic Guidelines 2026–2035)", newestBody: "RRT (AI Act authority)", newestBodyDate: "2025" },
    stats: { population: { v: 2888774, year: 2025 }, gdpPerCapita: { v: 32959, year: 2025 }, internet: { v: 89.2, year: 2024 } },
    oxford: { rank: 29, scores: [80.5, 55.11, 91.67, 84.3, 45.56, 57.02] },
    msAdoption: { h1_2025: 21.0, h2_2025: 22.4, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Regulation", date: "2025",
        text: "The Seimas approved amendments making the Communications Regulatory Authority (RRT) Lithuania's AI Act market-surveillance authority and single point of contact, with the Innovation Agency as notifying authority.",
        level: "single",
        sources: [
          { t: "The Baltic Times - Lithuania takes to AI regulation, aims to become regional leader", u: "https://www.baltictimes.com/lithuania_takes_to_ai_regulation__aims_to_become_regional_leader" },
          { t: "Ministry of the Economy and Innovation - Seimas approves amendments to accelerate AI development", u: "https://eimin.lrv.lt/en/structure-and-contacts/news-1/seimas-approves-amendments-to-accelerate-the-development-of-artificial-intelligence-in-lithuania/" },
        ],
        note: "The Baltic Times describes the planned roles; the ministry's page on the Seimas vote blocks automated reading and could not be checked, so this rests on one readable source.",
      },
      {
        topic: "Strategy", date: "2026",
        text: "The Ministry of Economy and Innovation drew up National AI Strategic Guidelines for 2026–2035, built on four strands: people, infrastructure and data, society, and the economy. It estimates about €10 billion in added value over the decade.",
        level: "single",
        sources: [
          { t: "Ministry of Economy and Innovation - National AI Strategic Guidelines drawn up", u: "https://eimin.lrv.lt/en/structure-and-contacts/news-1/lithuania-strengthens-its-artificial-intelligence-ecosystem-national-ai-strategic-guidelines-drawn-up-fS7F" },
          { t: "EU Digital Skills & Jobs - Lithuania National AI Strategic Guidelines", u: "https://digital-skills-jobs.europa.eu/en/initiatives/national-strategies/lithuania-national-artificial-intelligence-strategic-guidelines" },
          { t: "Ministry of Economy and Innovation - Guidelines 2026–2035 (PDF)", u: "https://eimin.lrv.lt/public/canonical/1780915035/6723/National%20Artificial%20Intelligence%20Strategic%20Guidelines%20of%20Lithuania%20for%202026%E2%80%932035_.pdf" },
        ],
        note: "Only the EU portal could be read during the audit. The ministry's pages block automated access, though search results quote them giving €10.1bn. No formal government resolution adopting the guidelines was found.",
      },
      {
        topic: "Language", date: "2024-08",
        text: "Neurotechnology released the first open-source large language models built for Lithuanian (Llama 2 based, 7B and 13B parameters) in August 2024.",
        level: "verified",
        sources: [
          { t: "Neurotechnology - Open source LLM for Lithuanian language", u: "https://www.neurotechnology.com/press_release_nlp_large_language_model_for_lithuanian.html" },
          { t: "MultiLingual - Neurotechnology releases first open-source LLM in Lithuanian", u: "https://multilingual.com/neurotechnology-releases-its-first-open-source-large-language-model-in-the-lithuanian-language/" },
          { t: "arXiv - Open Llama2 Model for the Lithuanian Language", u: "https://arxiv.org/html/2408.12963v1" },
        ],
      },
    ],
    news: [
      {
        date: "2026", title: "Innovation Agency's AI sandbox adds specialised consultations",
        summary: "The sandbox offers AI Act guidance, testing and access to high-performance compute, with specialised consultations from early 2026.",
        level: "single",
        sources: [
          { t: "Walless - Regulatory AI sandbox in Lithuania: what businesses should know", u: "https://walless.com/news/regulatory-ai-sandbox-in-lithuania-what-businesses-working-with-ai-should-know/" },
          { t: "Interreg Europe - AI regulatory sandbox in Lithuania (good practice)", u: "https://www.interregeurope.eu/good-practices/creation-implementation-of-artificial-intelligence-regulatory-sandbox-in-lithuania-0" },
        ],
      },
    ],
    watch: ["The Innovation Agency's action plan to implement the 2026–2035 guidelines."],
  },

  // ------------------------------------------------------------------ SLOVENIA
  {
    id: "si", name: "Slovenia", flag: "🇸🇮", region: "Central Europe (EU)", group: "Europe", geo: [14.51, 46.06], isoN: "705",
    stance: "Research-led: home of UNESCO's AI centre, new AI factory, enacted AI Act law",
    summary:
      "Slovenia hosts IRCAI, the world's first international AI research centre under UNESCO's auspices (2021). Its 2021–2025 national AI programme was budgeted at about €110 million. A national AI factory (SLAIF) launched in 2026 around a new supercomputer due in 2027. Its AI Act implementing law took effect in November 2025, with the communications regulator AKOS in the lead. In March 2026 the government adopted a National AI Strategy to 2030.",
    glance: { firstStrategy: "2021", latestStrategy: "2026 (NsUI 2030)", newestBody: "Slovenian AI Factory (SLAIF)", newestBodyDate: "2026" },
    stats: { population: { v: 2130986, year: 2025 }, gdpPerCapita: { v: 37376, year: 2025 }, internet: { v: 90.8, year: 2024 } },
    oxford: { rank: 36, scores: [84.0, 57.98, 72.5, 76.44, 45.52, 60.99] },
    msAdoption: { h1_2025: 24.6, h2_2025: 26.5, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2026-03-05",
        text: "On 5 March 2026 the government adopted the National Strategy for AI until 2030 (NsUI 2030). It sets five strategic goals, including sovereign AI, wider AI use in the economy and public sector, and safe and responsible use. The digital transformation ministry has nine months to prepare an action plan with measures, a timetable and funding.",
        level: "corroborated",
        sources: [
          { t: "Gov.si - 193rd regular session of the Government (5 Mar 2026)", u: "https://www.gov.si/en/news/2026-03-05-193rd-regular-session-of-the-government-of-the-republic-of-slovenia/" },
          { t: "ICE (Italian Trade Agency) - Slovenia approves national AI strategy to 2030 (11 Mar 2026)", u: "https://www.ice.it/it/news/notizie-dal-mondo/300687" },
        ],
        note: "Added in the 14 Oct 2026 re-audit; the page previously listed this strategy as unconfirmed.",
      },
      {
        topic: "Research", date: "2021-03-29",
        text: "On 29 March 2021, UNESCO's Director-General and Slovenia's President inaugurated IRCAI, the International Research Centre on AI, in Ljubljana. It is the first such centre under UNESCO's auspices and is hosted by the Jožef Stefan Institute.",
        level: "corroborated",
        sources: [
          { t: "UNESCO - Director-General and President of Slovenia inaugurate first research centre on AI", u: "https://www.unesco.org/en/articles/unesco-director-general-and-president-slovenia-inaugurate-first-research-centre-artificial" },
          { t: "UNESCO - Agreement to establish IRCAI in Ljubljana signed", u: "https://en.unesco.org/news/agreement-establish-international-research-centre-artificial-intelligence-ljubljana-signed" },
          { t: "Gov.si - Hosting UNESCO's AI centre", u: "https://www.gov.si/en/news/2020-03-10-hosting-unescos-artificial-intelligence-centre-the-greatest-achievement-of-slovenian-science/" },
        ],
      },
      {
        topic: "Strategy", date: "2021-05",
        text: "Slovenia's National Programme for AI (NpAI) was adopted in May 2021 to run until 2025, with a budget of about €110 million. It has been extended into 2026.",
        level: "verified",
        sources: [
          { t: "Gov.si - National Programme for AI (PDF)", u: "https://www.gov.si/assets/ministrstva/MDP/National_Programme_for_AI_2025.pdf" },
          { t: "EU Digital Skills & Jobs - Slovenia national programme", u: "https://digital-skills-jobs.europa.eu/en/actions/national-initiatives/national-strategies/slovenia-purity-national-programme-promote" },
          { t: "OECD - Slovenia country note (Oct 2025)", u: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-1-country-notes_b0385317/slovenia_345865cf/9f609de3-en.pdf" },
        ],
      },
      {
        topic: "Regulation", date: "2025-11-21",
        text: "Slovenia's AI Act implementing law (ZIUDHPUI) took effect on 21 November 2025. AKOS, the communications regulator, is single point of contact, lead market-surveillance authority and sandbox authority. The Information Commissioner covers biometric and fundamental-rights areas.",
        level: "verified",
        sources: [
          { t: "AKOS - Supervision of AI systems", u: "https://www.akos-rs.si/en/umetna-inteligenca/explore/frequently-asked-questions-and-answers/supervision-of-ai-systems" },
          { t: "Jadek & Pensa - What does the Act on the application of the AI Act bring?", u: "https://www.jadek-pensa.si/en/kaj-prinasa-zakon-o-izvajanju-akta-o-umetni-inteligenci/" },
          { t: "Telecompaper - Slovenia's Akos to lead AI regulation", u: "https://www.telecompaper.com/news/slovenias-akos-to-lead-ai-regulation--1571525" },
        ],
      },
      {
        topic: "Compute", date: "2026",
        text: "The Slovenian AI Factory (SLAIF), co-funded by EuroHPC and Slovenia, was officially launched in Ljubljana in 2026. Its new supercomputer, due in early 2027, will replace Vega.",
        level: "corroborated",
        sources: [
          { t: "SLING - Slovenian AI Factory (SLAIF)", u: "https://www.sling.si/en/slaif/" },
          { t: "Gov.si - A new supercomputer and AI factory", u: "https://www.gov.si/en/news/2025-03-12-slovenia-among-the-digital-giants-a-new-supercomputer-and-ai-factory-to-boost-technological-power/" },
        ],
        note: "One search summary gives 9 February 2026 as the launch date, but none of the readable sources confirmed the day.",
      },
    ],
    news: [
      {
        date: "2026-03-05", title: "Slovenia adopts National AI Strategy to 2030",
        summary: "NsUI 2030 succeeds the earlier national AI programme and sets five goals, from sovereign AI to safe and responsible use; an action plan is due within nine months.",
        level: "corroborated",
        sources: [
          { t: "Gov.si", u: "https://www.gov.si/en/news/2026-03-05-193rd-regular-session-of-the-government-of-the-republic-of-slovenia/" },
          { t: "ICE (Italian Trade Agency)", u: "https://www.ice.it/it/news/notizie-dal-mondo/300687" },
        ],
      },
      {
        date: "2026", title: "Slovenian AI Factory officially launched",
        summary: "A consortium of the Jožef Stefan Institute and the universities of Ljubljana and Maribor will run AI-optimised compute, housed at a hydroelectric site in Maribor.",
        level: "corroborated",
        sources: [
          { t: "SLING", u: "https://www.sling.si/en/slaif/" },
          { t: "University of Ljubljana", u: "https://www.uni-lj.si/en/news/2025-03-14-the-university-of-ljubljana-will-play-a-key-role-in-establishing-the-slovenian-artificial-intelligence-factory" },
        ],
      },
    ],
    watch: ["The NsUI 2030 action plan, due within nine months of the March 2026 adoption."],
  },

  // ------------------------------------------------------------------ CYPRUS
  {
    id: "cy", name: "Cyprus", flag: "🇨🇾", region: "Southern Europe (EU)", group: "Europe", geo: [33.38, 35.17], isoN: "196",
    stance: "Building its AI institutions: taskforce-drafted strategy to 2032, AI Act authorities named",
    summary:
      "Cyprus set up a National AI Taskforce in January 2025, and its draft national AI strategy went to public consultation in summer 2026. It named its EU AI Act authorities early, with the Commissioner of Communications in the lead. Critics say the draft has a clear institutional design but few firm dates or costings.",
    glance: { firstStrategy: "2020", latestStrategy: "2026 (draft, to 2032)", newestBody: "National AI Taskforce", newestBodyDate: "2025-01" },
    stats: { population: { v: 1370754, year: 2025 }, gdpPerCapita: { v: 41783, year: 2025 }, internet: { v: 89.6, year: 2024 } },
    oxford: { rank: 47, scores: [73.0, 58.17, 76.52, 81.29, 36.07, 51.81] },
    msAdoption: null,
    facts: [
      {
        topic: "Strategy", date: "2020-01",
        text: "The Council of Ministers approved Cyprus's first national AI strategy in January 2020. It has five priorities: talent, business competitiveness, public services, national data spaces, and ethical, reliable AI.",
        level: "corroborated",
        sources: [
          { t: "EC AI Watch - Cyprus AI strategy report", u: "https://ai-watch.ec.europa.eu/countries/cyprus/cyprus-ai-strategy-report_en" },
          { t: "Legal 500 - Artificial intelligence in Cyprus", u: "https://www.legal500.com/intelligence/cyprus/technology/artificial-intelligence-in-cyprus" },
        ],
      },
      {
        topic: "Institutions", date: "2025-01",
        text: "In January 2025 the Council of Ministers set up a National AI Taskforce, chaired by the Chief Scientist, with 11 members from government, business, academia and research.",
        level: "corroborated",
        sources: [
          { t: "OEB (Employers & Industrialists Federation) - Public consultation on the National AI Strategy", u: "https://www.oeb.org.cy/en/public-consultation-national-strategy-for-artificial-intelligence-of-the-republic-of-cyprus/" },
          { t: "CBN - Cyprus launches public consultation on national AI strategy", u: "https://www.cbn.com.cy/article/131986/cyprus-launches-public-consultation-on-national-ai-strategy" },
        ],
      },
      {
        topic: "Regulation", date: "2025-01",
        text: "Cyprus named its EU AI Act authorities in January 2025. The Commissioner of Communications is notifying authority, main market-surveillance authority and single point of contact, and the data-protection commissioner covers prohibited practices and certain high-risk areas.",
        level: "corroborated",
        sources: [
          { t: "Gov.cy (Deputy Ministry of Research, Innovation and Digital Policy) - AI Act page", u: "https://www.gov.cy/dmrid/en/uncategorized/regulation-eu-2024-1689-establishing-harmonised-rules-on-artificial-intelligence-ai-act/" },
          { t: "ArtificialIntelligenceAct.eu - National implementation plans", u: "https://artificialintelligenceact.eu/national-implementation-plans/" },
        ],
      },
      {
        topic: "Strategy", date: "2026-07",
        text: "The taskforce's draft National AI Strategy went to public consultation in July 2026, with comments due by 31 August. It has eight objectives, ranging from making Cyprus a trusted AI jurisdiction to building sovereign capabilities.",
        level: "verified",
        sources: [
          { t: "CBN - Cyprus launches public consultation on national AI strategy", u: "https://www.cbn.com.cy/article/131986/cyprus-launches-public-consultation-on-national-ai-strategy" },
          { t: "OEB - Public consultation notice", u: "https://www.oeb.org.cy/en/public-consultation-national-strategy-for-artificial-intelligence-of-the-republic-of-cyprus/" },
          { t: "Cyprus Mail - Pros and cons of Cyprus' national AI strategy (7 Aug 2026)", u: "https://cyprus-mail.com/2026/08/07/pros-and-cons-of-cyprus-national-ai-strategy" },
        ],
        note: "Critics note there is no operational date for the proposed National AI Authority, and no costings to 2032.",
      },
    ],
    news: [
      {
        date: "2026-08-07", title: "Draft AI strategy criticised for vague timelines",
        summary: "Commentators in Cyprus Mail say the strategy's institutions are well designed but its milestones are broad and overlapping.",
        level: "single",
        sources: [
          { t: "Cyprus Mail", u: "https://cyprus-mail.com/2026/08/07/pros-and-cons-of-cyprus-national-ai-strategy" },
        ],
      },
    ],
    watch: ["Final adoption of the strategy, and when the National AI Authority starts work."],
  },

  // ------------------------------------------------------------------ SWITZERLAND
  {
    id: "ch", name: "Switzerland", flag: "🇨🇭", region: "Central Europe (non-EU)", group: "Europe", geo: [7.45, 46.95], isoN: "756",
    stance: "Deliberately not the EU: sector-by-sector rules, Council of Europe treaty, fully open national LLM",
    summary:
      "Switzerland has decided against an EU-style horizontal AI law. It will ratify the Council of Europe AI Convention and adjust sector laws where needed. Its research institutions released Apertus, a fully open multilingual LLM. Its low 'Policy Capacity' score (39) reflects the absence of a formal AI strategy, despite strong infrastructure.",
    glance: { firstStrategy: "2020 (guidelines)", latestStrategy: "2025 (Federal Council approach)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 9092436, year: 2025 }, gdpPerCapita: { v: 114769, year: 2025 }, internet: { v: 97.3, year: 2025 } },
    oxford: { rank: 26, scores: [39.0, 68.97, 89.2, 73.93, 61.41, 59.84] },
    msAdoption: { h1_2025: 32.4, h2_2025: 34.8, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Governance", date: "2020-11-25",
        text: "In November 2020 the Federal Council adopted seven Guidelines on AI for the federal administration, covering human-centred design, transparency, accountability, safety and more. They do not bind the private sector.",
        level: "single",
        sources: [
          { t: "OFCOM (BAKOM) - AI guidelines", u: "https://www.bakom.admin.ch/en/ai-guidelines" },
        ],
      },
      {
        topic: "Regulation", date: "2025-02-12",
        text: "On 12 February 2025 the Federal Council chose to ratify the Council of Europe AI Convention and make targeted, sector-specific changes to law. It ruled out a horizontal law modelled on the EU AI Act.",
        level: "verified",
        sources: [
          { t: "Pestalozzi - Federal Council outlines a lean regulatory approach", u: "https://pestalozzilaw.com/en/insights/news/legal-insights/switzerland-sets-its-course-on-ai-legislation-federal-council-out-lines-a-lean-regulatory-approach/?simple_view=true" },
          { t: "Sidley - New pathway of regulating AI in Switzerland", u: "https://datamatters.sidley.com/2025/04/07/new-pathway-of-regulating-artificial-intelligence-in-switzerland-competitive-edge-or-challenge/" },
          { t: "CMS Expert Guide - AI regulation in Switzerland", u: "https://cms.law/en/int/expert-guides/ai-regulation-scanner/switzerland" },
        ],
      },
      {
        topic: "Treaties", date: "2025-02-12",
        text: "In February 2025 the Federal Council decided to bring the Council of Europe AI Convention into Swiss law, with any legal changes kept as sector-specific as possible. A consultation draft of the necessary laws was due by the end of 2026.",
        level: "corroborated",
        sources: [
          { t: "Swissinfo - Swiss government wants to adopt Council of Europe AI conventions", u: "https://www.swissinfo.ch/eng/swiss-politics/federal-council-wants-to-adopt-ai-conventions-of-the-council-of-europe/88864836" },
          { t: "Grant Thornton - Federal Council wants to ratify the AI Convention", u: "https://www.grantthornton.ch/en/insights/federal-council-ai-convention-finance-challenges/" },
        ],
        note: "One unverified blog says the draft has slipped to early 2027.",
      },
      {
        topic: "Models", date: "2025-09-02",
        text: "EPFL, ETH Zurich and the Swiss National Supercomputing Centre released Apertus in September 2025. It is a fully open LLM (8B and 70B parameters, more than 1,000 languages), with weights, training-data recipes and documentation all public.",
        level: "verified",
        sources: [
          { t: "ETH Zurich - Apertus: a fully open, transparent, multilingual language model", u: "https://ethz.ch/en/news-and-events/eth-news/news/2025/09/press-release-apertus-a-fully-open-transparent-multilingual-language-model.html" },
          { t: "CSCS - Apertus", u: "https://www.cscs.ch/science/computer-science-hpc/2025/apertus-a-fully-open-transparent-multilingual-language-model" },
          { t: "Startupticker - The Swiss open source LLM is live", u: "https://www.startupticker.ch/en/news/the-swiss-open-source-llm-is-live" },
        ],
      },
    ],
    news: [
      {
        date: "2026", title: "Consultation draft on AI Convention ratification expected",
        summary: "The draft is meant to set rules on transparency, data protection, non-discrimination and oversight, with a dispatch to Parliament expected afterwards.",
        level: "corroborated",
        sources: [
          { t: "Swissinfo", u: "https://www.swissinfo.ch/eng/swiss-politics/federal-council-wants-to-adopt-ai-conventions-of-the-council-of-europe/88864836" },
          { t: "SIDD - AI regulation in Switzerland: 2026 status and outlook", u: "https://www.sidd.swiss/en/insights/ai-regulation-switzerland/" },
        ],
      },
    ],
    watch: ["Publication of the consultation draft (end-2026 or early 2027)."],
  },

  // ------------------------------------------------------------------ QATAR
  {
    id: "qa", name: "Qatar", flag: "🇶🇦", region: "Middle East / Gulf", group: "Middle East", geo: [51.53, 25.29], isoN: "634",
    stance: "Sovereign-wealth-led: national AI company and a $20bn infrastructure venture",
    summary:
      "Qatar published one of the region's first national AI strategies in 2019, drafted by the Qatar Computing Research Institute. Its recent moves are mostly financial. The sovereign fund QIA launched Qai, a national AI company, and a $20 billion AI-infrastructure joint venture with Brookfield in December 2025. Government adoption runs through the communications ministry's Digital Agenda 2030.",
    glance: { firstStrategy: "2019", latestStrategy: "2019 (under Digital Agenda 2030)", newestBody: "Qai (national AI company)", newestBodyDate: "2025-12" },
    stats: { population: { v: 2972215, year: 2025 }, gdpPerCapita: { v: 72525, year: 2025 }, internet: { v: 98.1, year: 2024 } },
    oxford: { rank: 54, scores: [80.5, 57.95, 77.5, 62.82, 44.54, 38.95] },
    msAdoption: { h1_2025: 35.7, h2_2025: 38.3, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2019",
        text: "Qatar launched its National AI Strategy at QITCOM 2019. It was based on a blueprint from the Qatar Computing Research Institute (part of HBKU) and tied to Qatar National Vision 2030.",
        level: "corroborated",
        sources: [
          { t: "Gulf Times - Qatar launches strategy to tap AI for future", u: "https://www.gulf-times.com/story/645930/Qatar-launches-strategy-to-tap-AI-for-future" },
          { t: "QCRI - National AI Strategy for Qatar (PDF)", u: "https://qcai-blog.qcri.org/wp-content/uploads/2020/04/QCRI-Artificial-Intelligence-Strategy-2019-ENG.pdf" },
        ],
        note: "Sources list the six pillars differently. Gulf Times: talent, data access, employment, wealth creation, 'AI+X', ethics.",
      },
      {
        topic: "Investment", date: "2025-12-09",
        text: "QIA launched Qai, a national AI company, and formed a $20 billion AI-infrastructure joint venture with Brookfield covering Qatar and selected overseas markets.",
        level: "verified",
        sources: [
          { t: "QIA - Brookfield and Qai form $20 billion partnership", u: "https://www.qia.qa/en/Newsroom/Pages/Brookfield-and-Qai-Form-$20-Billion-Strategic-Investment-Partnership-for-AI-Infrastructure.aspx" },
          { t: "Government Communications Office - Qatar launches Qai", u: "https://www.gco.gov.qa/en/media-centre/top-news/qatar-launches-qai-to-power-its-global-ai-ambitions/" },
          { t: "Arab News - Qatar, Brookfield launch $20bn AI infrastructure venture", u: "https://www.arabnews.com/node/2625715/business-economy" },
          { t: "The Peninsula - Brookfield, Qai forge $20bn partnership", u: "https://thepeninsulaqatar.com/article/10/12/2025/brookfield-qatars-qai-forge-20bn-strategic-partnership-to-bolster-ai-infrastructure" },
        ],
      },
      {
        topic: "Partnerships", date: "2025-02",
        text: "Qatar's Ministry of Communications and IT signed a long-term partnership with Scale AI in February 2025 to support its Digital Agenda 2030.",
        level: "corroborated",
        sources: [
          { t: "Scale AI - MCIT & Scale AI", u: "https://scale.com/blog/mcit-scale" },
          { t: "US Trade.gov - Qatar AI and technology developments", u: "https://www.trade.gov/market-intelligence/qatar-artificial-intelligence-ai-and-technology-developments" },
        ],
      },
    ],
    news: [
      {
        date: "2026-09", title: "Qatar pushes agentic AI into core government operations",
        summary: "MCIT officials described cloud infrastructure as the base for agentic AI in government and opened an innovation lab for developers.",
        level: "single",
        sources: [{ t: "Gulf Times - Qatar accelerates shift to autonomous AI", u: "https://www.gulf-times.com/article/733923/business/qatar-accelerates-shift-to-autonomous-ai-across-public-private-sectors" }],
      },
      {
        date: "2025-12-09", title: "QIA launches Qai and a $20bn Brookfield AI-infrastructure venture",
        summary: "Qai will focus on applying and commercialising leading AI rather than building foundation models from scratch.",
        level: "verified",
        sources: [
          { t: "QIA", u: "https://www.qia.qa/en/Newsroom/Pages/Brookfield-and-Qai-Form-$20-Billion-Strategic-Investment-Partnership-for-AI-Infrastructure.aspx" },
          { t: "Arab News", u: "https://www.arabnews.com/node/2625715/business-economy" },
          { t: "Economy Middle East", u: "https://economymiddleeast.com/news/qatars-qai-brookfield-forge-20-billion-partnership-to-bolster-ai-infrastructure/" },
        ],
      },
    ],
    watch: ["Qatar's low 'Resilience' score (39), the weakest pillar for the Gulf states in this set."],
  },

  // ------------------------------------------------------------------ BAHRAIN
  {
    id: "bh", name: "Bahrain", flag: "🇧🇭", region: "Middle East / Gulf", group: "Middle East", geo: [50.58, 26.23], isoN: "048",
    stance: "First Gulf state to pass a standalone AI bill through a chamber, now stalled",
    summary:
      "In April 2024 Bahrain's Shura Council unanimously passed a 38-article AI law with prison terms and fines. The government has since argued that existing laws already cover much of it, and the bill has not been enacted. Meanwhile, the e-government authority has issued a non-binding policy on government use of AI.",
    glance: { firstStrategy: "2025 (gov. AI policy)", latestStrategy: "2025 (General Policy for AI v1.0)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 1600366, year: 2025 }, gdpPerCapita: { v: 30597, year: 2025 }, internet: { v: 100, year: 2024 } },
    oxford: { rank: 48, scores: [46.5, 58.04, 72.5, 83.37, 48.5, 49.08] },
    msAdoption: null,
    facts: [
      {
        topic: "Regulation", date: "2024-04-28",
        text: "On 28 April 2024 the Shura Council unanimously approved a 38-article AI Regulation Law. Penalties include prison and fines of up to BD 2,000, and it proposes an AI oversight unit and licensing.",
        level: "corroborated",
        sources: [
          { t: "Gulf Daily News - New law to regulate use of AI approved", u: "https://www.gdnonline.com/Details/1310840/New-law-to-regulate-use-of-AI-approved" },
          { t: "Inc. Arabia - Bahrain approves comprehensive AI regulation law", u: "https://en.incarabia.com/bahrain-approves-comprehensive-ai-regulation-law-652890.html" },
        ],
      },
      {
        topic: "Regulation", date: "2025",
        text: "The bill has not been enacted. The government has argued that existing law already covers many of its provisions and has flagged undefined terms.",
        level: "single",
        sources: [
          { t: "News of Bahrain - AI Regulation Bill faces pushback", u: "https://www.newsofbahrain.com/bahrain/105401.html" },
        ],
      },
      {
        topic: "Public sector", date: "2025",
        text: "The Information & eGovernment Authority issued a non-binding General Policy for the Use of AI (v1.0) for government entities. It sets four pillars and eleven principles, including human decision-making.",
        level: "corroborated",
        sources: [
          { t: "Middle East AI News - Bahrain launches national AI policy", u: "https://www.middleeastainews.com/p/bahrain-launches-national-ai-policy" },
          { t: "Nemko - AI Regulation Bahrain", u: "https://digital.nemko.com/regulations/ai-regulation-bahrain" },
        ],
        note: "Sources date it to May 2025 or 30 July 2025.",
      },
    ],
    news: [
      {
        date: "2025", title: "Government AI-use policy issued while AI bill stalls",
        summary: "Until a law passes, AI activity falls under the 2018 personal data protection law and general cybercrime law.",
        level: "corroborated",
        sources: [
          { t: "Middle East AI News", u: "https://www.middleeastainews.com/p/bahrain-launches-national-ai-policy" },
          { t: "News of Bahrain", u: "https://www.newsofbahrain.com/bahrain/105401.html" },
        ],
      },
    ],
    watch: ["Whether the Council of Representatives revives the AI bill.", "A full national AI strategy, reportedly in draft."],
  },

  // ------------------------------------------------------------------ JORDAN
  {
    id: "jo", name: "Jordan", flag: "🇯🇴", region: "Middle East", group: "Middle East", geo: [35.93, 31.95], isoN: "400",
    stance: "Public-sector skilling and Arabic AI; strategy implementation through government programmes",
    summary:
      "Jordan's Cabinet-approved AI strategy (2023–2027) sets out 68 projects. In 2026 the focus is the civil service: leadership AI programmes, a target of training 15,000 public servants by 2027, an AI teaching assistant with over a million users, and a partnership with Saudi Arabia's HUMAIN on Arabic AI models.",
    glance: { firstStrategy: "2020 (AI policy)", latestStrategy: "2023 (AI Strategy 2023–2027)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 11520684, year: 2025 }, gdpPerCapita: { v: 5348, year: 2025 }, internet: { v: 95.6, year: 2024 } },
    oxford: { rank: 63, scores: [69.5, 48.26, 69.64, 79.99, 35.47, 57.39] },
    msAdoption: { h1_2025: 25.4, h2_2025: 27.0, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2023",
        text: "The Cabinet approved Jordan's AI Strategy and Implementation Plan 2023–2027, which follows the 2020 AI policy. It lays out 68 projects, with priorities in health, education, social protection and employment.",
        level: "verified",
        sources: [
          { t: "Jordan News - Cabinet approves Jordan's AI strategy for 2023–2027", u: "https://www.jordannews.jo/Section-109/News/Cabinet-approves-Jordan-s-AI-strategy-for-2023-2027-23644" },
          { t: "MoDEE - Jordan's AI Strategy and Implementation Plan (PDF)", u: "https://www.modee.gov.jo/ebv4.0/root_storage/en/eb_list_page/40435648.pdf" },
          { t: "Digital Watch - Jordanian AI Strategy 2023–2027", u: "https://dig.watch/resource/jordanian-artificial-intelligence-strategy-and-implementation-plan-2023-2027" },
        ],
      },
      {
        topic: "Skills", date: "2026-06-30",
        text: "Jordan launched an 'AI for Government Leaders' programme and aims to train 15,000 civil servants by 2027. Over 9,000 had already been trained, and the AI teaching assistant 'Siraj' had passed 1.3 million users.",
        level: "single",
        sources: [
          { t: "Petra - Jordan launches 'AI for Government Leaders' programme", u: "https://petra.gov.jo/en/news/jordan-launches-ai-for-government-leaders-program-to-drive-public-sector-modernization" },
          { t: "Petra - Government launches 2nd AI Leadership Program", u: "https://petra.gov.jo/en/news/government-launches-2nd-ai-leadership-program" },
        ],
        note: "Both links are from the state news agency (one source).",
      },
      {
        topic: "Partnerships", date: "2026",
        text: "Jordan's digital-economy ministry signed an MOU with Saudi AI company HUMAIN at LEAP 2026, covering Arabic AI models and public-sector AI.",
        level: "single",
        sources: [{ t: "Jordan Times - Jordan, Saudi HUMAIN forge partnership to advance AI", u: "https://jordantimes.com/news/business/jordan-saudi-humain-forge-partnership-to-advance-ai" }],
      },
    ],
    news: [
      {
        date: "2026-08-09", title: "AI used to detect water-network leaks",
        summary: "The digital-economy and water ministers reviewed an AI project to monitor networks and reduce water loss, a priority in one of the world's most water-scarce countries.",
        level: "single",
        sources: [{ t: "Petra - Water, Digital Economy Ministers review AI water project", u: "https://petra.gov.jo/en/news/water-digital-economy-ministers-review-ai-water-project" }],
      },
    ],
    watch: ["A reported second-edition strategy (2025–2030). Not confirmed."],
  },

  // ------------------------------------------------------------------ NEW ZEALAND
  {
    id: "nz", name: "New Zealand", flag: "🇳🇿", region: "Oceania", group: "Asia-Pacific", geo: [174.78, -41.29], isoN: "554",
    stance: "Light-touch, adoption-first: no AI law, principles-based guidance",
    summary:
      "New Zealand published its first national AI strategy in July 2025, relatively late for a wealthy country. The strategy deliberately takes a 'light-touch', principles-based approach that focuses on business adoption and rules out a standalone AI act for now. The public sector follows a non-binding AI framework issued in February 2025.",
    glance: { firstStrategy: "2025", latestStrategy: "2025 (Investing with confidence)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 5324700, year: 2025 }, gdpPerCapita: { v: 49591, year: 2025 }, internet: { v: 93.5, year: 2024 } },
    oxford: { rank: 37, scores: [92.0, 57.24, 71.88, 64.32, 49.33, 64.3] },
    msAdoption: { h1_2025: 37.6, h2_2025: 40.5, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2025-07-08",
        text: "New Zealand released its first national AI strategy, 'Investing with confidence', on 8 July 2025. It confirms a light-touch, principles-based approach aimed at private-sector adoption and rules out a standalone AI act for now.",
        level: "verified",
        sources: [
          { t: "MBIE - New Zealand's Strategy for AI (PDF)", u: "https://www.mbie.govt.nz/assets/new-zealands-strategy-for-artificial-intelligence.pdf" },
          { t: "DLA Piper - New Zealand's new strategic approach to AI", u: "https://www.dlapiper.com/en-us/insights/publications/2025/07/quick-on-the-uptake-new-zealand-s-new-strategic-approach-to-artificial-intelligence" },
          { t: "Global Government Forum - New Zealand launches its first national AI strategy", u: "https://www.globalgovernmentforum.com/new-zealand-launches-its-first-national-ai-strategy/" },
          { t: "Bell Gully - NZ's AI strategy: light-touch regulation", u: "https://www.bellgully.com/insights/nz-s-ai-strategy-light-touch-regulation-and-opportunities-for-businesses/" },
          { t: "Nemko - New Zealand AI Strategy 2025", u: "https://digital.nemko.com/news/new-zealand-ai-strategy-2025" },
        ],
      },
      {
        topic: "Public sector", date: "2025-02",
        text: "A non-binding Public Service AI Framework, published by the Government Chief Digital Officer in early 2025, sets five principles for government agencies using AI.",
        level: "corroborated",
        sources: [
          { t: "Digital.govt.nz - Artificial intelligence", u: "https://www.digital.govt.nz/standards-and-guidance/technology-and-architecture/artificial-intelligence" },
          { t: "DLA Piper - New Zealand's Public Service AI Framework (Feb 2025)", u: "https://www.dlapiper.com/en/insights/publications/2025/02/new-zealands-public-service-ai-framework-guiding-responsible-innovation" },
          { t: "Russell McVeagh - Release of public sector AI framework", u: "https://russellmcveagh.com/insights-news/release-of-public-sector-ai-framework" },
          { t: "Frank Group - How AI is reshaping public services in New Zealand", u: "https://frankgroup.co.nz/ai-transforming-work-in-public-sector" },
        ],
      },
    ],
    news: [
      {
        date: "2025-07-08", title: "First national AI strategy: 'Investing with confidence'",
        summary: "It was released alongside responsible-AI guidance for businesses and supports the government's 'Going for Growth' agenda.",
        level: "verified",
        sources: [
          { t: "Nemko - New Zealand AI Strategy 2025", u: "https://digital.nemko.com/news/new-zealand-ai-strategy-2025" },
          { t: "Global Government Forum", u: "https://www.globalgovernmentforum.com/new-zealand-launches-its-first-national-ai-strategy/" },
          { t: "Oxford Insights - GAIRI 2025 report (notes NZ's 'going for growth' ethos)", u: "https://oxfordinsights.com/wp-content/uploads/2026/01/2025-Government-AI-Readiness-Index-Report_01_26.pdf" },
        ],
      },
    ],
    watch: ["Whether the light-touch stance holds as Australia and the EU tighten their rules."],
  },

  // ------------------------------------------------------------------ BHUTAN
  {
    id: "bt", name: "Bhutan", flag: "🇧🇹", region: "South Asia", group: "Asia-Pacific", geo: [89.64, 27.47], isoN: "064",
    stance: "Gross National Happiness meets hydropower-backed compute",
    summary:
      "Bhutan's GovTech Agency drafted a National AI Strategy that ties AI to Gross National Happiness, but formal approval had not been confirmed as of this research. Its bigger bet is Gelephu Mindfulness City, a special administrative region announced in December 2023 that is courting hydropower-backed AI data centres. Its readiness rank (101st) is the lowest in this set.",
    glance: { firstStrategy: "2025 (draft)", latestStrategy: "2025 (National AI Strategy, pending approval)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 796682, year: 2025 }, gdpPerCapita: { v: 4493, year: 2025 }, internet: { v: 91.3, year: 2024 } },
    oxford: { rank: 101, scores: [12.0, 36.49, 51.04, 73.11, 28.24, 33.79] },
    msAdoption: null,
    facts: [
      {
        topic: "Strategy", date: "2025",
        text: "GovTech published a 'National AI Strategy 2025' aimed at advancing Gross National Happiness. It names eight focus areas, including agriculture, tourism, green energy, education and health, and three enablers. It was awaiting formal approval by the GovTech Commission.",
        level: "corroborated",
        sources: [
          { t: "GovTech Bhutan - National AI Strategy 2025 (PDF)", u: "https://tech.gov.bt/wp-content/uploads/2025/10/National-AI-Strategy-2025.pdf" },
          { t: "BBS - Bhutan launches AI for Development Workshop", u: "https://www.bbs.bt/231377/" },
        ],
        note: "No confirmation of formal adoption was found.",
      },
      {
        topic: "Economy", date: "2023-12",
        text: "Gelephu Mindfulness City, a special administrative region with its own executive, judicial and legislative powers, was announced in December 2023. It aims to attract carbon-free tech industries, including data centres and AI companies.",
        level: "verified",
        sources: [
          { t: "Wikipedia - Gelephu Mindfulness City", u: "https://en.wikipedia.org/wiki/Gelephu_Mindfulness_City" },
          { t: "PR Newswire - Bhutan appoints strategic leaders for GMC", u: "https://www.prnewswire.com/apac/news-releases/bhutan-appoints-strategic-leaders-to-propel-gelephu-mindfulness-city-to-global-prominence-302266714.html" },
          { t: "The Secretariat - Can a Bhutanese city be the Indian investor's new Shangri-la?", u: "https://thesecretariat.in/article/can-a-bhutanese-city-be-the-indian-investor-s-new-shangri-la" },
        ],
      },
      {
        topic: "Compute", date: "2026-06-20",
        text: "SATO Technologies signed a non-binding letter of intent with the GMC Authority for a hydro-powered AI compute campus. It starts at 5 MW, with up to 100 MW reserved and a possible expansion to 500 MW.",
        level: "verified",
        sources: [
          { t: "Newsfile - SATO signs LOI with Gelephu Mindfulness City Authority", u: "https://www.newsfilecorp.com/release/303913/SATO-Technologies-Signs-Letter-of-Intent-with-Bhutans-Gelephu-Mindfulness-City-Authority-to-Develop-a-HydroPowered-Sovereign-AI-Compute-Campus" },
          { t: "The Bhutanese - GMCA and SATO sign LoI for renewable-powered AI data centre campus", u: "https://thebhutanese.bt/gmca-and-sato-sign-loi-for-renewable-energy-powered-ai-data-center-campus/" },
          { t: "Blockspace - SATO signs LOI for hydro-powered AI campus in Bhutan", u: "https://blockspace.media/insight/sato-bhutan-hydro-powered-ai-campus/" },
          { t: "BTW Media - Sato plans AI data centre in Bhutan", u: "https://btw.media/en/sato-plans-ai-data-centre-in-bhutan" },
        ],
        note: "Sources differ on whether 100 MW is the headline target or the reserved amount. The authority says further technical, commercial and regulatory assessment is still required.",
      },
    ],
    news: [
      {
        date: "2026-06-20", title: "Hydro-powered AI data-centre campus planned in Gelephu",
        summary: "The letter of intent only sets a framework for negotiating final agreements on power, site, financing and offtake.",
        level: "verified",
        sources: [
          { t: "Newsfile", u: "https://www.newsfilecorp.com/release/303913/SATO-Technologies-Signs-Letter-of-Intent-with-Bhutans-Gelephu-Mindfulness-City-Authority-to-Develop-a-HydroPowered-Sovereign-AI-Compute-Campus" },
          { t: "The Bhutanese - GMCA and SATO sign LoI for renewable-powered AI data centre campus", u: "https://thebhutanese.bt/gmca-and-sato-sign-loi-for-renewable-energy-powered-ai-data-center-campus/" },
          { t: "Blockspace - SATO signs LOI for hydro-powered AI campus in Bhutan", u: "https://blockspace.media/insight/sato-bhutan-hydro-powered-ai-campus/" },
          { t: "BTW Media - Sato plans AI data centre in Bhutan", u: "https://btw.media/en/sato-plans-ai-data-centre-in-bhutan" },
        ],
      },
    ],
    watch: ["Formal approval of the National AI Strategy.", "Whether the GMC compute campus moves past the letter of intent."],
  },

  // ------------------------------------------------------------------ MAURITIUS
  {
    id: "mu", name: "Mauritius", flag: "🇲🇺", region: "Indian Ocean (Africa)", group: "Africa", geo: [57.5, -20.16], isoN: "480",
    stance: "Africa's small-island AI hub bid: new strategy, ethics guidelines, AI at the top of the budget",
    summary:
      "Mauritius adopted a 2025–2029 National AI Strategy and FAIR ethics guidelines, launched in April 2026 with UNDP support. It also created a dedicated AI Unit, and its 2026–27 budget made AI the first of seven economic pillars, with a pledge to train 50,000 people in AI skills.",
    glance: { firstStrategy: "2018", latestStrategy: "2026 (AIM strategy 2025–2029)", newestBody: "AI Unit (MITCI)", newestBodyDate: "2025" },
    stats: { population: { v: 1243741, year: 2025 }, gdpPerCapita: { v: 12991, year: 2025 }, internet: { v: 73.3, year: 2024 } },
    oxford: { rank: 67, scores: [65.5, 48.72, 72.5, 65.63, 38.52, 36.76] },
    msAdoption: null,
    facts: [
      {
        topic: "Strategy", date: "2018",
        text: "Mauritius was an early African mover, with an AI strategy published in 2018. It covered six sectors (agriculture, health, FinTech, transport, manufacturing, ocean economy) and proposed a Mauritius AI Council. The OECD judges its follow-through limited.",
        level: "verified",
        sources: [
          { t: "OECD.AI - Mauritius AI Strategy", u: "https://oecd.ai/en/dashboards/policy-initiatives/mauritius-artificial-intelligence-ai-strategy-7829" },
          { t: "Commonwealth TradeCCA - Mauritius AI Strategy", u: "https://tradecca.thecommonwealth.org/policy-repository/mauritius-artificial-intelligence-ai-strategy/" },
          { t: "Research ICT Africa - Decoding Mauritius' National AI Strategy", u: "https://researchictafrica.net/research/decoding-mauritius-national-ai-strategy-through-a-just-ai-lens/" },
        ],
        note: "Research ICT Africa dates it 2018/2019.",
      },
      {
        topic: "Strategy", date: "2026-04-09",
        text: "Mauritius launched its National AI Strategy 2025–2029, 'AI for Mauritius' (AIM), together with the FAIR ethics guidelines, in April 2026. Cabinet had adopted them in February 2026, and UNDP provided support. The strategy sets six priorities, including trusted AI governance and public services.",
        level: "corroborated",
        sources: [
          { t: "UNDP - Mauritius launches National AI Strategy and FAIR Guidelines", u: "https://www.undp.org/mauritius-seychelles/press-releases/mauritius-launches-national-ai-strategy-and-fair-guidelines-supported-undp" },
          { t: "TechCabal - Mauritius' new AI strategy sets a new bar (23 Apr 2026)", u: "https://techcabal.com/2026/04/23/mauritius-new-ai-strategy-sets-a-new-bar-ethics-before-execution/" },
          { t: "Ecofin - Mauritius launches AI strategy", u: "https://www.ecofinagency.com/news-digital/1304-54615-mauritius-launches-ai-strategy-targets-hub-role-for-small-island-states" },
        ],
        note: "Sources disagree on whether the FAIR guidelines bind high-risk sectors. Comsure quotes the text as non-binding. Launch date reported as 9 or 10 April.",
      },
      {
        topic: "Institutions", date: "2025-06",
        text: "The 2025–26 budget created a dedicated AI Unit at the Ministry of IT, Communication and Innovation, along with an AI start-up programme and tax deductions for AI investment by MSMEs.",
        level: "verified",
        sources: [
          { t: "EDB Mauritius - Budget 2025-2026: Artificial Intelligence", u: "https://edbmauritius.org/newsroom/budget-2025-2026-artificial-intelligence" },
          { t: "iAfrica - Mauritius bets on AI in 2025–2026 budget", u: "https://iafrica.com/mauritius-bets-on-artificial-intelligence-to-drive-digital-economy-in-2025-2026-budget/" },
          { t: "Africa AI News - New Mauritius budget confirms AI core to economic strategy", u: "https://www.africaainews.com/p/new-mauritius-budget-confirms-ai" },
        ],
      },
      {
        topic: "Skills", date: "2026-06-19",
        text: "The 2026–27 budget (19 June 2026) made AI the first of seven strategic pillars. It pledged to train 50,000 people in practical AI skills, including 8,000 secondary-school teachers.",
        level: "verified",
        sources: [
          { t: "National Assembly - Budget Speech 2026-2027 (PDF)", u: "https://mauritiusassembly.govmu.org/mauritiusassembly/wp-content/uploads/2026/06/SPEECH-2026_2027.pdf" },
          { t: "Scrolla - Mauritius trains 50,000 for AI future", u: "https://scrolla.africa/mauritius-trains-50000-for-ai-future/" },
          { t: "Lawyard - Mauritius charts ambitious digital future", u: "https://www.lawyard.org/news/mauritius-charts-ambitious-digital-future-ai-tech-investment-and-regulatory-overhaul-drive-2026-27-economic-strategy/" },
        ],
      },
    ],
    news: [
      {
        date: "2026-06-19", title: "Budget puts AI first among seven economic pillars",
        summary: "Plans include AI chatbots in licensing, AI tools for the financial regulator, and a healthcare AI evaluation unit.",
        level: "verified",
        sources: [
          { t: "Budget Speech", u: "https://mauritiusassembly.govmu.org/mauritiusassembly/wp-content/uploads/2026/06/SPEECH-2026_2027.pdf" },
          { t: "Scrolla", u: "https://scrolla.africa/mauritius-trains-50000-for-ai-future/" },
          { t: "Lawyard", u: "https://www.lawyard.org/news/mauritius-charts-ambitious-digital-future-ai-tech-investment-and-regulatory-overhaul-drive-2026-27-economic-strategy/" },
        ],
      },
      {
        date: "2026-04-09", title: "AI strategy and FAIR ethics guidelines launched",
        summary: "The approach is 'ethics first, law later': guidelines now, with a national AI guideline promised in the budget.",
        level: "corroborated",
        sources: [
          { t: "UNDP - Mauritius launches National AI Strategy and FAIR Guidelines", u: "https://www.undp.org/mauritius-seychelles/press-releases/mauritius-launches-national-ai-strategy-and-fair-guidelines-supported-undp" },
          { t: "TechCabal", u: "https://techcabal.com/2026/04/23/mauritius-new-ai-strategy-sets-a-new-bar-ethics-before-execution/" },
        ],
      },
    ],
    watch: ["Whether the 50,000-person AI training pledge is delivered."],
  },

  // ------------------------------------------------------------------ BENIN
  {
    id: "bj", name: "Benin", flag: "🇧🇯", region: "West Africa", group: "Africa", geo: [2.63, 6.5], isoN: "204",
    stance: "Early West African strategist; new government created a dedicated AI-led digital ministry",
    summary:
      "Benin adopted a National AI and Big Data Strategy (SNIAM) in January 2023, with 123 actions over five years. After the May 2026 change of president, the new government under Romuald Wadagni created a Ministry of Digital Transformation and Innovation. It is led by AI researcher Mahuna Akplogan and is explicitly responsible for the AI strategy.",
    glance: { firstStrategy: "2023", latestStrategy: "2023 (SNIAM 2023–2027)", newestBody: "Ministry of Digital Transformation & Innovation", newestBodyDate: "2026-05-26" },
    stats: { population: { v: 14814460, year: 2025 }, gdpPerCapita: { v: 1658, year: 2025 }, internet: { v: 34.0, year: 2024 } },
    oxford: { rank: 90, scores: [61.0, 26.99, 61.25, 63.05, 26.89, 34.9] },
    msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null, regional: true },
    facts: [
      {
        topic: "Strategy", date: "2023-01-18",
        text: "On 18 January 2023 the Council of Ministers adopted the National Strategy for AI and Big Data 2023–2027 (SNIAM): four programmes and 123 actions, budgeted at about 4.68 billion CFA francs.",
        level: "verified",
        sources: [
          { t: "Ecofin - Benin approves a national AI strategy", u: "https://www.ecofinagency.com/telecom/2401-44198-benin-approves-a-national-artificial-intelligence-strategy" },
          { t: "OECD.AI - National AI and Big Data Strategy 2023–2027", u: "https://oecd.ai/en/dashboards/policy-initiatives/national-artificial-intelligence-and-big-data-strategy-2023-2027" },
          { t: "Digital Watch - SNIAM of Benin", u: "https://dig.watch/resource/the-national-strategy-for-artificial-intelligence-and-big-data-sniam-of-benin" },
          { t: "Government of Benin - National AI and Big Data Strategy (PDF)", u: "https://innovation.gouv.bj/assets/documents/national-artificial-intelligence-and-big-data-strategy-1682673348.pdf" },
        ],
        note: "Budget conversions vary (about US$7.8M).",
      },
      {
        topic: "Institutions", date: "2026-05-26",
        text: "President Romuald Wadagni's first government created a Ministry of Digital Transformation and Innovation, led by Mahuna Akplogan (PhD in AI, former Sèmè City head), and gave it explicit responsibility for the national AI strategy.",
        level: "verified",
        sources: [
          { t: "Ecofin - Benin appoints AI expert Mahuna Akplogan", u: "https://www.ecofinagency.com/appointments/2505-55895-benin-appoints-ai-expert-mahuna-akplogan-as-minister-of-digital-transformation-and-innovation" },
          { t: "Digital Business Africa - Wadagni forms first government", u: "https://www.digitalbusiness.africa/benin-romuald-wadagni-forme-son-premier-gouvernement-mahuna-akplogan-nomme-ministre-de-la-transformation-digitale/" },
          { t: "Benin Web TV - Akplogan takes charge of the new ministry of AI", u: "https://beninwebtv.bj/en/benin-mahuna-akplogan-takes-charge-of-the-new-ministry-of-ai/" },
        ],
      },
    ],
    news: [
      {
        date: "2026-08-04", title: "Digital minister leads delegation to Ethiopia on digital public services",
        summary: "The visit compared approaches to digital ID, digital public services and cybersecurity.",
        level: "corroborated",
        sources: [
          { t: "AllAfrica", u: "https://allafrica.com/stories/202608050086.html" },
          { t: "Gouv.bj", u: "https://www.gouv.bj/article/3631/le-benin-ethiopie-renforcent-leur-cooperation-dans-numerique-innovation/" },
        ],
      },
    ],
    watch: ["Implementation reporting on SNIAM's 123 actions. Little public data exists.", "Internet use (34%) limits AI reach."],
  },

  // ------------------------------------------------------------------ COSTA RICA
  {
    id: "cr", name: "Costa Rica", flag: "🇨🇷", region: "Central America", group: "Americas", geo: [-84.09, 9.93], isoN: "188",
    stance: "First Central American AI strategy; regulation still at the bill stage",
    summary:
      "Costa Rica's science and technology ministry (MICITT) launched the National AI Strategy 2024–2027 in October 2024, the first in Central America. Several AI bills are before the Legislative Assembly, including one modelled on the EU's risk-based approach, but none had been approved by the research date.",
    glance: { firstStrategy: "2024", latestStrategy: "2024 (ENIA 2024–2027)", newestBody: "—", newestBodyDate: "" },
    stats: { population: { v: 5152950, year: 2025 }, gdpPerCapita: { v: 19970, year: 2025 }, internet: { v: 87.2, year: 2024 } },
    oxford: { rank: 79, scores: [69.0, 43.32, 66.0, 42.61, 24.09, 58.76] },
    msAdoption: { h1_2025: 25.1, h2_2025: 26.5, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Strategy", date: "2024-10-24",
        text: "MICITT launched the National AI Strategy (ENIA) 2024–2027 on 24 October 2024, the first AI public policy in Central America. Its goals include regulatory frameworks, skills, R&D and better public services.",
        level: "verified",
        sources: [
          { t: "Delfino - MICITT lanza primera política pública sobre IA", u: "https://delfino.cr/2024/10/micitt-lanza-primera-politica-publica-sobre-uso-y-desarrollo-de-inteligencia-artificial" },
          { t: "Semanario Universidad - Gobierno lanza estrategia nacional sobre IA", u: "https://semanariouniversidad.com/pais/gobierno-lanza-estrategia-nacional-sobre-inteligencia-artificial/" },
          { t: "El Mundo CR - MICITT presentó Estrategia Nacional de IA", u: "https://elmundo.cr/costa-rica/micitt-presento-estrategia-nacional-de-inteligencia-artificial/" },
          { t: "OECD.AI - National AI Strategy (NAIS)", u: "https://oecd.ai/en/dashboards/policy-initiatives/national-artificial-intelligence-strategy-nais-2489" },
        ],
      },
      {
        topic: "Regulation", date: "2026",
        text: "Costa Rica has no AI-specific law. Bills including 23.771, which follows the EU's risk-based approach, as well as 23.919 and 24.484, were pending, and none had been approved.",
        level: "single",
        sources: [
          { t: "INPLP - Legal update on privacy and AI: Costa Rica", u: "https://inplp.com/latest-news/article/legal-update-on-privacy-and-artificial-intelligence-costa-rica/" },
        ],
      },
    ],
    news: [
      {
        date: "2026-03", title: "AI management-system standard adopted nationally",
        summary: "Costa Rica formalised INTE/ISO/IEC 42001:2026, its adaptation of the international AI management-system standard.",
        level: "single",
        sources: [{ t: "INPLP - Legal update on privacy and AI: Costa Rica", u: "https://inplp.com/latest-news/article/legal-update-on-privacy-and-artificial-intelligence-costa-rica/" }],
      },
    ],
    watch: ["Whether any AI bill is called for debate by the executive."],
  },

  // ------------------------------------------------------------------ JAMAICA
  {
    id: "jm", name: "Jamaica", flag: "🇯🇲", region: "Caribbean", group: "Americas", geo: [-76.79, 18.01], isoN: "388",
    stance: "Task-force-driven: UNESCO readiness assessment done, national AI policy being drafted",
    summary:
      "Jamaica set up a National AI Task Force in 2023, reconstituted it in February 2026 with 23 members, and promised a draft national AI policy by November 2026. It was the top-ranked Caribbean country in Oxford's 2025 index (99th, up from 122nd). UNESCO's readiness assessment found no AI law, no AI procurement rules and no AI regulator yet.",
    glance: { firstStrategy: "2026 (draft due)", latestStrategy: "—", newestBody: "National AI Task Force (reconstituted)", newestBodyDate: "2026-02-19" },
    stats: { population: { v: 2837077, year: 2025 }, gdpPerCapita: { v: 8003, year: 2025 }, internet: { v: 90.1, year: 2024 } },
    oxford: { rank: 99, scores: [50.0, 41.13, 64.5, 34.6, 17.41, 55.94] },
    msAdoption: { h1_2025: 22.2, h2_2025: 22.1, q1_2026: null, q2_2026: null, rankLatest: null },
    facts: [
      {
        topic: "Institutions", date: "2023-08",
        text: "Jamaica set up a National AI Task Force under the Office of the Prime Minister in August 2023 to research and recommend a national AI policy. Its recommendations report was published in 2024.",
        level: "verified",
        sources: [
          { t: "OPM - Jamaica launches landmark UNESCO readiness report", u: "https://opm.gov.jm/jamaica-takes-the-lead-on-ai-government-launches-landmark-unesco-readiness-report/" },
          { t: "JIS - Government to set up AI Task Force", u: "https://jis.gov.jm/government-to-set-up-ai-task-force/" },
          { t: "OPM - National AI Task Force report published", u: "https://opm.gov.jm/national-ai-task-force-report-published/" },
        ],
      },
      {
        topic: "Strategy", date: "2026-02-19",
        text: "Minister Andrew Wheatley convened the reconstituted 23-member Task Force on 19 February 2026, tasking it with drafting a national AI policy and reviewing the legal framework. The draft was promised by November 2026.",
        level: "verified",
        sources: [
          { t: "OPM - Wheatley convenes reconstituted National AI Task Force", u: "https://opm.gov.jm/minister-wheatley-convenes-first-meeting-of-reconstituted-national-ai-task-force-sets-policy-and-legislative-deliverables/" },
          { t: "JIS - AI Task Force to develop draft policy by November", u: "https://jis.gov.jm/ai-task-force-to-develop-draft-policy-by-november/" },
          { t: "Jamaica Gleaner - Ja prepares public debate on AI rules (16 Aug 2026)", u: "https://jamaica-gleaner.com/article/business/20260816/new-ai-platform-launches-ja-prepares-public-debate-ai-rules" },
        ],
      },
      {
        topic: "Benchmark", date: "2026-01",
        text: "In Oxford Insights' 2025 index, Jamaica ranked 99th globally (up from 122nd in 2024), the highest in the Caribbean. Oxford attributes the rise to 'the publication of a new AI strategy'.",
        level: "dataset",
        note: "This sits awkwardly with the government's own account: its national AI policy was still in draft in 2026. Oxford may be referring to the Task Force's published recommendations.",
        sources: [{ t: "Oxford Insights - GAIRI 2025 report (validated Jan 2026)", u: "https://oxfordinsights.com/wp-content/uploads/2026/01/2025-Government-AI-Readiness-Index-Report_01_26.pdf" }],
      },
    ],
    news: [
      {
        date: "2026-08-16", title: "Public consultation on national AI rules due to open",
        summary: "The Task Force chair said a consultation website would launch by 11 September before the framework is finalised. Its launch could not be confirmed.",
        level: "single",
        sources: [{ t: "Jamaica Gleaner (16 Aug 2026)", u: "https://jamaica-gleaner.com/article/business/20260816/new-ai-platform-launches-ja-prepares-public-debate-ai-rules" }],
      },
    ],
    watch: ["Delivery of the draft national AI policy (promised November 2026)."],
  }
);

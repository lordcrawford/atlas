// Atlas dataset, part 5: 6 more African nations (added 13 Oct 2026).
// Same verification rules as the other data files (see METHODOLOGY.md). Every claim here was run through
// the automated source audit before publication; badges reflect sources that were readable and confirmed the claim.
// msAdoption.regional marks Microsoft figures that are a shared regional estimate; regionLabel names the region.

(function () {
  const S = (t, u) => ({ t, u });
  window.ATLAS.nations.push(
    // ------------------------------------------------------------------ LIBYA
    {
      id: "ly", name: "Libya", flag: "🇱🇾", region: "North Africa", group: "Africa", geo: [13.19, 32.89], isoN: "434",
      stance: "A big-target strategy from a divided state: 35 initiatives to 2030, plus an AI ethics charter",
      summary:
        "On 1 June 2026 the Tripoli-based Government of National Unity launched Libya's National AI Strategy 2026–2030 and adopted a National Charter on AI Ethics. The strategy has 35 initiatives across six pillars and targets such as training 10,000 public employees and supporting 100 AI start-ups by 2030. Critics such as the digital rights group SMEX say it was drafted with little real public participation.",
      glance: { firstStrategy: "2026 (National AI Strategy 2026–2030)", latestStrategy: "2026 (National AI Strategy 2026–2030)", newestBody: "National AI Authority (planned)", newestBodyDate: "" },
      stats: { population: { v: 7458555, year: 2025 }, gdpPerCapita: { v: 6449, year: 2025 }, internet: { v: 82.0, year: 2024 } },
      oxford: { rank: 134, scores: [39.0, 43.8, 24.88, 2.09, 18.88, 47.61] },
      msAdoption: { h1_2025: 12.7, h2_2025: 13.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026-06-01",
          text: "On 1 June 2026, at a ceremony in Tripoli, Prime Minister Abdulhamid Dbeibah launched the National AI Strategy 2026–2030 and adopted a National Charter on AI Ethics. The strategy sets out 35 initiatives across six pillars.",
          level: "verified",
          sources: [
            S("SMEX - Libya's new AI strategy celebrates participation, yet was built without it (22 Jul 2026)", "https://smex.org/libyas-new-ai-strategy-celebrates-participation-yet-was-built-without-it/"),
            S("Africa AI News - Libya launches National AI Strategy with 35 initiatives", "https://www.africaainews.com/p/libya-launches-national-ai-strategy"),
            S("News Tunisia - Libya launches its AI strategy (2 Jun 2026)", "https://news-tunisia.tunisienumerique.com/libya-launches-its-ai-strategy-to-develop-digital-infrastructure/"),
            S("iAfrica - Libya adopts AI ethics charter and launches National AI Strategy 2026–2030", "https://iafrica.com/libya-adopts-ai-ethics-charter-and-launches-national-ai-strategy-2026-2030-with-35-initiatives-across-six-pillars/"),
          ],
        },
        {
          topic: "Strategy", date: "2026-06-01",
          text: "Its 2030 targets include training 10,000 public employees in advanced technologies, supporting 100 AI start-ups, automating 50% of government transactions and digitising 70% of paper records.",
          level: "corroborated",
          sources: [
            S("Telecompaper - Libya launches AI strategy to drive transformation", "https://www.telecompaper.com/news/libya-launches-ai-strategy-to-drive-transformation--1573591"),
            S("Ecofin Agency - Libya targets 100 AI startups and 10,000 trained specialists by 2030 (4 Jun 2026)", "https://www.ecofinagency.com/news-digital/0406-56162-libya-targets-100-ai-startups-and-10-000-trained-specialists-by-2030"),
            S("iAfrica - Libya adopts AI ethics charter and launches National AI Strategy 2026–2030", "https://iafrica.com/libya-adopts-ai-ethics-charter-and-launches-national-ai-strategy-2026-2030-with-35-initiatives-across-six-pillars/"),
          ],
        },
        {
          topic: "Governance", date: "2026-07-22",
          text: "The digital rights group SMEX argued that the strategy celebrates participation but was built without it, and that its planned ethics oversight body would not be independent of the Council of Ministers.",
          level: "single",
          sources: [
            S("SMEX - Libya's new AI strategy celebrates participation, yet was built without it (22 Jul 2026)", "https://smex.org/libyas-new-ai-strategy-celebrates-participation-yet-was-built-without-it/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-06-01", title: "Libya launches national AI strategy and ethics charter",
          summary: "The 2026–2030 strategy sets 35 initiatives across six pillars, with early focus on health, finance, education and public services.",
          level: "verified",
          sources: [
            S("SMEX - Libya's new AI strategy celebrates participation, yet was built without it (22 Jul 2026)", "https://smex.org/libyas-new-ai-strategy-celebrates-participation-yet-was-built-without-it/"),
            S("News Tunisia - Libya launches its AI strategy (2 Jun 2026)", "https://news-tunisia.tunisienumerique.com/libya-launches-its-ai-strategy-to-develop-digital-infrastructure/"),
            S("Africa AI News - Libya launches National AI Strategy with 35 initiatives", "https://www.africaainews.com/p/libya-launches-national-ai-strategy"),
            S("iAfrica - Libya adopts AI ethics charter and launches National AI Strategy 2026–2030", "https://iafrica.com/libya-adopts-ai-ethics-charter-and-launches-national-ai-strategy-2026-2030-with-35-initiatives-across-six-pillars/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ CONGO
    {
      id: "cg", name: "Congo", flag: "🇨🇬", region: "Central Africa", group: "Africa", geo: [15.28, -4.27], isoN: "178",
      stance: "Research hub ambitions: hosts a pan-African AI research centre, now drafting a strategy built around local languages",
      summary:
        "The Republic of the Congo (Congo-Brazzaville) hosts the African Research Centre on Artificial Intelligence (CARIA), launched with the UN Economic Commission for Africa. Its telecoms regulator ARPCE held a seminar on data and AI governance in January 2026, and in May 2026 a technical committee began drafting a national AI strategy with UNDP support, with a focus on digitising the Lingala and Kituba languages.",
      glance: { firstStrategy: "In development (2026)", latestStrategy: "National AI strategy in development", newestBody: "CARIA (African Research Centre on AI)", newestBodyDate: "" },
      stats: { population: { v: 6484437, year: 2025 }, gdpPerCapita: { v: 2515, year: 2025 }, internet: { v: 47.3, year: 2024 } },
      oxford: { rank: 178, scores: [12.0, 22.41, 31.49, 3.89, 17.8, 20.39] },
      msAdoption: { h1_2025: 7.0, h2_2025: 7.8, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "Central Africa" },
      facts: [
        {
          topic: "Strategy", date: "2026-05-06",
          text: "The technical committee drafting Congo's national AI strategy held its first meeting on 6 May 2026 in Brazzaville, with UNDP support. A central pillar is digitising the national languages Lingala and Kituba for speech recognition, translation and AI tools.",
          level: "corroborated",
          sources: [
            S("Les Dépêches de Brazzaville via AllAfrica - Congo lance les travaux de sa stratégie nationale (6 May 2026)", "https://fr.allafrica.com/stories/202605070096.html"),
            S("Ecofin Agency - Congo builds AI strategy around its most spoken languages (11 May 2026)", "https://www.ecofinagency.com/news-digital/1105-55470-congo-builds-ai-strategy-around-its-most-spoken-languages"),
          ],
        },
        {
          topic: "Regulation", date: "2026-01-12",
          text: "In January 2026 the telecoms regulator ARPCE held a five-day seminar in Brazzaville on digital regulation, covering data and AI governance.",
          level: "corroborated",
          sources: [
            S("AllAfrica - Congo-Brazzaville: le pays s'engage à encadrer l'utilisation de l'IA (Jan 2026)", "https://fr.allafrica.com/stories/202601130262.html"),
            S("TechAfrica News - Congo hosts strategic seminar on digital regulation and AI governance (9 Jan 2026)", "https://techafricanews.com/2026/01/09/congo-hosts-strategic-seminar-on-digital-regulation-and-ai-governance/"),
          ],
        },
        {
          topic: "Research", date: "2024",
          text: "Congo hosts the African Research Centre on Artificial Intelligence (CARIA), launched with the UN Economic Commission for Africa.",
          level: "single",
          sources: [
            S("We Are Tech Africa - Congo: les ambitions du gouvernement pour le développement de l'IA", "https://www.wearetech.africa/fr/fils/actualites/tech/congo-les-ambitions-du-gouvernement-pour-le-developpement-de-l-ia"),
          ],
        },
      ],
      news: [
        {
          date: "2026-05-06", title: "Congo starts drafting national AI strategy",
          summary: "A UNDP-backed technical committee began work, with Lingala and Kituba language technology at the centre.",
          level: "corroborated",
          sources: [
            S("Les Dépêches de Brazzaville via AllAfrica", "https://fr.allafrica.com/stories/202605070096.html"),
            S("Ecofin Agency", "https://www.ecofinagency.com/news-digital/1105-55470-congo-builds-ai-strategy-around-its-most-spoken-languages"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GABON
    {
      id: "ga", name: "Gabon", flag: "🇬🇦", region: "Central Africa", group: "Africa", geo: [9.45, 0.39], isoN: "266",
      stance: "Sovereignty-minded: a first national data centre and 'small AI' diplomacy, with an AI strategy still being prepared",
      summary:
        "Gabon has no adopted AI strategy. With UNESCO support it ran an AI readiness assessment and set up a National Technical Committee for AI (CTN-IA) to prepare a strategy. In April 2026 Libreville hosted Artificial Intelligence Days on AI and digital sovereignty, and in July 2026 President Brice Oligui Nguema opened the country's first national Tier III data centre. Gabon's digital minister has argued for 'small AI' built for local needs.",
      glance: { firstStrategy: "—", latestStrategy: "National AI strategy in preparation", newestBody: "National Technical Committee for AI (CTN-IA)", newestBodyDate: "" },
      stats: { population: { v: 2593130, year: 2025 }, gdpPerCapita: { v: 8263, year: 2025 }, internet: { v: 68.7, year: 2024 } },
      oxford: { rank: 133, scores: [16.0, 35.19, 51.25, 16.48, 20.37, 27.58] },
      msAdoption: { h1_2025: 12.3, h2_2025: 13.4, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Infrastructure", date: "2026-07-03",
          text: "On 3 July 2026 President Brice Clotaire Oligui Nguema inaugurated Gabon's first national Tier III data centre, in the Nkok special economic zone near Libreville. ST Digital built it for 8 billion CFA francs (about $14 million); about 95% of Gabon's data is currently hosted abroad.",
          level: "verified",
          sources: [
            S("We Are Tech Africa - Gabon launches $14 million Tier III data center (7 Jul 2026)", "https://www.wearetech.africa/en/fils-uk/news/tech/gabon-launches-14-million-tier-iii-data-center-in-digital-sovereignty-push"),
            S("Developing Telecoms - Gabon inaugurates Tier III data centre (7 Jul 2026)", "https://developingtelecoms.com/telecom-technology/data-centres-networks/20496-gabon-inaugurates-tier-iii-data-centre.html"),
            S("W.Media - ST Digital opens Gabon's first sovereign Tier III data center", "https://w.media/st-digital-opens-gabons-first-sovereign-tier-iii-data-center/"),
          ],
          note: "The date, cost and offshore-data figure come from We Are Tech Africa; the other two sources confirm the opening.",
        },
        {
          topic: "International", date: "2026-07-20",
          text: "Digital Economy Minister Mark-Alexandre Doumba argued at the UN's Geneva dialogue on AI governance for 'small AI' applications that solve local needs in agriculture, health and education.",
          level: "single",
          sources: [
            S("Tech Review Africa - Gabon pushes for 'Small AI' solutions (20 Jul 2026)", "https://techreviewafrica.com/news/6364/gabon-pushes-for-small-ai-solutions-as-digital-transformation-agenda-takes-shape"),
          ],
        },
        {
          topic: "Strategy", date: "2026-04-08",
          text: "Libreville hosted Artificial Intelligence Days on 8–10 April 2026, with the UN Economic Commission for Africa, under the theme of AI, digital sovereignty and economic diversification.",
          level: "corroborated",
          sources: [
            S("UNECA - AID 2026 Gabon: Artificial Intelligence Days", "https://www.uneca.org/eca-events/aid-2026-gabon-artificial-intelligence-days-2026"),
            S("UNECA - Concept note, Artificial Intelligence Days 2026 (PDF)", "https://www.uneca.org/eca-events/sites/default/files/resources/concept_note_jia-aid_gabon_2026.pdf"),
          ],
          note: "Both links are UNECA pages, so they count as one source.",
        },
        {
          topic: "Regulation", date: "2024",
          text: "With UNESCO support Gabon ran an AI readiness assessment and set up a National Technical Committee for AI (CTN-IA) to prepare a national AI strategy.",
          level: "single",
          sources: [
            S("UNECA - ECA and Gabon explore economic diversification through AI", "https://www.uneca.org/eca-events/stories/eca-and-gabon-explore-accelerating-economic-diversification-through-ai"),
          ],
        },
      ],
      news: [
        {
          date: "2026-07-03", title: "Gabon opens first national data centre",
          summary: "The Tier III facility near Libreville is meant to bring government, bank and telecom data back onshore.",
          level: "verified",
          sources: [
            S("We Are Tech Africa", "https://www.wearetech.africa/en/fils-uk/news/tech/gabon-launches-14-million-tier-iii-data-center-in-digital-sovereignty-push"),
            S("Developing Telecoms", "https://developingtelecoms.com/telecom-technology/data-centres-networks/20496-gabon-inaugurates-tier-iii-data-centre.html"),
            S("W.Media", "https://w.media/st-digital-opens-gabons-first-sovereign-tier-iii-data-center/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ DJIBOUTI
    {
      id: "dj", name: "Djibouti", flag: "🇩🇯", region: "East Africa", group: "Africa", geo: [43.15, 11.59], isoN: "262",
      stance: "Hub ambitions: a first AI strategy for 2026–2030 drafted with UN help, framed as an accelerator for Vision 2035",
      summary:
        "Djibouti began drafting its first national AI strategy in January 2026 with support from UNESCO and the UN's ESCWA, starting from a UNESCO readiness assessment. At the country's first National AI Forum on 2–3 September 2026, President Ismail Omar Guelleh said Djibouti aims to become East Africa's regional AI hub, and the government presented the outline of a National AI Strategy for 2026–2030.",
      glance: { firstStrategy: "2026–2030 strategy (presented, not yet adopted)", latestStrategy: "National AI Strategy 2026–2030 (draft)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 1184076, year: 2025 }, gdpPerCapita: { v: 3906, year: 2025 }, internet: { v: 65.3, year: 2024 } },
      oxford: { rank: 148, scores: [11.5, 37.67, 12.26, 26.8, 22.81, 23.89] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy", date: "2026-09-03",
          text: "At Djibouti's first National Forum on AI, on 2–3 September 2026, the government presented the broad directions of its first National AI Strategy for 2026–2030, covering governance, cybersecurity, skills, research, innovation and inclusion. President Guelleh said Djibouti aims to become a regional hub for AI in East Africa.",
          level: "verified",
          sources: [
            S("Djibouti Telecom - Djibouti's first National AI Forum (Sep 2026)", "https://international.djiboutitelecom.dj/djibouti-first-national-ai-forum/"),
            S("Dawan Africa - Djibouti aims to become regional AI hub, Guelleh says (2 Sep 2026)", "https://www.dawan.africa/news/djibouti-aims-to-become-regional-ai-hub-guelleh-says"),
            S("Dawan Africa - Djibouti to hold first national forum on AI (27 Aug 2026)", "https://www.dawan.africa/news/djibouti-to-hold-first-national-forum-on-artificial-intelligence"),
          ],
          note: "The outline of the 2026–2030 strategy is reported by Djibouti Telecom, citing the national news agency; the Dawan Africa reports confirm the forum and the President's hub goal.",
        },
        {
          topic: "Strategy", date: "2026-01",
          text: "In January 2026, ESCWA and the digital ministry held a consultative workshop to review the draft national AI strategy ahead of its adoption. The work built on a UNESCO readiness assessment.",
          level: "verified",
          sources: [
            S("Tech Review Africa - ESCWA, Djibouti advance national AI strategy (28 Jan 2026)", "https://techreviewafrica.com/news/3752/escwa-djibouti-advance-national-artificial-intelligence-strategy-through-consultative-workshop"),
            S("TechAfrica News - Djibouti develops national AI strategy with UN support (29 Jan 2026)", "https://techafricanews.com/2026/01/29/djibouti-develops-national-ai-strategy-with-un-support/"),
            S("Ecofin Agency - Djibouti opens consultations on national AI strategy (30 Jan 2026)", "https://www.ecofinagency.com/news-digital/3001-52447-djibouti-opens-consultations-on-national-ai-strategy"),
          ],
          note: "Sources name the ministry differently (Digital Economy and Innovation; National Education, Innovation and Digital Development).",
        },
        {
          topic: "Education", date: "2025-10",
          text: "Djibouti launched an AI training programme for education inspectors as part of its 2025–2026 continuous training plan.",
          level: "single",
          sources: [
            S("Ecofin Agency - Djibouti trains education inspectors to harness AI (15 Oct 2025)", "https://www.ecofinagency.com/news-services/1510-49578-djibouti-trains-education-inspectors-to-harness-artificial-intelligence"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-03", title: "First National AI Forum sets out 2026–2030 strategy",
          summary: "President Guelleh called AI the strongest accelerator for Vision 2035 and set a goal of becoming a regional AI hub.",
          level: "verified",
          sources: [
            S("Djibouti Telecom - Djibouti's first National AI Forum (Sep 2026)", "https://international.djiboutitelecom.dj/djibouti-first-national-ai-forum/"),
            S("Dawan Africa - Djibouti aims to become regional AI hub, Guelleh says (2 Sep 2026)", "https://www.dawan.africa/news/djibouti-aims-to-become-regional-ai-hub-guelleh-says"),
            S("Dawan Africa - Djibouti to hold first national forum on AI (27 Aug 2026)", "https://www.dawan.africa/news/djibouti-to-hold-first-national-forum-on-artificial-intelligence"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ ESWATINI
    {
      id: "sz", name: "Eswatini", flag: "🇸🇿", region: "Southern Africa", group: "Africa", geo: [31.13, -26.31], isoN: "748",
      stance: "Early stage: a national AI strategy in drafting, with AI starting to appear in public-sector plans",
      summary:
        "Eswatini has no AI law or published AI strategy. It held its first AI Indaba in late 2024 with the UN, and the government has announced work on a national AI strategy alongside a Fourth Industrial Revolution strategy. The Auditor-General's strategic plan for 2026–2030 brings AI and digital tools into public-sector auditing.",
      glance: { firstStrategy: "In development", latestStrategy: "National AI Strategy in development", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 1256174, year: 2025 }, gdpPerCapita: { v: 4108, year: 2025 }, internet: { v: 63.4, year: 2024 } },
      oxford: { rank: 137, scores: [16.0, 35.45, 42.99, 34.88, 10.61, 29.06] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-08-17",
          text: "The Auditor-General's Strategic Plan for 2026–2030 urges more than 80 audit officers to adopt AI and digital tools in public-sector auditing.",
          level: "single",
          sources: [
            S("ITWeb Africa - Eswatini audit office integrates AI in new strategy (17 Aug 2026)", "https://itweb.africa/article/eswatini-audit-office-integrates-ai-in-new-strategy/mYZRX79gVwYqOgA8"),
          ],
        },
        {
          topic: "Strategy", date: "2026-07-31",
          text: "Eswatini is developing a National AI Strategy aligned with the African Union's vision, alongside a combined Fourth and Fifth Industrial Revolution Strategy.",
          level: "corroborated",
          sources: [
            S("UN Eswatini - Governing AI: ensuring innovation serves humanity (31 Jul 2026)", "https://eswatini.un.org/en/323031-governing-ai-ensuring-innovation-serves-humanity"),
            S("Digital Watch - Eswatini", "https://dig.watch/countries/eswatini"),
          ],
        },
        {
          topic: "Ecosystem", date: "2024-11",
          text: "Eswatini held its first AI Indaba in November 2024, led by the ICT ministry and the Eswatini Academy of Sciences, focused on AI for youth employment, health and agriculture.",
          level: "corroborated",
          sources: [
            S("UN Eswatini - Ministry of ICT explores AI for sustainable development (25 Nov 2024)", "https://eswatini.un.org/en/284410-un-eswatini-joins-ministry-ict-explore-artificial-intelligence-sustainable-development"),
            S("Digital Watch - Eswatini", "https://dig.watch/countries/eswatini"),
          ],
        },
      ],
      news: [
        {
          date: "2026-08-17", title: "Audit office builds AI into 2026–2030 plan",
          summary: "The Auditor-General's office wants its staff to use AI and digital tools to keep pace with changing public finances.",
          level: "single",
          sources: [
            S("ITWeb Africa", "https://itweb.africa/article/eswatini-audit-office-integrates-ai-in-new-strategy/mYZRX79gVwYqOgA8"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ LESOTHO
    {
      id: "ls", name: "Lesotho", flag: "🇱🇸", region: "Southern Africa", group: "Africa", geo: [27.48, -29.31], isoN: "426",
      stance: "Policy first: an AI policy adopted in 2026, now turned into a strategy and compute plan with UN support",
      summary:
        "Lesotho published its Artificial Intelligence Policy and Implementation Plan on 17 August 2026. The same week the ICT ministry and the UN began a five-day workshop to build a National AI Strategy and a Data Centre Blueprint to put it into practice. In September 2026 Lesotho was reported as the first country to apply the UN's Blueprint for National AI and Data Strategies.",
      glance: { firstStrategy: "2026 (AI Policy and Implementation Plan)", latestStrategy: "2026 (AI Policy); National AI Strategy in development", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 2363325, year: 2025 }, gdpPerCapita: { v: 1089, year: 2025 }, internet: { v: 51.8, year: 2024 } },
      oxford: { rank: 131, scores: [34.5, 28.79, 38.79, 36.83, 17.59, 25.63] },
      msAdoption: { h1_2025: 8.8, h2_2025: 9.1, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "International", date: "2026-09-24",
          text: "Lesotho became the first country to implement the UN's Blueprint for National AI and Data Strategies, a framework to help governments move from writing AI strategies to carrying them out.",
          level: "verified",
          sources: [
            S("Ecofin Agency - Lesotho becomes first country to implement UN AI blueprint (24 Sep 2026)", "https://www.ecofinagency.com/news-digital/2409-59208-lesotho-becomes-first-country-to-implement-un-ai-blueprint"),
            S("Rio Times - Lesotho AI blueprint: first country to apply UN plan (24 Sep 2026)", "https://www.riotimesonline.com/lesotho-ai-blueprint-un-digital-cooperation-day-2026/"),
            S("Africa AI News - Lesotho adopts UN AI blueprint", "https://www.africaainews.com/p/lesotho-adopts-un-ai-blueprint-south"),
          ],
        },
        {
          topic: "Strategy", date: "2026-08-17",
          text: "Lesotho published its Artificial Intelligence Policy and Implementation Plan on 17 August 2026. Led by the ICT ministry, it covers governance, legislation, AI capacity, infrastructure, productivity, inclusion and ethics, and international alignment.",
          level: "corroborated",
          sources: [
            S("CADE - Lesotho moves from AI policy to national strategy", "https://cadeproject.org/updates/lesotho-moves-from-ai-policy-to-national-strategy-and-digital-infrastructure-planning/"),
            S("OECD.AI - Lesotho AI Policy and Implementation Plan", "https://oecd.ai/en/dashboards/policy-initiatives/artificial-intelligence-policy-and-implementation-plan"),
          ],
          note: "OECD.AI still listed the policy as proposed or under development when checked.",
        },
        {
          topic: "Strategy", date: "2026-08-21",
          text: "From 17 to 21 August 2026 the ICT ministry and the UN held a workshop in Maseru to develop a National AI Strategy and a Data Centre Blueprint that turn the policy into a roadmap.",
          level: "verified",
          sources: [
            S("CADE - Lesotho moves from AI policy to national strategy", "https://cadeproject.org/updates/lesotho-moves-from-ai-policy-to-national-strategy-and-digital-infrastructure-planning/"),
            S("ITWeb Africa - Lesotho accelerates AI roadmap (Aug 2026)", "https://itweb.africa/article/lesotho-accelerate-ai-roadmap/6GxRKqYQ1gkqb3Wj"),
            S("TechAfrica News - Lesotho begins work on national AI strategy and data centre blueprint (18 Aug 2026)", "https://techafricanews.com/2026/08/18/lesotho-begins-work-on-national-ai-strategy-and-data-centre-blueprint/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-24", title: "Lesotho first to apply UN AI blueprint",
          summary: "The blueprint helps governments move from AI strategy to implementation, with a focus on compute, data and skills.",
          level: "verified",
          sources: [
            S("Ecofin Agency", "https://www.ecofinagency.com/news-digital/2409-59208-lesotho-becomes-first-country-to-implement-un-ai-blueprint"),
            S("Rio Times", "https://www.riotimesonline.com/lesotho-ai-blueprint-un-digital-cooperation-day-2026/"),
            S("Africa AI News", "https://www.africaainews.com/p/lesotho-adopts-un-ai-blueprint-south"),
          ],
        },
      ],
    },

  );
})();

// Atlas dataset, part 3: 20 more small nations (added 10 Oct 2026).
// Same verification rules as the other data files (see METHODOLOGY.md). Every claim here was run through
// the automated source audit before publication; badges reflect sources that were readable and confirmed the claim.
// msRegional: true marks Microsoft figures that are a shared regional estimate, not a national measurement.

(function () {
  const S = (t, u) => ({ t, u });
  window.ATLAS.nations.push(
    // ------------------------------------------------------------------ SWEDEN
    {
      id: "se", name: "Sweden", flag: "🇸🇪", region: "Northern Europe (EU)", group: "Europe", geo: [18.07, 59.33], isoN: "752",
      stance: "Commission-led catch-up: a 2026 strategy aiming for the global top ten, with PTS proposed to lead AI Act supervision",
      summary:
        "Sweden had a short AI 'national approach' from 2018 but was widely seen as falling behind. A government AI Commission delivered a roadmap of 75 proposals, and in February 2026 the government published a national AI strategy that aims to put Sweden among the world's top ten AI nations. In October 2025 a government inquiry proposed AI Act legislation with the telecoms regulator PTS as the main market-surveillance authority.",
      glance: { firstStrategy: "2018", latestStrategy: "2026 (National AI Strategy)", newestBody: "PTS proposed as main AI Act authority", newestBodyDate: "2025-10-06" },
      stats: { population: { v: 10596620, year: 2025 }, gdpPerCapita: { v: 63133, year: 2025 }, internet: { v: 95.8, year: 2025 } },
      oxford: { rank: 23, scores: [89.04, 67.49, 81.52, 73.81, 57.03, 61.17] },
      msAdoption: { h1_2025: 31.2, h2_2025: 33.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2018-05",
          text: "Sweden's first AI policy, the 'National approach to artificial intelligence', was published in May 2018. It covers education, research, innovation and use, and frameworks and infrastructure.",
          level: "corroborated",
          sources: [
            S("Government of Sweden - National approach to AI (2018, PDF via OECD.AI)", "https://wp.oecd.ai/app/uploads/2021/12/Sweden_National_Approach_to_Artificial_Intelligence_2018.pdf"),
            S("EC AI Watch - Sweden AI strategy report", "https://ai-watch.ec.europa.eu/countries/sweden/sweden-ai-strategy-report_en"),
          ],
        },
        {
          topic: "Strategy", date: "2026-02-25",
          text: "Sweden published a national AI strategy and action plan in February 2026, aiming to be among the world's top ten nations in AI.",
          level: "single",
          sources: [
            S("Government.se - Sweden's AI Strategy (Feb 2026)", "https://www.government.se/information-material/2026/02/swedens-ai-strategy/"),
          ],
        },
        {
          topic: "Strategy", date: "2024-11",
          text: "The government's AI Commission delivered a roadmap of 75 proposals. They include an extra €1.5 billion or so for AI over five years and a task force under the Prime Minister's Office to speed implementation.",
          level: "single",
          sources: [
            S("Computer Weekly - Swedish commission delivers roadmap to drive AI reforms", "https://www.computerweekly.com/news/366618880/Swedish-commission-delivers-roadmap-to-drive-Artificial-Intelligence-reforms"),
            S("Government.se - Sweden leading the way in artificial intelligence (Sep 2025)", "https://www.government.se/articles/2025/09/sweden-leading-the-way-in-artificial-intelligence/"),
          ],
          note: "The report was delivered in November 2024 and published as SOU 2025:12.",
        },
        {
          topic: "Regulation", date: "2025-10-06",
          text: "On 6 October 2025 a government inquiry report (SOU 2025:101) proposed Swedish legislation to complement the AI Act. It would make the Post and Telecom Authority (PTS) the main market-surveillance authority, with 11 market-surveillance and 2 notifying authorities in total.",
          level: "single",
          sources: [
            S("Bird & Bird - AI Regulatory Horizon Tracker: Sweden", "https://www.twobirds.com/en/capabilities/artificial-intelligence/ai-legal-services/ai-regulatory-horizon-tracker/sweden"),
            S("Snellman - Sweden proposes national AI legislation to supplement the EU AI Act", "https://digitalcompliance.snellman.com/sweden-proposes-national-ai-legislation-to-supplement-the-eu-ai-act/"),
          ],
          note: "This is an interim arrangement pending national legislation.",
        },
      ],
      news: [
        {
          date: "2026-02-25", title: "Sweden publishes national AI strategy",
          summary: "The strategy and action plan set a goal of a top-ten global position in AI. Most measures were already adopted in 2025 in response to the AI Commission.",
          level: "single",
          sources: [
            S("Government.se", "https://www.government.se/information-material/2026/02/swedens-ai-strategy/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ AUSTRIA
    {
      id: "at", name: "Austria", flag: "🇦🇹", region: "Central Europe (EU)", group: "Europe", geo: [16.37, 48.21], isoN: "040",
      stance: "Strategy since 2021 and an early AI Service Desk at the regulator RTR",
      summary:
        "Austria's AI strategy, 'AIM AT 2030', dates from 2021, with a 2024 implementation plan across twelve ministries. It set up an AI Service Desk at the regulator RTR as an information hub and planned to turn it into a full AI authority.",
      glance: { firstStrategy: "2021", latestStrategy: "2021 (AIM AT 2030)", newestBody: "RTR AI Service Desk", newestBodyDate: "2024" },
      stats: { population: { v: 9208163, year: 2025 }, gdpPerCapita: { v: 62930, year: 2025 }, internet: { v: 91.9, year: 2025 } },
      oxford: { rank: 20, scores: [66.0, 61.39, 87.0, 81.6, 58.06, 79.69] },
      msAdoption: { h1_2025: 29.1, h2_2025: 31.4, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2021",
          text: "Austria's national AI strategy, 'Artificial Intelligence Mission Austria 2030' (AIM AT 2030), was published in 2021. It sets three goals: human-centred AI for the common good, Austria as a research location, and competitiveness.",
          level: "corroborated",
          sources: [
            S("Digital Watch - Austria's AI Mission 2030", "https://dig.watch/resource/austrias-artificial-intelligence-mission-2030-aim-at-2030"),
            S("EU Digital Skills & Jobs - Austria AIM AT 2030", "https://digital-skills-jobs.europa.eu/en/initiatives/national-strategies/austria-artificial-intelligence-mission-2030-aim-2030"),
          ],
        },
        {
          topic: "Institutions", date: "2024",
          text: "An AI Service Desk at the regulator RTR acts as a public contact point and information hub supporting implementation of the EU AI Act. It is advised by an AI Advisory Board.",
          level: "single",
          sources: [
            S("RTR - AI Service Desk", "https://www.rtr.at/rtr/service/ki-servicestelle/KI-Servicestelle.en.html"),
          ],
          note: "The government's plan is to upgrade it into a full AI authority. Some third-party sites already describe RTR as the enforcement authority, which official sources do not confirm.",
        },
      ],
      news: [
        {
          date: "2026", title: "AI Act authority designation still pending",
          summary: "Austria relies on RTR's Service Desk for guidance while the formal market-surveillance setup is worked out.",
          level: "single",
          sources: [ S("VLO Law Firm - AI Regulation in Austria 2026", "https://vlolawfirm.com/trackers/ai-regulation-austria")],
        },
      ],
    },

    // ------------------------------------------------------------------ PORTUGAL
    {
      id: "pt", name: "Portugal", flag: "🇵🇹", region: "Southern Europe (EU)", group: "Europe", geo: [-9.14, 38.72], isoN: "620",
      stance: "Language sovereignty: a fully open national LLM for European Portuguese",
      summary:
        "Portugal's flagship AI project is Amália, an open large language model for European Portuguese. It was announced by the Prime Minister in November 2024 and released openly in July 2026. The government chose ANACOM, the communications regulator, as its EU AI Act market-surveillance authority.",
      glance: { firstStrategy: "2019", latestStrategy: "2019 (AI Portugal 2030)", newestBody: "ANACOM (AI Act authority)", newestBodyDate: "2025-09" },
      stats: { population: { v: 10804871, year: 2025 }, gdpPerCapita: { v: 32082, year: 2025 }, internet: { v: 88.5, year: 2024 } },
      oxford: { rank: 28, scores: [57.5, 55.38, 93.55, 81.87, 52.86, 69.68] },
      msAdoption: { h1_2025: 22.4, h2_2025: 24.2, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2019",
          text: "Portugal's national AI strategy, 'AI Portugal 2030', was published in 2019 as part of the INCoDe.2030 digital-skills initiative.",
          level: "corroborated",
          sources: [
            S("AI Portugal 2030 (PDF via OECD.AI)", "https://wp.oecd.ai/app/uploads/2021/12/Portugal_AI_Portugal_2030_2019-2030.pdf"),
            S("EU Digital Skills & Jobs - AI Portugal 2030", "https://digital-skills-jobs.europa.eu/en/initiatives/national-strategies/portugal-national-artificial-intelligence-strategy-ai-portugal-2030"),
            S("Portugal Digital - Estratégia Nacional de Inteligência Artificial", "https://digital.gov.pt/en/estrategia-digital/plano-de-acao-para-a-transicao-digital/estrategias-para-a-transicao-digital/estrategia-nacional-de-inteligencia-artificial"),
          ],
          note: "Sources give February, April or June 2019 for the launch.",
        },
        {
          topic: "Models", date: "2026-07-01",
          text: "Portugal released Amália, an open large language model for European Portuguese, in July 2026. The model, training data and code are all open, and it builds on the European EuroLLM-9B model.",
          level: "verified",
          sources: [
            S("The Next Web - Portugal open-sources Amália", "https://thenextweb.com/news/portugal-open-source-ai-model-amalia"),
            S("Cybernews - Portugal launches its own open-source AI model", "https://cybernews.com/ai-news/portugal-ai-model/"),
            S("EU Interoperable Europe - Portugal launches open source AI", "https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/portugal-launches-open-source-ai-drive-digital-sovereignty"),
          ],
          note: "Reported funding varies (about €5.5M vs €7M by 2027).",
        },
        {
          topic: "Models", date: "2024-11",
          text: "Prime Minister Luís Montenegro first announced the national LLM at Web Summit in November 2024.",
          level: "single",
          sources: [
            S("Instituto de Telecomunicações - AMALIA: the first Portuguese-language LLM", "https://www.it.pt/News/NewsPost/5065"),
          ],
        },
        {
          topic: "Regulation", date: "2025-09",
          text: "The government chose ANACOM, the communications regulator, as Portugal's EU AI Act market-surveillance authority and single point of contact.",
          level: "corroborated",
          sources: [
            S("Andersen - AI Act: ANACOM assumes supervision in Portugal", "https://pt.andersen.com/ai-act-anacom-assume-supervisao-em-portugal/"),
            S("CMS - AI regulation in Portugal", "https://cms.law/en/int/expert-guides/ai-regulation-scanner/portugal"),
          ],
          note: "Some sources say the designation decree still awaited final adoption in 2026.",
        },
      ],
      news: [
        {
          date: "2026-07-01", title: "Amália, an open LLM for European Portuguese, released",
          summary: "It is released as a platform for others to build on, not a consumer chatbot.",
          level: "verified",
          sources: [
            S("The Next Web", "https://thenextweb.com/news/portugal-open-source-ai-model-amalia"),
            S("Cybernews", "https://cybernews.com/ai-news/portugal-ai-model/"),
            S("ActuIA - Portugal delivered its own for €7 million", "https://www.actuia.com/en/news/while-france-debates-ai-sovereignty-portugal-delivered-its-own-for-eur7-million/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GREECE
    {
      id: "gr", name: "Greece", flag: "🇬🇷", region: "Southern Europe (EU)", group: "Europe", geo: [23.73, 37.98], isoN: "300",
      stance: "Partnership-driven: OpenAI in schools, an EU AI Factory, and a new national supercomputer",
      summary:
        "Greece signed one of the first national education deals with OpenAI in 2025, bringing ChatGPT Edu into secondary schools. It hosts 'Pharos', one of the EU's first seven AI Factories, built around the new Daedalus national supercomputer.",
      glance: { firstStrategy: "2024", latestStrategy: "2024 (AI Blueprint)", newestBody: "Pharos AI Factory", newestBodyDate: "2024-12" },
      stats: { population: { v: 10413962, year: 2025 }, gdpPerCapita: { v: 26948, year: 2025 }, internet: { v: 86.3, year: 2024 } },
      oxford: { rank: 42, scores: [76.5, 52.39, 75.53, 78.76, 41.5, 62.47] },
      msAdoption: { h1_2025: 17.7, h2_2025: 19.1, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2024-11",
          text: "In November 2024 a high-level advisory committee chaired by MIT professor Constantinos Daskalakis published the 'Blueprint for Greece's AI Transformation', which sets eight principles and six flagship programmes.",
          level: "corroborated",
          sources: [
            S("Special Secretariat of Foresight - Blueprint for Greece's AI Transformation (PDF)", "https://foresight.gov.gr/wp-content/uploads/2024/11/Blueprint_GREECES_AI_TRANSFORMATION.pdf"),
            S("US Trade.gov - Greece National AI Strategy", "https://www.trade.gov/market-intelligence/greece-national-ai-strategy"),
            S("OECD - EU Coordinated Plan on AI progress: Greece", "https://www.oecd.org/en/publications/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-1_6d530a88-en/greece_e5215c30-en.html"),
          ],
        },
        {
          topic: "Education", date: "2025-09-05",
          text: "On 5 September 2025 OpenAI and the Greek government launched 'OpenAI for Greece', bringing ChatGPT Edu into secondary schools and supporting start-ups, with the Onassis Foundation and Endeavor Greece.",
          level: "verified",
          sources: [
            S("OpenAI - OpenAI and Greek Government launch 'OpenAI for Greece'", "https://openai.com/global-affairs/openai-for-greece/"),
            S("Tech.eu - OpenAI to roll out ChatGPT Edu in Greek schools", "https://tech.eu/2025/09/08/openai-to-roll-out-chatgpt-edu-in-greek-schools-and-support-startups/"),
            S("Global Government Forum - Greek government strikes deal with OpenAI", "https://www.globalgovernmentforum.com/greek-government-strikes-deal-with-open-ai-to-use-tools-for-education-and-start-ups/"),
          ],
        },
        {
          topic: "Compute", date: "2024-12",
          text: "Pharos, the Greek AI Factory, was selected in December 2024 as one of the EU's first seven AI Factories. It has a €30 million budget split equally between EuroHPC and Greece.",
          level: "corroborated",
          sources: [
            S("FORTH-ICS - Pharos, the Greek AI Factory", "https://www.ics.forth.gr/new/15925"),
            S("EuroHPC JU - AI Factory Greece", "https://www.eurohpc-ju.europa.eu/ai-factories/greece_en"),
            S("Greek News Agenda - Pharos AI Factory and a Greek LLM", "https://www.greeknewsagenda.gr/faros-ai-factory-greek-llm/"),
          ],
        },
      ],
      news: [
        {
          date: "2025-09-05", title: "OpenAI for Greece: ChatGPT Edu in secondary schools",
          summary: "The 'AI in Schools' rollout began with teacher training in 20 high schools. In April 2026 opposition MPs questioned the data-protection assessment.",
          level: "corroborated",
          sources: [
            S("OpenAI", "https://openai.com/global-affairs/openai-for-greece/"),
            S("To Vima - The introduction of ChatGPT Edu in Greek schools", "https://www.tovima.com/society/the-introduction-of-chatgpt-edu-in-greek-schools/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ LATVIA
    {
      id: "lv", name: "Latvia", flag: "🇱🇻", region: "Northern Europe (EU)", group: "Europe", geo: [24.11, 56.95], isoN: "428",
      stance: "Built a National AI Centre by law; AI Act coordination led by the digital ministry",
      summary:
        "Latvia passed a law in 2025 creating a National AI Centre that links government, industry and universities and can run a testing sandbox. The Ministry of Smart Administration and Regional Development (VARAM) leads its EU AI Act implementation.",
      glance: { firstStrategy: "2020", latestStrategy: "2020 (update in drafting)", newestBody: "National AI Centre", newestBodyDate: "2025-03" },
      stats: { population: { v: 1847785, year: 2025 }, gdpPerCapita: { v: 26312, year: 2025 }, internet: { v: 92.7, year: 2024 } },
      oxford: { rank: 51, scores: [72.5, 53.07, 82.35, 81.44, 37.18, 47.58] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy", date: "2020-02-04",
          text: "On 4 February 2020 Latvia adopted the report 'On the Development of Artificial Intelligence Solutions', its first government AI policy document, prepared by VARAM.",
          level: "corroborated",
          sources: [
            S("VARAM - Minister Pūce: AI solutions should boost economic productivity", "https://www.varam.gov.lv/en/article/minister-puce-artificial-intelligence-solutions-should-be-used-boost-economic-productivity"),
            S("EC AI Watch - Latvia AI strategy report", "https://ai-watch.ec.europa.eu/countries/latvia-0/latvia-ai-strategy-report_en"),
          ],
        },
        {
          topic: "Institutions", date: "2025-03",
          text: "Latvia's Artificial Intelligence Centre Law (2025) set up a National AI Centre to connect government, industry and universities, with the option of running an AI sandbox.",
          level: "single",
          sources: [
            S("BDO / AI & Partners - AI Ecosystem Brief: Latvia 2025 (PDF)", "https://www.bdo.lv/getmedia/c0cbedae-bc27-42ea-bbe4-2c11d5d5a85e/Report-AI-Ecosystem-Brief-Latvia-2025-10-16.pdf"),
          ],
          note: "Sources give the law's adoption date as either January or March 2025.",
        },
        {
          topic: "Regulation", date: "2025-02",
          text: "VARAM, the Ministry of Smart Administration and Regional Development, leads coordination of Latvia's EU AI Act implementation.",
          level: "single",
          sources: [
            S("VARAM - Government examines implementation plan for the AI Act", "https://www.varam.gov.lv/en/article/latvia-takes-step-towards-safe-and-responsible-artificial-intelligence-government-examines-implementation-plan-ai-act"),
          ],
        },
      ],
      news: [
        {
          date: "2025-03", title: "National AI Centre created by law",
          summary: "Latvia chose a dedicated national centre to coordinate AI between the state, business and academia.",
          level: "single",
          sources: [
            S("BDO / AI & Partners", "https://www.bdo.lv/getmedia/c0cbedae-bc27-42ea-bbe4-2c11d5d5a85e/Report-AI-Ecosystem-Brief-Latvia-2025-10-16.pdf"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ ALBANIA
    {
      id: "al", name: "Albania", flag: "🇦🇱", region: "Southeast Europe", group: "Europe", geo: [19.82, 41.33], isoN: "008",
      stance: "Headline experiment: an AI 'minister' for public procurement",
      summary:
        "In September 2025 Prime Minister Edi Rama presented Diella, an AI system shown as an avatar, as a member of his new cabinet responsible for public procurement, a sector long flagged for corruption. Diella had already worked as a virtual assistant on the e-Albania services portal.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "Diella (AI procurement 'minister')", newestBodyDate: "2025-09-11" },
      stats: { population: { v: 2349580, year: 2025 }, gdpPerCapita: { v: 12998, year: 2025 }, internet: { v: 85.9, year: 2024 } },
      oxford: { rank: 85, scores: [23.0, 51.21, 51.67, 68.95, 24.35, 41.6] },
      msAdoption: { h1_2025: 15.8, h2_2025: 16.5, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Public sector", date: "2025-09-11",
          text: "On 11 September 2025 Prime Minister Edi Rama presented Diella, an AI system, as a member of his new cabinet responsible for public procurement. He said tender decisions would move to it step by step to make them 'incorruptible'.",
          level: "verified",
          sources: [
            S("Gulf News - Albania appoints world's first AI-generated minister", "https://gulfnews.com/world/europe/albania-appoints-worlds-first-ai-generated-minister-to-combat-corruption-1.500266826"),
            S("bne IntelliNews - Albania names world's first AI-generated minister", "https://www.intellinews.com/albania-names-world-s-first-ai-generated-minister-as-rama-unveils-fourth-term-cabinet-400806/"),
            S("Gazeta Tema - Albania names virtual AI procurement minister", "https://english.gazetatema.net/politics/albania-names-virtual-ai-procurement-minister-i341814"),
            S("Espreso Global - Albania appoints world's first AI minister", "https://global.espreso.tv/russia-ukraine-war-albania-appoints-worlds-first-ai-minister"),
          ],
          note: "Sources describe her formal status differently ('minister', 'cabinet member'). How far tender decisions have actually moved to the system was not reported.",
        },
        {
          topic: "Public services", date: "2025-01",
          text: "Before the appointment, Diella worked from January 2025 as a virtual assistant on the e-Albania government services platform.",
          level: "corroborated",
          sources: [
            S("Gulf News", "https://gulfnews.com/world/europe/albania-appoints-worlds-first-ai-generated-minister-to-combat-corruption-1.500266826"),
            S("bne IntelliNews", "https://www.intellinews.com/albania-names-world-s-first-ai-generated-minister-as-rama-unveils-fourth-term-cabinet-400806/"),
          ],
        },
      ],
      news: [
        {
          date: "2025-09-11", title: "Albania names an AI system as cabinet member for procurement",
          summary: "The move was presented as an anti-corruption measure, an area the EU has repeatedly flagged in Albania's accession reviews.",
          level: "verified",
          sources: [
            S("Gulf News", "https://gulfnews.com/world/europe/albania-appoints-worlds-first-ai-generated-minister-to-combat-corruption-1.500266826"),
            S("bne IntelliNews", "https://www.intellinews.com/albania-names-world-s-first-ai-generated-minister-as-rama-unveils-fourth-term-cabinet-400806/"),
            S("Espreso Global", "https://global.espreso.tv/russia-ukraine-war-albania-appoints-worlds-first-ai-minister"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GEORGIA
    {
      id: "ge", name: "Georgia", flag: "🇬🇪", region: "South Caucasus", group: "Europe", geo: [44.79, 41.72], isoN: "268",
      stance: "Early stage: readiness assessment with the EU and UNESCO, strategy in development",
      summary:
        "Georgia has no adopted national AI strategy yet. In 2025 an EU- and UNESCO-backed readiness assessment began to identify institutional and regulatory gaps, and in 2026 the country was reported to be developing a strategy.",
      glance: { firstStrategy: "—", latestStrategy: "In development (2026)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 3935766, year: 2025 }, gdpPerCapita: { v: 9692, year: 2025 }, internet: { v: 83.8, year: 2024 } },
      oxford: { rank: 87, scores: [19.0, 49.35, 74.17, 47.44, 27.24, 34.63] },
      msAdoption: { h1_2025: 17.3, h2_2025: 18.2, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Readiness", date: "2025-09-26",
          text: "An AI readiness assessment based on UNESCO's methodology, backed by the EU and run with PMCG, began in Georgia in September 2025 to identify institutional and regulatory gaps.",
          level: "single",
          sources: [
            S("PMCG - Advancing ethical AI readiness in Georgia", "https://pmcg-i.com/advancing-ethical-ai-readiness-in-georgia/"),
            S("PMCG - Assessment of AI readiness in Georgia", "https://pmcg-i.com/launching-the-readiness-assessment-methodology-in-georgia-for-the-unesco-recommendation-on-the-ethics-of-artificial-intelligence/"),
          ],
          note: "Both links are from the implementing organisation (one source).",
        },
        {
          topic: "Strategy", date: "2026-10",
          text: "Georgia was reported in October 2026 to be developing a national AI strategy and seeking closer EU research ties.",
          level: "single",
          sources: [S("Georgia Today - EU-Georgia collaboration is a win-win for AI research", "https://georgiatoday.ge/eu-georgia-collaboration-is-a-win-win-for-ai-research-and-innovation/")],
        },
      ],
      news: [
        {
          date: "2026-10", title: "Georgia developing a national AI strategy",
          summary: "A report on EU–Georgia research ties said Georgia is developing a national AI strategy while seeking closer European links.",
          level: "single",
          sources: [S("Georgia Today", "https://georgiatoday.ge/eu-georgia-collaboration-is-a-win-win-for-ai-research-and-innovation/")],
        },
      ],
    },

    // ------------------------------------------------------------------ ARMENIA
    {
      id: "am", name: "Armenia", flag: "🇦🇲", region: "South Caucasus", group: "Europe", geo: [44.51, 40.18], isoN: "051",
      stance: "Compute-first bet: the region's largest NVIDIA AI factory, backed by the government",
      summary:
        "Armenia's AI story centres on Firebird, a Yerevan- and San Francisco-based company building an NVIDIA-powered AI factory with government backing. It was announced as a $500 million project in June 2025, secured a US export licence for tens of thousands of GPUs in 2026, and opened in Hrazdan in August 2026. Gen-AI use, at around 6.6%, remains among the lowest in this set.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "Firebird AI factory (Hrazdan)", newestBodyDate: "2026-08-08" },
      stats: { population: { v: 3086700, year: 2025 }, gdpPerCapita: { v: 9474, year: 2025 }, internet: { v: 81.3, year: 2024 } },
      oxford: { rank: 103, scores: [27.0, 41.02, 56.75, 57.4, 24.37, 27.75] },
      msAdoption: { h1_2025: 6.2, h2_2025: 6.6, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Compute", date: "2025-06",
          text: "In June 2025 Firebird announced a $500 million AI factory project in Armenia with the Armenian government and NVIDIA, for launch in 2026.",
          level: "corroborated",
          sources: [
            S("EU4Digital - Landmark $500 million AI project to launch in Armenia", "https://eufordigital.eu/landmark-500-million-ai-project-to-launch-in-armenia/"),
            S("DCD - Firebird.ai launches 300MW Nvidia-powered AI data center in Armenia", "https://www.datacenterdynamics.com/en/news/firebirdai-launches-300mw-nvidia-powered-ai-data-center-in-armenia/"),
            S("ArkaTelecom - Firebird preparing to build $4 billion AI factory", "https://arkatelecom.am/en/news/telecom/firebird-is-preparing-to-begin-construction-of-4-billion-ai-factory-in-armenia/"),
          ],
        },
        {
          topic: "Compute", date: "2026-08-08",
          text: "Firebird opened the AI factory in Hrazdan on 8 August 2026, with remarks from Prime Minister Nikol Pashinyan and NVIDIA's Jensen Huang. It plans to scale beyond 70,000 GPUs and 300 MW by the end of 2027.",
          level: "verified",
          sources: [
            S("Morningstar / PR Newswire - Firebird opens the region's largest AI factory", "https://www.morningstar.com/news/pr-newswire/20260808ln22240/firebird-opens-the-regions-largest-ai-factory-and-announces-global-expansion"),
            S("The AI Insider - Firebird opens Armenia AI factory, plans 70,000-plus GPUs", "https://theaiinsider.tech/2026/08/09/firebird-opens-armenia-ai-factory-plans-70000-plus-nvidia-gpus-by-2027/"),
            S("TechEdgeAI - Firebird launches NVIDIA AI factory in Armenia", "https://techedgeai.com/firebird-launches-nvidia-ai-factory-in-armenia-as-compute-race-accelerates/"),
          ],
          note: "The 70,000-GPU and 300 MW figures are targets, not current capacity.",
        },
      ],
      news: [
        {
          date: "2026-08-08", title: "Firebird's NVIDIA AI factory opens in Hrazdan",
          summary: "Perplexity was named as an early customer. A second phase is valued at about $4 billion.",
          level: "verified",
          sources: [
            S("Morningstar / PR Newswire", "https://www.morningstar.com/news/pr-newswire/20260808ln22240/firebird-opens-the-regions-largest-ai-factory-and-announces-global-expansion"),
            S("The AI Insider", "https://theaiinsider.tech/2026/08/09/firebird-opens-armenia-ai-factory-plans-70000-plus-nvidia-gpus-by-2027/"),
            S("TechEdgeAI", "https://techedgeai.com/firebird-launches-nvidia-ai-factory-in-armenia-as-compute-race-accelerates/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ KUWAIT
    {
      id: "kw", name: "Kuwait", flag: "🇰🇼", region: "Middle East / Gulf", group: "Middle East", geo: [47.98, 29.38], isoN: "414",
      stance: "Strategy still forthcoming; no AI law yet",
      summary:
        "Kuwait's national AI strategy was still forthcoming in 2026, and the country has no dedicated AI law or regulator. AI falls under existing rules such as CITRA's data-privacy regulation. Infrastructure constraints, including data centres and power, are a recurring concern.",
      glance: { firstStrategy: "—", latestStrategy: "Forthcoming (2026)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 4865298, year: 2025 }, gdpPerCapita: { v: 32312, year: 2025 }, internet: { v: 100, year: 2025 } },
      oxford: { rank: 83, scores: [35.0, 53.31, 52.63, 51.43, 30.19, 38.01] },
      msAdoption: { h1_2025: 17.7, h2_2025: 19.1, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2025",
          text: "Kuwait's national AI strategy was still described as forthcoming in 2026. It is expected to align the roles of existing regulators under a unified framework for AI oversight and data governance.",
          level: "single",
          sources: [
            S("GLA & Company - Kuwait's AI revolution", "https://www.glaco.com/blog/kuwaits-ai-revolution-law-cloud-and-cybersecurity-at-the-core-of-digital-transformation/"),
          ],
          note: "Some secondary sources describe a draft 'National AI Strategy 2025–2028', but no readable source confirmed those dates.",
        },
        {
          topic: "Regulation", date: "2026",
          text: "Kuwait has no dedicated AI law or AI regulator. AI is covered by existing rules such as CITRA's Data Privacy Protection Regulation.",
          level: "single",
          sources: [
            S("GLA & Company", "https://www.glaco.com/blog/kuwaits-ai-revolution-law-cloud-and-cybersecurity-at-the-core-of-digital-transformation/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-10-19", title: "France and Kuwait agree data and AI cooperation",
          summary: "During President Macron's visit, Kuwait and France signed eight agreements. One covers exploratory cooperation on data and AI between Kuwait's communications and IT authorities and the French company Pertimm.",
          level: "single",
          note: "Read in a browser; the page blocks automated requests.",
          sources: [
            { t: "bne IntelliNews (KUNA) - Macron begins Gulf tour in Kuwait with eight cooperation agreements (19 Oct 2026)", u: "https://www.intellinews.com/macron-begins-gulf-tour-in-kuwait-with-eight-cooperation-agreements-477038/" },
          ],
        },
        {
          date: "2026-02", title: "AI rollout runs into infrastructure limits",
          summary: "Analysts point to only five data centres, data-residency rules and an unreliable grid as hurdles.",
          level: "single",
          sources: [S("AGBI", "https://www.agbi.com/analysis/ai/2026/02/kuwaits-dedication-to-ai-rollout-faces-challenges/")],
        },
      ],
    },

    // ------------------------------------------------------------------ OMAN
    {
      id: "om", name: "Oman", flag: "🇴🇲", region: "Middle East / Gulf", group: "Middle East", geo: [58.41, 23.59], isoN: "512",
      stance: "Programme-driven: national AI programme (2024–2026) feeding a new digital-economy roadmap",
      summary:
        "Oman's Ministry of Transport, Communications and IT launched a National Programme for AI and Advanced Digital Technologies in 2024 under Vision 2040. It ran government pilots in health, justice and procurement, and planned an Omani language model. A 2026–2030 digital-economy roadmap followed in March 2026.",
      glance: { firstStrategy: "2022 (executive programme)", latestStrategy: "2024 (National AI Programme 2024–2026)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 5494691, year: 2025 }, gdpPerCapita: { v: 19947, year: 2025 }, internet: { v: 95.3, year: 2024 } },
      oxford: { rank: 61, scores: [88.5, 47.22, 72.0, 71.0, 40.29, 41.09] },
      msAdoption: { h1_2025: 22.6, h2_2025: 24.2, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2024-09",
          text: "In 2024 Oman launched a National Programme for AI and Advanced Digital Technologies (2024–2026) under Vision 2040, upgrading a 2022 executive programme.",
          level: "corroborated",
          sources: [
            S("MTCIT - Oman AI & Digital Future Program (2024–2026)", "https://mtcit.gov.om/media-4/news-announcements-11/news-85/oman-ai-digital-future-program-20242026-171"),
            S("Telecom Review - Oman launches National AI and Advanced Digital Technologies Program", "https://www.telecomreview.com/articles/reports-and-coverage/8411-oman-launches-national-ai-and-advanced-digital-technologies-program/"),
          ],
        },
        {
          topic: "Economy", date: "2026-03-10",
          text: "In March 2026 the ministry unveiled initiatives to expand the digital economy over the next five years.",
          level: "single",
          sources: [S("Muscat Daily - MTCIT unveils new drive to expand digital economy", "https://www.muscatdaily.com/2026/03/10/mtcit-unveils-new-drive-to-expand-digital-economy/")],
          note: "A secondary summary says the plan includes a national AI platform for government and more than RO 79 million invested in AI. This was not confirmed in official sources.",
        },
      ],
      news: [
        {
          date: "2026-03-10", title: "Ministry unveils a five-year drive to expand the digital economy",
          summary: "The initiatives follow Oman's national AI programme.",
          level: "single",
          sources: [S("Muscat Daily", "https://www.muscatdaily.com/2026/03/10/mtcit-unveils-new-drive-to-expand-digital-economy/")],
        },
      ],
    },

    // ------------------------------------------------------------------ MONGOLIA
    {
      id: "mn", name: "Mongolia", flag: "🇲🇳", region: "East Asia", group: "Asia-Pacific", geo: [106.92, 47.92], isoN: "496",
      stance: "Strategy with UNDP plus a home-grown Mongolian-language LLM",
      summary:
        "Mongolia's digital ministry developed a national AI strategy with UNDP in 2025, pitching the country's cold climate and energy mix for data centres. A local start-up, Egune AI, builds Mongolian-language models to keep the language from being sidelined by global AI.",
      glance: { firstStrategy: "2025", latestStrategy: "2025 (with UNDP)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 3568978, year: 2025 }, gdpPerCapita: { v: 7108, year: 2025 }, internet: { v: 85.1, year: 2024 } },
      oxford: { rank: 94, scores: [35.0, 44.37, 49.0, 69.4, 20.5, 33.84] },
      msAdoption: { h1_2025: 12.6, h2_2025: 14.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2025-02",
          text: "Mongolia's Ministry of Digital Development, Innovation and Communications worked with UNDP in 2025 to develop a national strategy for AI and big data, starting with a readiness assessment.",
          level: "single",
          sources: [
            S("Montsame - Mongolian Government developing a national strategy for AI and big data", "https://montsame.mn/en/read/361946"),
          ],
        },
        {
          topic: "Models", date: "2025",
          text: "Egune AI builds large language models specialised in the Mongolian language and culture, and received a $3.5 million investment from Golomt Bank.",
          level: "corroborated",
          sources: [
            S("Rest of World - Egune AI, the LLM that specializes in Mongolia's language", "https://restofworld.org/2025/mongolia-egune-ai-llm/"),
            S("The Fast Mode - Mongolian AI startup secures $3.5 million", "https://www.thefastmode.com/investments-and-expansions/41648-mongolian-ai-startup-secures-3-5-million-to-drive-national-ai-infrastructure"),
            S("FF News - Mongolian AI startup secures $3.5 million", "https://ffnews.com/newsarticle/funding/mongolian-ai-startup-secures-3-5-million-usd-to-advance-national-ai-infrastructure-and-digital-future/"),
          ],
        },
      ],
      news: [
        {
          date: "2025", title: "Egune AI raises $3.5M for Mongolian-language AI",
          summary: "The company frames its work as digital sovereignty for a small language.",
          level: "single",
          sources: [
            S("The Fast Mode", "https://www.thefastmode.com/investments-and-expansions/41648-mongolian-ai-startup-secures-3-5-million-to-drive-national-ai-infrastructure"),
            S("FF News", "https://ffnews.com/newsarticle/funding/mongolian-ai-startup-secures-3-5-million-usd-to-advance-national-ai-infrastructure-and-digital-future/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BRUNEI
    {
      id: "bn", name: "Brunei", flag: "🇧🇳", region: "Southeast Asia", group: "Asia-Pacific", geo: [114.95, 4.89], isoN: "096",
      stance: "Voluntary, ASEAN-aligned guidance; data-protection law now in force",
      summary:
        "Brunei governs AI through a voluntary Guide on AI Governance and Ethics from the regulator AITI (2025), aligned with the ASEAN guide and updated in a second edition in 2026. Its new Personal Data Protection Order applies to AI that processes personal data from 2026.",
      glance: { firstStrategy: "2025 (AI governance guide)", latestStrategy: "2026 (guide, 2nd edition)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 466330, year: 2025 }, gdpPerCapita: { v: 32235, year: 2025 }, internet: { v: 96.3, year: 2024 } },
      oxford: { rank: 97, scores: [31.0, 47.39, 35.06, 65.14, 25.37, 41.92] },
      msAdoption: null,
      facts: [
        {
          topic: "Governance", date: "2025-04-11",
          text: "AITI issued a voluntary, risk-based Guide on AI Governance and Ethics for Brunei Darussalam in April 2025, drawing on the ASEAN Guide on AI Governance and Ethics.",
          level: "verified",
          sources: [
            S("AITI - Guide on AI Governance and Ethics for Brunei Darussalam", "https://www.aiti.gov.bn/news/2025/guide-on-artificial-intelligence-governance-and-ethics-for-brunei-darussalam/"),
            S("OECD.AI - Brunei Guide on AI Governance and Ethics", "https://oecd.ai/en/dashboards/policy-initiatives/guide-on-artificial-intelligence-ai-governance-and-ethics-for-brunei-darussalam"),
            S("US-ASEAN Business Council - Brunei releases voluntary AI guidelines", "https://www.usasean.org/article/brunei-releases-voluntary-ai-guidelines-enhance-responsibility-and-trust"),
          ],
        },
        {
          topic: "Governance", date: "2026-05-01",
          text: "AITI published a second edition of the guide in 2026, after a public consultation that began in November 2025.",
          level: "single",
          sources: [S("The Star - Brunei ramps up efforts to ensure ethical AI practices (1 May 2026)", "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/05/01/brunei-ramps-up-efforts-to-ensure-ethical-ai-practices")],
        },
      ],
      news: [
        {
          date: "2026-05-01", title: "Second edition of Brunei's AI governance guide",
          summary: "It was updated after consultation with government, industry and academia.",
          level: "single",
          sources: [S("The Star", "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/05/01/brunei-ramps-up-efforts-to-ensure-ethical-ai-practices")],
        },
      ],
    },

    // ------------------------------------------------------------------ TUNISIA
    {
      id: "tn", name: "Tunisia", flag: "🇹🇳", region: "North Africa", group: "Africa", geo: [10.18, 36.81], isoN: "788",
      stance: "Expired roadmap, project-by-project adoption",
      summary:
        "Tunisia's national AI strategy and roadmap covered 2021–2025 and has not visibly been replaced. AI adoption now runs project by project, including AI-assisted civil protection funded by a French development loan and a first public AI institute at the University of Tunis.",
      glance: { firstStrategy: "2021", latestStrategy: "2021 (Strategy & Roadmap 2021–2025, lapsed)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 12348573, year: 2025 }, gdpPerCapita: { v: 4657, year: 2025 }, internet: { v: 76.5, year: 2024 } },
      oxford: { rank: 88, scores: [19.5, 43.61, 59.0, 51.19, 36.68, 36.76] },
      msAdoption: { h1_2025: 12.3, h2_2025: 12.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2021",
          text: "Tunisia's national AI Roadmap, a non-binding plan, ran from 2021 to 2025. OECD.AI lists it as complete.",
          level: "single",
          sources: [
            S("OECD.AI Policy Navigator - Tunisia AI Roadmap (2021–2025)", "https://oecd.ai/en/dashboards/policy-initiatives/tunisia-ai-roadmap-1825"),
          ],
        },
        {
          topic: "Public sector", date: "2025-08",
          text: "Tunisia secured a 150 million dinar (about $51 million) loan from the French Development Agency to modernise civil protection, including AI-powered operations rooms and drones.",
          level: "corroborated",
          sources: [
            S("Ecofin - Tunisia plans $51 million AI and drones programme", "https://www.ecofinagency.com/news-digital/2708-48183-tunisia-plans-51-million-ai-and-drones-program-to-modernize-civil-protection-services"),
            S("iAfrica - Tunisia secures $51M loan to modernise civil protection with AI", "https://iafrica.com/tunisia-secures-51m-loan-to-modernize-civil-protection-with-ai-drones-and-digital-operations"),
          ],
        },
      ],
      news: [
        {
          date: "2026-05-22", title: "Customs adds AI to national screening",
          summary: "An AI-driven unit is being added to customs screening as part of a wider customs modernisation.",
          level: "single",
          sources: [S("TechAfrica News", "https://techafricanews.com/2026/05/22/tunisian-customs-integrates-artificial-intelligence-into-national-screening-system/")],
        },
      ],
    },

    // ------------------------------------------------------------------ BOTSWANA
    {
      id: "bw", name: "Botswana", flag: "🇧🇼", region: "Southern Africa", group: "Africa", geo: [25.91, -24.65], isoN: "072",
      stance: "Policy in final drafting after a UNESCO readiness assessment",
      summary:
        "Botswana has been finalising its first National AI Policy after a UNESCO readiness assessment, but none had been published by mid-2026.",
      glance: { firstStrategy: "—", latestStrategy: "Draft National AI Policy (2025–26)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 2562122, year: 2025 }, gdpPerCapita: { v: 7778, year: 2025 }, internet: { v: 57.5, year: 2024 } },
      oxford: { rank: 109, scores: [19.5, 40.13, 60.63, 39.11, 27.83, 32.04] },
      msAdoption: { h1_2025: 12.8, h2_2025: 13.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2025-08",
          text: "In August 2025 the government said it was finalising a National AI Policy following a UNESCO AI readiness assessment.",
          level: "single",
          sources: [
            S("Daily News (Botswana Government) - AI Policy in final stage", "https://dailynews.gov.bw/news-detail/88106"),
          ],
        },
      ],
      news: [
        {
          date: "2026-05", title: "Government ties AI and broadband to Vision 2036",
          summary: "At the Huawei ICT Congress, officials linked AI to the Economic Transformation Plan introduced in 2025.",
          level: "corroborated",
          sources: [
            S("BW Tech Zone - Botswana bets on AI and broadband", "https://www.bwtechzone.com/2026/05/botswana-bets-on-ai-and-broadband-to.html"),
            S("Broadcast Media Africa - Botswana partners with Huawei for AI", "https://news.broadcastmediaafrica.com/2026/05/11/botswana-partners-with-huawei-for-ai-and-rural-connectivity-solutions/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SIERRA LEONE
    {
      id: "sl", name: "Sierra Leone", flag: "🇸🇱", region: "West Africa", group: "Africa", geo: [-13.23, 8.48], isoN: "694",
      stance: "Problem-first: World Bank-backed readiness work feeding a national AI strategy",
      summary:
        "Sierra Leone's communications ministry, with the World Bank, began a national AI readiness assessment in October 2025. It is developing a national AI strategy aimed at specific national problems. With about 25% internet use and the lowest AI-readiness rank in this set, access is the binding constraint.",
      glance: { firstStrategy: "—", latestStrategy: "In development (2026, with World Bank)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 8819794, year: 2025 }, gdpPerCapita: { v: 846, year: 2025 }, internet: { v: 25.1, year: 2024 } },
      oxford: { rank: 175, scores: [27.5, 25.64, 15.92, 15.28, 10.91, 31.16] },
      msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null, regional: true },
      facts: [
        {
          topic: "Readiness", date: "2025-10",
          text: "In October 2025 the Ministry of Communication, Technology and Innovation and the World Bank launched a national AI readiness assessment covering compute, skills, and policy and regulation.",
          level: "corroborated",
          sources: [
            S("Ecofin - Sierra Leone, World Bank launch AI readiness assessment", "https://www.ecofinagency.com/news-digital/0310-49267-sierra-leone-world-bank-launch-ai-readiness-assessment-to-drive-inclusive-digital-transformation"),
            S("iAfrica - Sierra Leone launches national AI readiness assessment", "https://iafrica.com/sierra-leone-launches-national-ai-readiness-assessment-with-world-bank-support/"),
          ],
        },
        {
          topic: "Strategy", date: "2026-05",
          text: "In May 2026 the government held stakeholder consultations on a national AI strategy being developed with the World Bank Group.",
          level: "single",
          sources: [
            S("Ecofin - Sierra Leone advances national AI strategy", "https://www.ecofinagency.com/news-digital/2605-55944-sierra-leone-advances-national-ai-strategy-to-support-digital-expansion"),
            S("Premier Media - Sierra Leone advances national AI strategy", "https://www.premiermedia-sl.com/sierra-leone-advances-national-ai-strategy-to-support-digital-expansion/"),
          ],
          note: "Premier Media republishes Ecofin's report word for word, so this counts as one source.",
        },
      ],
      news: [
        {
          date: "2026-05", title: "Consultations on a national AI strategy",
          summary: "A three-day consultation brought together media, civil society, public institutions and business.",
          level: "single",
          sources: [
            S("Ecofin", "https://www.ecofinagency.com/news-digital/2605-55944-sierra-leone-advances-national-ai-strategy-to-support-digital-expansion"),
            S("Premier Media", "https://www.premiermedia-sl.com/sierra-leone-advances-national-ai-strategy-to-support-digital-expansion/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ TOGO
    {
      id: "tg", name: "Togo", flag: "🇹🇬", region: "West Africa", group: "Africa", geo: [1.23, 6.13], isoN: "768",
      stance: "Ministry-by-ministry adoption while a national strategy is drafted",
      summary:
        "Togo is drafting a national AI strategy, starting with AI use in public administration. Meanwhile individual ministries are deploying AI, such as an AI market-fraud platform launched in 2026, and Togo AI Lab is building datasets and tools for Togolese languages.",
      glance: { firstStrategy: "—", latestStrategy: "In drafting (2025–26)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 8591626, year: 2025 }, gdpPerCapita: { v: 1384, year: 2025 }, internet: { v: 39.5, year: 2024 } },
      oxford: { rank: 124, scores: [16.0, 32.13, 55.0, 41.04, 12.04, 35.37] },
      msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null, regional: true },
      facts: [
        {
          topic: "Strategy", date: "2025-12",
          text: "In December 2025 Togo was reported to be drafting a national AI strategy to guide AI use in public administration.",
          level: "single",
          sources: [S("Togo First - Togo drafts national strategy to guide the use of AI", "https://www.togofirst.com/en/itc/0112-17691-togo-drafts-national-strategy-to-guide-the-use-of-artificial-intelligence")],
        },
        {
          topic: "Public sector", date: "2026-03-12",
          text: "On 12 March 2026 the economy minister launched a Digital Market Intelligence platform that uses AI and data analytics to detect fraud involving consumer goods.",
          level: "single",
          sources: [S("Togo First - Togo deploys digital intelligence platform to combat market fraud", "https://www.togofirst.com/en/economic-governance/1303-18457-togo-deploys-digital-intelligence-platform-to-combat-market-fraud")],
        },
      ],
      news: [
        {
          date: "2026-07", title: "AI project for Togo's national languages presented in Geneva",
          summary: "Togo AI Lab, with Zindi and Umbaji, aims to collect speech and translation data for 50 Togolese languages.",
          level: "single",
          sources: [S("Togo First - Togo unveils AI project to promote national languages", "https://www.togofirst.com/en/culture/1407-19561-togo-unveils-ai-project-to-promote-national-languages")],
        },
      ],
    },

    // ------------------------------------------------------------------ EL SALVADOR
    {
      id: "sv", name: "El Salvador", flag: "🇸🇻", region: "Central America", group: "Americas", geo: [-89.19, 13.69], isoN: "222",
      stance: "Deregulatory 'AI sandbox' bet: promotion law, national agency, Big Tech deals",
      summary:
        "El Salvador passed a Law for the Promotion of AI and Technologies in February 2025, creating a National AI Agency (ANIA) and offering light regulation and tax incentives. It signed a letter of intent with NVIDIA, and in May 2026 published a National AI Strategy that targets a large AI share of GDP. Much of the coverage is government-aligned, and critics question the claims.",
      glance: { firstStrategy: "2026", latestStrategy: "2026 (National AI Strategy)", newestBody: "National AI Agency (ANIA)", newestBodyDate: "2025-02-26" },
      stats: { population: { v: 6365503, year: 2025 }, gdpPerCapita: { v: 5767, year: 2025 }, internet: { v: 66.5, year: 2024 } },
      oxford: { rank: 104, scores: [12.0, 32.62, 49.75, 64.19, 28.58, 52.9] },
      msAdoption: { h1_2025: 14.6, h2_2025: 16.2, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2025-02-26",
          text: "On 26 February 2025 the Legislative Assembly passed the Law for the Promotion of Artificial Intelligence and Technologies. It creates a National AI Agency (ANIA) under the presidency to promote and regulate AI.",
          level: "verified",
          sources: [
            S("El Salvador in English - El Salvador pioneers AI law", "https://elsalvadorinenglish.com/2025/02/27/el-salvador-pioneers-global-innovation-with-groundbreaking-artificial-intelligence-law/"),
            S("US Trade.gov - El Salvador ICT: Artificial Intelligence Law", "https://www.trade.gov/market-intelligence/el-salvador-ict-artificial-intelligence-law"),
            S("CryptoSlate - El Salvador to focus on open-source AI with new laws", "https://cryptoslate.com/el-salvador-to-focus-on-open-source-ai-development-with-new-laws-to-foster-innovation/"),
          ],
        },
        {
          topic: "Partnerships", date: "2025-04",
          text: "In April 2025 El Salvador signed a letter of intent with NVIDIA to develop sovereign AI capabilities, including a first national AI lab.",
          level: "corroborated",
          sources: [
            S("CryptoSlate - El Salvador sets AI goals with national lab launch amid NVIDIA deal", "https://cryptoslate.com/el-salvador-sets-ambitious-ai-goals-with-national-lab-launch-amid-nvidia-deal/"),
            S("Cryptopolitan - El Salvador signs AI letter of intent with Nvidia", "https://www.cryptopolitan.com/el-salvador-signs-ai-loi-with-nvidia/"),
          ],
        },
        {
          topic: "Strategy", date: "2026-05-15",
          text: "ANIA published a National AI Strategy on 15 May 2026. The government says it aims for AI to contribute to 20% of GDP.",
          level: "corroborated",
          sources: [
            S("El Salvador in English - El Salvador unveils 2026 National AI Strategy", "https://elsalvadorinenglish.com/2026/05/15/el-salvador-unveils-2026-national-ai-strategy-a-new-blueprint-for-global-sovereign-ai/"),
            S("DPL News - El Salvador: national AI strategy aims for AI to contribute 20% of GDP", "https://dplnews.com/?p=321516"),
          ],
          note: "The 20% target is the government's claim, and no independent assessment was found.",
        },
      ],
      news: [
        {
          date: "2026-05-15", title: "National AI Strategy published",
          summary: "It is built around innovation, sovereignty, human potential and 'abundance', with a deliberately minimal regulatory posture.",
          level: "single",
          sources: [
            S("El Salvador in English", "https://elsalvadorinenglish.com/2026/05/15/el-salvador-unveils-2026-national-ai-strategy-a-new-blueprint-for-global-sovereign-ai/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ PANAMA
    {
      id: "pa", name: "Panama", flag: "🇵🇦", region: "Central America", group: "Americas", geo: [-79.52, 8.98], isoN: "591",
      stance: "Strategy approved and a first AI bill through the legislature in 2026",
      summary:
        "Panama's Cabinet approved a National AI Strategy on 11 August 2026. In the same month the National Assembly passed a bill on 'adaptive governance' of AI, which was awaiting the President's signature.",
      glance: { firstStrategy: "2026", latestStrategy: "2026 (approved by Cabinet)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 4571189, year: 2025 }, gdpPerCapita: { v: 19790, year: 2025 }, internet: { v: 72.8, year: 2024 } },
      oxford: { rank: 102, scores: [23.0, 53.03, 41.75, 61.33, 20.84, 30.73] },
      msAdoption: { h1_2025: 20.3, h2_2025: 21.5, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026-08-11",
          text: "Panama's Cabinet Council approved the National AI Strategy on 11 August 2026, alongside a national strategy for microelectronics and semiconductors.",
          level: "single",
          sources: [
            S("News in America (PDCC) - Panama aims to become Latin America's digital canal for AI", "https://newsinamerica.com/pdcc/boletin/2026/panama-busca-convertirse-en-el-canal-digital-de-la-inteligencia-artificial-en-america-latina/"),
          ],
          note: "An earlier version gave a resolution number and four pillars from a vendor blog; neither could be confirmed, so both were removed.",
        },
        {
          topic: "Regulation", date: "2026-08-19",
          text: "In August 2026 the National Assembly passed a bill establishing 'adaptive governance' of AI. It went to the President, who has up to 30 working days to sign or object.",
          level: "single",
          sources: [S("Pacífica Legal - AI governance law: adaptive governance of AI in Panama", "https://www.pacifica.legal/blog/ai-governance-law-adaptative-governance-of-artificial-intelligence-in-panama")],
        },
      ],
      news: [
        {
          date: "2026-09-23", title: "Panama pitches itself to Google, Meta, NVIDIA, Microsoft and Anthropic",
          summary: "Officials presented investment opportunities to AI companies in New York.",
          level: "single",
          sources: [S("Newsroom Panama - What do the AI giants see in Panama?", "https://newsroompanama.com/2026/09/23/what-do-the-ai-giants-see-in-panama-google-meta-nvidia-microsoft-anthropic/")],
        },
      ],
    },

    // ------------------------------------------------------------------ PARAGUAY
    {
      id: "py", name: "Paraguay", flag: "🇵🇾", region: "South America", group: "Americas", geo: [-57.58, -25.26], isoN: "600",
      stance: "Hydropower-backed compute and a Taiwan alliance, ahead of a formal strategy",
      summary:
        "Paraguay is using its surplus hydropower to attract AI compute. In May 2026 it signed an agreement with Taiwan on sovereign AI infrastructure, starting with a 10 MW data centre. Critics note the country still lacks an approved national AI strategy, working instead from a ministry roadmap.",
      glance: { firstStrategy: "—", latestStrategy: "Roadmap only (no approved strategy)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 7013078, year: 2025 }, gdpPerCapita: { v: 7027, year: 2025 }, internet: { v: 81.6, year: 2024 } },
      oxford: { rank: 111, scores: [12.0, 46.38, 55.29, 50.05, 19.15, 34.6] },
      msAdoption: { h1_2025: 10.1, h2_2025: 11.0, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Compute", date: "2026-05",
          text: "In May 2026 Paraguay and Taiwan signed a memorandum to develop sovereign AI infrastructure. The first stage is a 10 MW data centre, estimated by the ICT ministry at about US$300 million.",
          level: "corroborated",
          sources: [
            S("MITIC - Alianza con Taiwán abre camino al desarrollo de la IA en Paraguay", "https://mitic.gov.py/alianza-con-taiwan-abre-camino-al-desarrollo-de-la-ia-en-paraguay/"),
            S("Diario HOY - MITIC liderará fase piloto del plan de IA junto a Taiwán", "https://www.hoy.com.py/nacionales/2026/05/20/mitic-liderara-fase-piloto-del-ambicioso-plan-de-ia-junto-a-taiwan"),
          ],
          note: "One international outlet reported US$200M. The US$300M figure is from official communications.",
        },
        {
          topic: "Strategy", date: "2026-07",
          text: "Paraguay has a ministry AI roadmap but no formally approved national AI strategy.",
          level: "single",
          sources: [
            S("Agencia IP - MITIC presenta avances del país en IA", "https://www.ip.gov.py/ip/2026/06/26/mitic-presenta-avances-del-pais-en-inteligencia-artificial-en-cumbre-regional-sobre-etica-de-la-ia/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-06-26", title: "Paraguay signs Joint Declaration on AI Opportunities in Washington",
          summary: "The ICT minister signed at the Pax Silica summit, committing to innovation-friendly regulation and infrastructure.",
          level: "corroborated",
          sources: [
            S("MITIC", "https://mitic.gov.py/paraguay-fortalece-su-posicionamiento-internacional-en-inteligencia-artificial-con-adhesion-a-declaracion-estrategica-en-washington/"),
            S("La Nación (Paraguay)", "https://www.lanacion.com.py/negocios/2026/06/26/paraguay-se-adhiere-a-pacto-para-impulsar-el-desarrollo-responsable-de-la-inteligencia-artificial/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ DOMINICAN REPUBLIC
    {
      id: "do", name: "Dominican Republic", flag: "🇩🇴", region: "Caribbean", group: "Americas", geo: [-69.93, 18.49], isoN: "214",
      stance: "Early Caribbean strategy now pivoting to mass AI skills training",
      summary:
        "The Dominican Republic launched a National AI Strategy (ENIA) in October 2023, one of the first in the Caribbean. The government agency OGTIC later acknowledged delays and funding limits. In September 2026 the government launched 'RD Inteligente', which aims to train one million people in AI, alongside 50,000 AWS scholarships.",
      glance: { firstStrategy: "2023", latestStrategy: "2023 (ENIA)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 11520487, year: 2025 }, gdpPerCapita: { v: 11059, year: 2025 }, internet: { v: 91.0, year: 2024 } },
      oxford: { rank: 84, scores: [61.0, 36.86, 55.38, 70.62, 22.39, 39.19] },
      msAdoption: { h1_2025: 22.0, h2_2025: 22.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2023-10-11",
          text: "President Luis Abinader launched the National AI Strategy (ENIA) on 11 October 2023, led by OGTIC as a priority project of the National Innovation Policy 2030.",
          level: "verified",
          sources: [
            S("Presidencia - Abinader encabeza lanzamiento de Estrategia Nacional de IA", "https://presidencia.gob.do/noticias/presidente-luis-abinader-encabeza-lanzamiento-de-estrategia-nacional-de-inteligencia"),
            S("OGTIC - Presidente Luis Abinader lanza la Estrategia Nacional de IA", "https://ogtic.gob.do/presidente-luis-abinader-lanza-la-estrategia-nacional-de-ia/"),
            S("OECD.AI - National AI Strategy (ENIA)", "https://oecd.ai/en/dashboards/policy-initiatives/national-artificial-intelligence-strategy-enia"),
          ],
        },
        {
          topic: "Strategy", date: "2025",
          text: "OGTIC acknowledged delays in implementing ENIA, citing technical and financial constraints and weak coordination. Pending items include updating the data-protection law and creating a regulatory sandbox committee.",
          level: "single",
          sources: [S("Acento - ¿En qué quedó la Estrategia de IA de República Dominicana?", "https://acento.com.do/actualidad/en-que-quedo-la-estrategia-de-inteligencia-artificial-de-republica-dominicana-9533130.html")],
        },
        {
          topic: "Skills", date: "2026-09-10",
          text: "In September 2026 the government launched 'RD Inteligente', aiming to train one million Dominicans in AI, alongside 50,000 AI scholarships with Amazon Web Services to run until 2028.",
          level: "verified",
          sources: [
            S("Noticias SIN - Gobierno lanza 'RD Inteligente'", "https://noticiassin.com/pais/nacional/2026/09/10/gobierno-lanza-rd-inteligente-con-meta-de-capacitar-a-un-millon-de-dominicanos-en-inteligencia-artificial-2114297/"),
            S("Infobae - Gobierno dominicano y AWS lanzan 50,000 becas de IA", "https://www.infobae.com/republica-dominicana/2026/09/10/gobierno-dominicano-y-amazon-web-lanzan-50000-becas-de-inteligencia-artificial-mientras-crece-el-uso-empresarial-en-el-pais/"),
            S("Prensa Latina - Gobierno dominicano impulsa formación en IA", "https://www.prensa-latina.cu/2026/09/11/gobierno-dominicano-impulsa-formacion-en-inteligencia-artificial/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-10-20", title: "Dominican Republic tenth in the 2026 Latin American AI Index",
          summary: "The Dominican Republic scored 45.1 in the fourth Latin American AI Index (ILIA), tenth of 20 countries, in the 'adopter' group.",
          level: "corroborated",
          sources: [
            { t: "CENIA - ILIA 2026: 4th edition", u: "https://cenia.cl/2026/10/20/ilia-2026-4ta-edicion-revela-que-america-latina-y-el-caribe-se-juegan-su-futuro-en-ia-en-la-colaboracion-regional-para-datos-talento-y-computo/" },
            { t: "Amexi - ILIA 2026 regional ranking", u: "https://amexi.com.mx/economia-y-negocios/mexico-octavo-lugar-inteligencia-artificial-america-latina-2026/" },
          ],
        },
        {
          date: "2026-09-10", title: "'RD Inteligente' aims to train one million people in AI",
          summary: "The President said the goal is to give people tools for their existing work, not to make them programmers.",
          level: "verified",
          sources: [
            S("Noticias SIN", "https://noticiassin.com/pais/nacional/2026/09/10/gobierno-lanza-rd-inteligente-con-meta-de-capacitar-a-un-millon-de-dominicanos-en-inteligencia-artificial-2114297/"),
            S("Infobae", "https://www.infobae.com/republica-dominicana/2026/09/10/gobierno-dominicano-y-amazon-web-lanzan-50000-becas-de-inteligencia-artificial-mientras-crece-el-uso-empresarial-en-el-pais/"),
            S("N Digital - 50 mil becas de IA antes de 2028", "https://n.com.do/2026/09/09/aws-50-mil-becas-inteligencia-artificial-republica-dominicana/"),
          ],
        },
      ],
    }
  );
})();

// Atlas dataset, part 4: 25 more small nations (added 12 Oct 2026).
// Same verification rules as the other data files (see METHODOLOGY.md). Every claim here was run through
// the automated source audit before publication; badges reflect sources that were readable and confirmed the claim.
// msAdoption.regional marks Microsoft figures that are a shared regional estimate; regionLabel names the region.

(function () {
  const S = (t, u) => ({ t, u });
  window.ATLAS.nations.push(
    // ------------------------------------------------------------------ BELGIUM
    {
      id: "be", name: "Belgium", flag: "🇧🇪", region: "Western Europe (EU)", group: "Europe", geo: [4.35, 50.85], isoN: "056",
      stance: "A 2022 convergence plan refreshed in 2026 around keeping control of AI; BIPT named lead AI Act regulator by declaration, not yet in law",
      summary:
        "Belgium adopted its first national AI strategy, the National Convergence Plan, in 2022, while Flanders and Wallonia run their own AI plans. A government declaration of 31 January 2025 named the telecoms regulator BIPT as the main AI Act authority, but Belgium missed the August 2025 designation deadline and the role is not yet in statute. In September 2026 the federal government adopted an updated AI strategy built around keeping control of the technology.",
      glance: { firstStrategy: "2022 (National Convergence Plan)", latestStrategy: "2026 (updated national AI strategy)", newestBody: "BIPT named lead AI Act authority (declaration)", newestBodyDate: "2025-01-31" },
      stats: { population: { v: 11941781, year: 2025 }, gdpPerCapita: { v: 60750, year: 2025 }, internet: { v: 95.8, year: 2024 } },
      oxford: { rank: 30, scores: [85.0, 58.83, 80.0, 72.0, 49.84, 67.05] },
      msAdoption: { h1_2025: 33.5, h2_2025: 36.0, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026-09-16",
          text: "On 16 September 2026 the federal government adopted an updated national AI strategy. Digitalisation Minister Vanessa Matz said it should let AI create value for Belgium while the country keeps control of it. Measures include reforming the Strategic Committee on AI and a 'sovereignty grid' for public procurement.",
          level: "verified",
          sources: [
            S("Anadolu Agency - Belgium unveils new AI strategy (16 Sep 2026)", "https://www.aa.com.tr/en/science-technology/belgium-unveils-new-ai-strategy-to-strengthen-national-control/4058986"),
            S("BTA - Belgium works on tightening its AI strategy (16 Sep 2026)", "https://www.bta.bg/en/news/world/1205277-belgium-works-on-tightening-its-strategy-for-use-of-artificial-intelligence"),
            S("F4Media - Belgium approves updated national AI strategy", "https://f4media.az/en/belgium-approves-updated-national-artificial-intelligence-strategy/"),
            S("MENAFN - Belgium strengthens national AI strategy", "https://menafn.com/1111677679/Belgium-Strengthens-National-AI-Strategy-to-Boost-Control"),
          ],
        },
        {
          topic: "Adoption", date: "2026-09-16",
          text: "Matz said 42% of Belgians already use generative AI and 34.5% of Belgian businesses have adopted AI.",
          level: "corroborated",
          sources: [
            S("MENAFN - Belgium strengthens national AI strategy", "https://menafn.com/1111677679/Belgium-Strengthens-National-AI-Strategy-to-Boost-Control"),
            S("F4Media - Belgium approves updated national AI strategy", "https://f4media.az/en/belgium-approves-updated-national-artificial-intelligence-strategy/"),
            S("Anadolu Agency - Belgium unveils new AI strategy (16 Sep 2026)", "https://www.aa.com.tr/en/science-technology/belgium-unveils-new-ai-strategy-to-strengthen-national-control/4058986"),
          ],
        },
        {
          topic: "Regulation", date: "2025-01-31",
          text: "A Government Declaration of 31 January 2025 named the telecoms regulator BIPT as Belgium's main AI Act market-surveillance authority. Belgium missed the EU's August 2025 deadline for formal designations, and BIPT's role was still government policy, not statute, in 2026.",
          level: "single",
          sources: [
            S("Technology's Legal Edge - State of the Act (Nov 2025)", "https://www.technologyslegaledge.com/2025/11/state-of-the-act-eu-ai-act-implementation-in-key-member-states/"),
          ],
        },
        {
          topic: "Strategy", date: "2022",
          text: "Belgium's first national AI strategy, the National Convergence Plan for the Development of AI, was approved in 2022. Flanders and Wallonia run their own AI plans alongside it.",
          level: "corroborated",
          sources: [
            S("F4Media - Belgium approves updated national AI strategy", "https://f4media.az/en/belgium-approves-updated-national-artificial-intelligence-strategy/"),
            S("CMS - AI regulation scanner: Belgium", "https://cms.law/en/int/expert-guides/ai-regulation-scanner/belgium"),
            S("BTA - Belgium works on tightening its AI strategy (16 Sep 2026)", "https://www.bta.bg/en/news/world/1205277-belgium-works-on-tightening-its-strategy-for-use-of-artificial-intelligence"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-16", title: "Belgium adopts updated national AI strategy",
          summary: "The strategy updates the 2022 convergence plan and adds a sovereignty grid for public procurement. Implementation will be worked out with the regions and communities.",
          level: "verified",
          sources: [
            S("Anadolu Agency - Belgium unveils new AI strategy (16 Sep 2026)", "https://www.aa.com.tr/en/science-technology/belgium-unveils-new-ai-strategy-to-strengthen-national-control/4058986"),
            S("BTA - Belgium works on tightening its AI strategy (16 Sep 2026)", "https://www.bta.bg/en/news/world/1205277-belgium-works-on-tightening-its-strategy-for-use-of-artificial-intelligence"),
            S("F4Media - Belgium approves updated national AI strategy", "https://f4media.az/en/belgium-approves-updated-national-artificial-intelligence-strategy/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ CZECHIA
    {
      id: "cz", name: "Czechia", flag: "🇨🇿", region: "Central Europe (EU)", group: "Europe", geo: [14.42, 50.08], isoN: "203",
      stance: "Strategy-led: NAIS 2030 since 2024 and an AI Factory in Ostrava, with its AI Act law still before Parliament",
      summary:
        "Czechia published its first National AI Strategy in May 2019 and replaced it with NAIS 2030 in July 2024. A minimal draft law to implement the EU AI Act would make the Czech Telecommunication Office (ČTÚ) the main market-surveillance authority; it still needs Parliament's approval. In October 2025 the EU selected a Czech AI Factory, led from Ostrava, which launched in May 2026.",
      glance: { firstStrategy: "2019", latestStrategy: "2024 (NAIS 2030)", newestBody: "ČTÚ proposed as lead AI Act authority", newestBodyDate: "2025" },
      stats: { population: { v: 10886878, year: 2025 }, gdpPerCapita: { v: 35917, year: 2025 }, internet: { v: 87.7, year: 2024 } },
      oxford: { rank: 32, scores: [81.0, 58.61, 74.14, 69.33, 54.04, 67.74] },
      msAdoption: { h1_2025: 26.0, h2_2025: 27.8, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Infrastructure", date: "2025-10",
          text: "In October 2025 the EuroHPC Joint Undertaking selected the Czech AI Factory (CZAI), led by VSB – Technical University of Ostrava with the IT4Innovations supercomputing centre. It was officially launched in Ostrava on 12 May 2026.",
          level: "verified",
          sources: [
            S("Radio Prague International - Czechia to build AI factory and supercomputer in Ostrava", "https://english.radio.cz/node/8865429"),
            S("EuroHPC JU - Czechia", "https://www.eurohpc-ju.europa.eu/czechia_en"),
            S("CIIRC CTU - Czech AI Factory launches", "https://www.ciirc.cvut.cz/en/czech-ai-factory-launches-czech-republic-offers-its-own-ai-services-and-supercomputing-capacity/"),
          ],
        },
        {
          topic: "Regulation", date: "2025",
          text: "A minimal draft act implementing the EU AI Act would make the Czech Telecommunication Office (ČTÚ) the main market-surveillance authority and single point of contact, with the data protection office and the central bank in their fields. Adoption was expected in 2026.",
          level: "corroborated",
          sources: [
            S("CMS - AI regulation scanner: Czech Republic", "https://cms.law/en/int/expert-guides/ai-regulation-scanner/czech-republic"),
            S("Dostupný advokát - The Czech draft law on AI", "https://dostupnyadvokat.cz/en/blog/the-czech-draft-law-on-artificial-intelligence-ai-what-will-it-bring-and-how-to-prepare-for-it"),
          ],
        },
        {
          topic: "Strategy", date: "2024-07",
          text: "In July 2024 the government approved the National AI Strategy of the Czech Republic 2030 (NAIS 2030), drafted by the Ministry of Industry and Trade, setting priorities to 2030 across seven areas.",
          level: "single",
          sources: [
            S("CzechTrade - Government approved the National AI Strategy 2030 (26 Jul 2024)", "https://www.czechtradeoffices.com/qa/news/czechia-as-a-technological-leader-in-ai,-government-approved-the-national-ai-strategy-2030"),
          ],
        },
        {
          topic: "Strategy", date: "2019-05",
          text: "Czechia released its first National AI Strategy in May 2019, building on its Innovation Strategy 2019–2030.",
          level: "single",
          sources: [
            S("EC AI Watch - Czech Republic AI strategy report", "https://ai-watch.ec.europa.eu/countries/czech-republic/czech-republic-ai-strategy-report_en"),
          ],
        },
      ],
      news: [
        {
          date: "2026-05-12", title: "Czech AI Factory launches in Ostrava",
          summary: "The EuroHPC-selected AI Factory, led by VSB – Technical University of Ostrava, opened to offer AI services and supercomputing capacity.",
          level: "corroborated",
          sources: [
            S("CIIRC CTU", "https://www.ciirc.cvut.cz/en/czech-ai-factory-launches-czech-republic-offers-its-own-ai-services-and-supercomputing-capacity/"),
            S("CTU news", "https://aktualne.cvut.cz/en/press-reports/20260513-czech-ai-factory-launches-czechia-introduces-its-own-ai-services-and"),
          ],
        },
        {
          date: "2025", title: "Draft AI Act implementing law names ČTÚ as lead regulator",
          summary: "The draft names ČTÚ as lead AI regulator and creates a legal basis for a regulatory sandbox. It awaits Parliament.",
          level: "corroborated",
          sources: [
            S("CMS", "https://cms.law/en/int/expert-guides/ai-regulation-scanner/czech-republic"),
            S("Dostupný advokát", "https://dostupnyadvokat.cz/en/blog/the-czech-draft-law-on-artificial-intelligence-ai-what-will-it-bring-and-how-to-prepare-for-it"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ HUNGARY
    {
      id: "hu", name: "Hungary", flag: "🇭🇺", region: "Central Europe (EU)", group: "Europe", geo: [19.04, 47.5], isoN: "348",
      stance: "Early implementer: AI Act authorities set in law since December 2025",
      summary:
        "Hungary adopted a National AI Strategy for 2020–2030 in 2020. Act LXXV of 2025, which implements the EU AI Act, took effect on 1 December 2025, making Hungary one of the first member states with its AI Act authorities set in law. It also created a Hungarian AI Council to give strategic guidance.",
      glance: { firstStrategy: "2020", latestStrategy: "2020 (National AI Strategy 2020–2030)", newestBody: "Hungarian AI Council (Act LXXV of 2025)", newestBodyDate: "2025-12-01" },
      stats: { population: { v: 9514251, year: 2025 }, gdpPerCapita: { v: 25907, year: 2025 }, internet: { v: 93.8, year: 2024 } },
      oxford: { rank: 35, scores: [77.0, 56.02, 82.31, 82.61, 45.24, 54.17] },
      msAdoption: { h1_2025: 27.9, h2_2025: 29.8, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2025-12-01",
          text: "Act LXXV of 2025, implementing the EU AI Act, took effect on 1 December 2025. It sets up Hungary's market-surveillance and notification framework and a single point of contact, and creates the Hungarian Artificial Intelligence Council to give strategic guidance.",
          level: "corroborated",
          sources: [
            S("CADE - Hungary's AI implementation law enters into force", "https://cadeproject.org/updates/hungarys-ai-implementation-law-enters-into-force/"),
            S("Grant Thornton Hungary - New AI authorities on the horizon", "https://grantthornton.hu/en/news/what-should-we-do-about-ai-now-new-authorities-on-the-horizon"),
          ],
        },
        {
          topic: "Strategy", date: "2020-09",
          text: "In September 2020 the government published Hungary's National AI Strategy for 2020–2030.",
          level: "single",
          sources: [
            S("EC AI Watch - Hungary AI strategy report", "https://ai-watch.ec.europa.eu/countries/hungary/hungary-ai-strategy-report_en"),
          ],
        },
      ],
      news: [
        {
          date: "2025-12-01", title: "Hungary's AI Act implementation law takes effect",
          summary: "Act LXXV of 2025 set up national supervision, a single point of contact and the Hungarian AI Council.",
          level: "corroborated",
          sources: [
            S("CADE", "https://cadeproject.org/updates/hungarys-ai-implementation-law-enters-into-force/"),
            S("Grant Thornton Hungary", "https://grantthornton.hu/en/news/what-should-we-do-about-ai-now-new-authorities-on-the-horizon"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ CROATIA
    {
      id: "hr", name: "Croatia", flag: "🇭🇷", region: "Southern Europe (EU)", group: "Europe", geo: [15.98, 45.81], isoN: "191",
      stance: "Late mover: no finalised AI strategy, with a plan to 2032 awaiting adoption",
      summary:
        "Croatia has no finalised national AI strategy. Its AI policy runs through the Digital Croatia Strategy 2032 while the government drafts a National Plan for the Development of AI to 2032, with an action plan for 2026–2028.",
      glance: { firstStrategy: "—", latestStrategy: "Draft National AI Plan to 2032", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 3876200, year: 2025 }, gdpPerCapita: { v: 27104, year: 2025 }, internet: { v: 83.6, year: 2024 } },
      oxford: { rank: 72, scores: [34.5, 52.04, 70.64, 71.67, 29.92, 45.04] },
      msAdoption: { h1_2025: 21.8, h2_2025: 23.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026",
          text: "Croatia is preparing a National Plan for the Development of AI to 2032, with an action plan for 2026–2028. In 2026 Prime Minister Andrej Plenković said the government would adopt it soon.",
          level: "corroborated",
          sources: [
            S("Ministry of Justice, Administration and Digital Transformation - StartAI workshop towards a strategic framework", "https://mpudt.gov.hr/news-25399/workshop-startai-a-step-towards-a-strategic-framework-held-in-zagreb/30131"),
            S("HRT Glas Hrvatske - Croatia keeps pace with Europe on digitalization, PM tells council", "https://glashrvatske.hrt.hr/en/economy/croatia-keeps-pace-with-europe-on-digitalization-pm-tells-council-12559228"),
          ],
        },
        {
          topic: "Strategy", date: "2025-10",
          text: "An OECD country note in October 2025 found Croatia had no finalised, officially published national AI strategy and was relying on the Digital Croatia Strategy 2032.",
          level: "single",
          sources: [
            S("OECD - Croatia country note, EU Coordinated Plan on AI (Oct 2025, PDF)", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-1-country-notes_b0385317/croatia_5665ea22/38d8145c-en.pdf"),
          ],
        },
      ],
      news: [
      ],
    },

    // ------------------------------------------------------------------ SLOVAKIA
    {
      id: "sk", name: "Slovakia", flag: "🇸🇰", region: "Central Europe (EU)", group: "Europe", geo: [17.11, 48.15], isoN: "703",
      stance: "Building institutions: an AI plenipotentiary, a digital and AI council and the Perun supercomputer, while its AI Act law is finalised",
      summary:
        "Slovakia's AI policy sits within its Digital Transformation Strategy 2030. A 2025 government decree created an advisory office to coordinate national AI policy, and in 2026 a new Government Council for Digital Transformation and AI was set up. The national supercomputer Perun, suited to training AI models, went into full operation on 31 March 2026. A dedicated law on AI Act supervision was still going through the legislative process in 2026.",
      glance: { firstStrategy: "2019 (Digital Transformation Strategy 2030)", latestStrategy: "2019 (Digital Transformation Strategy 2030)", newestBody: "Government Council for Digital Transformation and AI", newestBodyDate: "2026" },
      stats: { population: { v: 5413813, year: 2025 }, gdpPerCapita: { v: 28544, year: 2025 }, internet: { v: 89.8, year: 2024 } },
      oxford: { rank: 73, scores: [19.0, 55.8, 72.5, 62.12, 31.39, 46.62] },
      msAdoption: { h1_2025: 22.1, h2_2025: 23.8, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Infrastructure", date: "2026-03-31",
          text: "The national supercomputer Perun went into full operation at the Slovak Academy of Sciences on 31 March 2026. It combines two computing systems and is designed for AI model training as well as simulation.",
          level: "verified",
          sources: [
            S("Slovak Academy of Sciences - PERUN supercomputer launched into production (31 Mar 2026)", "https://www.sav.sk/?lang=en&doc=services-news&source_no=20&news_no=13525"),
            S("TASR - Perun supercomputer launched into full operation", "https://www.tasr.sk/tasr-clanok/TASR:2026033100000448"),
            S("TouchIT - Superpočítač PERUN spustený do ostrej prevádzky", "https://touchit.sk/superpocitac-perun-bol-spusteny-do-ostrej-prevadzky/858225/"),
            S("TU Košice - Perun supercomputer info", "https://www.hpc.tuke.sk/en/perun-supercomputer-info"),
          ],
          note: "Sources give different performance figures (from 14.5 to over 25 petaflops), so none is quoted here.",
        },
        {
          topic: "Institutions", date: "2026",
          text: "The government set up a Government Council for Digital Transformation and AI, an advisory and coordinating body.",
          level: "single",
          sources: [
            S("Bird & Bird - AI Regulatory Horizon Tracker: Slovakia (Jul 2026)", "https://www.twobirds.com/en/capabilities/artificial-intelligence/ai-legal-services/ai-regulatory-horizon-tracker/slovakia"),
          ],
        },
        {
          topic: "Institutions", date: "2025",
          text: "A 2025 government decree created an advisory office to coordinate national AI policy and represent Slovakia in EU and international AI forums.",
          level: "single",
          sources: [
            S("Bird & Bird - AI Regulatory Horizon Tracker: Slovakia (Jul 2026)", "https://www.twobirds.com/en/capabilities/artificial-intelligence/ai-legal-services/ai-regulatory-horizon-tracker/slovakia"),
          ],
        },
        {
          topic: "Strategy", date: "2019",
          text: "Slovakia's Strategy of the Digital Transformation of Slovakia 2030, approved in 2019, set out the country's approach to AI, backed by an action plan.",
          level: "corroborated",
          sources: [
            S("EC AI Watch - Slovakia AI strategy report", "https://ai-watch.ec.europa.eu/countries/slovakia/slovakia-ai-strategy-report_en"),
            S("OECD - Slovak Republic country note, EU Coordinated Plan on AI (Oct 2025, PDF)", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/10/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-1-country-notes_b0385317/slovak-republic_02443328/5b824a40-en.pdf"),
          ],
        },
      ],
      news: [
        {
          date: "2026-03-31", title: "Perun supercomputer enters full operation",
          summary: "The Slovak Academy of Sciences put Perun into production; it is built for AI model training and serves as a national entry point to EuroHPC AI services.",
          level: "corroborated",
          sources: [
            S("Slovak Academy of Sciences", "https://www.sav.sk/?lang=en&doc=services-news&source_no=20&news_no=13525"),
            S("TASR", "https://www.tasr.sk/tasr-clanok/TASR:2026033100000448"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BULGARIA
    {
      id: "bg", name: "Bulgaria", flag: "🇧🇬", region: "Southeastern Europe (EU)", group: "Europe", geo: [23.32, 42.7], isoN: "100",
      stance: "Research-led: INSAIT, the BgGPT model and an EU AI Factory, but low business adoption",
      summary:
        "Bulgaria's AI story centres on INSAIT, a state-backed research institute in Sofia that launched BgGPT, an open Bulgarian-language model, in 2024. In March 2025 Bulgaria won one of six new EU AI Factories: BRAIN++, a €90 million project at Sofia Tech Park built around a new Discoverer++ supercomputer. Business uptake lags: 8.55% of Bulgarian firms used AI in 2025, against about 20% across the EU.",
      glance: { firstStrategy: "2020", latestStrategy: "2020 (national AI strategy)", newestBody: "BRAIN++ AI Factory (selected)", newestBodyDate: "2025-03-12" },
      stats: { population: { v: 6433302, year: 2025 }, gdpPerCapita: { v: 20328, year: 2025 }, internet: { v: 82.4, year: 2024 } },
      oxford: { rank: 59, scores: [65.0, 53.93, 71.25, 64.66, 39.78, 62.86] },
      msAdoption: { h1_2025: 25.4, h2_2025: 27.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Infrastructure", date: "2025-03-12",
          text: "On 12 March 2025 Bulgaria was selected to host one of six new EU AI Factories. BRAIN++, a €90 million project by Sofia Tech Park and INSAIT, centres on a new AI-optimised Discoverer++ supercomputer, with construction starting in 2026.",
          level: "verified",
          sources: [
            S("Ministry of Innovation and Growth - Bulgaria will be home to one of six new EU AI factories", "https://www.mig.government.bg/all-news/sofia-tech-park-and-insait-are-selected-for-e90-million-eu-project-bulgaria-will-be-home-to-one-of-six-new-eu-ai-factories/?lang=en"),
            S("BTA - Bulgaria to host one of six new AI factories across Europe", "https://www.bta.bg/en/news/bulgaria/850246-bulgaria-to-host-one-of-six-new-ai-factories-across-europe"),
            S("EuroHPC JU - Selects additional AI Factories (12 Mar 2025)", "https://eurohpc-ju.europa.eu/eurohpc-ju-selects-additional-ai-factories-strengthen-europes-ai-leadership-2025-03-12_en"),
          ],
        },
        {
          topic: "Adoption", date: "2025",
          text: "In 2025, 8.55% of Bulgarian enterprises used AI, compared with 19.95% across the EU.",
          level: "single",
          sources: [
            S("AI Council at the Bulgarian Chamber of Commerce - AI and digitalisation in Bulgaria: a 2026 analysis", "https://ai.bcci.bg/en/news/ai-and-digitalisation-in-bulgaria-2026"),
          ],
          note: "The analysis draws on Eurostat data.",
        },
        {
          topic: "Strategy", date: "2020-12",
          text: "The Bulgarian government published its national AI strategy in December 2020, drafted by the Ministry of Transport, IT and Communications from a framework by the Bulgarian Academy of Sciences.",
          level: "single",
          sources: [
            S("EC AI Watch - Bulgaria AI strategy report", "https://ai-watch.ec.europa.eu/countries/bulgaria/bulgaria-ai-strategy-report_en"),
          ],
        },
        {
          topic: "Research", date: "2024-03",
          text: "INSAIT announced BgGPT, an open Bulgarian-language AI model with 7 billion parameters, in January 2024 and made it free for public use in March 2024.",
          level: "verified",
          sources: [
            S("INSAIT - INSAIT announced BgGPT", "https://insait.ai/insait-announced-bggpt/"),
            S("BTA - Sofia institute presents first Bulgarian-language open-source AI", "https://bta.bg/en/news/601153-sofia-s-computer-science-institute-presents-first-bulgarian-language-open-source"),
            S("Economic.bg - INSAIT presented BgGPT", "https://www.economic.bg/en/a/view/insait-presented-bg-gpt-the-first-bulgarian-language-open-artificial-intelligence-model"),
            S("BNR News - INSAIT launches BgGPT", "https://bnrnews.bg/en/post/103560/insait-launches-bggpt-freely-accessible-ai-in-bulgarian"),
          ],
        },
      ],
      news: [
        {
          date: "2025-03-12", title: "Bulgaria wins EU AI Factory",
          summary: "BRAIN++ at Sofia Tech Park, a €90 million project with INSAIT, will serve state bodies, researchers and companies.",
          level: "corroborated",
          sources: [
            S("Ministry of Innovation and Growth", "https://www.mig.government.bg/all-news/sofia-tech-park-and-insait-are-selected-for-e90-million-eu-project-bulgaria-will-be-home-to-one-of-six-new-eu-ai-factories/?lang=en"),
            S("BTA", "https://www.bta.bg/en/news/bulgaria/850246-bulgaria-to-host-one-of-six-new-ai-factories-across-europe"),
            S("EuroHPC JU", "https://eurohpc-ju.europa.eu/eurohpc-ju-selects-additional-ai-factories-strengthen-europes-ai-leadership-2025-03-12_en"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SERBIA
    {
      id: "rs", name: "Serbia", flag: "🇷🇸", region: "Western Balkans", group: "Europe", geo: [20.46, 44.79], isoN: "688",
      stance: "Regional early mover: a second AI strategy to 2030, with a first AI law modelled on the EU AI Act in drafting",
      summary:
        "Serbia adopted its first AI strategy in 2019, one of the first in Southeast Europe, and a second Strategy for the Development of AI for 2025–2030 in January 2025. It has no binding AI law. A working group under the Ministry of Science is drafting one aligned with the EU AI Act, which officials hope to pass by the end of 2026.",
      glance: { firstStrategy: "2019", latestStrategy: "2025 (Strategy for AI Development 2025–2030)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 6549143, year: 2025 }, gdpPerCapita: { v: 15262, year: 2025 }, internet: { v: 87.7, year: 2024 } },
      oxford: { rank: 40, scores: [100.0, 52.75, 78.64, 83.92, 35.78, 44.42] },
      msAdoption: { h1_2025: 19.7, h2_2025: 21.5, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2026",
          text: "Serbia has no binding AI law. A working group under the Ministry of Science, Technological Development and Innovation is drafting one aligned with the EU AI Act, and NALED, a member of the group, said Serbia could have the law by the end of 2026.",
          level: "corroborated",
          sources: [
            S("NALED - Serbia gets a law on AI", "https://naled.rs/en/vest-srbija-dobija-zakon-o-vestackoj-inteligenciji-balans-izmedju-inovacija-i-odgovornosti-12196"),
            S("N1 - NALED: Serbia to get law on AI this year", "https://n1info.rs/english/news/naled-serbia-to-get-law-on-ai-this-year/"),
            S("TerraLex - Serbia AI guide (Gecić Law, 2026)", "https://www.terralex.org/insights-cross-border-guides/terralex-ai-guide/serbia-ai-guide"),
          ],
        },
        {
          topic: "Strategy", date: "2025-01-10",
          text: "In January 2025 the government adopted the Strategy for the Development of AI for 2025–2030, on the proposal of the Ministry of Science. It covers legislation, AI education and skills, research and innovation, infrastructure and public-sector use.",
          level: "verified",
          sources: [
            S("ai.gov.rs - Serbia adopts AI strategy 2025–2030 (10 Jan 2025)", "https://ai.gov.rs/vest/en/1296/serbia-adopts-strategy-for-the-development-of-artificial-intelligence-for-the-period-20252030.php"),
            S("Western Balkans Info Hub - Serbia adopts AI strategy 2025–2030", "https://westernbalkans-infohub.eu/news/serbia-adopts-strategy-for-the-development-of-artificial-intelligence-for-the-period-2025-2030/"),
            S("TerraLex - Serbia AI guide (Gecić Law, 2026)", "https://www.terralex.org/insights-cross-border-guides/terralex-ai-guide/serbia-ai-guide"),
          ],
        },
        {
          topic: "Strategy", date: "2019",
          text: "Serbia adopted its first AI strategy, for 2020–2025, in 2019.",
          level: "verified",
          sources: [
            S("ai.gov.rs - Serbia adopts AI strategy 2025–2030", "https://ai.gov.rs/vest/en/1296/serbia-adopts-strategy-for-the-development-of-artificial-intelligence-for-the-period-20252030.php"),
            S("Western Balkans Info Hub", "https://westernbalkans-infohub.eu/news/serbia-adopts-strategy-for-the-development-of-artificial-intelligence-for-the-period-2025-2030/"),
            S("TerraLex - Serbia AI guide", "https://www.terralex.org/insights-cross-border-guides/terralex-ai-guide/serbia-ai-guide"),
          ],
        },
      ],
      news: [
        {
          date: "2025-01-10", title: "Serbia adopts AI strategy to 2030",
          summary: "The new strategy succeeds the 2019 one and puts legislation, skills and public-sector AI at the centre.",
          level: "corroborated",
          sources: [
            S("ai.gov.rs", "https://ai.gov.rs/vest/en/1296/serbia-adopts-strategy-for-the-development-of-artificial-intelligence-for-the-period-20252030.php"),
            S("Western Balkans Info Hub", "https://westernbalkans-infohub.eu/news/serbia-adopts-strategy-for-the-development-of-artificial-intelligence-for-the-period-2025-2030/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MONTENEGRO
    {
      id: "me", name: "Montenegro", flag: "🇲🇪", region: "Western Balkans", group: "Europe", geo: [19.26, 42.44], isoN: "499",
      stance: "Assessment stage: a UNDP readiness baseline, no adopted AI strategy, and a first AI server for the courts",
      summary:
        "Montenegro has no adopted national AI strategy. A 2024 UNDP AI Landscape Assessment put the government at an early 'systematic' stage as a user of AI (2.4 out of 5) and was meant to underpin a first strategy. Officials aimed for one by the end of 2025, but a 2026–2030 strategy was still in preparation in 2026. In March 2026 the judiciary acquired the country's first AI server, funded by the EU.",
      glance: { firstStrategy: "—", latestStrategy: "2026–2030 strategy in preparation", newestBody: "AI directorate in Ministry of Public Administration", newestBodyDate: "" },
      stats: { population: { v: 623129, year: 2025 }, gdpPerCapita: { v: 14817, year: 2025 }, internet: { v: 88.9, year: 2024 } },
      oxford: { rank: 100, scores: [27.0, 40.29, 53.75, 52.29, 26.9, 44.97] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-03-23",
          text: "Montenegro's judiciary acquired the country's first AI server, an NVIDIA DGX H200 worth €394,079, funded by the EU through a UNOPS project with the Ministry of Justice. It is meant for case-law analysis and case management.",
          level: "corroborated",
          sources: [
            S("UNOPS - Modernisation of the Montenegrin judiciary with AI (23 Mar 2026, PDF)", "https://content.unops.org/documents/libraries/press-releases/2026/en/Press-release-Modernisation-of-the-Montenegrin-Judiciary-with-the-Use-of-Artificial-Intelligence.pdf"),
            S("Human Rights Action - Brief news (Apr 2026)", "https://www.hraction.org/2026/04/04/n18-bn-brief-news/?lang=en"),
          ],
          note: "The price comes from the UNOPS release only.",
        },
        {
          topic: "Strategy", date: "2025-05",
          text: "In May 2025 a Ministry of Public Administration official said the government was pushing for a national AI strategy by the end of 2025. In August 2026 a 2026–2030 strategy was still in preparation, and the ministry had set up an AI directorate.",
          level: "corroborated",
          sources: [
            S("Balkan Insight - Amid concern over AI abuse in Montenegro, lawmakers play catch-up (May 2025)", "https://balkaninsight.com/2025/05/29/amid-concern-over-ai-abuse-in-montenegro-lawmakers-play-catch-up/bi/"),
            S("Rona Legal - AI law in Montenegro: what applies today (Aug 2026)", "https://www.ronalegal.com/en/blog/ai-law-montenegro-what-applies-today"),
          ],
        },
        {
          topic: "Readiness", date: "2024",
          text: "A 2024 UNDP AI Landscape Assessment found Montenegro's government at the 'systematic' phase as a user of AI, scoring 2.4 out of 5, and noted the country had no national AI strategy.",
          level: "verified",
          sources: [
            S("UNDP - AI Landscape Assessment: Montenegro (PDF)", "https://www.undp.org/sites/g/files/zskgke326/files/2025-05/eng_undp-aila_montenegro.pdf"),
            S("Digital Watch - AILA Montenegro 2024 report", "https://dig.watch/resource/the-artificial-intelligence-landscape-assessment-aila-montenegro-2024-report"),
            S("Rona Legal - AI law in Montenegro (Aug 2026)", "https://www.ronalegal.com/en/blog/ai-law-montenegro-what-applies-today"),
          ],
        },
      ],
      news: [
        {
          date: "2026-03-23", title: "Judiciary gets Montenegro's first AI server",
          summary: "The EU-funded NVIDIA DGX H200 will support case-law analysis and case management.",
          level: "corroborated",
          sources: [
            S("UNOPS", "https://content.unops.org/documents/libraries/press-releases/2026/en/Press-release-Modernisation-of-the-Montenegrin-Judiciary-with-the-Use-of-Artificial-Intelligence.pdf"),
            S("Human Rights Action", "https://www.hraction.org/2026/04/04/n18-bn-brief-news/?lang=en"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ AZERBAIJAN
    {
      id: "az", name: "Azerbaijan", flag: "🇦🇿", region: "South Caucasus", group: "Europe", geo: [49.87, 40.41], isoN: "031",
      stance: "Top-down: a presidential AI strategy for 2025–2028 and a Digital Development Council chaired by the First Vice President",
      summary:
        "President Ilham Aliyev approved Azerbaijan's AI Strategy for 2025–2028 by decree on 19 March 2025, with priority sectors including agriculture, healthcare, transport and education. In February 2026 another decree created a Digital Development Council, chaired by First Vice President Mehriban Aliyeva, to coordinate policy on digitalisation, e-government, AI and innovation.",
      glance: { firstStrategy: "2025 (AI Strategy 2025–2028)", latestStrategy: "2025 (AI Strategy 2025–2028)", newestBody: "Digital Development Council", newestBodyDate: "2026-02-27" },
      stats: { population: { v: 10246996, year: 2025 }, gdpPerCapita: { v: 7411, year: 2025 }, internet: { v: 90.8, year: 2025 } },
      oxford: { rank: 69, scores: [53.5, 51.45, 60.0, 66.97, 36.08, 56.35] },
      msAdoption: { h1_2025: 14.2, h2_2025: 15.5, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Institutions", date: "2026-02-27",
          text: "On 27 February 2026 President Aliyev signed a decree creating the Digital Development Council to oversee digitalisation, e-government, AI and innovation. First Vice President Mehriban Aliyeva chairs it, and it reports to the President once a year.",
          level: "verified",
          sources: [
            S("Tech.az - Digital Development Council established (27 Feb 2026)", "https://tech.az/en/posts/digital-development-council-established-chaired-by-mehriban-aliyeva-6603"),
            S("AZ-Netwatch (Meydan TV) - Azerbaijan creates new Digital Development Council", "https://www.az-netwatch.org/news/azerbaijan-creates-new-digital-development-council/"),
            S("ICT.az - Digital Development Council", "https://ict.az/en/news/7584"),
          ],
        },
        {
          topic: "Strategy", date: "2025-03-19",
          text: "On 19 March 2025 President Aliyev approved the AI Strategy of the Republic of Azerbaijan for 2025–2028 by decree. Priority sectors include agriculture, healthcare, transport and education.",
          level: "verified",
          sources: [
            S("News.az - Azerbaijan approves AI Strategy for 2025–2028 (19 Mar 2025)", "https://news.az/news/azerbaijan-approves-ai-strategy-for-2025-2028"),
            S("Trend.az - Azerbaijan prioritizes its AI strategy (19 Mar 2025)", "https://www.trend.az/azerbaijan/politics/4020812.html"),
            S("UTB - Azerbaijan's AI Strategy for 2025–2028", "https://utb.az/azerbaijans-ai-strategy-for-2025-2028/"),
            S("Digital Watch - AI Strategy of Azerbaijan 2025–2028", "https://dig.watch/resource/the-artificial-intelligence-strategy-of-the-republic-of-azerbaijan-for-2025-2028"),
          ],
        },
      ],
      news: [
        {
          date: "2026-02-27", title: "Azerbaijan creates Digital Development Council",
          summary: "The council, chaired by First Vice President Mehriban Aliyeva, will coordinate digital and AI policy.",
          level: "verified",
          sources: [
            S("Tech.az", "https://tech.az/en/posts/digital-development-council-established-chaired-by-mehriban-aliyeva-6603"),
            S("AZ-Netwatch", "https://www.az-netwatch.org/news/azerbaijan-creates-new-digital-development-council/"),
            S("ICT.az", "https://ict.az/en/news/7584"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ KYRGYZSTAN
    {
      id: "kg", name: "Kyrgyzstan", flag: "🇰🇬", region: "Central Asia", group: "Asia-Pacific", geo: [74.59, 42.87], isoN: "417",
      stance: "Light-touch: AI rules inside a broad Digital Code, with a draft AI ethics regulation out for comment",
      summary:
        "Kyrgyzstan regulates AI through its Digital Code, adopted by Parliament on 18 June 2025 and signed in August 2025, which merges earlier digital laws and includes AI rules. In September 2026 a draft AI ethics regulation was published for comment until 13 October 2026. It would require labels on AI-generated content and keep people responsible for AI errors.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 7343064, year: 2025 }, gdpPerCapita: { v: 3081, year: 2025 }, internet: { v: 92.0, year: 2024 } },
      oxford: { rank: 119, scores: [16.0, 43.94, 30.98, 46.9, 22.15, 34.8] },
      msAdoption: { h1_2025: 7.6, h2_2025: 8.2, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2026-09-28",
          text: "A draft regulation on the Ethics of AI was published on 28 September 2026 for public comment until 13 October 2026. It would require labels on AI-generated text, images, video and audio, and keep developers and users responsible for AI errors.",
          level: "verified",
          sources: [
            S("AKIpress - Kyrgyzstan drafts ethics code for AI (28 Sep 2026)", "https://akipress.com/news:921519"),
            S("Akchabar - Kyrgyzstan proposes new rules for chatbots and neural networks", "https://www.akchabar.kg/en/news/s-vami-govorit-ii-v-kirgizstane-predlagayut-novie-pravila-dlya-chat-botov-i-nejrosetej-dyzizrvsassxpmhh"),
            S("Digital Watch - Kyrgyzstan proposes AI ethics rules (1 Oct 2026)", "https://dig.watch/updates/kyrgyzstan-proposes-ai-ethics-accountability"),
          ],
          note: "Sources disagree on which body issued the draft: AKIpress names the Ministry of Digital Development and Innovative Technologies, while Akchabar says that ministry was abolished in April 2026.",
        },
        {
          topic: "Regulation", date: "2025-08",
          text: "Parliament adopted the Digital Code on 18 June 2025 and President Sadyr Japarov signed it in August 2025. It merges earlier digital laws and includes rules on personal data, digital services, telecoms networks and AI.",
          level: "verified",
          sources: [
            S("24.kg - President Japarov signs Digital Code", "https://24.kg/english/338421_President_of_Kyrgyzstan_Sadyr_Japarov_signs_Digital_Code"),
            S("Caspian Post - Japarov signs Digital Code into law", "https://caspianpost.com/kyrgyzstan/kyrgyzstan-s-president-sadyr-japarov-signs-digital-code-into-law"),
            S("Akchabar - President signed the Digital Code", "https://www.akchabar.kg/en/news/prezident-podpisal-tsifrovoj-kodeks-kak-on-povliyaet-na-zhizn-v-tsifrovom-kirgizstane-ldbzpqudrakifxxc"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-28", title: "Draft AI ethics rules published",
          summary: "The draft requires AI-content labelling and human accountability for AI errors; comments close on 13 October 2026.",
          level: "verified",
          sources: [
            S("AKIpress", "https://akipress.com/news:921519"),
            S("Akchabar", "https://www.akchabar.kg/en/news/s-vami-govorit-ii-v-kirgizstane-predlagayut-novie-pravila-dlya-chat-botov-i-nejrosetej-dyzizrvsassxpmhh"),
            S("Digital Watch", "https://dig.watch/updates/kyrgyzstan-proposes-ai-ethics-accountability"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ LEBANON
    {
      id: "lb", name: "Lebanon", flag: "🇱🇧", region: "Levant", group: "Middle East", geo: [35.5, 33.89], isoN: "422",
      stance: "A first AI minister and ambitious training goals, with the AI ministry itself still awaiting Parliament",
      summary:
        "In February 2025 Lebanon's new government made Kamal Shehadi its first Minister of State for Technology and AI. A bill to create a full Ministry of Technology and AI passed Parliament's IT committee in January 2026 but was sent to joint committees, where a subcommittee began reviewing it in October 2026. In September 2026 the UAE and Lebanon launched an initiative to train one million Lebanese in generative AI.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "Minister of State for Technology and AI", newestBodyDate: "2025-02-08" },
      stats: { population: { v: 5849421, year: 2025 }, gdpPerCapita: { v: 4473, year: 2024 }, internet: { v: 80.6, year: 2024 } },
      oxford: { rank: 117, scores: [42.0, 41.01, 39.38, 18.65, 34.15, 25.67] },
      msAdoption: { h1_2025: 24.8, h2_2025: 25.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Institutions", date: "2026-10-05",
          text: "A bill to create a Ministry of Technology and AI passed Parliament's IT committee in amended form on 13 January 2026, then went to joint committees for further review. A subcommittee began examining it on 5 October 2026.",
          level: "verified",
          sources: [
            S("Economy Middle East - Lebanon pushes AI ministry", "https://economymiddleeast.com/news/lebanon-pushes-ai-ministry-as-adoption-tops-27-percent-strategy-targets-4-billion-gdp-contribution/"),
            S("Daily Beirut - Subcommittee begins review of AI ministry bill (5 Oct 2026)", "https://dailybeirut.com/en/lebanon-news/subcommittee-joint-committees-begins-review-ministry-technology-ai/"),
            S("SMEX - Our thoughts on Lebanon's new AI and technology ministry", "https://smex.org/our-thoughts-on-lebanons-new-ai-and-technology-ministry/"),
          ],
        },
        {
          topic: "Skills", date: "2026-09",
          text: "In September 2026 the UAE and Lebanon launched the 'One Million Lebanese AI Experts' initiative on the sidelines of the UN General Assembly, to train one million people in generative AI and prompt engineering.",
          level: "corroborated",
          sources: [
            S("Arab News - Lebanon banks on mass AI training to rebuild its economy", "https://www.arabnews.com/middle-east/lebanon-banks-on-mass-ai-training-to-rebuild-its-economy-3004043"),
            S("Economy Middle East - Lebanon pushes AI ministry", "https://economymiddleeast.com/news/lebanon-pushes-ai-ministry-as-adoption-tops-27-percent-strategy-targets-4-billion-gdp-contribution/"),
          ],
        },
        {
          topic: "Adoption", date: "2026-09",
          text: "Lebanese leaders say about 27% of Lebanese use AI.",
          level: "corroborated",
          sources: [
            S("Arab News - Lebanon banks on mass AI training", "https://www.arabnews.com/middle-east/lebanon-banks-on-mass-ai-training-to-rebuild-its-economy-3004043"),
            S("Economy Middle East - Lebanon pushes AI ministry as adoption tops 27 percent", "https://economymiddleeast.com/news/lebanon-pushes-ai-ministry-as-adoption-tops-27-percent-strategy-targets-4-billion-gdp-contribution/"),
          ],
          note: "Minister Shehadi and President Joseph Aoun cite this figure; Microsoft's H2 2025 estimate is 25.7%.",
        },
        {
          topic: "Institutions", date: "2025-02-08",
          text: "In February 2025 Kamal Shehadi became Lebanon's first Minister of State for Technology and Artificial Intelligence, alongside the post of Minister of the Displaced, in Nawaf Salam's government.",
          level: "corroborated",
          sources: [
            S("Tahawul Tech - Lebanon appoints its first AI ministry", "https://www.tahawultech.com/news/lebanon-joins-global-tech-race-with-appointment-of-its-first-ministry-of-ai/"),
            S("The National - Lebanon's AI minister says $50m can transform government (Apr 2025)", "https://www.thenationalnews.com/future/technology/2025/04/17/lebanons-ai-minister-says-50m-can-transform-government-and-make-it-more-accountable/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-10-05", title: "Parliament subcommittee reviews AI ministry bill",
          summary: "The subcommittee began going through the bill article by article; review will continue in a later session.",
          level: "single",
          sources: [
            S("Daily Beirut", "https://dailybeirut.com/en/lebanon-news/subcommittee-joint-committees-begins-review-ministry-technology-ai/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ LAOS
    {
      id: "la", name: "Laos", flag: "🇱🇦", region: "Southeast Asia", group: "Asia-Pacific", geo: [102.63, 17.97], isoN: "418",
      stance: "Drafting: a first AI strategy for 2026–2035 under revision, shaped by a UNESCO ethics assessment",
      summary:
        "In January 2026 it presented a UNESCO AI ethics readiness assessment and said its first National AI Strategy would draw on the findings. In April 2026 the technology ministry launched LaoAI, a national AI assistant built into the government's G-Chat messaging platform. In September 2026 the government considered a draft National AI Strategy for 2026–2035 and sent it back for revision.",
      glance: { firstStrategy: "Draft (2026–2035)", latestStrategy: "Draft National AI Strategy 2026–2035", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 7873046, year: 2025 }, gdpPerCapita: { v: 2325, year: 2025 }, internet: { v: 65.6, year: 2024 } },
      oxford: { rank: 125, scores: [19.5, 38.21, 45.17, 18.21, 20.94, 36.76] },
      msAdoption: { h1_2025: 6.0, h2_2025: 6.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026-09-23",
          text: "At its September 2026 monthly meeting the government agreed in principle to a draft National AI Strategy for 2026–2035, but told the Ministry of Technology and Communications to revise it with more focus on infrastructure, databases and personnel.",
          level: "single",
          sources: [
            S("Asia News Network (Vientiane Times) - Laos advances 10-year strategies for AI and satellites", "https://asianews.network/laos-government-advances-10-year-strategies-for-ai-satellite-development/"),
            S("The Star (Vientiane Times) - Laos advances 10-year strategies for AI", "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/24/laos-advances-10-year-strategies-for-ai-and-satellite-development"),
          ],
          note: "Both links carry the same Vientiane Times report, so they count as one source.",
        },
        {
          topic: "Public sector", date: "2026-04-06",
          text: "On 6 April 2026 the ministry launched G-Chat v2, the government's official messaging platform, with a built-in national AI assistant called LaoAI.",
          level: "single",
          sources: [
            S("KPL Lao News Agency - Laos unveils G-Chat v2 and LaoAI", "https://kpl.gov.la/En/detail.aspx/detail.aspx?id=97734"),
          ],
        },
        {
          topic: "Readiness", date: "2026-01-27",
          text: "On 27 January 2026 Laos presented its UNESCO AI Ethics Readiness Assessment (RAM) report and said the findings would guide its first National AI Strategy.",
          level: "verified",
          sources: [
            S("KPL - Lao PDR sets course for National AI Strategy guided by UNESCO ethics framework", "https://kpl.gov.la/EN/detail.aspx?id=96675"),
            S("US-ASEAN Business Council - Laos advances AI governance (Mar 2026)", "https://www.usasean.org/article/laos-advances-ai-governance-and-national-health-ai-initiatives"),
            S("Laotian Times - Laos develops national AI strategy guided by UNESCO framework", "https://laotiantimes.com/2026/01/29/laos-develops-national-ai-strategy-guided-by-unesco-ethics-framework/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-23", title: "Government sends draft AI strategy back for revision",
          summary: "The cabinet backed the 2026–2035 draft in principle but asked for clearer priorities and investment terms.",
          level: "single",
          sources: [
            S("Asia News Network (Vientiane Times)", "https://asianews.network/laos-government-advances-10-year-strategies-for-ai-satellite-development/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ FIJI
    {
      id: "fj", name: "Fiji", flag: "🇫🇯", region: "Pacific", group: "Asia-Pacific", geo: [178.44, -18.14], isoN: "242",
      stance: "Early stage: AI handled within digital and cybersecurity policy, with no AI law",
      summary:
        "Fiji has no AI law or standalone AI strategy. In March 2024 the communications minister said an AI governance framework would be built into the government's cybersecurity and national digital strategy work, and in October 2024 the Ministry of Trade pledged more AI hubs. In September 2026 Deputy Prime Minister Manoa Kamikamica said Fiji had begun a framework against misinformation, driven partly by AI.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 933154, year: 2025 }, gdpPerCapita: { v: 6642, year: 2025 }, internet: { v: 74.7, year: 2024 } },
      oxford: { rank: 108, scores: [15.5, 38.16, 27.27, 65.94, 31.16, 44.0] },
      msAdoption: null,
      facts: [
        {
          topic: "Information", date: "2026-09-24",
          text: "Deputy Prime Minister Manoa Kamikamica said Fiji had started work on a framework to tackle misinformation and disinformation, with AI one of the drivers.",
          level: "single",
          sources: [
            S("PINA - 'We cannot over-manage and over-regulate the media' (24 Sep 2026)", "https://pina.com.fj/2026/09/24/we-cannot-over-manage-and-over-regulate-the-media-fiji-deputy-pm-kamikamica/"),
          ],
        },
        {
          topic: "Ecosystem", date: "2024-10-29",
          text: "The Ministry of Trade said it would set up more AI hubs to make Fiji a centre for innovation.",
          level: "single",
          sources: [
            S("FBC News - Ministry of Trade to establish more AI hubs (29 Oct 2024)", "https://www.fbcnews.com.fj/news/ministry-of-trade-to-establish-more-ai-hubs/"),
          ],
        },
        {
          topic: "Strategy", date: "2024-03-16",
          text: "Deputy Prime Minister and Communications Minister Manoa Kamikamica said the government was setting up an AI governance framework as part of its cybersecurity and national digital strategy work.",
          level: "single",
          sources: [
            S("FBC News - Fiji developing AI governance framework (16 Mar 2024)", "https://www.fbcnews.com.fj/news/fiji-developing-ai-governance-framework/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-10-15", title: "Fiji pushes standards for responsible AI",
          summary: "At World Standards Day, Deputy Prime Minister Manoa Kamikamica called for stronger AI governance standards. Fiji is one of six Pacific Island countries in an Australian-funded responsible-AI project run by Standards Australia with CSIRO.",
          level: "single",
          sources: [
            { t: "FBC News - Fiji moves to strengthen responsible AI use", u: "https://www.fbcnews.com.fj/news/fiji-moves-to-strengthen-responsible-ai-use/" },
          ],
        },
        {
          date: "2026-09-24", title: "Fiji starts framework on misinformation, citing AI",
          summary: "The Deputy Prime Minister said AI had added urgency to tackling misinformation and disinformation.",
          level: "single",
          sources: [
            S("PINA", "https://pina.com.fj/2026/09/24/we-cannot-over-manage-and-over-regulate-the-media-fiji-deputy-pm-kamikamica/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MALDIVES
    {
      id: "mv", name: "Maldives", flag: "🇲🇻", region: "South Asia", group: "Asia-Pacific", geo: [73.51, 4.18], isoN: "462",
      stance: "Plan announced, not yet adopted: an AI masterplan since 2024, a UNESCO readiness baseline and a new national AI lab",
      summary:
        "In October 2024 President Mohamed Muizzu, on the Cabinet's advice, ordered a national AI masterplan for economic development, including a legal framework for AI; it is still being drafted. In mid-2025 the Maldives published a UNESCO AI Readiness Assessment. In May 2026 MindCo and the Bank of Maldives launched a National AI and Data Competency Center, the Maldives AI Lab.",
      glance: { firstStrategy: "Masterplan ordered 2024 (draft)", latestStrategy: "National AI Masterplan (draft)", newestBody: "Maldives AI Lab", newestBodyDate: "2026-05-18" },
      stats: { population: { v: 529676, year: 2025 }, gdpPerCapita: { v: 14615, year: 2025 }, internet: { v: 85.2, year: 2024 } },
      oxford: { rank: 143, scores: [8.0, 39.43, 22.43, 29.58, 18.83, 32.24] },
      msAdoption: null,
      facts: [
        {
          topic: "Ecosystem", date: "2026-05-18",
          text: "On 18 May 2026 Minister Ali Ihusaan launched the National AI and Data Competency Center (Maldives AI Lab), set up by MindCo and the Bank of Maldives under the government's Maldives 2.0 agenda.",
          level: "corroborated",
          sources: [
            S("The Standard - 'The future of AI in Maldives must be led by Maldivians' (18 May 2026)", "https://standard.mv/the-future-of-ai-in-maldives-must-be-led-by-maldivians-says-minister-ihusaan/"),
            S("The Edition - Maldives AI Lab officially launched", "https://edition.mv/business/51053"),
          ],
        },
        {
          topic: "Readiness", date: "2025-08",
          text: "In mid-2025 the Maldives published its first national AI Readiness Assessment, produced with UNESCO. It found gaps in fixed broadband, digital literacy outside Greater Malé and cybersecurity.",
          level: "single",
          sources: [
            S("Corporate Maldives - UNESCO report highlights gaps in Maldives' AI readiness", "https://corporatemaldives.com/unesco-report-highlights-opportunities-and-gaps-in-maldives-ai-readiness/"),
          ],
        },
        {
          topic: "Strategy", date: "2024-10",
          text: "In October 2024 President Muizzu, on the Cabinet's recommendation, ordered a masterplan for using AI in economic development. It is to include a legal framework for AI, with the homeland security and technology ministry and the economic development ministry leading.",
          level: "corroborated",
          sources: [
            S("PSM News - President Muizzu announces masterplan for AI", "https://psmnews.mv/en/145979"),
            S("Maldives Voice - Maldives to develop AI strategy for economic growth", "https://maldivesvoice.mv/1488"),
            S("Atoll Times - AI masterplan", "https://atolltimes.mv/post/business/10172"),
          ],
        },
      ],
      news: [
        {
          date: "2026-05-18", title: "Maldives AI Lab launched",
          summary: "MindCo and the Bank of Maldives opened a national AI and data center to build AI services for government and key industries.",
          level: "corroborated",
          sources: [
            S("The Standard", "https://standard.mv/the-future-of-ai-in-maldives-must-be-led-by-maldivians-says-minister-ihusaan/"),
            S("The Edition", "https://edition.mv/business/51053"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ NAMIBIA
    {
      id: "na", name: "Namibia", flag: "🇳🇦", region: "Southern Africa", group: "Africa", geo: [17.08, -22.56], isoN: "516",
      stance: "Capacity first: a national AI institute opened in 2026, with a strategy and an AI bill still in the works",
      summary:
        "Namibia's research commission, NCRST, leads work on a national AI strategy. On 23 September 2026 it opened a National AI Institute in Windhoek, with centres matched to gaps found in the country's 2025 AI readiness assessment. An AI bill has been in drafting since 2025, alongside data protection and cybercrime bills.",
      glance: { firstStrategy: "In development", latestStrategy: "National AI Strategy in development (NCRST)", newestBody: "National AI Institute", newestBodyDate: "2026-09-23" },
      stats: { population: { v: 3092816, year: 2025 }, gdpPerCapita: { v: 4876, year: 2025 }, internet: { v: 64.9, year: 2024 } },
      oxford: { rank: 110, scores: [19.5, 34.85, 52.88, 44.8, 28.21, 47.15] },
      msAdoption: { h1_2025: 13.0, h2_2025: 13.8, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Institutions", date: "2026-09-23",
          text: "On 23 September 2026 the National Commission on Research, Science and Technology (NCRST) opened a National AI Institute. Its four centres correspond to weaknesses found in Namibia's 2025 AI Readiness Assessment.",
          level: "verified",
          sources: [
            S("iAfrica - Namibia opens National AI Institute (2 Oct 2026)", "https://iafrica.com/namibia-opens-national-ai-institute-built-around-four-gaps-its-own-assessment-found/"),
            S("Africa AI News - Namibia launches National AI Institute", "https://www.africaainews.com/p/namibia-launches-national-ai-institute"),
            S("The Brief - Namibia targets AI to improve government service delivery", "https://thebrief.com.na/2026/09/namibia-targets-ai-to-improve-government-service-delivery/"),
          ],
        },
        {
          topic: "Regulation", date: "2025-06",
          text: "In June 2025 Namibia was drafting an AI Bill, alongside a Data Protection Bill and a Cybercrime Bill, within a framework that also includes a national AI strategy and an AI council.",
          level: "single",
          sources: [
            S("iAfrica - Namibia drafts landmark AI laws (17 Jun 2025)", "https://iafrica.com/namibia-drafts-landmark-ai-laws-to-boost-digital-governance-data-protection/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-23", title: "Namibia opens National AI Institute",
          summary: "ICT Minister Emma Theofelus said digital government is a key area where home-grown AI capability can help.",
          level: "verified",
          sources: [
            S("The Brief", "https://thebrief.com.na/2026/09/namibia-targets-ai-to-improve-government-service-delivery/"),
            S("iAfrica", "https://iafrica.com/namibia-opens-national-ai-institute-built-around-four-gaps-its-own-assessment-found/"),
            S("Africa AI News", "https://www.africaainews.com/p/namibia-launches-national-ai-institute"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ CABO VERDE
    {
      id: "cv", name: "Cabo Verde", flag: "🇨🇻", region: "West Africa", group: "Africa", geo: [-23.51, 14.93], isoN: "132",
      stance: "Data first: national data and AI strategies for public administration started in 2026",
      summary:
        "Cabo Verde began work on its first National Data Strategy in 2025. On 28 April 2026 it formally started drafting a Data Strategy for Public Administration together with a national AI strategy, which the government says will ensure ethical and responsible use of AI.",
      glance: { firstStrategy: "In development (2026)", latestStrategy: "National AI Strategy in development", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 527326, year: 2025 }, gdpPerCapita: { v: 5796, year: 2025 }, internet: { v: 74.7, year: 2024 } },
      oxford: { rank: 122, scores: [15.5, 35.0, 35.49, 66.55, 11.59, 36.58] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy", date: "2026-04-28",
          text: "On 28 April 2026 the government launched work on a Data Strategy for Public Administration and a dedicated national AI strategy, at a meeting led by Digital Economy Minister Olavo Correia.",
          level: "verified",
          sources: [
            S("Ecofin Agency - Cape Verde starts work on national data and AI strategies (30 Apr 2026)", "https://www.ecofinagency.com/news-digital/3004-55172-cape-verde-starts-work-on-national-data-and-ai-strategies-for-public-sector"),
            S("TechAfrica News - Cape Verde launches national data and AI strategies (4 May 2026)", "https://techafricanews.com/2026/05/04/cape-verde-launches-national-data-and-ai-strategies-to-modernize-public-administration/"),
            S("Telecompaper - Cape Verde begins development of national data and AI strategy", "https://www.telecompaper.com/news/cape-verde-begins-development-of-national-data-and-ai-strategy--1570017"),
          ],
          note: "Sources differ on Correia's title: Digital Economy Minister, or Deputy Prime Minister and Finance Minister with the digital economy portfolio.",
        },
        {
          topic: "Data", date: "2025-04-24",
          text: "A conference in Praia on 23–24 April 2025 launched work on Cabo Verde's first National Data Strategy, framed around the age of AI.",
          level: "single",
          sources: [
            S("Data4SDGs - Cabo Verde charts path with first national data strategy (24 Apr 2025)", "https://www.data4sdgs.org/news/cabo-verde-charts-bold-new-path-first-national-data-strategy-age-ai"),
          ],
        },
      ],
      news: [
        {
          date: "2026-04-28", title: "Cabo Verde starts national AI strategy",
          summary: "The government began drafting data and AI strategies to modernise public administration.",
          level: "verified",
          sources: [
            S("Ecofin Agency", "https://www.ecofinagency.com/news-digital/3004-55172-cape-verde-starts-work-on-national-data-and-ai-strategies-for-public-sector"),
            S("TechAfrica News", "https://techafricanews.com/2026/05/04/cape-verde-launches-national-data-and-ai-strategies-to-modernize-public-administration/"),
            S("Telecompaper", "https://www.telecompaper.com/news/cape-verde-begins-development-of-national-data-and-ai-strategy--1570017"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SEYCHELLES
    {
      id: "sc", name: "Seychelles", flag: "🇸🇨", region: "East Africa (Indian Ocean)", group: "Africa", geo: [55.45, -4.62], isoN: "690",
      stance: "Schools first: a national AI-in-education framework for state schools",
      summary:
        "In July 2026 Cabinet approved a National AI in Education Framework for 2026–2030, developed with World Bank support, which creates a steering committee to approve AI tools for schools.",
      glance: { firstStrategy: "—", latestStrategy: "2026 (AI in Education Framework 2026–2030)", newestBody: "National AI in Education Steering Committee", newestBodyDate: "2026-07" },
      stats: { population: { v: 122730, year: 2025 }, gdpPerCapita: { v: 19449, year: 2025 }, internet: { v: 87.8, year: 2024 } },
      oxford: { rank: 140, scores: [8.0, 43.75, 39.66, 26.98, 11.77, 25.67] },
      msAdoption: null,
      facts: [
        {
          topic: "Education", date: "2026-07",
          text: "Cabinet approved the National AI in Education Framework 2026–2030, developed by the Ministry of Education with World Bank technical support. It sets up a National AI in Education Steering Committee to coordinate the rollout and approve AI tools for schools.",
          level: "corroborated",
          sources: [
            S("Zawya (State House release) - President Herminie's vision for AI takes root in classrooms (Jul 2026)", "https://www.zawya.com/en/press-release/africa-press-releases/president-herminies-vision-for-artificial-intelligence-takes-root-in-seychelles-classrooms-416492"),
            S("Seychelles Nation - Cabinet backs national AI framework for education (7 Aug 2026)", "https://nation.sc/articles/31810/cabinet-backs-national-artificial-intelligence-framework-for-education"),
          ],
        },
      ],
      news: [
        {
          date: "2026-07", title: "Cabinet approves AI in Education Framework",
          summary: "The framework is the first national roadmap for using AI in teaching, learning and school administration.",
          level: "corroborated",
          sources: [
            S("Zawya (State House release)", "https://www.zawya.com/en/press-release/africa-press-releases/president-herminies-vision-for-artificial-intelligence-takes-root-in-seychelles-classrooms-416492"),
            S("Seychelles Nation", "https://nation.sc/articles/31810/cabinet-backs-national-artificial-intelligence-framework-for-education"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GAMBIA
    {
      id: "gm", name: "Gambia", flag: "🇬🇲", region: "West Africa", group: "Africa", geo: [-16.58, 13.45], isoN: "270",
      stance: "Early stage: AI ambitions inside a digital economy master plan, no AI law",
      summary:
        "The Gambia has no AI law or national AI strategy. Its National Digital Economy Master Plan 2023–2033 aims to build AI capability and recommends a National AI Research Centre. In 2024 the communications and digital economy ministry picked the UAE AI firm Presight to support its digital transformation.",
      glance: { firstStrategy: "—", latestStrategy: "2023 (Digital Economy Master Plan 2023–2033)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 2822093, year: 2025 }, gdpPerCapita: { v: 919, year: 2025 }, internet: { v: 49.5, year: 2024 } },
      oxford: { rank: 153, scores: [15.5, 32.99, 37.79, 15.32, 10.31, 33.01] },
      msAdoption: { h1_2025: 10.6, h2_2025: 10.9, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2026-06",
          text: "As at June 2026 The Gambia had no dedicated legislation regulating the use of AI.",
          level: "single",
          sources: [
            S("Oxford Blavatnik School - Technology and Justice: The Gambia", "https://www.techandjustice.bsg.ox.ac.uk/thegambia-3447303d-c9d6-4476-963c-02898588dc35"),
          ],
        },
        {
          topic: "Public sector", date: "2024",
          text: "The Ministry of Communications and Digital Economy chose Presight, an Abu Dhabi AI and analytics company, to support its digital transformation.",
          level: "single",
          sources: [
            S("Presight - Chosen to propel digital transformation by Gambia's MoCDE", "https://www.presight.ai/news/presight-chosen-to-propel-digital-transformation-by-gambias-ministry-of-communications-and-digital-economy"),
          ],
        },
        {
          topic: "Strategy", date: "2023",
          text: "The National Digital Economy Master Plan 2023–2033 aims to build AI capability and recommends creating a National Artificial Intelligence Research Centre.",
          level: "single",
          sources: [
            S("Oxford Blavatnik School - Technology and Justice: The Gambia", "https://www.techandjustice.bsg.ox.ac.uk/thegambia-3447303d-c9d6-4476-963c-02898588dc35"),
          ],
        },
      ],
      news: [
      ],
    },

    // ------------------------------------------------------------------ LIBERIA
    {
      id: "lr", name: "Liberia", flag: "🇱🇷", region: "West Africa", group: "Africa", geo: [-10.8, 6.3], isoN: "430",
      stance: "Early stage: building AI talent through a national challenge",
      summary:
        "In August 2025 it launched a national Artificial Intelligence Challenge under President Joseph Boakai's patronage to build local AI talent.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 5731206, year: 2025 }, gdpPerCapita: { v: 915, year: 2025 }, internet: { v: 32.2, year: 2024 } },
      oxford: { rank: 189, scores: [8.0, 27.05, 3.5, 24.92, 9.77, 13.85] },
      msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "West Africa" },
      facts: [
        {
          topic: "Skills", date: "2025-08-07",
          text: "Liberia launched its 2025 Artificial Intelligence Challenge at the EJS Ministerial Complex in Monrovia, under the patronage of President Joseph Boakai and First Lady Kartumu Boakai, to build local AI talent.",
          level: "single",
          sources: [
            S("Tech Review Africa - Liberia embarks on AI journey with national challenge (7 Aug 2025)", "https://techreviewafrica.com/news/2604/liberia-embarks-on-ambitious-ai-journey-with-national-challenge-launch"),
          ],
        },
      ],
      news: [
        {
          date: "2025-08-07", title: "Liberia launches national AI Challenge",
          summary: "The challenge aims to develop home-grown AI talent for health, agriculture, education and governance.",
          level: "single",
          sources: [
            S("Tech Review Africa", "https://techreviewafrica.com/news/2604/liberia-embarks-on-ambitious-ai-journey-with-national-challenge-launch"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MAURITANIA
    {
      id: "mr", name: "Mauritania", flag: "🇲🇷", region: "West Africa (Maghreb)", group: "Africa", geo: [-15.98, 18.08], isoN: "478",
      stance: "Strategy on paper since 2024, with World Bank money now aimed at AI infrastructure",
      summary:
        "Mauritania's Ministry of Digital Transformation drew up a national AI strategy in 2024, with priorities from skills and research to data governance, ethics and sector uses in health, education and agriculture. In June 2026 it agreed with the World Bank to extend the West Africa Regional Digital Integration Program to AI infrastructure.",
      glance: { firstStrategy: "2024", latestStrategy: "2024 (National AI Strategy 2024–2029)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 5315065, year: 2025 }, gdpPerCapita: { v: 2198, year: 2025 }, internet: { v: 45.8, year: 2024 } },
      oxford: { rank: 138, scores: [34.5, 28.63, 40.53, 30.05, 16.0, 23.85] },
      msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "West Africa" },
      facts: [
        {
          topic: "Infrastructure", date: "2026-06-08",
          text: "Mauritania and the World Bank agreed additional financing to extend the West Africa Regional Digital Integration Program (WARDIP) to AI infrastructure. Mauritania's original WARDIP share was $60 million.",
          level: "single",
          sources: [
            S("Ecofin Agency - Mauritania expands digital program to include AI (9 Jun 2026)", "https://www.ecofinagency.com/news-digital/0906-56294-mauritania-expands-digital-development-program-to-include-ai-with-world-bank-support"),
          ],
        },
        {
          topic: "Strategy", date: "2024",
          text: "The Ministry of Digital Transformation, Innovation and Modernisation of the Administration drew up a National AI Strategy in 2024. OECD.AI lists it as covering 2024–2029 with five priorities: skills, research and innovation, data governance, ethical AI and uses in sectors such as health, education and agriculture.",
          level: "corroborated",
          sources: [
            S("OECD.AI - National AI Strategy of Mauritania 2024–2029", "https://oecd.ai/en/dashboards/policy-initiatives/national-artificial-intelligence-strategy-of-mauritania-2024-2029"),
            S("Digital Watch - National AI Strategy of Mauritania 2025–2029 (Draft 3, May 2024)", "https://dig.watch/resource/the-national-artificial-intelligence-strategy-of-mauritania-for-2025-2029-draft-3"),
          ],
          note: "A May 2024 draft was titled 2025–2029 and listed six priorities.",
        },
      ],
      news: [
        {
          date: "2026-06-08", title: "World Bank programme extended to AI infrastructure",
          summary: "New WARDIP financing will cover AI data infrastructure, skills and AI-powered systems.",
          level: "single",
          sources: [
            S("Ecofin Agency", "https://www.ecofinagency.com/news-digital/0906-56294-mauritania-expands-digital-development-program-to-include-ai-with-world-bank-support"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ HONDURAS
    {
      id: "hn", name: "Honduras", flag: "🇭🇳", region: "Central America", group: "Americas", geo: [-87.21, 14.07], isoN: "340",
      stance: "First steps through digital government and a bill on AI-enabled cyberbullying",
      summary:
        "In June 2026 President Nasry Asfura's government and the Inter-American Development Bank agreed to develop an AI tool to review government procedures and cut red tape. Congress is also set to debate a reform to criminalise AI-enabled cyberbullying in schools.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 11005850, year: 2025 }, gdpPerCapita: { v: 3598, year: 2025 }, internet: { v: 58.6, year: 2024 } },
      oxford: { rank: 157, scores: [4.0, 36.49, 38.67, 18.23, 10.87, 21.85] },
      msAdoption: { h1_2025: 12.4, h2_2025: 13.1, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Public sector", date: "2026-06-10",
          text: "The government of President Nasry Asfura and the Inter-American Development Bank agreed to develop an AI tool to review procedures, find bureaucratic barriers and modernise public management, with a technical working group to pick pilot projects.",
          level: "corroborated",
          sources: [
            S("La Prensa - Gobierno usará IA para revisar trámites (10 Jun 2026)", "https://www.laprensa.hn/portada/honduras-gobierno-bid-inteligencia-artificial-tramites-honduras-DB31038902"),
            S("El Heraldo - Gobierno y el BID impulsan herramienta de IA (10 Jun 2026)", "https://www.elheraldo.hn/honduras/gobierno-bid-impulsan-herramienta-inteligencia-artificial-modernizar-estado-EB31036064"),
          ],
        },
        {
          topic: "Regulation", date: "2026-06-03",
          text: "Congress was set to debate a reform of the school bullying law to criminalise cyberbullying using AI and digital identity theft.",
          level: "single",
          sources: [
            S("El Heraldo - Buscan penalizar el ciberacoso con IA (3 Jun 2026)", "https://www.elheraldo.hn/honduras/congreso-nacional-busca-penalizar-ciberacoso-inteligencia-artificial-suplantacion-identidad-digital-GI30924516"),
          ],
        },
      ],
      news: [
        {
          date: "2026-06-10", title: "Government and IDB to build AI tool against red tape",
          summary: "The tool will analyse laws, regulations and procedures to find and remove bureaucratic barriers.",
          level: "corroborated",
          sources: [
            S("La Prensa", "https://www.laprensa.hn/portada/honduras-gobierno-bid-inteligencia-artificial-tramites-honduras-DB31038902"),
            S("El Heraldo", "https://www.elheraldo.hn/honduras/gobierno-bid-impulsan-herramienta-inteligencia-artificial-modernizar-estado-EB31036064"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ TRINIDAD AND TOBAGO
    {
      id: "tt", name: "Trinidad and Tobago", flag: "🇹🇹", region: "Caribbean", group: "Americas", geo: [-61.52, 10.65], isoN: "780",
      stance: "A dedicated AI ministry, with a national AI readiness assessment before policy",
      summary:
        "In May 2025 Trinidad and Tobago merged two ministries into a Ministry of Public Administration and Artificial Intelligence, led by Senator Dominic Smith, often described as the Caribbean's first AI ministry. In November 2025 it launched a national AI readiness assessment with UNESCO and UNDP to inform a national AI policy.",
      glance: { firstStrategy: "—", latestStrategy: "National AI policy in development", newestBody: "Ministry of Public Administration and AI", newestBodyDate: "2025-05-23" },
      stats: { population: { v: 1367764, year: 2025 }, gdpPerCapita: { v: 18967, year: 2025 }, internet: { v: 82.2, year: 2024 } },
      oxford: { rank: 120, scores: [23.0, 46.63, 40.5, 41.09, 12.66, 33.67] },
      msAdoption: null,
      facts: [
        {
          topic: "Readiness", date: "2025-11-26",
          text: "On 26 November 2025 the ministry, with UNDP and UNESCO, launched a National AI Assessment combining UNESCO's Readiness Assessment Methodology and UNDP's AI Landscape Assessment.",
          level: "corroborated",
          sources: [
            S("MPAAI - Trinidad and Tobago ignites national AI readiness drive (PDF)", "https://mpaai.gov.tt/sites/default/files/2025-12/media_release_trinidad-and-tobago-ignites-national-ai-readiness-drive-with-global-partners.pdf"),
            S("UNESCO - UNESCO supports Trinidad and Tobago in advancing AI readiness", "https://www.unesco.org/en/articles/unesco-supports-trinidad-and-tobago-advancing-ai-readiness"),
          ],
        },
        {
          topic: "Institutions", date: "2025-05-23",
          text: "On 23 May 2025 the Ministry of Public Administration and the Ministry of Digital Transformation merged into the Ministry of Public Administration and Artificial Intelligence, led by Senator Dominic Smith.",
          level: "corroborated",
          sources: [
            S("MPAAI - Notice of ministry name change", "https://mpaai.gov.tt/media-releases/trinidad-and-tobago-takes-next-step-artificial-intelligence-policy-development"),
            S("Barbados Today - Trinidad leads with first AI Minister (16 Sep 2025)", "https://barbadostoday.bb/2025/09/16/trinidad-leads-with-first-ai-minister-a-new-era-for-caribbean-governance"),
          ],
        },
      ],
      news: [
        {
          date: "2025-11-26", title: "National AI readiness assessment launched",
          summary: "The assessment covers governance, policy, infrastructure, ethics, institutional capacity and inclusion, and will inform a national AI policy.",
          level: "corroborated",
          sources: [
            S("MPAAI", "https://mpaai.gov.tt/sites/default/files/2025-12/media_release_trinidad-and-tobago-ignites-national-ai-readiness-drive-with-global-partners.pdf"),
            S("UNESCO", "https://www.unesco.org/en/articles/unesco-supports-trinidad-and-tobago-advancing-ai-readiness"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BARBADOS
    {
      id: "bb", name: "Barbados", flag: "🇧🇧", region: "Caribbean", group: "Americas", geo: [-59.6, 13.1], isoN: "052",
      stance: "Diplomacy-led: pushing for global AI rules abroad while studying AI's impact at home",
      summary:
        "Barbados has no AI law or national AI strategy. At the UN General Assembly in September 2026 Prime Minister Mia Mottley called for globally agreed AI rules not set only by tech companies or a few rich economies, and said Barbados would host the second in-person meeting of the UN's Independent International Scientific Panel on AI in November 2026. In October 2026 she said the government would assess AI's impact on the workforce.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 282623, year: 2025 }, gdpPerCapita: { v: 28365, year: 2025 }, internet: { v: 70.4, year: 2024 } },
      oxford: { rank: 155, scores: [15.5, 34.85, 40.75, 6.22, 14.03, 25.16] },
      msAdoption: null,
      facts: [
        {
          topic: "Labour", date: "2026-10-04",
          text: "Prime Minister Mottley announced that the government would assess the impact of AI on the Barbadian workforce.",
          level: "single",
          sources: [
            S("CBC Barbados - Government to assess AI's impact on Barbadian workforce (4 Oct 2026)", "https://www.cbc.bb/main-stories/government-to-assess-ais-impact-on-barbadian-workforce/"),
          ],
        },
        {
          topic: "International", date: "2026-09-25",
          text: "At the 81st UN General Assembly, Mottley called for globally agreed AI rules and announced that Barbados would host the second in-person meeting of the UN Independent International Scientific Panel on AI in November 2026.",
          level: "corroborated",
          sources: [
            S("Barbados Today - Barbados to host UN AI panel (25 Sep 2026)", "https://barbadostoday.bb/2026/09/25/barbados-to-host-un-ai-panel-as-global-concern-over-safeguards-grows/"),
            S("Breaking Belize News - Barbados PM calls for inclusive global AI rules", "https://www.breakingbelizenews.com/2026/09/25/international-news-barbados-pm-calls-for-inclusive-global-rules-to-govern-artificial-intelligence/"),
            S("UN Eastern Caribbean - Mottley urges world leaders at UN", "https://easterncaribbean.un.org/en/323315-%E2%80%98turn-what-we-know-what-we-do%E2%80%99-barbados-prime-minister-mia-amor-mottley-urges-world-leaders"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-25", title: "Barbados to host UN scientific panel on AI",
          summary: "Mottley announced the November 2026 meeting in her UN General Assembly speech.",
          level: "corroborated",
          sources: [
            S("Barbados Today", "https://barbadostoday.bb/2026/09/25/barbados-to-host-un-ai-panel-as-global-concern-over-safeguards-grows/"),
            S("Breaking Belize News", "https://www.breakingbelizenews.com/2026/09/25/international-news-barbados-pm-calls-for-inclusive-global-rules-to-govern-artificial-intelligence/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BAHAMAS
    {
      id: "bs", name: "Bahamas", flag: "🇧🇸", region: "Caribbean", group: "Americas", geo: [-77.35, 25.05], isoN: "044",
      stance: "Policy in preparation: an AI white paper for Cabinet and a labour-market skills push",
      summary:
        "In June 2025 the government said it was preparing an AI white paper and policy for Cabinet, aiming to be a first mover in the Caribbean. In June 2026 the labour minister set out a plan to build an AI-literate workforce with skills training and regulatory safeguards.",
      glance: { firstStrategy: "—", latestStrategy: "AI white paper in preparation", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 403033, year: 2025 }, gdpPerCapita: { v: 39455, year: 2024 }, internet: { v: 92.5, year: 2024 } },
      oxford: { rank: 123, scores: [8.0, 40.26, 53.62, 42.14, 14.55, 23.19] },
      msAdoption: null,
      facts: [
        {
          topic: "Skills", date: "2026-06-10",
          text: "Labour Minister Pia Glover-Rolle set out a plan to build an AI-literate workforce combining skills training, regulatory safeguards and workforce development.",
          level: "single",
          sources: [
            S("The Tribune - Minister: Bahamas ready for AI age (10 Jun 2026)", "https://www.tribune242.com/news/2026/jun/10/minister-bahamas-ready-for-ai-age/"),
          ],
        },
        {
          topic: "Strategy", date: "2025-06-19",
          text: "Parliamentary secretary Wayde Watson told the 2025–26 budget debate that the government was writing an AI white paper and policy document for Cabinet approval, aiming to make the Bahamas a first mover in the Caribbean.",
          level: "corroborated",
          sources: [
            S("Eyewitness News - National AI strategy in the works", "https://ewnews.com/national-ai-strategy-in-the-works-as-government-aims-for-first-mover-edge/"),
            S("The Tribune - Gov't targets 'white paper' to be AI Caribbean leader (19 Jun 2025)", "https://www.tribune242.com/news/2025/jun/19/govt-targets-white-paper-to-be-ai-caribbean-leader/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-06-10", title: "Labour minister outlines AI workforce plan",
          summary: "The plan pairs AI skills training with regulatory safeguards.",
          level: "single",
          sources: [
            S("The Tribune", "https://www.tribune242.com/news/2026/jun/10/minister-bahamas-ready-for-ai-age/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GUYANA
    {
      id: "gy", name: "Guyana", flag: "🇬🇾", region: "South America (Caribbean)", group: "Americas", geo: [-58.16, 6.8], isoN: "328",
      stance: "Sector by sector: AI plans in health and policing",
      summary:
        "Government AI work in Guyana is happening sector by sector: in April 2026 the health minister set out plans for AI-supported predictive healthcare, and in May 2026 President Irfaan Ali announced a move to AI-powered, data-driven policing.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 835986, year: 2025 }, gdpPerCapita: { v: 32414, year: 2025 }, internet: { v: 83.0, year: 2024 } },
      oxford: { rank: 146, scores: [15.5, 35.62, 39.29, 19.69, 12.27, 31.02] },
      msAdoption: { h1_2025: 8.3, h2_2025: 9.0, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "Northern South America" },
      facts: [
        {
          topic: "Security", date: "2026-05-22",
          text: "President Irfaan Ali announced that Guyana is moving to an AI-powered, data-driven policing architecture, with decentralised police outposts and integrated databases.",
          level: "single",
          sources: [
            S("Guyana Standard - Gov't integrates AI, decentralized command centers (22 May 2026)", "https://www.guyanastandard.com/2026/05/22/govt-integrates-ai-decentralized-command-centers-to-modernize-national-security/"),
          ],
        },
        {
          topic: "Health", date: "2026-04-23",
          text: "Health Minister Frank Anthony set out plans to integrate AI into medical practice and public health, moving towards predictive, data-driven healthcare.",
          level: "single",
          sources: [
            S("DPI Guyana - Guyana moving to predictive healthcare through AI (23 Apr 2026)", "https://dpi.gov.gy/guyana-moving-to-predictive-healthcare-through-ai-min-anthony/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-05-22", title: "President outlines AI-powered policing plan",
          summary: "The plan covers decentralised police outposts and secure, tiered access to integrated data.",
          level: "single",
          sources: [
            S("Guyana Standard", "https://www.guyanastandard.com/2026/05/22/govt-integrates-ai-decentralized-command-centers-to-modernize-national-security/"),
          ],
        },
      ],
    },

  );
})();

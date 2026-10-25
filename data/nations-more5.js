// Atlas dataset, part 6: 26 more small nations (added 14 Oct 2026).
// Same verification rules as the other data files (see METHODOLOGY.md). Every claim here was run through
// the automated source audit before publication; badges reflect sources that were readable and confirmed the claim.
// msAdoption.regional marks Microsoft figures that are a shared regional estimate; regionLabel names the region.

(function () {
  const S = (t, u) => ({ t, u });
  window.ATLAS.nations.push(
    // ------------------------------------------------------------------ BOSNIA AND HERZEGOVINA
    {
      id: "ba", name: "Bosnia and Herzegovina", flag: "🇧🇦", region: "Western Balkans", group: "Europe", geo: [18.41, 43.86], isoN: "070",
      stance: "Fragmented and early: no AI law or state-level strategy, with the parliament writing its own AI roadmap",
      summary:
        "Bosnia and Herzegovina has no AI law and no national AI strategy at state level; AI appears only briefly in the Federation entity's 2021–2027 development strategy. Its main AI-relevant law is a GDPR-style data protection law adopted in 2025. In 2026 the state Parliamentary Assembly, with UNDP support, adopted a roadmap for using AI in its own work, the first legislature in the country to do so.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 3140095, year: 2025 }, gdpPerCapita: { v: 10382, year: 2025 }, internet: { v: 86.1, year: 2024 } },
      oxford: { rank: 114, scores: [19.0, 43.26, 51.02, 51.83, 19.43, 26.66] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-08",
          text: "The Parliamentary Assembly of Bosnia and Herzegovina adopted a Roadmap for AI after a UNDP-supported readiness assessment, becoming the first legislative institution in the country with a strategic framework for using AI. First pilots cover transcription of sessions, media analysis and AI assistants for staff.",
          level: "single",
          sources: [
            S("UNDP Bosnia and Herzegovina - Parliamentary Assembly lays the foundation for responsible use of AI", "https://www.undp.org/bosnia-herzegovina/news/parliamentary-assembly-bosnia-and-herzegovina-lays-foundation-responsible-use-artificial-intelligence"),
          ],
          note: "Read in a browser; the page blocks automated requests.",
        },
        {
          topic: "Regulation", date: "2025",
          text: "Bosnia and Herzegovina has no dedicated AI law. The main AI-relevant law is the Law on Personal Data Protection adopted in early 2025, which is largely aligned with the EU's GDPR.",
          level: "corroborated",
          sources: [
            S("CMS - AI regulation scanner: Bosnia and Herzegovina", "https://cms.law/en/int/expert-guides/ai-regulation-scanner/bosnia-and-herzegovina"),
            S("Western Balkans Info Hub - AI governance and ethics in Bosnia and Herzegovina (PDF)", "https://www.westernbalkans-infohub.eu/wp-content/uploads/2025/11/Artificial-Intelligence-Governance-and-Ethics-in-Bosnia-and-Herzegovina.pdf"),
          ],
        },
        {
          topic: "Strategy", date: "2026-05",
          text: "As of May 2026 there was no formally adopted national AI strategy at state level. AI is mentioned only briefly in the 2021–2027 Development Strategy of the Federation of Bosnia and Herzegovina.",
          level: "single",
          sources: [
            S("CMS - AI regulation scanner: Bosnia and Herzegovina", "https://cms.law/en/int/expert-guides/ai-regulation-scanner/bosnia-and-herzegovina"),
          ],
        },
      ],
      news: [
        {
          date: "2026-08", title: "Parliament adopts AI roadmap",
          summary: "With UNDP support, the Parliamentary Assembly set three priorities: staff AI skills, internal AI rules and gradual AI use in parliamentary work.",
          level: "single",
          sources: [
            S("UNDP Bosnia and Herzegovina", "https://www.undp.org/bosnia-herzegovina/news/parliamentary-assembly-bosnia-and-herzegovina-lays-foundation-responsible-use-artificial-intelligence"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ NORTH MACEDONIA
    {
      id: "mk", name: "North Macedonia", flag: "🇲🇰", region: "Western Balkans", group: "Europe", geo: [21.43, 42.0], isoN: "807",
      stance: "AI inside a digital strategy: no standalone AI strategy, but an EU-funded national AI centre linked to Greece's AI Factory",
      summary:
        "North Macedonia has no AI law, AI regulator or adopted national AI strategy; a working group set up in 2021 to draft one has barely met. AI is instead a pillar of its SMART/MK 2030 ICT strategy. In October 2025 the digital ministry launched Vezilka, a roughly €6 million National Centre for AI funded largely by the EU and affiliated with the Pharos AI Factory in Greece.",
      glance: { firstStrategy: "—", latestStrategy: "SMART/MK 2030 (ICT strategy with AI pillar)", newestBody: "Vezilka National Centre for AI", newestBodyDate: "2025-10-14" },
      stats: { population: { v: 1820909, year: 2025 }, gdpPerCapita: { v: 10490, year: 2025 }, internet: { v: 93.1, year: 2025 } },
      oxford: { rank: 107, scores: [34.5, 41.12, 45.0, 46.55, 24.85, 38.98] },
      msAdoption: null,
      facts: [
        {
          topic: "Infrastructure", date: "2025-10-14",
          text: "On 14 October 2025 Digital Transformation Minister Stefan Andonovski presented Vezilka, a National Centre for AI worth about €6 million, funded mainly by the EU through Horizon Europe and EuroHPC. It is an affiliated unit of the Pharos AI Factory in Greece, giving local users access to European supercomputers.",
          level: "corroborated",
          sources: [
            S("Ministry of Digital Transformation - North Macedonia to establish National Centre for AI 'Vezilka' (14 Oct 2025)", "https://mdt.gov.mk/en-GB/odnosi-so-javnost/soopstenija/andonovski-makedonija-dobiva-nacionalen-centar-za-vestacka-inteligencija-zapocnuva-proektot-vezilka"),
            S("China-CEE Institute - North Macedonia monthly briefing on AI (Jul 2026)", "https://china-cee.eu/2026/07/15/north-macedonia-monthly-briefing-entering-the-ai-economy-from-the-periphery-ai-infrastructure-digital-sovereignty-and-the-risk-of-digital-extractivism/"),
          ],
        },
        {
          topic: "Strategy", date: "2026",
          text: "North Macedonia has no standalone AI law, AI regulator or adopted national AI strategy. Work on a strategy began in 2021 but stalled; AI is instead a pillar of the SMART/MK 2030 ICT strategy.",
          level: "corroborated",
          sources: [
            S("Schoenherr - AI regulation and development in North Macedonia", "https://www.schoenherr.eu/content/the-status-and-future-prospects-of-ai-regulation-and-development-in-north-macedonia"),
            S("China-CEE Institute - North Macedonia monthly briefing on AI (Jul 2026)", "https://china-cee.eu/2026/07/15/north-macedonia-monthly-briefing-entering-the-ai-economy-from-the-periphery-ai-infrastructure-digital-sovereignty-and-the-risk-of-digital-extractivism/"),
          ],
        },
      ],
      news: [
        {
          date: "2025-10-14", title: "Vezilka national AI centre launched",
          summary: "The EU-funded centre links North Macedonia to the European AI Factory network through Greece's Pharos.",
          level: "corroborated",
          sources: [
            S("Ministry of Digital Transformation", "https://mdt.gov.mk/en-GB/odnosi-so-javnost/soopstenija/andonovski-makedonija-dobiva-nacionalen-centar-za-vestacka-inteligencija-zapocnuva-proektot-vezilka"),
            S("China-CEE Institute", "https://china-cee.eu/2026/07/15/north-macedonia-monthly-briefing-entering-the-ai-economy-from-the-periphery-ai-infrastructure-digital-sovereignty-and-the-risk-of-digital-extractivism/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MOLDOVA
    {
      id: "md", name: "Moldova", flag: "🇲🇩", region: "Eastern Europe", group: "Europe", geo: [28.86, 47.01], isoN: "498",
      stance: "EU candidate catching up: a 2026–2030 AI and data programme in consultation and a new AI coordination body",
      summary:
        "Moldova has no AI-specific law but signed the Council of Europe AI convention in September 2024 and, as an EU candidate, must align with the EU AI Act. In April 2026 it set up an interministerial Sub-Council for AI and Applied Research, and the economy ministry began drafting a National Programme on AI and Data for 2026–2030, which went to public consultation. In October 2026 President Maia Sandu said Moldova wants to join efforts to keep the most advanced AI models under human control.",
      glance: { firstStrategy: "—", latestStrategy: "National AI and Data Programme 2026–2030 (draft)", newestBody: "Sub-Council for AI and Applied Research", newestBodyDate: "2026-04" },
      stats: { population: { v: 2360527, year: 2025 }, gdpPerCapita: { v: 8622, year: 2025 }, internet: { v: 77.4, year: 2024 } },
      oxford: { rank: 71, scores: [61.5, 47.55, 56.67, 82.33, 22.4, 61.06] },
      msAdoption: { h1_2025: 16.6, h2_2025: 17.0, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026-04-28",
          text: "The Ministry of Economic Development and Digitalization began drafting a government decree for a National Programme on AI and Data Management for 2026–2030, which later went to public consultation.",
          level: "corroborated",
          sources: [
            S("Logos Press - Moldova plans national AI strategy for 2026–2030 (28 Apr 2026)", "https://logos-pres.md/en/news/moldova-wants-to-move-from-consuming-technology-to-building-its-own-ai/"),
            S("Moldpres - Moldova presented AI priorities at Black Sea parliamentary meeting", "https://www.moldpres.md/eng/politics/moldova-presented-artificial-intelligence-priorities-at-parliamentary-meeting-of-black-sea-region-states"),
            S("Logos Press - WB: AI a lifeline for small economies like Moldova", "https://logos-pres.md/en/news/wb-artificial-intelligence-a-lifeline-for-small-economies-like-moldova/"),
          ],
          note: "Two of these are from Logos Press, so they count as one source.",
        },
        {
          topic: "Institutions", date: "2026-04",
          text: "The Sub-Council for Artificial Intelligence and Applied Research (SCIA), an interministerial body to coordinate national AI policy, was set up in April 2026.",
          level: "single",
          sources: [
            S("Media Azi - #EUexplained: Artificial Intelligence", "https://media-azi.md/en/euexplained-artificial-intelligence-what-we-have-what-needs-to-be-changed-whats-next/"),
          ],
        },
        {
          topic: "International", date: "2026-10-02",
          text: "On 2 October 2026 in Helsinki, President Maia Sandu said Moldova wants to join Finland and others in keeping the most advanced AI models under human control.",
          level: "single",
          sources: [
            S("Logos Press - Moldova seeks human control over advanced AI models (2 Oct 2026)", "https://logos-pres.md/en/news/moldova-wishes-to-join-international-efforts-to-maintain-human-control-over-artificial-intelligence/"),
          ],
        },
        {
          topic: "Regulation", date: "2024-09",
          text: "Moldova has no law specifically regulating AI. It signed the Council of Europe Framework Convention on AI in September 2024.",
          level: "single",
          sources: [
            S("Media Azi - #EUexplained: Artificial Intelligence", "https://media-azi.md/en/euexplained-artificial-intelligence-what-we-have-what-needs-to-be-changed-whats-next/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-10-02", title: "Sandu backs human control over frontier AI",
          summary: "Speaking in Helsinki after meeting Finland's President Stubb, Sandu said Moldova wants to join international efforts on advanced AI.",
          level: "single",
          sources: [
            S("Logos Press", "https://logos-pres.md/en/news/moldova-wishes-to-join-international-efforts-to-maintain-human-control-over-artificial-intelligence/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BELARUS
    {
      id: "by", name: "Belarus", flag: "🇧🇾", region: "Eastern Europe", group: "Europe", geo: [27.56, 53.9], isoN: "112",
      stance: "State-led: no AI law yet, but a CIS model AI law drafted in Minsk",
      summary:
        "Belarus has no law that directly regulates AI, though officials say one is needed and national AI standards are being developed. In May 2026 President Aleksandr Lukashenko said Belarus had developed a model law on AI that the CIS Interparliamentary Assembly approved in 2025. Belarus's main sources on this are state media.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 9085991, year: 2025 }, gdpPerCapita: { v: 10279, year: 2025 }, internet: { v: 94.3, year: 2024 } },
      oxford: { rank: 121, scores: [12.0, 45.28, 43.38, 24.03, 24.62, 36.88] },
      msAdoption: { h1_2025: 7.6, h2_2025: 8.4, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2026-07",
          text: "A senior official at the National Academy of Sciences said there is currently no legislative act in Belarus that directly regulates AI, and that one is needed.",
          level: "single",
          sources: [
            S("BelTA - Belarusian scientists working on solutions to regulate AI (2026)", "https://eng.belta.by/society/view/belarusian-scientists-working-on-solutions-to-regulate-artificial-intelligence-183257-2026/"),
          ],
        },
        {
          topic: "Regulation", date: "2026-05-28",
          text: "At the Eurasian Economic Forum in May 2026, Lukashenko said Belarus had developed a model law on AI technologies that the CIS Interparliamentary Assembly approved in 2025.",
          level: "single",
          sources: [
            S("BelTA - Lukashenko presents Belarus' stance on using AI", "https://eng.belta.by/president/view/lukashenko-presents-belarus-stance-on-using-ai-180997-2026/"),
            S("Belarus.by - Lukashenko presents Belarus' stance on using AI", "https://www.belarus.by/en/press-center/speeches-and-interviews/lukashenko-presents-belarus-stance-on-using-ai_i_0000213877.html"),
          ],
          note: "Both are Belarusian state media carrying the same text, so they count as one source.",
        },
      ],
      news: [
        {
          date: "2026-05-28", title: "Lukashenko sets out Belarus's AI stance",
          summary: "At the Eurasian Economic Forum he cited Belarus's CIS model AI law and said national AI standards are being developed.",
          level: "single",
          sources: [
            S("BelTA", "https://eng.belta.by/president/view/lukashenko-presents-belarus-stance-on-using-ai-180997-2026/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ LIECHTENSTEIN
    {
      id: "li", name: "Liechtenstein", flag: "🇱🇮", region: "Central Europe (EEA)", group: "Europe", geo: [9.52, 47.14], isoN: "438",
      stance: "Waiting on the EEA: a public-sector AI strategy now, with the EU AI Act still to be added to the EEA Agreement",
      summary:
        "As an EEA member, Liechtenstein is set to be bound by the EU AI Act once it is incorporated into the EEA Agreement, which had not happened by mid-2026; until then it sits on the EU AI Board only as an observer. Its only domestic AI instrument is a non-binding AI strategy for the public administration, adopted on 14 April 2026.",
      glance: { firstStrategy: "2026 (AI strategy for the public administration)", latestStrategy: "2026 (AI strategy for the public administration)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 41024, year: 2025 }, gdpPerCapita: { v: 220167, year: 2024 }, internet: { v: 98.3, year: 2024 } },
      oxford: { rank: 98, scores: [19.0, 46.92, 48.4, 49.54, 28.68, 46.99] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy", date: "2026-04-14",
          text: "On 14 April 2026 the government adopted a non-binding AI strategy for the public administration (KI-Strategie der Liechtensteinischen Landesverwaltung), covering the government's own use of AI.",
          level: "corroborated",
          sources: [
            S("Innovando - Liechtenstein's government adopts AI strategy for the public administration", "https://en.innovando.news/Liechtenstein-to-bring-to-the-public-machine/"),
            S("Lex Mundi AI Legislative Guide - Liechtenstein (Marxer Attorneys, updated 4 May 2026)", "https://www.lexmundi.com/guides/ai-legislative-guide/jurisdictions/europe/liechtenstein/"),
          ],
        },
        {
          topic: "Regulation", date: "2026",
          text: "The EU AI Act is marked as EEA-relevant but is still under scrutiny for incorporation into the EEA Agreement, so it does not yet apply in Liechtenstein, which takes part in EU AI Board meetings as an observer. The Office for Digital Innovation, set up on 1 April 2025, coordinates the work.",
          level: "single",
          sources: [
            S("Lex Mundi AI Legislative Guide - Liechtenstein (Marxer Attorneys, updated 4 May 2026)", "https://www.lexmundi.com/guides/ai-legislative-guide/jurisdictions/europe/liechtenstein/"),
          ],
          note: "Read in a browser. EFTA's own status page sits behind a bot check and was not read.",
        },
      ],
      news: [
        {
          date: "2026-04-14", title: "Government adopts AI strategy for public administration",
          summary: "The non-binding strategy guides how the state administration uses AI.",
          level: "single",
          sources: [
            S("Innovando", "https://en.innovando.news/Liechtenstein-to-bring-to-the-public-machine/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ ANDORRA
    {
      id: "ad", name: "Andorra", flag: "🇦🇩", region: "Southern Europe", group: "Europe", geo: [1.52, 42.51], isoN: "020",
      stance: "Treaty first: an early signatory of the Council of Europe AI convention, with an AI assistant planned for all civil servants",
      summary:
        "Andorra was among the first signatories of the Council of Europe Framework Convention on AI in September 2024. In April 2026 the digital minister said an AI tool for all public administration staff is planned by 2027.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 82904, year: 2025 }, gdpPerCapita: { v: 54292, year: 2025 }, internet: { v: 94.4, year: 2024 } },
      oxford: { rank: 92, scores: [31.0, 47.96, 54.27, 25.75, 37.69, 49.92] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-04",
          text: "The government plans to roll out an AI assistant tool to public administration staff by 2027 to automate routine tasks.",
          level: "single",
          sources: [
            S("Alto Andorra - Andorra to roll out AI tool for public workers by 2027", "https://www.alto.ad/business/andorra-ai-tool-public-workers-cyber-threat-260418"),
          ],
        },
        {
          topic: "Regulation", date: "2024-09-05",
          text: "Andorra was among the first signatories of the Council of Europe Framework Convention on AI when it opened for signature on 5 September 2024.",
          level: "single",
          sources: [
            S("Council of Europe - Council of Europe opens first ever global treaty on AI for signature", "https://www.coe.int/en/web/portal/-/council-of-europe-opens-first-ever-global-treaty-on-ai-for-signature"),
          ],
          note: "Read in a browser; the page blocks automated requests.",
        },
      ],
      news: [
        {
          date: "2026-04", title: "AI assistant planned for all civil servants by 2027",
          summary: "The digital minister tied the plan to a rise in cyber incidents and wider digitalisation of public services.",
          level: "single",
          sources: [
            S("Alto Andorra", "https://www.alto.ad/business/andorra-ai-tool-public-workers-cyber-threat-260418"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MONACO
    {
      id: "mc", name: "Monaco", flag: "🇲🇨", region: "Southern Europe", group: "Europe", geo: [7.42, 43.74], isoN: "492",
      stance: "Government-first: AI inside the Extended Monaco digital programme and a new permanent digital delegation",
      summary:
        "Prince Albert II launched Monaco's national digital programme, Extended Monaco, in April 2019. From 5 October 2026 a new Interministerial Delegation for Digital Affairs (DIN) replaced the digital transition delegation, with a mandate that includes an AI strategy for the administration.",
      glance: { firstStrategy: "2019 (Extended Monaco)", latestStrategy: "2019 (Extended Monaco)", newestBody: "Interministerial Delegation for Digital Affairs (DIN)", newestBodyDate: "2026-10-05" },
      stats: { population: { v: 38341, year: 2025 }, gdpPerCapita: { v: 288002, year: 2024 }, internet: { v: 99.0, year: 2024 } },
      oxford: { rank: 105, scores: [12.0, 48.02, 57.4, 19.57, 34.95, 51.37] },
      msAdoption: null,
      facts: [
        {
          topic: "Institutions", date: "2026-10-05",
          text: "A Sovereign Ordinance created the Interministerial Delegation for Digital Affairs (DIN) from 5 October 2026, replacing the delegation for the digital transition. The government framed it as the end of the 'transition' and a permanent model in which AI is part of everyday government.",
          level: "single",
          sources: [
            S("Monaco Life - Monaco declares digital transition over as State enters new era of AI", "https://monacolife.net/monaco-declares-digital-transition-over-as-state-enters-new-era-of-ai-and-implementation/"),
          ],
        },
        {
          topic: "Strategy", date: "2019-04",
          text: "Prince Albert II launched Extended Monaco, the Principality's programme to apply digital technology across its economy and public services, in April 2019.",
          level: "single",
          sources: [
            S("Monaco Life - Monaco declares digital transition over as State enters new era of AI", "https://monacolife.net/monaco-declares-digital-transition-over-as-state-enters-new-era-of-ai-and-implementation/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-10-05", title: "Monaco creates permanent digital delegation",
          summary: "The new DIN takes over from the digital transition delegation and will drive AI use in the administration.",
          level: "single",
          sources: [
            S("Monaco Life", "https://monacolife.net/monaco-declares-digital-transition-over-as-state-enters-new-era-of-ai-and-implementation/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SAN MARINO
    {
      id: "sm", name: "San Marino", flag: "🇸🇲", region: "Southern Europe", group: "Europe", geo: [12.45, 43.94], isoN: "674",
      stance: "Debate stage: parties urging AI rules after Italy passed its own AI law",
      summary:
        "San Marino was among the first signatories of the Council of Europe AI convention in September 2024. After Italy moved ahead with its own AI law in 2025, Sammarinese political groups called for a public debate on AI rules.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 34109, year: 2025 }, gdpPerCapita: { v: 59871, year: 2023 }, internet: { v: 97.4, year: 2024 } },
      oxford: { rank: 112, scores: [27.0, 41.18, 45.65, 23.86, 33.26, 41.5] },
      msAdoption: null,
      facts: [
        {
          topic: "International", date: "2024-09-05",
          text: "San Marino was among the first signatories of the Council of Europe Framework Convention on AI when it opened for signature on 5 September 2024.",
          level: "single",
          sources: [
            S("Council of Europe - Council of Europe opens first ever global treaty on AI for signature", "https://www.coe.int/en/web/portal/-/council-of-europe-opens-first-ever-global-treaty-on-ai-for-signature"),
          ],
          note: "Read in a browser; the page blocks automated requests.",
        },
        {
          topic: "Politics", date: "2025-04-28",
          text: "After Italy's Senate approved its AI bill, the political group La Serenissima called for San Marino to open a public debate on AI.",
          level: "single",
          sources: [
            S("GiornaleSM - La Serenissima: 'Italy moves ahead on AI, San Marino should open the debate' (28 Apr 2025)", "https://giornalesm.com/la-serenissima-italia-avanti-sullintelligenza-artificiale-san-marino-apra-il-confronto/"),
            S("Libertas - Italia avanti sull'intelligenza artificiale, San Marino apra il confronto", "https://www.libertas.sm/italia-avanti-sullintelligenza-artificiale-san-marino-apra-il-confronto/"),
          ],
          note: "Both outlets carry the party's statement, so they count as one source.",
        },
      ],
      news: [
      ],
    },

    // ------------------------------------------------------------------ TAJIKISTAN
    {
      id: "tj", name: "Tajikistan", flag: "🇹🇯", region: "Central Asia", group: "Asia-Pacific", geo: [68.78, 38.56], isoN: "762",
      stance: "Diplomatic leader: a 2040 AI strategy at home and the UN's first regional AI resolution abroad",
      summary:
        "Tajikistan adopted a national AI strategy to 2040 in 2022, aiming for up to 5% of GDP from AI-related activity. In 2025 the UN General Assembly adopted Tajikistan's resolution on AI for sustainable development in Central Asia, the UN's first regional AI resolution, which proposes a Regional AI Centre in Dushanbe. The president has also proposed a National AI Corporation.",
      glance: { firstStrategy: "2022 (AI Strategy to 2040)", latestStrategy: "2022 (AI Strategy to 2040)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 10786734, year: 2025 }, gdpPerCapita: { v: 1637, year: 2025 }, internet: { v: 55.8, year: 2024 } },
      oxford: { rank: 130, scores: [54.0, 20.68, 38.79, 23.69, 21.23, 38.34] },
      msAdoption: { h1_2025: 5.1, h2_2025: 5.6, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "Central Asia" },
      facts: [
        {
          topic: "International", date: "2025-07",
          text: "The UN General Assembly adopted Tajikistan's resolution 'The Role of AI in Creating New Opportunities for Sustainable Development in Central Asia', which Tajikistan calls the first UN regional resolution on AI. It proposes a Regional AI Centre in Dushanbe.",
          level: "verified",
          sources: [
            S("UN - Statement of Tajikistan on ICTs for sustainable development (Oct 2025, PDF)", "https://estatements.un.org/estatements/11.0020/20251010100000000/sFIuMwog/TrELLdARgBjx_nyc_en.pdf"),
            S("Caspian Post - UN unanimously backs Tajikistan's AI resolution", "https://caspianpost.com/tajikistan/un-unanimously-backs-tajikistan-s-ai-resolution-for-central-asia-s-sustainable-future"),
            S("News Central Asia - Tajikistan's pioneering AI leadership (Oct 2025)", "https://www.newscentralasia.net/2025/10/28/tajikistans-pioneering-ai-leadership-in-central-asia-and-beyond/"),
          ],
        },
        {
          topic: "Strategy", date: "2022",
          text: "Tajikistan's 2022 National AI Strategy sets a target of up to 5% of GDP from AI-related economic activity by 2040.",
          level: "single",
          sources: [
            S("News Central Asia - Tajikistan's pioneering AI leadership (Oct 2025)", "https://www.newscentralasia.net/2025/10/28/tajikistans-pioneering-ai-leadership-in-central-asia-and-beyond/"),
          ],
          note: "Qazinform reported in April 2026 that Tajikistan 'has adopted' its 2040 AI strategy, announced at an SCO ministers' meeting; this may refer to a revised version.",
        },
        {
          topic: "Institutions", date: "2025-12",
          text: "In his address to parliament the president proposed a National AI Corporation, a Regional AI Centre and 'green data' processing centres.",
          level: "single",
          sources: [
            S("UIDT - Artificial intelligence development", "https://uidt.tj/en/news/273"),
          ],
        },
      ],
      news: [
        {
          date: "2025-07", title: "UN adopts Tajikistan's Central Asia AI resolution",
          summary: "The resolution calls for national and regional AI governance and a Regional AI Centre in Dushanbe.",
          level: "verified",
          sources: [
            S("UN statement", "https://estatements.un.org/estatements/11.0020/20251010100000000/sFIuMwog/TrELLdARgBjx_nyc_en.pdf"),
            S("Caspian Post", "https://caspianpost.com/tajikistan/un-unanimously-backs-tajikistan-s-ai-resolution-for-central-asia-s-sustainable-future"),
            S("News Central Asia", "https://www.newscentralasia.net/2025/10/28/tajikistans-pioneering-ai-leadership-in-central-asia-and-beyond/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ PAPUA NEW GUINEA
    {
      id: "pg", name: "Papua New Guinea", flag: "🇵🇬", region: "Pacific", group: "Asia-Pacific", geo: [147.18, -9.44], isoN: "598",
      stance: "Sovereign AI on digital rails: a draft AI strategy, a planned AI Act and an AI register built on national digital ID",
      summary:
        "Papua New Guinea has no AI law. In March 2026 the ICT department released a draft National Sovereign Digital Transformation and AI Strategy for consultation, alongside a government AI adoption framework. The ICT secretary has outlined plans for a National AI Register, sovereign data governance and new laws including a National Artificial Intelligence Act, all built on the SevisPass digital ID and other public digital infrastructure.",
      glance: { firstStrategy: "2026 (draft)", latestStrategy: "Draft National Sovereign Digital Transformation and AI Strategy", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 10762817, year: 2025 }, gdpPerCapita: { v: 3020, year: 2025 }, internet: { v: 18.8, year: 2024 } },
      oxford: { rank: 135, scores: [15.5, 31.23, 27.81, 43.01, 19.33, 31.7] },
      msAdoption: { h1_2025: 7.2, h2_2025: 7.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2026-05-01",
          text: "At the Media Summit 2026, ICT Secretary Steven Matainaho outlined a sovereign AI framework including a National AI Register, sovereign data governance, and new laws: a National Artificial Intelligence Act and a Data Governance and Protection Act.",
          level: "single",
          sources: [
            S("DICT PNG - Secretary outlines sovereign AI framework (1 May 2026)", "https://www.ict.gov.pg/dict-secretary-outlines-sovereign-ai-framework-building-a-unified-digital-system-for-safe-ai-use-media-summit-2026/"),
          ],
        },
        {
          topic: "Strategy", date: "2026-03-22",
          text: "On 22 March 2026 the acting ICT minister released a draft National Sovereign Digital Transformation and AI Strategy for public consultation.",
          level: "single",
          sources: [
            S("DICT PNG - Draft National Sovereign Digital Transformation and AI Strategy for consultation (Mar 2026)", "https://www.ict.gov.pg/png-releases-draft-national-sovereign-digital-transformation-and-ai-strategy-for-public-consultation/"),
          ],
        },
        {
          topic: "Public sector", date: "2026-03",
          text: "A government AI adoption framework, built on modular and sovereign architecture, was opened for consultation.",
          level: "single",
          sources: [
            S("Biometric Update - Next steps in PNG's DPI rollout include AI adoption (3 Mar 2026)", "https://www.biometricupdate.com/202603/next-steps-in-papua-new-guineas-dpi-rollout-include-digital-id-for-kyc-ai-adoption"),
          ],
        },
      ],
      news: [
        {
          date: "2026-03-22", title: "Draft sovereign AI strategy released for consultation",
          summary: "The strategy treats AI as a capability on trusted national digital rails rather than a standalone technology.",
          level: "single",
          sources: [
            S("DICT PNG", "https://www.ict.gov.pg/png-releases-draft-national-sovereign-digital-transformation-and-ai-strategy-for-public-consultation/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ TONGA
    {
      id: "to", name: "Tonga", flag: "🇹🇴", region: "Pacific", group: "Asia-Pacific", geo: [-175.2, -21.14], isoN: "776",
      stance: "Data laws first: new privacy and e-transactions acts in 2025, with no AI-specific rules",
      summary:
        "Tonga has no AI law or AI-specific framework. In August 2025 its Legislative Assembly passed a Privacy Bill, alongside bills on health information and digital identification, which set ground rules for data-driven systems, including AI. Its parliament has joined regional and global discussions on AI governance.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 103742, year: 2025 }, gdpPerCapita: { v: 6547, year: 2025 }, internet: { v: 67.4, year: 2024 } },
      oxford: { rank: 156, scores: [4.0, 32.5, 7.39, 27.91, 24.07, 32.69] },
      msAdoption: null,
      facts: [
        {
          topic: "Regulation", date: "2025",
          text: "On 6 August 2025 the Legislative Assembly passed the Privacy Bill 2025 by 17 votes to 0, together with a Personal Health Information Protection Bill and a Civil Registration and Digital Identification Bill.",
          level: "single",
          sources: [
            S("Matangi Tonga - House closes for General Election campaign (11 Aug 2025)", "https://matangitonga.to/print/38216"),
          ],
        },
        {
          topic: "Parliament", date: "2025-11",
          text: "Tonga's Deputy Clerk of the Legislative Assembly attended a parliamentary conference in Kuala Lumpur on 28–30 November 2025 on global governance of AI.",
          level: "single",
          sources: [
            S("Matangi Tonga - Global parliamentarians push responsible AI governance (3 Dec 2025)", "https://matangitonga.to/2025/12/03/global-parliamentarians-push-responsible-ai-governance"),
          ],
        },
      ],
      news: [
      ],
    },

    // ------------------------------------------------------------------ SOLOMON ISLANDS
    {
      id: "sb", name: "Solomon Islands", flag: "🇸🇧", region: "Pacific", group: "Asia-Pacific", geo: [159.95, -9.43], isoN: "090",
      stance: "Use before rules: AI for disaster management",
      summary:
        "In November 2025 UNESCO selected EDiSON, an AI-supported disaster risk system built on SAP technology, for use in the country to help authorities respond faster to cyclones and floods.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 838645, year: 2025 }, gdpPerCapita: { v: 2086, year: 2025 }, internet: { v: 29.0, year: 2024 } },
      oxford: { rank: 162, scores: [4.0, 33.69, 12.64, 20.97, 20.46, 33.05] },
      msAdoption: null,
      facts: [
        {
          topic: "Disaster response", date: "2025-11-19",
          text: "UNESCO selected EDiSON, an AI-supported disaster risk management system developed by SAP Japan and an Oita University venture, for use in Solomon Islands.",
          level: "single",
          sources: [
            S("SAP News - SAP and UNESCO launch AI-assisted disaster risk system in Solomon Islands (19 Nov 2025)", "https://news.sap.com/2025/11/sap-unesco-launch-ai-assisted-disaster-risk-management-system-solomon-islands/"),
          ],
        },
      ],
      news: [
        {
          date: "2025-11-19", title: "AI disaster system selected for Solomon Islands",
          summary: "EDiSON merges real-time and historical data to help authorities act during cyclones and floods.",
          level: "single",
          sources: [
            S("SAP News", "https://news.sap.com/2025/11/sap-unesco-launch-ai-assisted-disaster-risk-management-system-solomon-islands/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ PALAU
    {
      id: "pw", name: "Palau", flag: "🇵🇼", region: "Pacific", group: "Asia-Pacific", geo: [134.62, 7.5], isoN: "585",
      stance: "Security-driven: a new presidential technology office after cyberattacks, with AI on its agenda",
      summary:
        "Palau has no AI law or AI strategy. After cyberattacks on its national hospital, police and banks, President Surangel Whipps Jr signed an executive order in April 2026 creating an Office of Applied Technology and Strategy in the Office of the President to centralise government technology planning, including cybersecurity, e-government and AI.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "Office of Applied Technology and Strategy", newestBodyDate: "2026-04" },
      stats: { population: { v: 17663, year: 2025 }, gdpPerCapita: { v: 19532, year: 2025 }, internet: { v: 83.9, year: 2024 } },
      oxford: { rank: 151, scores: [4.0, 41.48, 5.53, 22.37, 20.0, 38.46] },
      msAdoption: null,
      facts: [
        {
          topic: "Institutions", date: "2026-04",
          text: "President Surangel Whipps Jr signed an executive order creating an Office of Applied Technology and Strategy within the Office of the President, to strengthen cybersecurity, streamline government systems and push e-government after cyberattacks on key institutions.",
          level: "single",
          sources: [
            S("PINA - Palau is stepping up its digital defences (13 Apr 2026)", "https://pina.com.fj/2026/04/13/palau-is-stepping-up-its-digital-defences/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-04", title: "Palau creates presidential technology office",
          summary: "The new office will coordinate cybersecurity, e-government and AI use across government.",
          level: "single",
          sources: [
            S("PINA", "https://pina.com.fj/2026/04/13/palau-is-stepping-up-its-digital-defences/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ PALESTINE
    {
      id: "ps", name: "Palestine", flag: "🇵🇸", region: "Levant", group: "Middle East", geo: [35.2, 31.9], isoN: "275",
      stance: "Building under occupation: AI skills targets and a new digital economy council, with war and access limits as constraints",
      summary:
        "The Palestinian Ministry of Telecommunications and Digital Economy launched a public policy document for the telecoms and IT sectors for 2026–2028. In April 2026, at the launch of Palestine AI Week and a technology park, Prime Minister Mohammad Mustafa announced a National Council for Digital Economy and targets to train 10,000 young people in AI-related skills and make half of key government transactions paperless within 18 months.",
      glance: { firstStrategy: "—", latestStrategy: "Telecoms and IT public policy 2026–2028", newestBody: "National Council for Digital Economy (announced)", newestBodyDate: "2026-04-27" },
      stats: { population: { v: 5413596, year: 2025 }, gdpPerCapita: { v: 3171, year: 2025 }, internet: { v: 86.6, year: 2023 } },
      oxford: { rank: 115, scores: [42.5, 43.53, 17.42, 44.58, 37.58, 17.1] },
      msAdoption: null,
      facts: [
        {
          topic: "Skills", date: "2026-04-27",
          text: "Prime Minister Mohammad Mustafa announced a National Council for Digital Economy and set targets including training 10,000 young people in AI-related skills, employing 1,000 graduates a year in the field, and digitising 50% of key government transactions within 18 months.",
          level: "single",
          sources: [
            S("Sada News - Mustafa at launch of Palestine Week for AI 2026 (27 Apr 2026)", "https://www.sadanews.ps/en/news/297124.html"),
          ],
        },
        {
          topic: "Strategy", date: "2026-08",
          text: "The Ministry of Telecommunications and Digital Economy launched a Public Policy Document for the Telecommunications and IT Sectors 2026–2028.",
          level: "single",
          sources: [
            S("Al-Quds - An analytical reading of the public policy document for telecoms and IT (Aug 2026)", "https://www.alquds.com/en/posts/255121-an-analytical-reading-of-the-public-policy-document-for-the-telecommunications"),
          ],
        },
      ],
      news: [
        {
          date: "2026-04-27", title: "PM sets AI skills target at Palestine AI Week",
          summary: "Mustafa pledged to train 10,000 young people in AI-related skills and create a National Council for Digital Economy.",
          level: "single",
          sources: [
            S("Sada News", "https://www.sadanews.ps/en/news/297124.html"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BOLIVIA
    {
      id: "bo", name: "Bolivia", flag: "🇧🇴", region: "South America", group: "Americas", geo: [-68.15, -16.5], isoN: "068",
      stance: "Bill in limbo: an AI law giving the state tech agency AGETIC oversight passed the Senate but awaits the lower house",
      summary:
        "Bolivia has no AI law in force. In October 2025 the Senate passed a 31-article bill on the promotion, management and use of AI that would put the state technology agency AGETIC in charge of AI oversight and require a National AI Strategy within 180 days of enactment. The bill went to the Chamber of Deputies.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "AGETIC (proposed AI regulator)", newestBodyDate: "" },
      stats: { population: { v: 12581843, year: 2025 }, gdpPerCapita: { v: 5148, year: 2025 }, internet: { v: 79.7, year: 2024 } },
      oxford: { rank: 139, scores: [0.0, 32.51, 43.5, 44.98, 13.55, 26.92] },
      msAdoption: { h1_2025: 10.9, h2_2025: 11.6, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2025-10",
          text: "In October 2025 the Senate approved a 31-article bill on the promotion, management and use of AI. It would make the state technology agency AGETIC responsible for AI oversight, give it 90 days to write regulations and 180 days to set technical guidelines and a National AI Strategy. The bill went to the Chamber of Deputies.",
          level: "corroborated",
          sources: [
            S("El Deber - Senado aprueba proyecto de ley de uso de IA (23 Oct 2025)", "https://eldeber.com.bo/pais/senado-aprueba-proyecto-ley-uso-inteligencia-artificial-da-prerrogativas-agetic_1761265348"),
            S("CECASEM - Senado aprueba ley que otorga a la Agetic el control de la IA", "https://cecasem.com/notas/senado-aprueba-ley-que-otorga-a-la-agetic-el-control-del-desarrollo-y-uso-de-la-inteligencia-artificial-en-bolivia/"),
          ],
          note: "Sources date the Senate vote to 22 or 23 October 2025.",
        },
      ],
      news: [
        {
          date: "2026-10-20", title: "Bolivia 26.4 in the 2026 Latin American AI Index",
          summary: "Bolivia scored 26.4 out of 100 in the fourth Latin American AI Index (ILIA), published by Chile's CENIA and ECLAC on 20 October, in the 'explorers' group of countries below 35 points.",
          level: "single",
          sources: [
            S("Bloomberg Línea - Los países de América Latina más preparados para la IA, según ranking de Cepal (22 Oct 2026)", "https://www.bloomberglinea.com/tecnologia/los-paises-de-america-latina-mas-preparados-para-la-inteligencia-artificial-segun-ranking-de-cepal/"),
          ],
        },
        {
          date: "2025-10", title: "Senate passes AI bill",
          summary: "The bill bans manipulative AI, social scoring and mass facial recognition without a court order, and names AGETIC as regulator.",
          level: "corroborated",
          sources: [
            S("El Deber", "https://eldeber.com.bo/pais/senado-aprueba-proyecto-ley-uso-inteligencia-artificial-da-prerrogativas-agetic_1761265348"),
            S("CECASEM", "https://cecasem.com/notas/senado-aprueba-ley-que-otorga-a-la-agetic-el-control-del-desarrollo-y-uso-de-la-inteligencia-artificial-en-bolivia/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ NICARAGUA
    {
      id: "ni", name: "Nicaragua", flag: "🇳🇮", region: "Central America", group: "Americas", geo: [-86.25, 12.13], isoN: "558",
      stance: "Aligned with China: joined a Shanghai-based World AI Cooperation Organization, with no national AI law",
      summary:
        "Nicaragua has no AI law. In 2026 it signed and its National Assembly ratified the agreement establishing the World Organization for Cooperation in Artificial Intelligence, a China-based body, which it joined in Shanghai on 16 July 2026.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 7007502, year: 2025 }, gdpPerCapita: { v: 3173, year: 2025 }, internet: { v: 61.4, year: 2024 } },
      oxford: { rank: 163, scores: [7.5, 28.9, 41.66, 19.75, 11.9, 20.64] },
      msAdoption: { h1_2025: 10.0, h2_2025: 10.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "International", date: "2026-09-30",
          text: "The National Assembly ratified the agreement establishing the World Organization for Cooperation in Artificial Intelligence, which Nicaragua signed in Shanghai on 16 July 2026.",
          level: "single",
          sources: [
            S("Radio Nicaragua - Nicaragua ratifica creación de Organización Mundial sobre IA (30 Sep 2026)", "https://radionicaragua.com.ni/nicaragua-ratifica-creacion-de-organizacion-mundial-sobre-ia/"),
          ],
          note: "Coverage comes from state and pro-government media.",
        },
      ],
      news: [
        {
          date: "2026-09-30", title: "Nicaragua ratifies China-based AI cooperation body",
          summary: "The Assembly approved joining the World Organization for Cooperation in Artificial Intelligence.",
          level: "single",
          sources: [
            S("Radio Nicaragua", "https://radionicaragua.com.ni/nicaragua-ratifica-creacion-de-organizacion-mundial-sobre-ia/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BELIZE
    {
      id: "bz", name: "Belize", flag: "🇧🇿", region: "Central America", group: "Americas", geo: [-88.77, 17.25], isoN: "084",
      stance: "Courts first: a judicial rule on generative AI and regional digital leadership",
      summary:
        "Belize's Senior Courts issued a practice direction on the ethical use of generative AI in court proceedings in August 2025, requiring disclosure of AI use. In July 2026 Belize took the six-month presidency of the Central American (SICA) regional digital strategy group, with cybersecurity and AI among its priorities. The e-governance ministry backs 'augmented' AI that supports rather than replaces public officers.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 422924, year: 2025 }, gdpPerCapita: { v: 7865, year: 2025 }, internet: { v: 80.0, year: 2024 } },
      oxford: { rank: 158, scores: [7.5, 35.58, 23.08, 19.19, 13.59, 32.95] },
      msAdoption: null,
      facts: [
        {
          topic: "Regional", date: "2026-07",
          text: "Belize took the July–December 2026 presidency of the group implementing the Central American Integration System's Regional Digital Strategy, with cybersecurity and AI among its focus areas.",
          level: "single",
          sources: [
            S("Greater Belize Media - Belize takes regional digital leadership (4 Jul 2026)", "https://www.greaterbelize.com/belize-takes-regional-digital-leadership-sets-sights-on-cybersecurity-and-ai/"),
          ],
        },
        {
          topic: "Justice", date: "2025-08-12",
          text: "Belize's Senior Courts issued Practice Direction No. 18 of 2025 on the ethical use of generative AI in court proceedings on 12 August 2025. Anyone using AI must disclose it in court submissions.",
          level: "corroborated",
          sources: [
            S("UNODC - Safeguarding judicial integrity in the age of AI: a perspective from Belize", "https://www.unodc.org/dohadeclaration/en/news/2025/safeguarding-judicial-integrity-in-the-age-of-social-media-and-artificial-intelligence_a-perspective-from-belize.html"),
            S("Greater Belize Media - AI enters the courtroom as Belize acts to protect justice", "https://www.greaterbelize.com/ai-enters-the-courtroom-as-belize-acts-to-protect-justice/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-07", title: "Belize leads SICA digital strategy group",
          summary: "Belize's six-month presidency prioritises cybersecurity, electronic signatures and locally tailored AI.",
          level: "single",
          sources: [
            S("Greater Belize Media", "https://www.greaterbelize.com/belize-takes-regional-digital-leadership-sets-sights-on-cybersecurity-and-ai/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SURINAME
    {
      id: "sr", name: "Suriname", flag: "🇸🇷", region: "South America (Caribbean)", group: "Americas", geo: [-55.2, 5.85], isoN: "740",
      stance: "Assessment first: the first country in its region to run UNESCO's updated AI readiness method",
      summary:
        "Suriname's National Digital Strategy 2023–2030 treats AI as a driver of public-service reform. On 27 August 2026 it became the first country in the region to start UNESCO's updated AI Readiness Assessment (RAM 2.0), with 106 participants from 67 institutions at the launch meeting.",
      glance: { firstStrategy: "—", latestStrategy: "National Digital Strategy 2023–2030 (AI as a driver)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 639850, year: 2025 }, gdpPerCapita: { v: 7070, year: 2025 }, internet: { v: 87.4, year: 2023 } },
      oxford: { rank: 181, scores: [0.0, 34.91, 19.62, 7.65, 13.6, 21.53] },
      msAdoption: { h1_2025: 8.3, h2_2025: 9.0, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "Northern South America" },
      facts: [
        {
          topic: "Readiness", date: "2026-08-27",
          text: "On 27 August 2026 Suriname held the introductory meeting for its AI Readiness Assessment, the first in the region to use UNESCO's updated RAM 2.0 method. It drew 106 participants from 67 institutions across 10 sectors.",
          level: "corroborated",
          sources: [
            S("UNESCO - Suriname advances responsible AI governance with RAM 2.0", "https://www.unesco.org/en/articles/suriname-advances-responsible-ai-governance-unescos-ram-20"),
            S("Carib Newsroom - Suriname sets Caribbean benchmark with new UNESCO AI assessment", "https://caribnewsroom.com/suriname-sets-caribbean-benchmark-with-new-unesco-ai-assessment/"),
          ],
        },
        {
          topic: "Strategy", date: "2023-09",
          text: "Suriname's National Digital Strategy 2023–2030 names AI and automation as major drivers of digital transformation in public services.",
          level: "single",
          sources: [
            S("Government of Suriname - National Digital Strategy 2023–2030 (PDF)", "https://gov.sr/wp-content/uploads/2023/09/Suriname-National-Digital-Strategy-2023-2030.pdf"),
          ],
        },
      ],
      news: [
        {
          date: "2026-08-27", title: "Suriname starts UNESCO AI readiness assessment",
          summary: "The assessment will examine whether Suriname has the institutions, laws, infrastructure and skills to expand AI responsibly.",
          level: "corroborated",
          sources: [
            S("UNESCO", "https://www.unesco.org/en/articles/suriname-advances-responsible-ai-governance-unescos-ram-20"),
            S("Carib Newsroom", "https://caribnewsroom.com/suriname-sets-caribbean-benchmark-with-new-unesco-ai-assessment/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ HAITI
    {
      id: "ht", name: "Haiti", flag: "🇭🇹", region: "Caribbean", group: "Americas", geo: [-72.34, 18.54], isoN: "332",
      stance: "Bottom-up amid crisis: civil society and donors drafting an AI roadmap while the state focuses on security and elections",
      summary:
        "Haiti has no AI law or adopted AI strategy, and its political transition and security crisis limit policymaking. In August 2026 a group of organisations including ISOC Haiti, the ESIH engineering school and the Association for Responsible AI agreed to co-produce a national roadmap for responsible AI adoption. The telecoms regulator CONATEL presented AI as part of Haiti's digital strategy at the WSIS Forum in July 2026 and trained its staff in generative AI.",
      glance: { firstStrategy: "—", latestStrategy: "National AI roadmap in preparation (non-government)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 11906095, year: 2025 }, gdpPerCapita: { v: 2694, year: 2025 }, internet: { v: 47.9, year: 2024 } },
      oxford: { rank: 190, scores: [11.5, 17.97, 13.25, 14.64, 11.08, 23.46] },
      msAdoption: { h1_2025: 7.1, h2_2025: 7.6, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy", date: "2026-08-10",
          text: "On 10 August 2026 several organisations, including ESIH and the Association for Responsible AI, signed an agreement to jointly develop a national roadmap for the responsible adoption of AI in Haiti.",
          level: "single",
          sources: [
            S("HaitiLibre - Roadmap for the responsible adoption of AI in Haiti", "https://www.haitilibre.com/en/news-48192-haiti-technology-roadmap-for-the-responsible-adoption-of-artificial-intelligence-in-haiti.html"),
          ],
        },
        {
          topic: "Regulator", date: "2026-07-31",
          text: "The telecoms regulator CONATEL held a training on generative AI, prompt engineering and AI tools for its staff on 29–31 July 2026.",
          level: "single",
          sources: [
            S("CONATEL - Le CONATEL renforce les capacités de son personnel en IA", "https://conatel.gouv.ht/node/667"),
          ],
          note: "CONATEL's website could not be reached during the 20 October 2026 recheck; the claim rests on the page as read when it was added.",
        },
        {
          topic: "International", date: "2026-07-10",
          text: "At the WSIS Forum in Geneva (6–10 July 2026), CONATEL presented Haiti's digital strategy with AI as a lever for development. On 10 July it signed a memorandum with the Malaysian Communications and Multimedia Commission to strengthen cooperation between the two telecom regulators.",
          level: "single",
          sources: [
            S("Juno7 - Haïti met l'IA au cœur de sa stratégie numérique à Genève (15 Jul 2026)", "https://www.juno7.ht/haiti-intelligence-artificielle-wsis-geneve-2026/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-08-10", title: "Groups sign up to draft Haiti's AI roadmap",
          summary: "The partners agreed working methods and roles for a national roadmap on responsible AI adoption.",
          level: "single",
          sources: [
            S("HaitiLibre", "https://www.haitilibre.com/en/news-48192-haiti-technology-roadmap-for-the-responsible-adoption-of-artificial-intelligence-in-haiti.html"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SAINT LUCIA
    {
      id: "lc", name: "Saint Lucia", flag: "🇱🇨", region: "Caribbean", group: "Americas", geo: [-60.99, 14.01], isoN: "662",
      stance: "Early stage: AI debated in schools and productivity policy",
      summary:
        "The government of Saint Lucia has pushed AI for productivity since 2024, and in January 2026 the education and digital transformation minister raised concerns about AI use in Caribbean exam coursework.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 180149, year: 2025 }, gdpPerCapita: { v: 14746, year: 2025 }, internet: { v: 68.2, year: 2024 } },
      oxford: { rank: 142, scores: [4.0, 40.16, 34.38, 37.0, 13.0, 22.66] },
      msAdoption: null,
      facts: [
        {
          topic: "Education", date: "2026-01-26",
          text: "Education and Digital Transformation Minister Kenson Casimir raised concerns about students using AI in CXC School-Based Assessments.",
          level: "single",
          sources: [
            S("The Voice - AI and the future of learning in Saint Lucia (Feb 2026)", "https://thevoiceslu.com/2026/02/artificial-intelligence-the-future-of-learning-in-saint-lucia/"),
          ],
        },
        {
          topic: "Productivity", date: "2024-10",
          text: "The National Competitiveness and Productivity Council made AI the theme of its 2024 Productivity Awareness Week, under the title 'The AI Effect'.",
          level: "single",
          sources: [
            S("St. Lucia Times - Saint Lucia considers AI to enhance productivity (Oct 2024)", "https://stluciatimes.com/166394/2024/10/saint-lucia-considers-artificial-intelligence-to-enhance-productivity/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-01-26", title: "Minister raises concern over AI in exam coursework",
          summary: "The concerns sparked debate on how to bring AI into schools responsibly rather than ban it.",
          level: "single",
          sources: [
            S("The Voice", "https://thevoiceslu.com/2026/02/artificial-intelligence-the-future-of-learning-in-saint-lucia/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ ANTIGUA AND BARBUDA
    {
      id: "ag", name: "Antigua and Barbuda", flag: "🇦🇬", region: "Caribbean", group: "Americas", geo: [-61.85, 17.12], isoN: "028",
      stance: "Draft law, no strategy: the prime minister says AI legislation is drafted, with AI scholarships and health and school plans",
      summary:
        "Antigua and Barbuda has no AI law or national AI strategy. In August 2025 Prime Minister Gaston Browne said draft legislation had been prepared to guard against misuse of AI, and that the government had funded dozens of scholarships in AI and computer science. Earlier in 2025 he set out plans to use AI in health care and education.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 94209, year: 2025 }, gdpPerCapita: { v: 24819, year: 2025 }, internet: { v: 72.7, year: 2024 } },
      oxford: { rank: 147, scores: [23.0, 32.23, 48.38, 12.71, 12.68, 23.49] },
      msAdoption: null,
      facts: [
        {
          topic: "Regulation", date: "2025-08-31",
          text: "Prime Minister Gaston Browne said his government had prepared draft legislation to regulate AI and address 'any nefarious use of AI', and had awarded dozens of scholarships in AI and computer science.",
          level: "single",
          sources: [
            S("Antigua News Room - Antigua and Barbuda drafting AI legislation, PM confirms (31 Aug 2025)", "https://antiguanewsroom.com/antigua-and-barbuda-drafting-legislation-to-regulate-the-use-of-artificial-intelligence-pm-confirms/"),
          ],
          note: "Read in a browser; the page blocks automated requests.",
        },
        {
          topic: "Public sector", date: "2025-05-25",
          text: "Browne set out plans to use AI to improve health care and education, which he said would require far more internet bandwidth.",
          level: "single",
          sources: [
            S("Antigua News Room - PM Browne eyes AI to transform public services (25 May 2025)", "https://antiguanewsroom.com/pm-browne-eyes-ai-to-transform-public-services-ahead-of-uwi-conference/"),
          ],
          note: "Read in a browser; the page blocks automated requests.",
        },
      ],
      news: [
        {
          date: "2025-08-31", title: "PM confirms draft AI law",
          summary: "Browne said the draft aims to prevent misuse while supporting creative uses of AI.",
          level: "single",
          sources: [
            S("Antigua News Room", "https://antiguanewsroom.com/antigua-and-barbuda-drafting-legislation-to-regulate-the-use-of-artificial-intelligence-pm-confirms/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GRENADA
    {
      id: "gd", name: "Grenada", flag: "🇬🇩", region: "Caribbean", group: "Americas", geo: [-61.75, 12.06], isoN: "308",
      stance: "Regional voice: Grenada's prime minister leads CARICOM on science and technology and pushes small-state AI interests",
      summary:
        "Grenada has no national AI law or strategy. Its Prime Minister, Dickon Mitchell, is CARICOM's lead head of government for science and technology, and in June 2026 urged the region to speed up digital transformation, warning that rules on AI and data are being set without small states. In August 2026 Grenada called at a UN forum for responsible AI with human oversight and data sovereignty.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 117303, year: 2025 }, gdpPerCapita: { v: 12107, year: 2025 }, internet: { v: 70.2, year: 2024 } },
      oxford: { rank: 176, scores: [0.0, 32.42, 19.62, 20.45, 12.02, 22.44] },
      msAdoption: null,
      facts: [
        {
          topic: "Regional", date: "2026-06",
          text: "Prime Minister Dickon Mitchell urged CARICOM to accelerate digital transformation to protect competitiveness, resilience and sovereignty, saying rules on digital trade, AI and data are evolving without meaningful small-state participation.",
          level: "verified",
          sources: [
            S("CARICOM - CARICOM must accelerate digital transformation, Grenada PM says", "https://caricom.org/caricom-must-accelerate-digital-transformation-to-safeguard-competitiveness-resilience-and-sovereignty-grenada-prime-minister/"),
            S("NOW Grenada - Grenada PM calls for faster digital transformation across CARICOM (Jun 2026)", "https://nowgrenada.com/2026/06/grenada-pm-calls-for-faster-digital-transformation-across-caricom/"),
            S("Caribbean National Weekly - CARICOM urged to accelerate digital transformation", "https://www.caribbeannationalweekly.com/posts/caricom-urged-to-accelerate-digital-transformation-to-strengthen-competitiveness-resilience"),
          ],
        },
        {
          topic: "International", date: "2026-08",
          text: "At the UN Convention to Combat Desertification COP17, Grenada called for inclusive and responsible use of digital tools and AI for land restoration, with safeguards for data sovereignty and human oversight.",
          level: "single",
          sources: [
            S("NOW Grenada - Grenada calls for inclusive and responsible use of digitalisation and AI (Aug 2026)", "https://nowgrenada.com/2026/08/grenada-calls-for-inclusive-and-responsible-use-of-digitalisation-and-ai/"),
          ],
        },
        {
          topic: "Regional", date: "2025-10",
          text: "Mitchell is CARICOM's lead head of government with responsibility for science and technology.",
          level: "single",
          sources: [
            S("CARICOM - Message by PM Dickon Mitchell for Caribbean Statistics Day", "https://caricom.org/message-by-the-hon-dickon-mitchell-prime-minister-of-grenada-and-lead-head-of-government-with-responsibility-for-science-and-technology-in-the-caricom-quasi-cabinet-caribbean-statistics-day-15-o/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-06", title: "Grenada PM urges faster CARICOM digital push",
          summary: "Mitchell warned that AI and data rules are being written without small states at the table.",
          level: "verified",
          sources: [
            S("CARICOM", "https://caricom.org/caricom-must-accelerate-digital-transformation-to-safeguard-competitiveness-resilience-and-sovereignty-grenada-prime-minister/"),
            S("NOW Grenada", "https://nowgrenada.com/2026/06/grenada-pm-calls-for-faster-digital-transformation-across-caricom/"),
            S("Caribbean National Weekly", "https://www.caribbeannationalweekly.com/posts/caricom-urged-to-accelerate-digital-transformation-to-strengthen-competitiveness-resilience"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BURUNDI
    {
      id: "bi", name: "Burundi", flag: "🇧🇮", region: "East Africa", group: "Africa", geo: [29.36, -3.38], isoN: "108",
      stance: "Strategy validated, funding sought: a 2026–2030 AI strategy built with UNDP, now looking for partners",
      summary:
        "Burundi validated a National AI Strategy for 2026–2030 at a workshop in Bujumbura on 21–22 April 2026, led by the finance and digital economy ministry with UNDP support and aligned with the country's Vision 2040. It has no AI law. In September 2026 the finance minister presented Burundi's AI priorities at a Korea–Africa conference in Seoul as the country looks for funding.",
      glance: { firstStrategy: "2026 (National AI Strategy 2026–2030)", latestStrategy: "2026 (National AI Strategy 2026–2030)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 14390003, year: 2025 }, gdpPerCapita: { v: 234, year: 2025 }, internet: { v: 8.6, year: 2024 } },
      oxford: { rank: 185, scores: [11.5, 16.63, 11.63, 36.43, 12.19, 16.62] },
      msAdoption: { h1_2025: 6.4, h2_2025: 6.8, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "East Africa" },
      facts: [
        {
          topic: "Strategy", date: "2026-04-21",
          text: "On 21–22 April 2026 a national workshop in Bujumbura validated the National AI Strategy for 2026–2030, led by the Ministry of Finance, Budget and Digital Economy with UNDP support.",
          level: "verified",
          sources: [
            S("TechAfrica News - Burundi launches framework to integrate AI (23 Apr 2026)", "https://techafricanews.com/2026/04/23/burundi-launches-framework-to-integrate-artificial-intelligence-into-governance-and-economy/"),
            S("Digital Business Africa - Burundi: la Stratégie nationale de l'IA validée", "https://www.digitalbusiness.africa/burundi-la-strategie-nationale-de-lintelligence-artificielle-validee-axes-et-objectifs/"),
            S("iAfrica - Burundi validates National AI Strategy for 2026–2030 (27 Apr 2026)", "https://iafrica.com/burundi-validates-national-ai-strategy-for-2026-2030-at-bujumbura-workshop/"),
          ],
          note: "ARIB.info republishes the Digital Business Africa article; one source reports a 2025–2030 period.",
        },
        {
          topic: "International", date: "2026-09",
          text: "Finance Minister Alain Ndikumana presented Burundi's AI ambitions at the KOAFEC Korea–Africa conference in Seoul, where funding and partnerships were the main open questions.",
          level: "single",
          sources: [
            S("We Are Tech Africa - À Séoul, le Burundi présente ses ambitions en IA (10 Sep 2026)", "https://www.wearetech.africa/fr/fils/actualites/tech/intelligence-artificielle-a-seoul-le-burundi-presente-ses-ambitions"),
          ],
        },
      ],
      news: [
        {
          date: "2026-04-21", title: "Burundi validates national AI strategy",
          summary: "The 2026–2030 strategy, built with UNDP, is aligned with Vision Burundi 2040.",
          level: "verified",
          sources: [
            S("TechAfrica News", "https://techafricanews.com/2026/04/23/burundi-launches-framework-to-integrate-artificial-intelligence-into-governance-and-economy/"),
            S("Digital Business Africa", "https://www.digitalbusiness.africa/burundi-la-strategie-nationale-de-lintelligence-artificielle-validee-axes-et-objectifs/"),
            S("iAfrica", "https://iafrica.com/burundi-validates-national-ai-strategy-for-2026-2030-at-bujumbura-workshop/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ COMOROS
    {
      id: "km", name: "Comoros", flag: "🇰🇲", region: "East Africa (Indian Ocean)", group: "Africa", geo: [43.26, -11.7], isoN: "174",
      stance: "First steps: a first national AI forum",
      summary:
        "In spring 2026 the country held its first national AI forum, where the digital economy minister called for an ecosystem to help young people, businesses and government adopt AI.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 882847, year: 2025 }, gdpPerCapita: { v: 2056, year: 2025 }, internet: { v: 32.5, year: 2024 } },
      oxford: { rank: 171, scores: [7.5, 31.82, 10.24, 34.47, 10.01, 27.53] },
      msAdoption: null,
      facts: [
        {
          topic: "Ecosystem", date: "2026-04",
          text: "The Comoros held its first national forum on artificial intelligence, reported by local newspapers on 2 April 2026.",
          level: "corroborated",
          sources: [
            S("Al-Fajr - Les Comores explorent l'intelligence artificielle (2 Apr 2026)", "https://www.al-fajrquotidien.com/technologie-numerique-les-comores-explorent-lintelligence-artificielle/"),
            S("Al-Watwan - Le premier forum fait jaillir les défis et opportunités de l'IA", "https://alwatwan.net/societe/intelligence-artificielle-aux-comores-i-le-premier-forum-fait-jaillir-les-d%C3%A9fis-et-les-opportunit%C3%A9s-de-l%E2%80%99ia.html"),
          ],
        },
      ],
      news: [
        {
          date: "2026-04", title: "Comoros holds first national AI forum",
          summary: "Officials discussed training, research partnerships and a national framework for data security and ethical AI.",
          level: "corroborated",
          sources: [
            S("Al-Fajr", "https://www.al-fajrquotidien.com/technologie-numerique-les-comores-explorent-lintelligence-artificielle/"),
            S("Al-Watwan", "https://alwatwan.net/societe/intelligence-artificielle-aux-comores-i-le-premier-forum-fait-jaillir-les-d%C3%A9fis-et-les-opportunit%C3%A9s-de-l%E2%80%99ia.html"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ SÃO TOMÉ AND PRÍNCIPE
    {
      id: "st", name: "São Tomé and Príncipe", flag: "🇸🇹", region: "Central Africa", group: "Africa", geo: [6.73, 0.34], isoN: "678",
      stance: "Very early: AI discussed mainly through UN reports",
      summary:
        "São Tomé and Príncipe has no AI law or AI strategy; its 2020 national digital governance strategy predates the current AI wave. In August 2025 UNDP and the foreign ministry launched the Human Development Report on AI with a national panel on AI's risks and opportunities.",
      glance: { firstStrategy: "—", latestStrategy: "2020 (National Digital Governance Strategy)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 240254, year: 2025 }, gdpPerCapita: { v: 4084, year: 2025 }, internet: { v: 59.1, year: 2024 } },
      oxford: { rank: 180, scores: [0.0, 29.52, 27.86, 15.63, 10.03, 19.58] },
      msAdoption: null,
      facts: [
        {
          topic: "Development", date: "2025-08-01",
          text: "On 1 August 2025 UNDP and the Ministry of Foreign Affairs launched the 2025 Human Development Report, on people and possibilities in the age of AI, with a high-level panel on AI's opportunities and risks for São Tomé and Príncipe.",
          level: "single",
          sources: [
            S("UNDP São Tomé and Príncipe - PNUD lança Relatório de Desenvolvimento Humano 2024/2025 (1 Aug 2025)", "https://www.undp.org/pt/sao-tome-principe/press-releases/pnud-lanca-relatorio-de-desenvolvimento-humano-2024/2025-em-sao-tome-e-principe"),
          ],
          note: "Read in a browser; the page blocks automated requests.",
        },
        {
          topic: "Strategy", date: "2020",
          text: "A National Strategy for Digital Governance was prepared in 2020 with the UN University's e-governance unit.",
          level: "single",
          sources: [
            S("UNU-EGOV - National Strategy for Digital Governance, São Tomé and Príncipe", "https://unu.edu/egov/project/national-strategy-digital-governance-sao-tome-and-principe"),
          ],
        },
      ],
      news: [],
    },

    // ------------------------------------------------------------------ SAINT KITTS AND NEVIS (added 14 Oct 2026)
    {
      id: "kn", name: "Saint Kitts and Nevis", flag: "🇰🇳", region: "Caribbean", group: "Americas", geo: [-62.72, 17.3], isoN: "659",
      stance: "Regional-first: no AI law yet, with leaders backing a coordinated CARICOM approach",
      summary:
        "Saint Kitts and Nevis has no dedicated AI law; existing data protection, electronic transactions, cybercrime and consumer laws give only partial cover. Prime Minister Terrance Drew's government has proposed AI-driven traffic management, the Federation joined the UN's AI Youth Conference in August 2026, and Nevis Premier Mark Brantley has called for a coordinated Caribbean response built on CARICOM's AI policy roadmap.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 46922, year: 2025 }, gdpPerCapita: { v: 25223, year: 2025 }, internet: { v: 76.9, year: 2024 } },
      oxford: { rank: 170, scores: [11.5, 33.72, 29.62, 5.43, 12.84, 27.99] },
      msAdoption: null,
      facts: [
        {
          topic: "Politics", date: "2026-09-27",
          text: "Nevis Premier and opposition leader Mark Brantley urged a coordinated Caribbean response to AI, crediting CARICOM's July 2026 endorsement of the UNESCO Caribbean AI Policy Roadmap. He noted that Nevis's earlier plan to teach coding in every school had been overtaken by AI tools.",
          level: "single",
          sources: [
            S("St Kitts Nevis Observer - 'AI will not wait for the Caribbean', op-ed by Mark Brantley (27 Sep 2026)", "https://www.thestkittsnevisobserver.com/ai-will-not-wait-for-the-caribbean-the-time-for-regional-action-is-now-op-ed-by-hon-mark-brantley/"),
          ],
        },
        {
          topic: "Regulation", date: "2026-09",
          text: "Saint Kitts and Nevis has no dedicated AI legislation. Laws on data protection, electronic transactions, cybercrime and consumer protection offer only partial guidance; across 13 Caribbean states reviewed, none had an AI-specific regulatory framework.",
          level: "single",
          sources: [
            S("Commonwealth Lawyers Association - AI and the law: a St Kitts and Nevis case study (Sep 2026)", "https://www.commonwealthlawyers.com/cla/ai-and-the-law-why-readiness-must-precede-expansion-a-st-christopher-st-kitts-and-nevis-case-study-by-edisha-k-greene/"),
          ],
        },
        {
          topic: "International", date: "2026-08",
          text: "Saint Kitts and Nevis took part in the UN AI Youth Conference on International Youth Day and welcomed its Youth-Led Declaration on AI Policy and Governance.",
          level: "single",
          sources: [
            S("Ministry of Foreign Affairs - St Kitts and Nevis joins UN youth dialogue on AI (Aug 2026)", "https://www.mofa.gov.kn/2026/09/06/st-kitts-and-nevis-joins-global-youth-dialogue-on-the-future-of-artificial-intelligence-at-the-united-nations-on-international-youth-day/"),
          ],
        },
        {
          topic: "Public sector", date: "2024",
          text: "Prime Minister Terrance Drew said the government was evaluating proposals for AI-driven traffic monitoring to improve road safety and cut congestion.",
          level: "single",
          sources: [
            S("St Kitts Nevis Observer - Drew-led government to harness technology and AI for safer roads", "https://www.thestkittsnevisobserver.com/drew-led-government-to-harness-technology-and-ai-for-safer-roads-in-st-kitts-and-nevis/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-09-27", title: "Nevis Premier calls for regional action on AI",
          summary: "Mark Brantley argued the Caribbean must shape AI's impact together through CARICOM rather than let it happen to the region.",
          level: "single",
          sources: [
            S("St Kitts Nevis Observer - 'AI will not wait for the Caribbean', op-ed by Mark Brantley (27 Sep 2026)", "https://www.thestkittsnevisobserver.com/ai-will-not-wait-for-the-caribbean-the-time-for-regional-action-is-now-op-ed-by-hon-mark-brantley/"),
          ],
        },
        {
          date: "2026-08", title: "Federation joins UN AI Youth Conference",
          summary: "Young nationals took part, and the government welcomed the conference's Youth-Led Declaration on AI governance.",
          level: "single",
          sources: [
            S("Ministry of Foreign Affairs - St Kitts and Nevis joins UN youth dialogue on AI (Aug 2026)", "https://www.mofa.gov.kn/2026/09/06/st-kitts-and-nevis-joins-global-youth-dialogue-on-the-future-of-artificial-intelligence-at-the-united-nations-on-international-youth-day/"),
          ],
        },
      ],
    },

  );
})();

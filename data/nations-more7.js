// Atlas dataset, part 8: the first larger countries inside the scope (added 5 Nov 2026, largest first).
// The scope changed on 5 Nov 2026 from "states under 15 million people" to "countries outside the AI frontier"
// (see data/scope.js and METHODOLOGY.md). Same verification rules as the other data files: every source was
// fetched and its key details checked by hand. Readiness ranks are from the Oxford Insights table, AI usage
// from Microsoft's H2 2025 appendix, and population, GDP and internet use from the World Bank API.

(function () {
  const S = (t, u) => ({ t, u });

  window.ATLAS.nations.push(
    // ------------------------------------------------------------------ INDIA
    {
      id: "in", name: "India", flag: "🇮🇳", region: "South Asia", group: "Asia-Pacific", geo: [77.21, 28.61], isoN: "356",
      stance: "Adoption at scale: a funded national AI mission with its own compute, and governance by guidelines that lean on existing law",
      summary:
        "India treats AI as a development and industrial project run from the centre. A 2018 strategy paper by the government's think tank set the '#AIforAll' line, and in March 2024 the Cabinet funded the IndiaAI Mission, including shared computing capacity. In November 2025 the IT ministry published governance guidelines built on principles and existing legislation, and in February 2026 New Delhi hosted the AI Impact Summit, which ended with a declaration endorsed by 88 countries and international organisations.",
      glance: { firstStrategy: "2018 (NITI Aayog strategy paper)", latestStrategy: "2024 (IndiaAI Mission)", newestBody: "AI Governance Group (set out in the 2025 guidelines)", newestBodyDate: "2025-11" },
      stats: { population: { v: 1463865525, year: 2025 }, gdpPerCapita: { v: 2702, year: 2025 }, internet: { v: 70.0, year: 2025 } },
      oxford: { rank: 27, scores: [96.0, 63.31, 64.03, 79.07, 54.85, 59.46] },
      msAdoption: { h1_2025: 14.2, h2_2025: 15.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "International", date: "2026-02-21",
          text: "The India AI Impact Summit in New Delhi ended on 21 February 2026 with the adoption of the New Delhi Declaration on AI Impact, endorsed by 88 countries and international organisations.",
          level: "verified",
          sources: [
            S("News On AIR (All India Radio) - India-AI Impact Summit concludes with adoption of New Delhi Declaration (21 Feb 2026)", "https://www.newsonair.gov.in/india-ai-impact-summit-2026-adopts-new-delhi-declaration"),
            S("ThePrint - AI Summit ends with 88 nations adopting New Delhi Declaration", "https://theprint.in/tech/ai-summit-ends-with-88-nations-adopting-new-delhi-declaration-calls-for-cooperation-sovereignty/2860446"),
            S("Business Today - 86 countries back India AI Impact Summit declaration (21 Feb 2026)", "https://www.businesstoday.in/india/story/86-countries-back-india-ai-impact-summit-declaration-call-ai-a-shared-global-responsibility-517408-2026-02-21"),
          ],
          note: "Counts differ by outlet and hour: Business Today reported 86 countries plus two organisations, the public broadcaster 88 countries and organisations in all.",
        },
        {
          topic: "Regulation", date: "2025-11-05",
          text: "On 5 November 2025 the Ministry of Electronics and IT released the India AI Governance Guidelines under the IndiaAI Mission: seven guiding principles ('sutras'), recommendations across six pillars, an action plan, and practical guidance for industry, developers and regulators. The ministry's secretary said the focus is on using existing legislation wherever possible. The guidelines provide for an AI Governance Group, supported by an expert committee and the AI Safety Institute.",
          level: "corroborated",
          sources: [
            S("Press Information Bureau - MeitY unveils India AI Governance Guidelines (5 Nov 2025)", "https://pib.gov.in/PressReleasePage.aspx?PRID=2186639"),
            S("The Tribune (ANI) - MeitY unveils India AI governance guidelines", "https://www.tribuneindia.com/news/business/meity-unveils-india-ai-governance-guidelines-to-ensure-safe-inclusive-and-responsible-ai-adoption"),
          ],
        },
        {
          topic: "Compute & infrastructure", date: "2024-03-07",
          text: "On 7 March 2024 the Cabinet approved more than ₹10,300 crore over five years for the IndiaAI Mission. Its parts include computing capacity of more than 10,000 GPUs built with private partners, an innovation centre, a datasets platform, skills programmes, start-up financing and work on safe and trusted AI.",
          level: "corroborated",
          sources: [
            S("Press Information Bureau - Cabinet approves over Rs 10,300 crore for IndiaAI Mission (7 Mar 2024)", "https://pib.gov.in/PressReleasePage.aspx?PRID=2012375"),
            S("India TV News - Government approves IndiaAI Mission with outlay of Rs 10,372 crore", "https://www.indiatvnews.com/technology/news/government-approves-indiaai-mission-with-outlay-of-rs-10-372-crore-here-s-everything-you-need-to-know-2024-03-07-920395"),
          ],
          note: "The government release rounds the sum to 'over Rs 10,300 crore'; press reports give Rs 10,372 crore.",
        },
        {
          topic: "Strategy & readiness", date: "2018",
          text: "NITI Aayog, the government's policy think tank, published a discussion paper, the National Strategy for Artificial Intelligence, under the banner '#AIforAll'. The 2018–19 budget speech had asked it to set up a national programme on AI.",
          level: "single",
          sources: [
            S("NITI Aayog - National Strategy for Artificial Intelligence (PDF)", "https://www.niti.gov.in/sites/default/files/2023-03/National-Strategy-for-Artificial-Intelligence.pdf"),
          ],
        },
      ],
      news: [
        {
          date: "2026-02-21", title: "AI Impact Summit ends with the New Delhi Declaration",
          summary: "The declaration on AI impact was endorsed by 88 countries and international organisations as the summit closed in New Delhi.",
          level: "verified",
          sources: [
            S("News On AIR (All India Radio) - India-AI Impact Summit concludes with adoption of New Delhi Declaration (21 Feb 2026)", "https://www.newsonair.gov.in/india-ai-impact-summit-2026-adopts-new-delhi-declaration"),
            S("ThePrint - AI Summit ends with 88 nations adopting New Delhi Declaration", "https://theprint.in/tech/ai-summit-ends-with-88-nations-adopting-new-delhi-declaration-calls-for-cooperation-sovereignty/2860446"),
            S("Business Today - 86 countries back India AI Impact Summit declaration (21 Feb 2026)", "https://www.businesstoday.in/india/story/86-countries-back-india-ai-impact-summit-declaration-call-ai-a-shared-global-responsibility-517408-2026-02-21"),
          ],
        },
        {
          date: "2025-11-05", title: "India publishes AI governance guidelines",
          summary: "Seven principles and six pillars, with existing laws used wherever possible instead of a new AI act.",
          level: "corroborated",
          sources: [
            S("Press Information Bureau - MeitY unveils India AI Governance Guidelines (5 Nov 2025)", "https://pib.gov.in/PressReleasePage.aspx?PRID=2186639"),
            S("The Tribune (ANI) - MeitY unveils India AI governance guidelines", "https://www.tribuneindia.com/news/business/meity-unveils-india-ai-governance-guidelines-to-ensure-safe-inclusive-and-responsible-ai-adoption"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ INDONESIA
    {
      id: "id", name: "Indonesia", flag: "🇮🇩", region: "Southeast Asia", group: "Asia-Pacific", geo: [106.85, -6.21], isoN: "360",
      stance: "Roadmap stage: a national AI roadmap white paper to 2045, building on a 2020 strategy",
      summary:
        "Indonesia's first framework was a National AI Strategy for 2020 to 2045. In August 2025 the Ministry of Communication and Digital Affairs put out a White Paper on the National AI Roadmap for public consultation, drafted by a task force from government, universities, industry, civil society and the media. It sets out plans for the AI ecosystem, development priorities and financing.",
      glance: { firstStrategy: "2020 (National AI Strategy 2020–2045)", latestStrategy: "2025 (AI Roadmap white paper, in consultation)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 285721236, year: 2025 }, gdpPerCapita: { v: 5060, year: 2025 }, internet: { v: 72.8, year: 2024 } },
      oxford: { rank: 46, scores: [77.0, 60.28, 61.25, 73.77, 44.09, 58.27] },
      msAdoption: { h1_2025: 11.7, h2_2025: 12.7, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy & readiness", date: "2025-08",
          text: "In early August 2025 the Ministry of Communication and Digital Affairs released a White Paper on the National AI Roadmap and circulated it for public consultation. Drafted by a task force from government, academia, industry, civil society and the media, it sets three action plans (the AI ecosystem, development priorities and financing) across three horizons: 2025–2027, 2028–2035 and 2035–2045.",
          level: "single",
          sources: [
            S("GovInsider - Indonesia unveils national AI roadmap", "https://govinsider.asia/intl-en/article/indonesia-unveils-national-ai-roadmap"),
            S("InfoPublik (ministry press release) - Indonesia susun roadmap AI nasional (26 Jun 2025)", "https://infopublik.id/kategori/siaran-pers/926469/siaran-pers-indonesia-susun-roadmap-ai-nasional-target-jadi-pemimpin-digital-asia"),
          ],
          note: "The ministry's own June 2025 release confirms that the roadmap was being drafted; the details of the white paper rest on GovInsider.",
        },
        {
          topic: "Strategy & readiness", date: "2020",
          text: "Indonesia's first framework was the National AI Strategy 2020–2045, developed by KORIKA, a body of scientists, officials and industry leaders formed to speed up the country's AI ecosystem.",
          level: "single",
          sources: [
            S("GovInsider - Indonesia unveils national AI roadmap", "https://govinsider.asia/intl-en/article/indonesia-unveils-national-ai-roadmap"),
          ],
        },
      ],
      news: [
        {
          date: "2025-08", title: "Indonesia opens its AI roadmap white paper for consultation",
          summary: "The white paper sets policy directions, priorities and financing models for AI to 2045.",
          level: "single",
          sources: [
            S("GovInsider - Indonesia unveils national AI roadmap", "https://govinsider.asia/intl-en/article/indonesia-unveils-national-ai-roadmap"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ PAKISTAN
    {
      id: "pk", name: "Pakistan", flag: "🇵🇰", region: "South Asia", group: "Asia-Pacific", geo: [73.05, 33.69], isoN: "586",
      stance: "A first national AI policy with large training targets and funds to draw in private money",
      summary:
        "Pakistan's federal cabinet approved the National Artificial Intelligence Policy 2025 on 30 July 2025. It aims to train one million AI professionals by 2030 and creates an AI Innovation Fund and an AI Venture Fund, with targets for home-grown AI products and public-service projects.",
      glance: { firstStrategy: "2025 (National AI Policy)", latestStrategy: "2025 (National AI Policy)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 255219554, year: 2025 }, gdpPerCapita: { v: 1596, year: 2025 }, internet: { v: 57.3, year: 2024 } },
      oxford: { rank: 81, scores: [61.5, 41.23, 61.25, 36.51, 36.95, 50.21] },
      msAdoption: { h1_2025: 9.7, h2_2025: 10.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy & readiness", date: "2025-07-30",
          text: "On 30 July 2025 the federal cabinet, chaired by Prime Minister Shehbaz Sharif, approved the National Artificial Intelligence Policy 2025. It aims to train one million AI professionals by 2030, launch 1,000 local AI products and 50,000 AI-enabled civic projects over five years, and sets up an AI Innovation Fund and an AI Venture Fund to bring in private investment.",
          level: "corroborated",
          sources: [
            S("Profit (Pakistan Today) - Pakistan approves landmark AI Policy 2025 (30 Jul 2025)", "https://profit.pakistantoday.com.pk/2025/07/30/pakistan-approves-landmark-ai-policy-2025-to-drive-digital-transformation-and-empower-youth/"),
            S("Business Recorder - Pakistan govt approves National AI Policy 2025", "https://www.brecorder.com/news/40375484/pakistan-govt-approves-national-ai-policy-2025"),
          ],
          note: "The two funds are named only by Profit; both reports give the training, product and project targets.",
        },
      ],
      news: [
        {
          date: "2025-07-30", title: "Cabinet approves Pakistan's first AI policy",
          summary: "The policy targets one million trained AI professionals by 2030 and 3,000 scholarships a year.",
          level: "corroborated",
          sources: [
            S("Profit (Pakistan Today) - Pakistan approves landmark AI Policy 2025 (30 Jul 2025)", "https://profit.pakistantoday.com.pk/2025/07/30/pakistan-approves-landmark-ai-policy-2025-to-drive-digital-transformation-and-empower-youth/"),
            S("Business Recorder - Pakistan govt approves National AI Policy 2025", "https://www.brecorder.com/news/40375484/pakistan-govt-approves-national-ai-policy-2025"),
          ],
          note: "The scholarship figure comes from Profit.",
        },
      ],
    },

    // ------------------------------------------------------------------ NIGERIA
    {
      id: "ng", name: "Nigeria", flag: "🇳🇬", region: "West Africa", group: "Africa", geo: [7.49, 9.06], isoN: "566",
      stance: "Strategy launched, law on the way: a national AI strategy and a digital-economy bill that would regulate higher-risk AI",
      summary:
        "Nigeria launched its National AI Strategy in April 2025, two months after the Federal Executive Council approved a National AI Trust of experts and ministers. In January 2026 a National Digital Economy and E-Governance Bill was before the National Assembly; it would put higher-risk AI systems under stricter scrutiny and give regulators powers over algorithms and platforms.",
      glance: { firstStrategy: "2025 (National AI Strategy)", latestStrategy: "2025 (National AI Strategy)", newestBody: "National AI Trust", newestBodyDate: "2025-02-04" },
      stats: { population: { v: 237527782, year: 2025 }, gdpPerCapita: { v: 1224, year: 2025 }, internet: { v: 41.2, year: 2024 } },
      oxford: { rank: 70, scores: [80.5, 39.1, 78.13, 47.46, 39.45, 42.66] },
      msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2026-01",
          text: "In January 2026 a National Digital Economy and E-Governance Bill was before the National Assembly, with lawmakers expecting to pass it by the end of March. It would give regulators broad powers over data use, algorithms and digital platforms, put higher-risk AI systems (in finance, public administration, surveillance and automated decisions) under stricter scrutiny, and require developers to file yearly impact assessments.",
          level: "single",
          sources: [
            S("BusinessDay - Nigeria set to pass AI law, among first in Africa to regulate sector", "https://businessday.ng/technology/article/nigeria-set-to-pass-ai-law-among-first-in-africa-to-regulate-sector/"),
          ],
          note: "Whether the bill has passed since was not confirmed when this was checked on 5 November 2026.",
        },
        {
          topic: "Strategy & readiness", date: "2025-04-15",
          text: "Nigeria launched its National Artificial Intelligence Strategy in Lagos in April 2025. Communications minister Bosun Tijani announced it at the unveiling of the Nigeria AI Collective, a community of practice meant to support the strategy and keep ethics and safety central to how AI is used.",
          level: "single",
          sources: [
            S("Nairametrics - Nigeria launches National AI Strategy (16 Apr 2025)", "https://nairametrics.com/2025/04/16/nigeria-launches-national-ai-strategy-to-drive-ai-development-and-productivity/"),
          ],
        },
        {
          topic: "Institutions", date: "2025-02-04",
          text: "On 4 February 2025 the Federal Executive Council, chaired by President Bola Tinubu, approved a National Artificial Intelligence Trust: ten AI experts sitting with the ministers for communications and for science.",
          level: "single",
          sources: [
            S("Nairametrics - FEC approves new connectivity and AI initiatives (5 Feb 2025)", "https://nairametrics.com/2025/02/05/fec-approves-new-connectivity-and-ai-initiatives-to-drive-digital-transformation-in-nigeria/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-01", title: "Digital-economy bill would regulate higher-risk AI",
          summary: "The bill gives regulators powers over algorithms and platforms and requires yearly impact assessments from AI developers.",
          level: "single",
          sources: [
            S("BusinessDay - Nigeria set to pass AI law, among first in Africa to regulate sector", "https://businessday.ng/technology/article/nigeria-set-to-pass-ai-law-among-first-in-africa-to-regulate-sector/"),
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ BRAZIL
    {
      id: "br", name: "Brazil", flag: "🇧🇷", region: "South America", group: "Americas", geo: [-47.88, -15.79], isoN: "076",
      stance: "A funded national AI plan aimed at home-grown compute, with an AI law passed by the Senate and waiting in the lower house",
      summary:
        "Brazil is moving on two tracks. The Brazilian Artificial Intelligence Plan for 2024 to 2028 foresees R$23 billion of investment and aims to put the country among the top five for AI computing capacity. In parallel, the Senate approved a bill to regulate AI in December 2024; a year later the Chamber of Deputies had still not voted on it.",
      glance: { firstStrategy: "2024 (Brazilian AI Plan 2024–2028)", latestStrategy: "2025 (final version of the plan)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 212812405, year: 2025 }, gdpPerCapita: { v: 10713, year: 2025 }, internet: { v: 84.5, year: 2024 } },
      oxford: { rank: 22, scores: [88.0, 65.5, 78.18, 94.78, 46.57, 67.88] },
      msAdoption: { h1_2025: 15.6, h2_2025: 17.1, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Regulation", date: "2025-12-16",
          text: "In December 2025 the Chamber of Deputies put off its vote on the AI bill (PL 2338/2023) until Congress returned in February 2026.",
          level: "single",
          sources: [
            S("Teletime - PL de Inteligência Artificial fica para fevereiro de 2026 (16 Dec 2025)", "https://teletime.com.br/16/12/2025/pl-de-inteligencia-artificial-fica-para-fevereiro-de-2026/"),
          ],
        },
        {
          topic: "Compute & infrastructure", date: "2025-06",
          text: "The Brazilian Artificial Intelligence Plan (PBIA) 2024–2028 foresees R$23.03 billion of investment from public money, credit and private matching funds. The final version, published by the science ministry in June 2025, aims to double national AI computing capacity, build at least two new AI supercomputing centres and place Brazil among the top five countries for AI computing capacity within five years.",
          level: "corroborated",
          sources: [
            S("Teletime - Plano de IA quer Brasil como referência global em infraestrutura sustentável (13 Jun 2025)", "https://teletime.com.br/13/06/2025/plano-de-ia-quer-brasil-como-referencia-global-em-infraestrutura-sustentavel/"),
            S("TecMundo (Estadão) - Governo lança plano para IA e prevê investimentos de R$ 23 bilhões até 2028", "https://www.tecmundo.com.br/mercado/405157-governo-lanca-plano-para-ia-e-preve-investimentos-de-r-23-bilhoes-ate-2028.htm"),
          ],
        },
        {
          topic: "Regulation", date: "2024-12-10",
          text: "On 10 December 2024 the Senate approved a bill to regulate AI, based on PL 2338/2023 from Senate president Rodrigo Pacheco, and sent it to the Chamber of Deputies. The approved text left social-media algorithms off the list of high-risk systems.",
          level: "single",
          sources: [
            S("Agência Senado - Senado aprova regulamentação da inteligência artificial; texto vai à Câmara (10 Dec 2024)", "https://www12.senado.leg.br/noticias/materias/2024/12/10/senado-aprova-regulamentacao-da-inteligencia-artificial-texto-vai-a-camara"),
          ],
        },
      ],
      news: [
        {
          date: "2025-12-16", title: "Lower house delays vote on Brazil's AI bill",
          summary: "The Chamber of Deputies moved its vote on PL 2338/2023 to February 2026, a year after the Senate approved the text.",
          level: "single",
          sources: [
            S("Teletime - PL de Inteligência Artificial fica para fevereiro de 2026 (16 Dec 2025)", "https://teletime.com.br/16/12/2025/pl-de-inteligencia-artificial-fica-para-fevereiro-de-2026/"),
          ],
        },
        {
          date: "2025-06-13", title: "Final version of the Brazilian AI Plan published",
          summary: "R$23.03 billion to 2028, two new AI supercomputing centres and a top-five target for AI computing capacity.",
          level: "corroborated",
          sources: [
            S("Teletime - Plano de IA quer Brasil como referência global em infraestrutura sustentável (13 Jun 2025)", "https://teletime.com.br/13/06/2025/plano-de-ia-quer-brasil-como-referencia-global-em-infraestrutura-sustentavel/"),
            S("TecMundo (Estadão) - Governo lança plano para IA e prevê investimentos de R$ 23 bilhões até 2028", "https://www.tecmundo.com.br/mercado/405157-governo-lanca-plano-para-ia-e-preve-investimentos-de-r-23-bilhoes-ate-2028.htm"),
          ],
        },
      ],
    },
  );
})();

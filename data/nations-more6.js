// Atlas dataset, part 7: the remaining sovereign states under 15 million people (added 21 Oct 2026).
// Same verification rules as the other data files (see METHODOLOGY.md). Every source was fetched and its key
// details checked by hand; pages that block automated requests were read in a browser and say so in a note.
// oxford is null for nations the Oxford Insights index does not rank (Kosovo, the Holy See); stats entries are null
// where the World Bank publishes no figure (the Holy See). msAdoption.regional marks shared Microsoft estimates.

(function () {
  const S = (t, u) => ({ t, u });

  // Regional decisions that apply to several of the nations below.
  const PIF = {
    text: (who) => `In September 2026 the leaders of the Pacific Islands Forum, which includes ${who}, endorsed the Pacific Digital and Artificial Intelligence Technology Principles at their meeting in Koror, Palau. The principles are the region's first collective position on AI and will guide a Pacific AI governance framework due for leaders' consideration in 2027.`,
    sources: [
      S("PINA - Pacific Leaders set AI rules, push stronger digital connectivity (6 Sep 2026)", "https://pina.com.fj/?p=72251"),
      S("Devpolicy Blog (ANU) - Affirmed, noted, endorsed: Pacific Islands Forum leaders in Koror (9 Sep 2026)", "https://devpolicy.org/affirmed-noted-endorsed-pacific-islands-forum-leaders-in-koror-2026-09-09/"),
    ],
  };
  const pifFact = (who) => ({ topic: "International", date: "2026-09", text: PIF.text(who), level: "corroborated", sources: PIF.sources });
  const AU = {
    sources: [
      S("African Union - African Union committed to developing AI capabilities in Africa (28 Aug 2024)", "https://au.int/en/pressreleases/20240828/african-union-committed-developing-ai-capabilities-africa"),
      S("Nairametrics - African Union council approves AI adoption in public and private sectors (9 Aug 2024)", "https://nairametrics.com/?p=495537"),
    ],
  };
  const auFact = (who) => ({
    topic: "International", date: "2024-07",
    text: `In July 2024 the African Union Executive Council, in which ${who} is represented as a member state, endorsed the Continental AI Strategy at its session in Accra. The strategy sets an Africa-centred, development-focused approach to AI, to be implemented in phases from 2025 to 2030.`,
    level: "corroborated", sources: AU.sources,
  });
  const EMC = [
    S("AIFFP (Australian Government) - East Micronesia Cable lands in second Pacific location of Nauru (18 Aug 2025)", "https://aiffp.gov.au/news/east-micronesia-cable-lands-second-pacific-location-nauru"),
    S("Converge Digest - NEC completes East Micronesia Cable System linking FSM, Kiribati and Nauru (14 May 2026)", "https://convergedigest.com/nec-completes-east-micronesia-cable-system-linking-fsm-kiribati-and-nauru/"),
  ];
  const EMC_KOSRAE = S("AIFFP (Australian Government) - East Micronesia Cable lands in third and final Pacific location of Kosrae, FSM (28 Aug 2025)", "https://www.aiffp.gov.au/news/east-micronesia-cable-lands-third-and-final-pacific-location-kosrae-fsm");

  window.ATLAS.nations.push(
    // ------------------------------------------------------------------ TIMOR-LESTE
    {
      id: "tl", name: "Timor-Leste", flag: "🇹🇱", region: "Southeast Asia", group: "Asia-Pacific", geo: [125.57, -8.56], isoN: "626",
      stance: "Folding AI into a new digital strategy, with a national AI framework still to come",
      summary:
        "Timor-Leste has no national AI strategy or AI law. AI is being folded into a draft Digital Transformation Strategy for 2026–2036, which went to public consultation in April 2026 and includes rules for emerging technologies such as AI. In August 2026 the government held a dialogue on AI for state-building, meant to feed that strategy and a future national AI framework, alongside a government-funded science summit in Dili.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 1418517, year: 2025 }, gdpPerCapita: { v: 1341, year: 2025 }, internet: { v: 35.0, year: 2021 } },
      oxford: { rank: 179, scores: [4.0, 24.39, 3.39, 22.65, 22.53, 23.56] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy & readiness", date: "2026-04-17",
          text: "In April 2026 the Ministry of Transport and Communications held a two-day public consultation in Dili on the draft Digital Transformation Strategy 2026–2036. Its topics include rules for emerging technologies such as artificial intelligence.",
          level: "single",
          sources: [S("Tatoli - Govt holds public consultation on Timor-Leste's Digital Transformation Strategy 2026–2036 (17 Apr 2026)", "https://en.tatoli.tl/2026/04/17/govt-holds-public-consultation-on-timor-lestes-digital-transformation-strategy-2026-2036/20/")],
          note: "Tatoli is Timor-Leste's state news agency.",
        },
        {
          topic: "Public sector", date: "2026-08-24",
          text: "On 24 August 2026 the government held a dialogue on 'Artificial Intelligence for State-Building and National Development', with Turing Award winners Jack Dongarra and Richard Sutton among the guest experts. It was meant to feed the Digital Transformation Strategy, identify priority uses of AI in the public sector and prepare a future national AI framework.",
          level: "single",
          sources: [S("Tatoli - Timor-Leste to host government dialogue on artificial intelligence (21 Aug 2026)", "https://en.tatoli.tl/2026/08/21/timor-leste-to-host-government-dialogue-on-artificial-intelligence/15/")],
          note: "From the announcement before the event; no report of its outcome was found.",
        },
        {
          topic: "Research & models", date: "2026-08-24",
          text: "Prime Minister Xanana Gusmão opened the government-funded Science for Development Summit in Dili on 24 August 2026, naming AI as an example of how new technologies could widen access to knowledge, for instance by giving health workers access to specialist advice.",
          level: "corroborated",
          sources: [
            S("Government of Timor-Leste - Prime Minister's speech at the Science for Development Summit 2026 (PDF, Portuguese)", "https://timor-leste.gov.tl/wp-content/uploads/2026/08/Science-for-Development-Summit-Opening-Address_24Aug25_PT.pdf"),
            S("Tatoli - Science for Development Summit 2026 kicks off in Dili (24 Aug 2026)", "https://en.tatoli.tl/2026/08/24/science-for-development-summit-2026-kicks-off-in-dili/10/"),
          ],
        },
      ],
      news: [
        {
          date: "2026-08-24", title: "Government dialogue on AI for state-building",
          summary: "A dialogue with Turing Award winners, held as the Science for Development Summit opened in Dili, was set to feed the 2026–2036 digital strategy and a future national AI framework.",
          level: "single",
          sources: [S("Tatoli", "https://en.tatoli.tl/2026/08/21/timor-leste-to-host-government-dialogue-on-artificial-intelligence/15/")],
        },
      ],
    },

    // ------------------------------------------------------------------ VANUATU
    {
      id: "vu", name: "Vanuatu", flag: "🇻🇺", region: "Pacific", group: "Asia-Pacific", geo: [168.32, -17.73], isoN: "548",
      stance: "Commissioning a national AI strategy and pressing for enforceable protection of traditional knowledge",
      summary:
        "Vanuatu is procuring the development of a national AI strategy. At the Pacific ICT ministers' meeting in July 2026 it backed the regional AI principles but asked for protection of Pacific cultural and traditional knowledge from use in AI systems without consent to be made enforceable. The Prime Minister, who holds the ICT portfolio, has said ministers will need to legislate on AI regulation.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 335169, year: 2025 }, gdpPerCapita: { v: 4039, year: 2025 }, internet: { v: 22.4, year: 2015 } },
      oxford: { rank: 132, scores: [15.5, 40.73, 18.64, 29.47, 20.56, 44.65] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy & readiness", date: "2026-07",
          text: "At the Forum ICT Ministers Meeting in July 2026, Vanuatu said it is procuring the development of its National AI Strategy and asked that regional technical help complement national work rather than duplicate it. It supported the regional AI principles while calling for the protection of Pacific cultural and traditional knowledge from use in AI systems without free, prior and informed consent to be made an enforceable requirement.",
          level: "single",
          sources: [S("Vanuatu Daily Post - Connectivity, resilience and AI governance: Vanuatu's message to Pacific ICT Ministers (4 Aug 2026)", "https://www.dailypost.vu/news/connectivity-resilience-and-ai-governance-vanuatus-message-to-pacific-ict-ministers/article_85aeeb09-45be-5f22-96ca-16f665455b0b.html")],
        },
        {
          topic: "Regulation", date: "2026-04-21",
          text: "In April 2026 Prime Minister Jotham Napat, who is responsible for ICT, said AI, cybercrime, data sovereignty and digital infrastructure had become core governance issues, and that ministers would need to legislate on digital technology, cybercrime, data protection and AI regulation.",
          level: "single",
          sources: [S("Office of the Prime Minister of Vanuatu - Ministerial attendance at World Internet Conference on AI and cyber security (21 Apr 2026)", "https://pmo.gov.vu/en/public-information/press-release/1157-ministerial-attendance-at-world-internet-conference-on-ai-and-cyber-security.html")],
        },
        pifFact("Vanuatu"),
      ],
      news: [
        {
          date: "2026-08-04", title: "Vanuatu presses for enforceable AI safeguard for traditional knowledge",
          summary: "At the Pacific ICT ministers' meeting Vanuatu said it is procuring a National AI Strategy and called for consent rules on the use of Pacific traditional knowledge in AI to be enforceable.",
          level: "single",
          sources: [S("Vanuatu Daily Post", "https://www.dailypost.vu/news/connectivity-resilience-and-ai-governance-vanuatus-message-to-pacific-ict-ministers/article_85aeeb09-45be-5f22-96ca-16f665455b0b.html")],
        },
      ],
    },

    // ------------------------------------------------------------------ SAMOA
    {
      id: "ws", name: "Samoa", flag: "🇼🇸", region: "Pacific", group: "Asia-Pacific", geo: [-171.76, -13.83], isoN: "882",
      stance: "AI inside a new national ICT policy, with rules for emerging technology promised",
      summary:
        "Samoa has no AI strategy or AI law. Its National ICT Policy for 2025/26–2030/31, launched in April 2026, commits to setting rules for emerging technologies including AI, to helping businesses adopt AI and to specialist AI training for public servants. The communications ministry and UNDP held a workshop on AI trust and safety in 2025.",
      glance: { firstStrategy: "—", latestStrategy: "2026 (National ICT Policy, covers AI)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 219306, year: 2025 }, gdpPerCapita: { v: 5873, year: 2025 }, internet: { v: 21.2, year: 2014 } },
      oxford: { rank: 154, scores: [4.0, 37.27, 9.39, 25.55, 17.48, 41.33] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy & readiness", date: "2026-04-17",
          text: "On 17 April 2026 the government launched the National ICT Policy 2025/26–2030/31 together with a National Cybersecurity Strategy. The policy commits to setting and updating rules for emerging technologies such as AI, to supporting businesses to invest in AI, and to specialist training in data and AI for public servants.",
          level: "single",
          sources: [
            S("Samoa Ministry of Communications and IT - Official launch of the National ICT Policy and National Cybersecurity Strategy (17 Apr 2026)", "https://mcit.gov.ws/official-launch-of-the-national-ict-policy-national-cybersecurity-strategy/"),
            S("Samoa Ministry of Communications and IT - National ICT Policy 2026 (PDF)", "https://mcit.gov.ws/wp-content/uploads/2026/04/Samoa-National-ICT-Policy-2026.pdf"),
          ],
          note: "Both sources are the ministry's own, so they count as one.",
        },
        {
          topic: "Society & ethics", date: "2025",
          text: "In 2025 the Ministry of Communications and Information Technology and UNDP held a workshop on AI trust and safety. According to UNDP, it raised questions of digital sovereignty, such as how Samoa can keep ownership of its digital technology and data.",
          level: "single",
          sources: [S("UNDP Samoa - Samoa in the age of AI (24 Feb 2026)", "https://www.undp.org/samoa/stories/samoa-age-ai")],
        },
        pifFact("Samoa"),
      ],
      news: [
        {
          date: "2026-04-17", title: "National ICT Policy launched, with AI rules promised",
          summary: "The new policy, launched with a cybersecurity strategy, commits to rules for emerging technologies including AI and to AI training for public servants.",
          level: "single",
          sources: [S("Samoa Ministry of Communications and IT", "https://mcit.gov.ws/official-launch-of-the-national-ict-policy-national-cybersecurity-strategy/")],
        },
      ],
    },

    // ------------------------------------------------------------------ KIRIBATI
    {
      id: "ki", name: "Kiribati", flag: "🇰🇮", region: "Pacific", group: "Asia-Pacific", geo: [173.03, 1.33], isoN: "296",
      stance: "Building digital foundations first: a new submarine cable and a digital government programme",
      summary:
        "Kiribati has no AI strategy or AI law. Its 2019 National ICT Policy mentions AI only as one of several new technologies the government encourages. The groundwork is digital: a World Bank-funded digital government project, and the East Micronesia Cable, which gave South Tarawa its first submarine fibre connection in 2025.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 136488, year: 2025 }, gdpPerCapita: { v: 2559, year: 2025 }, internet: { v: 89.4, year: 2024 } },
      oxford: { rank: 150, scores: [0.0, 41.19, 10.39, 19.64, 19.77, 41.58] },
      msAdoption: null,
      facts: [
        {
          topic: "Compute & infrastructure", date: "2025-07",
          text: "The East Micronesia Cable, funded by Australia, Japan and the United States, landed in South Tarawa in July 2025, giving it its first submarine fibre connection. NEC completed the 2,250 km system, which links Tarawa, Nauru and Kosrae to Pohnpei, in May 2026.",
          level: "corroborated", sources: EMC,
        },
        {
          topic: "Public sector", date: "2022-05-03",
          text: "In 2022 the World Bank approved a US$12 million grant for the Kiribati Digital Government Project, which includes setting up a Digital Transformation Office within the communications ministry.",
          level: "single",
          sources: [S("World Bank - Project Appraisal Document: Kiribati Digital Government Project (3 May 2022, PDF)", "https://documents1.worldbank.org/curated/en/852781653593751829/pdf/Kiribati-Digital-Government-Project.pdf")],
        },
        {
          topic: "Strategy & readiness", date: "2019",
          text: "Kiribati's National ICT Policy 2019 says the government is encouraging new technologies such as blockchain, artificial intelligence, big data analytics and the Internet of Things for education, health, finance and other sectors.",
          level: "single",
          sources: [S("Government of Kiribati - National ICT Policy 2019 (PDF, copy hosted by UNIDIR's Cyber Policy Portal)", "https://database.cyberpolicyportal.org/api/files/1664377388298feiubzabnbu.pdf")],
        },
        pifFact("Kiribati"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ MICRONESIA
    {
      id: "fm", name: "Micronesia", flag: "🇫🇲", region: "Pacific", group: "Asia-Pacific", geo: [158.16, 6.92], isoN: "583",
      stance: "No AI policy yet; new connectivity and a regional AI position",
      summary:
        "The Federated States of Micronesia has no published AI strategy, AI law or AI body. Its main recent digital step is connectivity: the East Micronesia Cable reached the state of Kosrae in 2025. As a Pacific Islands Forum member it is covered by the region's AI principles, endorsed in 2026.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 113683, year: 2025 }, gdpPerCapita: { v: 4414, year: 2025 }, internet: { v: 39.5, year: 2024 } },
      oxford: { rank: 172, scores: [19.92, 28.66, 7.64, 8.87, 22.16, 34.3] },
      msAdoption: null,
      facts: [
        {
          topic: "Compute & infrastructure", date: "2025-08",
          text: "The East Micronesia Cable, funded by Australia, Japan and the United States, landed in Kosrae in August 2025, the state's first submarine fibre connection, linking it to the existing cable landing in Pohnpei. NEC completed the 2,250 km system in May 2026.",
          level: "corroborated", sources: [EMC_KOSRAE, EMC[1]],
        },
        pifFact("the Federated States of Micronesia"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ MARSHALL ISLANDS
    {
      id: "mh", name: "Marshall Islands", flag: "🇲🇭", region: "Pacific", group: "Asia-Pacific", geo: [171.38, 7.09], isoN: "584",
      stance: "No AI policy yet; digital government built through a World Bank programme",
      summary:
        "The Marshall Islands has no published AI strategy, AI law or AI body. Its digital groundwork runs through the World Bank's US$30 million Digital RMI project, approved in 2021 to widen internet access and lay foundations for digital government. As a Pacific Islands Forum member it is covered by the region's AI principles, endorsed in 2026.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 36282, year: 2025 }, gdpPerCapita: { v: 8489, year: 2025 }, internet: { v: 65.9, year: 2024 } },
      oxford: { rank: 177, scores: [0.0, 40.45, 1.39, 6.74, 18.48, 29.7] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2021-08-31",
          text: "In August 2021 the World Bank approved the US$30 million Digital RMI project, run over seven years by the Marshall Islands' finance and communications ministries, to widen internet access and lay the foundations for digital government services and the digital economy.",
          level: "single",
          sources: [
            S("World Bank - New World Bank project will expand internet access for Marshall Islands (1 Sep 2021)", "https://www.worldbank.org/en/news/press-release/2021/09/01/new-world-bank-project-will-expand-internet-access-for-marshall-islands"),
            S("PINA - New World Bank US$30 million project will expand internet access for Marshall Islands (1 Sep 2021)", "https://pina.com.fj/2021/09/01/new-world-bank-us30-million-project-will-expand-internet-access-for-marshall-islands/"),
          ],
          note: "PINA republishes the World Bank's release, so the two count as one source.",
        },
        pifFact("the Marshall Islands"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ NAURU
    {
      id: "nr", name: "Nauru", flag: "🇳🇷", region: "Pacific", group: "Asia-Pacific", geo: [166.92, -0.55], isoN: "520",
      stance: "No AI policy yet; first submarine cable and a regional AI position",
      summary:
        "Nauru has no published AI strategy, AI law or AI body. Its main recent digital step is connectivity: the East Micronesia Cable landed in August 2025, Nauru's first submarine fibre link. As a Pacific Islands Forum member it is covered by the region's AI principles, endorsed in 2026.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 12025, year: 2025 }, gdpPerCapita: { v: 14640, year: 2025 }, internet: { v: 83.0, year: 2024 } },
      oxford: { rank: 160, scores: [0.0, 41.71, 8.02, 17.81, 21.0, 29.32] },
      msAdoption: null,
      facts: [
        {
          topic: "Compute & infrastructure", date: "2025-08-09",
          text: "The East Micronesia Cable, funded by Australia, Japan and the United States, landed in Nauru on 9 August 2025, the island's first submarine fibre connection. NEC completed the 2,250 km system linking Tarawa, Nauru and Kosrae to Pohnpei in May 2026.",
          level: "corroborated", sources: EMC,
        },
        pifFact("Nauru"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ TUVALU
    {
      id: "tv", name: "Tuvalu", flag: "🇹🇻", region: "Pacific", group: "Asia-Pacific", geo: [179.19, -8.52], isoN: "798",
      stance: "A 'Digital Nation' to preserve statehood online; no AI policy",
      summary:
        "Tuvalu has no AI strategy or AI law. Its digital agenda is the 'Digital Nation' project, a response to sea-level rise that is scanning the islands into a digital twin, building a cloud archive of the country's culture and moving government services online. Its first submarine cable was switched on in October 2025.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 9492, year: 2025 }, gdpPerCapita: { v: 6041, year: 2025 }, internet: { v: 35.2, year: 2017 } },
      oxford: { rank: 169, scores: [0.0, 39.47, 2.02, 9.69, 25.0, 29.97] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-05",
          text: "Tuvalu's Digital Nation project has three parts: a Digital Twin built by scanning the country's 124 islands and islets, a Digital Ark cloud platform holding scans of important objects, values and stories, and e-government services. Community consultations on what to preserve continued in 2026.",
          level: "single",
          sources: [S("Global Voices - Tuvalu aims to become a 'Digital Nation' amid rising sea levels (27 May 2026)", "https://globalvoices.org/2026/05/27/tuvalu-aims-to-become-a-digital-nation-amid-rising-sea-levels/")],
        },
        {
          topic: "Compute & infrastructure", date: "2025-10-24",
          text: "Tuvalu switched on its first submarine cable, the Tuvalu Vaka Cable, on 24 October 2025. It was funded by Australia, the United States, Taiwan, New Zealand and Japan, with Google including Tuvalu in its Central Pacific Connect system.",
          level: "single",
          sources: [S("Devpolicy Blog (ANU) - The Tuvalu Vaka Cable: building connectivity and a Digital Nation (4 Dec 2025)", "https://devpolicy.org/the-tuvalu-vaka-cable-building-connectivity-and-a-digital-nation-20251204/")],
          note: "Co-written by Tuvalu's minister responsible for communications, Simon Kofe.",
        },
        pifFact("Tuvalu"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ TURKMENISTAN
    {
      id: "tm", name: "Turkmenistan", flag: "🇹🇲", region: "Central Asia", group: "Asia-Pacific", geo: [58.38, 37.95], isoN: "795",
      stance: "Drafting a first national AI strategy for 2026–2028 with UNDP",
      summary:
        "Turkmenistan has no AI law. Its Ministry of Communications is preparing a first National AI Strategy for 2026–2028 with UNDP support: a seminar in March 2026 assessed the digital ecosystem and a workshop in May reviewed the draft's findings. A UN course in July 2026 trained officials in Ashgabat on AI governance.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 7618847, year: 2025 }, gdpPerCapita: { v: 6540, year: 2025 }, internet: { v: 18.0, year: 2016 } },
      oxford: { rank: 159, scores: [11.5, 32.61, 23.79, 8.13, 22.51, 27.83] },
      msAdoption: { h1_2025: 5.1, h2_2025: 5.6, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "Central Asia" },
      facts: [
        {
          topic: "Strategy & readiness", date: "2026-05-20",
          text: "With UNDP support, the Ministry of Communications is preparing a National AI Strategy for 2026–2028. A seminar in March 2026 assessed the national digital ecosystem and policy priorities, and on 20 May 2026 a workshop of government institutions and experts reviewed and validated the key findings of the draft.",
          level: "corroborated",
          sources: [
            S("UNDP Turkmenistan - UNDP supports Turkmenistan in development of a National AI Strategy (5 Mar 2026)", "https://www.undp.org/node/572986"),
            S("UNDP Turkmenistan - UNDP supports national efforts to shape Turkmenistan's AI Strategy (20 May 2026)", "https://www.undp.org/node/584666"),
            S("UN APCICT - AI Essentials for Policymakers and Civil Servants, Ashgabat, 7–8 July 2026 (course note, PDF)", "https://unapcict.org/sites/default/files/2026-05/CN_AI%20Essential_Turkmenistan.pdf"),
          ],
          note: "The two UNDP pages count as one source.",
        },
        {
          topic: "Skills & education", date: "2026-07-07",
          text: "On 7–8 July 2026 the UN's Asian and Pacific Training Centre for ICT ran a two-day course in Ashgabat for senior officials on AI governance, including the government's role in shaping the National AI Strategy.",
          level: "single",
          sources: [S("UN APCICT - AI Essentials for Policymakers and Civil Servants, Ashgabat, 7–8 July 2026 (course note, PDF)", "https://unapcict.org/sites/default/files/2026-05/CN_AI%20Essential_Turkmenistan.pdf")],
          note: "From the course announcement; no report on the course was found.",
        },
      ],
      news: [
        {
          date: "2026-05-20", title: "Draft national AI strategy reviewed",
          summary: "Government institutions, national experts and UNDP specialists reviewed the key findings of the draft National AI Strategy for 2026–2028.",
          level: "single",
          sources: [S("UNDP Turkmenistan", "https://www.undp.org/node/584666")],
        },
      ],
    },

    // ------------------------------------------------------------------ CUBA
    {
      id: "cu", name: "Cuba", flag: "🇨🇺", region: "Caribbean", group: "Americas", geo: [-82.37, 23.13], isoN: "192",
      stance: "A state-led AI strategy and consortium, and a founding member of China's AI body",
      summary:
        "Cuba presented a national AI development strategy to President Miguel Díaz-Canel in January 2025, as part of its digital transformation policy. In late 2025 it set up an AI consortium of universities, state companies and ministries, and in July 2026 it was among the 29 founding members of the China-based World AI Cooperation Organization. Regional indices place it among Latin America's least advanced countries in AI.",
      glance: { firstStrategy: "2025 (AI development strategy)", latestStrategy: "2025 (AI development strategy)", newestBody: "Cuban AI Consortium", newestBodyDate: "2025-11" },
      stats: { population: { v: 10937203, year: 2025 }, gdpPerCapita: { v: 9605, year: 2020 }, internet: { v: 70.5, year: 2024 } },
      oxford: { rank: 136, scores: [46.5, 32.62, 35.24, 4.51, 17.29, 48.27] },
      msAdoption: { h1_2025: 5.7, h2_2025: 6.1, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy & readiness", date: "2025-01-13",
          text: "On 13 January 2025 the Minister of Communications, Mayra Arevich, presented Cuba's strategy for the development and use of AI to President Miguel Díaz-Canel. It is part of the country's digital transformation policy. At the same meeting officials said the Ministry of Justice had issued more than two million certificates automatically since 2023, about 30% of the total.",
          level: "corroborated",
          sources: [
            S("OnCuba News - Government affirms it is working to advance the incorporation of AI in Cuba (17 Jan 2025)", "https://oncubanews.com/en/cuba/government-affirms-it-is-working-to-advance-in-the-incorporation-of-artificial-intelligence-in-cuba/"),
            S("Diario de Cuba - Díaz-Canel y el delirio de la Inteligencia Artificial (14 Jan 2025, Spanish)", "https://diariodecuba.com/cuba/1736894335_59357.html"),
          ],
          note: "Both reports are based on coverage in the state newspaper Granma. The Diario de Cuba page was read in a browser because it blocks automated requests.",
        },
        {
          topic: "Institutions", date: "2025-11",
          text: "In late 2025 the government launched a Cuban AI Consortium of 22 founding members, including universities, the state telecom company ETECSA, BioCubaFarma, private businesses and ministries, coordinated by the Havana Science and Technology Park.",
          level: "single",
          sources: [S("Diario de Cuba - Cuba ya tiene un 'Consorcio de Inteligencia Artificial' (1 Dec 2025, Spanish; Internet Archive copy)", "https://web.archive.org/web/20260103233206/https://diariodecuba.com/cuba/1764599268_64128.html")],
          note: "Read from the Internet Archive because the live page blocks automated requests.",
        },
        {
          topic: "International", date: "2026-07-16",
          text: "Cuba was among the 29 countries that signed the agreement founding the World AI Cooperation Organization in Shanghai on 16 July 2026.",
          level: "single",
          sources: [S("Reuters (via Internazionale) - Twenty-nine countries sign agreement to establish global AI cooperation body (16 Jul 2026)", "https://www.internazionale.it/ultime-notizie-reuters/2026/07/16/twenty-nine-countries-sign-agreement-to-establish-global-ai-cooperation-body")],
        },
        {
          topic: "Strategy & readiness", date: "2025-10",
          text: "The 2025 Latin American AI Index (ILIA), published by Chile's CENIA and ECLAC, placed Cuba 15th of 19 countries with 28.69 points out of 100, in its lowest group, 'explorers'.",
          level: "single",
          sources: [S("Diario de Cuba - Cuba ya tiene un 'Consorcio de Inteligencia Artificial' (1 Dec 2025, Spanish; Internet Archive copy)", "https://web.archive.org/web/20260103233206/https://diariodecuba.com/cuba/1764599268_64128.html")],
          note: "ECLAC's own pages block automated requests and were not read; the figure is as reported by Diario de Cuba.",
        },
      ],
      news: [
        {
          date: "2026-10-20", title: "Cuba 30.9 in the 2026 Latin American AI Index",
          summary: "Cuba scored 30.9 out of 100 in the fourth Latin American AI Index (ILIA), published by Chile's CENIA and ECLAC on 20 October, in the 'explorers' group of countries below 35 points.",
          level: "single",
          sources: [
            S("Bloomberg Línea - Los países de América Latina más preparados para la IA, según ranking de Cepal (22 Oct 2026)", "https://www.bloomberglinea.com/tecnologia/los-paises-de-america-latina-mas-preparados-para-la-inteligencia-artificial-segun-ranking-de-cepal/"),
          ],
        },
        {
          date: "2026-07-16", title: "Cuba a founding member of the World AI Cooperation Organization",
          summary: "Cuba was one of 29 countries to sign the founding agreement of the China-based body in Shanghai.",
          level: "single",
          sources: [S("Reuters (via Internazionale)", "https://www.internazionale.it/ultime-notizie-reuters/2026/07/16/twenty-nine-countries-sign-agreement-to-establish-global-ai-cooperation-body")],
        },
        {
          date: "2025-11", title: "Cuban AI Consortium launched",
          summary: "A consortium of 22 universities, state and private companies and ministries will coordinate AI projects, led by the Havana Science and Technology Park.",
          level: "single",
          sources: [S("Diario de Cuba (Internet Archive copy)", "https://web.archive.org/web/20260103233206/https://diariodecuba.com/cuba/1764599268_64128.html")],
        },
      ],
    },

    // ------------------------------------------------------------------ DOMINICA
    {
      id: "dm", name: "Dominica", flag: "🇩🇲", region: "Caribbean", group: "Americas", geo: [-61.39, 15.30], isoN: "212",
      stance: "No AI policy; practical AI for disaster mapping and closer AI ties with China",
      summary:
        "Dominica has no AI strategy or AI law. Its clearest AI use is in disaster resilience: with Canadian technical help, the Lands and Survey Division built an AI model for near real-time mapping, including after disasters. In July 2026 its foreign minister attended the World AI Conference in Shanghai, where China said it would cooperate with Dominica within its new World AI Cooperation Organization. It is covered by CARICOM's 2026 endorsement of a Caribbean AI policy roadmap.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 65871, year: 2025 }, gdpPerCapita: { v: 10989, year: 2025 }, internet: { v: 82.0, year: 2024 } },
      oxford: { rank: 174, scores: [4.0, 34.5, 9.53, 25.13, 12.89, 23.17] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-05",
          text: "With technical assistance from Natural Resources Canada, Dominica's Lands and Survey Division developed a customised AI model that segments high-resolution imagery, allowing near real-time mapping for routine work and post-disaster assessments. Canada also supplied workstations to run the models locally.",
          level: "single",
          sources: [S("Natural Resources Canada - Dominica: building resilience through Canadian GeoAI innovation (page dated 15 May 2026)", "https://natural-resources.canada.ca/funding-partnerships/dominica-building-resilience-through-canadian-geoai-innovation")],
          note: "The date is when the page was published or last updated; it does not give the project's dates. Read in a browser.",
        },
        {
          topic: "International", date: "2026-07-18",
          text: "Foreign Minister Vince Henderson attended the World Artificial Intelligence Conference in Shanghai in July 2026. Meeting him, China's foreign minister Wang Yi said China would strengthen cooperation within the World AI Cooperation Organization with developing countries, including Dominica.",
          level: "single",
          sources: [S("CGTN - China's top diplomat meets foreign minister of Dominica (18 Jul 2026)", "https://news.cgtn.com/news/2026-07-18/China-s-top-diplomat-meets-foreign-minister-of-Dominica-1OSYQ3yWAmI/p.html")],
          note: "CGTN is Chinese state media. It does not say whether Dominica has joined the organization, so Dominica is not listed as a member on this site.",
        },
      ],
      news: [],
    },

    // ------------------------------------------------------------------ SAINT VINCENT AND THE GRENADINES
    {
      id: "vc", name: "Saint Vincent and the Grenadines", flag: "🇻🇨", region: "Caribbean", group: "Americas", geo: [-61.22, 13.16], isoN: "670",
      stance: "Testing an AI assistant for public services; no AI policy yet",
      summary:
        "Saint Vincent and the Grenadines has no AI strategy or AI law. Before the November 2025 election the governing Unity Labour Party promised an AI policy in its manifesto, but it lost to the New Democratic Party. In 2026 the government's AI concierge for its national services portal was one of 18 projects chosen for the World Bank's Latin America and Caribbean AI Accelerator. It is covered by CARICOM's 2026 endorsement of a Caribbean AI policy roadmap.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 99924, year: 2025 }, gdpPerCapita: { v: 12562, year: 2025 }, internet: { v: 76.2, year: 2024 } },
      oxford: { rank: 166, scores: [11.5, 32.59, 16.99, 25.27, 13.01, 26.16] },
      msAdoption: null,
      facts: [
        {
          topic: "Public sector", date: "2026-03-30",
          text: "The government's 'One Stop Vincy Gov AI Concierge', an AI assistant built into the national digital portal to answer citizens' questions and give updates on their service requests, was one of 18 AI projects from 12 countries selected for the World Bank's 2026 Latin America and Caribbean AI Accelerator.",
          level: "single",
          sources: [S("World Bank - LAC AI Accelerator: An AI-Enabled Region (2 Jun 2026)", "https://www.worldbank.org/en/region/lac/brief/accelerator-lac")],
        },
        {
          topic: "Strategy & readiness", date: "2025-09-18",
          text: "Before the 2025 general election, Finance Minister Camillo Gonsalves said the governing Unity Labour Party would set out an AI policy in its manifesto. The party lost the 27 November 2025 election, in which the New Democratic Party won 14 of the 15 seats and Godwin Friday became prime minister.",
          level: "single",
          sources: [
            S("iWitness News - ULP to detail AI policy in election manifesto (18 Sep 2025)", "https://www.iwnsvg.com/2025/09/18/ulp-to-detail-ai-policy-in-election-manifesto/"),
            S("iWitness News - Many historic elements as Friday leads NDP to 14-1 victory (28 Nov 2025)", "https://www.iwnsvg.com/2025/11/28/many-historic-elements-as-friday-leads-ndp-to-14-1-victory/"),
          ],
          note: "Both reports are from the same outlet, so they count as one source.",
        },
      ],
      news: [
        {
          date: "2026-03-30", title: "Government AI concierge selected for World Bank accelerator",
          summary: "An AI assistant for the national services portal was one of 18 projects chosen for the World Bank's regional AI Accelerator.",
          level: "single",
          sources: [S("World Bank", "https://www.worldbank.org/en/region/lac/brief/accelerator-lac")],
        },
      ],
    },

    // ------------------------------------------------------------------ SOUTH SUDAN
    {
      id: "ss", name: "South Sudan", flag: "🇸🇸", region: "East Africa", group: "Africa", geo: [31.58, 4.85], isoN: "728",
      stance: "Near the bottom of every AI index, betting on fibre and regional AI cooperation",
      summary:
        "South Sudan has no AI strategy or AI law and ranks near the bottom of AI readiness indices. Officials say the priority is infrastructure and skills: fibre optic expansion with World Bank funding and AI training in youth programmes. In April 2026 its ICT minister committed the country to 15 East African resolutions on AI cooperation.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 12188788, year: 2025 }, gdpPerCapita: { v: 1080, year: 2015 }, internet: { v: 6.7, year: 2019 } },
      oxford: { rank: 194, scores: [0.0, 24.39, 4.63, 1.88, 11.43, 22.73] },
      msAdoption: { h1_2025: 6.4, h2_2025: 6.8, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "East Africa" },
      facts: [
        {
          topic: "International", date: "2026-04-01",
          text: "At a regional AI conference in Kigali (30 March–1 April 2026), East African states adopted 15 resolutions on AI and digital transformation, including a regional centre of excellence, an AI research fund and shared infrastructure. South Sudan's ICT minister, Ateny Wek Ateny, reaffirmed the country's commitment and said his ministry would work with the higher education and EAC affairs ministries to implement them.",
          level: "single",
          sources: [S("Eye Radio - East Africa agrees on 15 resolutions to advance AI (5 Apr 2026)", "https://www.eyeradio.org/east-africa-agrees-on-15-resolutions-to-advance-ai/")],
        },
        {
          topic: "Skills & education", date: "2025-04-04",
          text: "At the Global AI Summit on Africa in Kigali in April 2025, the information ministry's undersecretary said the government planned to integrate AI training into youth development programmes under upcoming World Bank projects, and that World Bank-funded fibre optic expansion could open the way for AI in education, health and agriculture.",
          level: "single",
          sources: [S("Eye Radio - South Sudan sets sight on AI investment with digital transformation: Official (4 Apr 2025)", "https://www.eyeradio.org/south-sudan-sets-sight-on-ai-investment-with-digital-transformation-official/")],
        },
        auFact("South Sudan"),
      ],
      news: [
        {
          date: "2026-04-05", title: "South Sudan backs East African AI resolutions",
          summary: "The ICT minister pledged to implement 15 regional resolutions on AI, including a centre of excellence and an AI research fund.",
          level: "single",
          sources: [S("Eye Radio", "https://www.eyeradio.org/east-africa-agrees-on-15-resolutions-to-advance-ai/")],
        },
      ],
    },

    // ------------------------------------------------------------------ CENTRAL AFRICAN REPUBLIC
    {
      id: "cf", name: "Central African Republic", flag: "🇨🇫", region: "Central Africa", group: "Africa", geo: [18.56, 4.39], isoN: "140",
      stance: "No AI policy; AI shows up as a political and disinformation issue",
      summary:
        "The Central African Republic has no AI strategy or AI law and ranks 192nd of 195 in the Oxford Insights readiness index. AI has surfaced mainly as a political issue: in 2026 the media regulator went after satirical AI-generated videos of leaders, and an AI company reported that its model had been misused in Bangui for a pro-Russian influence operation.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 5513282, year: 2025 }, gdpPerCapita: { v: 556, year: 2025 }, internet: { v: 13.8, year: 2024 } },
      oxford: { rank: 192, scores: [11.5, 22.64, 2.25, 13.91, 9.56, 11.77] },
      msAdoption: { h1_2025: 7.0, h2_2025: 7.8, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "Central Africa" },
      facts: [
        {
          topic: "Society & ethics", date: "2026-07",
          text: "In July 2026 the High Council for Communication, the media regulator, publicly targeted apps used to make satirical AI-generated videos and audio of political leaders and called for sanctions against users who share them.",
          level: "single",
          sources: [S("Corbeau News Centrafrique - Le régime Touadéra déclare la guerre à l'Intelligence Artificielle (20 Jul 2026, French)", "https://corbeaunews-centrafrique.org/centrafrique-le-regime-touadera-declare-la-guerre-a-lintelligence-artificielle/")],
          note: "Corbeau News is an opposition outlet and its report is strongly critical of the government; only the reported actions are given here.",
        },
        {
          topic: "Society & ethics", date: "2026-09",
          text: "In September 2026 Anthropic reported that a Russian-speaking operator in Bangui had used its AI assistant, Claude, to support a pro-Russian influence operation and to track opposition figures.",
          level: "single",
          sources: [S("Mediacongo - Centrafrique : l'opposition surveillée à l'aide de l'IA (28 Sep 2026, French)", "https://www.mediacongo.net/article-actualite-167841_centrafrique_l_opposition_surveillee_a_l_aide_de_l_ia.html")],
          note: "Disclosure: this site is compiled by Claude, made by Anthropic. The claim is Anthropic's, as reported by Mediacongo.",
        },
        auFact("the Central African Republic"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ ERITREA
    {
      id: "er", name: "Eritrea", flag: "🇪🇷", region: "East Africa", group: "Africa", geo: [38.93, 15.32], isoN: "232",
      stance: "No visible AI policy; one of the least connected countries in the world",
      summary:
        "Eritrea has published no AI strategy, AI law or AI body, and no government AI initiative could be found. Only about one in seven people used the internet at the last World Bank count, and Oxford Insights ranks it 193rd of 195 for AI readiness. Its only AI policy framework is the African Union's Continental AI Strategy.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 3607003, year: 2025 }, gdpPerCapita: { v: 689, year: 2011 }, internet: { v: 14.3, year: 2020 } },
      oxford: { rank: 193, scores: [0.0, 25.35, 6.67, 0.0, 15.96, 13.69] },
      msAdoption: { h1_2025: 6.4, h2_2025: 6.8, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "East Africa" },
      facts: [auFact("Eritrea")],
      news: [],
    },

    // ------------------------------------------------------------------ GUINEA-BISSAU
    {
      id: "gw", name: "Guinea-Bissau", flag: "🇬🇼", region: "West Africa", group: "Africa", geo: [-15.6, 11.86], isoN: "624",
      stance: "A first digital transformation strategy that names AI but no AI policy",
      summary:
        "Guinea-Bissau has no AI strategy or AI law. In March 2025 the government approved its National Digital Transformation Strategy 2025–2030, drafted with UN support, which lists AI among the emerging technologies it wants to support and notes that weak data protection rules limit its safe use.",
      glance: { firstStrategy: "—", latestStrategy: "2025 (Digital Transformation Strategy, mentions AI)", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 2249515, year: 2025 }, gdpPerCapita: { v: 1124, year: 2025 }, internet: { v: 29.8, year: 2024 } },
      oxford: { rank: 195, scores: [4.0, 23.24, 10.11, 2.02, 10.5, 14.66] },
      msAdoption: { h1_2025: 8.7, h2_2025: 9.3, q1_2026: null, q2_2026: null, rankLatest: null, regional: true, regionLabel: "West Africa" },
      facts: [
        {
          topic: "Strategy & readiness", date: "2025-03-28",
          text: "Decree 10/2025, published in the official gazette on 28 March 2025, approved the National Digital Transformation Strategy 2025–2030 (ENTD.GW), drafted by the UN University's e-governance unit under contract from UNDP. It names AI among the emerging technologies broadband should enable, and says weak rules on data protection and transparency limit the safe and ethical use of AI.",
          level: "single",
          sources: [
            S("Boletim da República da Guiné-Bissau No. 12, 4th supplement - Decreto n.º 10/2025 (28 Mar 2025, PDF, copy hosted by FAOLEX)", "http://faolex.fao.org/docs/pdf/gbs235634.pdf"),
            S("UNEP Law and Environment Assistance Platform - Decree No. 10/2025 approving the National Strategy for Digital Transformation", "https://leap.unep.org/en/countries/gw/national-legislation/decree-no-102025-approving-national-strategy-digital"),
          ],
          note: "The UNEP entry summarises the same gazette text, so the two count as one source.",
        },
        auFact("Guinea-Bissau"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ EQUATORIAL GUINEA
    {
      id: "gq", name: "Equatorial Guinea", flag: "🇬🇶", region: "Central Africa", group: "Africa", geo: [8.78, 3.75], isoN: "226",
      stance: "No AI policy; fixing the basic telecom network first",
      summary:
        "Equatorial Guinea has no AI strategy or AI law and ranks near the bottom of AI readiness indices. Its current digital priority is the basic network: in July 2026 the state operator GETESA hired Huawei for a six-month overhaul of a network troubled by outages and overloaded equipment.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "—", newestBodyDate: "" },
      stats: { population: { v: 1938431, year: 2025 }, gdpPerCapita: { v: 6615, year: 2025 }, internet: { v: 63.3, year: 2024 } },
      oxford: { rank: 187, scores: [0.0, 28.09, 18.86, 2.85, 12.67, 27.29] },
      msAdoption: null,
      facts: [
        {
          topic: "Compute & infrastructure", date: "2026-07-09",
          text: "On 9 July 2026 the state telecom operator GETESA signed a six-month agreement with Huawei to modernise the national mobile and internet network, days after adopting its 2026–2030 strategic plan. A technical audit had found shortcomings in bandwidth, network equipment and transmission capacity.",
          level: "corroborated",
          sources: [
            S("Ecofin Agency - Equatorial Guinea taps Huawei to upgrade state telecom network (14 Jul 2026)", "https://www.ecofinagency.com/news-digital/1407-57361-equatorial-guinea-taps-huawei-to-upgrade-state-telecom-network"),
            S("Daba Finance (via allAfrica) - Equatorial Guinea partners with Huawei to upgrade telecom network (13 Jul 2026)", "https://allafrica.com/stories/202607140314.html"),
          ],
          note: "The Ecofin page was read in a browser because it blocks automated requests.",
        },
        auFact("Equatorial Guinea"),
      ],
      news: [],
    },

    // ------------------------------------------------------------------ KOSOVO
    {
      id: "xk", name: "Kosovo", flag: "🇽🇰", region: "Western Balkans", group: "Europe", geo: [21.17, 42.67], isoN: "XKX",
      stance: "Starting from zero: an EU AI Act gap analysis and a new digital ministry",
      summary:
        "Kosovo has no AI law, no national AI strategy and no designated AI authority. An EU AI Act readiness assessment, published with the Prime Minister's Office in April 2026, mapped the gaps; personal data law is the main safeguard so far. A new Ministry of Digitalization and Public Administration, created in 2026, is the lead for future AI work. Kosovo is not covered by the Oxford Insights index.",
      glance: { firstStrategy: "—", latestStrategy: "—", newestBody: "Ministry of Digitalization and Public Administration", newestBodyDate: "2026" },
      stats: { population: { v: 1576876, year: 2025 }, gdpPerCapita: { v: 7899, year: 2025 }, internet: { v: 89.4, year: 2018 } },
      oxford: null,
      msAdoption: null,
      facts: [
        {
          topic: "Regulation", date: "2026-04",
          text: "An EU AI Act readiness assessment published in April 2026, prepared with the Office of the Prime Minister, the Ministry of Digitalization and Public Administration and the Information and Privacy Agency with German (GIZ) support, found that Kosovo had no dedicated AI law, no national AI strategy and no authority designated for AI systems. Existing safeguards rest mainly on the personal data protection law (Law No. 06/L-082).",
          level: "single",
          sources: [S("Office of the Prime Minister of Kosovo - EU AI Act Readiness Assessment: The Republic of Kosovo (April 2026, Word document)", "https://kryeministri.rks-gov.net/wp-content/uploads/2026/06/EU-AI-Act-Readiness-Assessment-Republic-of-Kosovo_ENG.docx")],
        },
        {
          topic: "Institutions", date: "2026",
          text: "Under a 2026 government regulation (No. 04/2026), responsibility for digitalisation moved from the Ministry of Economy to a newly created Ministry of Digitalization and Public Administration, which the AI Act assessment names as the main counterpart for future AI work.",
          level: "single",
          sources: [S("Office of the Prime Minister of Kosovo - EU AI Act Readiness Assessment: The Republic of Kosovo (April 2026, Word document)", "https://kryeministri.rks-gov.net/wp-content/uploads/2026/06/EU-AI-Act-Readiness-Assessment-Republic-of-Kosovo_ENG.docx")],
        },
      ],
      news: [],
    },

    // ------------------------------------------------------------------ HOLY SEE (VATICAN CITY)
    {
      id: "va", name: "Holy See (Vatican City)", flag: "🇻🇦", region: "Southern Europe", group: "Europe", geo: [12.45, 41.90], isoN: "336",
      stance: "A global moral voice on AI, with its own AI rules for the city-state",
      summary:
        "The Holy See has made AI a central theme. Pope Leo XIV's first encyclical, Magnifica Humanitas (May 2026), is on safeguarding the human person in the age of AI, following the January 2025 note Antiqua et Nova. Vatican City State has had its own AI guidelines since January 2025, banning uses that violate human dignity or manipulate people, and setting up a commission on AI. It is not covered by the Oxford Insights index or World Bank data.",
      glance: { firstStrategy: "2025 (Vatican City State AI guidelines)", latestStrategy: "2025 (Vatican City State AI guidelines)", newestBody: "—", newestBodyDate: "" },
      stats: { population: null, gdpPerCapita: null, internet: null },
      oxford: null,
      msAdoption: null,
      facts: [
        {
          topic: "Society & ethics", date: "2026-05-25",
          text: "On 25 May 2026 the Vatican published Pope Leo XIV's first encyclical, Magnifica Humanitas, on safeguarding the human person in the time of artificial intelligence. It was signed on 15 May 2026, the 135th anniversary of Leo XIII's Rerum Novarum.",
          level: "verified",
          sources: [
            S("Holy See Press Office - Encyclical Letter 'Magnifica Humanitas' of Pope Leo XIV (25 May 2026)", "https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2026/05/25/260525e.html"),
            S("ANSA - Pope Leo's first encyclical is on AI, will be released May 25 (18 May 2026)", "https://www.ansa.it/amp/english/news/2026/05/18/pope-leos-first-encyclical-is-on-ai-will-be-released-may-25_8d025c9a-10ab-4890-a2de-5cbfb8e2a256.html"),
            S("Catholic Bishops' Conference of England and Wales - Magnifica humanitas to be published on 25 May (18 May 2026)", "https://www.cbcew.org.uk/pope-leo-xivs-first-encyclical-magnifica-humanitas-to-be-published-on-25-may/"),
          ],
        },
        {
          topic: "Regulation", date: "2025-01-01",
          text: "Guidelines on AI for Vatican City State, issued as a decree of the Pontifical Commission governing the city-state, came into force on 1 January 2025. They ban uses of AI that create social inequality, violate human dignity or use subliminal manipulation, and provide for a five-member Commission on AI to prepare laws and monitor AI use.",
          level: "corroborated",
          sources: [
            S("OSV News - Vatican City State puts AI guidelines in place (Jan 2025)", "https://www.osvnews.com/vatican-city-state-puts-ai-guidelines-in-place/"),
            S("National Catholic Register (CNA) - A look at Vatican City's new AI law (Jan 2025)", "https://www.ncregister.com/cna/vatican-city-s-new-ai-law"),
          ],
          note: "The guidelines apply to Vatican City State's institutions, not to the whole Roman Curia.",
        },
        {
          topic: "Society & ethics", date: "2025-01-28",
          text: "On 28 January 2025 the Dicasteries for the Doctrine of the Faith and for Culture and Education published Antiqua et Nova, a note on the relationship between artificial intelligence and human intelligence, approved by Pope Francis.",
          level: "single",
          sources: [S("Holy See - Antiqua et Nova: Note on the Relationship Between Artificial Intelligence and Human Intelligence (28 Jan 2025)", "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_en.html")],
        },
      ],
      news: [
        {
          date: "2026-05-25", title: "Pope Leo XIV's first encyclical is on AI",
          summary: "Magnifica Humanitas, on safeguarding the human person in the age of artificial intelligence, was presented at the Vatican.",
          level: "verified",
          sources: [
            S("Holy See Press Office", "https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2026/05/25/260525e.html"),
            S("ANSA", "https://www.ansa.it/amp/english/news/2026/05/18/pope-leos-first-encyclical-is-on-ai-will-be-released-may-25_8d025c9a-10ab-4890-a2de-5cbfb8e2a256.html"),
            S("Catholic Bishops' Conference of England and Wales", "https://www.cbcew.org.uk/pope-leo-xivs-first-encyclical-magnifica-humanitas-to-be-published-on-25-may/"),
          ],
        },
      ],
    },
  );
})();

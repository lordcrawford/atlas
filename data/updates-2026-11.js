// Atlas: developments found in the seventh audit and news search (27 October to 16 November 2026).
// Same rules as the other data files (see METHODOLOGY.md). Items are pushed onto the nations they concern;
// agreements go to ATLAS.collaborations and new documents to ATLAS.docs.

(function () {
  const A = window.ATLAS;
  const S = (t, u) => ({ t, u });
  const nation = (id) => A.nations.find((n) => n.id === id);
  const addNews = (id, ...items) => { const n = nation(id); if (n) n.news.unshift(...items); };
  const addFacts = (id, ...items) => { const n = nation(id); if (n) n.facts.unshift(...items); };

  // ---- Singapore
  const usChipRule = [
    S("AsiaOne - US export control: Singapore assessing impact of new measures aimed at curbing China's access (17 Nov 2026)", "https://www.asiaone.com/singapore/us-export-control-ai-chips-singapore-impact"),
    S("The Straits Times via Asia News Network - Singapore studying new US rules on AI chip exports that may hit data centres (17 Nov 2026)", "https://asianews.network/singapore-studying-new-us-rules-on-ai-chip-exports-that-may-hit-data-centres/"),
    S("Seoul Economic Daily - US curbs AI chip exports to Singapore and four other nations (16 Nov 2026)", "https://en.sedaily.com/world/2026/11/16/us-curbs-ai-chip-exports-to-singapore-and-four-other-nations"),
  ];
  addNews("sg",
    {
      date: "2026-11-17", title: "Singapore studies new US licence rule on AI chips",
      summary: "The US Commerce Department's interim final rule of 16 November requires licences to export advanced AI chips to, or move them within, Singapore, Malaysia, Thailand, Indonesia and Brazil, with an exemption for US-headquartered companies that file reports. The Ministry of Digital Development and Information and the Ministry of Energy, Trade and Industry said they were studying the measure, engaging US authorities on 'trusted access' for Singapore companies, and would not condone firms using their Singapore link to evade other countries' export controls.",
      level: "verified",
      sources: usChipRule,
      note: "The rule takes effect 90 days after publication in the Federal Register, according to The Straits Times. The statement followed US scrutiny of the Singapore-based cloud firm Megaspeed, which denies wrongdoing.",
    },
    {
      date: "2026-11-15", title: "Singapore signs the San Francisco Declaration",
      summary: "At the Pax Silica founders' retreat in San Francisco, Singapore joined the United States, Australia, India, Israel, Japan, South Korea, Qatar, the UAE and the United Kingdom in signing the San Francisco Declaration on the Secure Foundations of Enduring Prosperity, which sets up five working groups on innovation policy, AI adoption, supply-chain coordination, supply-chain security hubs, and security and resilience.",
      level: "verified",
      sources: [
        S("ANI - US, India and 8 other nations sign San Francisco Declaration (16 Nov 2026)", "https://www.aninews.in/news/world/us/us-india-and-8-other-nations-sign-san-francisco-declaration-to-secure-super-intelligence-supply-chains-ahead-of-quad-summit20261116120000/"),
        S("US Department of State - The San Francisco Declaration on the Secure Foundations of Enduring Prosperity (15 Nov 2026)", "https://www.state.gov/releases/office-of-the-spokesman/2026/11/the-san-francisco-declaration-on-the-secure-foundations-of-enduring-prosperity/"),
        S("The National - UAE among nine US allies pledging to safeguard sensitive AI technology (16 Nov 2026)", "https://www.thenationalnews.com/future/technology/2026/11/16/uae-san-francisco-declaration-pax-silica/"),
        S("Investing.com - US, nine nations sign San Francisco declaration on AI security (16 Nov 2026)", "https://www.investing.com/news/world-news/us-nine-nations-sign-san-francisco-declaration-on-ai-security-5028448"),
      ],
    },
    {
      date: "2026-11-05", title: "GovTech to build GovHarness for government AI agents",
      summary: "Senior Minister of State Tan Kiat How told GovTech's STACK conference that GovTech is developing GovHarness, shared infrastructure for building and running AI agents across government, with deployment, tool connections, monitoring, evaluation and common guardrails. Agents will follow GovTech's Agentic Risk and Capability framework, which ties an agent's powers to safeguards such as human approval for financial transactions, official communications and data deletion.",
      level: "verified",
      sources: [
        S("MDDI - Opening address by SMS Tan Kiat How at GovTech's STACK Conference 2026 (5 Nov 2026)", "https://www.mddi.gov.sg/newsroom/opening-address-by-sms-mr-tan-kiat-how-at-govtech-stack-conference-2026-on-5-nov/"),
        S("GovTech - Opening address by SMS Tan Kiat How at STACK Conference 2026 Day 2", "https://www.tech.gov.sg/media/opening-address-by-sms-tan-kiat-how-at-govtech-stack-conference-2026-day-2/"),
        S("GovInsider - GovTech Singapore stresses need for shared platforms as AI agents move into citizen services (Nov 2026)", "https://govinsider.asia/intl-en/article/govtech-singapore-stresses-need-for-shared-platforms-as-ai-agents-move-into-citizen-services"),
      ],
    },
  );
  addFacts("sg", {
    topic: "Public sector", date: "2026-11-05",
    text: "GovTech is developing GovHarness, shared infrastructure for building and operating AI agents across government, with common guardrails and evaluation. Its Agentic Risk and Capability framework links each agent's capabilities to safeguards, requiring stronger controls such as human approval for higher-risk actions.",
    level: "corroborated",
    sources: [
      S("MDDI - Opening address by SMS Tan Kiat How at GovTech's STACK Conference 2026 (5 Nov 2026)", "https://www.mddi.gov.sg/newsroom/opening-address-by-sms-mr-tan-kiat-how-at-govtech-stack-conference-2026-on-5-nov/"),
      S("GovInsider - GovTech Singapore stresses need for shared platforms as AI agents move into citizen services (Nov 2026)", "https://govinsider.asia/intl-en/article/govtech-singapore-stresses-need-for-shared-platforms-as-ai-agents-move-into-citizen-services"),
    ],
    note: "The MDDI and GovTech pages carry the same speech, so they count as one source.",
  });

  // ---- India
  const inModels = [
    S("The Week (PTI) - IndiaAI Mission releases indigenous foundation models EKA-1, Dhīr 2B and Dhīr 5B (3 Nov 2026)", "https://www.theweek.in/wire-updates/business/2026/11/03/indiaai-mission-releases-indigenous-foundation-models-eka-1-dh-r-2b-and-dh-r-5b.html"),
    S("News On AIR - Govt launches 3 new indigenous AI foundation models under IndiaAI Mission (4 Nov 2026)", "https://newsonair.gov.in/govt-launches-3-new-indigenous-ai-foundation-models-under-indiaai-mission-to-strengthen-homegrown-ai-capabilities/"),
    S("MediaNama - Government likely to push for indigenous AI model use in critical sectors (12 Nov 2026)", "https://www.medianama.com/2026/11/223-government-indigenous-ai-critical-sectors/"),
  ];
  addNews("in", {
    date: "2026-11-03", title: "IndiaAI Mission releases three indigenous foundation models",
    summary: "Soket Labs' EKA-1 (26.3 billion parameters, trained on about 7.5 trillion tokens, covering all 22 scheduled languages and English) and ZenteiQ's Dhīr 2B and Dhīr 5B, built for offline, document-grounded use, were released with subsidised national compute. MediaNama, citing a Business Standard report, says the government is also weighing a push for home-grown models and agents in critical sectors such as defence; MeitY told the Rajya Sabha that only a fraction of the mission's approved funds had been released by April 2026.",
    level: "verified",
    sources: inModels,
    note: "The push for domestic models in critical sectors rests on unnamed officials quoted by Business Standard and is reported as under consideration, not decided.",
  });
  addFacts("in", {
    topic: "Research & models", date: "2026-11-03",
    text: "On 3 November 2026 the IndiaAI Mission released three indigenous foundation models: Soket Labs' EKA-1, with 26.3 billion parameters and support for all 22 scheduled languages, and ZenteiQ's Dhīr 2B and Dhīr 5B for offline, document-grounded automation.",
    level: "corroborated",
    sources: inModels.slice(0, 2),
  });

  // ---- Indonesia
  const idPerpres = [
    S("CNBC Indonesia - RI atur AI sesuai risiko, Komdigi beberkan isi regulasinya (30 Oct 2026)", "https://www.cnbcindonesia.com/tech/20261030162941-37-781009/ri-atur-ai-sesuai-risiko-komdigi-beberkan-isi-regulasinya"),
    S("Antara - Kemkomdigi terapkan pendekatan berbasis risiko dalam aturan etika AI (21 Oct 2026)", "https://www.antaranews.com/berita/5802433/kemkomdigi-terapkan-pendekatan-berbasis-risiko-dalam-aturan-etika-ai"),
  ];
  addNews("id",
    {
      date: "2026-11-16", title: "US adds Indonesia to AI chip licence list",
      summary: "The US Commerce Department's interim final rule requires licences to export advanced AI chips to Indonesia, Malaysia, Singapore, Thailand and Brazil, or to transfer them within those countries, which it calls higher-than-normal diversion risks. US-headquartered buyers that file reports are exempt.",
      level: "verified",
      sources: usChipRule,
    },
    {
      date: "2026-10-30", title: "Komdigi sets out the risk-based AI ethics regulation still awaiting signature",
      summary: "Said Mirza Pahlevi, the ministry's AI director, said the draft presidential regulation on AI ethics bans AI that endangers safety or rights (such as mass facial recognition in public without a legal basis), puts high-risk uses such as medical diagnosis under human final decision, requires labelling of AI output and data-deletion options, and relies on self-assessment rather than new permits, with a two-year adjustment period. Both it and the 2026–2029 roadmap regulation were still in the signing process.",
      level: "corroborated",
      sources: idPerpres,
      note: "Antara (21 October) quotes Irma Handayani of the same ministry describing three risk tiers: unacceptable, high and low, with sector regulators setting their own standards.",
    },
  );
  addFacts("id", {
    topic: "Regulation", date: "2026-10-30",
    text: "The draft presidential regulation on AI ethics, still awaiting the President's signature at the end of October 2026, takes a risk-based approach with three tiers (unacceptable, high and low). It would ban AI that endangers safety or rights, keep final decisions in high-risk uses with a human, require labelling of AI-generated output and data-deletion options, and rely on self-assessment rather than new permits, with a two-year adjustment period.",
    level: "corroborated",
    sources: idPerpres,
  });

  // ---- Brazil
  const brTender = [
    S("Capital Digital - Supercomputador de R$ 1 bilhão da IA brasileira pode ficar para 2027 (3 Nov 2026)", "https://capitaldigital.com.br/supercomputador-de-r-1-bilhao-da-ia-brasileira-pode-ficar-para-2027/"),
    S("Convergência Digital - Governo modifica edital e adia entrega de propostas para a compra do supercomputador de IA (Oct 2026)", "https://convergenciadigital.com.br/governo/governo-modifica-edital-e-adia-entrega-de-propostas-para-a-compra-do-supercomputador-de-inteligencia-artificial/"),
    S("Rádio Plug Araucária - Aquisição de supercomputador federal de IA é adiada para 2027 (3 Nov 2026)", "https://radioplugaraucaria.com/aquisicao-de-supercomputador-federal-de-inteligencia-artificial-e-adiada-para-2027/"),
  ];
  addNews("br",
    {
      date: "2026-11-16", title: "US adds Brazil to AI chip licence list",
      summary: "The US Commerce Department's interim final rule requires licences to export advanced AI chips to Brazil, Indonesia, Malaysia, Singapore and Thailand, or to transfer them within those countries, naming them as higher-than-normal diversion risks. US-headquartered buyers that file reports are exempt.",
      level: "verified",
      sources: usChipRule,
    },
    {
      date: "2026-10-29", title: "Tender for the PBIA supercomputer suspended",
      summary: "The FACC foundation, running Public Selection 27/2026 for the Brazilian AI Plan's roughly R$959 million supercomputer on behalf of the LNCC laboratory, cancelled the bid session set for 4 November and ordered the technical terms to be consolidated. The notice must be republished with a new 35-working-day window, which points to a supplier being chosen in 2027. An earlier erratum had already moved the session from 8 October and reweighted scoring to 70% technical, 20% national production and 10% price.",
      level: "corroborated",
      sources: brTender,
      note: "The two 3 November reports both rest on the FACC notice; Convergência Digital covers the earlier postponement and erratum.",
    },
  );
  addFacts("br", {
    topic: "Compute & infrastructure", date: "2026-10-29",
    text: "The tender for the Brazilian AI Plan's supercomputer (Public Selection 27/2026, about R$959 million, funded through Finep and run by the FACC foundation for the LNCC) was suspended on 29 October 2026 so the terms could be rewritten; the earlier erratum weighted bids 70% technical, 20% national production and 10% price. Supplier selection is now expected in 2027.",
    level: "corroborated",
    sources: brTender,
  });

  // ---- Pakistan
  addNews("pk", {
    date: "2026-11-05", title: "Planning minister restates one-million AI professionals target",
    summary: "At a Pakistan–Russia IT industry event in Islamabad, Planning Minister Ahsan Iqbal said the National AI Policy aims to develop one million AI professionals by 2030, that Pakistan produces more than 75,000 IT graduates a year, and that seven new AI centres will link research, skills, start-ups and industry.",
    level: "corroborated",
    sources: [
      S("Dawn - Pakistan aims to develop one million AI professionals by 2030: Ahsan Iqbal (6 Nov 2026)", "https://www.dawn.com/news/2042412/pakistan-aims-to-develop-one-million-ai-professionals-by-2030-ahsan-iqbal"),
      S("The Nation - Pakistan aims to develop one million AI professionals by 2030: Ahsan Iqbal (5 Nov 2026)", "https://www.nation.com.pk/05-Nov-2026/pakistan-aims-develop-one-million-ai-professionals-2030-ahsan-iqbal"),
    ],
  });

  // ---- Cyprus
  const cyStrategy = [
    S("Cyprus Mail - Cyprus approves its AI strategy. Now it must fund it (11 Nov 2026)", "https://cyprus-mail.com/2026/11/11/cyprus-approves-its-ai-strategy-now-it-must-fund-it"),
    S("Cyprus Mail - EU leaders meet in Dublin for first summit dedicated to artificial intelligence (13 Nov 2026)", "https://cyprus-mail.com/2026/11/13/eu-leaders-meet-in-dublin-for-first-summit-dedicated-to-artificial-intelligence"),
    S("Politis - Digital Rights Charter: aim to present it to parliament by early 2027 (16 Nov 2026)", "https://en.politis.com.cy/life/tech/1069528/digital-rights-charter-aim-to-present-it-to-parliament-by-early-2027"),
  ];
  addNews("cy", {
    date: "2026-11-10", title: "Council of Ministers approves the National AI Strategy 2032",
    summary: "The strategy drafted by the National AI Taskforce was approved on 10 November. It aims to make Cyprus a trusted AI hub in the Eastern Mediterranean, targets 75% enterprise AI adoption by 2030 (from 9.3% in 2025) and at least 3,000 AI professionals by 2032, asks ministries to publish their own AI strategies by the end of 2027, and leans on EuroHPC, the AI Factories and the Pharos-CY supercomputer. Funding for its measures is left to a later action plan.",
    level: "verified",
    sources: cyStrategy,
  });
  addFacts("cy", {
    topic: "Strategy & readiness", date: "2026-11-10",
    text: "On 10 November 2026 the Council of Ministers approved the National AI Strategy 2032, which targets 75% enterprise AI adoption by 2030 and at least 3,000 AI professionals by 2032 and asks each ministry to publish an institutional AI strategy by the end of 2027. The strategy does not cost its measures; funding is left to a later action plan.",
    level: "verified",
    sources: cyStrategy,
  });
  const cy = nation("cy");
  if (cy) cy.glance.latestStrategy = "2026 (National AI Strategy 2032, approved 10 Nov 2026)";
  A.docs.cy = [
    { t: "National AI Strategy 2032: A Strategic Blueprint", kind: "Strategy", year: "2026", by: "Deputy Ministry of Research, Innovation and Digital Policy", u: "https://e-consultation.gov.cy/wp-content/uploads/2026/07/National_AI_Strategy_Cyprus_2032_Final.pdf", from: { t: "e-Consultation platform", u: "https://e-consultation.gov.cy/" }, note: "The text put to public consultation in July 2026; the Council of Ministers approved the strategy on 10 November 2026 and the approved version had not been posted when checked." },
    ...(A.docs.cy || []),
  ];

  // ---- Ireland
  addNews("ie", {
    date: "2026-11-13", title: "Dublin hosts the first EU leaders' meeting devoted to AI",
    summary: "Taoiseach Micheál Martin hosted an informal meeting of EU heads of state or government at the Convention Centre Dublin, chaired by European Council President António Costa, with Mistral AI's Arthur Mensch and Geoffrey Hinton as guest speakers. Leaders discussed competitiveness, technological sovereignty and AI's effects on society; the informal format produced no conclusions, and AI returns at the leaders' retreat in February 2027.",
    level: "verified",
    sources: [
      S("Department of the Taoiseach - Taoiseach Micheál Martin hosts informal meeting of the European Council (13 Nov 2026)", "https://www.gov.ie/en/department-of-the-taoiseach/press-releases/taoiseach-miche%C3%A1l-martin-hosts-informal-meeting-of-the-european-council/"),
      S("RTÉ - AI should be for the benefit of mankind: Taoiseach (13 Nov 2026)", "https://www.rte.ie/news/ireland/2026/1113/1599186-ai-taoiseach-eu/"),
      S("Eunews - Costa calls on the 27 member states in Dublin: the EU must define its position in the global race for AI (5 Nov 2026)", "https://www.eunews.it/en/2026/11/05/costa-calls-on-the-27-member-states-in-dublin-the-eu-must-define-its-position-in-the-global-race-for-ai/"),
    ],
  });

  // ---- Norway and the United Kingdom
  const noGb = [
    S("GOV.UK - United Kingdom–Norway Joint Statement of Intent on Artificial Intelligence (12 Nov 2026)", "https://www.gov.uk/government/news/united-kingdom-norway-joint-statement-of-intent-on-artificial-intelligence"),
    S("Xinhua - Norway, Britain agree to deepen AI cooperation (13 Nov 2026)", "https://english.news.cn/20261113/758481b4c4404540977475848b1c73a4/c.html"),
  ];
  addNews("no", {
    date: "2026-11-12", title: "Norway and the UK sign a statement of intent on AI",
    summary: "Digitalisation Minister Torgeir Micaelsen and UK AI Minister Kanishka Narayan signed the statement in Oslo at the Atlantic Future Forum. It covers compute infrastructure, closer work between AI Norway and the UK AI Security Institute on testing and evaluating models, AI-enabled defence capabilities, and international AI governance. It creates no legal obligations; a memorandum of understanding is to follow.",
    level: "corroborated",
    sources: noGb,
  });

  // ---- Paris Call for AI safety and security (Bahrain, Finland and Norway among the first signatories)
  const parisCall = [
    S("Élysée - Paris Call for AI safety and security (9 Nov 2026)", "https://www.elysee.fr/en/emmanuel-macron/2026/11/09/paris-call-for-ai-safety-and-security"),
    S("Prime Minister of Canada - Joint declaration on Paris call for AI safety and security (9 Nov 2026)", "https://www.pm.gc.ca/en/news/statements/2026/11/09/joint-declaration-paris-call-ai-safety-and-security"),
    S("Yahoo News (dpa) - Macron pushes for tighter AI safety rules at international talks (9 Nov 2026)", "https://www.yahoo.com/news/world/articles/macron-pushes-tighter-ai-safety-234846865.html"),
  ];
  const parisNews = (who) => ({
    date: "2026-11-09", title: `${who} signs the Paris Call for AI safety and security`,
    summary: "The declaration, agreed by video link on 9 November with France, Canada, the Netherlands and others plus ten AI companies, commits governments to a common framework for evaluating and managing frontier-model risks, publishing non-sensitive findings in a standard format, rapid alert systems for serious incidents, and secure channels for whistleblowers. It is non-binding and open to further endorsements.",
    level: "verified",
    sources: parisCall,
  });
  addNews("bh", parisNews("Bahrain"));
  addNews("fi", parisNews("Finland"));
  addNews("no", parisNews("Norway"));

  // ---- Agreements
  A.collaborations.push(
    {
      id: "paris-call", kind: "group", date: "2026-11-09",
      title: "Paris Call for AI safety and security",
      short: "Paris Call on AI safety",
      hub: "fr", members: ["at", "bh", "hr", "cy", "ee", "fi", "ie", "lv", "li", "lu", "no", "pt"],
      text: "A non-binding declaration led by France and agreed by video link on 9 November 2026. Governments, ten AI companies (including Anthropic, Microsoft, Mistral AI and OpenAI) and civil-society groups commit to a common framework for evaluating and managing the risks of frontier models, publishing non-sensitive findings in a standard format, rapid alert systems for serious incidents, developer disclosure of capabilities and known risks, and secure channels for whistleblowers. The Élysée's list of government signatories, which it says is being updated as endorsements arrive, names Austria, Bahrain, Croatia, Cyprus, Estonia, Finland, Ireland, Latvia, Liechtenstein, Luxembourg, Norway and Portugal among the countries on this site.",
      level: "verified",
      sources: parisCall,
      note: "Same-day reports from Canada's prime minister and dpa list six governments (Bahrain, Canada, Finland, France, the Netherlands, Norway); the other members here appear on the Élysée's updated list, checked on 16 November 2026.",
    },
    {
      id: "no-gb", kind: "bilateral", date: "2026-11-12",
      title: "UK–Norway joint statement of intent on AI",
      short: "Statement of intent on AI",
      a: "no", b: "gb",
      text: "Signed in Oslo on 12 November 2026 by Norway's Minister of Digitalisation and Public Governance, Torgeir Micaelsen, and the UK's Minister for AI, Kanishka Narayan, at the Atlantic Future Forum. The two governments commit to explore cooperation on compute infrastructure, AI-enabled defence capabilities (Taskforce RAID and Norway's defence data and AI centre), AI security testing and evaluation (the UK AI Security Institute and AI Norway), and interoperable international AI governance. It creates no legal rights or obligations; a memorandum of understanding is planned.",
      level: "corroborated",
      sources: noGb,
    },
    {
      id: "sf-declaration", kind: "group", date: "2026-11-15",
      title: "San Francisco Declaration (Pax Silica)",
      short: "San Francisco Declaration",
      hub: "us", members: ["sg", "qa", "ae", "in"],
      text: "Signed on 15 November 2026 at the Pax Silica founders' retreat in San Francisco, convened by US Under Secretary of State Jacob Helberg, by the United States, Australia, India, Israel, Japan, South Korea, Qatar, Singapore, the UAE and the United Kingdom. The declaration treats economic security as part of national security, defines the sensitive technologies and critical infrastructure (ports, energy, communications, data networks) behind AI supply chains, and sets up five working groups on innovation policy, AI adoption in key sectors, supply-chain coordination, supply-chain security hubs, and security and resilience.",
      level: "verified",
      sources: [
        S("ANI - US, India and 8 other nations sign San Francisco Declaration (16 Nov 2026)", "https://www.aninews.in/news/world/us/us-india-and-8-other-nations-sign-san-francisco-declaration-to-secure-super-intelligence-supply-chains-ahead-of-quad-summit20261116120000/"),
        S("US Department of State - The San Francisco Declaration on the Secure Foundations of Enduring Prosperity (15 Nov 2026)", "https://www.state.gov/releases/office-of-the-spokesman/2026/11/the-san-francisco-declaration-on-the-secure-foundations-of-enduring-prosperity/"),
        S("The National - UAE among nine US allies pledging to safeguard sensitive AI technology (16 Nov 2026)", "https://www.thenationalnews.com/future/technology/2026/11/16/uae-san-francisco-declaration-pax-silica/"),
        S("Investing.com - US, nine nations sign San Francisco declaration on AI security (16 Nov 2026)", "https://www.investing.com/news/world-news/us-nine-nations-sign-san-francisco-declaration-on-ai-security-5028448"),
      ],
      note: "The State Department published the text and the list of signatories after the first reports; it was read on 22 November 2026. The earlier Pax Silica Declaration (December 2025 onward) is listed separately.",
    },
  );
  addNews("qa", {
    date: "2026-11-15", title: "Qatar signs the San Francisco Declaration",
    summary: "Qatar was among ten governments signing the Pax Silica coalition's San Francisco Declaration on the Secure Foundations of Enduring Prosperity, which treats economic security as national security and sets up five working groups on innovation policy, AI adoption, supply-chain coordination, security hubs and resilience.",
    level: "verified",
    sources: [
      S("ANI - US, India and 8 other nations sign San Francisco Declaration (16 Nov 2026)", "https://www.aninews.in/news/world/us/us-india-and-8-other-nations-sign-san-francisco-declaration-to-secure-super-intelligence-supply-chains-ahead-of-quad-summit20261116120000/"),
      S("US Department of State - The San Francisco Declaration on the Secure Foundations of Enduring Prosperity (15 Nov 2026)", "https://www.state.gov/releases/office-of-the-spokesman/2026/11/the-san-francisco-declaration-on-the-secure-foundations-of-enduring-prosperity/"),
      S("The National - UAE among nine US allies pledging to safeguard sensitive AI technology (16 Nov 2026)", "https://www.thenationalnews.com/future/technology/2026/11/16/uae-san-francisco-declaration-pax-silica/"),
      S("Investing.com - US, nine nations sign San Francisco declaration on AI security (16 Nov 2026)", "https://www.investing.com/news/world-news/us-nine-nations-sign-san-francisco-declaration-on-ai-security-5028448"),
    ],
  });
  addNews("ae", {
    date: "2026-11-15", title: "UAE signs the San Francisco Declaration",
    summary: "The UAE was among ten governments signing the Pax Silica coalition's San Francisco Declaration on the Secure Foundations of Enduring Prosperity, which treats economic security as national security and sets up five working groups on innovation policy, AI adoption, supply-chain coordination, security hubs and resilience.",
    level: "verified",
    sources: [
      S("ANI - US, India and 8 other nations sign San Francisco Declaration (16 Nov 2026)", "https://www.aninews.in/news/world/us/us-india-and-8-other-nations-sign-san-francisco-declaration-to-secure-super-intelligence-supply-chains-ahead-of-quad-summit20261116120000/"),
      S("US Department of State - The San Francisco Declaration on the Secure Foundations of Enduring Prosperity (15 Nov 2026)", "https://www.state.gov/releases/office-of-the-spokesman/2026/11/the-san-francisco-declaration-on-the-secure-foundations-of-enduring-prosperity/"),
      S("The National - UAE among nine US allies pledging to safeguard sensitive AI technology (16 Nov 2026)", "https://www.thenationalnews.com/future/technology/2026/11/16/uae-san-francisco-declaration-pax-silica/"),
      S("Investing.com - US, nine nations sign San Francisco declaration on AI security (16 Nov 2026)", "https://www.investing.com/news/world-news/us-nine-nations-sign-san-francisco-declaration-on-ai-security-5028448"),
    ],
  });
})();

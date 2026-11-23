// Archipelago: developments found in the eighth audit and news search (17 to 22 November 2026), plus two earlier
// items the previous search missed. Same rules as the other data files (see METHODOLOGY.md). Items are pushed
// onto the nations they concern; agreements go to ATLAS.collaborations.

(function () {
  const A = window.ATLAS;
  const S = (t, u) => ({ t, u });
  const nation = (id) => A.nations.find((n) => n.id === id);
  const addNews = (id, ...items) => { const n = nation(id); if (n) n.news.unshift(...items); };
  const addFacts = (id, ...items) => { const n = nation(id); if (n) n.facts.unshift(...items); };

  // ---- Singapore
  addNews("sg", {
    date: "2026-11-18", title: "Three national AI missions set for financial services",
    summary: "At the Singapore FinTech Festival, Deputy Prime Minister Gan Kim Yong, who chairs the Monetary Authority of Singapore, announced three National AI Missions for financial services: preventing financial crime, financing for small and medium-sized firms, and safe transactions by AI agents. MAS will begin a design study early in 2027 for an industry-wide Scam Detection Utility, building on a proof-of-value in which five banks pool transaction data, and the Future of Finance Institute will set up an Agentic Money Sandbox for testing how AI agents transact within set limits.",
    level: "verified",
    sources: [
      S("Monetary Authority of Singapore - Ministerial keynote by DPM Gan Kim Yong at the Singapore FinTech Festival (18 Nov 2026)", "https://www.mas.gov.sg/news/speeches/2026/ministerial-keynote-by-dpm-at-singapore-fintech-festival-2026"),
      S("TNGlobal - Singapore launches initiatives to support National AI Missions for financial services (18 Nov 2026)", "https://technode.global/2026/11/18/singapore-launches-initiatives-to-support-national-ai-missions-for-financial-services/"),
      S("Indiplomacy - Singapore unveils three National AI Missions for financial services (19 Nov 2026)", "https://indiplomacy.com/2026/11/19/singapore-unveils-three-national-ai-missions-for-financial-services-at-fintech-festival-2026/"),
    ],
  });

  // ---- Greece
  const grBill = [
    S("Greek City Times - AI labour bill: Greece sets rules for algorithms at work (22 Nov 2026)", "https://greekcitytimes.com/2026/11/22/ai-labour-bill/"),
    S("Dnews - Greece moves to rein in AI-driven workplace decisions, strengthen gig worker rights (22 Nov 2026)", "https://www.dnews.gr/eidhseis/news-in-english/624004/greece-moves-to-rein-in-ai-driven-workplace-decisions-strengthen-gig-worker-rights"),
    S("Parapolitika - New AI rules at work: what changes for gig workers on digital platforms (2 Nov 2026)", "https://en.parapolitika.gr/politics/315399/new-ai-rules-at-work-what-changes-for-gig-workers-on-digital-platforms/"),
  ];
  addFacts("gr", {
    topic: "Regulation", date: "2026-11-20",
    text: "On 20 November 2026 the Labour Ministry tabled a bill in Parliament setting Greece's first rules on AI and algorithms at work. It requires human oversight of significant decisions about workers, tells workers how automated decisions that affect them are made, bans processing data on workers' emotional state or private conversations, and brings the EU Platform Work Directive into Greek law, with a register of people who work through digital platforms.",
    level: "verified",
    sources: grBill,
    note: "The tabling date is from Greek City Times, citing Parliament's records. The bill went to Cabinet on 2 November and had not been voted on when checked.",
  });
  addNews("gr", {
    date: "2026-11-20", title: "Bill on AI and algorithms at work goes to Parliament",
    summary: "Labour Minister Niki Kerameus's bill requires human oversight of algorithmic management, limits the worker data that automated systems may process and transposes the EU Platform Work Directive, due by 2 December 2026. Parliament's Standing Committee on Social Affairs examines it next.",
    level: "verified",
    sources: grBill,
  });

  // ---- Fiji
  const fjCivil = [
    S("Fiji Sun - Govt prepares civil service for AI (20 Nov 2026)", "https://fijisun.com.fj/news/nation/govt-prepares-civil-service-for-ai"),
    S("Free Press Journal (IANS) - Fiji moves to regulate AI in public services with new policy, competency and governance frameworks (20 Nov 2026)", "https://www.freepressjournal.in/tech/fiji-moves-to-regulate-ai-in-public-services-with-new-policy-competency-governance-frameworks"),
  ];
  addFacts("fj", {
    topic: "Public sector", date: "2026-11-20",
    text: "On 20 November 2026 the government launched the Fiji Civil Service AI Initiative in Suva. Communications Minister Ioane Naivalurua said a civil service AI policy, a competency framework and a governance framework were being developed to guide ethical, transparent and accountable use of AI across government. Of 788 public services mapped, 385 are targeted for digitisation by 2030.",
    level: "corroborated",
    sources: fjCivil,
    note: "The three frameworks were described as in development, not adopted. The 385 figure is from the Free Press Journal's agency report only.",
  });
  addNews("fj", {
    date: "2026-11-20", title: "Fiji launches a civil service AI initiative",
    summary: "The government is drafting an AI policy, competency framework and governance framework for the civil service. Forty public servants completed specialised AI training in the launch week.",
    level: "corroborated",
    sources: fjCivil,
  });

  // ---- Dominican Republic
  const doDecree = [
    S("Diario Libre - Gobierno dominicano establece controles sobre inteligencia artificial (4 Nov 2026)", "https://www.diariolibre.com/politica/gobierno/2026/11/04/gobierno-dominicano-establece-controles-sobre-inteligencia-artificial/3711173"),
    S("Infobae - República Dominicana regula el uso de inteligencia artificial en los servicios públicos (4 Nov 2026)", "https://www.infobae.com/republica-dominicana/2026/11/04/republica-dominicana-regula-el-uso-de-inteligencia-artificial-en-los-servicios-publicos/"),
  ];
  addFacts("do", {
    topic: "Regulation", date: "2026-11-02",
    text: "President Luis Abinader signed Decree 787-26 on 2 November 2026, approving a Code of Ethics for AI in public services. It bans social-scoring systems that condition access to rights and public services, restricts mass biometric identification, and requires an ethics and rights impact assessment before high-impact systems go into use. OGTIC and the government ethics directorate DIGEIG drafted it.",
    level: "corroborated",
    sources: doDecree,
    note: "The signing date is from Diario Libre. The decree binds the public administration and is not a general AI law.",
  });
  addNews("do", {
    date: "2026-11-02", title: "Decree sets an AI ethics code for public services",
    summary: "Decree 787-26 bans social scoring by the state, limits mass biometric identification and makes high-impact government AI systems pass an ethics and rights assessment before use.",
    level: "corroborated",
    sources: doDecree,
  });

  // ---- Jamaica
  const jmMou = [
    S("Jamaica Star - AI infrastructure facilities may be coming to Jamaica (15 Nov 2026)", "https://jamaica-star.com/article/news/20261115/ai-infrastructure-facilities-may-be-coming-jamaica-0"),
    S("Caribbean National Weekly - Holness announces plans to bring artificial intelligence infrastructure to Jamaica (16 Nov 2026)", "https://www.caribbeannationalweekly.com/posts/holness-announces-plans-to-bring-artificial-intelligence-infrastructure-to-jamaica"),
    S("IRIE FM - Gov't assures that any potential AI infrastructure development will not put pressure on electrical and water systems (19 Nov 2026)", "https://iriefm.net/govt-assures-that-any-potential-ai-infrastructure-development-in-jamaica-will-not-put-pressure-on-electrical-and-water-systems/"),
    S("Jamaica Gleaner - Opposition calls for disclosure of AI infrastructure MOU (16 Nov 2026)", "https://jamaica-gleaner.com/article/news/20261116/opposition-calls-disclosure-ai-infrastructure-mou-wants-document-tabled"),
  ];
  addFacts("jm", {
    topic: "Compute & infrastructure", date: "2026-11-15",
    text: "On 15 November 2026 Prime Minister Andrew Holness said the government had approved a memorandum of understanding with a group of investors to explore building AI infrastructure in Jamaica. He did not name the investors or give a value. The information minister, Dana Morris Dixon, said afterwards that no investment or agreement had been finalised and that Cabinet had set limits to protect the electricity and water systems.",
    level: "verified",
    sources: jmMou,
    note: "The Star and the Gleaner belong to the same publisher and count as one source. The opposition has asked for the memorandum to be tabled in Parliament.",
  });
  addNews("jm", {
    date: "2026-11-15", title: "Cabinet approves an exploratory AI infrastructure memorandum",
    summary: "Andrew Holness announced a memorandum with unnamed investors to explore AI infrastructure in Jamaica. The government later said nothing had been finalised, and the opposition called for the document to be published.",
    level: "verified",
    sources: jmMou,
  });

  // ---- India: the San Francisco Declaration (see the agreement in updates-2026-11.js)
  addNews("in", {
    date: "2026-11-15", title: "India signs the San Francisco Declaration",
    summary: "India was among ten governments signing the Pax Silica coalition's San Francisco Declaration on the Secure Foundations of Enduring Prosperity, which treats economic security as national security and sets up five working groups on innovation policy, AI adoption, supply-chain coordination, supply-chain security hubs, and security and resilience.",
    level: "verified",
    sources: [
      S("US Department of State - The San Francisco Declaration on the Secure Foundations of Enduring Prosperity (15 Nov 2026)", "https://www.state.gov/releases/office-of-the-spokesman/2026/11/the-san-francisco-declaration-on-the-secure-foundations-of-enduring-prosperity/"),
      S("ANI - US, India and 8 other nations sign San Francisco Declaration (16 Nov 2026)", "https://www.aninews.in/news/world/us/us-india-and-8-other-nations-sign-san-francisco-declaration-to-secure-super-intelligence-supply-chains-ahead-of-quad-summit20261116120000/"),
      S("The National - UAE among nine US allies pledging to safeguard sensitive AI technology (16 Nov 2026)", "https://www.thenationalnews.com/future/technology/2026/11/16/uae-san-francisco-declaration-pax-silica/"),
    ],
  });

  // ---- Agreements
  A.collaborations.push(
    {
      id: "ae-do", kind: "bilateral", date: "2026-11-20",
      title: "UAE–Dominican Republic AI training agreement",
      short: "One Million AI Coders",
      a: "ae", b: "do",
      text: "At the World Governments Summit Dialogue for Latin America and the Caribbean, held in Cap Cana on 20–21 November 2026, the UAE and the Dominican Republic launched One Million AI Coders, a programme to give one million Dominicans basic skills in AI and prompt engineering. The UAE's Government Experience Exchange Office developed it with the Dominican government, which will run the scholarships with its technology institute ITLA. Two further agreements cover digital education and the UAE's method for delivering public policies in 90 to 100-day cycles.",
      level: "corroborated",
      sources: [
        S("The National - UAE to train 1 million AI coders in Dominican Republic under digital drive (22 Nov 2026)", "https://www.thenationalnews.com/news/uae/2026/11/22/uae-to-train-1-million-ai-coders-in-dominican-republic-under-digital-drive/"),
        S("Hoy - RD firma acuerdos para capacitar en inteligencia artificial y acelerar la digitalización educativa (20 Nov 2026)", "https://hoy.com.do/el-pais/rd-firma-acuerdos-capacitar-inteligencia-artificial-acelerar-digitalizacion-educativa_1109365.html"),
        S("Dominican Today - The Dominican Republic signs agreements to provide training in artificial intelligence (21 Nov 2026)", "https://dominicantoday.com/the-dominican-republic-signs-agreements-to-provide-training-in-artificial-intelligence-and-accelerate-educational-digitization/"),
      ],
      note: "Dominican Today's report is a translation of Hoy's, so the two count as one source.",
    },
    {
      id: "ai-opportunity", kind: "group", date: "2026-06",
      title: "Joint Statement on AI Opportunity Partnership",
      short: "AI Opportunity Statement",
      hub: "us", members: ["al", "am", "at", "bh", "bg", "cr", "hr", "cy", "cz", "dk", "do", "sv", "ee", "fi", "ge", "gr", "is", "in", "lv", "lt", "mt", "mu", "nz", "no", "pw", "pa", "py", "pt", "qa", "rs", "sg", "si", "se", "to", "ae"],
      text: "A US-led statement first signed by the United States and nearly three dozen countries at the second Pax Silica summit in Washington in June 2026, with 19 more joining during the UN General Assembly's high-level week in September. Signatories commit to pro-innovation regulation, to cooperation on energy, critical minerals, semiconductors and AI exports, and to aligning their AI supply chains with those of the United States and the Pax Silica economies. The State Department counts 54 countries, 35 of them on this site.",
      level: "corroborated",
      sources: [
        S("US Department of State - AI Opportunity Statement (text and signatories, read 22 Nov 2026)", "https://www.state.gov/ai-opportunity-statement/"),
        S("ITIF - Tracking Pax Silica's evolution: a timeline (16 Nov 2026)", "https://itif.org/publications/2026/11/16/pax-silica-timeline/"),
      ],
      note: "It is separate from the Pax Silica Declaration, which has 26 signatories. The list of members is the State Department's.",
    },
    {
      id: "gcc-ai-strategy", kind: "group", date: "2026-10",
      title: "GCC AI Strategy for digital government",
      short: "GCC AI Strategy",
      hub: "bh", members: ["kw", "om", "qa", "ae"],
      text: "The Gulf Cooperation Council's Ministerial Committee for Digital Government approved an AI Strategy at its 10th meeting, held in Bahrain in late October 2026 and chaired by Bahrain. The committee, which also includes Saudi Arabia, linked it to shared government services, cybersecurity and continuity of services.",
      level: "single",
      sources: [
        S("Economy Middle East - GCC Ministerial Committee for Digital Government approves AI Strategy (29 Oct 2026)", "https://economymiddleeast.com/news/gcc-ministerial-committee-for-digital-government-approves-ai-strategy-to-boost-cooperation-in-digital-government/"),
      ],
      note: "The strategy's text had not been published when checked, and one outlet's report is the only readable source.",
    },
  );
})();

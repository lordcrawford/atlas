// Atlas dataset: AI policy & governance in six small nations.
// Research cut-off: 20 October 2026 (news); full research to 10 October 2026.
//
// Verification levels (see METHODOLOGY.md):
//   "verified"     - 3+ independent sources agree on the claim
//   "corroborated" - 2 independent sources agree
//   "single"       - only 1 source found; shown with a warning, treat with care
//   "dataset"      - a figure read directly from the publisher's own dataset/report
//                    (World Bank, Oxford Insights, Microsoft); cross-checked where possible
//
// Every source below was opened or returned in search during research.
// `note` records discrepancies between sources.

window.ATLAS = {
  meta: {
    asOf: "2026-11-05",
    pillars: [
      "Policy Capacity",
      "AI Infrastructure",
      "Governance",
      "Public Sector Adoption",
      "Development & Diffusion",
      "Resilience",
    ],
    sources: {
      oxford: {
        t: "Oxford Insights - Government AI Readiness Index 2025 (validated Jan 2026 report, full rankings p.59-68)",
        u: "https://oxfordinsights.com/wp-content/uploads/2026/01/2025-Government-AI-Readiness-Index-Report_01_26.pdf",
      },
      msH2: {
        t: "Microsoft - Global AI Adoption in 2025: A Widening Digital Divide (H2 2025 report, appendix)",
        u: "https://www.microsoft.com/en-us/research/wp-content/uploads/2026/01/Microsoft-AI-Diffusion-Report-2025-H2.pdf",
      },
      msQ2: {
        t: "Microsoft Source EMEA - New Microsoft data: AI adoption continues to rise (22 Sep 2026, Q2 2026 data)",
        u: "https://news.microsoft.com/source/emea/2026/09/new-microsoft-data-ai-adoption-continues-to-rise-switzerland-remains-well-above-the-global-average/",
      },
      aiIndex: {
        t: "Stanford HAI - AI Index Report 2026, ch. 4.4 (LinkedIn AI talent data, Figs 4.4.21 & 4.4.23)",
        u: "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf",
      },
      wbPop: {
        t: "World Bank WDI - Population, total (SP.POP.TOTL)",
        u: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      },
      wbGdp: {
        t: "World Bank WDI - GDP per capita, current US$ (NY.GDP.PCAP.CD)",
        u: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD",
      },
      wbNet: {
        t: "World Bank WDI - Individuals using the Internet, % of population (IT.NET.USER.ZS)",
        u: "https://data.worldbank.org/indicator/IT.NET.USER.ZS",
      },
    },
  },

  nations: [
    // ------------------------------------------------------------------ SINGAPORE
    {
      id: "sg",
      group: "Asia-Pacific", geo: [103.82, 1.35], isoN: "702",
      glance: { firstStrategy: "2019", latestStrategy: "2023 (NAIS 2.0, refreshed May 2026)", newestBody: "National AI Council", newestBodyDate: "2026-02" },
      name: "Singapore",
      flag: "🇸🇬",
      region: "Southeast Asia",
      stance: "State-led strategy, voluntary governance frameworks and testing tools",
      summary:
        "Singapore runs AI policy out of central government. It has published two national strategies (2019, 2023), has refreshed them repeatedly, and puts heavy public money into research and adoption. Its governance tools are model frameworks and open-source testing kits, not a single AI statute. In 2026 the Prime Minister took personal charge through a new National AI Council.",
      stats: {
        population: { v: 6111175, year: 2025 },
        gdpPerCapita: { v: 98814, year: 2025 },
        internet: { v: 94.4, year: 2024 },
      },
      oxford: { rank: 7, scores: [85.0, 74.46, 78.3, 92.5, 64.15, 76.42] },
      msAdoption: { h1_2025: 58.6, h2_2025: 60.9, q1_2026: 63.4, q2_2026: 64.3, rankLatest: 2 },
      facts: [
        {
          topic: "Strategy & readiness",
          date: "2019",
          text: "Singapore published its first National AI Strategy (NAIS) in 2019.",
          level: "corroborated",
          sources: [
            { t: "MDDI - DPM Lawrence Wong speech launching NAIS 2.0 (4 Dec 2023)", u: "https://www.mddi.gov.sg/newsroom/041223/" },
            { t: "MDDI - NAIS 2 to uplift Singapore's social and economic potential", u: "https://www.mddi.gov.sg/newsroom/04122023/" },
            { t: "Smart Nation - National AI Strategy", u: "https://www.smartnation.gov.sg/initiatives/national-ai-strategy/" },
          ],
        },
        {
          topic: "Strategy & readiness",
          date: "2023-12-04",
          text: "NAIS 2.0 was launched on 4 December 2023 by then-Deputy Prime Minister Lawrence Wong at the inaugural Singapore Conference on AI. Its vision is \"AI for the Public Good, for Singapore and the World\".",
          level: "verified",
          sources: [
            { t: "MDDI - Launch of Singapore's Second National AI Strategy", u: "https://www.mddi.gov.sg/newsroom/041223/" },
            { t: "Rajah & Tann - Singapore Unveils National AI Strategy 2.0", u: "https://www.rajahtannasia.com/viewpoints/the-shape-of-things-to-come-singapore-unveils-national-ai-strategy-2-0/" },
            { t: "Malay Mail - Singapore aims to become where world's best AI talents gather (4 Dec 2023)", u: "https://www.malaymail.com/news/singapore/2023/12/04/singapore-says-aiming-to-become-where-worlds-best-ai-talents-gather-under-renewed-adoption-strategy/105799" },
          ],
          note: "Official transcripts name the event both \"Singapore Conference on AI\" and \"Singapore Conference on AI for the Global Good\".",
        },
        {
          topic: "Skills & education",
          date: "2023-12-04",
          text: "NAIS 2.0 set a goal of more than tripling the number of AI practitioners in Singapore to 15,000 within three to five years.",
          level: "verified",
          sources: [
            { t: "MDDI - DPM Wong speech (\"more than triple ... to 15,000\")", u: "https://www.mddi.gov.sg/newsroom/041223/" },
            { t: "EDB - Singapore updates AI strategy", u: "https://www.edb.gov.sg/en/business-insights/insights/singapore-updates-ai-strategy-with-aim-to-contribute-globally-valuable-breakthroughs.html" },
            { t: "Business Today - Singapore To Triple AI Pool", u: "https://www.businesstoday.com.my/2023/12/04/singapore-to-triple-ai-pool-build-iconic-ai-site/" },
            { t: "IT Brief - Singapore's plan to increase AI workforce", u: "https://itbrief.co.uk/story/singapore-s-plan-to-increase-ai-workforce-with-updated-national-ai-strategy" },
          ],
          note: "No official progress count toward the 15,000 target was found.",
        },
        {
          topic: "Regulation",
          date: "2023-06-07",
          text: "IMDA launched the AI Verify Foundation on 7 June 2023 to build open-source AI testing tools. Its founding premier members included IBM, Microsoft, Google, Red Hat and Salesforce.",
          level: "verified",
          sources: [
            { t: "IMDA - Singapore launches AI Verify Foundation", u: "https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2023/singapore-launches-ai-verify-foundation" },
            { t: "PDPC - Launch of AI Verify Foundation", u: "https://www.pdpc.gov.sg/news-and-events/announcements/2023/06/launch-of-ai-verify-foundation-to-shape-the-future-of-ai-standards-through-collaboration" },
            { t: "AAP / Cision release (7 Jun 2023)", u: "https://www.aap.com.au/aapreleases/cision20230607ae22224" },
          ],
          note: "PDPC's copy of the announcement is dated 6 June. IMDA's own release and the AAP wire both say 7 June.",
        },
        {
          topic: "Regulation",
          date: "2024-05-30",
          text: "IMDA and the AI Verify Foundation released the Model AI Governance Framework for Generative AI on 30 May 2024, after a public consultation from January to March 2024.",
          level: "verified",
          sources: [
            { t: "Clyde & Co - Singapore's Model AI Governance Framework for Generative AI", u: "https://www.clydeco.com/en/insights/2024/05/singapore-s-model-ai-governance-framework-for-gene" },
            { t: "Morgan Lewis - Singapore expands its AI governance approach", u: "https://www.morganlewis.com/pubs/2024/07/singapore-expands-its-ai-governance-approach-to-include-generative-ai" },
            { t: "Privacy World - Singapore publishes generative AI model governance framework", u: "https://www.privacyworld.blog/2024/05/singapore-publishes-generative-ai-model-governance-framework/" },
          ],
        },
        {
          topic: "Regulation",
          date: "2026-01-22",
          text: "On 22 January 2026, at the World Economic Forum in Davos, Singapore launched a Model AI Governance Framework for Agentic AI. It is voluntary best-practice guidance that keeps accountability with humans and asks organisations to bound agents' risk before deployment.",
          level: "corroborated",
          sources: [
            { t: "CMS - Singapore Issues Global First Agentic AI Model Governance Framework at Davos", u: "https://cms.law/en/sgp/legal-updates/singapore-issues-global-first-agentic-ai-model-governance-framework-at-davos" },
            { t: "Allen & Gledhill - Model AI Governance Framework for Agentic AI", u: "https://www.allenandgledhill.com/sg/publication/articles/32314/launches-new-model-ai-governance-framework-for-agentic-ai" },
          ],
        },
        {
          topic: "Economy",
          date: "2026-01-24",
          text: "Singapore is putting more than S$1 billion into public AI research and talent from 2025 to 2030 under the National AI R&D (NAIRD) Plan, announced at Singapore AI Research Week. An earlier tranche of over S$500 million covered 2019–2023.",
          level: "verified",
          sources: [
            { t: "MDDI - Singapore invests over S$1 billion in National AI R&D Plan", u: "https://www.mddi.gov.sg/newsroom/singapore-invests-over-s-1-billion-in-national-ai-research-and-development-plan-to-strengthen-ai-research-capabilities-and-our-position-as-global-ai-hub/" },
            { t: "JTC (Straits Times) - Singapore to invest $1 billion over 5 years", u: "https://www.jtc.gov.sg/about-jtc/news-and-stories/feature-stories/singapore-to-invest-$1-billion-over-5-years-to-boost-ai-public-research" },
            { t: "HRD Asia - Singapore commits S$1b to AI research", u: "https://www.hcamag.com/asia/specialisation/hr-technology/singapore-commits-s1b-to-ai-research-supporting-adoption-in-key-industries/563214" },
            { t: "People Matters - Singapore commits S$1 billion to AI research", u: "https://sea.peoplemattersglobal.com/news/skilling/singapore-commits-sdollar1-billion-to-ai-research-accelerates-adoption-across-key-industries-48165" },
          ],
        },
        {
          topic: "Institutions",
          date: "2026-02-12",
          text: "Budget 2026 created a National AI Council chaired by Prime Minister Lawrence Wong. It oversees four National AI Missions: advanced manufacturing, financial services, connectivity and healthcare.",
          level: "verified",
          sources: [
            { t: "MDDI - Update to Singapore's National AI Strategy (factsheet)", u: "https://www.mddi.gov.sg/newsroom/update-to-singapore-s-national-ai-strategy--refreshed-priorities-to-harness-ai-for-the-public-good-factsheet/" },
            { t: "TechNode Global - Singapore to set up National AI Council (12 Feb 2026)", u: "https://technode.global/2026/02/12/singapore-to-set-up-national-ai-council-budget-2026/" },
            { t: "Crowdfund Insider - National AI Council chaired by PM Wong", u: "https://www.crowdfundinsider.com/2026/02/261984-singapore-to-form-national-ai-council-chaired-by-pm-wong/" },
          ],
        },
        {
          topic: "Economy",
          date: "2026-02-12",
          text: "Budget 2026 added AI spending to the Enterprise Innovation Scheme: a 400% tax deduction on up to S$50,000 of qualifying AI spending per Year of Assessment, for YA 2027 and YA 2028. Unlike the scheme's other categories, AI spending cannot be converted to a cash payout.",
          level: "corroborated",
          sources: [
            { t: "Ministry of Finance - Budget 2026 Annex C-1 (PDF)", u: "https://isomer-user-content.by.gov.sg/137/e8e0cd35-9515-4fbc-966a-5d21ebc3fd6a/fy2026_annexc1.pdf" },
            { t: "Mondaq - Decoding Singapore Budget 2026: key tax measures", u: "https://www.mondaq.com/tax-authorities/1747428/decoding-singapore-budget-2026-spotlight-on-key-tax-measures" },
          ],
        },
        {
          topic: "Strategy & readiness",
          date: "2026-05-20",
          text: "On 20 May 2026, at the ATxSummit, Minister Josephine Teo announced a refresh of NAIS. It sets 10 refreshed priorities across the strategy's enablers, organised around the four AI Missions.",
          level: "corroborated",
          sources: [
            { t: "MDDI - Update to Singapore's National AI Strategy (factsheet)", u: "https://www.mddi.gov.sg/newsroom/update-to-singapore-s-national-ai-strategy--refreshed-priorities-to-harness-ai-for-the-public-good-factsheet/" },
            { t: "MDDI - Opening address by Minister Josephine Teo at ATxSummit 2026", u: "https://www.mddi.gov.sg/newsroom/opening-address-by-minister-josephine-teo-at-atxsummit-2026/" },
            { t: "EDB - Singapore AI round-up, April-June 2026", u: "https://www.edb.gov.sg/en/business-insights/insights/the-latest-in-singapores-ai-scene-that-businesses-should-know-a-round-up-from-april-to-june-2026.html" },
          ],
          note: "The exact 20 May date appears only on MDDI pages. EDB confirms the refresh and the four missions but gives no date.",
        },
      ],
      news: [
        {
          date: "2026-10-21", title: "S$45 million for AI in manufacturing",
          summary: "Enterprise Singapore set aside more than S$45 million over three years for Catalytic AI Solutions, ready-to-deploy AI tools for manufacturing SMEs (design, quotation processing, quality inspection, scheduling and predictive maintenance), with costs shared with the companies. Minister of State Gan Siow Huang announced it at ITAP 2026 on 21 October.",
          level: "corroborated",
          sources: [
            { t: "Ministry of Energy, Trade and Industry - Opening address by MOS Gan Siow Huang at ITAP 2026 (21 Oct 2026)", u: "https://www.meti.gov.sg/newsroom/opening-address-by-minister-of-state-for-energy--trade-and-industry-gan-siow-huang-at-industrial-transformation-asia-pacific--itap--2026/" },
            { t: "The Star (Bernama) - Singapore allocates over S$45mil to boost AI in manufacturing (21 Oct 2026)", u: "https://www.thestar.com.my/business/business-news/2026/10/21/singapore-allocates-over-s45mil-to-boost-ai-in-manufacturing" },
          ],
        },
        {
          date: "2026-10-14", title: "Anthropic signs AI safety MOU with Singapore",
          note: "Disclosure: this site is compiled by Claude, made by Anthropic. Anthropic's own announcement is cited for its account of the agreement and of GovTech's use of Claude Code.",
          summary: "Anthropic opened a Singapore office and signed a memorandum of understanding with the Ministry of Digital Development and Information, covering AI model evaluation, safety research and incident response, and research on AI adoption and its impact. Anthropic also said more than 1,500 GovTech Singapore engineers had adopted its Claude Code tool.",
          level: "corroborated",
          sources: [
            { t: "Marketing-Interactive - Anthropic opens SG office, partners govt on AI safety", u: "https://www.marketing-interactive.com/anthropic-opens-sg-office-partners-govt-on-ai-safety" },
            { t: "Anthropic - Anthropic opens Singapore office (Oct 2026)", u: "https://anthropic.com/news/singapore-office-opening" },
          ],
        },
        {
          date: "2026-09-30",
          title: "Singapore records its first AI-linked personal data breach",
          summary:
            "Food retailer Bee Cheng Hiang used a generative-AI-written script to send bulk emails. The script left every address visible in each batch, exposing about 95,000 members' emails. The PDPC accepted a voluntary undertaking and classed the incident as human error, not an AI malfunction.",
          level: "verified",
          sources: [
            { t: "The Edge Malaysia - Singapore sees first data breach linked to AI use (citing The Straits Times)", u: "https://theedgemalaysia.com/node/820012" },
            { t: "eSecurity Planet - Singapore reports first AI-related data breach", u: "https://www.esecurityplanet.com/threats/news-singapore-ai-data-breach-95000-emails-apac/" },
            { t: "Mothership - Bee Cheng Hiang members data breach", u: "https://mothership.sg/2026/10/bee-cheng-hiang-members-data-breach-ai/" },
            { t: "OECD.AI Incidents Monitor entry", u: "https://oecd.ai/en/incidents/2026-09-30-1509" },
          ],
          note: "Reported totals range from \"more than 95,000\" to 95,364.",
        },
        {
          date: "2026-09-22",
          title: "MAS warns an AI investment pullback could hit financial stability",
          summary:
            "In its September 2026 Financial Stability Review, the Monetary Authority of Singapore warned that a sharp pullback in AI-related investment and a reassessment of AI asset valuations could weigh on corporate earnings, household incomes and financial stability.",
          level: "verified",
          sources: [
            { t: "TNGlobal - MAS flags risks from potential AI investment pullback (23 Sep 2026)", u: "https://technode.global/2026/09/23/mas-flags-risks-from-potential-ai-investment-pullback/" },
            { t: "Crowdfund Insider - Singapore financial stability risks rise as AI investment lifts cost of capital", u: "https://www.crowdfundinsider.com/2026/09/313572-singapore-financial-stability-risks-rise-as-ai-investment-fiscal-pressures-lift-cost-of-capital/" },
            { t: "The Arabian Post - MAS warns AI retreat could unsettle markets", u: "https://thearabianpost.com/mas-warns-ai-retreat-could-unsettle-markets/" },
          ],
          note: "Rewritten in the 14 Oct 2026 re-audit: the OECD.AI incident page first cited no longer exists, and the remaining source did not cover the review. The claim that AI-assisted cyber risk was a top concern for financial institutions was dropped because no readable source stated it.",
        },
        {
          date: "2026-09-22",
          title: "Singapore stays #2 worldwide for AI use (64.3%)",
          summary:
            "Microsoft's Q2 2026 AI Diffusion data puts generative-AI use among working-age Singaporeans at 64.3%, second only to the UAE.",
          level: "corroborated",
          sources: [
            { t: "Microsoft Source EMEA (22 Sep 2026)", u: "https://news.microsoft.com/source/emea/2026/09/new-microsoft-data-ai-adoption-continues-to-rise-switzerland-remains-well-above-the-global-average/" },
            { t: "MediaPost - Microsoft Tracks AI Adoption Rates", u: "https://www.mediapost.com/publications/article/418164/microsoft-tracks-ai-adoption-rates-us-ranking-s.html" },
          ],
        },
        {
          date: "2026-05-20",
          title: "NAIS refreshed around four national AI Missions",
          summary: "Minister Josephine Teo announced 10 refreshed priorities at ATxSummit 2026, and the 'Placemaking' enabler was renamed 'Ecosystem Integration'.",
          level: "corroborated",
          sources: [
            { t: "MDDI factsheet", u: "https://www.mddi.gov.sg/newsroom/update-to-singapore-s-national-ai-strategy--refreshed-priorities-to-harness-ai-for-the-public-good-factsheet/" },
            { t: "EDB round-up, Apr-Jun 2026", u: "https://www.edb.gov.sg/en/business-insights/insights/the-latest-in-singapores-ai-scene-that-businesses-should-know-a-round-up-from-april-to-june-2026.html" },
          ],
        },
        {
          date: "2026-02-12",
          title: "Budget 2026: PM to chair National AI Council; 400% AI tax deduction",
          summary: "Budget 2026 created the National AI Council and four AI Missions, added an AI category to the Enterprise Innovation Scheme, and launched a 'Champions of AI' programme for firms pursuing end-to-end AI transformation.",
          level: "verified",
          sources: [
            { t: "TechNode Global", u: "https://technode.global/2026/02/12/singapore-to-set-up-national-ai-council-budget-2026/" },
            { t: "EDB - What international businesses should know from Budget 2026", u: "https://www.edb.gov.sg/news-and-insights/singapores-next-growth-chapter-what-international-businesses-should-know-from-budget-2026" },
            { t: "MOF Budget 2026 Annex C-1", u: "https://isomer-user-content.by.gov.sg/137/e8e0cd35-9515-4fbc-966a-5d21ebc3fd6a/fy2026_annexc1.pdf" },
          ],
        },
        {
          date: "2026-01-22",
          title: "World-first governance framework for agentic AI launched at Davos",
          summary: "IMDA's framework covers bounding agent risk, human accountability, technical controls and transparency to end users.",
          level: "corroborated",
          sources: [
            { t: "CMS", u: "https://cms.law/en/sgp/legal-updates/singapore-issues-global-first-agentic-ai-model-governance-framework-at-davos" },
            { t: "Allen & Gledhill", u: "https://www.allenandgledhill.com/sg/publication/articles/32314/launches-new-model-ai-governance-framework-for-agentic-ai" },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ ESTONIA
    {
      id: "ee",
      group: "Europe", geo: [24.75, 59.44], isoN: "233",
      glance: { firstStrategy: "2019", latestStrategy: "2026 (Eesti.ai programme)", newestBody: "Eesti.ai council", newestBodyDate: "2026-01-27" },
      name: "Estonia",
      flag: "🇪🇪",
      region: "Northern Europe (EU)",
      stance: "Digital-state pioneer pushing AI adoption in schools and government; EU AI Act applies",
      summary:
        "Estonia treats AI as the next phase of its e-government model. It opened with a 2019 'Kratt' plan for public-sector AI, then launched AI Leap, among the first national programmes to put AI tools in every upper-secondary school. In 2026 the Prime Minister's Eesti.ai programme followed, aimed at raising productivity, and it includes a plan for digital identities for AI agents. As an EU member, Estonia is bound by the EU AI Act.",
      stats: {
        population: { v: 1366475, year: 2025 },
        gdpPerCapita: { v: 34418, year: 2025 },
        internet: { v: 92.2, year: 2024 },
      },
      oxford: { rank: 21, scores: [96.0, 54.29, 90.0, 99.63, 46.01, 64.38] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy & readiness",
          date: "2019-07-25",
          text: "Estonia's Cabinet adopted its first national AI strategy, the 'Kratt' plan (Kratikava), on 25 July 2019. It committed at least €10 million to implementation over 2019–2021.",
          level: "verified",
          sources: [
            { t: "ISSA - Artificial Intelligence for Estonia (adopted 25 July 2019)", u: "https://iskm.issa.int/node/13602" },
            { t: "EU Interoperable Europe - Estonia's national AI strategy", u: "https://interoperable-europe.ec.europa.eu/node/705457" },
            { t: "Interesting Engineering - KrattAI: Estonia's National AI Strategy", u: "https://interestingengineering.com/innovation/krattai-estonias-national-artificial-intelligence-strategy" },
          ],
          note: "'Kratt' is a creature from Estonian folklore, and the government uses the word for narrow AI applications.",
        },
        {
          topic: "Public sector",
          date: "2019+",
          text: "The Kratt programme produced Bürokratt, an AI-based virtual assistant that gives citizens access to government services across channels and devices.",
          level: "single",
          sources: [
            { t: "The Mandarin - Estonia's AI vision", u: "https://www.themandarin.com.au/239853-estonias-ai-vision-building-a-data-driven-society-and-government" },
          ],
        },
        {
          topic: "Skills & education",
          date: "2025-02-25",
          text: "On 25 February 2025 Estonia announced AI Leap (TI-Hüpe), a national programme to give students and teachers free access to leading AI tools. President Alar Karis initiated it, and it is framed as the successor to the 1990s Tiger Leap programme that brought computers and the internet into schools.",
          level: "verified",
          sources: [
            { t: "Ministry of Education and Research (hm.ee) - AI Leap announcement", u: "https://hm.ee/en/news/estonia-announces-groundbreaking-national-initiative-ai-leap-programme-bring-ai-tools-all" },
            { t: "Euronews - Estonia announces AI initiative with OpenAI (25 Feb 2025)", u: "https://www.euronews.com/2025/02/25/estonia-announces-new-ai-initiative-with-openai-to-roll-out-chatbots-in-schools" },
            { t: "e-Estonia - AI Leap programme to bring AI tools to all schools", u: "https://e-estonia.com/estonia-announces-a-groundbreaking-national-initiative-ai-leap-programme-to-bring-ai-tools-to-all-schools" },
          ],
        },
        {
          topic: "Skills & education",
          date: "2025-09-01",
          text: "AI Leap began on 1 September 2025 with 20,000 students in grades 10–11 and 3,000 teachers. The government opened negotiations with OpenAI and Anthropic, and the student app is built on ChatGPT Edu.",
          level: "verified",
          sources: [
            { t: "hm.ee - AI Leap announcement", u: "https://hm.ee/en/news/estonia-announces-groundbreaking-national-initiative-ai-leap-programme-bring-ai-tools-all" },
            { t: "GovInsider - Estonia to roll out free AI tools for school students", u: "https://govinsider.asia/intl-en/article/estonia-to-roll-out-free-ai-tools-for-school-students-later-this-year" },
            { t: "Estonian World - Estonia to give all schools free access to AI tools", u: "https://estonianworld.com/knowledge/estonia-to-give-all-schools-free-access-to-ai-tools/" },
            { t: "GovInsider - Estonia exercises sovereignty in its ministry-led AI movement (ChatGPT Edu)", u: "https://govinsider.asia/intl-en/article/estonia-exercises-sovereignty-in-its-moe-led-ai-movement-for-schools" },
          ],
          note: "No public final contract detailing Anthropic's role was found. Teachers received paid ChatGPT or Gemini in August 2025.",
        },
        {
          topic: "Skills & education",
          date: "2026-01",
          text: "Students got the AI Leap learning app in late January 2026, months after teachers. The delay came because rules protecting minors' data had to be amended first, which happened in December 2025.",
          level: "verified",
          sources: [
            { t: "TI-Hüpe - AI Leap's first year", u: "https://tihupe.ee/en/3385/" },
            { t: "Apolitical - AI Leap case study", u: "https://apolitical.co/en/navigator/case-studies/ai-leap-estonia-s-nationwide-programme-to-rethink-education-in-the-age-of-ai" },
            { t: "ERR News - students and the law delay the app", u: "https://news.err.ee/1609780941/students-may-not-be-interested-in-using-ai-developed-with-state-participation" },
          ],
        },
        {
          topic: "Skills & education",
          date: "2026-06-09",
          text: "First-year results: 154 of Estonia's 156 upper-secondary schools took part, with about 5,000 teachers and 20,000 students. 94% of participating teachers used AI in their work and 63% redesigned their teaching. More than 12,000 students used the learning app, about 4,000 of them weekly.",
          level: "single",
          sources: [
            { t: "TI-Hüpe - AI Leap's first year (9 Jun 2026)", u: "https://tihupe.ee/en/3385/" },
          ],
          note: "Teacher counts vary by source (4,700–5,000), and one analysis gives 95.9% teacher use instead of 94%. These are programme-reported numbers. Learning outcomes are still being studied by the University of Tartu with Stanford and OpenAI (~9,000 students), with analysis starting summer 2026.",
        },
        {
          topic: "Economy",
          date: "2026-01-27",
          text: "Prime Minister Kristen Michal launched Eesti.ai on 27 January 2026. Its stated goals are to roughly double the value of Estonians' work by 2035 and to grow GDP by 25% in five years and 50% in ten. Bolt CEO Markus Villig chairs its council.",
          level: "verified",
          sources: [
            { t: "Government Office (Riigikantselei) - Eesti.ai initiative", u: "https://riigikantselei.ee/en/supporting-government-and-prime-minister/eestiai-initiative" },
            { t: "Valitsus.ee - Government launched the Eesti.ai initiative", u: "https://www.valitsus.ee/en/news/government-launched-eestiai-initiative-together-leading-entrepreneurs" },
            { t: "e-Estonia - Eesti.ai launch", u: "https://e-estonia.com/estonia-ai-initiative-launch-eesti-ai/" },
          ],
          note: "These are government targets, not outcomes. Eesti.ai's team lead told ERR that 2026 is the launch phase and too early to measure impact.",
        },
        {
          topic: "Economy",
          date: "2026-04-08",
          text: "On 8 April 2026 the Eesti.ai council approved 15 high-impact AI projects. Each must show measurable gains in time, cost or quality.",
          level: "single",
          sources: [
            { t: "Government Office - Eesti.ai initiative", u: "https://riigikantselei.ee/en/supporting-government-and-prime-minister/eestiai-initiative" },
            { t: "Government Office - Michal: Estonia aims to become a world leader in the use of AI", u: "https://www.riigikantselei.ee/en/news/michal-estonia-aims-become-world-leader-use-artificial-intelligence" },
          ],
        },
        {
          topic: "Public sector",
          date: "2026-06-17",
          text: "On 17 June 2026 the Eesti.ai advisory board agreed that Estonia will create digital identities for AI agents ('AI ID codes'), so that agents can act for people or companies within set limits in a verifiable, auditable way.",
          level: "corroborated",
          sources: [
            { t: "Valitsus.ee - PM Michal: Estonia to become first country to create digital identities for AI agents", u: "https://www.valitsus.ee/en/news/prime-minister-michal-estonia-become-first-country-create-digital-identities-ai-agents" },
            { t: "Global Government Forum - Estonia set to be first country to create digital identities for AI agents", u: "https://www.globalgovernmentforum.com/estonia-set-to-be-first-country-to-create-digital-identities-for-ai-agents/" },
          ],
        },
        {
          topic: "Skills & education",
          date: "2026",
          text: "The Government Office opened a €5 million procurement for AI-skills training, aiming to reach 100,000 working-age residents across 2026–2027.",
          level: "corroborated",
          sources: [
            { t: "ERR News - Estonia launches €5 million Eesti.ai training procurement", u: "https://news.err.ee/1610088193/estonia-launches-5-million-eesti-ai-training-procurement" },
            { t: "IES Lublin - Eesti.ai: the next stage in Estonia's digital transformation", u: "https://ies.lublin.pl/en/comments/eesti-ai-the-next-stage-in-estonias-digital-transformation/" },
          ],
        },
      ],
      news: [
        {
          date: "2026-06-17",
          title: "Estonia moves to give AI agents official digital IDs",
          summary: "The Eesti.ai advisory board backed 'AI ID codes'. The PM said it must be clear 'who is acting on whose behalf with what rights'. An AI-literacy pilot ran 35 workshops in six cities for about 1,200 people.",
          level: "corroborated",
          sources: [
            { t: "Valitsus.ee (17 Jun 2026)", u: "https://www.valitsus.ee/en/news/prime-minister-michal-estonia-become-first-country-create-digital-identities-ai-agents" },
            { t: "Global Government Forum", u: "https://www.globalgovernmentforum.com/estonia-set-to-be-first-country-to-create-digital-identities-for-ai-agents/" },
          ],
        },
        {
          date: "2026-06-09",
          title: "AI Leap year one: wide teacher uptake, learning impact still unknown",
          summary: "154 of 156 upper-secondary schools took part, and 94% of teachers used AI. The programme expands to the whole upper-secondary level from fall 2026, and the ministry is considering vocational schools.",
          level: "single",
          sources: [
            { t: "TI-Hüpe", u: "https://tihupe.ee/en/3385/" },
          ],
          note: "The original 2025 plan said vocational schools would join in September 2026. The June 2026 update says this is only 'being considered'.",
        },
        {
          date: "2026-04-08",
          title: "Eesti.ai council approves 15 flagship AI projects",
          summary: "The projects aim to speed up AI adoption, and each must show measurable time, cost or quality gains.",
          level: "single",
          sources: [
            { t: "Government Office", u: "https://riigikantselei.ee/en/supporting-government-and-prime-minister/eestiai-initiative" },
            { t: "Government Office news", u: "https://www.riigikantselei.ee/en/news/michal-estonia-aims-become-world-leader-use-artificial-intelligence" },
          ],
        },
        {
          date: "2026-01-27",
          title: "PM Michal launches Eesti.ai with leading entrepreneurs",
          summary: "A whole-of-economy AI adoption drive with a target of €20 billion in extra growth by 2035.",
          level: "verified",
          sources: [
            { t: "Valitsus.ee", u: "https://www.valitsus.ee/en/news/government-launched-eestiai-initiative-together-leading-entrepreneurs" },
            { t: "e-Estonia", u: "https://e-estonia.com/estonia-ai-initiative-launch-eesti-ai/" },
            { t: "Invest in Estonia", u: "https://investinestonia.com/estonia-launches-bold-ai-initiative-to-double-productivity/" },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ UAE
    {
      id: "ae",
      group: "Middle East", geo: [54.37, 24.45], isoN: "784",
      glance: { firstStrategy: "2017", latestStrategy: "2019 (National AI Strategy 2031)", newestBody: "AI & Data Authority", newestBodyDate: "2026-06-14" },
      name: "United Arab Emirates",
      flag: "🇦🇪",
      region: "Middle East / Gulf",
      stance: "Top-down national programme with world-leading usage and massive compute build-out",
      summary:
        "The UAE appointed the world's first AI minister in 2017. It pairs a 2031 national strategy with very large investment in compute (Stargate UAE) and US tech partnerships. It now leads the world in everyday AI use: Microsoft estimates 73% of working-age residents use generative AI. Governance is centralised: a 2024 ethics charter, AI-assisted lawmaking, and a new federal AI & Data Authority in 2026.",
      stats: {
        population: { v: 11513149, year: 2025 },
        gdpPerCapita: { v: 50274, year: 2024 },
        internet: { v: 100, year: 2024 },
      },
      oxford: { rank: 19, scores: [73.0, 73.77, 72.5, 97.27, 57.34, 43.15] },
      msAdoption: { h1_2025: 59.4, h2_2025: 64.0, q1_2026: 70.1, q2_2026: 73.3, rankLatest: 1 },
      facts: [
        {
          topic: "Institutions",
          date: "2017-10-19",
          text: "In October 2017 the UAE named Omar Sultan Al Olama Minister of State for Artificial Intelligence. He was the first minister in the world with that title.",
          level: "verified",
          sources: [
            { t: "Atlantic Council - Omar Sultan Al Olama, Minister of State for AI", u: "https://www.atlanticcouncil.org/?p=147641" },
            { t: "World Governments Summit - Omar Sultan Al Olama", u: "https://www.worldgovernmentssummit.org/about/leadership/omar-sultan-al-olama" },
            { t: "Khaleej Times - (notes Al Olama became the world's first AI minister in 2017)", u: "https://www.khaleejtimes.com/uae/uae-authority-ai-data-digital-government" },
          ],
        },
        {
          topic: "Strategy & readiness",
          date: "2019-04",
          text: "The UAE launched its AI strategy in October 2017 under the Centennial 2071 vision. In April 2019 the Cabinet adopted the detailed National Artificial Intelligence Strategy 2031, an eight-objective plan to make the UAE a global AI leader by 2031.",
          level: "single",
          sources: [
            { t: "The National - UAE Cabinet approves national AI strategy (21 Apr 2019)", u: "https://thenational-the-national-prod.cdn.arcpublishing.com/uae/government/uae-cabinet-approves-national-artificial-intelligence-strategy-1.851964" },
            { t: "UAE Ministry of Foreign Affairs - Mohammed bin Rashid launches UAE Strategy for Artificial Intelligence (17 Oct 2017)", u: "https://www.mofa.gov.ae/en/mediahub/news/2019/2017/10/17/17-10-2017-uae-artificial-intelligence" },
          ],
          note: "Sources sometimes conflate the October 2017 launch with the April 2019 Cabinet adoption of the full 2031 document. Both dates are correct for different steps; each step rests on one of the two sources.",
        },
        {
          topic: "Economy",
          date: "2024-04-16",
          text: "On 16 April 2024 Microsoft announced a $1.5 billion minority investment in Abu Dhabi's G42, and Microsoft President Brad Smith joined G42's board. Both governments were consulted, and the deal included an intergovernmental assurance agreement on AI safety and security.",
          level: "verified",
          sources: [
            { t: "Economy Middle East - Microsoft invests $1.5 billion in Abu Dhabi's G42", u: "https://economymiddleeast.com/news/microsoft-invests-1-5-billion-in-abu-dhabis-g42-to-accelerate-ai-development-global-expansion" },
            { t: "CairoScene - Microsoft invests $1.5 billion in Abu Dhabi's AI group G42", u: "https://cairoscene.com:443/Business/Microsoft-Invests-1-5-Billion-in-Abu-Dhabi-s-AI-Group-G42" },
            { t: "Kyodo / PR Wire release", u: "https://kyodonewsprwire.jp/release/202404169534" },
            { t: "BreakingNews.ie - Microsoft invests $1.5bn in UAE-based AI firm G42", u: "https://breakingnews.ie/business/microsoft-invests-1-2bn-in-uae-based-ai-firm-g42-1614166.html" },
          ],
        },
        {
          topic: "Regulation",
          date: "2024-07",
          text: "In July 2024 the UAE issued its Charter for the Development and Use of Artificial Intelligence, which sets out 12 principles including safety, human oversight, transparency, data privacy and avoiding algorithmic bias.",
          level: "corroborated",
          sources: [
            { t: "UAE Government portal - The UAE Charter for the Development and Use of AI", u: "https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/policies/Ai/The-UAE-Charter-for-the-Development-and-Use-of-Artificial-Intelligence" },
            { t: "Pinsent Masons Out-Law - UAE launches AI charter", u: "https://www.pinsentmasons.com/out-law/news/uae-launches-ai-charter-with-focus-on-human-wellbeing" },
            { t: "Derasat - A new charter for artificial intelligence in the United Arab Emirates", u: "https://www.derasat.org.bh/?p=143631" },
          ],
        },
        {
          topic: "Public sector",
          date: "2025-04-14",
          text: "On 14 April 2025 the Cabinet approved a Regulatory Intelligence Office to run an AI system that maps federal and local laws against court rulings and services and proposes updates. Officials project it could make lawmaking up to 70% faster.",
          level: "verified",
          sources: [
            { t: "UAE Cabinet - first integrated regulatory intelligence ecosystem", u: "https://uaecabinet.ae/en/news/uae-cabinet-chaired-by-mohammed-bin-rashid-approves-launch-of-first-integrated-regulatory-intelligence-ecosystem-in-uae-government" },
            { t: "Fast Company Middle East - UAE to use AI to write and review laws", u: "https://fastcompanyme.com/?p=38052" },
            { t: "Mondaq / BSA - Smart legislation with human oversight", u: "https://webiis10.mondaq.com/new-technology/1695520/smart-legislation-with-human-oversight-a-legal-practitioners-reading-of-the-uaes-regulatory-intelligence-initiative" },
          ],
          note: "The 70% figure is an official projection, not a measured result, and of the sources only Fast Company Middle East reports it. No law drafted with the system has been publicly identified.",
        },
        {
          topic: "Skills & education",
          date: "2025-05-04",
          text: "AI became an official subject in UAE public schools from kindergarten to Grade 12, starting in the 2025–26 academic year. It was built with MBZUAI, Presight and AI71 and folded into the existing computing course.",
          level: "verified",
          sources: [
            { t: "Nukta - UAE integrates AI into the national public-school curriculum", u: "https://nukta.com/uae-ai-school" },
            { t: "Gulf News - UAE schools to introduce AI curriculum in new academic year", u: "https://gulfnews.com/uae/education/uae-schools-to-introduce-ai-curriculum-in-new-academic-year-1.500242831" },
            { t: "Education Middle East - UAE public schools to teach AI from KG to Grade 12", u: "https://educationmiddleeast.com/?p=10504" },
          ],
          note: "Student-reach estimates conflict, from about 300,000 to nearly 1 million.",
        },
        {
          topic: "Compute & infrastructure",
          date: "2025-05",
          text: "Stargate UAE was announced in May 2025: a 1-gigawatt AI cluster inside a planned 5-gigawatt UAE–US AI Campus in Abu Dhabi. G42 is building it, OpenAI and Oracle will operate it, and NVIDIA, Cisco and SoftBank are partners. The first 200 MW is due in 2026.",
          level: "verified",
          sources: [
            { t: "Capacity - OpenAI to open first international Stargate data centre in UAE", u: "https://capacityglobal.com/news/openai-to-open-first-international-stargate-data-centre-in-uae/" },
            { t: "Gulf News - First phase of 200MW to complete by 2026", u: "https://gulfnews.com/business/markets/stargate-uae-first-phase-of-200mw-to-complete-by-2026-1.500310364" },
            { t: "The Tech Capital - First 200MW will come online in 2026, says G42 chief", u: "https://thetechcapital.com/first-200mw-of-stargate-uae-will-come-online-in-2026-says-g42-chief/" },
            { t: "Gulf Construction Online - G42's AI infrastructure cluster set for 2026 handover", u: "https://gulfconstructiononline.com/ArticleTA/329356/g42-s-prime-ai-infrastructure-cluster-set-for-2026-handover" },
          ],
          note: "As of this research date, no authoritative go-live announcement for the first 200 MW was found (the latest stated target was Q3 2026). Chip-count estimates in the press conflict widely.",
        },
        {
          topic: "Institutions",
          date: "2026-06-14",
          text: "On 14 June 2026 Sheikh Mohammed bin Rashid approved a federal Artificial Intelligence and Data Authority, chaired by Omar Al Olama. It merges the AI Office, the UAE Data Office and the TDRA's digital-government arm into one body that reports to the Cabinet.",
          level: "verified",
          sources: [
            { t: "Dubai Media Office - Mohammed bin Rashid approves establishing AI and Data Authority (14 Jun 2026)", u: "https://mediaoffice.ae/en/news/2026/june/14-06/mohammed-bin-rashid-approves-establishing-artificial-intelligence-and-data-authority" },
            { t: "Gulf Today - Sheikh Mohammed approves establishing AI and Data Authority", u: "https://www.gulftoday.ae/news/2026/06/14/sheikh-mohammed-approves-establishing-artificial-intelligence-and-data-authority" },
            { t: "Morgan Lewis - UAE establishes federal authority for AI and data", u: "https://www.morganlewis.com/pubs/2026/06/uae-establishes-federal-authority-for-artificial-intelligence-and-data" },
            { t: "Global Government Forum", u: "https://www.globalgovernmentforum.com/uae-creates-dedicated-artificial-intelligence-and-data-authority-to-build-government-of-the-future/" },
          ],
          note: "Khaleej Times dates it 15 June. Official releases say 14 June. The name appears as both 'AI and Data Authority' and 'Federal Authority for AI and Data'.",
        },
      ],
      news: [
        {
          date: "2026-10-16", title: "Abu Dhabi bets $3.5 billion on an 'AI-native' government",
          summary: "Abu Dhabi is investing 13 billion dirhams ($3.5 billion) to transform its digital government services by 2027, aiming to become the first 'AI-native' government. On 16 October it set up TAMM Global, a company to sell its AI-powered government services platform abroad.",
          level: "single",
          note: "Each part rests on one source: the investment on Fortune, TAMM Global on The National.",
          sources: [
            { t: "Fortune - Abu Dhabi invests $3.5 billion in AI-powered government (14 Oct 2026)", u: "https://fortune.com/2026/10/14/no-forms-no-fuss-abu-dhabi-wants-ai-to-eliminate-government-paperwork/" },
            { t: "The National - Abu Dhabi launches TAMM Global to export AI-powered government services (16 Oct 2026)", u: "https://www.thenationalnews.com/news/uae/2026/10/16/abu-dhabi-launches-tamm-global-to-export-ai-powered-government-services-worldwide/" },
          ],
        },
        {
          date: "2026-09-22",
          title: "UAE extends world lead in AI use to 73.3%",
          summary: "Microsoft's Q2 2026 figures put working-age generative-AI use in the UAE at 73.3%, up from 70.1% in Q1. The global figure is 18.8%.",
          level: "corroborated",
          sources: [
            { t: "Microsoft Source EMEA", u: "https://news.microsoft.com/source/emea/2026/09/new-microsoft-data-ai-adoption-continues-to-rise-switzerland-remains-well-above-the-global-average/" },
            { t: "The National - UAE pulls ahead in global ranking on AI adoption", u: "https://www.thenationalnews.com/news/uae/2026/09/25/uae-pulls-ahead-in-global-ranking-on-ai-adoption/" },
          ],
        },
        {
          date: "2026-06-14",
          title: "New federal AI & Data Authority created, chaired by Omar Al Olama",
          summary: "AI strategy, the national data office and digital government are combined under one Cabinet-level body built around 'agentic AI' government.",
          level: "verified",
          sources: [
            { t: "Dubai Media Office - Mohammed bin Rashid approves establishing AI and Data Authority (14 Jun 2026)", u: "https://mediaoffice.ae/en/news/2026/june/14-06/mohammed-bin-rashid-approves-establishing-artificial-intelligence-and-data-authority" },
            { t: "Morgan Lewis", u: "https://www.morganlewis.com/pubs/2026/06/uae-establishes-federal-authority-for-artificial-intelligence-and-data" },
            { t: "Khaleej Times", u: "https://www.khaleejtimes.com/uae/uae-authority-ai-data-digital-government" },
          ],
        },
        {
          date: "2026-05-08",
          title: "UAE becomes first country above 70% AI usage",
          summary: "Microsoft's Q1 2026 data put the UAE at 70.1%, with Singapore second at 63.4%.",
          note: "The UAE figure appears in all three sources. Singapore's 63.4% appears in Telecom Review's coverage.",
          level: "corroborated",
          sources: [
            { t: "MENA Startup Digest - UAE claims top spot for AI adoption at 70%", u: "https://menastartupdigest.com/?p=38700" },
            { t: "Telecom Review - UAE leads global AI uptake as usage crosses 70% milestone", u: "https://www.telecomreview.com/articles/reports-and-coverage/29184-uae-leads-global-ai-uptake-as-usage-crosses-70-milestone/" },
          ],
        },
        {
          date: "2025-10",
          title: "Stargate UAE: first 200 MW targeted for 2026",
          summary: "In October 2025 G42 said its first 200 MW should come online in 2026. Khazna, its data-centre arm, later gave Q3 2026 as the target.",
          level: "verified",
          sources: [
            { t: "Gulf Construction Online - G42's AI infrastructure cluster set for 2026 handover", u: "https://gulfconstructiononline.com/ArticleTA/329356/g42-s-prime-ai-infrastructure-cluster-set-for-2026-handover" },
            { t: "The National", u: "https://www.thenationalnews.com/business/2025/10/16/g42-unit-khazna-targets-full-build-out-of-1gw-stargate-uae-project-in-three-years/" },
            { t: "Gulf News", u: "https://gulfnews.com/business/markets/stargate-uae-first-phase-of-200mw-to-complete-by-2026-1.500310364" },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ RWANDA
    {
      id: "rw",
      group: "Africa", geo: [30.06, -1.94], isoN: "646",
      glance: { firstStrategy: "2023", latestStrategy: "2023", newestBody: "National AI Agency", newestBodyDate: "2026-06-08" },
      name: "Rwanda",
      flag: "🇷🇼",
      region: "East Africa",
      stance: "Policy-first African hub: early national policy, convening power, donor & lab partnerships",
      summary:
        "Rwanda was among the first African countries with a formal national AI policy (2023). It has made itself a convening hub for the continent: it hosted the 2025 Global AI Summit on Africa and the Africa Declaration on AI. Partnerships with the Gates Foundation and Anthropic fund much of the work. Readiness scores are moderate and AI use remains low (about 6% of working-age people), so 2026's new national AI agency is mostly about execution.",
      stats: {
        population: { v: 14569341, year: 2025 },
        gdpPerCapita: { v: 1124, year: 2025 },
        internet: { v: 31.7, year: 2024 },
      },
      oxford: { rank: 74, scores: [73.0, 33.92, 78.75, 53.62, 29.36, 55.62] },
      msAdoption: { h1_2025: 6.0, h2_2025: 6.3, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy & readiness",
          date: "2023-04-20",
          text: "Rwanda's Cabinet approved the National AI Policy on 20 April 2023. The Ministry of ICT and Innovation (MINICT) developed it with RURA, GIZ FAIR Forward, C4IR Rwanda and The Future Society.",
          level: "single",
          sources: [
            { t: "KT Press - Cabinet approves new AI agency (recaps the April 2023 policy)", u: "https://www.ktpress.rw/2026/06/rwandas-ai-ambition-takes-shape-as-cabinet-approves-new-agency/" },
          ],
        },
        {
          topic: "Strategy & readiness",
          date: "2023",
          text: "The policy's priorities include AI skills and literacy, compute infrastructure, a national data strategy, trustworthy public-sector adoption, private-sector growth, and research. ICT Minister Paula Ingabire has said 70% of the policy focuses on skills.",
          level: "single",
          sources: [
            { t: "KT Press (Ingabire: 70% on skills)", u: "https://www.ktpress.rw/2026/06/rwandas-ai-ambition-takes-shape-as-cabinet-approves-new-agency/" },
          ],
        },
        {
          topic: "International",
          date: "2025-04-04",
          text: "Kigali hosted the Global AI Summit on Africa on 3–4 April 2025. Delegates signed the Africa Declaration on AI, which proposes an Africa AI Council and a $60 billion Africa AI Fund drawing on public, private and philanthropic capital.",
          level: "verified",
          sources: [
            { t: "AllAfrica - Kigali AI Summit Backs $60bn Fund", u: "https://allafrica.com/stories/202504140440.html" },
            { t: "IT Edge News - Kigali AI Summit backs $60bn fund", u: "https://www.itedgenews.africa/rwanda-kigali-ai-summit-backs-60bn-fund/" },
            { t: "ITWeb Africa - Africa plans to establish a $60 billion AI fund", u: "https://itweb.africa/article/africa-plans-to-establish-a-60-billion-ai-fund/mQwkoq6Y3ezM3r9A" },
            { t: "NextBillion - Historic declaration on AI launched at Global AI Summit on Africa", u: "https://nextbillion.net/news/historic-declaration-on-artificial-intelligence-launched-at-global-ai-summit-on-africa-to-drive-continental-governance-and-innovation" },
            { t: "Oxford Insights 2025 report - notes Rwanda hosted the summit", u: "https://oxfordinsights.com/wp-content/uploads/2026/01/2025-Government-AI-Readiness-Index-Report_01_26.pdf" },
          ],
          note: "The fund is a proposal, not committed capital. Signatory counts vary by source (52 countries, 54 signatories, or all 55 AU states).",
        },
        {
          topic: "Economy",
          date: "2025-04-04",
          text: "The Gates Foundation signed a three-year, $7.5 million MOU with Rwanda to set up the Rwanda AI Scaling Hub, hosted by C4IR Rwanda. It starts with health, agriculture and education.",
          level: "verified",
          sources: [
            { t: "PC Tech Magazine - Rwanda, Gates Foundation sign MoU to establish an AI Scaling Hub", u: "https://pctechmag.com/2025/04/rwanda-and-gates-foundation-partner-to-launch-ai-scaling-hub/" },
            { t: "AfroTech - Gates Foundation donation to build Rwanda AI Scaling Hub", u: "https://afrotech.com/gates-foundation-donation-build-rwanda-ai-scaling-hub" },
            { t: "Osiris (FR) - Accord de 7,5 millions entre le Rwanda et la Fondation Gates", u: "https://osiris.sn/accord-de-7-5-millions-entre-le-rwanda-et-la-fondation-gates-pour-un-pole-ia.html" },
          ],
          note: "One outlet reports a later increase to $17.5M. No Gates Foundation or ministry statement confirming it was found.",
        },
        {
          topic: "Economy",
          date: "2026-02-17",
          text: "Rwanda and Anthropic signed a three-year MOU on 17 February 2026 covering health (including cervical-cancer elimination and malaria), education (2,000 Claude Pro licences for educators, from a fall 2025 agreement) and public-sector developer access.",
          level: "verified",
          sources: [
            { t: "Anthropic - Anthropic and the Government of Rwanda MOU", u: "https://www.anthropic.com/news/anthropic-rwanda-mou" },
            { t: "MINICT - Government of Rwanda and Anthropic strengthen partnership", u: "https://www.minict.gov.rw/news-detail/government-of-rwanda-and-anthropic-strengthen-partnership-to-advance-ai-for-health-education-and-the-public-sector" },
            { t: "Citizen Digital - Rwanda signs deal with Anthropic", u: "https://citizen.digital/article/rwanda-signs-deal-with-anthropic-to-incorporate-ai-in-public-sector-systems-n377731" },
          ],
          note: "Anthropic (the maker of Claude, the model that compiled this dashboard) is a party to this agreement. The facts are taken from both parties' statements.",
        },
        {
          topic: "Institutions",
          date: "2026-06-08",
          text: "On 8 June 2026 a Cabinet meeting chaired by President Paul Kagame approved a National Artificial Intelligence Agency. Its mandate is to speed up AI development, adoption, investment and governance, and it takes over from the AI office inside MINICT.",
          level: "verified",
          sources: [
            { t: "KT Press - Rwanda's AI ambition takes shape as Cabinet approves new agency", u: "https://www.ktpress.rw/2026/06/rwandas-ai-ambition-takes-shape-as-cabinet-approves-new-agency/" },
            { t: "iAfrica - Rwanda approves National AI Agency", u: "https://iafrica.com/rwanda-approves-national-ai-agency-becoming-first-african-country-with-dedicated-ai-institution/" },
            { t: "Tech Review Africa - Rwanda moves to establish National AI Agency", u: "https://techreviewafrica.com/news/5859/rwanda-moves-to-establish-national-artificial-intelligence-agency-in-major-digital-economy-push" },
          ],
          note: "Its leadership, budget and legal establishment details had not been published in the sources reviewed.",
        },
      ],
      news: [
        {
          date: "2026-10-22", title: "National AI Agency being brought into operation",
          summary: "Minister of State for ICT and Innovation Yves Iradukunda said the new government-owned AI agency is being brought into operation through 2026 to coordinate work previously spread across several institutions, with a technical unit, the 'AI Factory', to build and test applications with private-sector partners.",
          level: "single",
          sources: [
            { t: "The Korea Herald - Rwanda can be Korea's AI entry point to Africa: minister (22 Oct 2026)", u: "https://www.koreaherald.com/article/10911470" },
          ],
        },
        {
          date: "2026-07",
          title: "Rwanda co-chairs Africa AI Council; convenes AI Partners Roundtable",
          summary: "ICT Minister Paula Ingabire co-chaired the second Africa AI Council meeting under Smart Africa, which validated a two-year strategic plan. MINICT then convened partners around the new AI agency.",
          level: "single",
          sources: [
            { t: "Tech Review Africa - Ingabire co-chairs Africa AI Council meeting", u: "https://techreviewafrica.com/news/6221/rwanda-ict-minister-paula-ingabire-co-chairs-africa-ai-council-meeting" },
            { t: "Tech Review Africa - AI Partners Roundtable", u: "https://techreviewafrica.com/news/6425/rwanda-convenes-ai-partners-roundtable-to-accelerate-national-ai-adoption" },
          ],
          note: "Both items come from a single outlet.",
        },
        {
          date: "2026-06-08",
          title: "Cabinet approves a National AI Agency",
          summary: "AI work moves from an office inside the ICT ministry to a dedicated agency. Commentators say delivery will matter more than the structure.",
          level: "verified",
          sources: [
            { t: "KT Press", u: "https://www.ktpress.rw/2026/06/rwandas-ai-ambition-takes-shape-as-cabinet-approves-new-agency/" },
            { t: "iAfrica", u: "https://iafrica.com/rwanda-approves-national-ai-agency-becoming-first-african-country-with-dedicated-ai-institution/" },
            { t: "Tech Review Africa - Rwanda moves to establish National AI Agency", u: "https://techreviewafrica.com/news/5859/rwanda-moves-to-establish-national-artificial-intelligence-agency-in-major-digital-economy-push" },
            { t: "AllAfrica - From policy to people: Rwanda's real AI test", u: "https://allafrica.com/stories/202606260209.html" },
          ],
        },
        {
          date: "2026-02-17",
          title: "Three-year MOU with Anthropic for health, education and government",
          summary: "This was Anthropic's first multi-sector government MOU in Africa. It builds on the November 2025 ALX education partnership.",
          level: "verified",
          sources: [
            { t: "Anthropic", u: "https://www.anthropic.com/news/anthropic-rwanda-mou" },
            { t: "MINICT", u: "https://www.minict.gov.rw/news-detail/government-of-rwanda-and-anthropic-strengthen-partnership-to-advance-ai-for-health-education-and-the-public-sector" },
            { t: "Citizen Digital", u: "https://citizen.digital/article/rwanda-signs-deal-with-anthropic-to-incorporate-ai-in-public-sector-systems-n377731" },
          ],
        },
        {
          date: "2025-04-04",
          title: "Kigali summit produces Africa Declaration on AI",
          summary: "African leaders backed a proposed $60B Africa AI Fund and an Africa AI Council. The Gates Foundation committed $7.5M to a Rwanda AI Scaling Hub.",
          level: "verified",
          sources: [
            { t: "AllAfrica", u: "https://allafrica.com/stories/202504140440.html" },
            { t: "ITWeb Africa", u: "https://itweb.africa/article/africa-plans-to-establish-a-60-billion-ai-fund/mQwkoq6Y3ezM3r9A" },
            { t: "PC Tech Magazine - Rwanda, Gates Foundation sign MoU to establish an AI Scaling Hub", u: "https://pctechmag.com/2025/04/rwanda-and-gates-foundation-partner-to-launch-ai-scaling-hub/" },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ URUGUAY
    {
      id: "uy",
      group: "Americas", geo: [-56.16, -34.9], isoN: "858",
      glance: { firstStrategy: "2019", latestStrategy: "2024 (Strategy 2024–2030)", newestBody: "Instituto Vidart (National AI Centre)", newestBodyDate: "2026-09-07" },
      name: "Uruguay",
      flag: "🇺🇾",
      region: "South America",
      stance: "Governance-first, rights-based strategy anchored in UNESCO/OECD principles; building national research capacity",
      summary:
        "Uruguay has the region's strongest digital-government record and was an early mover on public-sector AI, with an AGESIC strategy from 2019. Its 2024–2030 National AI Strategy rests on UNESCO and OECD principles. Through 2026 it moved from policy to capacity: an AI for Good Lab with Microsoft and a new national AI research centre funded by an IDB loan. It ranks third in Latin America's AI index.",
      stats: {
        population: { v: 3384688, year: 2025 },
        gdpPerCapita: { v: 25216, year: 2025 },
        internet: { v: 92.0, year: 2024 },
      },
      oxford: { rank: 55, scores: [61.5, 56.52, 84.5, 83.22, 31.19, 52.35] },
      msAdoption: { h1_2025: 20.9, h2_2025: 22.5, q1_2026: null, q2_2026: null, rankLatest: null },
      facts: [
        {
          topic: "Strategy & readiness",
          date: "2019",
          text: "AGESIC, Uruguay's e-government agency, developed an AI Strategy for Digital Government in 2019. It ran public consultations on nine general principles (April 2019) and on the strategy itself later that year.",
          level: "single",
          sources: [
            { t: "AGESIC - Consulta pública: IA para el Gobierno Digital (2 Apr 2019)", u: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/noticias/consulta-publica-inteligencia-artificial-para-gobierno-digital-0" },
            { t: "AGESIC - Estrategia IA (PDF, Spanish version)", u: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/sites/agencia-gobierno-electronico-sociedad-informacion-conocimiento/files/documentos/publicaciones/Estrategia%20IA%20-%20versi%C3%B3n%20espa%C3%B1ol.pdf" },
            { t: "AGESIC - Estrategia de IA para el Gobierno Digital", u: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-inteligencia-artificial-para-gobierno-digital/estrategia-0" },
          ],
          note: "All three are AGESIC's own documents. No formal adoption date was found.",
        },
        {
          topic: "Strategy & readiness",
          date: "2024-11-21",
          text: "The National AI Strategy 2024–2030 was approved on 21 November 2024 by the Strategic Committee for the Public Sector on AI and Data, under Article 74 of Law No. 20.212. It has three axes (governance, capabilities, sustainable development), and more than 300 people from over 40 state bodies helped shape it.",
          level: "verified",
          sources: [
            { t: "AGESIC (gub.uy) - Estrategia Nacional de IA 2024–2030", u: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-nacional-inteligencia-artificial-2024-2030" },
            { t: "ECIJA - Uruguay aprueba la Estrategia Nacional de IA 2024-2030", u: "https://ecija.com/sala-de-prensa/uruguay-aprueba-la-estrategia-nacional-de-inteligencia-artificial-2024-2030" },
            { t: "DPL News - Uruguay aprueba Estrategia Nacional de IA 2024-2030", u: "https://dplnews.com/?p=257341" },
          ],
          note: "Its principles build on UNESCO's Recommendation on the Ethics of AI and the OECD AI Recommendation. An opinion column notes the strategy has no dedicated budget line.",
        },
        {
          topic: "Strategy & readiness",
          date: "2026-10-20",
          text: "In the 2026 Latin American AI Index (ILIA), produced by ECLAC/CEPAL and Chile's CENIA and launched on 20 October 2026, Uruguay ranked 3rd of 20 countries with 67.0 points, behind Chile (71.4) and Brazil (68.4). That keeps it in the 'pioneer' tier, which requires a score above 60.",
          level: "verified",
          sources: [
            { t: "CENIA - ILIA 2026: 4th edition", u: "https://cenia.cl/2026/10/20/ilia-2026-4ta-edicion-revela-que-america-latina-y-el-caribe-se-juegan-su-futuro-en-ia-en-la-colaboracion-regional-para-datos-talento-y-computo/" },
            { t: "la diaria - Uruguay integra el grupo de países pioneros en IA (Oct 2026)", u: "https://ladiaria.com.uy/futuro/articulo/2026/10/uruguay-integra-el-grupo-de-paises-pioneros-en-ia-y-lidera-la-adopcion-empresarial-en-la-region-segun-estudio/" },
            { t: "TeleSemana - ILIA 2026 (20 Oct 2026)", u: "https://www.telesemana.com/blog/2026/10/20/ilia-2026-con-avances-y-oportunidades-america-latina-exhibe-brechas-de-soberania-tecnologica-y-de-infraestructura-en-la-carrera-global-de-la-ia/" },
          ],
        },
        {
          topic: "Economy",
          date: "2026-03-11",
          text: "On 11 March 2026 the government, LATU and Microsoft signed an agreement for an 'AI for Good Lab', billed as South America's first. It runs an initial three-year phase with about US$400,000 in public money and builds AI products for public institutions.",
          level: "verified",
          sources: [
            { t: "MIEM (gub.uy) - Government and Microsoft launch AI for Good lab", u: "https://www.gub.uy/ministerio-industria-energia-mineria/comunicacion/noticias/gobierno-microsoft-lanzan-laboratorio-ia-para-bien" },
            { t: "El Observador (12 Mar 2026)", u: "https://www.elobservador.com.uy/ciencia-y-tecnologia/uruguay-crea-microsoft-un-laboratorio-ia-aplicar-tecnologia-salud-ambiente-y-gestion-publica-n6037166" },
            { t: "Montevideo Portal - Uruguay, LATU and Microsoft launch regional AI for Good lab", u: "https://www.montevideo.com.uy/Noticias/Uruguay-LATU-y-Microsoft-lanzaron-el-primer-laboratorio-regional-de-IA-para-el-bien--uc955637" },
          ],
        },
        {
          topic: "Research & models",
          date: "2026-09-07",
          text: "Uruguay launched its National AI Centre, the Instituto Vidart, on 7 September 2026 at LATU's innovation park. A US$10 million IDB loan funds it for 4.5 years. Executive director Diego Garagorry and scientific director Matías Di Martino lead it, with health, agriculture and education as first priorities.",
          level: "verified",
          sources: [
            { t: "la diaria - Uruguay launches National AI Centre", u: "https://ladiaria.com.uy/futuro/articulo/2026/9/uruguay-lanza-centro-nacional-de-inteligencia-artificial-que-desarrollara-soluciones-en-salud-agro-y-educacion/" },
            { t: "Presidencia (gub.uy) - AI in Uruguay: Vidart centre at LATU", u: "https://www.gub.uy/presidencia/comunicacion/noticias/inteligencia-artificial-uruguay-centro-vidart-latu" },
            { t: "Uruguay Innova (gub.uy) - Instituto Vidart launched", u: "https://www.gub.uy/uruguay-innova/noticias/se-lanzo-el-instituto-vidart-el-centro-nacional-de-inteligencia-artificial" },
            { t: "The Rio Times - Uruguay AI centre Instituto Vidart", u: "https://www.riotimesonline.com/uruguay-ai-centre-instituto-vidart-2026/" },
          ],
          note: "One government note says 'Tuesday the 7th', but 7 Sep 2026 was a Monday, as la diaria reports.",
        },
      ],
      news: [
        {
          date: "2026-10-20", title: "Uruguay third in the 2026 Latin American AI Index",
          summary: "In the fourth Latin American AI Index (ILIA), published by Chile's CENIA and ECLAC on 20 October, Uruguay scored 67.0, behind Chile (71.4) and Brazil (68.4). It stays in the 'pioneer' group of countries scoring above 60.",
          level: "verified",
          sources: [
            { t: "CENIA - ILIA 2026: 4th edition", u: "https://cenia.cl/2026/10/20/ilia-2026-4ta-edicion-revela-que-america-latina-y-el-caribe-se-juegan-su-futuro-en-ia-en-la-colaboracion-regional-para-datos-talento-y-computo/" },
            { t: "la diaria - Uruguay integra el grupo de países pioneros en IA", u: "https://ladiaria.com.uy/futuro/articulo/2026/10/uruguay-integra-el-grupo-de-paises-pioneros-en-ia-y-lidera-la-adopcion-empresarial-en-la-region-segun-estudio/" },
            { t: "TeleSemana - ILIA 2026: brechas de soberanía tecnológica e infraestructura", u: "https://www.telesemana.com/blog/2026/10/20/ilia-2026-con-avances-y-oportunidades-america-latina-exhibe-brechas-de-soberania-tecnologica-y-de-infraestructura-en-la-carrera-global-de-la-ia/" },
          ],
        },
        {
          date: "2026-10-05",
          title: "AI for Good Lab delivers 8 government AI projects in 6 months",
          summary: "Three projects are complete and five finish in October, covering pest detection, document processing and public services. The target is 16 projects a year for three years.",
          level: "single",
          sources: [
            { t: "la diaria (5 Oct 2026)", u: "https://ladiaria.com.uy/futuro/articulo/2026/10/gobierno-uruguayo-desarrolla-ocho-proyectos-de-inteligencia-artificial-para-mejorar-procesos-del-estado/" },
          ],
        },
        {
          date: "2026-09-07",
          title: "National AI research centre 'Instituto Vidart' opens",
          summary: "The centre is funded by an IDB loan. Research lines will be led by academics who keep their university ties.",
          level: "verified",
          sources: [
            { t: "la diaria", u: "https://ladiaria.com.uy/futuro/articulo/2026/9/uruguay-lanza-centro-nacional-de-inteligencia-artificial-que-desarrollara-soluciones-en-salud-agro-y-educacion/" },
            { t: "Uruguay Innova", u: "https://www.gub.uy/uruguay-innova/noticias/se-lanzo-el-instituto-vidart-el-centro-nacional-de-inteligencia-artificial" },
            { t: "The Rio Times", u: "https://www.riotimesonline.com/uruguay-ai-centre-instituto-vidart-2026/" },
          ],
        },
        {
          date: "2026-06-14",
          title: "Environment ministry to add AI to environmental controls",
          summary: "Minister Edgardo Ortuño announced AI-assisted environmental monitoring alongside a push for a new environmental-crimes law.",
          level: "single",
          sources: [
            { t: "MercoPress (14 Jun 2026)", u: "https://es.mercopress.com/2026/06/14/uruguay-sumara-ia-a-los-controles-ambientales-y-busca-una-nueva-ley-de-delitos-ambientales" },
          ],
        },
        {
          date: "2026-03-11",
          title: "Uruguay and Microsoft sign 'AI for Good Lab' deal",
          summary: "The lab is backed by Uruguay Innova, ANDE, ANII, AGESIC and Antel, and builds AI for the public sector.",
          level: "verified",
          sources: [
            { t: "MIEM", u: "https://www.gub.uy/ministerio-industria-energia-mineria/comunicacion/noticias/gobierno-microsoft-lanzan-laboratorio-ia-para-bien" },
            { t: "El Observador", u: "https://www.elobservador.com.uy/ciencia-y-tecnologia/uruguay-crea-microsoft-un-laboratorio-ia-aplicar-tecnologia-salud-ambiente-y-gestion-publica-n6037166" },
            { t: "Montevideo Portal", u: "https://www.montevideo.com.uy/Noticias/Uruguay-LATU-y-Microsoft-lanzaron-el-primer-laboratorio-regional-de-IA-para-el-bien--uc955637" },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MALTA
    {
      id: "mt",
      group: "Europe", geo: [14.51, 35.9], isoN: "470",
      glance: { firstStrategy: "2019", latestStrategy: "2025 (2025–2030 draft, consultation)", newestBody: "AI Governance Council", newestBodyDate: "2026-07-30" },
      name: "Malta",
      flag: "🇲🇹",
      region: "Southern Europe (EU)",
      stance: "Small-state 'AI launchpad': early strategy and certification, now mass AI literacy and EU AI Act enforcement",
      summary:
        "Malta was among the first EU states with an AI strategy (2019) and ran a voluntary AI certification scheme before the EU AI Act existed. Since 2025 it has designated its AI Act regulators and opened consultation on a realigned 2025–2030 strategy. It also made the most striking citizen-facing move of any country here: a national deal giving residents a free year of ChatGPT Plus once they complete an AI-literacy course.",
      stats: {
        population: { v: 579704, year: 2025 },
        gdpPerCapita: { v: 47907, year: 2025 },
        internet: { v: 93.9, year: 2024 },
      },
      oxford: { rank: 39, scores: [77.0, 52.25, 87.77, 66.58, 44.16, 65.19] },
      msAdoption: null,
      facts: [
        {
          topic: "Strategy & readiness",
          date: "2019-10",
          text: "In October 2019 Malta launched 'Malta – The Ultimate AI Launchpad: A Strategy and Vision for AI in Malta 2030'. It rests on three pillars (investment and start-ups, public-sector adoption, private-sector adoption) and three enablers.",
          level: "corroborated",
          sources: [
            { t: "Mondaq - Malta launches national AI strategy", u: "https://www.mondaq.com/technology/855144/malta-launches-national-artificial-intelligence-strategy" },
            { t: "OECD.AI - The Ultimate AI Launchpad", u: "https://oecd.ai/en/dashboards/policy-initiatives/the-ultimate-ai-launchpad-a-strategy-and-vision-for-artificial-intelligence-in-malta-2030-2591" },
          ],
          note: "Progress figures differ by method. The OECD reports 54.2% of initiatives implemented and 25% in progress, while the MDIA and the PM say about 80% were executed.",
        },
        {
          topic: "Regulation",
          date: "2019+",
          text: "Malta runs a voluntary AI certification programme (the AI ITA scheme), administered by the Malta Digital Innovation Authority (MDIA). It predates the EU AI Act.",
          level: "single",
          sources: [
            { t: "OECD.AI - Malta Digital Innovation Authority", u: "https://oecd.ai/en/dashboards/policy-initiatives/malta-digital-innovation-authority-7991" },
          ],
        },
        {
          topic: "Regulation",
          date: "2025",
          text: "Under Legal Notice 226 of 2025, the MDIA is Malta's lead market-surveillance authority, single point of contact and regulatory-sandbox authority for the EU AI Act. Legal Notice 227 of 2025 makes the Information and Data Protection Commissioner (IDPC) a market-surveillance authority for certain high-risk uses, such as law enforcement.",
          level: "corroborated",
          sources: [
            { t: "Legal 500 / Ganado - Malta's AI Act framework: new roles of MDIA and IDPC", u: "https://www.legal500.com/intelligence/malta/technology/malta's-ai-act-framework-the-new-roles-of-the-mdia-and-idpc" },
            { t: "Mamo TCV - Malta's AI Act authority designations", u: "https://www.mamotcv.com/insights/ai-act-authority-designations/" },
          ],
          note: "Sources describe the exact scope of the IDPC's remit differently. The legal notices are authoritative.",
        },
        {
          topic: "Strategy & readiness",
          date: "2025-11",
          text: "In November 2025 Prime Minister Robert Abela opened public consultation on a realigned National AI Strategy 2025–2030 at an open Cabinet meeting during Techxpo. The draft proposes 83 measures under three pillars, and consultation ran to February 2026.",
          level: "verified",
          sources: [
            { t: "BusinessNow - Malta launches updated national AI strategy at Techxpo 2025", u: "https://businessnow.mt/malta-launches-updated-national-ai-strategy-during-cabinet-meeting-at-techxpo-2025" },
            { t: "BusinessNow - Malta launches updated AI strategy at Techxpo 2025", u: "https://businessnow.mt/malta-launches-updated-national-ai-strategy-during-cabinet-meeting-at-techxpo-2025" },
            { t: "Ganado - Legal 500 Country Guide 2026: AI, Malta (PDF)", u: "https://ganado.com/wp-content/uploads/2026/08/Legal-500-Country-Comparative-Guides-2026-Artificial-Intelligence-Malta.pdf" },
            { t: "Malta Chamber - feedback on Updated National AI Strategy (12 Feb 2026)", u: "https://maltachamber.org.mt/wp-content/uploads/2026/02/20260212-Update-of-National-AI-Strategy-TMC-feedback.pdf" },
          ],
        },
        {
          topic: "Economy",
          date: "2025-10",
          text: "Malta's 2026 Budget includes a €100 million AI and digital fund.",
          level: "corroborated",
          sources: [
            { t: "BusinessNow - Malta launches updated national AI strategy at Techxpo 2025", u: "https://businessnow.mt/malta-launches-updated-national-ai-strategy-during-cabinet-meeting-at-techxpo-2025" },
            { t: "Newsbook ('€100 million budget pledge for digitalisation')", u: "https://newsbook.com.mt/en/openai-signs-deal-with-malta-to-give-every-citizen-free-chatgpt-plus-for-one-year/" },
          ],
          note: "Sources describe it as an 'AI fund' or as a digitalisation pledge. The Malta Chamber criticised the limited transparency on allocations.",
        },
        {
          topic: "International",
          date: "2026-02-13",
          text: "On 13 February 2026 Economy Minister Silvio Schembri announced that Malta's application to join the Global Partnership on AI (GPAI) had been formally accepted.",
          level: "corroborated",
          sources: [
            { t: "MaltaInvest - Malta joins Global Partnership on AI", u: "https://maltainvest.mt/malta-joins-global-partnership-on-artificial-intelligence/" },
            { t: "OECD.AI - About GPAI (lists Malta among members)", u: "https://oecd.ai/en/about/about-gpai" },
          ],
        },
        {
          topic: "Skills & education",
          date: "2026-05-16",
          text: "On 16 May 2026 Malta and OpenAI announced a national deal: citizens and residents aged 14 and over who complete the roughly two-hour 'AI for Everyone' course get a free year of ChatGPT Plus, or Microsoft 365 Personal with Copilot. The MDIA built the course with the University of Malta.",
          level: "verified",
          sources: [
            { t: "OpenAI - Malta ChatGPT Plus partnership", u: "https://openai.com/index/malta-chatgpt-plus-partnership" },
            { t: "Newsbook - OpenAI signs deal with Malta (16 May 2026)", u: "https://newsbook.com.mt/en/openai-signs-deal-with-malta-to-give-every-citizen-free-chatgpt-plus-for-one-year/" },
            { t: "The Next Web - OpenAI Malta ChatGPT Plus for citizens", u: "https://thenextweb.com/news/openai-malta-chatgpt-plus-free-citizens" },
            { t: "TechRadar - OpenAI giving everyone in this country free ChatGPT Plus", u: "https://www.techradar.com/pro/openai-is-giving-everyone-in-this-country-free-access-to-chatgpt-plus-for-a-year" },
          ],
          note: "OpenAI says 'all Maltese citizens'. MDIA guidelines reportedly require a valid eID, with citizens abroad to follow. Long-term funding after year one has not been stated.",
        },
        {
          topic: "Institutions",
          date: "2026-07-30",
          text: "On 30 July 2026 the government set up an Artificial Intelligence Governance Council within the Office of the Prime Minister to coordinate AI across the public administration and support EU AI Act compliance. Chief AI Officer Jonathan Gerada chairs it.",
          level: "verified",
          sources: [
            { t: "BusinessNow - Government launches a new council in AI", u: "https://businessnow.mt/government-lunches-a-new-council-in-artificial-intelligence/" },
            { t: "Office of the Prime Minister - AI Governance Council mission statement", u: "https://opm.gov.mt/en/?p=13637" },
            { t: "GovInsider - Malta forms AI Governance Council", u: "https://govinsider.asia/intl-en/article/malta-forms-ai-governance-council-to-put-people-at-the-centre-of-ai-adoption" },
          ],
        },
      ],
      news: [
        {
          date: "2026-10-07",
          title: "Tax department to use AI to flag suspected evaders",
          summary: "Finance Minister Clyde Caruana said AI will compare declared income with turnover and big purchases, and letters will go to 'a couple of hundred' people in the coming weeks.",
          level: "single",
          sources: [
            { t: "Italpress / MNA (7 Oct 2026)", u: "https://www.italpress.com/malta-ai-to-be-used-to-trace-suspected-tax-evaders/" },
          ],
          note: "Single wire report (Italpress, carrying Malta's state news agency MNA). See the May 2025 item below for corroborated background.",
        },
        {
          date: "2025-05-05",
          title: "Finance minister credits AI tax system with €400M in extra revenue",
          summary: "Clyde Caruana attributed €400 million of a €650 million rise in income-tax collections to the AI-powered tax-compliance system, which flags gaps between declared income and wealth.",
          level: "corroborated",
          sources: [
            { t: "Italpress - Malta, AI-driven tax collection boosts government tax revenue", u: "https://www.italpress.com/?p=530167" },
            { t: "SharedServicesLink - AI helps Malta recover €400 million in fight against tax evasion", u: "https://sharedserviceslink.com/news/ai-helps-malta-recover-400-million-in-fight-against-tax-evasion" },
          ],
          note: "This is the minister's attribution, not an independent audit.",
        },
        {
          date: "2026-07-30",
          title: "AI Governance Council set up under the Chief AI Officer",
          summary: "The council is meant to cut fragmented and duplicate AI projects across the civil service, and was launched the same week EU AI Act transparency rules took effect.",
          level: "verified",
          sources: [
            { t: "BusinessNow - Government launches a new council in AI", u: "https://businessnow.mt/government-lunches-a-new-council-in-artificial-intelligence/" },
            { t: "Office of the Prime Minister - AI Governance Council mission statement", u: "https://opm.gov.mt/en/?p=13637" },
            { t: "GovInsider", u: "https://govinsider.asia/intl-en/article/malta-forms-ai-governance-council-to-put-people-at-the-centre-of-ai-adoption" },
          ],
        },
        {
          date: "2026-05-16",
          title: "Malta signs world-first national ChatGPT Plus deal with OpenAI",
          summary: "Residents who finish a short AI-literacy course get a year of ChatGPT Plus or Microsoft Copilot. OpenAI's George Osborne said 'Malta is leading Europe and the world'.",
          level: "verified",
          sources: [
            { t: "OpenAI", u: "https://openai.com/index/malta-chatgpt-plus-partnership" },
            { t: "Newsbook", u: "https://newsbook.com.mt/en/openai-signs-deal-with-malta-to-give-every-citizen-free-chatgpt-plus-for-one-year/" },
            { t: "TechRadar", u: "https://www.techradar.com/pro/openai-is-giving-everyone-in-this-country-free-access-to-chatgpt-plus-for-a-year" },
          ],
        },
        {
          date: "2026-02-13",
          title: "Malta accepted into the Global Partnership on AI",
          summary: "The government framed membership as part of its responsible-AI governance credentials.",
          level: "corroborated",
          sources: [
            { t: "MaltaInvest", u: "https://maltainvest.mt/malta-joins-global-partnership-on-artificial-intelligence/" },
            { t: "OECD.AI - About GPAI (members)", u: "https://oecd.ai/en/about/about-gpai" },
          ],
        },
      ],
    },
  ],
};

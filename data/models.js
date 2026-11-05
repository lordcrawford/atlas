// Atlas - the coded governance model.
// Four codes per nation, so that models can be compared, counted and mapped: approach, where its rules come from,
// where its compute comes from, and which outside power it is tied to. The codes are editorial readings of the
// sourced facts on each nation's page; every code lists what it rests on:
//   "text..."  the start of a fact on that nation's page
//   "@id"      an agreement on the Collaborations page
//   "#eu"      a membership explained in `refs`
// The codebook (`fields`) gives the rule for each value. See METHODOLOGY.md, "Coded governance model".
(function () {
  const A = (window.ATLAS = window.ATLAS || {});
  A.model = {
    fields: [
      { key: "posture", label: "Approach", q: "What leads its AI policy?", values: [
        ["regulate","Rules first","Binding AI rules lead: a law or bill of its own, or a national law and regulator set up to enforce an inherited one, carries more weight in its record than any strategy."],
        ["adopt","Adoption first","A national strategy, programme or investment to use and build AI leads. Rules are voluntary, inherited or absent."],
        ["align","Aligning","No adopted strategy or law of its own yet. Its AI policy so far is a treaty, a regional position or EU alignment, or work led by an outside body such as UNESCO, UNDP or the World Bank."],
        ["absent","No AI policy yet","None of the above is on record."],
      ] },
      { key: "route", label: "Rules", q: "Where do its AI rules come from?", values: [
        ["own","Own AI law or bill","A law of its own that sets rules for AI, either an AI act or AI rules inside a wider digital law: in force, before the legislature or being drafted."],
        ["eu","EU AI Act","Applies as an EU member, or is due to apply through the EEA."],
        ["regional","Regional body or treaty","No law of its own. It belongs to a regional body that has adopted an AI framework (African Union, CARICOM, Pacific Islands Forum, ASEAN, CIS) or has signed the Council of Europe AI convention."],
        ["none","None on record","No AI law, bill, regional framework or treaty is recorded here."],
      ] },
      { key: "compute", label: "Compute", q: "Where does its AI computing power come from?", values: [
        ["own","National","A state-owned or state-backed AI computing facility in the country, built or under construction."],
        ["shared","Shared","Hosts or has joined a shared supercomputer: a EuroHPC AI Factory or a consortium machine."],
        ["foreign","Foreign partner","Built, owned or paid for mainly by a foreign company, government or donor."],
        ["none","None on record","No compute facility or plan is recorded here. That is a gap in this site's facts as often as a gap in the country."],
      ] },
      { key: "bloc", label: "Bloc", q: "Which outside power is it tied to on AI?", values: [
        ["eu","Europe","EU or EEA member, signatory of the Council of Europe AI convention, or doing EU-led alignment work."],
        ["us","United States","A government-to-government AI agreement with the United States."],
        ["cn","China","A government AI agreement with China, or membership of a China-led AI body (WAICO or the SCO AI memorandum)."],
        ["multi","More than one","Ties to two or more of Europe, the United States and China."],
        ["none","None on record","No such tie is recorded here. Deals with other partners, such as Gulf states, are on the Collaborations page."],
      ] },
    ],
    refs: {
      eu: {"text":"EU member state: the EU AI Act applies directly."},
      eea: {"text":"EEA state: the EU AI Act applies once it is added to the EEA Agreement."},
      au: {"text":"African Union member: the AU Executive Council endorsed the Continental AI Strategy in July 2024.","source":{"t":"African Union - African Union committed to developing AI capabilities in Africa (28 Aug 2024)","u":"https://au.int/en/pressreleases/20240828/african-union-committed-developing-ai-capabilities-africa"}},
    },
    codes: {
      sg: { posture: ["adopt","NAIS 2.0 was launched on 4 D","On 20 May 2026, at the ATxSu"], route: ["regional","@asean-guide"], compute: ["none"], bloc: ["us","@sg-us"] }, // Singapore
      ee: { posture: ["adopt","Estonia's Cabinet adopted it","On 25 February 2025 Estonia ","Prime Minister Kristen Micha"], route: ["eu","#eu"], compute: ["shared","@lumi"], bloc: ["eu","#eu"] }, // Estonia
      ae: { posture: ["adopt","The UAE launched its AI stra","Stargate UAE was announced i"], route: ["none"], compute: ["own","Stargate UAE was announced i"], bloc: ["us","@ae-us"] }, // United Arab Emirates
      rw: { posture: ["adopt","Rwanda's Cabinet approved th","On 8 June 2026 a Cabinet mee"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Rwanda
      uy: { posture: ["adopt","The National AI Strategy 202","Uruguay launched its Nationa"], route: ["regional","@coe"], compute: ["none"], bloc: ["multi","@coe","@uy-us"] }, // Uruguay
      mt: { posture: ["adopt","In October 2019 Malta launch","In November 2025 Prime Minis","On 16 May 2026 Malta and Ope"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Malta
      dk: { posture: ["adopt","Denmark's 2024 Strategic App","Gefion, Denmark's AI superco"], route: ["eu","#eu"], compute: ["own","Gefion, Denmark's AI superco"], bloc: ["eu","#eu"] }, // Denmark
      fi: { posture: ["adopt","Finland's first AI strategy,","The LUMI AI Factory, the lar"], route: ["eu","#eu"], compute: ["shared","The LUMI AI Factory, the lar","@lumi"], bloc: ["eu","#eu"] }, // Finland
      no: { posture: ["adopt","Norway's National Strategy f","Norway's national digitalisa"], route: ["eu","#eea","Norway is implementing the E"], compute: ["shared","@lumi"], bloc: ["eu","#eea","@coe"] }, // Norway
      ie: { posture: ["regulate","The Regulation of Artificial","The AI Office of Ireland was"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Ireland
      lu: { posture: ["adopt","In May 2025 Luxembourg publi","The national AI Factory is b"], route: ["eu","#eu"], compute: ["shared","The national AI Factory is b"], bloc: ["eu","#eu"] }, // Luxembourg
      is: { posture: ["adopt","Iceland's AI policy came fro","Iceland partnered with OpenA"], route: ["eu","#eea"], compute: ["none"], bloc: ["eu","#eea","@coe"] }, // Iceland
      lt: { posture: ["regulate","The Seimas approved amendmen"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Lithuania
      si: { posture: ["adopt","On 5 March 2026 the governme","The Slovenian AI Factory (SL"], route: ["eu","#eu"], compute: ["shared","The Slovenian AI Factory (SL"], bloc: ["eu","#eu"] }, // Slovenia
      cy: { posture: ["adopt","The Council of Ministers app","In January 2025 the Council ","The taskforce's draft Nation"], route: ["eu","#eu"], compute: ["shared","@daedalus"], bloc: ["eu","#eu"] }, // Cyprus
      ch: { posture: ["regulate","On 12 February 2025 the Fede"], route: ["regional","@coe"], compute: ["own","EPFL, ETH Zurich and the Swi"], bloc: ["eu","@coe"] }, // Switzerland
      qa: { posture: ["adopt","Qatar launched its National ","QIA launched Qai, a national"], route: ["none"], compute: ["own","QIA launched Qai, a national"], bloc: ["none"] }, // Qatar
      bh: { posture: ["regulate","On 28 April 2024 the Shura C","The bill has not been enacte"], route: ["own","On 28 April 2024 the Shura C","The bill has not been enacte"], compute: ["none"], bloc: ["us","@bh-us"] }, // Bahrain
      jo: { posture: ["adopt","The Cabinet approved Jordan'","Jordan launched an 'AI for G"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Jordan
      nz: { posture: ["adopt","New Zealand released its fir","A non-binding Public Service"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // New Zealand
      bt: { posture: ["adopt","GovTech published a 'Nationa","SATO Technologies signed a n"], route: ["none"], compute: ["foreign","SATO Technologies signed a n"], bloc: ["none"] }, // Bhutan
      mu: { posture: ["adopt","Mauritius launched its Natio","The 2026–27 budget (19 June "], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Mauritius
      bj: { posture: ["adopt","On 18 January 2023 the Counc","President Romuald Wadagni's "], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Benin
      cr: { posture: ["adopt","MICITT launched the National"], route: ["own","Costa Rica has no AI-specifi"], compute: ["none"], bloc: ["us","@pax-silica"] }, // Costa Rica
      jm: { posture: ["align","Jamaica set up a National AI","Minister Andrew Wheatley con","@caricom"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Jamaica
      se: { posture: ["adopt","Sweden published a national ","The government's AI Commissi"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Sweden
      at: { posture: ["adopt","Austria's national AI strate","An AI Service Desk at the re"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Austria
      pt: { posture: ["adopt","Portugal's national AI strat","Portugal released Amália, an"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Portugal
      gr: { posture: ["adopt","In November 2024 a high-leve","On 5 September 2025 OpenAI a","Pharos, the Greek AI Factory"], route: ["eu","#eu"], compute: ["shared","Pharos, the Greek AI Factory"], bloc: ["eu","#eu"] }, // Greece
      lv: { posture: ["adopt","On 4 February 2020 Latvia ad","On 6 March 2025 the Saeima p"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Latvia
      al: { posture: ["adopt","On 11 September 2025 Prime M","Before the appointment, Diel"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Albania
      ge: { posture: ["align","An AI readiness assessment b","Georgia was reported in Octo"], route: ["regional","@coe"], compute: ["none"], bloc: ["multi","@coe","An AI readiness assessment b","@ge-cn"] }, // Georgia
      am: { posture: ["adopt","In June 2025 Firebird announ","Firebird opened the AI facto"], route: ["none"], compute: ["foreign","In June 2025 Firebird announ","Firebird opened the AI facto"], bloc: ["us","@am-us"] }, // Armenia
      kw: { posture: ["absent","Kuwait's national AI strateg","Kuwait has no dedicated AI l"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Kuwait
      om: { posture: ["adopt","In 2024 Oman launched a Nati"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Oman
      mn: { posture: ["align","Mongolia's Ministry of Digit"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Mongolia
      bn: { posture: ["align","AITI issued a voluntary, ris","@asean-guide"], route: ["regional","@asean-guide"], compute: ["none"], bloc: ["none"] }, // Brunei
      tn: { posture: ["adopt","Tunisia's national AI Roadma","Tunisia secured a 150 millio"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Tunisia
      bw: { posture: ["align","In August 2025 the governmen"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Botswana
      sl: { posture: ["align","In October 2025 the Ministry","In May 2026 the government h"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Sierra Leone
      tg: { posture: ["absent","In December 2025 Togo was re"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Togo
      sv: { posture: ["regulate","On 26 February 2025 the Legi"], route: ["own","On 26 February 2025 the Legi"], compute: ["foreign","In April 2025 El Salvador si"], bloc: ["none"] }, // El Salvador
      pa: { posture: ["regulate","In August 2026 the National ","Panama's Cabinet Council app"], route: ["own","In August 2026 the National "], compute: ["none"], bloc: ["none"] }, // Panama
      py: { posture: ["adopt","In May 2026 Paraguay and Tai"], route: ["none"], compute: ["foreign","In May 2026 Paraguay and Tai","@py-tw"], bloc: ["us","@pax-silica"] }, // Paraguay
      do: { posture: ["adopt","President Luis Abinader laun","In September 2026 the govern"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Dominican Republic
      be: { posture: ["adopt","On 16 September 2026 the fed","Belgium's first national AI "], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Belgium
      cz: { posture: ["adopt","In July 2024 the government ","In October 2025 the EuroHPC "], route: ["eu","#eu"], compute: ["shared","In October 2025 the EuroHPC ","@lumi"], bloc: ["eu","#eu"] }, // Czechia
      hu: { posture: ["regulate","Hungary implemented the EU A"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Hungary
      hr: { posture: ["align","An OECD country note in Octo","Croatia is preparing a Natio","#eu"], route: ["eu","#eu"], compute: ["none"], bloc: ["eu","#eu"] }, // Croatia
      sk: { posture: ["adopt","Slovakia's Strategy of the D","The national supercomputer P","The government set up a Gove"], route: ["eu","#eu"], compute: ["own","The national supercomputer P"], bloc: ["eu","#eu"] }, // Slovakia
      bg: { posture: ["adopt","The Bulgarian government pub","On 12 March 2025 Bulgaria wa","INSAIT announced BgGPT, an o"], route: ["eu","#eu"], compute: ["shared","On 12 March 2025 Bulgaria wa"], bloc: ["eu","#eu"] }, // Bulgaria
      rs: { posture: ["adopt","In January 2025 the governme","Serbia adopted its first AI "], route: ["own","Serbia has no binding AI law"], compute: ["none"], bloc: ["multi","Serbia has no binding AI law","@waico","@rs-cn"] }, // Serbia
      me: { posture: ["align","A 2024 UNDP AI Landscape Ass","In May 2025 a Ministry of Pu"], route: ["none"], compute: ["shared","@daedalus"], bloc: ["eu","Montenegro's judiciary acqui"] }, // Montenegro
      az: { posture: ["adopt","On 19 March 2025 President A","On 27 February 2026 Presiden"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Azerbaijan
      kg: { posture: ["regulate","Parliament adopted the Digit","A draft regulation on the Et"], route: ["own","Parliament adopted the Digit","A draft regulation on the Et"], compute: ["none"], bloc: ["cn","@waico","@sco-ai"] }, // Kyrgyzstan
      lb: { posture: ["adopt","In September 2026 the UAE an","In February 2025 Kamal Sheha"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Lebanon
      la: { posture: ["align","At its September 2026 monthl","On 27 January 2026 Laos pres"], route: ["regional","@asean-guide"], compute: ["none"], bloc: ["cn","@la-cn-centre"] }, // Laos
      fj: { posture: ["absent","Deputy Prime Minister and Co"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Fiji
      mv: { posture: ["align","In mid-2025 the Maldives pub","In October 2024 President Mu"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Maldives
      na: { posture: ["adopt","On 23 September 2026 the Nat"], route: ["own","In June 2025 Namibia was dra"], compute: ["none"], bloc: ["none"] }, // Namibia
      cv: { posture: ["absent","On 28 April 2026 the governm"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Cabo Verde
      sc: { posture: ["adopt","Cabinet approved the Nationa"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Seychelles
      gm: { posture: ["absent","The National Digital Economy","As at June 2026 The Gambia h"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Gambia
      lr: { posture: ["absent","Liberia launched its 2025 Ar"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Liberia
      mr: { posture: ["adopt","The Ministry of Digital Tran"], route: ["regional","#au"], compute: ["foreign","Mauritania and the World Ban"], bloc: ["none"] }, // Mauritania
      hn: { posture: ["absent","Congress was set to debate a"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Honduras
      tt: { posture: ["align","On 26 November 2025 the mini"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Trinidad and Tobago
      bb: { posture: ["absent","Prime Minister Mottley annou","At the 81st UN General Assem"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Barbados
      bs: { posture: ["absent","Parliamentary secretary Wayd"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Bahamas
      gy: { posture: ["absent","President Irfaan Ali announc","Health Minister Frank Anthon"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Guyana
      ly: { posture: ["adopt","On 1 June 2026, at a ceremon"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Libya
      cg: { posture: ["align","The technical committee draf"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Congo
      ga: { posture: ["adopt","On 3 July 2026 President Bri"], route: ["regional","#au"], compute: ["own","On 3 July 2026 President Bri"], bloc: ["none"] }, // Gabon
      dj: { posture: ["align","At Djibouti's first National","In January 2026, ESCWA and t"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Djibouti
      sz: { posture: ["align","Eswatini is developing a Nat"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Eswatini
      ls: { posture: ["align","From 17 to 21 August 2026","Lesotho became the first country"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Lesotho
      ba: { posture: ["align","The Parliamentary Assembly o"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Bosnia and Herzegovina
      mk: { posture: ["align","On 14 October 2025 Digital T","North Macedonia has no stand"], route: ["none"], compute: ["shared","On 14 October 2025 Digital T","@mk-gr","@daedalus"], bloc: ["eu","On 14 October 2025 Digital T"] }, // North Macedonia
      md: { posture: ["align","The Ministry of Economic Dev","Moldova has no law specifica"], route: ["regional","@coe"], compute: ["none"], bloc: ["eu","@coe"] }, // Moldova
      by: { posture: ["regulate","At the Eurasian Economic For"], route: ["regional","At the Eurasian Economic For"], compute: ["none"], bloc: ["none"] }, // Belarus
      li: { posture: ["adopt","On 14 April 2026 the governm"], route: ["eu","#eea","The EU AI Act is marked as E"], compute: ["none"], bloc: ["eu","#eea"] }, // Liechtenstein
      ad: { posture: ["align","Andorra was among the first "], route: ["regional","@coe"], compute: ["none"], bloc: ["eu","@coe"] }, // Andorra
      mc: { posture: ["adopt","Prince Albert II launched Ex","A Sovereign Ordinance create"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Monaco
      sm: { posture: ["align","San Marino was among the fir"], route: ["regional","@coe"], compute: ["none"], bloc: ["eu","@coe"] }, // San Marino
      tj: { posture: ["adopt","Tajikistan's 2022 National A"], route: ["none"], compute: ["none"], bloc: ["cn","@sco-ai"] }, // Tajikistan
      pg: { posture: ["absent","On 22 March 2026 the acting ","At the Media Summit 2026, IC"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Papua New Guinea
      to: { posture: ["absent","On 6 August 2025 the Legisla"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Tonga
      sb: { posture: ["absent","UNESCO selected EDiSON, an A"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Solomon Islands
      pw: { posture: ["absent","President Surangel Whipps Jr"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Palau
      ps: { posture: ["absent","Prime Minister Mohammad Must","The Ministry of Telecommunic"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Palestine
      bo: { posture: ["regulate","In October 2025 the Senate a"], route: ["own","In October 2025 the Senate a"], compute: ["none"], bloc: ["none"] }, // Bolivia
      ni: { posture: ["align","The National Assembly ratifi"], route: ["none"], compute: ["none"], bloc: ["cn","@waico"] }, // Nicaragua
      bz: { posture: ["absent","Belize's Senior Courts issue"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Belize
      sr: { posture: ["align","On 27 August 2026 Suriname h"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Suriname
      ht: { posture: ["align","On 10 August 2026 several or"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Haiti
      lc: { posture: ["absent","Education and Digital Transf","The National Competitiveness"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Saint Lucia
      ag: { posture: ["regulate","Prime Minister Gaston Browne"], route: ["own","Prime Minister Gaston Browne"], compute: ["none"], bloc: ["none"] }, // Antigua and Barbuda
      gd: { posture: ["align","Prime Minister Dickon Mitche","Mitchell is CARICOM's lead h"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Grenada
      bi: { posture: ["adopt","On 21–22 April 2026 a nation"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Burundi
      km: { posture: ["absent","The Comoros held its first n"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Comoros
      st: { posture: ["absent","A National Strategy for Digi"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // São Tomé and Príncipe
      kn: { posture: ["align","Nevis Premier and opposition","Saint Kitts and Nevis has no"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Saint Kitts and Nevis
      tl: { posture: ["absent","In April 2026 the Ministry o"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Timor-Leste
      vu: { posture: ["absent","At the Forum ICT Ministers M"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Vanuatu
      ws: { posture: ["adopt","On 17 April 2026 the governm"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Samoa
      ki: { posture: ["absent","Kiribati's National ICT Poli"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Kiribati
      fm: { posture: ["absent"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Micronesia
      mh: { posture: ["absent"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Marshall Islands
      nr: { posture: ["absent"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Nauru
      tv: { posture: ["absent","Tuvalu's Digital Nation proj"], route: ["regional","@pif-ai"], compute: ["none"], bloc: ["none"] }, // Tuvalu
      tm: { posture: ["align","With UNDP support, the Minis"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Turkmenistan
      cu: { posture: ["adopt","On 13 January 2025 the Minis","In late 2025 the government "], route: ["none"], compute: ["none"], bloc: ["cn","@waico"] }, // Cuba
      dm: { posture: ["absent","With technical assistance fr"], route: ["regional","@caricom"], compute: ["none"], bloc: ["cn","Foreign Minister Vince Hende"] }, // Dominica
      vc: { posture: ["absent","The government's 'One Stop V"], route: ["regional","@caricom"], compute: ["none"], bloc: ["none"] }, // Saint Vincent and the Grenadines
      ss: { posture: ["absent","At the Global AI Summit on A"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // South Sudan
      cf: { posture: ["absent","In July 2026 the High Counci"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Central African Republic
      er: { posture: ["absent"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Eritrea
      gw: { posture: ["absent","Decree 10/2025, published in"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Guinea-Bissau
      gq: { posture: ["absent"], route: ["regional","#au"], compute: ["none"], bloc: ["none"] }, // Equatorial Guinea
      xk: { posture: ["align","An EU AI Act readiness asses"], route: ["none"], compute: ["none"], bloc: ["eu","An EU AI Act readiness asses"] }, // Kosovo
      va: { posture: ["regulate","Guidelines on AI for Vatican"], route: ["own","Guidelines on AI for Vatican"], compute: ["none"], bloc: ["none"] }, // Holy See (Vatican City)
      in: { posture: ["adopt","On 7 March 2024 the Cabinet approved","NITI Aayog, the government's policy think tank"], route: ["none"], compute: ["own","On 7 March 2024 the Cabinet approved"], bloc: ["none"] }, // India
      id: { posture: ["adopt","Indonesia's first framework was","In early August 2025 the Ministry"], route: ["regional","@asean-guide"], compute: ["none"], bloc: ["none"] }, // Indonesia
      pk: { posture: ["adopt","On 30 July 2025 the federal cabinet"], route: ["none"], compute: ["none"], bloc: ["none"] }, // Pakistan
      ng: { posture: ["adopt","Nigeria launched its National Artificial"], route: ["own","In January 2026 a National Digital Economy"], compute: ["none"], bloc: ["none"] }, // Nigeria
      br: { posture: ["adopt","The Brazilian Artificial Intelligence Plan"], route: ["own","On 10 December 2024 the Senate approved","In December 2025 the Chamber of Deputies"], compute: ["own","The Brazilian Artificial Intelligence Plan"], bloc: ["none"] }, // Brazil
    },
  };
})();

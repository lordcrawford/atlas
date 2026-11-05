// Atlas - scope.
// Atlas covers countries outside the AI frontier: those that neither produce frontier AI models nor hold a key
// place in the AI chip supply chain. The line follows a published yardstick, the Stanford AI Index 2026:
// `frontier` lists who is left out and why, `exception` the one country kept despite the rule, and
// `pending` the in-scope countries not yet on the site (largest first; World Bank population, 2025).
// Remove a name from `pending` when its page is added.
(function () {
  const A = (window.ATLAS = window.ATLAS || {});
  A.scope = {
    source: { t: "Stanford HAI - AI Index Report 2026, ch. 1: notable AI models by country in 2025 (Fig. 1.1.1) and the AI hardware supply chain (section 1.3)", u: "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf" },
    frontier: [
      ["United States", "59 notable AI models in 2025; designs the leading AI chips (Nvidia) and makes memory and packaging (Micron, Amkor)"],
      ["China", "35 notable AI models in 2025"],
      ["South Korea", "8 notable AI models in 2025; makes the memory that AI chips depend on (SK Hynix, Samsung) and fabricates chips (Samsung)"],
      ["Taiwan", "fabricates virtually every leading AI chip (TSMC) and packages them (ASE)"],
      ["Canada", "1 notable AI model in 2025"],
      ["France", "1 notable AI model in 2025"],
      ["United Kingdom", "1 notable AI model in 2025"],
    ],
    exception: { id: "sg", name: "Singapore", why: "The AI Index credits Singapore with one notable AI model in 2025. It is kept on the site as a named exception to the rule." },
    pending: ["Bangladesh","Russia","Ethiopia","Mexico","Japan","Egypt","Philippines","DR Congo","Vietnam","Iran","Türkiye","Germany","Thailand","Tanzania","South Africa","Italy","Kenya","Myanmar","Colombia","Sudan","Uganda","Spain","Algeria","Iraq","Argentina","Afghanistan","Yemen","Angola","Ukraine","Morocco","Uzbekistan","Saudi Arabia","Poland","Malaysia","Mozambique","Ghana","Peru","Madagascar","Côte d'Ivoire","Cameroon","Nepal","Venezuela","Niger","Australia","North Korea","Syria","Mali","Burkina Faso","Malawi","Zambia","Sri Lanka","Chad","Kazakhstan","Chile","Somalia","Romania","Senegal","Guatemala","Ecuador","Netherlands","Cambodia","Zimbabwe","Guinea"],
  };
})();

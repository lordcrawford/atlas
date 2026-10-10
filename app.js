/* Worldview dashboard - vanilla JS, no build step. Data: data/nations.js */
(function () {
  "use strict";

  const D = window.WORLDVIEW;
  const N = D.nations;
  const S = D.meta.sources;
  const PILLARS = D.meta.pillars;
  const OXFORD_TOTAL = 195;
  const view = document.getElementById("view");
  const tip = document.getElementById("tooltip");
  const SVGNS = "http://www.w3.org/2000/svg";

  const LEVELS = {
    verified: { icon: "✓✓✓", label: "Verified", desc: "3+ independent sources agree" },
    corroborated: { icon: "✓✓", label: "Corroborated", desc: "2 independent sources agree" },
    single: { icon: "!", label: "Single source", desc: "Only one source found. Treat with care" },
    dataset: { icon: "▦", label: "Dataset", desc: "Read directly from the publisher's dataset" },
  };

  // ---------------------------------------------------------------- helpers
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat()) {
      if (k == null || k === false) continue;
      n.append(k instanceof Node ? k : document.createTextNode(String(k)));
    }
    return n;
  }
  function s(tag, attrs, ...kids) {
    const n = document.createElementNS(SVGNS, tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null) continue;
      if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const k of kids.flat()) {
      if (k == null) continue;
      n.append(k instanceof Node ? k : document.createTextNode(String(k)));
    }
    return n;
  }
  const fmtInt = (v) => v.toLocaleString("en-US");
  function compact(v) {
    if (v >= 1e6) return (v / 1e6).toFixed(v >= 1e7 ? 1 : 2).replace(/\.0+$/, "") + "M";
    if (v >= 1e3) return Math.round(v / 1e3) + "K";
    return String(v);
  }
  function fmtDate(d) {
    const m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(d);
    if (!m) return d;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (m[3]) return `${+m[3]} ${months[+m[2] - 1]} ${m[1]}`;
    if (m[2]) return `${months[+m[2] - 1]} ${m[1]}`;
    return m[1];
  }
  function dateValue(d) {
    const m = /(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?/.exec(d);
    if (!m) return null;
    return +m[1] + ((m[2] ? +m[2] - 1 : 0) + (m[3] ? (+m[3] - 1) / 31 : 0)) / 12;
  }
  function domain(u) {
    try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; }
  }
  const byId = (id) => N.find((n) => n.id === id);
  const median = (arr) => {
    const a = [...arr].sort((x, y) => x - y);
    const m = a.length >> 1;
    return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
  };
  const isDark = () =>
    document.documentElement.dataset.theme === "dark" ||
    (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);

  function badge(level, count) {
    const L = LEVELS[level];
    const label = level === "single" || level === "dataset" ? L.label : `${L.label} · ${count} sources`;
    return el("span", { class: `badge ${level}`, title: L.desc }, el("span", { class: "ic", "aria-hidden": "true" }, L.icon), label);
  }
  function sourceChips(sources) {
    return sources.map((src, i) =>
      el("a", { class: "src", href: src.u, target: "_blank", rel: "noopener noreferrer", title: src.t },
        el("span", { class: "n" }, `[${i + 1}]`), domain(src.u), " ↗")
    );
  }
  function sourceLine(...keys) {
    return el("div", { class: "chart-foot" },
      el("span", { class: "muted small" }, "Source:"),
      sourceChips(keys.map((k) => S[k])));
  }

  // ---------------------------------------------------------------- tooltip
  function showTip(evt, nodes) {
    tip.replaceChildren(...nodes);
    tip.hidden = false;
    let x, y;
    if (evt.clientX != null && evt.type !== "focus") { x = evt.clientX; y = evt.clientY; }
    else { const r = evt.target.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top; }
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = x + 14, top = y - th - 12;
    if (left + tw > innerWidth - 8) left = x - tw - 14;
    if (left < 8) left = 8;
    if (top < 8) top = y + 18;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }
  const hideTip = () => { tip.hidden = true; };
  function hoverable(node, content) {
    node.setAttribute("tabindex", "0");
    node.addEventListener("pointermove", (e) => showTip(e, content()));
    node.addEventListener("pointerleave", hideTip);
    node.addEventListener("focus", (e) => showTip(e, content()));
    node.addEventListener("blur", hideTip);
  }

  function tableToggle(container, buildTable) {
    let shown = null;
    const btn = el("button", { class: "table-toggle", type: "button", "aria-expanded": "false" }, "Show as table");
    btn.addEventListener("click", () => {
      if (shown) { shown.remove(); shown = null; btn.textContent = "Show as table"; btn.setAttribute("aria-expanded", "false"); }
      else { shown = buildTable(); container.append(shown); btn.textContent = "Hide table"; btn.setAttribute("aria-expanded", "true"); }
    });
    return btn;
  }
  function table(head, rows, numCols = []) {
    return el("table", { class: "data" },
      el("thead", {}, el("tr", {}, head.map((h, i) => el("th", { class: numCols.includes(i) ? "num" : null }, h)))),
      el("tbody", {}, rows.map((r) => el("tr", {}, r.map((c, i) => el("td", { class: numCols.includes(i) ? "num" : null }, c ?? "—"))))));
  }

  // ---------------------------------------------------------------- charts
  const RAMP = ["#cde2fb", "#b7d3f6", "#9ec5f4", "#86b6ef", "#6da7ec", "#5598e7", "#3987e5", "#2a78d6", "#256abf", "#1c5cab", "#184f95", "#104281", "#0d366b"];
  function rampColor(score) {
    // 25 -> lightest, 100 -> darkest. In dark mode the ramp flips so low values sit near the surface.
    const t = Math.max(0, Math.min(1, (score - 25) / 75));
    const idx = Math.round(t * (RAMP.length - 1));
    return isDark() ? RAMP[RAMP.length - 1 - idx] : RAMP[idx];
  }
  function inkOn(hex) {
    const c = hex.match(/\w\w/g).map((h) => parseInt(h, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    return L > 0.36 ? "#0b0b0b" : "#ffffff";
  }

  function readinessHeatmap() {
    const rows = [...N].sort((a, b) => a.oxford.rank - b.oxford.rank)
      .map((n) => ({ name: `${n.name}`, sub: `#${n.oxford.rank}`, scores: n.oxford.scores, id: n.id }));
    rows.push({ name: "United States", sub: "#1 · reference", scores: D.meta.usReference.scores, ref: true });
    const labelW = 170, cellW = 96, cellH = 34, gap = 2, headH = 44;
    const W = labelW + PILLARS.length * cellW, H = headH + rows.length * cellH + 8;
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", "aria-label": "Heatmap of Oxford Insights 2025 pillar scores for six nations and the United States" });
    const headLines = [["Policy", "capacity"], ["AI", "infrastructure"], ["Governance", ""], ["Public sector", "adoption"], ["Development", "& diffusion"], ["Resilience", ""]];
    headLines.forEach((ls, i) => {
      const x = labelW + i * cellW + cellW / 2;
      svg.append(s("text", { x, y: 16, "text-anchor": "middle", class: "t-ink" }, ls[0]));
      if (ls[1]) svg.append(s("text", { x, y: 31, "text-anchor": "middle" }, ls[1]));
    });
    rows.forEach((r, ri) => {
      const y = headH + ri * cellH + (r.ref ? 8 : 0);
      svg.append(s("text", { x: 0, y: y + cellH / 2 + 4, class: r.ref ? "t-muted" : "t-ink" }, r.name));
      svg.append(s("text", { x: labelW - 12, y: y + cellH / 2 + 4, "text-anchor": "end", class: "t-muted" }, r.sub));
      r.scores.forEach((v, ci) => {
        const fill = rampColor(v);
        const x = labelW + ci * cellW;
        const g = s("g", {});
        const rect = s("rect", { x: x + gap / 2, y: y + gap / 2, width: cellW - gap, height: cellH - gap, rx: 4, fill, class: "cell", opacity: r.ref ? 0.55 : 1 });
        g.append(rect, s("text", { x: x + cellW / 2, y: y + cellH / 2 + 4, "text-anchor": "middle", style: `fill:${inkOn(fill)};font-variant-numeric:tabular-nums;pointer-events:none` }, v.toFixed(1)));
        hoverable(rect, () => [
          el("div", { class: "tv" }, v.toFixed(2)),
          el("div", { class: "tl" }, `${r.name} · ${PILLARS[ci]}`),
          el("div", { class: "tl small" }, "Score out of 100, Oxford Insights 2025"),
        ]);
        svg.append(g);
      });
    });
    const wrap = el("div", { class: "chart wide" }, svg);
    const box = el("div", {}, wrap);
    const scale = el("div", { class: "legend" },
      el("span", { style: "display:inline-flex;align-items:center;gap:6px;white-space:nowrap" }, "Low",
        el("span", { style: "display:inline-flex;gap:2px" }, [30, 45, 60, 75, 90].map((v) => el("i", { style: `background:${rampColor(v)};width:22px;margin:0` }))),
        "High · score out of 100"));
    box.append(scale, el("div", { class: "chart-foot" },
      tableToggle(box, () => table(["Country", "Rank", ...PILLARS], rows.map((r) => [r.name, r.sub, ...r.scores.map((v) => v.toFixed(2))]), [2, 3, 4, 5, 6, 7])),
      el("span", { class: "muted small" }, " · "), el("span", { class: "muted small" }, "Source:"), sourceChips([S.oxford])));
    return box;
  }

  function usageBars() {
    const rows = [...N].map((n) => ({ n, v: n.msAdoption ? n.msAdoption.h2_2025 : null }))
      .sort((a, b) => (b.v ?? -1) - (a.v ?? -1));
    const labelW = 150, barH = 22, rowH = 38, plotW = 300, top = 8, max = 80;
    const W = labelW + plotW + 60, H = top + rows.length * rowH + 26;
    const x = (v) => labelW + (v / max) * plotW;
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", "aria-label": "Bar chart of generative AI user share, H2 2025" });
    for (let t = 0; t <= max; t += 20) {
      svg.append(s("line", { x1: x(t), x2: x(t), y1: top, y2: H - 22, class: t === 0 ? "axis" : "grid" }));
      svg.append(s("text", { x: x(t), y: H - 6, "text-anchor": "middle", class: "t-muted" }, `${t}%`));
    }
    rows.forEach(({ n, v }, i) => {
      const y = top + i * rowH + (rowH - barH) / 2;
      svg.append(s("text", { x: 0, y: y + barH / 2 + 4, class: "t-ink" }, `${n.flag} ${n.name}`));
      if (v == null) {
        svg.append(s("text", { x: x(0) + 8, y: y + barH / 2 + 4, class: "t-muted" }, "Not reported (insufficient data)"));
        return;
      }
      const w = x(v) - x(0), r = Math.min(4, w / 2);
      const path = `M${x(0)},${y} h${w - r} a${r},${r} 0 0 1 ${r},${r} v${barH - 2 * r} a${r},${r} 0 0 1 -${r},${r} h-${w - r} Z`;
      const bar = s("path", { d: path, fill: "var(--series-1)", class: "mark" });
      const hit = s("rect", { x: x(0), y: y - 6, width: Math.max(w, 40) + 50, height: barH + 12, class: "hit" });
      hoverable(hit, () => [
        el("div", { class: "tv" }, `${v.toFixed(1)}%`),
        el("div", { class: "tl" }, `${n.name}, H2 2025`),
        el("div", { class: "tl small" }, `H1 2025: ${n.msAdoption.h1_2025.toFixed(1)}%`),
      ]);
      svg.append(bar, s("text", { x: x(v) + 6, y: y + barH / 2 + 4, class: "t-ink", style: "font-variant-numeric:tabular-nums" }, `${v.toFixed(1)}%`), hit);
    });
    const box = el("div", {}, el("div", { class: "chart" }, svg));
    box.append(el("div", { class: "chart-foot" },
      tableToggle(box, () => table(["Country", "H1 2025", "H2 2025"], rows.map(({ n }) => [n.name, n.msAdoption ? n.msAdoption.h1_2025 + "%" : "Not reported", n.msAdoption ? n.msAdoption.h2_2025 + "%" : "Not reported"]), [1, 2])),
      el("span", { class: "muted small" }, " · Source:"), sourceChips([S.msH2, S.msBlog])));
    return box;
  }

  function leaderTrend() {
    const periods = [["h1_2025", "H1 2025"], ["h2_2025", "H2 2025"], ["q1_2026", "Q1 2026"], ["q2_2026", "Q2 2026"]];
    const series = [
      { n: byId("ae"), color: "var(--series-1)" },
      { n: byId("sg"), color: "var(--series-2)" },
    ];
    const L = 40, R = 124, T = 14, B = 30, W = 520, H = 250, lo = 50, hi = 80;
    const x = (i) => L + (i / (periods.length - 1)) * (W - L - R);
    const y = (v) => T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", "aria-label": "Line chart: UAE and Singapore AI user share, H1 2025 to Q2 2026" });
    for (let t = lo; t <= hi; t += 10) {
      svg.append(s("line", { x1: L, x2: W - R, y1: y(t), y2: y(t), class: "grid" }));
      svg.append(s("text", { x: L - 8, y: y(t) + 4, "text-anchor": "end", class: "t-muted" }, `${t}%`));
    }
    periods.forEach(([, lab], i) => svg.append(s("text", { x: x(i), y: H - 8, "text-anchor": "middle", class: "t-muted" }, lab)));
    const cross = s("line", { x1: 0, x2: 0, y1: T, y2: H - B, class: "axis", visibility: "hidden" });
    svg.append(cross);
    series.forEach(({ n, color }) => {
      const pts = periods.map(([k], i) => [x(i), y(n.msAdoption[k])]);
      svg.append(s("polyline", { points: pts.map((p) => p.join(",")).join(" "), fill: "none", stroke: color, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }));
      pts.forEach(([px, py]) => svg.append(s("circle", { cx: px, cy: py, r: 4, fill: color, stroke: "var(--surface)", "stroke-width": 2 })));
      const last = pts[pts.length - 1];
      svg.append(s("text", { x: last[0] + 10, y: last[1] + 4, class: "t-ink" }, `${n.name === "United Arab Emirates" ? "UAE" : n.name} ${n.msAdoption.q2_2026}%`));
    });
    const hit = s("rect", { x: L - 20, y: T, width: W - L - R + 40, height: H - T - B, class: "hit", tabindex: "0" });
    let focusIdx = periods.length - 1;
    const readout = (i) => [
      el("div", { class: "tl" }, periods[i][1]),
      ...series.map(({ n, color }) => el("div", { class: "row" },
        el("span", { class: "key", style: `background:${color}` }),
        el("span", { class: "tv" }, `${n.msAdoption[periods[i][0]]}%`),
        el("span", { class: "tl" }, n.name))),
    ];
    const at = (i, evt) => { cross.setAttribute("x1", x(i)); cross.setAttribute("x2", x(i)); cross.setAttribute("visibility", "visible"); showTip(evt, readout(i)); };
    hit.addEventListener("pointermove", (e) => {
      const r = svg.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width) * W;
      const i = Math.max(0, Math.min(periods.length - 1, Math.round(((px - L) / (W - L - R)) * (periods.length - 1))));
      at(i, e);
    });
    hit.addEventListener("pointerleave", () => { hideTip(); cross.setAttribute("visibility", "hidden"); });
    hit.addEventListener("focus", (e) => at(focusIdx, e));
    hit.addEventListener("blur", () => { hideTip(); cross.setAttribute("visibility", "hidden"); });
    hit.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        focusIdx = Math.max(0, Math.min(periods.length - 1, focusIdx + (e.key === "ArrowRight" ? 1 : -1)));
        at(focusIdx, { target: hit, type: "focus" }); e.preventDefault();
      }
    });
    svg.append(hit);
    const box = el("div", {},
      el("div", { class: "legend" }, series.map(({ n, color }) => el("span", {}, el("i", { class: "line", style: `background:${color}` }), n.name))),
      el("div", { class: "chart" }, svg));
    box.append(el("div", { class: "chart-foot" },
      tableToggle(box, () => table(["Period", ...series.map((x) => x.n.name)], periods.map(([k, lab]) => [lab, ...series.map((x) => x.n.msAdoption[k] + "%")]), [1, 2])),
      el("span", { class: "muted small" }, " · Sources:"), sourceChips([S.msH2, S.wamQ1, S.mapprQ1, S.msQ2, S.meaiQ2])));
    return box;
  }

  function milestoneTimeline() {
    const y0 = 2017, y1 = 2027;
    const labelW = 170, rowH = 40, T = 10, B = 26, plotW = 760;
    const W = labelW + plotW + 16, H = T + N.length * rowH + B;
    const x = (v) => labelW + ((v - y0) / (y1 - y0)) * plotW;
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", "aria-label": "Timeline of AI policy milestones by nation, 2017 to 2026" });
    for (let yr = y0; yr <= y1; yr++) {
      svg.append(s("line", { x1: x(yr), x2: x(yr), y1: T, y2: H - B, class: "grid" }));
      if (yr < y1) svg.append(s("text", { x: x(yr + 0.5), y: H - 8, "text-anchor": "middle", class: "t-muted" }, String(yr)));
    }
    N.forEach((n, i) => {
      const cy = T + i * rowH + rowH / 2;
      svg.append(s("line", { x1: labelW, x2: labelW + plotW, y1: cy, y2: cy, class: "axis" }));
      svg.append(s("text", { x: 0, y: cy + 4, class: "t-ink" }, `${n.flag} ${n.name}`));
      const items = [...n.facts, ...n.news.filter((x) => !n.facts.some((f) => f.date === x.date))]
        .map((f) => ({ f, v: dateValue(f.date) })).filter((o) => o.v != null && o.v >= y0);
      items.forEach(({ f, v }) => {
        const cx = x(v + (String(f.date).length === 4 ? 0.5 : 0) + 1 / 24);
        const g = s("g", {});
        g.append(s("circle", { cx, cy, r: 5, fill: "var(--accent)", stroke: "var(--surface)", "stroke-width": 2, class: "mark" }));
        const hit = s("circle", { cx, cy, r: 12, class: "hit", style: "cursor:pointer" });
        hit.addEventListener("click", () => { location.hash = n.id; });
        hoverable(hit, () => [
          el("div", { class: "tl small" }, `${n.name} · ${fmtDate(f.date)}`),
          el("div", {}, (f.title || f.text).length > 170 ? (f.title || f.text).slice(0, 167) + "…" : (f.title || f.text)),
          el("div", { style: "margin-top:6px" }, badge(f.level, f.sources.length)),
        ]);
        g.append(hit);
        svg.append(g);
      });
    });
    return el("div", { class: "chart wide" }, svg);
  }

  function pillarBars(n) {
    const med = PILLARS.map((_, i) => median(N.map((x) => x.oxford.scores[i])));
    const labelW = 190, plotW = 440, rowH = 36, barH = 20, T = 6, B = 24;
    const W = labelW + plotW + 60, H = T + PILLARS.length * rowH + B;
    const x = (v) => labelW + (v / 100) * plotW;
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", "aria-label": `${n.name} Oxford Insights pillar scores versus six-nation median` });
    for (let t = 0; t <= 100; t += 25) {
      svg.append(s("line", { x1: x(t), x2: x(t), y1: T, y2: H - B, class: t === 0 ? "axis" : "grid" }));
      svg.append(s("text", { x: x(t), y: H - 6, "text-anchor": "middle", class: "t-muted" }, String(t)));
    }
    PILLARS.forEach((p, i) => {
      const v = n.oxford.scores[i];
      const y = T + i * rowH + (rowH - barH) / 2;
      const w = x(v) - x(0), r = 4;
      svg.append(s("text", { x: 0, y: y + barH / 2 + 4, class: "t-ink" }, p));
      svg.append(s("path", { d: `M${x(0)},${y} h${w - r} a${r},${r} 0 0 1 ${r},${r} v${barH - 2 * r} a${r},${r} 0 0 1 -${r},${r} h-${w - r} Z`, fill: "var(--series-1)" }));
      svg.append(s("line", { x1: x(med[i]), x2: x(med[i]), y1: y - 4, y2: y + barH + 4, stroke: "var(--ink)", "stroke-width": 2, "stroke-linecap": "round" }));
      svg.append(s("text", { x: Math.max(x(v), x(med[i])) + 8, y: y + barH / 2 + 4, class: "t-ink", style: "font-variant-numeric:tabular-nums" }, v.toFixed(1)));
      const hit = s("rect", { x: x(0), y: y - 6, width: plotW + 40, height: barH + 12, class: "hit" });
      hoverable(hit, () => [
        el("div", { class: "tv" }, v.toFixed(2)),
        el("div", { class: "tl" }, `${n.name} · ${p}`),
        el("div", { class: "tl small" }, `Six-nation median: ${med[i].toFixed(2)} · Difference: ${(v - med[i] >= 0 ? "+" : "") + (v - med[i]).toFixed(1)}`),
      ]);
      svg.append(hit);
    });
    const box = el("div", {},
      el("div", { class: "legend" },
        el("span", {}, el("i", { style: "background:var(--series-1)" }), n.name),
        el("span", {}, el("i", { style: "background:var(--ink);width:2px;height:12px" }), "Median of the six nations")),
      el("div", { class: "chart" }, svg));
    box.append(el("div", { class: "chart-foot" },
      tableToggle(box, () => table(["Pillar", n.name, "Six-nation median"], PILLARS.map((p, i) => [p, n.oxford.scores[i].toFixed(2), med[i].toFixed(2)]), [1, 2])),
      el("span", { class: "muted small" }, " · Source:"), sourceChips([S.oxford])));
    return box;
  }

  // ---------------------------------------------------------------- shared blocks
  function factItem(f) {
    return el("article", { class: "fact" },
      el("div", { class: "fact-date" }, fmtDate(f.date)),
      el("div", {},
        f.topic ? el("span", { class: "fact-topic" }, f.topic) : null,
        el("p", { class: "fact-text" }, f.text),
        el("div", { class: "fact-meta" }, badge(f.level, f.sources.length), sourceChips(f.sources)),
        f.note ? el("p", { class: "note" }, f.note) : null));
  }
  function newsItem(item, n, showCountry) {
    return el("article", { class: "news-item" },
      el("div", { class: "fact-date" }, fmtDate(item.date)),
      el("div", {},
        showCountry ? el("p", { class: "who" }, el("a", { href: `#${n.id}` }, `${n.flag} ${n.name}`)) : null,
        el("h3", {}, item.title),
        el("p", { class: "ink2" }, item.summary),
        el("div", { class: "fact-meta" }, badge(item.level, item.sources.length), sourceChips(item.sources)),
        item.note ? el("p", { class: "note" }, item.note) : null));
  }
  function allClaims() {
    return N.flatMap((n) => [...n.facts, ...n.news]);
  }
  function sectionHead(title, sub) {
    return el("div", { class: "section-head" }, el("h2", {}, title), sub ? el("p", {}, sub) : null);
  }

  // ---------------------------------------------------------------- views
  function renderOverview() {
    const claims = allClaims();
    const count = (lv) => claims.filter((c) => c.level === lv).length;
    const srcCount = new Set(claims.flatMap((c) => c.sources.map((x) => x.u))).size;
    const levels = ["verified", "corroborated", "single"];
    const levelColor = { verified: "var(--good)", corroborated: "var(--accent)", single: "var(--warning)" };

    const hero = el("section", { class: "hero" },
      el("div", {},
        el("h1", {}, "How six small nations are handling AI"),
        el("p", { class: "lede" },
          "Singapore, Estonia, the UAE, Rwanda, Uruguay and Malta each have under 15 million people, and each has taken a different path on AI: strategy, governance, institutions, adoption and investment. Every claim on this site links to the sources behind it.")),
      el("div", { class: "card" },
        el("div", { class: "hero-figure" }, `${count("verified")} of ${claims.length}`),
        el("p", { class: "hero-cap" }, `claims confirmed by 3 or more independent sources (${srcCount} sources cited in total)`),
        el("div", { class: "levelbar", role: "img", "aria-label": levels.map((l) => `${LEVELS[l].label}: ${count(l)}`).join(", ") },
          levels.map((l) => el("span", { style: `flex:${count(l)};background:${levelColor[l]}`, title: `${LEVELS[l].label}: ${count(l)}` }))),
        el("div", { class: "legend" }, levels.map((l) => el("span", {}, el("i", { style: `background:${levelColor[l]}` }), `${LEVELS[l].icon} ${LEVELS[l].label} ${count(l)}`)))));

    const cards = el("div", { class: "grid-3" }, N.map((n) =>
      el("a", { class: "card nation-card", href: `#${n.id}` },
        el("div", { class: "top" }, el("span", { class: "flag", "aria-hidden": "true" }, n.flag),
          el("div", {}, el("h3", {}, n.name), el("div", { class: "region" }, n.region))),
        el("p", { class: "stance" }, n.stance),
        el("div", { class: "kpis" },
          el("div", { class: "kpi" }, el("div", { class: "v" }, `#${n.oxford.rank}`), el("div", { class: "l" }, "AI readiness rank")),
          el("div", { class: "kpi" }, el("div", { class: "v" }, n.msAdoption ? `${n.msAdoption.h2_2025}%` : "—"), el("div", { class: "l" }, "Use gen-AI (H2 '25)")),
          el("div", { class: "kpi" }, el("div", { class: "v" }, compact(n.stats.population.v)), el("div", { class: "l" }, "Population"))))));

    const compareRows = N.map((n) => [
      el("a", { href: `#${n.id}` }, `${n.flag} ${n.name}`),
      n.glance.firstStrategy,
      n.glance.latestStrategy,
      `${n.glance.newestBody} (${fmtDate(n.glance.newestBodyDate)})`,
      `#${n.oxford.rank}`,
      n.msAdoption ? `${n.msAdoption.h2_2025}%` : "n/a",
      `${n.stats.internet.v.toFixed(0)}%`,
    ]);

    view.replaceChildren(
      hero,
      el("section", { class: "section" }, sectionHead("The six nations", "Pick a nation for its full profile, verified facts and news."), cards),
      el("section", { class: "section" },
        sectionHead("Government AI readiness, by pillar", `Oxford Insights 2025 index, ${OXFORD_TOTAL} countries ranked. The United States (#1) is shown for reference.`),
        el("div", { class: "card" }, readinessHeatmap(),
          el("p", { class: "note" }, "Oxford Insights corrected its December 2025 release. These are the validated January 2026 figures. The earlier version had Estonia at 19th and Uruguay at 52nd, and some third-party trackers still repeat those numbers."))),
      el("section", { class: "section grid-2" },
        el("div", {}, sectionHead("How many people use generative AI", "Share of working-age population (15–64), H2 2025."),
          el("div", { class: "card" }, usageBars(),
            el("p", { class: "note" }, "Microsoft's estimate comes from anonymised Microsoft telemetry adjusted for device share and population. It measures use, not enterprise deployment. Estonia and Malta are not reported individually. World averages: Global North 24.7%, Global South 14.1%."))),
        el("div", {}, sectionHead("The two leaders keep pulling ahead", "UAE vs Singapore, latest four reporting periods."),
          el("div", { class: "card" }, leaderTrend(),
            el("p", { class: "note" }, "Microsoft moved from half-year to quarterly reporting in 2026, so the periods are not evenly spaced in time. Q1 2026 figures come from WAM and Mappr coverage of Microsoft's report. Q2 2026 figures come from Microsoft directly.")))),
      el("section", { class: "section" },
        sectionHead("Milestones, 2017–2026", "Each dot is a sourced fact or news item. Hover for details, click to open the nation."),
        el("div", { class: "card" }, milestoneTimeline())),
      el("section", { class: "section" },
        sectionHead("At a glance", null),
        el("div", { class: "card compare" },
          table(["Nation", "First AI strategy", "Latest strategy", "Newest AI body", "Readiness rank", "Gen-AI use (H2 '25)", "Internet users"],
            compareRows, [4, 5, 6]),
          sourceLine("oxford", "msH2", "wbNet"))),
    );
  }

  function renderNation(n) {
    const topics = ["All", ...new Set(n.facts.map((f) => f.topic))];
    let active = "All";
    const list = el("div", { class: "facts" });
    const drawFacts = () => list.replaceChildren(...n.facts.filter((f) => active === "All" || f.topic === active).map(factItem));
    const filterRow = el("div", { class: "filters topic-filter", role: "group", "aria-label": "Filter facts by topic" });
    const drawFilters = () => filterRow.replaceChildren(...topics.map((t) =>
      el("button", { class: "chip-btn", type: "button", "aria-pressed": String(t === active), onclick: () => { active = t; drawFilters(); drawFacts(); } }, t)));
    drawFilters(); drawFacts();

    const ms = n.msAdoption;
    const tiles = el("div", { class: "tiles" },
      tile("Population", compact(n.stats.population.v), `${fmtInt(n.stats.population.v)} (${n.stats.population.year})`, S.wbPop),
      tile("GDP per capita", `$${fmtInt(n.stats.gdpPerCapita.v)}`, `current US$, ${n.stats.gdpPerCapita.year}`, S.wbGdp),
      tile("Internet users", `${n.stats.internet.v.toFixed(1)}%`, `of population, ${n.stats.internet.year}`, S.wbNet),
      tile("AI readiness rank", `#${n.oxford.rank}`, `of ${OXFORD_TOTAL} · Oxford Insights 2025`, S.oxford),
      ms
        ? tile("Uses generative AI", `${(ms.q2_2026 ?? ms.h2_2025).toFixed(1)}%`, ms.q2_2026 ? `working-age, Q2 2026 · world #${ms.rankLatest}` : "working-age, H2 2025", ms.q2_2026 ? S.msQ2 : S.msH2)
        : tile("Uses generative AI", "—", "Not reported separately by Microsoft", S.msH2));

    view.replaceChildren(
      el("section", { class: "country-head" },
        el("span", { class: "flag", "aria-hidden": "true" }, n.flag),
        el("div", {}, el("h1", {}, n.name), el("p", { class: "stance" }, `${n.region} · ${n.stance}`))),
      el("p", { class: "summary" }, n.summary),
      el("p", { class: "muted small", style: "margin-top:6px" }, "This summary is an editorial synthesis of the sourced facts below."),
      el("section", { class: "section" }, tiles),
      el("section", { class: "section" },
        sectionHead("Readiness profile", "Oxford Insights 2025 pillar scores vs the median of the six nations."),
        el("div", { class: "card" }, pillarBars(n))),
      el("section", { class: "section" },
        sectionHead("Policy & governance facts", `${n.facts.length} facts, each with its sources and verification level.`),
        filterRow,
        el("div", { class: "card" }, list)),
      el("section", { class: "section" },
        sectionHead("Recent news", null),
        el("div", { class: "card" }, [...n.news].sort((a, b) => (a.date < b.date ? 1 : -1)).map((x) => newsItem(x, n, false)))),
      el("section", { class: "section" },
        sectionHead("What to watch", null),
        el("div", { class: "card" }, el("ul", { class: "watch" }, n.watch.map((w) => el("li", {}, w))))),
    );
  }
  function tile(label, value, sub, src) {
    return el("div", { class: "tile" },
      el("div", { class: "l" }, label),
      el("div", { class: "v" }, value),
      el("div", { class: "s" }, sub),
      el("div", { style: "margin-top:8px" }, el("a", { class: "src", href: src.u, target: "_blank", rel: "noopener noreferrer", title: src.t }, domain(src.u), " ↗")));
  }

  function renderNews() {
    const items = N.flatMap((n) => n.news.map((x) => ({ x, n }))).sort((a, b) => (a.x.date < b.x.date ? 1 : -1));
    let country = "all", level = "all";
    const list = el("div", { class: "card" });
    const row1 = el("div", { class: "filters", role: "group", "aria-label": "Filter by nation" });
    const row2 = el("div", { class: "filters", role: "group", "aria-label": "Filter by verification level" });
    const draw = () => {
      row1.replaceChildren(...[["all", "All nations"], ...N.map((n) => [n.id, `${n.flag} ${n.name}`])].map(([k, lab]) =>
        el("button", { class: "chip-btn", type: "button", "aria-pressed": String(country === k), onclick: () => { country = k; draw(); } }, lab)));
      row2.replaceChildren(...[["all", "Any verification"], ...Object.keys(LEVELS).filter((k) => k !== "dataset").map((k) => [k, `${LEVELS[k].icon} ${LEVELS[k].label}`])].map(([k, lab]) =>
        el("button", { class: "chip-btn", type: "button", "aria-pressed": String(level === k), onclick: () => { level = k; draw(); } }, lab)));
      const shown = items.filter(({ x, n }) => (country === "all" || n.id === country) && (level === "all" || x.level === level));
      list.replaceChildren(...(shown.length ? shown.map(({ x, n }) => newsItem(x, n, true)) : [el("p", { class: "muted" }, "No items match these filters.")]));
    };
    draw();
    view.replaceChildren(
      el("h1", {}, "News feed"),
      el("p", { class: "summary ink2" }, `${items.length} developments across the six nations, newest first. Research cut-off ${fmtDate(D.meta.asOf)}.`),
      el("section", { class: "section" }, row1, row2, list));
  }

  function renderMethod() {
    const claims = allClaims();
    view.replaceChildren(el("article", { class: "method" },
      el("h1", {}, "Method & verification"),
      el("p", { class: "summary" }, "How the facts on this site were researched and checked, and what the badges mean."),
      el("h2", {}, "Why these six nations"),
      el("p", {}, "All six have under 15 million people and a visible national AI programme. Between them they span Asia, Europe, the Gulf, Africa and Latin America, so they show distinct approaches: state-led frameworks (Singapore), the digital state (Estonia), top-down investment (UAE), policy-first hub-building (Rwanda), rights-based governance (Uruguay) and an EU small-state 'launchpad' (Malta)."),
      el("h2", {}, "How each claim was checked"),
      el("ul", {},
        el("li", {}, "Each claim was searched independently and cross-checked against primary sources (government sites, official releases, the publishers' own reports) and independent coverage (news outlets, law firms, research bodies)."),
        el("li", {}, "A claim is marked ✓✓✓ Verified only when at least three independent sources agree on the substance, ✓✓ Corroborated with two, and ! Single source with one. Pages from the same organisation count as one source."),
        el("li", {}, "Where sources disagree (dates, counts, names), the claim gives the best-supported version and the disagreement is shown in a Note."),
        el("li", {}, "Index figures (Oxford Insights, Microsoft, World Bank) were read directly from the publisher's own report, PDF table or API, not from secondary summaries. Several secondary sites still quote superseded figures."),
        el("li", {}, "Every source link was tested to confirm it resolves. Some publishers (Bloomberg, gov.mt, uaecabinet.ae and others) block automated checks but open normally in a browser.")),
      el("h2", {}, "Corrections made during checking"),
      el("ul", {},
        el("li", {}, "The UAE's AI & Data Authority was approved on 14 June 2026, not in September as one secondary summary implied."),
        el("li", {}, "The UAE's AI strategy has two dates: launched October 2017, and the full National AI Strategy 2031 adopted by Cabinet in April 2019."),
        el("li", {}, "Oxford Insights' December 2025 rankings contained errors. This site uses the validated January 2026 table (UAE 19th, not the 23rd some trackers report)."),
        el("li", {}, "Estonia's AI Leap expansion to vocational schools, announced for September 2026, was later described only as 'being considered'."),
        el("li", {}, "A claimed $17.5M Gates Foundation commitment to Rwanda's AI hub could not be confirmed and is not presented as fact.")),
      el("h2", {}, "Limits"),
      el("ul", {},
        el("li", {}, `This is a snapshot as of ${fmtDate(D.meta.asOf)}. Things change quickly. The news feed does not update itself.`),
        el("li", {}, "Country summaries and 'stance' lines are editorial synthesis, not quotations."),
        el("li", {}, "Programme-reported figures (for example AI Leap teacher-usage rates) are the programmes' own numbers, not independent evaluations."),
        el("li", {}, "Disclosure: this dashboard was compiled by Claude, an AI model made by Anthropic. Anthropic is party to agreements described here (Rwanda MOU, Estonia AI Leap talks). Those claims rely on both parties' public statements.")),
      el("h2", {}, "Tally"),
      el("p", {}, `${claims.length} claims: ${claims.filter((c) => c.level === "verified").length} verified, ${claims.filter((c) => c.level === "corroborated").length} corroborated, ${claims.filter((c) => c.level === "single").length} single-source.`),
    ));
  }

  // ---------------------------------------------------------------- routing
  const tabsEl = document.getElementById("tabs");
  const routes = [["overview", "Overview"], ...N.map((n) => [n.id, `${n.flag} ${n.name === "United Arab Emirates" ? "UAE" : n.name}`]), ["news", "News"], ["method", "Method"]];
  function route(keepScroll) {
    hideTip();
    const key = (location.hash || "#overview").slice(1);
    tabsEl.replaceChildren(...routes.map(([k, lab]) => el("a", { class: "tab", href: `#${k}`, "aria-current": k === key ? "page" : null }, lab)));
    const n = byId(key);
    if (n) { renderNation(n); document.title = `${n.name} — Worldview`; }
    else if (key === "news") { renderNews(); document.title = "News — Worldview"; }
    else if (key === "method") { renderMethod(); document.title = "Method — Worldview"; }
    else { renderOverview(); document.title = "Worldview — AI in Small Nations"; }
    if (keepScroll !== true) scrollTo(0, 0);
  }

  // ---------------------------------------------------------------- theme
  const toggle = document.getElementById("themeToggle");
  try { const t = localStorage.getItem("wv-theme"); if (t) document.documentElement.dataset.theme = t; } catch {}
  toggle.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("wv-theme", next); } catch {}
    route(true);
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => route(true));

  document.getElementById("asOf").textContent = fmtDate(D.meta.asOf);
  addEventListener("hashchange", () => route());
  addEventListener("scroll", hideTip, { passive: true });
  route();
})();

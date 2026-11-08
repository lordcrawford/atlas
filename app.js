/* Atlas dashboard - vanilla JS, no build step.
   Data: data/nations.js + data/nations-more.js. Map: vendor/ (d3-geo, topojson-client, world-atlas). */
(function () {
  "use strict";

  const D = window.ATLAS;
  const N = D.nations;
  // What the site covers and who is left out (data/scope.js).
  // Countries with 15 million people or more: the ones being added after the scope widened.
  const isLarge = (n) => !!(n.stats.population && n.stats.population.v >= 15e6);
  const SCOPE = D.scope || { frontier: [], exception: { why: "" }, pending: [], source: { t: "", u: "#" } };
  const S = D.meta.sources;
  const PILLARS = D.meta.pillars;
  const OXFORD_TOTAL = 195;
  const GROUPS = ["Europe", "Middle East", "Asia-Pacific", "Africa", "Americas"];
  // The ten fact topics, in the order the filter shows them.
  const TOPICS = ["Strategy & readiness", "Regulation", "Institutions", "Compute & infrastructure", "Skills & education", "Public sector", "International", "Economy", "Research & models", "Society & ethics"];
  const view = document.getElementById("view");
  const tip = document.getElementById("tooltip");
  const SVGNS = "http://www.w3.org/2000/svg";

  const LEVELS = {
    verified: { label: "3+ sources", desc: "Confirmed by 3 or more independent sources" },
    corroborated: { label: "2 sources", desc: "Confirmed by 2 independent sources" },
    single: { label: "1 source", desc: "Only one source found. Treat with care" },
    dataset: { label: "Dataset", desc: "Read directly from the publisher's dataset" },
  };

  // Nations page state (kept across navigation within a visit)
  const state = { region: "All", colorBy: "rank", tableView: "basics", sortKey: "rank", sortDir: 1, newsSort: "newest", savedTab: "saved" };

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
    if (v >= 1e9) return (v / 1e9).toFixed(2) + "B";
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
  // Kosovo and the Holy See are not in the Oxford Insights index; the Holy See has no World Bank data.
  const rankOf = (n) => (n.oxford ? n.oxford.rank : null);
  const rankText = (n) => (n.oxford ? `#${n.oxford.rank}` : "not ranked");
  const byRank = (a, b) => (rankOf(a) ?? 999) - (rankOf(b) ?? 999);
  const shortName = (n) => (n.name === "United Arab Emirates" ? "UAE" : n.name);
  const median = (arr) => {
    const a = [...arr].sort((x, y) => x - y);
    const m = a.length >> 1;
    return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
  };
  const isDark = () =>
    document.documentElement.dataset.theme === "dark" ||
    (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  const inRegion = (n) => state.region === "All" || n.group === state.region;
  const filtered = () => N.filter(inRegion);

  function badge(level, count) {
    // Counts independent sources (pages from one organisation count once), so it can be lower than the links shown.
    const L = LEVELS[level];
    return el("span", { class: `badge ${level}`, title: L.desc }, L.label);
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
    tip.replaceChildren(...nodes.filter(Boolean));
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
  function nationTip(n) {
    return [
      el("div", { class: "tv" }, `${n.flag} ${n.name}`),
      el("div", { class: "tl" }, n.oxford ? `AI readiness #${n.oxford.rank} of ${OXFORD_TOTAL}` : "Not in the Oxford Insights readiness index"),
      el("div", { class: "tl small" }, `First AI strategy: ${n.glance.firstStrategy}`),
      fieldOf(state.colorBy) ? el("div", { class: "tl" }, `${fieldOf(state.colorBy).label}: ${codeOf(n, state.colorBy).label}`) : null,
      el("div", { class: "tl small", style: "margin-top:4px" }, "Click to open profile"),
    ];
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

  // ---------------------------------------------------------------- color
  const RAMP = ["#cde2fb", "#b7d3f6", "#9ec5f4", "#86b6ef", "#6da7ec", "#5598e7", "#3987e5", "#2a78d6", "#256abf", "#1c5cab", "#184f95", "#104281", "#0d366b"];
  function rampAt(t) {
    // t in [0,1]: 0 = low (near the surface), 1 = high. Dark mode flips so low values recede into the dark surface.
    const idx = Math.round(Math.max(0, Math.min(1, t)) * (RAMP.length - 1));
    return isDark() ? RAMP[RAMP.length - 1 - idx] : RAMP[idx];
  }

  const METRICS = {
    rank: {
      label: "AI readiness rank",
      value: rankOf,
      t: (n) => (n.oxford ? (195 - n.oxford.rank) / 188 : null), // #7 -> 1, #195 -> 0
      lo: "#195", hi: "#7", loLabel: "Lower readiness", hiLabel: "Higher readiness",
      source: "oxford",
    },
  };

  // ---------------------------------------------------------------- governance model (data/models.js)
  // Four coded fields per nation. The first three values of a field take the three categorical colours, a
  // fourth ("more than one") a dark neutral, and the last ("none on record") the same grey as unranked nations.
  const MODEL = D.model || { fields: [], refs: {}, codes: {} };
  const MODEL_FIELDS = MODEL.fields.map((f) => ({ ...f, values: f.values.map(([v, label, def], i, all) => ({ v, label, def,
    color: i === all.length - 1 ? "var(--na)" : i < 3 ? `var(--cat-${i + 1})` : "var(--cat-mix)" })) }));
  const fieldOf = (key) => MODEL_FIELDS.find((f) => f.key === key);
  const CODES = new Map();
  // A nation's code for one field: its value (label, rule, colour) and what it rests on. A basis entry is the
  // start of a fact on the nation's page, "@id" for an agreement, or "#key" for a membership in MODEL.refs.
  function codeOf(n, key) {
    const ck = `${n.id}:${key}`;
    if (CODES.has(ck)) return CODES.get(ck);
    const f = fieldOf(key), raw = (MODEL.codes[n.id] || {})[key] || [];
    const val = f.values.find((x) => x.v === raw[0]) || f.values[f.values.length - 1];
    const basis = raw.slice(1).map((b) => {
      if (b[0] === "@") { const c = (D.collaborations || []).find((x) => x.id === b.slice(1)); return c ? { kind: "agreement", text: c.short || c.title, href: `#collab/${c.id}` } : null; }
      if (b[0] === "#") { const r = MODEL.refs[b.slice(1)]; return r ? { kind: "ref", text: r.text, source: r.source } : null; }
      const i = n.facts.findIndex((x) => x.text.startsWith(b));
      return i < 0 ? null : { kind: "fact", text: n.facts[i].text, href: `#${n.id}/f${i}` };
    });
    if (basis.includes(null)) console.warn(`Atlas model: a basis for ${n.id}.${key} no longer matches a fact or agreement`);
    const code = { field: f, ...val, basis: basis.filter(Boolean) };
    CODES.set(ck, code);
    return code;
  }
  // Where a reader should land to check a code: its first fact or agreement, else the nation's page.
  const evidenceHref = (n, key) => (codeOf(n, key).basis.find((b) => b.href) || { href: `#${n.id}` }).href;
  const swatch = (color) => el("i", { class: "sw", style: `background:${color}` });
  const codeChip = (code) => el("span", { class: "code-chip", title: code.def }, swatch(code.color), code.label);
  // Counts of nations per value of a field, as a segmented bar with a legend.
  function shareBar(key, list) {
    const f = fieldOf(key), groups = f.values.map((val) => ({ ...val, n: list.filter((x) => codeOf(x, key).v === val.v).length })).filter((g) => g.n);
    return el("div", { class: "share" },
      el("div", { class: "levelbar share-bar", role: "img", "aria-label": groups.map((g) => `${g.label}: ${g.n}`).join(", ") },
        groups.map((g) => el("span", { style: `flex:${g.n};background:${g.color}`, title: `${g.label}: ${g.n}` }))),
      el("div", { class: "legend" }, groups.map((g) => el("span", { title: g.def }, swatch(g.color), `${g.label}: ${g.n}`))));
  }
  // The card on a nation's page: each field, its value, the rule behind the value, and the facts it rests on.
  function modelCard(n) {
    if (!MODEL.codes[n.id]) return [];
    const row = (f) => {
      const c = codeOf(n, f.key);
      return el("div", { class: "gm-row" },
        el("div", { class: "gm-field" }, el("div", { class: "gm-label" }, f.label), el("div", { class: "gm-q" }, f.q)),
        el("div", { class: "gm-value" },
          el("div", { class: "gm-chip" }, codeChip(c)),
          el("p", { class: "gm-def" }, c.def),
          c.basis.length ? el("ul", { class: "gm-basis" }, c.basis.map((b) => el("li", {},
            b.kind === "fact" ? el("a", { href: b.href }, b.text.length > 110 ? `${b.text.slice(0, 108).replace(/\s+\S*$/, "")}…` : b.text)
              : b.kind === "agreement" ? el("a", { href: b.href }, `Agreement: ${b.text}`)
              : el("span", {}, b.text, b.source ? [" ", el("a", { class: "src", href: b.source.u, target: "_blank", rel: "noopener noreferrer", title: b.source.t }, domain(b.source.u), " ↗")] : null)))) : null));
    };
    return [el("section", { class: "section" },
      sectionHead("Governance model", `How Atlas codes ${n.name}'s approach so it can be compared with other nations. Each code is an editorial reading of the sourced facts it lists; the rules are in Method.`),
      el("div", { class: "card gm" }, MODEL_FIELDS.map(row)))];
  }

  // ---------------------------------------------------------------- map
  let WORLD = null;
  function worldFeatures() {
    if (WORLD) return WORLD;
    if (!window.WORLD_TOPO || !window.topojson || !window.d3) return null;
    const fc = topojson.feature(WORLD_TOPO, WORLD_TOPO.objects.countries);
    fc.features = fc.features.filter((f) => f.id !== "010"); // drop Antarctica
    // Natural Earth gives Kosovo no ISO number; match it by the code used in data/ (XKX).
    for (const f of fc.features) if (f.id == null && f.properties && f.properties.name === "Kosovo") f.id = "XKX";
    // A bounding circle per country (centre and angular radius), so the globe can skip countries on its far side.
    const noop = () => {};
    for (const f of fc.features) {
      const c = d3.geoCentroid(f);
      let r = 0;
      d3.geoStream(f, { point(x, y) { r = Math.max(r, d3.geoDistance(c, [x, y])); }, lineStart: noop, lineEnd: noop, polygonStart: noop, polygonEnd: noop, sphere: noop });
      f.cap = { c, r };
    }
    WORLD = fc;
    return WORLD;
  }

  // ---------------------------------------------------------------- maps
  // One component draws every map, in one of two styles the reader can switch between: a 3D globe (an
  // orthographic projection turned by dragging, drawn as a lit sphere with an atmosphere glow and a shaded edge)
  // or a flat 2D world map (Natural Earth projection, dragged to slide). The choice is remembered and applies to
  // every map. Callers register onDraw to position their own marks: `over` holds lines, `top` holds dots and
  // labels in screen space.
  let GLOBE_SEQ = 0, GRATICULE = null;
  const DEG = 180 / Math.PI;
  const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrowScreen = () => matchMedia("(max-width: 700px)").matches;
  let MAP_MODE = "globe";
  try { if (localStorage.getItem("wv-mapmode") === "flat") MAP_MODE = "flat"; } catch {}
  const MAPS = new Set();
  function setMapMode(mode) {
    MAP_MODE = mode === "flat" ? "flat" : "globe";
    try { localStorage.setItem("wv-mapmode", MAP_MODE); } catch {}
    for (const m of MAPS) { if (m.svg.isConnected) m.setMode(MAP_MODE); else MAPS.delete(m); }
  }
  function createGlobe({ W, H, label, pad = 16, minK = 1, maxK = 10, view0, home, onUser, cls = "", fills, flatH, modeSwitch = true }) {
    const world = worldFeatures();
    if (!world) return null;
    if (!GRATICULE) GRATICULE = d3.geoGraticule10();
    for (const m of MAPS) if (m.seen && !m.svg.isConnected) MAPS.delete(m);
    const gid = `globe${++GLOBE_SEQ}`;
    const cx = W / 2, gy = H / 2, R0 = Math.min(W, H) / 2 - pad;
    const proj = d3.geoOrthographic().translate([cx, gy]).clipAngle(90).precision(0.5).clipExtent([[-2, -2], [W + 2, H + 2]]);
    // The flat map fills the width; its frame is only as tall as the map needs. `flat0` is the unzoomed map,
    // used to turn places into positions; `flatProj` is the same map at the current zoom and position.
    const flat0 = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], world);
    let fb = d3.geoPath(flat0).bounds(world);
    const HF = flatH || Math.min(H, Math.ceil(fb[1][1] - fb[0][1]) + 12);
    flat0.fitExtent([[6, 6], [W - 6, HF - 6]], world);
    fb = d3.geoPath(flat0).bounds(world);
    const s0 = flat0.scale(), t0 = flat0.translate();
    const flatProj = d3.geoNaturalEarth1().scale(s0).translate(t0).precision(0.5).clipExtent([[-2, -2], [W + 2, HF + 2]]);
    const view = { ...view0 };
    // In flat mode `fv` is the point of the unzoomed map that sits in the middle of the frame.
    const fv = { x: cx, y: HF / 2 };
    let flat = false, h = H, R = R0, rotate = d3.geoRotation([-view.lon, -view.lat]);

    // ---- drawing. The sphere, sea and countries are painted on a canvas, which stays smooth while the map
    // moves; an SVG laid over it holds the caller's routes, dots and labels and takes the pointer.
    const canvas = el("canvas", { class: "globe-canvas", "aria-hidden": "true" }), ctx = canvas.getContext("2d");
    const path = d3.geoPath(proj, ctx);
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", tabindex: "0", class: `globe ${cls}` });
    const over = s("g", {}), top = s("g", {});
    svg.append(over, top);
    // `box` holds the canvas and the SVG at the same size; `stage` adds the controls and can go full screen.
    const box = el("div", { class: "globe-box" }, canvas, svg);
    const stage = el("div", { class: "globe-stage", style: `--ar:${W}/${H}` }, box);
    // One shape per country. `fills(feature)` may give it a colour and an id for hit-testing. A fill is a CSS
    // colour, a CSS variable, or "@on" / "@home" for the two highlight styles.
    const shapes = world.features.map((f) => { const a = (fills && fills(f)) || {}; return { f, id: a.id || null, fill: a.fill || null }; });
    const byIso = new Map(shapes.map((sh) => [sh.f.id, sh]));
    let outlined = null;
    // Canvas cannot read CSS variables, so colours are looked up from the page once per map. Maps are rebuilt
    // when the theme changes, which refreshes them.
    let theme = null;
    const readTheme = () => {
      const cs = getComputedStyle(document.documentElement), v = (name) => cs.getPropertyValue(name).trim();
      const rgb = (c) => { const m = /^#([0-9a-f]{3,8})$/i.exec(c); if (!m) return [128, 128, 128]; const x = m[1].length < 6 ? [...m[1]].map((d) => d + d).join("") : m[1]; return [0, 2, 4].map((i) => parseInt(x.slice(i, i + 2), 16)); };
      const alpha = (c, a) => `rgba(${rgb(c).join(",")},${a})`, mix = (a, b, w) => { const x = rgb(a), y = rgb(b); return `rgb(${x.map((q, i) => Math.round(q * w + y[i] * (1 - w))).join(",")})`; };
      const num = (name) => parseFloat(v(name)) || 0;
      theme = { v, alpha, land: v("--land"), stroke: v("--land-stroke"), ink: v("--ink"), accent: v("--accent"), grat: v("--globe-grat"),
        on: mix(v("--accent"), v("--land"), 0.38), seaLit: v("--globe-sea-lit"), seaShade: v("--globe-sea-shade"),
        glow: v("--globe-glow"), glowA: num("--globe-glow-a"), limb: v("--globe-limb"), limbA: num("--globe-limb-a"),
        hl: v("--globe-hl"), hlA: num("--globe-hl-a"), shadowA: num("--globe-shadow-a"), vars: new Map() };
    };
    const colour = (c) => {
      if (!c.startsWith("var(")) return c;
      if (!theme.vars.has(c)) theme.vars.set(c, theme.v(c.slice(4, -1)));
      return theme.vars.get(c);
    };
    const disc = (x, y, r, fill) => { ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fillStyle = fill; ctx.fill(); };
    const radial = (x, y, r, stops) => { const g = ctx.createRadialGradient(x, y, 0, x, y, r); for (const [o, c] of stops) g.addColorStop(o, c); return g; };

    const drawFns = [], settleFns = [];
    let frame = 0, settleTimer = 0;
    const draw = () => {
      cancelAnimationFrame(frame); frame = 0;
      if (svg.isConnected) api.seen = true;
      if (!theme) readTheme();
      // The canvas is sized to the pixels it covers on screen, so it stays sharp at any width.
      const scale = ((box.clientWidth || W) / W) * Math.min(window.devicePixelRatio || 1, 2);
      const pw = Math.round(W * scale), ph = Math.round(h * scale);
      if (canvas.width !== pw || canvas.height !== ph) { canvas.width = pw; canvas.height = ph; }
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, W, h);
      ctx.lineJoin = "round";
      if (flat) {
        flatProj.scale(s0 * view.k).translate([cx + view.k * (t0[0] - fv.x), h / 2 + view.k * (t0[1] - fv.y)]);
        // Keep lon/lat in step with the middle of the frame, so the view carries over to the globe.
        const g = flat0.invert([fv.x, fv.y]);
        if (g && isFinite(g[0]) && isFinite(g[1])) { view.lon = g[0]; view.lat = g[1]; }
      } else {
        R = R0 * view.k;
        proj.rotate([-view.lon, -view.lat]).scale(R);
        rotate = d3.geoRotation([-view.lon, -view.lat]);
        // Soft shadow under the globe, the atmosphere glow around it, then the lit sea.
        if (theme.shadowA) { ctx.save(); ctx.translate(cx, gy + R * 1.035); ctx.scale(1, 0.09); disc(0, 0, R * 0.78, radial(0, 0, R * 0.78, [[0, theme.alpha("#000000", theme.shadowA)], [1, theme.alpha("#000000", 0)]])); ctx.restore(); }
        disc(cx, gy, R * 1.14, radial(cx, gy, R * 1.14, [[0.84, theme.alpha(theme.glow, 0)], [0.885, theme.alpha(theme.glow, theme.glowA)], [1, theme.alpha(theme.glow, 0)]]));
        disc(cx, gy, R, radial(cx - 0.28 * R, gy - 0.4 * R, 1.56 * R, [[0, theme.seaLit], [1, theme.seaShade]]));
      }
      ctx.beginPath(); path(GRATICULE); ctx.strokeStyle = theme.grat; ctx.lineWidth = 0.6; ctx.stroke();
      // Countries on the far side of the globe are skipped. Plain land is painted in one pass; coloured and
      // highlighted countries follow, grouped by colour.
      const seen = flat ? shapes : shapes.filter((sh) => d3.geoDistance(sh.f.cap.c, [view.lon, view.lat]) < Math.PI / 2 + sh.f.cap.r);
      const groups = new Map();
      ctx.beginPath();
      for (const sh of seen) {
        if (!sh.fill) path(sh.f);
        else { if (!groups.has(sh.fill)) groups.set(sh.fill, []); groups.get(sh.fill).push(sh); }
      }
      ctx.fillStyle = theme.land; ctx.fill(); ctx.strokeStyle = theme.stroke; ctx.lineWidth = 0.6; ctx.stroke();
      for (const [fill, list] of groups) {
        const special = fill === "@on" || fill === "@home";
        ctx.beginPath(); for (const sh of list) path(sh.f);
        ctx.fillStyle = fill === "@on" ? theme.on : fill === "@home" ? theme.accent : colour(fill); ctx.fill();
        ctx.strokeStyle = special ? theme.accent : theme.stroke; ctx.lineWidth = special ? 1 : 0.6; ctx.stroke();
      }
      if (outlined) { ctx.beginPath(); path(outlined.f); ctx.strokeStyle = theme.ink; ctx.lineWidth = 1.5; ctx.stroke(); }
      if (!flat) {
        // Shading towards the edge and a highlight from the upper left make the disc read as a sphere.
        disc(cx, gy, R, radial(cx, gy, R, [[0.58, theme.alpha(theme.limb, 0)], [0.86, theme.alpha(theme.limb, theme.limbA * 0.32)], [1, theme.alpha(theme.limb, theme.limbA)]]));
        disc(cx, gy, R, radial(cx - 0.36 * R, gy - 0.48 * R, 1.16 * R, [[0, theme.alpha(theme.hl, theme.hlA)], [1, theme.alpha(theme.hl, 0)]]));
      }
      for (const fn of drawFns) fn();
      // Work that only matters once the map is still (hit areas for routes) waits for a short pause.
      if (settleFns.length) { clearTimeout(settleTimer); settleTimer = setTimeout(() => { if (svg.isConnected) for (const fn of settleFns) fn(); }, 120); }
    };
    // Coalesce redraws to one per frame. A hidden tab gets no frames, so draw straight away there.
    const invalidate = () => { if (document.hidden) draw(); else if (!frame) frame = requestAnimationFrame(draw); };
    // Redraw at the right resolution once the map is on the page, and whenever its width changes.
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => { if (box.clientWidth) invalidate(); }).observe(box);
    // The covered country under a point of the frame, by the id given in `fills`.
    const featureAt = (px, py) => {
      if (!flat && Math.hypot(px - cx, py - gy) > R) return null;
      const g = (flat ? flatProj : proj).invert([px, py]);
      if (!g || !isFinite(g[0]) || !isFinite(g[1])) return null;
      const hit = shapes.find((sh) => sh.id && d3.geoDistance(sh.f.cap.c, g) <= sh.f.cap.r + 1e-6 && d3.geoContains(sh.f, g));
      return hit ? hit.id : null;
    };

    // ---- geometry helpers for callers
    // Screen position of a [lon, lat] point, and z > 0 when it can be seen (on the globe: the side facing the reader).
    const point = (geo) => {
      if (flat) { const p = flatProj(geo); return { x: p[0], y: p[1], z: 1 }; }
      const [l, p] = rotate(geo), lr = l / DEG, pr = p / DEG, cp = Math.cos(pr);
      return { x: cx + R * cp * Math.sin(lr), y: gy - R * Math.sin(pr), z: cp * Math.cos(lr) };
    };
    // A route between two places, sampled once for both styles. On the globe it rises off the surface in the
    // middle, like a flight path, and longer routes rise higher. On the flat map it is a gentle bow that takes
    // the short way round the date line.
    const arcSamples = (a, b, lift = 1) => {
      const dist = d3.geoDistance(a, b), interp = d3.geoInterpolate(a, b);
      const n = Math.max(10, Math.ceil(dist * 26)), up = lift * Math.min(0.4, 0.05 + dist * 0.19);
      const dLon = ((b[0] - a[0] + 540) % 360) - 180, dLat = b[1] - a[1], len = Math.hypot(dLon, dLat) || 1;
      const side = dLon >= 0 ? 1 : -1; // bow towards the north
      return {
        globe: Array.from({ length: n + 1 }, (_, i) => ({ g: interp(i / n), up: 1 + up * Math.sin((Math.PI * i) / n) })),
        flat: Array.from({ length: 25 }, (_, i) => {
          const t = i / 24, off = side * lift * 0.16 * Math.sin(Math.PI * t);
          return [((a[0] + dLon * t - dLat * off + 540) % 360) - 180, Math.max(-84, Math.min(88, a[1] + dLat * t + dLon * off))];
        }),
      };
    };
    // Projects a route for the current view. On the globe, parts behind it are hidden unless they rise past the edge.
    const arcPath = (samples) => {
      let d = "", pen = false;
      if (flat) {
        const jump = ((fb[1][0] - fb[0][0]) * view.k) / 2;
        let px = 0;
        for (const g of samples.flat) {
          const [x, y] = flatProj(g);
          // A jump across the map means the route crossed the date line: lift the pen and carry on from the other side.
          d += `${pen && Math.abs(x - px) < jump ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
          px = x; pen = true;
        }
        return d;
      }
      for (const { g, up } of samples.globe) {
        const [l, p] = rotate(g), lr = l / DEG, pr = p / DEG, cp = Math.cos(pr);
        const x = cp * Math.sin(lr) * up, y = Math.sin(pr) * up;
        // Visible when on the near side, or on the far side but high enough to show past the edge.
        if (cp * Math.cos(lr) >= 0 || x * x + y * y > 1) { d += `${pen ? "L" : "M"}${(cx + R * x).toFixed(1)},${(gy - R * y).toFixed(1)}`; pen = true; }
        else pen = false;
      }
      return d;
    };

    // ---- motion: one of fly, spin or glide runs at a time
    const clampK = (k) => Math.max(minK, Math.min(maxK, k));
    const clampView = () => {
      view.k = clampK(view.k);
      if (flat) {
        // The flat map stays in its frame: centred while it is smaller than the frame, edge to edge once larger.
        const lim = (v, lo, hi, half) => (hi - lo <= 2 * half ? (lo + hi) / 2 : Math.max(lo + half, Math.min(hi - half, v)));
        fv.x = lim(fv.x, fb[0][0] - 6, fb[1][0] + 6, W / 2 / view.k);
        fv.y = lim(fv.y, fb[0][1] - 6, fb[1][1] + 6, HF / 2 / view.k);
      } else {
        view.lat = Math.max(-80, Math.min(80, view.lat));
        view.lon = ((view.lon + 540) % 360) - 180;
      }
    };
    // Move the view by a drag of (dx, dy) in frame units: the globe turns, the flat map slides.
    const nudge = (dx, dy) => {
      if (flat) { fv.x -= dx / view.k; fv.y -= dy / view.k; }
      else { view.lon -= (dx * DEG) / R; view.lat += (dy * DEG) / R; }
      clampView();
    };
    let anim = 0, flight = 0, spinning = false, hover = false;
    const stopMotion = () => { cancelAnimationFrame(anim); anim = 0; flight++; spinning = false; };
    const user = () => { stopMotion(); if (onUser) onUser(); };
    // Animate to a place and zoom. `target` is { lon, lat, k }; leave out lon/lat to zoom on the spot. In flat
    // mode `target.at` may give the position on the unzoomed map directly.
    const flyTo = (target, ms = 900) => {
      stopMotion();
      const from = flat ? [fv.x, fv.y] : [view.lon, view.lat], k0 = view.k, k1 = clampK(target.k ?? view.k);
      let to = from;
      if (flat && target.at) to = target.at;
      else if (target.lon != null) {
        to = flat ? flat0([target.lon, target.lat]) : [target.lon, Math.max(-80, Math.min(80, target.lat))];
        if (!to || !isFinite(to[0]) || !isFinite(to[1])) to = from;
      }
      const d = [flat ? to[0] - from[0] : ((to[0] - from[0] + 540) % 360) - 180, to[1] - from[1]];
      const put = (e, k) => {
        const x = from[0] + d[0] * e, y = from[1] + d[1] * e;
        if (flat) { fv.x = x; fv.y = y; } else { view.lon = x; view.lat = y; }
        view.k = k; clampView(); draw();
      };
      if (!ms || reducedMotion() || document.hidden) { put(1, k1); return; }
      const far = Math.min(1, flat ? Math.hypot(d[0], d[1]) / (W * 0.6) : Math.hypot(d[0] * Math.cos(from[1] / DEG), d[1]) / 150);
      const me = flight, start = performance.now();
      const ease = (u) => 0.5 - 0.5 * Math.cos(Math.PI * u); // sine in-out: eases in and out softly
      let arrived = false;
      const step = (now) => {
        if (me !== flight || !svg.isConnected) return;
        const u = Math.min(1, (now - start) / ms), e = ease(u);
        // Pull back a little on long moves so they read as travel.
        put(e, Math.exp(Math.log(k0) + (Math.log(k1) - Math.log(k0)) * e) * (1 - 0.22 * far * Math.sin(Math.PI * e)));
        if (u < 1) anim = requestAnimationFrame(step); else arrived = true;
      };
      anim = requestAnimationFrame(step);
      // If frames stop arriving (a background tab), land on the target anyway.
      setTimeout(() => { if (me === flight && !arrived && svg.isConnected) { flight++; put(1, k1); } }, ms + 250);
    };
    // Face a set of places and zoom until they fill the frame.
    const fitPoints = (pts, { ms = 900, maxK: cap = maxK, padPx = 60 } = {}) => {
      if (flat) {
        const ps = pts.map((p) => flat0(p)), xs = ps.map((p) => p[0]), ys = ps.map((p) => p[1]);
        const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
        const k = Math.min(cap, (W - 2 * padPx) / Math.max(x1 - x0, 1), (HF - 2 * Math.min(padPx, HF / 4)) / Math.max(y1 - y0, 1));
        flyTo({ at: [(x0 + x1) / 2, (y0 + y1) / 2], k: Math.max(1, k) }, ms);
        return;
      }
      let c = pts.length > 1 ? d3.geoCentroid({ type: "MultiPoint", coordinates: pts }) : pts[0];
      if (!isFinite(c[0]) || !isFinite(c[1])) c = pts[0];
      const far = Math.max(0, ...pts.map((p) => d3.geoDistance(p, c)));
      const room = Math.min(W, H) / 2 - padPx;
      const k = far > 1.2 ? 1 : Math.min(cap, room / (R0 * Math.max(Math.sin(far), 0.02)));
      flyTo({ lon: c[0], lat: c[1], k: Math.max(1, k) }, ms);
    };
    // Slow idle turn that shows the globe has a far side. Pauses under the pointer and ends at the first interaction.
    const spin = (degPerSec = 3) => {
      if (reducedMotion() || flat) return;
      stopMotion(); spinning = true;
      let last = performance.now();
      const step = (now) => {
        if (!spinning || flat || !svg.isConnected) return;
        // About 30 frames a second is plenty for a slow idle turn, and halves the work.
        if (now - last >= 30) {
          const dt = Math.min(60, now - last); last = now;
          if (!hover) { view.lon += (degPerSec * dt) / 1000; clampView(); draw(); }
        }
        anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    };
    const zoomBy = (f) => flyTo({ k: view.k * f }, 250);

    // ---- pointer, wheel and keyboard
    const toSvg = (e) => { const r = svg.getBoundingClientRect(); return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * h]; };
    const hintEl = el("div", { class: "map-hint", hidden: true });
    let hintTimer = 0;
    const pts = new Map();
    let moved = 0, last = null, pinch0 = null, vel = [0, 0], lastT = 0, wheelArmed = false;
    svg.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      user(); wheelArmed = true;
      pts.set(e.pointerId, toSvg(e));
      moved = 0; last = toSvg(e); vel = [0, 0]; lastT = e.timeStamp;
      if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch0 = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) || 1, k: view.k }; }
    });
    svg.addEventListener("pointermove", (e) => {
      if (!pts.has(e.pointerId)) return;
      const p = toSvg(e);
      pts.set(e.pointerId, p);
      if (pts.size === 2 && pinch0) {
        const [a, b] = [...pts.values()];
        view.k = (pinch0.k * Math.hypot(a[0] - b[0], a[1] - b[1])) / pinch0.d;
        moved += 10; clampView(); invalidate();
        return;
      }
      const dx = p[0] - last[0], dy = p[1] - last[1];
      moved += Math.abs(dx) + Math.abs(dy);
      // Take over the pointer only once a drag has clearly begun, so plain clicks still reach dots and lines.
      if (moved > 5 && !svg.classList.contains("is-dragging")) { svg.classList.add("is-dragging"); try { svg.setPointerCapture(e.pointerId); } catch {} }
      const dt = Math.max(1, e.timeStamp - lastT);
      nudge(dx, dy);
      vel = [dx / dt, dy / dt]; lastT = e.timeStamp; last = p;
      invalidate();
    });
    const release = (e) => {
      if (!pts.has(e.pointerId)) return;
      pts.delete(e.pointerId);
      if (pts.size < 2) pinch0 = null;
      if (pts.size === 1) last = [...pts.values()][0];
      if (pts.size) return;
      svg.classList.remove("is-dragging");
      // A flick keeps the map moving for a moment.
      if (e.type !== "pointerup" || e.timeStamp - lastT > 80 || Math.hypot(vel[0], vel[1]) < 0.14 || reducedMotion()) return;
      const me = flight;
      let prev = performance.now();
      const step = (now) => {
        if (me !== flight || !svg.isConnected) return;
        const dt = Math.min(40, now - prev); prev = now;
        nudge(vel[0] * dt, vel[1] * dt);
        vel = [vel[0] * 0.93, vel[1] * 0.93];
        draw();
        if (Math.hypot(vel[0], vel[1]) > 0.02) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    };
    svg.addEventListener("pointerup", release);
    svg.addEventListener("pointercancel", release);
    svg.addEventListener("pointerenter", () => { hover = true; });
    // Scroll-zoom stays on only while the pointer is over the map, so page scrolling is not taken over later.
    svg.addEventListener("pointerleave", () => { hover = false; wheelArmed = false; });
    svg.addEventListener("wheel", (e) => {
      if (!(wheelArmed || e.ctrlKey || e.metaKey)) {
        hintEl.hidden = false; clearTimeout(hintTimer); hintTimer = setTimeout(() => { hintEl.hidden = true; }, 1800);
        return;
      }
      e.preventDefault();
      user();
      view.k *= Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018));
      clampView(); invalidate();
    }, { passive: false });
    svg.addEventListener("dblclick", (e) => {
      const [px, py] = toSvg(e);
      const geo = flat ? flatProj.invert([px, py]) : Math.hypot(px - cx, py - gy) < R ? proj.invert([px, py]) : null;
      if (geo && isFinite(geo[0]) && isFinite(geo[1])) { user(); flyTo({ lon: geo[0], lat: geo[1], k: view.k * 1.8 }, 450); }
    });
    svg.addEventListener("keydown", (e) => {
      const turn = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
      if (turn) { e.preventDefault(); user(); flyTo({ lon: view.lon + (turn[0] * 14) / view.k, lat: view.lat + (turn[1] * 14) / view.k, k: view.k }, 200); }
      else if (e.key === "+" || e.key === "=") { e.preventDefault(); user(); zoomBy(1.5); }
      else if (e.key === "-" || e.key === "_") { e.preventDefault(); user(); zoomBy(1 / 1.5); }
      else if (e.key === "0") { user(); api.reset(); }
    });

    // ---- 3D / 2D switch. One setting for the whole site; every map on the page follows it.
    const modeBtns = [["globe", "3D", "3D globe"], ["flat", "2D", "Flat 2D map"]].map(([mode, text, title]) =>
      el("button", { type: "button", class: "seg-btn", title, "aria-label": title, "data-mode": mode, onclick: () => setMapMode(mode) }, text));
    const applyMode = (mode) => {
      stopMotion();
      flat = mode === "flat"; h = flat ? HF : H;
      path.projection(flat ? flatProj : proj);
      svg.setAttribute("viewBox", `0 0 ${W} ${h}`);
      stage.style.setProperty("--ar", `${W}/${h}`);
      svg.classList.toggle("is-flat", flat); stage.classList.toggle("is-flat", flat);
      svg.setAttribute("aria-label", `${label} ${flat ? "Drag to move it" : "Drag to turn it"}, or use the arrow keys; plus and minus zoom.`);
      hintEl.textContent = `${flat ? "Drag to move the map" : "Drag to turn the globe"}. Click it, or hold ⌘/Ctrl, to zoom with scroll.`;
      for (const b of modeBtns) b.setAttribute("aria-pressed", String(b.dataset.mode === mode));
      // Carry the place being looked at across: the middle of the flat map is where the globe was facing.
      const at = flat0([view.lon, view.lat]);
      if (flat && at && isFinite(at[0]) && isFinite(at[1])) { fv.x = at[0]; fv.y = at[1]; }
      clampView();
    };

    const api = {
      svg, view, over, top, W, draw, invalidate, point, arcSamples, arcPath, flyTo, fitPoints, spin, featureAt,
      get H() { return h; },
      get flat() { return flat; },
      onDraw: (fn) => drawFns.push(fn),
      onSettle: (fn) => settleFns.push(fn),
      // Recolour one country (by its ISO number) or outline one (by its `fills` id); both redraw on the next frame.
      setFill: (iso, fill) => { const sh = byIso.get(iso); if (sh && sh.fill !== (fill || null)) { sh.fill = fill || null; invalidate(); } },
      setOutline: (id) => { const sh = id ? shapes.find((x) => x.id === id) : null; if (sh !== outlined) { outlined = sh || null; invalidate(); } },
      wasDrag: () => moved > 5,
      zoomIn: () => { user(); zoomBy(1.6); },
      zoomOut: () => { user(); zoomBy(1 / 1.6); },
      reset: () => { user(); if (home) home(api); else flyTo(view0, 600); },
      // Switch style and frame the same subject again, since "zoomed to fit" differs between the two.
      setMode: (mode) => { if ((mode === "flat") === flat) return; applyMode(mode); if (home) home(api); else flyTo(view0, 0); },
    };
    // Full view: the browser's full-screen mode where it exists, otherwise a fixed overlay. Escape leaves either.
    const isFull = () => document.fullscreenElement === stage || stage.classList.contains("is-max");
    const syncFull = () => {
      const on = isFull();
      fullBtn.setAttribute("aria-label", on ? "Exit full view" : "Full view"); fullBtn.title = on ? "Exit full view" : "Full view"; fullBtn.textContent = on ? "⤡" : "⤢";
      // Only the full-screen element is shown, so the shared tooltip moves inside it while the map is in full view.
      if (on) stage.append(tip); else if (tip.parentNode === stage) document.body.append(tip);
      invalidate();
    };
    const overlay = (on) => { stage.classList.toggle("is-max", on); syncFull(); };
    api.toggleFull = () => {
      if (document.fullscreenElement === stage) document.exitFullscreen();
      else if (stage.classList.contains("is-max")) overlay(false);
      else if (stage.requestFullscreen) stage.requestFullscreen().then(syncFull, () => overlay(true));
      else overlay(true);
    };
    const fullBtn = el("button", { type: "button", class: "zoom-full", "aria-label": "Full view", title: "Full view", onclick: () => api.toggleFull() }, "⤢");
    document.addEventListener("fullscreenchange", syncFull);
    stage.addEventListener("keydown", (e) => { if (e.key === "Escape" && stage.classList.contains("is-max")) overlay(false); });
    const ctrl = zoomControls(api);
    ctrl.append(fullBtn);
    stage.append(ctrl, ...(modeSwitch ? [el("div", { class: "map-mode", role: "group", "aria-label": "Map style" }, modeBtns)] : []), hintEl);
    api.node = stage;
    applyMode(MAP_MODE);
    MAPS.add(api);
    return api;
  }
  // Finds room for a name beside a dot: tries eight positions around it and takes the first that covers no other
  // name or dot and stays inside the frame. `dots` are {x, y} in the same coordinates; `placed` collects the boxes already used.
  function labelSpot(x, y, w, placed, dots, frame) {
    const h = 14;
    const clash = (b) => b.x < 2 || b.y < 2 || b.x + b.w > frame.W - 2 || b.y + b.h > frame.H - 2 || placed.some((p) => b.x < p.x + p.w && b.x + b.w > p.x && b.y < p.y + p.h && b.y + b.h > p.y) ||
      dots.some((o) => o.x > b.x - 4 && o.x < b.x + b.w + 4 && o.y > b.y - 4 && o.y < b.y + b.h + 4);
    for (const [ox, oy] of [[10, -7], [-10 - w, -7], [-w / 2, -22], [-w / 2, 9], [10, -20], [10, 6], [-10 - w, -20], [-10 - w, 6]]) {
      const b = { x: x + ox, y: y + oy, w, h };
      if (!clash(b)) { placed.push(b); return b; }
    }
    return null;
  }
  function zoomControls(zoom) {
    return el("div", { class: "zoom-ctrl", role: "group", "aria-label": "Map zoom" },
      el("button", { type: "button", "aria-label": "Zoom in", title: "Zoom in", onclick: () => zoom.zoomIn() }, "+"),
      el("button", { type: "button", "aria-label": "Zoom out", title: "Zoom out", onclick: () => zoom.zoomOut() }, "−"),
      el("button", { type: "button", "aria-label": "Reset view", title: "Reset view", class: "zoom-reset", onclick: () => zoom.reset() }, "⟲"));
  }

  function worldMap() {
    const box = el("div", {});
    // Shaded by the readiness rank (a blue scale) or by one field of the governance model (one colour per value).
    const field = fieldOf(state.colorBy), metric = METRICS.rank;
    const shown = filtered();
    const isoMap = new Map(N.map((n) => [n.isoN, n]));
    const colorFor = (n) => { if (field) return codeOf(n, field.key).color; const t = metric.t(n); return t == null ? "var(--na)" : rampAt(t); };
    const sq = narrowScreen(), W = sq ? 420 : 960, H = sq ? 420 : 560;
    const HOME = { lon: 18, lat: 24, k: 1 };
    const regional = state.region !== "All";
    // "Home" is the whole world (the globe facing Europe and Africa), or the chosen region filling the frame.
    const goHome = (g, ms) => (regional ? g.fitPoints(shown.map((n) => n.geo), { ms, padPx: sq ? 44 : 80, maxK: 6 }) : g.flyTo(HOME, ms));
    const globe = createGlobe({ W, H, maxK: 14, view0: state.mapView || HOME, home: (g) => goHome(g, 600),
      label: `Map of the ${shown.length} nations, coloured by ${field ? field.label.toLowerCase() : metric.label}.`,
      fills: (f) => { const n = isoMap.get(f.id); return n && inRegion(n) ? { fill: colorFor(n), id: n.id } : null; } });
    if (!globe) {
      box.append(el("p", { class: "muted" }, "Map libraries failed to load."));
      return box;
    }

    // A dot at every capital, in screen space so it keeps its size while zooming; tiny states stay visible.
    let hovered = null;
    const markers = shown.map((n) => {
      const g = s("g", { class: "map-marker", tabindex: "0", role: "link", "aria-label": field ? `${n.name}: ${codeOf(n, field.key).label}` : `${n.name}: readiness rank ${rankText(n)}` });
      const dot = s("circle", { r: 5.5 }), text = s("text", { class: "map-label" }, shortName(n));
      dot.style.fill = colorFor(n);
      g.append(dot, text);
      g.addEventListener("focus", (e) => { setHover(n.id); showTip(e, nationTip(n)); });
      g.addEventListener("blur", () => { setHover(null); hideTip(); });
      g.addEventListener("keydown", (e) => { if (e.key === "Enter") location.hash = n.id; });
      globe.top.append(g);
      return { n, g, dot, text, w: shortName(n).length * 7.2 + 4, on: false, x: 0, y: 0 };
    });
    globe.onDraw(() => {
      const vis = [];
      for (const m of markers) {
        const p = globe.point(m.n.geo);
        m.on = p.z > 0.03 && p.x > -20 && p.x < W + 20 && p.y > -20 && p.y < globe.H + 20;
        m.g.style.display = m.on ? "" : "none";
        if (!m.on) continue;
        m.x = p.x; m.y = p.y;
        m.dot.setAttribute("cx", p.x); m.dot.setAttribute("cy", p.y);
        m.g.style.opacity = Math.min(1, 0.3 + p.z * 2.4); // fades as it nears the edge
        vis.push(m);
      }
      // Names appear once a region is chosen or the view is close, wherever one fits without covering a dot.
      const labels = regional || globe.view.k >= 2.2;
      const placed = [];
      for (const m of vis) {
        const spot = labels ? labelSpot(m.x, m.y, m.w, placed, vis, globe) : null;
        m.text.style.display = spot ? "" : "none";
        if (spot) { m.text.setAttribute("x", spot.x + 2); m.text.setAttribute("y", spot.y + 11); }
      }
      // Remember the view, so coming back to this page (or switching theme) does not reset it.
      state.mapView = { ...globe.view }; state.mapRegion = state.region;
    });
    function setHover(id) {
      if (hovered === id) return;
      hovered = id;
      for (const m of markers) m.g.classList.toggle("is-hover", m.n.id === id);
      globe.setOutline(id);
    }
    // The nation under the pointer: the nearest dot within reach, otherwise the country shape.
    const pick = (e) => {
      const r = globe.svg.getBoundingClientRect(), sx = W / r.width;
      const px = (e.clientX - r.left) * sx, py = (e.clientY - r.top) * sx;
      let best = null, reach = 14;
      for (const m of markers) if (m.on) { const d = Math.hypot(m.x - px, m.y - py); if (d < reach) { reach = d; best = m.n; } }
      if (best) return best;
      const id = globe.featureAt(px, py);
      return id ? byId(id) : null;
    };
    globe.svg.addEventListener("pointermove", (e) => {
      if (globe.svg.classList.contains("is-dragging")) { hideTip(); return; }
      const n = pick(e);
      setHover(n ? n.id : null);
      globe.svg.style.cursor = n ? "pointer" : "";
      if (n) showTip(e, nationTip(n)); else hideTip();
    });
    globe.svg.addEventListener("pointerleave", () => { setHover(null); hideTip(); });
    globe.svg.addEventListener("click", (e) => { if (globe.wasDrag()) return; const n = pick(e); if (n) location.hash = n.id; });

    // First visit: face home and turn slowly. Same region as last time: leave the view alone. New region: fly to it.
    if (!state.mapView) { goHome(globe, 0); if (!regional) globe.spin(3); }
    else if (state.mapRegion === state.region) globe.draw();
    else { globe.draw(); goHome(globe, 900); }

    const legend = el("div", { class: "legend map-legend" },
      field
        ? field.values.map((val) => { const k = shown.filter((n) => codeOf(n, field.key).v === val.v).length; return k ? el("span", { title: val.def }, swatch(val.color), `${val.label} · ${k}`) : null; })
        : [el("span", { class: "ramp-key" },
            `${metric.loLabel} ${metric.lo}`,
            el("span", { class: "ramp" }, [0.05, 0.3, 0.55, 0.8, 1].map((t) => el("i", { style: `background:${rampAt(t)}` }))),
            `${metric.hi} ${metric.hiLabel}`),
          shown.some((n) => !n.oxford) ? el("span", {}, el("i", { style: "background:var(--na)" }), "Not ranked") : null],
      el("span", {}, el("i", { style: "background:var(--land)" }), "Not covered"));
    box.append(
      el("div", { class: "map-head" }, el("span", { class: "muted small" }, field ? `${field.label}: ${field.q}` : `Shaded by ${metric.label} (Oxford Insights 2025)`), legend),
      globe.node);
    const order = (n) => field.values.findIndex((val) => val.v === codeOf(n, field.key).v);
    box.append(el("div", { class: "chart-foot" },
      tableToggle(box, () => (field
        ? table(["Nation", "Region", field.label], [...shown].sort((a, b) => order(a) - order(b) || a.name.localeCompare(b.name)).map((n) => [n.name, n.group, codeChip(codeOf(n, field.key))]))
        : table(["Nation", "Region", "Readiness rank"], [...shown].sort(byRank).map((n) => [n.name, n.group, rankText(n)]), [2]))),
      el("span", { class: "muted small" }, "· Source:"),
      field ? el("span", { class: "muted small" }, "Atlas coding of the sourced facts on each nation's page. Rules in ", el("a", { href: "#method" }, "Method"), ".") : sourceChips([S[metric.source]])));
    return box;
  }

  // ---------------------------------------------------------------- charts
  function pillarBars(n) {
    const med = PILLARS.map((_, i) => median(N.filter((x) => x.oxford).map((x) => x.oxford.scores[i])));
    const labelW = 190, plotW = 440, rowH = 36, barH = 20, T = 6, B = 24;
    const W = labelW + plotW + 60, H = T + PILLARS.length * rowH + B;
    const x = (v) => labelW + (v / 100) * plotW;
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", "aria-label": `${n.name} Oxford Insights pillar scores versus the median of the nations here` });
    for (let t = 0; t <= 100; t += 25) {
      svg.append(s("line", { x1: x(t), x2: x(t), y1: T, y2: H - B, class: t === 0 ? "axis" : "grid" }));
      svg.append(s("text", { x: x(t), y: H - 6, "text-anchor": "middle", class: "t-muted" }, String(t)));
    }
    PILLARS.forEach((p, i) => {
      const v = n.oxford.scores[i];
      const y = T + i * rowH + (rowH - barH) / 2;
      const w = Math.max(x(v) - x(0), 8), r = 4;
      svg.append(s("text", { x: 0, y: y + barH / 2 + 4, class: "t-ink" }, p));
      svg.append(s("path", { d: `M${x(0)},${y} h${w - r} a${r},${r} 0 0 1 ${r},${r} v${barH - 2 * r} a${r},${r} 0 0 1 -${r},${r} h-${w - r} Z`, fill: "var(--series-1)" }));
      svg.append(s("line", { x1: x(med[i]), x2: x(med[i]), y1: y - 4, y2: y + barH + 4, stroke: "var(--ink)", "stroke-width": 2, "stroke-linecap": "round" }));
      svg.append(s("text", { x: Math.max(x(v), x(med[i])) + 8, y: y + barH / 2 + 4, class: "t-ink", style: "font-variant-numeric:tabular-nums" }, v.toFixed(1)));
      const hit = s("rect", { x: x(0), y: y - 6, width: plotW + 40, height: barH + 12, class: "hit" });
      hoverable(hit, () => [
        el("div", { class: "tv" }, v.toFixed(2)),
        el("div", { class: "tl" }, `${n.name} · ${p}`),
        el("div", { class: "tl small" }, `Median of all ${N.length}: ${med[i].toFixed(2)} · Difference: ${(v - med[i] >= 0 ? "+" : "") + (v - med[i]).toFixed(1)}`),
      ]);
      svg.append(hit);
    });
    const box = el("div", {},
      el("div", { class: "legend" },
        el("span", {}, el("i", { style: "background:var(--series-1)" }), n.name),
        el("span", {}, el("i", { style: "background:var(--ink);width:2px;height:12px" }), `Median of all ${N.length} nations`)),
      el("div", { class: "chart" }, svg));
    box.append(el("div", { class: "chart-foot" },
      tableToggle(box, () => table(["Pillar", n.name, "Median"], PILLARS.map((p, i) => [p, n.oxford.scores[i].toFixed(2), med[i].toFixed(2)]), [1, 2])),
      el("span", { class: "muted small" }, " · Source:"), sourceChips([S.oxford])));
    return box;
  }

  // A small map in a nation's header: the globe turned to face it, or the flat map zoomed to its region,
  // with the nation filled and ringed. It follows the 3D/2D choice made on the larger maps.
  function locatorMap(n) {
    const size = 260;
    const frame = (g, ms) => g.flyTo(g.flat ? { lon: n.geo[0], lat: n.geo[1], k: 3 } : { lon: n.geo[0], lat: n.geo[1] * 0.7, k: 1 }, ms);
    const globe = createGlobe({ W: size, H: size, flatH: 176, pad: 24, maxK: 16, cls: "locator-globe", modeSwitch: false,
      view0: { lon: n.geo[0], lat: n.geo[1] * 0.7, k: 1 }, home: (g) => frame(g, 400),
      label: `Map showing where ${n.name} is.`, fills: (f) => (f.id === n.isoN ? { fill: "@home" } : null) });
    if (!globe) return null;
    const ring = s("circle", { class: "loc-ring", r: 11 }), dot = s("circle", { class: "loc-dot", r: 4.5 });
    globe.top.append(ring, dot);
    globe.onDraw(() => {
      const p = globe.point(n.geo);
      for (const c of [ring, dot]) { c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.style.display = p.z > 0 ? "" : "none"; }
    });
    frame(globe, 0);
    return el("div", { class: "locator" }, globe.node);
  }

  // ---------------------------------------------------------------- shared blocks
  function factItem(f, older, id) {
    return el("article", { class: "fact" + (older ? " is-older" : ""), id },
      el("div", { class: "fact-date" }, fmtDate(f.date)),
      el("div", {},
        f.topic ? el("span", { class: "fact-topic" }, f.topic) : null,
        el("p", { class: "fact-text" }, f.text),
        el("div", { class: "fact-meta" }, badge(f.level, f.sources.length), sourceChips(f.sources)),
        f.note ? el("p", { class: "note" }, f.note) : null));
  }
  const allClaims = () => N.flatMap((n) => [...n.facts, ...n.news]);
  // Newest first. Undated-precision items ("2025") sort as the start of that year.
  const byDateDesc = (a, b) => (dateValue(b.date) ?? 0) - (dateValue(a.date) ?? 0);
  const RECENT_FROM = 2024; // the user's focus: developments after 2023
  const isRecent = (x) => (dateValue(x.date) ?? 0) >= RECENT_FROM;
  // The opening of every page: a small label, the title, and a sentence or two of introduction.
  function pageHead(kicker, title, lede) {
    return el("header", { class: "page-head" }, el("span", { class: "kicker" }, kicker), el("h1", {}, title), lede ? el("p", { class: "lede" }, lede) : null);
  }
  // The preview image one of a news item's sources publishes for link previews (data/news-images.js). It is
  // loaded from that site, never copied here, and credited under the picture.
  // `used` holds the pictures already shown in the same list, so one picture never appears on two cards.
  function newsImage(item, used) {
    const map = D.images || {};
    for (const src of item.sources) {
      const url = map[src.u];
      if (url && !(used && used.has(url))) { if (used) used.add(url); return { url, src }; }
    }
    return null;
  }
  // A news item as a card: picture (or a plate with the flag when no source has one), who and when, headline,
  // summary, sources and the save / review buttons. `lead` lays it out wide for the top story.
  function newsCard(item, n, { why, lead, showCountry = true, used } = {}) {
    const img = newsImage(item, used), to = (img ? img.src : item.sources[0]).u;
    const media = el("a", { class: "nw-media", href: to, target: "_blank", rel: "noopener noreferrer", tabindex: "-1", "aria-hidden": "true" },
      el("span", { class: "nw-plate" }, el("span", {}, n.flag)));
    let credit = null;
    if (img) {
      const pic = el("img", { src: img.url, alt: "", loading: lead ? "eager" : "lazy", decoding: "async", referrerpolicy: "no-referrer" });
      credit = el("p", { class: "nw-credit" }, "Image: ", el("a", { href: img.src.u, target: "_blank", rel: "noopener noreferrer" }, domain(img.src.u)));
      // A picture that fails to load (moved, or blocked from other sites) falls back to the flag plate.
      pic.addEventListener("error", () => { pic.remove(); credit.remove(); });
      media.append(pic);
    }
    const text = el("div", { class: "nw-text" },
      el("div", { class: "nw-meta" }, showCountry ? [el("a", { href: `#${n.id}` }, `${n.flag} ${n.name}`), el("span", { "aria-hidden": "true" }, "·")] : null, el("time", {}, fmtDate(item.date))),
      el("h3", { class: "nw-title" }, item.title),
      el("p", { class: "nw-sum" }, item.summary),
      why && why.length ? el("p", { class: "news-why" }, why.join(" · ")) : null,
      item.note ? el("p", { class: "note" }, item.note) : null,
      el("div", { class: "nw-foot" }, el("div", { class: "fact-meta" }, badge(item.level, item.sources.length), sourceChips(item.sources)), itemActions(newsKey(item, n), newsSnap(item, n))));
    return el("article", { class: "nw-card" + (lead ? " nw-lead" : "") }, el("div", { class: "nw-pic" }, media, credit), text);
  }
  function sectionHead(title, sub) {
    return el("div", { class: "section-head" }, el("h2", {}, title), sub ? el("p", {}, sub) : null);
  }
  function regionFilter(onChange) {
    const row = el("div", { class: "filters", role: "group", "aria-label": "Filter by region" });
    const draw = () => row.replaceChildren(...["All", ...GROUPS].map((g) => {
      const count = g === "All" ? N.length : N.filter((n) => n.group === g).length;
      return el("button", { class: "chip-btn", type: "button", "aria-pressed": String(state.region === g), onclick: () => { state.region = g; draw(); onChange(); } }, `${g === "All" ? "All nations" : g} · ${count}`);
    }));
    draw();
    return row;
  }

  // Long rankings open on their top rows, with a toggle to reveal the rest.
  function expandable(build, total, { limit = 12, hint = "", noun = "nations" } = {}) {
    const box = el("div", { class: "expandable" });
    const collapsible = total > limit + 3;
    let open = !collapsible;
    const draw = () => {
      box.replaceChildren(build(open ? Infinity : limit));
      if (!collapsible) return;
      box.append(el("div", { class: "show-more-row" },
        open ? null : el("span", { class: "show-more-hint" }, `Showing the top ${limit} of ${total}${hint ? ` ${hint}` : ""}.`),
        el("button", { class: "show-more", type: "button", "aria-expanded": String(open), onclick: () => {
          open = !open; draw();
          if (!open) box.scrollIntoView({ block: "nearest" });
        } }, open ? "Show fewer" : `Show all ${total} ${noun}`)));
    };
    draw();
    return box;
  }

  // ---------------------------------------------------------------- views
  // One page for every country: a finder, the map, the comparison table, and how well sourced it all is.
  function renderNations() {

    // Finder: type a name or region; Enter opens the first match. With nothing typed, every country is listed by region.
    const search = el("input", { type: "search", class: "dir-search nations-search", placeholder: `Search ${N.length} countries…`, "aria-label": "Search countries" });
    const lists = el("div", { class: "nav-groups" });
    let browsing = false;
    const browse = el("button", { type: "button", class: "table-toggle", onclick: () => { browsing = !browsing; drawFinder(); } });
    // Matches are ranked: names that start with the text, then names that contain it, then regions that do.
    const score = (n, qq) => { const name = n.name.toLowerCase(); return name.startsWith(qq) ? 0 : name.includes(qq) ? 1 : n.region.toLowerCase().includes(qq) ? 2 : 3; };
    const drawFinder = () => {
      const qq = search.value.trim().toLowerCase();
      browse.textContent = browsing ? "Hide the list" : `Browse all ${N.filter(inRegion).length}`;
      browse.hidden = !!qq;
      // With nothing typed, a few well-known countries are offered as quick picks.
      if (!qq && !browsing) {
        const picks = ["sg", "in", "br", "ae", "ee", "id", "ng", "ch", "rw", "uy"].map(byId).filter((n) => n && inRegion(n));
        lists.replaceChildren(el("div", { class: "nchips finder-picks" }, el("span", { class: "filter-label" }, "Popular"), picks.map((n) => el("a", { class: "nchip", href: `#${n.id}` }, `${n.flag} ${n.name}`))));
        return;
      }
      if (qq) {
        const hits = N.filter((n) => inRegion(n) && score(n, qq) < 3).sort((x, y) => score(x, qq) - score(y, qq) || x.name.localeCompare(y.name));
        lists.replaceChildren(hits.length ? el("div", { class: "nav-group finder-hits" }, hits.map((n) => el("a", { href: `#${n.id}`, class: "nav-item" }, `${n.flag} ${n.name}`, el("span", { class: "muted small" }, ` · ${n.region}`))))
          : el("p", { class: "muted small" }, "No country matches."));
        return;
      }
      lists.replaceChildren(...GROUPS.map((g) => {
        const items = N.filter((n) => n.group === g && inRegion(n)).sort((x, y) => x.name.localeCompare(y.name));
        return items.length ? el("div", { class: "nav-group" }, el("div", { class: "nav-group-h" }, `${g} · ${items.length}`),
          items.map((n) => el("a", { href: `#${n.id}`, class: "nav-item" }, `${n.flag} ${n.name}`))) : null;
      }).filter(Boolean));
    };
    search.addEventListener("input", drawFinder);
    search.addEventListener("keydown", (e) => { if (e.key === "Enter") { const first = lists.querySelector(".nav-item"); if (first) location.hash = first.getAttribute("href"); } });

    // Everything below the filter row re-renders against the chosen region.
    const body = el("div", {});
    const drawBody = () => {
      hideTip();
      drawFinder();
      const list = filtered();
      // The map can be shaded by the readiness rank or by any field of the governance model.
      const mapSlot = el("div", {}), shadeRow = el("div", { class: "filters shade-by", role: "group", "aria-label": "Shade the map by" });
      const drawMap = () => {
        hideTip();
        shadeRow.replaceChildren(el("span", { class: "filter-label" }, "Shade by"), ...[["rank", "Readiness rank"], ...MODEL_FIELDS.map((f) => [f.key, f.label])].map(([k, t]) =>
          el("button", { class: "chip-btn small", type: "button", "aria-pressed": String(state.colorBy === k), onclick: () => { state.colorBy = k; drawMap(); } }, t)));
        mapSlot.replaceChildren(worldMap());
      };
      drawMap();
      // The table shows either strategy and readiness columns or the four model codes.
      const tableSlot = el("div", {}), viewRow = el("div", { class: "filters", role: "group", "aria-label": "Table columns" });
      const drawTable = () => {
        viewRow.replaceChildren(...[["basics", "Strategy and readiness"], ["model", "Governance model"]].map(([k, t]) =>
          el("button", { class: "chip-btn small", type: "button", "aria-pressed": String(state.tableView === k), onclick: () => { state.tableView = k; drawTable(); } }, t)));
        tableSlot.replaceChildren(expandable((k) => compareTable(list, k), list.length, { limit: 10, hint: "in this sort order" }));
      };
      drawTable();
      body.replaceChildren(...[
        el("section", { class: "section" },
          el("div", { class: "card" }, shadeRow,
            el("div", { class: "filter-bar map-region" }, el("span", { class: "filter-label" }, "Region"), regionFilter(drawBody)),
            mapSlot,
            el("p", { class: "note" }, "Singapore, Malta, Bahrain, Mauritius and other small states are too small to draw as shapes, so every country is also marked with a dot at its capital. Use 'Show as table' to see all of them at once."))),
        el("section", { class: "section" },
          sectionHead("At a glance", "Click a column header to sort; the top rows follow the sort."),
          el("div", { class: "card compare" }, viewRow, tableSlot, sourceLine("oxford", "wbNet"))),
        dataSources(),
      ]);
    };
    view.replaceChildren(
      pageHead("Nations", "AI Outside The Frontier", `${N.length} countries that neither build frontier AI models nor hold a key place in the AI supply chain, and how each is handling AI: strategies, rules, institutions, compute and partners. Search for a country, or find it on the map.`),
      el("div", { class: "card finder" }, el("div", { class: "finder-row" }, search, browse), lists),
      body);
    drawBody();
  }

  function compareTable(list, limit = Infinity) {
    const nameCols = [
      { h: "Nation", key: "name", get: (n) => n.name, cell: (n) => el("a", { href: `#${n.id}` }, `${n.flag} ${n.name}`) },
      { h: "Region", key: "group", get: (n) => n.group },
    ];
    // Model columns sort in codebook order, so nations with the same code sit together.
    const cols = state.tableView === "model" ? [...nameCols, ...MODEL_FIELDS.map((f) => ({ h: f.label, key: `m:${f.key}`,
      get: (n) => f.values.findIndex((val) => val.v === codeOf(n, f.key).v), cell: (n) => codeChip(codeOf(n, f.key)) }))] : [...nameCols,
      { h: "First AI strategy", key: "first", get: (n) => n.glance.firstStrategy },
      { h: "Latest strategy", key: "latest", get: (n) => n.glance.latestStrategy },
      { h: "Newest AI body", key: "body", get: (n) => n.glance.newestBodyDate || "", cell: (n) => (n.glance.newestBody === "—" ? "—" : `${n.glance.newestBody} (${fmtDate(n.glance.newestBodyDate)})`) },
      { h: "Readiness rank", key: "rank", num: true, get: (n) => rankOf(n) ?? 999, cell: rankText },
      { h: "Internet users", key: "net", num: true, get: (n) => (n.stats.internet ? n.stats.internet.v : -1), cell: (n) => (n.stats.internet ? `${n.stats.internet.v.toFixed(0)}%` : "n/a") },
    ];
    const wrap = el("div", {});
    const draw = () => {
      const col = cols.find((c) => c.key === state.sortKey) || cols.find((c) => c.key === "rank") || cols[0];
      const rows = [...list].sort((a, b) => {
        const x = col.get(a), y = col.get(b);
        return (x < y ? -1 : x > y ? 1 : 0) * state.sortDir;
      }).slice(0, limit);
      wrap.replaceChildren(el("table", { class: "data" },
        el("thead", {}, el("tr", {}, cols.map((c) =>
          el("th", { class: c.num ? "num" : null, "aria-sort": c.key === state.sortKey ? (state.sortDir > 0 ? "ascending" : "descending") : null },
            el("button", { class: "th-btn", type: "button", onclick: () => {
              if (state.sortKey === c.key) state.sortDir *= -1; else { state.sortKey = c.key; state.sortDir = c.key === "net" ? -1 : 1; }
              draw();
            } }, c.h, c.key === state.sortKey ? (state.sortDir > 0 ? " ↑" : " ↓") : ""))))),
        el("tbody", {}, rows.map((n) => el("tr", {}, cols.map((c) => el("td", { class: c.num ? "num" : null }, c.cell ? c.cell(n) : c.get(n))))))));
    };
    draw();
    return wrap;
  }

  // The broader datasets this site draws on, linked at the source instead of re-plotted here.
  function dataSources() {
    const link = (t, u) => el("a", { href: u, target: "_blank", rel: "noopener noreferrer" }, t, " ↗");
    const item = (name, what, ...links) => el("li", { class: "ds-item" },
      el("div", { class: "ds-name" }, name), el("p", { class: "ink2 small" }, what), el("div", { class: "ds-links" }, links));
    return el("section", { class: "section" },
      sectionHead("Where to find the wider data"),
      el("ul", { class: "card ds-list" },
        item("Oxford Insights · Government AI Readiness Index", "Readiness scores and pillar breakdowns for 195 governments. Source of the rank in the table.",
          link("Index page", "https://oxfordinsights.com/ai-readiness/government-ai-readiness-index-2025/"), link("2025 report (PDF)", S.oxford.u)),
        item("Microsoft AI Economy Institute · AI Diffusion reports", "Estimated share of working-age people using generative AI, by country, updated quarterly.",
          link("Reports", "https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/"), link("H2 2025 report (PDF)", S.msH2.u)),
        item("Stanford HAI · AI Index", "Annual report on research, investment, talent (LinkedIn data) and policy.",
          link("AI Index", "https://hai.stanford.edu/ai-index"), link("2026 report (PDF)", S.aiIndex.u)),
        item("OECD.AI Policy Observatory", "National AI strategies and policy initiatives, country by country.",
          link("OECD.AI", "https://oecd.ai/en/")),
        item("OECD Digital Economy Policy Platform", "Country profiles of digital and AI policy.",
          link("Country profiles", "https://depp.oecd.org/countries")),
        item("World Bank · World Development Indicators", "Population, GDP per capita and internet use, as shown on each nation page.",
          link("World Bank data", "https://data.worldbank.org/"))));
  }

  // Up to two key documents per nation (strategies, laws, official guidance), from data/documents.js.
  function keyDocuments(n) {
    const docs = (D.docs || {})[n.id] || [];
    const body = docs.length
      ? el("div", { class: "kd-list" }, docs.map((d) => el("div", { class: "kd" },
          el("span", { class: "kd-kind" }, d.kind),
          el("a", { class: "kd-title", href: d.u, target: "_blank", rel: "noopener noreferrer" }, d.t, " ↗"),
          el("span", { class: "kd-meta" }, [d.by, d.year].filter(Boolean).join(" · ")),
          d.note ? el("span", { class: "kd-note" }, d.note) : null,
          // Where the file is published, so readers can see its context.
          d.from ? el("span", { class: "kd-from" }, "From: ", el("a", { href: d.from.u, target: "_blank", rel: "noopener noreferrer" }, d.from.t, " ↗")) : null,
          itemActions(docKey(d, n), docSnap(d, n)))))
      : el("p", { class: "muted" }, "No official AI strategy or AI law document is listed for this nation yet.");
    return el("section", { class: "section" },
      sectionHead("Key documents", docs.length ? `The ${docs.length === 1 ? "document" : "two documents"} to read first on ${n.name}'s approach to AI.` : "Official strategies and laws, when there are any."),
      el("div", { class: "card" }, body));
  }
  // `focus` is the part of the address after the nation, e.g. "f3" in #sg/f3: open on that fact and mark it.
  function renderNation(n, focus) {
    const topics = ["All", ...TOPICS.filter((t) => n.facts.some((f) => f.topic === t)), ...new Set(n.facts.map((f) => f.topic).filter((t) => !TOPICS.includes(t)))];
    let active = "All";
    const list = el("div", { class: "facts" });
    const target = /^f\d+$/.test(focus || "") ? n.facts[+focus.slice(1)] : null;
    let showOlder = !!target && !isRecent(target);
    const item = (older) => (f) => factItem(f, older, `fact-${n.facts.indexOf(f)}`);
    const drawFacts = () => {
      const pool = n.facts.filter((f) => active === "All" || f.topic === active).sort(byDateDesc);
      const recent = pool.filter(isRecent), older = pool.filter((f) => !isRecent(f));
      const kids = recent.map(item(false));
      if (!recent.length) kids.push(el("p", { class: "muted empty" }, "No developments since 2024 in this topic."));
      if (older.length) {
        kids.push(el("div", { class: "older-toggle" },
          el("button", { type: "button", class: "table-toggle", "aria-expanded": String(showOlder), onclick: () => { showOlder = !showOlder; drawFacts(); } },
            showOlder ? "Hide earlier background" : `Show earlier background (${older.length} before 2024)`)));
        if (showOlder) kids.push(...older.map(item(true)));
      }
      list.replaceChildren(...kids);
    };
    const filterRow = el("div", { class: "filters topic-filter", role: "group", "aria-label": "Filter facts by topic" });
    const drawFilters = () => filterRow.replaceChildren(...topics.map((t) =>
      el("button", { class: "chip-btn", type: "button", "aria-pressed": String(t === active), onclick: () => { active = t; drawFilters(); drawFacts(); } },
        `${t} · ${t === "All" ? n.facts.length : n.facts.filter((f) => f.topic === t).length}`)));
    drawFilters(); drawFacts();

    const ms = n.msAdoption, st = n.stats;
    const tiles = el("div", { class: "tiles" },
      st.population ? tile("Population", compact(st.population.v), `${fmtInt(st.population.v)} (${st.population.year})`, st.population.src || S.wbPop) : tile("Population", "—", "Not reported by the World Bank", S.wbPop),
      st.gdpPerCapita ? tile("GDP per capita", `$${fmtInt(st.gdpPerCapita.v)}`, `current US$, ${st.gdpPerCapita.year}`, S.wbGdp) : tile("GDP per capita", "—", "Not reported by the World Bank", S.wbGdp),
      st.internet ? tile("Internet users", `${st.internet.v.toFixed(1)}%`, `of population, ${st.internet.year}`, S.wbNet) : tile("Internet users", "—", "Not reported by the World Bank", S.wbNet),
      n.oxford ? tile("AI readiness rank", `#${n.oxford.rank}`, `of ${OXFORD_TOTAL} · Oxford Insights 2025`, S.oxford) : tile("AI readiness rank", "—", "Not in the Oxford Insights index", S.oxford),
      ms
        ? tile("Uses generative AI", `${(ms.q2_2026 ?? ms.h2_2025).toFixed(1)}%`, ms.q2_2026 ? `working-age, Q2 2026 · world #${ms.rankLatest}` : "working-age, H2 2025", ms.q2_2026 ? S.msQ2 : S.msH2)
        : tile("Uses generative AI", "—", "Not reported separately by Microsoft", S.msH2));
    if (ms && ms.regional) tiles.lastChild.querySelector(".s").textContent = `${ms.regionLabel || "West Africa"} regional estimate, H2 2025`;

    // Unranked nations sort after the ranked ones, alphabetically.
    const ranked = [...N].sort((a, b) => byRank(a, b) || a.name.localeCompare(b.name));
    const pos = ranked.indexOf(n);
    const nRanked = N.filter((x) => x.oxford).length;
    view.replaceChildren(
      el("section", { class: "country-top" },
        el("div", { class: "country-head" },
          el("span", { class: "flag", "aria-hidden": "true" }, n.flag),
          el("div", {}, el("span", { class: "kicker" }, n.region), el("h1", {}, n.name), el("p", { class: "stance" }, n.stance),
            el("p", { class: "muted small", style: "margin-top:6px" }, n.oxford ? `#${pos + 1} of the ${nRanked} nations here in the Oxford Insights readiness index` : "Not in the Oxford Insights readiness index"))),
        locatorMap(n)),
      el("p", { class: "summary" }, n.summary),
      el("p", { class: "muted small", style: "margin-top:6px" }, "This summary is an editorial synthesis of the sourced facts below."),
      el("section", { class: "section" }, tiles),
      ...modelCard(n),
      keyDocuments(n),
      ...(n.oxford ? [el("section", { class: "section" },
        sectionHead("Readiness profile", `Oxford Insights 2025 pillar scores vs the median of the ${nRanked} nations here that it ranks.`),
        el("div", { class: "card" }, pillarBars(n)))] : []),
      ...nationPartners(n),
      el("section", { class: "section" },
        sectionHead("Policy & governance facts", `Newest first. ${n.facts.filter(isRecent).length} since 2024, plus earlier background on request.`),
        filterRow,
        el("div", { class: "card" }, list)),
      el("section", { class: "section" },
        sectionHead("Recent news", "Since 2024, newest first."),
        (() => {
          const items = [...n.news].filter(isRecent).sort(byDateDesc);
          const used = new Set();
          return items.length ? el("div", { class: "nw-grid" }, items.map((x) => newsCard(x, n, { showCountry: false, used }))) : el("div", { class: "card" }, el("p", { class: "muted empty" }, "No news items since 2024 in this dataset."));
        })()),
      el("nav", { class: "section pager", "aria-label": "Neighbouring nations by rank" },
        pos > 0 ? el("a", { href: `#${ranked[pos - 1].id}` }, `← ${ranked[pos - 1].flag} ${ranked[pos - 1].name}`) : el("span", {}),
        pos < ranked.length - 1 ? el("a", { href: `#${ranked[pos + 1].id}` }, `${ranked[pos + 1].flag} ${ranked[pos + 1].name} →`) : el("span", {})),
    );
    if (target) requestAnimationFrame(() => {
      const node = document.getElementById(`fact-${n.facts.indexOf(target)}`);
      if (node) { node.classList.add("is-target"); node.scrollIntoView({ block: "center" }); }
    });
  }
  function tile(label, value, sub, src) {
    return el("div", { class: "tile" },
      el("div", { class: "l" }, label),
      el("div", { class: "v" }, value),
      el("div", { class: "s" }, sub),
      el("div", { style: "margin-top:8px" }, el("a", { class: "src", href: src.u, target: "_blank", rel: "noopener noreferrer", title: src.t }, domain(src.u), " ↗")));
  }

  // ---- news ranking. There is no click or engagement data, so the relevance sorts read each item's own text,
  // sources and date. Every ranked item shows the signals that placed it, and Method explains the rules.
  const NEWS_SORTS = [["relevance", "Relevance"], ["newest", "Newest"], ["oldest", "Oldest"]];
  const NEWS_THEMES = [
    ["Strategies and plans", /strateg|roadmap|action plan|national plan/i],
    ["Laws and regulation", /\b(law|act|bill|decree|regulat\w*|legislat\w*)\b/i],
    ["Data centres and compute", /data cent(re|er)|supercomput|ai factor|gpu|compute|gigafactor/i],
    ["Partnerships and MoUs", /memorandum|\bmou\b|partnership|agreement|joint statement/i],
    ["Skills and education", /skill|training|educat|school|universit|literacy|teacher|student/i],
    ["AI in government services", /public service|government service|civil servant|e-government|chatbot|assistant|portal/i],
    ["Rankings and indices", /\bindex\b|\brank|ranking/i],
    ["Safety, ethics and misuse", /safety|ethic|deepfake|disinformation|misinformation|misuse|manipulat/i],
    ["Investment and funding", /invest|\bfund|billion|million/i],
    ["China and WAICO", /china|chinese|waico|shanghai/i],
  ];
  const DECIDED = /\b(adopt|approv|pass|enact|sign|promulgat|in force|took effect|launch|endors|ratif|unveil)/i;
  const IMPACT_RULES = [
    [5, "a law or binding rule", (t) => /\b(law|act|bill|decree|regulation|legislation)\b/i.test(t) && DECIDED.test(t)],
    [4, "a strategy or policy decision", (t) => /\b(strateg\w*|polic\w*|roadmap|framework|guidelines?|action plan)\b/i.test(t) && DECIDED.test(t)],
    [4, "billion-scale money", (t) => /\d\s?(billion|bn)\b/i.test(t)],
    [2, "million-scale money", (t) => /\d\s?(million|mn)\b/i.test(t) && !/\d\s?(billion|bn)\b/i.test(t)],
    [3, "a new public body", (t) => /\b(ministry|authority|agency|council|office|institute|commission|unit|centre|center)\b/i.test(t) && /\b(creat|establish|set up|new|appoint)/i.test(t)],
    [2, "compute infrastructure", (t) => /data cent(re|er)|supercomput|ai factor|gpu|gigafactor|campus/i.test(t)],
    [2, "an international agreement", (t) => /memorandum|\bmou\b|agreement|partnership|treaty|joint statement|declaration/i.test(t)],
    [-1.5, "an event or training", (t) => /\b(workshop|seminar|conference|summit|webinar|course|forum|panel|hackathon)\b/i.test(t)],
  ];
  const INSIGHT_RULES = [
    [3, "data or an assessment", (t) => /\b(index|ranks?|ranking|ranked|score[sd]?|survey|report|study|assessment|readiness|audit|evaluation)\b/i.test(t)],
    [1.5, "a percentage", (t) => /\d+(\.\d+)?\s?(%|per ?cent)/i.test(t)],
    [1, "a comparison", (t) => /\b(first|only|largest|lowest|highest|leads?|behind|ahead of|top)\b/i.test(t)],
  ];
  const LEVEL_BONUS = { verified: 1.5, corroborated: 0.75, single: 0, dataset: 0.75 };
  // Relevance blends three signals, each scaled 0–1 across the items being ranked and weighted equally:
  // trending (recent, on themes with a lot of recent news), impact (decisions, money, institutions) and
  // insight (data, figures, caveats). More independent sources add a small bonus.
  // "Strategies and plans" -> "strategies and plans", but keep acronyms such as "AI" and "MoUs" as they are.
  const lowerFirst = (t) => (/^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t);
  function rankNews(items, mode) {
    const now = dateValue(D.meta.asOf);
    const daysAgo = (x) => Math.max(0, (now - (dateValue(x.date) ?? now)) * 365);
    const text = (x) => `${x.title}. ${x.summary}`;
    if (mode !== "relevance") {
      const out = [...items].sort((a, b) => byDateDesc(a.x, b.x));
      return { list: (mode === "oldest" ? out.reverse() : out).map((r) => ({ ...r, why: null })), themes: [] };
    }
    // Trending: a theme's heat is the recency-weighted number of items on it.
    const heat = new Map(NEWS_THEMES.map(([name]) => [name, 0]));
    const themesOf = (x) => NEWS_THEMES.filter(([, re]) => re.test(text(x))).map(([name]) => name);
    for (const { x } of items) for (const th of themesOf(x)) heat.set(th, heat.get(th) + Math.exp(-daysAgo(x) / 30));
    const maxHeat = Math.max(1e-9, ...heat.values());
    const parts = items.map((r) => {
      const t = text(r.x);
      const ths = themesOf(r.x).sort((a, b) => heat.get(b) - heat.get(a));
      const trend = Math.exp(-daysAgo(r.x) / 21) * (1 + ths.reduce((sum, th) => sum + heat.get(th) / maxHeat, 0));
      const impactHits = IMPACT_RULES.filter(([, , test]) => test(t));
      const impact = impactHits.reduce((sum, [w]) => sum + w, 0);
      const insightHits = INSIGHT_RULES.filter(([, , test]) => test(t));
      // Concrete figures (not years or dates) make an item more informative, up to three.
      const figures = new Set((t.replace(/\b(19|20)\d{2}\b/g, " ").match(/\d[\d.,]*/g) || []).filter((v) => v.length > 1 || +v > 1)).size;
      const insight = insightHits.reduce((sum, [w]) => sum + w, 0) + Math.min(3, figures) * 0.75 + (r.x.note ? 1.5 : 0);
      const insightWhy = [...insightHits.map(([, label]) => label), ...(figures ? ["specific figures"] : []), ...(r.x.note ? ["a caveat noted"] : [])];
      return { r, trend, impact, insight, themes: ths, impactWhy: impactHits.filter(([w]) => w > 0).map(([, label]) => label), insightWhy };
    });
    const scale = (key) => {
      const vals = parts.map((p) => p[key]), lo = Math.min(...vals), hi = Math.max(...vals);
      return (v) => (hi > lo ? (v - lo) / (hi - lo) : 0);
    };
    const sT = scale("trend"), sI = scale("impact"), sN = scale("insight");
    const list = parts.map((p) => {
      const t = sT(p.trend), i = sI(p.impact), n = sN(p.insight);
      const score = (t + i + n) / 3 + LEVEL_BONUS[p.r.x.level] * 0.05;
      // Name the signals that pulled the item up, strongest first.
      const why = [
        [t, p.themes.length ? `trending (${p.themes.slice(0, 2).map(lowerFirst).join(", ")})` : "recent"],
        [i, p.impactWhy.length ? `impact (${p.impactWhy.slice(0, 2).join(", ")})` : null],
        [n, p.insightWhy.length ? `insight (${p.insightWhy.slice(0, 2).join(", ")})` : null],
      ].filter(([v, label]) => label && v >= 0.3).sort((a, b) => b[0] - a[0]).map(([, label]) => label);
      if (p.r.x.level !== "single") why.push(LEVELS[p.r.x.level].label);
      return { ...p.r, score, why: [`Relevant for: ${why.join("; ") || "no strong signals"}`] };
    }).sort((a, b) => b.score - a.score);
    const recent = (name) => items.filter(({ x }) => daysAgo(x) <= 60 && NEWS_THEMES.find(([nm]) => nm === name)[1].test(text(x))).length;
    const themes = [...heat].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name]) => ({ name, n: recent(name) })).filter((th) => th.n > 0);
    return { list, themes };
  }

  function renderNews() {
    const items = N.flatMap((n) => n.news.filter(isRecent).map((x) => ({ x, n })));
    const PAGE = 18;
    let nation = "all", level = "all", theme = null, shownCount = PAGE;
    if (!NEWS_SORTS.some(([k]) => k === state.newsSort)) state.newsSort = "newest";
    const grid = el("div", { class: "nw-grid" }), more = el("div", { class: "nw-more" });
    const sortSeg = el("div", { class: "seg", role: "group", "aria-label": "Sort the news" });
    const themeRow = el("div", { class: "nw-themes" }), count = el("span", { class: "nw-count" }), sortNote = el("p", { class: "muted small nw-sortnote" });
    const select = el("select", { class: "select", "aria-label": "Filter by nation" });
    const levelSel = el("select", { class: "select", "aria-label": "Filter by number of sources" },
      [["all", "Any number of sources"], ...["verified", "corroborated", "single"].map((k) => [k, LEVELS[k].label])].map(([k, lab]) => el("option", { value: k }, lab)));
    const draw = (keepCount) => {
      if (!keepCount) shownCount = PAGE;
      const opts = [["all", state.region === "All" ? "All nations" : `All nations in ${state.region}`], ...N.filter(inRegion).sort((a, b) => a.name.localeCompare(b.name)).map((n) => [n.id, `${n.flag} ${n.name}`])];
      if (!opts.some(([k]) => k === nation)) nation = "all";
      select.replaceChildren(...opts.map(([k, lab]) => el("option", { value: k, selected: k === nation }, lab)));
      sortSeg.replaceChildren(...NEWS_SORTS.map(([k, lab]) =>
        el("button", { class: "seg-btn", type: "button", "aria-pressed": String(state.newsSort === k), onclick: () => { state.newsSort = k; theme = null; draw(); } }, lab)));
      sortNote.textContent = state.newsSort === "relevance" ? "Relevance combines how much an item is trending, its likely impact and how insightful it is, worked out from its text, sources and date. There is no click or popularity data. Each card says why it ranked; the rules are in Method." : "";
      sortNote.textContent = `Items confirmed by 2 or more sources are listed first, then items with 1 source. ${sortNote.textContent}`.trim();
      sortNote.hidden = false;
      const pool = items.filter(({ x, n }) => inRegion(n) && (nation === "all" || n.id === nation) && (level === "all" || x.level === level));
      const ranked = rankNews(pool, state.newsSort);
      const themeRe = theme ? NEWS_THEMES.find(([name]) => name === theme)[1] : null;
      const themed = themeRe ? ranked.list.filter(({ x }) => themeRe.test(`${x.title}. ${x.summary}`)) : ranked.list;
      // Items confirmed by two or more independent sources come first; single-source items follow, in the same order.
      const shown = [...themed.filter(({ x }) => x.level !== "single"), ...themed.filter(({ x }) => x.level === "single")];
      themeRow.replaceChildren(...(ranked.themes.length ? [el("span", { class: "filter-label" }, "Hot in the last 60 days"),
        ...ranked.themes.map((t) => el("button", { class: "chip-btn small", type: "button", "aria-pressed": String(theme === t.name), onclick: () => { theme = theme === t.name ? null : t.name; draw(); } }, `${t.name} · ${t.n}`))] : []));
      count.textContent = `${shown.length} ${shown.length === 1 ? "item" : "items"}`;
      // The first item is the lead story; the rest fill the grid a page at a time.
      const used = new Set();
      grid.replaceChildren(...(shown.length ? shown.slice(0, shownCount + 1).map(({ x, n, why }, i) => newsCard(x, n, { why, lead: i === 0, used })) : [el("p", { class: "muted" }, "No items match these filters.")]));
      more.replaceChildren(...(shown.length > shownCount + 1 ? [el("button", { class: "show-more", type: "button", onclick: () => { shownCount += PAGE; draw(true); } }, `Show ${Math.min(PAGE, shown.length - shownCount - 1)} more of ${shown.length - shownCount - 1}`)] : []));
    };
    select.addEventListener("change", () => { nation = select.value; draw(); });
    levelSel.addEventListener("change", () => { level = levelSel.value; draw(); });
    draw();
    view.replaceChildren(
      pageHead("News", "Latest developments", `${items.length} developments since January 2024 across ${N.length} countries, each tied to its sources. Research cut-off ${fmtDate(D.meta.asOf)}.`),
      el("div", { class: "filter-bar nw-region" }, el("span", { class: "filter-label" }, "Region"), regionFilter(() => draw())),
      el("div", { class: "nw-controls" }, sortSeg, select, levelSel, count),
      sortNote, themeRow, grid, more);
  }

  // ---------------------------------------------------------------- collaborations (country to country)
  const PLACES = D.places || {};
  // A party is either one of the nations here or an outside partner from ATLAS.places.
  function party(key) {
    const n = byId(key);
    if (n) return { key, name: n.name, flag: n.flag, geo: n.geo, nation: n };
    const p = PLACES[key];
    return p ? { key, name: p.name, flag: p.flag, geo: p.geo, nation: null } : null;
  }
  // Short forms people type, matched exactly in the collaborations search.
  const COLLAB_ALIASES = { ae: ["uae", "emirates"], us: ["us", "usa", "america"], gb: ["uk", "britain"], kr: ["korea"], coe: ["coe"], waico: ["waico"], asean: ["asean"], oecd: ["oecd", "gpai"] };
  const COLLAB_BODIES = new Set(["coe", "waico", "asean", "oecd"]); // group hubs that are organisations, not countries
  const collabParties = (c) => (c.kind === "bilateral" ? [c.a, c.b] : [c.hub, ...c.members]);
  const partiesOf = (c) => collabParties(c).map(party).filter(Boolean);
  const countriesIn = (c) => collabParties(c).filter((k) => !COLLAB_BODIES.has(k)).length;
  const monthYear = (d) => fmtDate(d).replace(/^\d+ /, "");
  // A country "pill": flag and name, linking to the nation page when the country is on this site.
  const pill = (p, host) => el(p.nation ? "a" : "span", { class: "cpill" + (p.nation ? "" : " is-outside"), href: p.nation ? `#${p.key}` : null, title: p.nation ? `Open ${p.name}` : `${p.name} (not one of the nations on this site)` },
    el("span", { class: "cpill-flag", "aria-hidden": "true" }, p.flag), p.name, host ? el("span", { class: "cpill-host" }, COLLAB_BODIES.has(p.key) ? "coordinator" : "host") : null);
  const partiesRow = (c) => {
    const ps = partiesOf(c);
    if (c.kind === "bilateral") return el("div", { class: "cparties" }, pill(ps[0]), el("span", { class: "cparties-link", "aria-label": "and" }, "⟷"), pill(ps[1]));
    return el("div", { class: "cparties" }, pill(ps[0], true),
      ps.length > 1 ? [el("span", { class: "cparties-link", "aria-label": "with" }, "+"), ...ps.slice(1).map((p) => pill(p))] : el("span", { class: "muted small" }, "members not listed"));
  };
  // The inside of a list row: flags, who and what, and the month. With `from`, a two-country row names only the partner.
  function collabRowParts(c, from) {
    const ps = partiesOf(c);
    const show = c.kind === "bilateral" ? (from ? ps.filter((p) => p.key !== from) : ps) : ps.slice(0, 1);
    const extra = c.kind === "bilateral" ? 0 : ps.length - 1;
    const who = c.kind === "bilateral" ? (from ? `With ${show[0].name}` : `${ps[0].name} & ${ps[1].name}`) : c.short;
    const what = c.kind === "bilateral" ? c.short : c.members.length ? `Group of ${countriesIn(c)} countries` : `Group hosted by ${ps[0].name}`;
    return [
      el("span", { class: "cx-flags", "aria-hidden": "true" }, show.map((p) => el("span", {}, p.flag)), extra ? el("span", { class: "cx-more" }, `+${extra}`) : null),
      el("span", { class: "cx-row-text" }, el("span", { class: "cx-who" }, who), el("span", { class: "cx-what" }, what)),
      el("span", { class: "cx-date" }, monthYear(c.date))];
  }

  // ---- a nation's AI partners, shown on its page
  // Who the nation is linked to in each agreement: the other country, a group's host, or (as host) the members.
  const collabLinks = (n, list) => list.flatMap((c) => (c.kind === "bilateral" ? [[c, c.a === n.id ? c.b : c.a]]
    : c.hub === n.id ? c.members.map((m) => [c, m]) : [[c, c.hub]]));
  function partnerMap(n, links) {
    const keys = [...new Set(links.map(([, k]) => k))].filter((k) => party(k));
    const W = narrowScreen() ? 420 : 560, H = 400;
    const places = [n.geo, ...keys.map((k) => party(k).geo)];
    // The map frames the nation and its partners together, zoomed until they fill it.
    const frame = (g, ms) => g.fitPoints(places, { ms, maxK: 3.2, padPx: 70 });
    const globe = createGlobe({ W, H, pad: 14, maxK: 10, cls: "np-map", view0: { lon: n.geo[0], lat: n.geo[1], k: 1 }, home: (g) => frame(g, 600),
      label: `Map of ${n.name}'s AI partners: ${keys.map((k) => party(k).name).join(", ")}.`,
      fills: (f) => (f.id === n.isoN ? { fill: "@on" } : null) });
    if (!globe) return el("p", { class: "muted" }, "Map libraries failed to load.");
    const lines = links.filter(([, k]) => party(k)).map(([c, k]) => {
      const node = s("path", { class: `collab-line np-line ${c.kind}` }, s("title", {}, `${c.short}: ${party(k).name}`));
      globe.over.append(node);
      return { node, samples: globe.arcSamples(n.geo, party(k).geo, c.kind === "bilateral" ? 1 : 0.75) };
    });
    const few = keys.length <= 10;
    const mark = (p, isHome) => {
      const g = s("g", { class: "collab-dot" + (isHome ? " is-lit" : p.nation ? "" : " is-outside") });
      const circle = s("circle", { r: isHome ? 6.5 : 4 }, s("title", {}, p.name));
      const text = isHome || few ? s("text", { class: "map-label" + (isHome ? " is-strong" : "") }, p.name) : null;
      g.append(...[circle, text].filter(Boolean));
      globe.top.append(g);
      return { geo: p.geo, g, circle, text, w: p.name.length * (isHome ? 7.8 : 7.2) + 4, x: 0, y: 0 };
    };
    // The nation itself is last in the list so it draws on top, but its name is placed first.
    const marks = [...keys.map((k) => mark(party(k), false)), mark({ name: n.name, geo: n.geo, nation: n }, true)];
    globe.onDraw(() => {
      for (const l of lines) l.node.setAttribute("d", globe.arcPath(l.samples));
      const vis = [];
      for (const m of marks) {
        const p = globe.point(m.geo), on = p.z > 0.02;
        m.g.style.display = on ? "" : "none";
        if (!on) continue;
        m.x = p.x; m.y = p.y;
        m.circle.setAttribute("cx", p.x); m.circle.setAttribute("cy", p.y);
        vis.push(m);
      }
      const placed = [];
      for (const m of [...vis].reverse()) {
        if (!m.text) continue;
        const spot = labelSpot(m.x, m.y, m.w, placed, vis, globe);
        m.text.style.display = spot ? "" : "none";
        if (spot) { m.text.setAttribute("x", spot.x + 2); m.text.setAttribute("y", spot.y + 11); }
      }
    });
    frame(globe, 0);
    return el("div", { class: "np-mapwrap" }, globe.node);
  }
  function nationPartners(n) {
    const list = (D.collaborations || []).filter((c) => collabParties(c).includes(n.id)).sort(byDateDesc);
    if (!list.length) return [];
    const links = collabLinks(n, list);
    const twoWay = [...new Map(list.filter((c) => c.kind === "bilateral").map((c) => { const k = c.a === n.id ? c.b : c.a; return [k, party(k)]; })).values()].filter(Boolean);
    const groups = list.filter((c) => c.kind === "group");
    const nBil = list.length - groups.length;
    const parts = [nBil ? `${nBil} two-country deal${nBil > 1 ? "s" : ""}` : null, groups.length ? `${groups.length} group${groups.length > 1 ? "s" : ""}` : null].filter(Boolean).join(" and ");
    return [el("section", { class: "section" },
      sectionHead("AI partners", `${list.length} agreement${list.length > 1 ? "s" : ""} with other governments: ${parts}. Open one to see it on the Collaborations map.`),
      el("div", { class: "card np" },
        partnerMap(n, links),
        el("div", { class: "np-side" },
          twoWay.length ? el("div", { class: "np-block" }, el("div", { class: "np-label" }, "Two-country partners"), el("div", { class: "cparties" }, twoWay.map((p) => pill(p)))) : null,
          el("div", { class: "np-block" }, el("div", { class: "np-label" }, "Agreements"),
            expandable((k) => el("div", { class: "np-rows" }, list.slice(0, k).map((c) => el("a", { class: "cx-row", href: `#collab/${c.id}` }, ...collabRowParts(c, n.id)))),
              list.length, { limit: 5, hint: "agreements, newest first", noun: "agreements" })),
          el("a", { class: "np-more", href: "#collab" }, "All agreements on the Collaborations map →"))))];
  }

  function renderCollab(initialId) {
    const all = [...(D.collaborations || [])].sort(byDateDesc);
    const byCid = new Map(all.map((c) => [c.id, c]));
    // A link to one agreement (#collab/<id>) opens it with the tour paused.
    const linked = byCid.has(initialId);
    const st = { q: "", sel: linked ? initialId : all[0] && all[0].id, playing: !linked, hold: false };
    const counts = new Map();
    all.forEach((c) => collabParties(c).forEach((k) => counts.set(k, (counts.get(k) || 0) + 1)));
    const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
    const names = (k) => { const p = party(k); return p ? [norm(p.name), ...(COLLAB_ALIASES[k] || [])] : []; };
    // A full country name (or common short form) shows exactly that country's agreements;
    // anything else matches country names, titles and descriptions.
    const exactKey = () => { const q = norm(st.q); return q ? [...counts.keys()].find((k) => names(k).includes(q)) || null : null; };
    const shownList = () => {
      const q = norm(st.q);
      if (!q) return all;
      const k = exactKey();
      if (k) return all.filter((c) => collabParties(c).includes(k));
      return all.filter((c) => collabParties(c).some((x) => names(x).some((n) => n.includes(q))) || norm(c.title).includes(q) || norm(c.short || "").includes(q) || norm(c.text).includes(q));
    };

    // ---- map
    const sq = narrowScreen(), W = sq ? 420 : 960, H = sq ? 420 : 560;
    const START = { lon: 20, lat: 25, k: 1 };
    const mapCard = el("div", { class: "card cx-map" });
    let paint = () => {};
    const globe = createGlobe({ W, H, maxK: 8, cls: "collab-map", view0: START, onUser: () => pause(),
      home: (g) => { const c = byCid.get(st.sel); if (c) fit(c, 600); else g.flyTo(START, 600); },
      label: `Map of ${all.length} AI agreements between countries. The selected agreement is drawn brightly and its countries are shaded.` });
    if (!globe) mapCard.append(el("p", { class: "muted" }, "Map libraries failed to load."));
    else {
      const lineLayer = s("g", {}), onLayer = s("g", {}), hitLayer = s("g", {}), dotLayer = s("g", {});
      globe.over.append(lineLayer, onLayer, hitLayer);
      globe.top.append(dotLayer);
      // Every agreement is a faint route above the surface. The faint routes share four paths (two kinds, shown
      // or dimmed by the search) so a moving map updates four elements, not hundreds. A wider invisible copy of
      // each route takes the pointer; those are only brought up to date once the map stops.
      const faint = {};
      for (const kind of ["bilateral", "group"]) for (const out of [false, true]) lineLayer.append(faint[kind + out] = s("path", { class: `collab-line ${kind}${out ? " is-out" : ""}` }));
      const segs = [];
      for (const c of all) {
        const pairs = c.kind === "bilateral" ? [[c.a, c.b]] : c.members.map((m) => [c.hub, m]);
        for (const [k1, k2] of pairs) {
          const a = party(k1), b = party(k2);
          if (!a || !b) continue;
          const hit = s("path", { class: "collab-hit", "data-id": c.id });
          hit.addEventListener("pointermove", (e) => { if (!globe.svg.classList.contains("is-dragging")) showTip(e, [el("div", { class: "tv" }, c.short || c.title), el("div", { class: "tl" }, partiesOf(c).map((p) => p.name).join(c.kind === "bilateral" ? " ⟷ " : ", ")), el("div", { class: "tl small", style: "margin-top:4px" }, "Click for details")]); });
          hit.addEventListener("pointerleave", hideTip);
          hitLayer.append(hit);
          segs.push({ c, hit, d: "", out: false, samples: globe.arcSamples(a.geo, b.geo, c.kind === "bilateral" ? 1 : 0.75) });
        }
      }
      // A dot for every country or body with an agreement, sized by how many it has.
      const dots = [...counts.keys()].map((k) => ({ k, p: party(k) })).filter((d) => d.p).map((d) => {
        const n = counts.get(d.k), plural = n > 1 ? "s" : "";
        const g = s("g", { class: "collab-dot" + (d.p.nation ? "" : " is-outside"), "data-k": d.k, tabindex: "-1", role: "button", "aria-label": `${d.p.name}: ${n} agreement${plural}. Show them.` });
        const circle = s("circle", {}), text = s("text", { class: "map-label is-strong" }, d.p.name);
        g.append(circle, text);
        g.addEventListener("pointermove", (e) => showTip(e, [el("div", { class: "tv" }, `${d.p.flag} ${d.p.name}`), el("div", { class: "tl" }, `${n} agreement${plural}`), el("div", { class: "tl small", style: "margin-top:4px" }, "Click to list them")]));
        g.addEventListener("pointerleave", hideTip);
        g.addEventListener("keydown", (e) => { if (e.key === "Enter") selectCountry(d.k); });
        dotLayer.append(g);
        return { ...d, n, g, circle, text, lit: false, named: false, out: false };
      });
      let onLines = [], filled = [];
      globe.onSettle(() => { for (const sg of segs) sg.hit.setAttribute("d", sg.d); });
      globe.onDraw(() => {
        const merged = { bilateralfalse: "", bilateraltrue: "", groupfalse: "", grouptrue: "" };
        for (const sg of segs) { sg.d = globe.arcPath(sg.samples); merged[sg.c.kind + sg.out] += sg.d; }
        for (const k in merged) faint[k].setAttribute("d", merged[k]);
        for (const o of onLines) { o.glow.setAttribute("d", o.seg.d); o.line.setAttribute("d", o.seg.d); }
        for (const d of dots) {
          const p = globe.point(d.p.geo), on = p.z > 0.02;
          d.g.style.display = on ? "" : "none";
          if (!on) continue;
          const r = d.lit ? 6 : 2.5 + Math.min(d.n, 5) * 0.5;
          d.circle.setAttribute("cx", p.x); d.circle.setAttribute("cy", p.y); d.circle.setAttribute("r", r);
          // Dots fade as they near the edge; ones outside the current search stay dim.
          d.g.style.opacity = (d.out ? 0.3 : 1) * (d.lit ? 1 : Math.min(1, 0.3 + p.z * 2.2));
          d.x = p.x; d.y = p.y; d.on = true;
        }
        // Names of the selected agreement's countries, each placed where it covers no other name or lit dot.
        const litDots = dots.filter((d) => d.lit && d.g.style.display !== "none"), placed = [];
        for (const d of dots) {
          const spot = d.named && d.g.style.display !== "none" ? labelSpot(d.x, d.y, d.p.name.length * 7.8 + 4, placed, litDots, globe) : null;
          d.text.style.display = spot ? "" : "none";
          if (spot) { d.text.setAttribute("x", spot.x + 2); d.text.setAttribute("y", spot.y + 11); }
        }
      });
      // Clicks are resolved from the point, because a drag hands the pointer to the map itself.
      globe.svg.addEventListener("click", (e) => {
        if (globe.wasDrag()) return;
        for (const n of document.elementsFromPoint(e.clientX, e.clientY)) {
          const dot = n.closest && n.closest(".collab-dot");
          if (dot) { hideTip(); selectCountry(dot.dataset.k); return; }
          if (n.classList && n.classList.contains("collab-hit")) { hideTip(); select(n.dataset.id, true); return; }
        }
      });
      paint = () => {
        const c = byCid.get(st.sel), list = shownList();
        const shownIds = new Set(list.map((x) => x.id)), shownKeys = new Set(list.flatMap(collabParties));
        for (const sg of segs) sg.out = !shownIds.has(sg.c.id);
        // The selected agreement: bright routes with a glow, its countries shaded, its dots ringed and named.
        onLayer.replaceChildren();
        onLines = segs.filter((sg) => c && sg.c.id === c.id).map((seg) => {
          const glow = s("path", { class: `collab-glow ${c.kind}` }), line = s("path", { class: `collab-line is-on ${c.kind}` });
          onLayer.append(glow, line);
          return { seg, glow, line };
        });
        for (const iso of filled) globe.setFill(iso, null);
        filled = c ? collabParties(c).map((k) => (byId(k) || PLACES[k] || {}).isoN).filter(Boolean) : [];
        for (const iso of filled) globe.setFill(iso, "@on");
        const lit = new Set(c ? collabParties(c) : []);
        // Name every country in the selected agreement; for large groups only the host.
        const named = new Set(c ? (lit.size <= 6 ? lit : [c.hub]) : []);
        for (const d of dots) {
          d.lit = lit.has(d.k); d.named = named.has(d.k); d.out = !shownKeys.has(d.k);
          d.g.classList.toggle("is-lit", d.lit);
          d.g.setAttribute("tabindex", d.lit ? "0" : "-1");
          if (d.lit) dotLayer.append(d.g); // lit dots draw above the rest
        }
        globe.draw();
      };
      mapCard.append(globe.node);
    }
    // Move the map to the selected agreement's countries and zoom until they fill it, with room for labels.
    const fit = (c, ms = 1800) => {
      if (!globe || !c) return;
      const pts = partiesOf(c).map((p) => p.geo);
      globe.fitPoints(pts, { ms, maxK: pts.length > 1 ? 3.4 : 2.6, padPx: sq ? 56 : 100 });
    };

    // ---- tour controls (over the map) and the detail panel
    const tour = el("div", { class: "cx-tour" });
    const detail = el("article", { class: "card cx-detail", "aria-live": "polite" });
    const drawTour = () => {
      const list = shownList();
      const i = list.findIndex((c) => c.id === st.sel);
      const btn = (label, icon, fn) => el("button", { class: "spot-btn", type: "button", "aria-label": label, title: label, onclick: fn }, icon);
      tour.replaceChildren(
        btn("Previous agreement", "‹", () => { step(-1); pause(); }),
        btn(st.playing ? "Pause the tour" : "Play the tour", st.playing ? "❚❚" : "▶", () => { st.playing ? pause() : play(); }),
        btn("Next agreement", "›", () => { step(1); pause(); }),
        el("span", { class: "cx-count" }, list.length ? `${i + 1} of ${list.length}` : "0 shown"),
        ...(st.playing ? [el("span", { class: "cx-progress", "aria-hidden": "true" }, el("i", { style: `animation-duration:${TOUR_MS}ms` }))] : []));
    };
    const drawDetail = () => {
      const c = byCid.get(st.sel);
      if (!c) { detail.replaceChildren(el("p", { class: "muted" }, "No agreements match the search.")); return; }
      detail.replaceChildren(
        el("div", { class: "cx-detail-top" },
          el("span", { class: "cx-kind" }, c.kind === "bilateral" ? "Between two countries" : c.members.length ? `Group of ${countriesIn(c)} countries` : "Group"),
          el("span", { class: "muted small" }, fmtDate(c.date))),
        el("h2", { class: "cx-title" }, c.title),
        partiesRow(c),
        el("p", { class: "ink2 cx-text" }, c.text),
        el("div", { class: "fact-meta" }, badge(c.level, c.sources.length), sourceChips(c.sources)),
        ...(c.note ? [el("p", { class: "note" }, c.note)] : []),
        itemActions(collabKey(c), collabSnap(c)));
    };

    // ---- list
    const search = el("input", { type: "search", class: "dir-search cx-search", placeholder: "Search a country or topic", "aria-label": "Search agreements by country or topic" });
    const status = el("p", { class: "muted small cx-status", "aria-live": "polite" });
    const rows = el("div", { class: "cx-rows", role: "listbox", "aria-label": "Agreements" });
    const row = (c) => el("button", { class: "cx-row", type: "button", role: "option", "data-id": c.id, "aria-selected": "false", onclick: () => select(c.id, true) }, ...collabRowParts(c));
    const drawList = () => {
      const list = shownList();
      const k = exactKey();
      status.textContent = !st.q.trim() ? `${all.length} agreements, newest first` : k ? `${list.length} involving ${party(k).name}` : `${list.length} matching “${st.q.trim()}”`;
      let year = null;
      const out = [];
      for (const c of list) {
        const y = c.date.slice(0, 4);
        if (y !== year) { year = y; out.push(el("div", { class: "cx-year", role: "presentation" }, y)); }
        out.push(row(c));
      }
      rows.replaceChildren(...(out.length ? out : [el("p", { class: "muted small cx-empty" }, "No agreements match. Try a country such as Singapore or Estonia.")]));
    };
    const markRow = (scroll) => {
      rows.querySelectorAll(".cx-row").forEach((n) => { const on = n.dataset.id === st.sel; n.classList.toggle("is-on", on); n.setAttribute("aria-selected", String(on)); });
      const r = rows.querySelector(`.cx-row[data-id="${st.sel}"]`);
      // Keep the active row in view inside the list without moving the page.
      if (scroll && r && rows.scrollHeight > rows.clientHeight + 4 && (r.offsetTop < rows.scrollTop + 32 || r.offsetTop + r.offsetHeight > rows.scrollTop + rows.clientHeight))
        rows.scrollTo({ top: r.offsetTop - rows.clientHeight / 3, behavior: "smooth" });
    };
    rows.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      step(e.key === "ArrowDown" ? 1 : -1); pause();
      const r = rows.querySelector(`.cx-row[data-id="${st.sel}"]`);
      if (r) r.focus();
    });

    // ---- state changes
    const TOUR_MS = 6000; // each agreement is shown for six seconds
    let timer = null;
    // The address names the agreement on screen once the tour stops, so it can be shared.
    const syncUrl = () => {
      const h = st.playing || !st.sel ? "#collab" : `#collab/${st.sel}`;
      if (location.hash !== h) history.replaceState(null, "", h);
    };
    const update = (scroll = true) => { paint(); drawTour(); drawDetail(); markRow(scroll); syncUrl(); };
    function select(id, byUser) {
      st.sel = id;
      if (byUser) {
        st.playing = false; clearInterval(timer);
        if (matchMedia("(max-width: 900px)").matches && stage.getBoundingClientRect().top < 0) stage.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      update();
      fit(byCid.get(id));
    }
    function step(dir) {
      const list = shownList();
      if (!list.length) return;
      const i = list.findIndex((c) => c.id === st.sel);
      select(list[i < 0 ? 0 : (i + dir + list.length) % list.length].id);
    }
    function play() {
      st.playing = true;
      clearInterval(timer);
      timer = setInterval(() => {
        if (!rows.isConnected) { clearInterval(timer); return; }
        if (st.hold || document.hidden) return;
        step(1);
      }, TOUR_MS);
      drawTour(); syncUrl();
    }
    function pause() { if (!st.playing) return; st.playing = false; clearInterval(timer); drawTour(); syncUrl(); }
    function selectCountry(k) { st.q = k ? party(k).name : ""; search.value = st.q; pause(); refresh(true); }
    function refresh(reselect) {
      const list = shownList();
      drawList();
      if (reselect || !list.some((c) => c.id === st.sel)) { st.sel = list.length ? list[0].id : null; update(); fit(byCid.get(st.sel)); }
      else update();
      if (st.playing) play();
    }
    search.addEventListener("input", () => { st.q = search.value; refresh(true); });

    const stage = el("div", { class: "cx-main" }, el("div", { class: "cx-mapwrap" }, mapCard, tour), detail);
    // Hovering the map or the details pauses the tour so they can be read.
    stage.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") st.hold = true; });
    stage.addEventListener("pointerleave", () => { st.hold = false; });

    drawList();
    update(false);
    fit(byCid.get(st.sel), 0);
    if (linked) requestAnimationFrame(() => markRow(true));
    else play();

    const nBil = all.filter((c) => c.kind === "bilateral").length;
    view.replaceChildren(
      pageHead("Collaborations", "AI agreements between governments", `${all.length} agreements (${nBil} bilateral, ${all.length - nBil} group) involving countries beyond the AI frontier: those shaping how AI is used and governed rather than building frontier models or the chips behind them. Drag the map to look at the various agreements or use the list.`),
      el("section", { class: "cx" },
        el("div", { class: "cx-side card" }, el("div", { class: "cx-side-in" }, search, status, rows)),
        stage),
      el("p", { class: "muted small cx-foot" },
        el("span", {}, el("i", { class: "key-dot" }), "Nation on this site"),
        el("span", {}, el("i", { class: "key-dot is-outside" }), "Partner country outside this site"),
        el("span", {}, el("i", { class: "key-line" }), "Two countries"),
        el("span", {}, el("i", { class: "key-line group" }), "Group: lines run to the host")));
  }

  // ---------------------------------------------------------------- findings (#findings)
  // What the coded model shows across all nations. Every number is counted from the data when the page is drawn,
  // and every group opens to the nations behind it, each linked to the fact or agreement its code rests on.
  function renderFindings() {
    const total = N.length;
    const cnt = (key, v) => N.filter((n) => codeOf(n, key).v === v).length;
    const of = (key, v) => N.filter((n) => codeOf(n, key).v === v);
    const median = (xs) => { const a = xs.filter((x) => x != null).sort((x, y) => x - y); return a.length ? a[Math.floor((a.length - 1) / 2)] : null; };
    const nchip = (n, href, extra) => el("a", { class: "nchip", href }, `${n.flag} ${n.name}`, extra ? el("span", { class: "nchip-x" }, extra) : null);
    // The nations behind each value of a field, each linking to what its code rests on.
    const evidence = (key, { skip = [], extra } = {}) => el("details", { class: "fd-evidence" },
      el("summary", {}, "See the nations behind each number"),
      fieldOf(key).values.filter((val) => !skip.includes(val.v)).map((val) => {
        const list = of(key, val.v).sort((a, b) => a.name.localeCompare(b.name));
        return list.length ? el("div", { class: "fd-group" },
          el("h3", {}, swatch(val.color), `${val.label} · ${list.length}`),
          el("p", { class: "muted small" }, val.def),
          el("div", { class: "nchips" }, list.map((n) => nchip(n, evidenceHref(n, key), extra && extra(n))))) : null;
      }));
    const onMap = (key) => el("button", { type: "button", class: "table-toggle", onclick: () => { state.colorBy = key; location.hash = "nations"; } }, `Show ${fieldOf(key).label.toLowerCase()} on the map →`);
    const finding = (i, claim, ...body) => el("section", { class: "card fd" }, el("div", { class: "fd-num" }, String(i)), el("div", { class: "fd-body" }, el("h2", {}, claim), body));

    // 3: size and income by approach
    const gdp = (n) => (n.stats.gdpPerCapita ? n.stats.gdpPerCapita.v : null), pop = (n) => (n.stats.population ? n.stats.population.v : null);
    const sizeRows = fieldOf("posture").values.map((val) => {
      const list = of("posture", val.v);
      return [el("span", {}, swatch(val.color), val.label), String(list.length), compact(median(list.map(pop))), `$${fmtInt(median(list.map(gdp)))}`, `#${median(list.map(rankOf))}`];
    });
    // 4: compute, with income
    const hasCompute = N.filter((n) => codeOf(n, "compute").v !== "none");
    const medGdp = (v) => `$${fmtInt(median(of("compute", v).map(gdp)))}`;
    const allIn = (v, group) => of("compute", v).every((n) => n.group === group);
    // 5: outside bodies
    const OUTSIDE = /UNESCO|UNDP|World Bank/;
    const helped = N.map((n) => ({ n, i: n.facts.findIndex((f) => OUTSIDE.test(f.text)) })).filter((x) => x.i >= 0);
    const helpedIn = (v) => helped.filter((x) => codeOf(x.n, "posture").v === v).length;
    // 6: agreements
    const collabs = D.collaborations || [];
    const partyTo = (c, id) => c.a === id || c.b === id || c.hub === id || (c.members || []).includes(id);
    const inAny = N.filter((n) => collabs.some((c) => partyTo(c, n.id)));
    const inPair = N.filter((n) => collabs.some((c) => c.kind === "bilateral" && partyTo(c, n.id)));
    const multi = of("bloc", "multi").map((n) => n.name);

    view.replaceChildren(el("article", { class: "findings" },
      pageHead("Findings", "What the data shows", `Six claims about how ${total} countries outside the AI frontier govern AI, each counted from the facts on this site.`),
      el("p", { class: "note fd-note" }, "Each nation is coded on four questions: what leads its AI policy, where its rules come from, where its compute comes from, and which outside power it is tied to. The codes are editorial readings of the sourced facts, the rules are in ", el("a", { href: "#method" }, "Method"), ", and every count below is recalculated from the data. “None on record” means this site has no sourced fact, which is not proof that nothing exists.", SCOPE.pending.length ? ` So far the site covers ${N.length} countries: all ${N.filter((n) => !isLarge(n)).length} with fewer than 15 million people and the ${N.filter(isLarge).length} largest of the rest. ${SCOPE.pending.length} more are still to be added, so these findings lean towards smaller states for now.` : ""),

      finding(1, "Few countries outside the frontier write their own AI rules.",
        el("p", {}, `${cnt("route", "own")} of ${total} have an AI law or bill of their own. ${cnt("route", "eu")} take the EU AI Act as members of the EU or the EEA, ${cnt("route", "regional")} sit under a regional body's framework or a treaty, and ${cnt("route", "none")} have no AI rules on record. For most of them the question is which outside rulebook to live under, not what to write.`),
        shareBar("route", N), el("div", { class: "fd-foot" }, onMap("route")), evidence("route")),

      finding(2, "Most lead with a strategy, not a law.",
        el("p", {}, `${cnt("posture", "adopt")} nations lead with adoption: a national strategy, programme or investment to use and build AI. ${cnt("posture", "regulate")} lead with binding rules. ${cnt("posture", "align")} have no strategy or law of their own yet and are aligning with an outside framework or working from an assessment led by a body such as UNESCO or UNDP, and ${cnt("posture", "absent")} have no AI policy yet.`),
        shareBar("posture", N), el("div", { class: "fd-foot" }, onMap("posture")), evidence("posture")),

      finding(3, "The smaller and poorer the state, the more its AI policy is written elsewhere, or not at all.",
        el("p", {}, "Nations that lead with their own strategy or rules are larger and richer, and rank higher on government AI readiness, than those that are aligning with outside frameworks. Those with no AI policy yet are the smallest and poorest."),
        table(["Approach", "Nations", "Median population", "Median GDP per capita", "Median readiness rank"], sizeRows, [1, 2, 3, 4]),
        el("p", { class: "muted small fd-src" }, "Population and GDP per capita: World Bank. Readiness rank: Oxford Insights 2025, of ", String(OXFORD_TOTAL), " governments; unranked nations are left out of that median. ", sourceChips([S.wbPop, S.wbGdp, S.oxford]))),

      finding(4, "Owning compute is for the rich. The rest share it or bring in a partner.",
        el("p", {}, `${hasCompute.length} nations have an AI computing facility or plan on record. ${cnt("compute", "shared")} share one${allIn("shared", "Europe") ? ", all of them in Europe, through EuroHPC AI Factories or a consortium supercomputer" : ""}. ${cnt("compute", "own")} have a national facility of their own (median GDP per capita ${medGdp("own")}), and ${cnt("compute", "foreign")} rely on a foreign company, government or donor (median ${medGdp("foreign")}).`),
        shareBar("compute", hasCompute),
        el("p", { class: "muted small fd-src" }, `The other ${total - hasCompute.length} have nothing on record. That partly reflects gaps in this site's facts, so read this finding as a pattern among the ${hasCompute.length}, not a census.`),
        el("div", { class: "fd-foot" }, onMap("compute")), evidence("compute", { skip: ["none"], extra: (n) => (gdp(n) ? `$${compact(gdp(n))}` : null) })),

      finding(5, "Outside bodies often hold the pen.",
        el("p", {}, `${helped.length} nations have a fact on this site in which UNESCO, UNDP or the World Bank takes part, most often by running the readiness assessment or helping to draft the strategy. They include ${helpedIn("align")} of the ${cnt("posture", "align")} nations coded as aligning and ${helpedIn("absent")} of the ${cnt("posture", "absent")} with no AI policy yet.`),
        el("details", { class: "fd-evidence" }, el("summary", {}, "See the nations and the facts"),
          el("div", { class: "nchips" }, helped.sort((a, b) => a.n.name.localeCompare(b.n.name)).map((x) => nchip(x.n, `#${x.n.id}/f${x.i}`))))),

      finding(6, "They cooperate in groups more than in pairs, and few are tied to more than one big power.",
        el("p", {}, `${inAny.length} of ${total} are party to at least one AI agreement between governments, but only ${inPair.length} have a two-country deal; the other ${inAny.length - inPair.length} appear only in groups such as CARICOM, the Pacific Islands Forum or the Council of Europe convention. On ties to the big powers, ${cnt("bloc", "eu")} are tied to Europe, ${cnt("bloc", "us")} to the United States and ${cnt("bloc", "cn")} to China. ${multi.length ? `Only ${multi.length} are tied to more than one: ${multi.join(", ")}.` : ""}`),
        shareBar("bloc", N.filter((n) => codeOf(n, "bloc").v !== "none")),
        el("p", { class: "muted small fd-src" }, `The other ${cnt("bloc", "none")} have no such tie on record. Deals with other partners, such as the Gulf states, India, Japan or South Korea, are on the `, el("a", { href: "#collab" }, "Collaborations"), " page."),
        el("div", { class: "fd-foot" }, onMap("bloc")), evidence("bloc", { skip: ["none"] }))));
  }

  function renderMethod() {
    const claims = allClaims();
    const cnt = (lv) => claims.filter((c) => c.level === lv).length;
    const srcCount = new Set(claims.flatMap((c) => c.sources.map((x) => x.u))).size;
    const grp = (g) => N.filter((n) => n.group === g).length;
    const LV = ["verified", "corroborated", "single"], LC = { verified: "var(--good)", corroborated: "var(--accent)", single: "var(--warning)" };
    const li = (...kids) => el("li", {}, ...kids);
    // The audit history, kept short and folded away; METHODOLOGY.md in the project holds the full record.
    const audits = [
      ["5 Nov 2026", "Sixth audit. 775 pages re-fetched (730 read automatically, 13 in a browser, 32 behind bot checks that are not bypassed). Lesotho corrected: its AI policy was validated in 2025, not published on 17 August 2026. Unsupported details removed from Qatar, Norway and Cuba; the UAE's 2017 launch and the UAE–Malaysia–Rwanda agreement re-sourced; two dead links dropped."],
      ["26 Oct 2026", "Fifth audit. 782 links re-fetched; no source removed, no badge changed. All 110 key-document links alive."],
      ["24 Oct 2026", "Fourth audit. 51 citations that broke the source rule removed (trackers, aggregators, newsletters, consultancies); 41 badges lowered; 12 dead pages pointed at Internet Archive copies."],
      ["21 Oct 2026", "The last 19 small states added, and every agreement re-read: three dropped as not AI agreements between governments."],
      ["20 Oct 2026", "Third audit. About 760 links re-fetched; more rule-breaking sources removed, 16 badges lowered; São Tomé's unconfirmed $10 billion memorandum removed."],
      ["14 Oct 2026", "Second audit. Every index figure re-checked against its dataset (all matched); tracker and blog sources removed and 28 unsupported claims cut."],
      ["10 Oct 2026", "First full audit. Every cited page fetched, every claim's dates, numbers and names checked against it, every mismatch reviewed by hand. About 50 dead links replaced; unconfirmed figures removed."],
    ];
    view.replaceChildren(el("article", { class: "method" },
      pageHead("Method", "How this was researched and checked", "What the badges mean, which countries are in, how the governance codes are made, and what to read with care."),
      el("div", { class: "card sourced" },
        el("div", { class: "hero-figure" }, `${cnt("verified")} of ${claims.length}`),
        el("p", { class: "hero-cap" }, `claims across ${N.length} countries are confirmed by 3 or more independent sources (${srcCount} sources cited in total)`),
        el("div", { class: "levelbar", role: "img", "aria-label": LV.map((l) => `${LEVELS[l].label}: ${cnt(l)}`).join(", ") }, LV.map((l) => el("span", { style: `flex:${cnt(l)};background:${LC[l]}`, title: `${LEVELS[l].label}: ${cnt(l)}` }))),
        el("div", { class: "legend" }, LV.map((l) => el("span", {}, el("i", { style: `background:${LC[l]}` }), `${LEVELS[l].label}: ${cnt(l)}`)))),

      el("h2", {}, "How claims are checked"),
      el("ul", {},
        li("Every claim is cross-checked against primary sources (government sites, official releases, publishers' own reports) and independent coverage. Index figures are read from the publisher's own table, PDF or API."),
        li("The badge counts independent sources that agree: 3+, 2 or 1. Pages from one organisation, or articles that reprint another outlet's text, count once, so a badge can show fewer sources than links."),
        li("Sources that count: governments and parliaments, international organisations, established news outlets, law firms and research bodies. AI-policy trackers, auto-generated explainers, vendor and personal blogs are not used."),
        li("Where sources disagree, the claim gives the best-supported version and a Note shows the disagreement. Every audit re-fetches every cited page; what no readable source still supports is removed.")),

      el("h2", {}, "Which countries are covered"),
      el("p", {}, "Countries outside the AI frontier: those that neither produce frontier AI models nor hold a key place in the AI chip supply chain, by the yardstick of Stanford's AI Index 2026 (notable models produced in 2025, and who makes the chips). Territories are not included."),
      el("div", { class: "card codebook" }, table(["Left out", "Why"], SCOPE.frontier.map(([name, why]) => [el("strong", {}, name), why]))),
      el("ul", {},
        li(SCOPE.exception.why),
        li(`Covered so far: ${N.length} countries, every sovereign state under 15 million people (${N.filter((n) => !isLarge(n)).length}) plus ${N.filter(isLarge).map((n) => n.name).join(", ")}. Europe ${grp("Europe")}, Middle East ${grp("Middle East")}, Asia-Pacific ${grp("Asia-Pacific")}, Africa ${grp("Africa")}, Americas ${grp("Americas")}.`),
        SCOPE.pending.length ? li(`Still to add, largest first, each once its facts are checked: ${SCOPE.pending.join(", ")}. Until then the Findings counts lean towards smaller states.`) : null,
        li("Source for the line: ", sourceChips([SCOPE.source]))),

      el("h2", {}, "The governance model"),
      el("p", {}, "Each country is coded on four questions so that approaches can be compared, mapped and counted. A code is an editorial reading of the sourced facts, and each country's page lists the facts, agreements or memberships it rests on."),
      el("div", { class: "card codebook" }, table(["Question", "Code", "Rule"], MODEL_FIELDS.flatMap((f) => f.values.map((val, i) => [i ? "" : el("span", {}, el("strong", {}, f.label), el("br", {}), f.q), el("span", { class: "code-chip" }, swatch(val.color), val.label), val.def])))),
      el("ul", {},
        li("Approach is the one judgement call. Rules, compute and bloc follow the rules in the table, in order; memberships of the EU, EEA, African Union, CARICOM, Pacific Islands Forum and ASEAN are taken as given."),
        li("Bloc counts only institutional ties and government agreements listed here. Deals with single European states, Gulf states, India, Japan or South Korea do not count as a bloc."),
        li("\u201CNone on record\u201D means no sourced fact here, not proof that nothing exists; for compute it is often a gap in coverage."),
        li(`Facts are filed under ten topics: ${TOPICS.join(", ")}.`)),

      el("h2", {}, "How the news feed is ordered"),
      el("p", {}, "Items confirmed by two or more sources come before single-source items in every sort. \u201CRelevance\u201D adds three equal signals read from each item's text, sources and date: how much its theme is trending in the last 60 days, its likely impact (laws, strategies, money, new bodies, compute, agreements) and its insight (data, rankings, figures, caveats). Each card says why it ranked. There is no click or popularity data."),

      el("h2", {}, "Audit log"),
      el("p", {}, `Every cited page has been re-fetched and every claim re-checked six times since launch. The full record is in the project's METHODOLOGY.md.`),
      el("details", { class: "fd-evidence method-log" }, el("summary", {}, "Show the audits"),
        el("ul", {}, audits.map(([d, what]) => li(el("strong", {}, d), " · ", what)))),

      el("h2", {}, "Limits"),
      el("ul", {},
        li(`A snapshot as of ${fmtDate(D.meta.asOf)}; the feed does not update itself. Summaries and stance lines are editorial synthesis, not quotations.`),
        li("Programme-reported figures are the programmes' own numbers. Some Microsoft usage figures are regional estimates and say so on the page."),
        li("Profiles, saved items and notes stay in this browser and do not sync between devices. Notes are never deleted, and the Saved page can back everything up to a file."),
        li("Map boundaries are Natural Earth at 110m scale: approximate, and no position on disputed borders."),
        li("Disclosure: this site was compiled by Claude, an AI model made by Anthropic. Anthropic is party to two agreements described here (Rwanda, Estonia); those claims rely on both parties' public statements.")),
    ));
  }


  // ---------------------------------------------------------------- profiles, saved items and review marks
  // Everything is kept in this browser's localStorage (no server yet): a list of profiles with salted
  // password hashes, and per profile the saved items and review marks (read & vetted / seems suspicious + note).
  // Nothing the user writes is ever deleted by the app: an edited or cleared note keeps its earlier text in
  // `history`, emptied marks are kept (hidden) with that history, recent snapshots of the whole profile are kept,
  // and restores merge rather than replace. The profile can also be mirrored to a file on disk (see Backup).
  const Store = (() => {
    const K_PROFILES = "atlas-profiles", K_USER = "atlas-user";
    const read = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
    const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
    const hash = (salt, pw) => window.atlasGate.sha256(`${salt}:${pw}`);
    const newSalt = () => [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
    const idOf = (name) => name.trim().toLowerCase();
    const now = () => new Date().toISOString();
    let user = read(K_USER, null);
    if (user && !read(K_PROFILES, {})[user]) user = null;
    let data = null, lastError = null;
    const load = () => { data = user ? Object.assign({ saved: {}, marks: {} }, read(`atlas-data:${user}`, {})) : null; };
    const SNAP_EVERY = 5 * 60 * 1000, SNAP_KEEP = 30, HISTORY_KEEP = 50;
    const snapshots = () => read(`atlas-snapshots:${user}`, []);
    const save = () => {
      if (!user) return;
      const ok = write(`atlas-data:${user}`, data);
      lastError = ok ? null : "This browser refused to save (storage full or blocked). Download a copy now so nothing is lost.";
      // Keep a rolling set of snapshots, at most one every five minutes.
      const snaps = snapshots();
      if (ok && (!snaps.length || Date.now() - Date.parse(snaps[0].at) > SNAP_EVERY)) {
        snaps.unshift({ at: now(), data: JSON.parse(JSON.stringify(data)) });
        write(`atlas-snapshots:${user}`, snaps.slice(0, SNAP_KEEP));
      }
    };
    const listeners = new Set();
    const emit = (why) => listeners.forEach((fn) => fn(why));
    // Ask the browser not to clear this site's storage to free up space (granted silently in most browsers).
    const persist = () => { try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch {} };
    // Merge two copies of a profile: every item from both is kept, the newer version of each wins, histories combine.
    const mergeInto = (target, incoming) => {
      for (const [k, v] of Object.entries(incoming.saved || {})) if (!target.saved[k] || (v.at || "") > (target.saved[k].at || "")) target.saved[k] = v;
      for (const [k, v] of Object.entries(incoming.marks || {})) {
        const cur = target.marks[k];
        if (!cur) { target.marks[k] = v; continue; }
        const [newer, older] = (v.at || "") > (cur.at || "") ? [v, cur] : [cur, v];
        const seen = new Set(), history = [];
        for (const h of [...(newer.history || []), ...(older.history || []), ...(older.note || older.status ? [{ note: older.note || "", status: older.status || null, at: older.at }] : [])]) {
          const id = `${h.at}|${h.note}|${h.status}`;
          if (!seen.has(id) && !(h.note === (newer.note || "") && h.status === (newer.status || null))) { seen.add(id); history.push(h); }
        }
        target.marks[k] = { ...newer, history: history.sort((a, b) => (b.at || "").localeCompare(a.at || "")).slice(0, HISTORY_KEEP) };
      }
    };
    if (user) persist();
    load();
    return {
      user: () => user,
      displayName: () => (user ? read(K_PROFILES, {})[user].name : null),
      onChange: (fn) => listeners.add(fn),
      lastError: () => lastError,
      create(name, pw) {
        const id = idOf(name), all = read(K_PROFILES, {});
        if (!/^[\w .-]{2,32}$/.test(name.trim())) return "Use 2–32 letters, numbers, spaces, dots or dashes.";
        if (all[id]) return "That name is taken on this browser. Sign in instead.";
        if (pw.length < 4) return "Use a password of at least 4 characters.";
        const salt = newSalt();
        all[id] = { name: name.trim(), salt, hash: hash(salt, pw), created: now() };
        if (!write(K_PROFILES, all)) return "This browser is not letting the site store anything (private mode?).";
        user = id; write(K_USER, user); load(); persist(); emit("auth");
        return null;
      },
      signIn(name, pw) {
        const p = read(K_PROFILES, {})[idOf(name)];
        if (!p || p.hash !== hash(p.salt, pw)) return "Name or password not recognised on this browser.";
        user = idOf(name); write(K_USER, user); load(); persist(); emit("auth");
        return null;
      },
      // Profiles only exist in this browser, so a forgotten password can be replaced here; the notes are kept.
      resetPassword(name, pw) {
        const id = idOf(name), all = read(K_PROFILES, {});
        if (!all[id]) return "No profile with that name on this browser.";
        if (pw.length < 4) return "Use a password of at least 4 characters.";
        const salt = newSalt();
        all[id] = { ...all[id], salt, hash: hash(salt, pw) };
        if (!write(K_PROFILES, all)) return "This browser is not letting the site store anything.";
        user = id; write(K_USER, user); load(); persist(); emit("auth");
        return null;
      },
      signOut() { user = null; try { localStorage.removeItem(K_USER); } catch {} load(); emit("auth"); },
      data: () => data,
      isSaved: (key) => !!(data && data.saved[key]),
      toggleSave(key, snap) {
        if (data.saved[key]) delete data.saved[key];
        else data.saved[key] = { ...snap, at: now() };
        save(); emit("data");
      },
      mark: (key) => (data && data.marks[key]) || null,
      // patch: { status?: "vetted" | "sus" | null, note?: string }. The previous note and status go into history first.
      setMark(key, patch, snap) {
        const old = data.marks[key] || {};
        const next = { ...old, ...snap, ...patch, at: now() };
        const changed = (next.note || "") !== (old.note || "") || (next.status || null) !== (old.status || null);
        if (changed && (old.note || old.status)) next.history = [{ note: old.note || "", status: old.status || null, at: old.at }, ...(old.history || [])].slice(0, HISTORY_KEEP);
        data.marks[key] = next;
        save(); emit("data");
      },
      exportData: () => ({ format: "atlas-profile", version: 2, profile: user ? read(K_PROFILES, {})[user].name : null, exported: now(), saved: data.saved, marks: data.marks }),
      // Restore from a downloaded or backed-up copy, or from a snapshot. Merges, so nothing current is lost.
      importData(obj) {
        if (!obj || typeof obj !== "object" || (!obj.saved && !obj.marks)) return "That file is not an Atlas backup.";
        const before = Object.keys(data.saved).length + Object.keys(data.marks).length;
        mergeInto(data, obj);
        save(); emit("data");
        return `Restored. ${Object.keys(data.saved).length + Object.keys(data.marks).length - before} items were added back; the rest were merged.`;
      },
      snapshots,
    };
  })();

  // Mirror of the profile in a file on the user's computer, rewritten after every change. It survives clearing the
  // browser's data. Needs the File System Access API (Chrome, Edge, Brave, Arc, Opera); the file handle is kept in
  // IndexedDB, and browsers ask again for permission to write after a restart.
  const Backup = (() => {
    const supported = typeof window.showSaveFilePicker === "function";
    let handle = null, status = "off", lastWrite = null, timer = null;
    const listeners = new Set();
    const emit = () => listeners.forEach((fn) => fn());
    const db = () => new Promise((res, rej) => {
      const r = indexedDB.open("atlas", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("kv");
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });
    const kv = async (mode, fn) => {
      const d = await db();
      return new Promise((res, rej) => { const t = d.transaction("kv", mode); const q = fn(t.objectStore("kv")); t.oncomplete = () => res(q && q.result); t.onerror = () => rej(t.error); });
    };
    const key = () => `backup-file:${Store.user()}`;
    async function writeNow() {
      if (!handle || !Store.user()) return;
      try {
        const w = await handle.createWritable();
        await w.write(JSON.stringify(Store.exportData(), null, 2));
        await w.close();
        lastWrite = new Date(); status = "ok";
      } catch { status = "error"; }
      emit();
    }
    return {
      supported,
      status: () => status, lastWrite: () => lastWrite, fileName: () => (handle ? handle.name : null),
      onChange: (fn) => listeners.add(fn),
      async init() {
        handle = null; status = "off"; lastWrite = null;
        if (supported && Store.user()) {
          try {
            handle = (await kv("readonly", (st) => st.get(key()))) || null;
            if (handle) status = (await handle.queryPermission({ mode: "readwrite" })) === "granted" ? "ok" : "paused";
            if (status === "ok") await writeNow();
          } catch { handle = null; status = "off"; }
        }
        emit();
      },
      async choose() {
        const name = `atlas-${(Store.displayName() || "profile").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-backup.json`;
        try { handle = await window.showSaveFilePicker({ suggestedName: name, types: [{ description: "Atlas backup", accept: { "application/json": [".json"] } }] }); }
        catch { return; } // picker closed
        try { await kv("readwrite", (st) => st.put(handle, key())); } catch {}
        await writeNow();
      },
      async reconnect() {
        if (!handle) return;
        status = (await handle.requestPermission({ mode: "readwrite" })) === "granted" ? "ok" : "paused";
        if (status === "ok") await writeNow(); else emit();
      },
      schedule() { if (status !== "ok") return; clearTimeout(timer); timer = setTimeout(writeNow, 800); },
    };
  })();
  // Downloads are the backup in browsers without file access; remember when the last one was made.
  const lastDownload = () => { try { return localStorage.getItem(`atlas-lastdownload:${Store.user()}`); } catch { return null; } };
  function downloadBackup() {
    const blob = new Blob([JSON.stringify(Store.exportData(), null, 2)], { type: "application/json" });
    const a = el("a", { href: URL.createObjectURL(blob), download: `atlas-${slug(Store.displayName())}-${new Date().toISOString().slice(0, 10)}.json` });
    document.body.append(a); a.click(); a.remove();
    try { localStorage.setItem(`atlas-lastdownload:${Store.user()}`, new Date().toISOString()); } catch {}
  }
  // Changes not yet in any copy outside the browser (for browsers without the backup file).
  const unbackedChanges = () => {
    const d = Store.data(); if (!d) return 0;
    const since = lastDownload() || "";
    return [...Object.values(d.saved), ...Object.values(d.marks)].filter((x) => (x.at || "") > since).length;
  };

  // Sign-in / create-profile dialog. `then` runs after a successful sign-in (e.g. the save the user clicked).
  function accountDialog(then, mode = "signin") {
    const dlg = el("dialog", { class: "acct-dialog", "aria-labelledby": "acctTitle" });
    let typedName = "";
    const draw = () => {
      const creating = mode === "create", resetting = mode === "reset";
      const err = el("p", { class: "acct-err", role: "alert", hidden: true });
      const field = (label, input) => el("div", { class: "acct-field" }, el("label", { class: "acct-label", for: input.id }, label), input);
      const name = el("input", { class: "acct-input", id: "acctName", autocomplete: "username", required: true, maxlength: "32", value: typedName });
      name.addEventListener("input", () => { typedName = name.value; });
      const pw = el("input", { class: "acct-input", id: "acctPw", type: "password", autocomplete: creating ? "new-password" : "current-password", required: true });
      const pw2 = creating || resetting ? el("input", { class: "acct-input", id: "acctPw2", type: "password", autocomplete: "new-password", required: true }) : null;
      if (resetting) pw.setAttribute("autocomplete", "new-password");
      const tab = (m, label) => el("button", { class: "seg-btn", type: "button", "aria-pressed": String(mode === m), onclick: () => { if (mode !== m) { mode = m; draw(); } } }, label);
      const form = el("form", { method: "dialog", onsubmit: (e) => {
        e.preventDefault();
        if ((creating || resetting) && pw.value !== pw2.value) { err.textContent = "The two passwords don't match."; err.hidden = false; return; }
        const msg = creating ? Store.create(name.value, pw.value) : resetting ? Store.resetPassword(name.value, pw.value) : Store.signIn(name.value, pw.value);
        if (msg) { err.textContent = msg; err.hidden = false; return; }
        dlg.close();
        if (then) then();
        route(true); // redraw so every icon on the page shows this profile's marks
      } },
        el("button", { class: "acct-close", type: "button", "aria-label": "Close", onclick: () => dlg.close() }, "×"),
        el("div", { class: "acct-head" },
          el("h2", { id: "acctTitle" }, creating ? "Create a profile" : resetting ? "Set a new password" : "Welcome back"),
          el("p", { class: "ink2 small" }, then ? "Sign in to save items and leave review notes." : "Save agreements, news and documents, and keep review notes.")),
        resetting ? el("p", { class: "small ink2" }, "Profiles live only in this browser, so you can set a new password here. Your saved items and notes are kept.")
          : el("div", { class: "seg acct-tabs", role: "group", "aria-label": "Sign in or create a profile" }, tab("signin", "Sign in"), tab("create", "Create profile")),
        field("Name", name),
        field(resetting ? "New password" : "Password", pw),
        creating || resetting ? field("Confirm password", pw2) : null,
        err,
        el("button", { class: "acct-btn primary acct-submit", type: "submit" }, creating ? "Create profile" : resetting ? "Set password and sign in" : "Sign in"),
        mode === "signin" ? el("button", { class: "linklike small acct-forgot", type: "button", onclick: () => { mode = "reset"; draw(); } }, "Forgot your password?")
          : resetting ? el("button", { class: "linklike small acct-forgot", type: "button", onclick: () => { mode = "signin"; draw(); } }, "Back to sign in") : null,
        el("p", { class: "muted small acct-fine" }, "Profiles are stored only in this browser. Don't reuse a password from another site."));
      dlg.replaceChildren(form);
      (typedName ? pw : name).focus();
    };
    dlg.addEventListener("close", () => dlg.remove());
    document.body.append(dlg);
    dlg.showModal();
    draw();
  }
  // Run fn if signed in, otherwise ask for a profile first.
  const needUser = (fn) => (Store.user() ? fn() : accountDialog(fn, "create"));

  // Header account control: "Sign in", or the profile name with a small menu.
  const accountEl = document.getElementById("account");
  let acctCleanup = null;
  function renderAccount() {
    if (acctCleanup) { acctCleanup(); acctCleanup = null; }
    if (!Store.user()) {
      accountEl.replaceChildren(el("button", { class: "acct-open", type: "button", onclick: () => accountDialog(null, "signin") }, "Sign in"));
      return;
    }
    const d = Store.data();
    const n = Object.keys(d.saved).length + Object.keys(d.marks).length;
    const bst = Backup.supported ? Backup.status() : (unbackedChanges() ? "download" : "ok-dl");
    const backupLine = { ok: ["is-ok", "Backup file up to date"], paused: ["is-warn", "Backups paused: resume"], error: ["is-warn", "Backup failed: check"], off: ["is-warn", "Set up a backup"],
      download: ["is-warn", `${unbackedChanges()} change${unbackedChanges() === 1 ? "" : "s"} not backed up`], "ok-dl": ["is-ok", "Backed up (download)"] }[bst];
    const panel = el("div", { class: "acct-menu", hidden: true },
      el("p", { class: "muted small" }, `Signed in as ${Store.displayName()}`),
      el("a", { class: `nav-item acct-backup ${backupLine[0]}`, href: "#saved", onclick: () => close() }, backupLine[1]),
      el("a", { class: "nav-item", href: "#saved", onclick: () => close() }, "Saved & reviewed", n ? ` (${n})` : ""),
      el("button", { class: "nav-item linklike", type: "button", onclick: () => { close(); Store.signOut(); route(true); } }, "Sign out"));
    const btn = el("button", { class: "acct-open is-in", type: "button", "aria-expanded": "false", "aria-haspopup": "true", onclick: () => (panel.hidden ? open() : close()) },
      el("span", { class: "acct-avatar", "aria-hidden": "true" }, Store.displayName().slice(0, 1).toUpperCase()), Store.displayName());
    const outside = (e) => { if (!accountEl.contains(e.target)) close(); };
    function open() { panel.hidden = false; btn.setAttribute("aria-expanded", "true"); document.addEventListener("pointerdown", outside); }
    function close() { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); document.removeEventListener("pointerdown", outside); }
    acctCleanup = close;
    accountEl.replaceChildren(btn, panel);
  }

  // A star that saves an item to the profile.
  function saveBtn(key, snap) {
    const b = el("button", { class: "ia-btn ia-save", type: "button" });
    const draw = () => {
      const on = Store.isSaved(key);
      b.setAttribute("aria-pressed", String(on));
      b.title = on ? "Saved. Click to remove" : "Save to your profile";
      b.setAttribute("aria-label", b.title);
      b.textContent = on ? "★" : "☆";
    };
    b.addEventListener("click", () => needUser(() => { Store.toggleSave(key, snap); draw(); }));
    draw();
    return b;
  }
  // Save star, review icons (✓ read & vetted, ⚠ seems suspicious) and the note they open.
  const MARKS = { vetted: { icon: "✓", label: "Read & vetted" }, sus: { icon: "⚠", label: "Seems suspicious" } };
  function itemActions(key, snap) {
    const box = el("div", { class: "ia" });
    let editing = false, showHistory = false;
    const draw = () => {
      const m = Store.mark(key);
      const markBtn = (k) => el("button", { class: `ia-btn ia-${k}`, type: "button", "aria-pressed": String(!!m && m.status === k), title: m && m.status === k ? `${MARKS[k].label}. Click to clear` : `Mark as ${MARKS[k].label.toLowerCase()}`,
        "aria-label": MARKS[k].label, onclick: () => needUser(() => {
          const cur = Store.mark(key);
          const off = cur && cur.status === k;
          Store.setMark(key, { status: off ? null : k }, snap);
          editing = !off; draw();
        }) }, MARKS[k].icon);
      // A note can be added to any item, with or without a ✓ or ⚠.
      const hasNote = !!(m && m.note);
      const noteBtn = el("button", { class: "ia-btn ia-note-btn", type: "button", "aria-pressed": String(hasNote), "aria-expanded": String(editing),
        title: hasNote ? "Edit your note" : "Add a note", "aria-label": hasNote ? "Edit your note" : "Add a note",
        onclick: () => needUser(() => { editing = !editing; draw(); }) }, "✎");
      const bar = el("div", { class: "ia-bar" }, saveBtn(key, snap), markBtn("vetted"), markBtn("sus"), noteBtn,
        m && m.status ? el("span", { class: `ia-state ia-state-${m.status}` }, MARKS[m.status].label) : null);
      const kids = [bar];
      if (editing) {
        const ta = el("textarea", { class: "ia-note-input", rows: "3", placeholder: m && m.status === "sus" ? "What looks off? (wrong date, dead link, weak source…)" : "Your note", "aria-label": "Note" });
        ta.value = (m && m.note) || "";
        const done = (keep) => { if (keep) Store.setMark(key, { note: ta.value.trim() }, snap); editing = false; draw(); };
        ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) done(true); if (e.key === "Escape") done(false); });
        kids.push(el("div", { class: "ia-edit" }, ta,
          el("div", { class: "ia-edit-actions" },
            el("button", { class: "acct-btn primary small", type: "button", onclick: () => done(true) }, "Save note"),
            el("button", { class: "acct-btn small", type: "button", onclick: () => done(false) }, "Cancel"))));
      } else if (m && m.note) kids.push(el("p", { class: `ia-note ia-note-${m.status || "plain"}` }, m.note));
      // Earlier versions of the note and mark, newest first, each restorable.
      const hist = (m && m.history) || [];
      if (hist.length && !editing) {
        kids.push(el("details", { class: "ia-history", open: showHistory || null, ontoggle: (e) => { showHistory = e.target.open; } },
          el("summary", {}, `Earlier versions (${hist.length})`),
          el("ol", {}, hist.map((h) => el("li", {},
            el("div", { class: "ia-history-meta" }, `${fmtDate((h.at || "").slice(0, 10))}${h.status ? ` · ${MARKS[h.status].label}` : ""}`,
              el("button", { class: "linklike small", type: "button", onclick: () => { Store.setMark(key, { note: h.note || "", status: h.status || null }, snap); draw(); } }, "Restore")),
            h.note ? el("p", { class: "ia-history-note" }, h.note) : el("p", { class: "muted small" }, "(no note)"))))));
      }
      box.replaceChildren(...kids);
      const ta = box.querySelector("textarea");
      if (ta) ta.focus({ preventScroll: true });
    };
    draw();
    return box;
  }
  const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  const newsKey = (item, n) => `news:${n.id}:${item.date}:${slug(item.title)}`;
  const newsSnap = (item, n) => ({ type: "news", title: item.title, sub: `${n.flag} ${n.name} · ${fmtDate(item.date)}`, href: `#${n.id}`, ext: item.sources[0] && item.sources[0].u });
  const docKey = (d, n) => `doc:${n.id}:${d.u}`;
  const docSnap = (d, n) => ({ type: "doc", title: d.t, sub: `${n.flag} ${n.name} · ${d.kind}${d.year ? ` · ${d.year}` : ""}`, href: `#${n.id}`, ext: d.u });
  const collabKey = (c) => `collab:${c.id}`;
  const collabSnap = (c) => ({ type: "collab", title: c.title, sub: `${partiesOf(c).map((p) => p.name).slice(0, 4).join(", ")}${partiesOf(c).length > 4 ? "…" : ""} · ${fmtDate(c.date)}`, href: `#collab/${c.id}` });

  // #saved: the profile's saved items and review marks.
  function renderSaved() {
    if (!Store.user()) {
      view.replaceChildren(pageHead("Your list", "Saved & reviewed", "Sign in to keep a list of agreements, news and documents, and to mark what you have read and vetted or what looks suspicious, with notes."),
        el("div", { class: "section acct-actions" },
          el("button", { class: "acct-btn primary", type: "button", onclick: () => accountDialog(null, "create") }, "Create a profile"),
          el("button", { class: "acct-btn", type: "button", onclick: () => accountDialog(null, "signin") }, "Sign in")));
      return;
    }
    const d = Store.data();
    const TYPES = { collab: "Agreement", news: "News", doc: "Key document" };
    const body = el("div", { class: "section" });
    const entry = (key, x) => el("article", { class: "sv-item" },
      el("div", { class: "sv-top" }, el("span", { class: "kd-kind" }, TYPES[x.type] || "Item"), el("span", { class: "muted small" }, x.sub)),
      el("a", { class: "sv-title", href: x.href }, x.title),
      x.ext ? el("a", { class: "src", href: x.ext, target: "_blank", rel: "noopener noreferrer" }, domain(x.ext), " ↗") : null,
      itemActions(key, { type: x.type, title: x.title, sub: x.sub, href: x.href, ext: x.ext }));
    // One list at a time, chosen with a toggle. Notes lists every item with a note, whether or not it is also marked.
    const draw = () => {
      const saved = Object.entries(d.saved).sort((a, b) => b[1].at.localeCompare(a[1].at));
      const marks = Object.entries(d.marks).sort((a, b) => b[1].at.localeCompare(a[1].at));
      const tabs = [
        ["saved", "Saved", saved, "Nothing saved yet. Use ☆ on an agreement, a news item or a key document."],
        ["vetted", "Read & vetted", marks.filter(([, m]) => m.status === "vetted"), "Nothing marked ✓ yet."],
        ["sus", "Seems suspicious", marks.filter(([, m]) => m.status === "sus"), "Nothing flagged ⚠ yet."],
        ["note", "Notes", marks.filter(([, m]) => (m.note || "").trim() || (m.history || []).some((h) => h.note)), "No notes yet. Use ✎ on any agreement, news item or key document."],
      ];
      if (!tabs.some(([k]) => k === state.savedTab)) state.savedTab = "saved";
      const [, , list, empty] = tabs.find(([k]) => k === state.savedTab);
      body.replaceChildren(
        el("div", { class: "seg sv-tabs", role: "group", "aria-label": "Show" }, tabs.map(([k, lab, l]) =>
          el("button", { class: "seg-btn", type: "button", "aria-pressed": String(state.savedTab === k), onclick: () => { state.savedTab = k; draw(); } }, lab, el("span", { class: "sv-count" }, String(l.length))))),
        el("div", { class: "card sv-list" }, list.length ? list.map(([k, x]) => entry(k, x)) : el("p", { class: "muted" }, empty)));
    };
    draw();
    view.replaceChildren(
      pageHead("Your list", "Saved & reviewed", `${Store.displayName()}'s saved items and review notes.`),
      body,
      backupPanel());
  }

  // Backups and restores, on the Saved page. Redraws itself when the backup state changes.
  let backupBox = null, backupMsg = "";
  // After a restore, redraw the whole page so the lists show what came back, and keep the message.
  const afterRestore = (text) => { backupMsg = text; route(true); };
  function backupPanel() {
    backupBox = el("section", { class: "section card bk" });
    drawBackupPanel(true);
    return backupBox;
  }
  // `initial` draws the panel before it is on the page; later calls only redraw it while it is shown.
  function drawBackupPanel(initial) {
    if (!backupBox || (!initial && !backupBox.isConnected) || !Store.user()) return;
    const msg = el("p", { class: "small bk-msg", role: "status" }, backupMsg);
    backupMsg = "";
    const time = (d) => d.toLocaleString(undefined, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
    const st = Backup.status();
    let fileRow;
    if (!Backup.supported) {
      const n = unbackedChanges(), last = lastDownload();
      fileRow = el("p", { class: "small" }, `This browser can't keep a backup file up to date, so download a copy now and then. `,
        last ? `Last download: ${time(new Date(last))}.` : "No copy downloaded yet.", n ? el("strong", {}, ` ${n} change${n === 1 ? "" : "s"} since then.`) : null);
    } else if (st === "ok") {
      fileRow = el("p", { class: "small bk-ok" }, `● Backing up every change to “${Backup.fileName()}” on this computer`, Backup.lastWrite() ? ` · last saved ${time(Backup.lastWrite())}` : "", ".");
    } else if (st === "paused") {
      fileRow = el("p", { class: "small bk-warn" }, `Backups to “${Backup.fileName()}” are paused until you allow it again (browsers ask after a restart). `,
        el("button", { class: "acct-btn small primary", type: "button", onclick: () => Backup.reconnect() }, "Resume backups"));
    } else if (st === "error") {
      fileRow = el("p", { class: "small bk-warn" }, "The last write to the backup file failed (was it moved or deleted?). Choose the file again. ");
    } else {
      fileRow = el("p", { class: "small bk-warn" }, "No backup file yet. Pick a file on your computer and every change will be written to it, so your notes survive even if this browser's data is cleared.");
    }
    const fileInput = el("input", { type: "file", accept: ".json,application/json", hidden: true });
    fileInput.addEventListener("change", async () => {
      const f = fileInput.files[0]; if (!f) return;
      let text;
      try { text = Store.importData(JSON.parse(await f.text())); } catch { text = "Couldn't read that file. Pick a .json backup downloaded from this site."; }
      afterRestore(text);
    });
    const snaps = Store.snapshots();
    const snapSelect = el("select", { class: "select", "aria-label": "Earlier version" }, snaps.map((sn, i) => el("option", { value: String(i) }, time(new Date(sn.at)))));
    backupBox.replaceChildren(...[
      el("h2", {}, "Backups"),
      el("p", { class: "muted small" }, "Notes are never deleted by the site: edited or cleared notes keep their earlier versions, and restoring always merges with what is here. Profiles live in this browser, so keep a copy outside it."),
      Store.lastError() ? el("p", { class: "small bk-warn" }, Store.lastError()) : null,
      fileRow,
      el("div", { class: "acct-actions" },
        Backup.supported ? el("button", { class: "acct-btn" + (st === "ok" ? "" : " primary"), type: "button", onclick: () => Backup.choose() }, st === "ok" ? "Use a different backup file" : "Choose a backup file") : null,
        el("button", { class: "acct-btn" + (!Backup.supported ? " primary" : ""), type: "button", onclick: () => { downloadBackup(); drawBackupPanel(); } }, "Download a copy"),
        el("button", { class: "acct-btn", type: "button", onclick: () => fileInput.click() }, "Restore from a file"), fileInput),
      snaps.length ? el("div", { class: "bk-snaps" },
        el("span", { class: "small" }, "Or bring back an earlier version saved in this browser:"), snapSelect,
        el("button", { class: "acct-btn small", type: "button", onclick: () => afterRestore(Store.importData(snaps[+snapSelect.value].data)) }, "Restore")) : null,
      msg].filter(Boolean));
  }
  // The header count follows every change. Pages redraw on sign-in and sign-out only, so a note being written stays open.
  Store.onChange((why) => {
    if (why === "data") Backup.schedule();
    if (why === "auth") Backup.init();
    renderAccount();
    drawBackupPanel();
  });
  Backup.onChange(() => { renderAccount(); drawBackupPanel(); });

  // ---------------------------------------------------------------- routing
  const tabsEl = document.getElementById("tabs");
  // Nations menu: a button that opens a searchable panel grouped by region (a native <select> sizes itself
  // to its longest option, which left a wide gap in the nav).
  function renderTabs(key) {
    const current = byId(key);
    const isNations = !!current || key === "nations" || key === "overview";
    const isCollab = key === "collab" || (!isNations && !["news", "findings", "method", "saved"].includes(key));
    tabsEl.replaceChildren(
      el("a", { class: "tab", href: "#collab", "aria-current": isCollab ? "page" : null }, "Collaborations"),
      el("a", { class: "tab", href: "#news", "aria-current": key === "news" ? "page" : null }, "News"),
      el("a", { class: "tab", href: "#findings", "aria-current": key === "findings" ? "page" : null }, "Findings"),
      el("a", { class: "tab", href: "#nations", "aria-current": isNations ? "page" : null }, "Nations"),
      el("a", { class: "tab", href: "#method", "aria-current": key === "method" ? "page" : null }, "Method"));
  }
  function route(keepScroll) {
    if (document.documentElement.classList.contains("is-locked")) return;
    hideTip();
    const key = (location.hash || "#collab").slice(1);
    const [head, sub] = key.split("/");
    renderTabs(key.startsWith("collab/") ? "collab" : head);
    const n = byId(head);
    if (n) { renderNation(n, sub); document.title = `${n.name} — Atlas`; }
    else if (key === "news") { renderNews(); document.title = "News — Atlas"; }
    else if (key === "nations" || key === "overview") { renderNations(); document.title = "Nations — Atlas"; }
    else if (key === "findings") { renderFindings(); document.title = "Findings — Atlas"; }
    else if (key === "method") { renderMethod(); document.title = "Method — Atlas"; }
    else if (key === "saved") { renderSaved(); document.title = "Saved & reviewed — Atlas"; }
    // Collaborations is the landing page, and unknown addresses fall back to it.
    else { renderCollab(key.startsWith("collab/") ? key.slice(7) : ""); document.title = "AI collaborations — Atlas"; }
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
  addEventListener("scroll", hideTip, { passive: true });
  // Nothing renders until the password gate (gate.js) is passed.
  window.atlasGate.ready(() => {
    addEventListener("hashchange", () => route());
    renderAccount();
    route();
    Backup.init();
  });
})();

/* Atlas dashboard - vanilla JS, no build step.
   Data: data/nations.js + data/nations-more.js. Map: vendor/ (d3-geo, topojson-client, world-atlas). */
(function () {
  "use strict";

  const D = window.ATLAS;
  const N = D.nations;
  const S = D.meta.sources;
  const PILLARS = D.meta.pillars;
  const OXFORD_TOTAL = 195;
  const GROUPS = ["Europe", "Middle East", "Asia-Pacific", "Africa", "Americas"];
  const view = document.getElementById("view");
  const tip = document.getElementById("tooltip");
  const SVGNS = "http://www.w3.org/2000/svg";

  const LEVELS = {
    verified: { label: "3+ sources", desc: "Confirmed by 3 or more independent sources" },
    corroborated: { label: "2 sources", desc: "Confirmed by 2 independent sources" },
    single: { label: "1 source", desc: "Only one source found. Treat with care" },
    dataset: { label: "Dataset", desc: "Read directly from the publisher's dataset" },
  };

  // Overview state (kept across navigation within a visit)
  const state = { region: "All", colorBy: "rank", sortKey: "rank", sortDir: 1, newsSort: "newest", savedTab: "saved" };

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
  function nationTip(n) {
    return [
      el("div", { class: "tv" }, `${n.flag} ${n.name}`),
      el("div", { class: "tl" }, n.oxford ? `AI readiness #${n.oxford.rank} of ${OXFORD_TOTAL}` : "Not in the Oxford Insights readiness index"),
      el("div", { class: "tl small" }, `First AI strategy: ${n.glance.firstStrategy}`),
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
  const rampColor = (score) => rampAt((score - 25) / 75);
  function inkOn(hex) {
    const c = hex.match(/\w\w/g).map((h) => parseInt(h, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    return L > 0.36 ? "#0b0b0b" : "#ffffff";
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

  // ---------------------------------------------------------------- map
  let WORLD = null;
  function worldFeatures() {
    if (WORLD) return WORLD;
    if (!window.WORLD_TOPO || !window.topojson || !window.d3) return null;
    const fc = topojson.feature(WORLD_TOPO, WORLD_TOPO.objects.countries);
    fc.features = fc.features.filter((f) => f.id !== "010"); // drop Antarctica
    // Natural Earth gives Kosovo no ISO number; match it by the code used in data/ (XKX).
    for (const f of fc.features) if (f.id == null && f.properties && f.properties.name === "Kosovo") f.id = "XKX";
    WORLD = fc;
    return WORLD;
  }

  // Pan & zoom for an SVG map. `layer` gets the transform; `onChange(k)` re-places screen-space overlays.
  function attachZoom(svg, W, H, layer, onChange, opts = {}) {
    const z = { k: 1, x: 0, y: 0 };
    const maxK = opts.maxK || 14;
    let wheelArmed = false;
    const clamp = () => {
      z.k = Math.max(1, Math.min(maxK, z.k));
      z.x = Math.min(0, Math.max(W - W * z.k, z.x));
      z.y = Math.min(0, Math.max(H - H * z.k, z.y));
    };
    const apply = () => {
      clamp();
      layer.setAttribute("transform", `translate(${z.x},${z.y}) scale(${z.k})`);
      onChange(z);
    };
    const toSvg = (e) => {
      const r = svg.getBoundingClientRect();
      return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
    };
    const zoomAt = (px, py, factor) => {
      const k2 = Math.max(1, Math.min(maxK, z.k * factor));
      z.x = px - ((px - z.x) * k2) / z.k;
      z.y = py - ((py - z.y) * k2) / z.k;
      z.k = k2;
      apply();
    };
    // Wheel zooms when the map is active (clicked) or with ctrl/cmd (trackpad pinch sends ctrlKey) so page scrolling isn't hijacked.
    svg.addEventListener("wheel", (e) => {
      if (!(wheelArmed || e.ctrlKey || e.metaKey)) { if (opts.onHint) opts.onHint(); return; }
      e.preventDefault();
      cancelAnimationFrame(anim);
      if (opts.onUser) opts.onUser();
      const [px, py] = toSvg(e);
      zoomAt(px, py, Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018)));
    }, { passive: false });
    // Drag to pan; two-pointer pinch to zoom.
    const pts = new Map();
    let moved = 0, last = null, pinch0 = null;
    svg.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      cancelAnimationFrame(anim);
      if (opts.onUser) opts.onUser();
      wheelArmed = true;
      svg.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, toSvg(e));
      moved = 0; last = toSvg(e);
      if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        pinch0 = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), k: z.k, mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
      }
      svg.classList.add("is-dragging");
    });
    svg.addEventListener("pointermove", (e) => {
      if (!pts.has(e.pointerId)) return;
      const p = toSvg(e);
      pts.set(e.pointerId, p);
      if (pts.size === 2 && pinch0) {
        const [a, b] = [...pts.values()];
        const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
        zoomAt(pinch0.mid[0], pinch0.mid[1], (pinch0.k * (d / pinch0.d)) / z.k);
        moved += 10;
        return;
      }
      const dx = p[0] - last[0], dy = p[1] - last[1];
      moved += Math.abs(dx) + Math.abs(dy);
      if (z.k > 1) { z.x += dx; z.y += dy; apply(); }
      last = p;
    });
    const end = (e) => { pts.delete(e.pointerId); if (pts.size < 2) pinch0 = null; if (!pts.size) svg.classList.remove("is-dragging"); };
    svg.addEventListener("pointerup", end);
    svg.addEventListener("pointercancel", end);
    svg.addEventListener("dblclick", (e) => { const [px, py] = toSvg(e); zoomAt(px, py, 2); });
    svg.addEventListener("keydown", (e) => {
      if (e.key === "+" || e.key === "=") { zoomAt(W / 2, H / 2, 1.5); e.preventDefault(); }
      if (e.key === "-" || e.key === "_") { zoomAt(W / 2, H / 2, 1 / 1.5); e.preventDefault(); }
      if (e.key === "0") { z.k = 1; z.x = 0; z.y = 0; apply(); }
    });
    // Animated move to a target view: the centre moves while the scale changes on a log curve.
    let anim = 0;
    const flyTo = (t, ms = 900) => {
      cancelAnimationFrame(anim);
      const goal = { ...t };
      const k = Math.max(1, Math.min(maxK, goal.k));
      goal.k = k;
      goal.x = Math.min(0, Math.max(W - W * k, goal.x));
      goal.y = Math.min(0, Math.max(H - H * k, goal.y));
      if (!ms || matchMedia("(prefers-reduced-motion: reduce)").matches) { Object.assign(z, goal); apply(); return; }
      const c0 = [(W / 2 - z.x) / z.k, (H / 2 - z.y) / z.k], c1 = [(W / 2 - goal.x) / goal.k, (H / 2 - goal.y) / goal.k];
      const k0 = z.k, t0 = performance.now();
      const ease = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
      const step = (now) => {
        const u = Math.min(1, (now - t0) / ms), e = ease(u);
        // Pull back a little mid-flight on long moves so the jump reads as travel.
        const dist = Math.hypot(c1[0] - c0[0], c1[1] - c0[1]) / W;
        const dip = Math.min(0.45, dist) * Math.sin(Math.PI * e);
        const kk = Math.exp(Math.log(k0) + (Math.log(goal.k) - Math.log(k0)) * e) * (1 - dip);
        const cx = c0[0] + (c1[0] - c0[0]) * e, cy = c0[1] + (c1[1] - c0[1]) * e;
        z.k = Math.max(1, kk); z.x = W / 2 - cx * z.k; z.y = H / 2 - cy * z.k;
        apply();
        if (u < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    };
    return {
      z,
      flyTo,
      wasDrag: () => moved > 6,
      zoomIn: () => { cancelAnimationFrame(anim); if (opts.onUser) opts.onUser(); zoomAt(W / 2, H / 2, 1.6); },
      zoomOut: () => { cancelAnimationFrame(anim); if (opts.onUser) opts.onUser(); zoomAt(W / 2, H / 2, 1 / 1.6); },
      reset: () => { cancelAnimationFrame(anim); if (opts.onUser) opts.onUser(); z.k = 1; z.x = 0; z.y = 0; apply(); },
      apply,
    };
  }
  function zoomControls(zoom) {
    return el("div", { class: "zoom-ctrl", role: "group", "aria-label": "Map zoom" },
      el("button", { type: "button", "aria-label": "Zoom in", title: "Zoom in", onclick: () => zoom.zoomIn() }, "+"),
      el("button", { type: "button", "aria-label": "Zoom out", title: "Zoom out", onclick: () => zoom.zoomOut() }, "−"),
      el("button", { type: "button", "aria-label": "Reset view", title: "Reset view", class: "zoom-reset", onclick: () => zoom.reset() }, "⟲"));
  }

  function worldMap() {
    const world = worldFeatures();
    const box = el("div", {});
    if (!world) {
      box.append(el("p", { class: "muted" }, "Map libraries failed to load. See the table below."));
      return box;
    }
    const W = 960, H = 470;
    const metric = METRICS[state.colorBy];
    const shown = filtered();
    const isoMap = new Map(N.map((n) => [n.isoN, n]));

    // Initial fit: the whole world for "All"; otherwise the selected nations' shapes plus padded capitals.
    const proj = d3.geoNaturalEarth1();
    if (state.region === "All") proj.fitExtent([[6, 6], [W - 6, H - 6]], world);
    else {
      const pad = 6;
      const pts = shown.flatMap((n) => [[n.geo[0] - pad, n.geo[1] - pad], [n.geo[0] + pad, n.geo[1] + pad]]);
      const feats = world.features.filter((f) => shown.some((n) => n.isoN === f.id));
      proj.fitExtent([[30, 30], [W - 30, H - 30]], { type: "FeatureCollection", features: [...feats, { type: "Feature", geometry: { type: "MultiPoint", coordinates: pts } }] });
    }
    const path = d3.geoPath(proj);

    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", tabindex: "0", class: "zoomable",
      "aria-label": `World map of the ${shown.length} nations, coloured by ${metric.label}. Use plus and minus keys to zoom.` });
    svg.append(s("defs", {}, s("clipPath", { id: "mapclip" }, s("rect", { x: 0, y: 0, width: W, height: H, rx: 8 }))));
    const clip = s("g", { "clip-path": "url(#mapclip)" });
    clip.append(s("rect", { x: 0, y: 0, width: W, height: H, fill: "var(--sea)" }));
    const geoLayer = s("g", {});
    if (state.region === "All") geoLayer.append(s("path", { d: path({ type: "Sphere" }), fill: "var(--sea)", stroke: "var(--grid)", "vector-effect": "non-scaling-stroke" }));

    const colorFor = (n) => {
      const t = metric.t(n);
      return t == null ? "var(--na)" : rampAt(t);
    };
    for (const f of world.features) {
      const d = path(f);
      if (!d) continue;
      const n = isoMap.get(f.id);
      const active = n && inRegion(n);
      geoLayer.append(s("path", { d, fill: active ? colorFor(n) : "var(--land)", stroke: "var(--land-stroke)", "stroke-width": 0.6, "vector-effect": "non-scaling-stroke", "data-id": active ? n.id : null, class: active ? "map-nation" : null }));
    }
    const markerLayer = s("g", {});
    clip.append(geoLayer, markerLayer);
    svg.append(clip);

    // Markers live in screen space so they keep their size while zooming; tiny states stay visible.
    const markers = shown.map((n) => ({ n, p: proj(n.geo) })).filter((m) => m.p);
    let hovered = null;
    const placeMarkers = (z) => {
      const show = state.region !== "All" || z.k >= 2.2;
      const placed = [];
      const scr = markers.map((m) => [m.p[0] * z.k + z.x, m.p[1] * z.k + z.y]);
      const overlaps = (b) => placed.some((p) => b.x < p.x + p.w && b.x + b.w > p.x && b.y < p.y + p.h && b.y + b.h > p.y) ||
        scr.some(([dx, dy]) => dx > b.x - 4 && dx < b.x + b.w + 4 && dy > b.y - 4 && dy < b.y + b.h + 4);
      markerLayer.replaceChildren(...markers.map((m, i) => {
        const [x, y] = scr[i];
        m.x = x; m.y = y;
        const g = s("g", { class: "map-marker" + (hovered === m.n.id ? " is-hover" : ""), tabindex: "0", role: "link", "aria-label": `${m.n.name}: readiness rank ${rankText(m.n)}` });
        g.append(s("circle", { cx: x, cy: y, r: 6, fill: colorFor(m.n), stroke: "var(--surface)", "stroke-width": 2 }));
        if (show && x > -20 && x < W + 20 && y > -20 && y < H + 20) {
          const label = shortName(m.n), w = label.length * 7.2 + 4, h = 14;
          const tries = [[10, -7], [-10 - w, -7], [-w / 2, -22], [-w / 2, 9], [10, -20], [10, 6], [-10 - w, -20], [-10 - w, 6]];
          let box = null;
          for (const [ox, oy] of tries) { const b = { x: x + ox, y: y + oy, w, h }; if (!overlaps(b)) { box = b; break; } }
          if (box) { placed.push(box); g.append(s("text", { x: box.x + 2, y: box.y + 11, class: "map-label" }, label)); }
        }
        g.addEventListener("focus", (e) => { setHover(m.n.id); showTip(e, nationTip(m.n)); });
        g.addEventListener("blur", () => { setHover(null); hideTip(); });
        g.addEventListener("keydown", (e) => { if (e.key === "Enter") location.hash = m.n.id; });
        return g;
      }));
      hintEl.hidden = true;
    };
    function setHover(id) {
      if (hovered === id) return;
      hovered = id;
      markerLayer.querySelectorAll(".map-marker").forEach((g, i) => g.classList.toggle("is-hover", markers[i].n.id === id));
      geoLayer.querySelectorAll(".map-nation").forEach((p) => p.classList.toggle("is-hover", p.dataset.id === id));
    }
    function pick(e) {
      const r = svg.getBoundingClientRect();
      const sx = W / r.width;
      const px = (e.clientX - r.left) * sx, py = (e.clientY - r.top) * sx;
      let best = null, bd = 16 * sx;
      for (const m of markers) { const d = Math.hypot(m.x - px, m.y - py); if (d < bd) { bd = d; best = m.n; } }
      if (!best && e.target.dataset && e.target.dataset.id) best = byId(e.target.dataset.id);
      return best;
    }
    const hintEl = el("div", { class: "map-hint", hidden: true }, "Click the map, or hold ⌘/Ctrl, to zoom with scroll. Drag to pan.");
    let hintTimer = null;
    const zoom = attachZoom(svg, W, H, geoLayer, placeMarkers, {
      onHint: () => { hintEl.hidden = false; clearTimeout(hintTimer); hintTimer = setTimeout(() => { hintEl.hidden = true; }, 1600); },
    });
    svg.addEventListener("pointermove", (e) => {
      if (svg.classList.contains("is-dragging")) { hideTip(); return; }
      const n = pick(e);
      setHover(n ? n.id : null);
      svg.style.cursor = n ? "pointer" : "grab";
      if (n) showTip(e, nationTip(n)); else hideTip();
    });
    svg.addEventListener("pointerleave", () => { setHover(null); hideTip(); });
    svg.addEventListener("click", (e) => { if (zoom.wasDrag()) return; const n = pick(e); if (n) location.hash = n.id; });
    zoom.apply();

    // Legend + controls
    const ctrl = el("span", { class: "muted small" }, `Shaded by ${metric.label.toLowerCase()} (Oxford Insights 2025)`);
    const legend = el("div", { class: "legend map-legend" },
      el("span", { class: "ramp-key" },
        `${metric.loLabel} ${metric.lo}`,
        el("span", { class: "ramp" }, [0.05, 0.3, 0.55, 0.8, 1].map((t) => el("i", { style: `background:${rampAt(t)}` }))),
        `${metric.hi} ${metric.hiLabel}`),
      shown.some((n) => !n.oxford) ? el("span", {}, el("i", { style: "background:var(--na)" }), "Not ranked") : null,
      el("span", {}, el("i", { style: "background:var(--land)" }), "Not covered"));

    box.append(
      el("div", { class: "map-head" }, ctrl, legend),
      el("div", { class: "map-stage" }, el("div", { class: "chart map-wrap" }, svg), zoomControls(zoom), hintEl));
    box.append(el("div", { class: "chart-foot" },
      tableToggle(box, () => table(["Nation", "Region", "Readiness rank"],
        [...shown].sort(byRank).map((n) => [n.name, n.group, rankText(n)]), [2])),
      el("span", { class: "muted small" }, "· Source:"), sourceChips([S[metric.source]])));
    return box;
  }
  let mapSlot = null;
  function rerenderMap() { if (mapSlot) mapSlot.replaceChildren(worldMap()); }

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

  function locatorMap(n) {
    const world = worldFeatures();
    if (!world) return null;
    const W = 360, H = 190;
    const proj = d3.geoNaturalEarth1().fitExtent([[4, 4], [W - 4, H - 4]], world);
    const path = d3.geoPath(proj);
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", tabindex: "0", class: "zoomable", "aria-label": `Location of ${n.name}. Use plus and minus keys to zoom.` });
    svg.append(s("defs", {}, s("clipPath", { id: "locclip" }, s("rect", { x: 0, y: 0, width: W, height: H, rx: 8 }))));
    const clip = s("g", { "clip-path": "url(#locclip)" });
    clip.append(s("rect", { x: 0, y: 0, width: W, height: H, fill: "var(--sea)" }));
    const layer = s("g", {});
    for (const f of world.features) {
      const d = path(f);
      if (d) layer.append(s("path", { d, fill: f.id === n.isoN ? "var(--accent)" : "var(--land)", stroke: "var(--land-stroke)", "stroke-width": 0.5, "vector-effect": "non-scaling-stroke" }));
    }
    const dot = s("circle", { r: 5, fill: "var(--accent)", stroke: "var(--surface)", "stroke-width": 2 });
    clip.append(layer, dot);
    svg.append(clip);
    const xy = proj(n.geo);
    const zoom = attachZoom(svg, W, H, layer, (z) => { dot.setAttribute("cx", xy[0] * z.k + z.x); dot.setAttribute("cy", xy[1] * z.k + z.y); }, { maxK: 24 });
    // Open zoomed in on the nation so small states are visible.
    zoom.z.k = 4; zoom.z.x = W / 2 - xy[0] * 4; zoom.z.y = H / 2 - xy[1] * 4;
    zoom.apply();
    return el("div", { class: "locator map-stage" }, svg, zoomControls(zoom));
  }

  // ---------------------------------------------------------------- shared blocks
  function factItem(f, older) {
    return el("article", { class: "fact" + (older ? " is-older" : "") },
      el("div", { class: "fact-date" }, fmtDate(f.date)),
      el("div", {},
        f.topic ? el("span", { class: "fact-topic" }, f.topic) : null,
        el("p", { class: "fact-text" }, f.text),
        el("div", { class: "fact-meta" }, badge(f.level, f.sources.length), sourceChips(f.sources)),
        f.note ? el("p", { class: "note" }, f.note) : null));
  }
  function newsItem(item, n, showCountry, why) {
    return el("article", { class: "news-item" },
      el("div", { class: "fact-date" }, fmtDate(item.date)),
      el("div", {},
        showCountry ? el("p", { class: "who" }, el("a", { href: `#${n.id}` }, `${n.flag} ${n.name}`)) : null,
        el("h3", {}, item.title),
        el("p", { class: "ink2" }, item.summary),
        why && why.length ? el("p", { class: "news-why" }, why.join(" · ")) : null,
        el("div", { class: "fact-meta" }, badge(item.level, item.sources.length), sourceChips(item.sources)),
        item.note ? el("p", { class: "note" }, item.note) : null,
        itemActions(newsKey(item, n), newsSnap(item, n))));
  }
  const allClaims = () => N.flatMap((n) => [...n.facts, ...n.news]);
  // Newest first. Undated-precision items ("2025") sort as the start of that year.
  const byDateDesc = (a, b) => (dateValue(b.date) ?? 0) - (dateValue(a.date) ?? 0);
  const RECENT_FROM = 2024; // the user's focus: developments after 2023
  const isRecent = (x) => (dateValue(x.date) ?? 0) >= RECENT_FROM;
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
  function renderOverview() {
    const claims = allClaims();
    const count = (lv) => claims.filter((c) => c.level === lv).length;
    const srcCount = new Set(claims.flatMap((c) => c.sources.map((x) => x.u))).size;
    const levels = ["verified", "corroborated", "single"];
    const levelColor = { verified: "var(--good)", corroborated: "var(--accent)", single: "var(--warning)" };

    const head = el("section", { class: "hero" },
      el("div", {},
        el("h1", {}, `How ${N.length} small nations are handling AI`),
        el("p", { class: "lede" },
          `${N.length} countries with fewer than 15 million people each, across five regions, and the different paths each has taken on AI: strategy, governance, institutions, adoption and investment. Every claim links to the sources behind it.`)),
      el("div", { class: "card" },
        el("div", { class: "hero-figure" }, `${count("verified")} of ${claims.length}`),
        el("p", { class: "hero-cap" }, `claims confirmed by 3 or more independent sources (${srcCount} sources cited in total)`),
        el("div", { class: "levelbar", role: "img", "aria-label": levels.map((l) => `${LEVELS[l].label}: ${count(l)}`).join(", ") },
          levels.map((l) => el("span", { style: `flex:${count(l)};background:${levelColor[l]}`, title: `${LEVELS[l].label}: ${count(l)}` }))),
        el("div", { class: "legend" }, levels.map((l) => el("span", {}, el("i", { style: `background:${levelColor[l]}` }), `${LEVELS[l].label}: ${count(l)}`)))));

    // Everything below the filter row re-renders against the chosen region.
    const body = el("div", {});
    const drawBody = () => {
      hideTip();
      const list = filtered();
      mapSlot = el("div", {}, worldMap());
      body.replaceChildren(...[
        el("section", { class: "section" },
          sectionHead("Where they are", "Hover a country or dot for its numbers, click to open its profile. Picking a region zooms in."),
          el("div", { class: "card" }, mapSlot,
            el("p", { class: "note" }, "At this scale Singapore, Malta, Bahrain and Mauritius are too small to draw as shapes, so every nation is also marked with a dot at its capital."))),
        el("section", { class: "section" },
          sectionHead("At a glance", "Click a column header to sort; the top rows follow the sort."),
          el("div", { class: "card compare" }, expandable((k) => compareTable(list, k), list.length, { limit: 10, hint: "in this sort order" }), sourceLine("oxford", "wbNet"))),
        dataSources(),
      ]);
    };
    view.replaceChildren(head,
      el("div", { class: "section filter-bar" }, el("span", { class: "filter-label" }, "Region"), regionFilter(drawBody)),
      body);
    drawBody();
  }

  function compareTable(list, limit = Infinity) {
    const cols = [
      { h: "Nation", key: "name", get: (n) => n.name, cell: (n) => el("a", { href: `#${n.id}` }, `${n.flag} ${n.name}`) },
      { h: "Region", key: "group", get: (n) => n.group },
      { h: "First AI strategy", key: "first", get: (n) => n.glance.firstStrategy },
      { h: "Latest strategy", key: "latest", get: (n) => n.glance.latestStrategy },
      { h: "Newest AI body", key: "body", get: (n) => n.glance.newestBodyDate || "", cell: (n) => (n.glance.newestBody === "—" ? "—" : `${n.glance.newestBody} (${fmtDate(n.glance.newestBodyDate)})`) },
      { h: "Readiness rank", key: "rank", num: true, get: (n) => rankOf(n) ?? 999, cell: rankText },
      { h: "Internet users", key: "net", num: true, get: (n) => (n.stats.internet ? n.stats.internet.v : -1), cell: (n) => (n.stats.internet ? `${n.stats.internet.v.toFixed(0)}%` : "n/a") },
    ];
    const wrap = el("div", {});
    const draw = () => {
      const col = cols.find((c) => c.key === state.sortKey) || cols[5];
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
  function renderNation(n) {
    const topics = ["All", ...new Set(n.facts.map((f) => f.topic))];
    let active = "All";
    const list = el("div", { class: "facts" });
    let showOlder = false;
    const drawFacts = () => {
      const pool = n.facts.filter((f) => active === "All" || f.topic === active).sort(byDateDesc);
      const recent = pool.filter(isRecent), older = pool.filter((f) => !isRecent(f));
      const kids = recent.map(factItem);
      if (!recent.length) kids.push(el("p", { class: "muted empty" }, "No developments since 2024 in this topic."));
      if (older.length) {
        kids.push(el("div", { class: "older-toggle" },
          el("button", { type: "button", class: "table-toggle", "aria-expanded": String(showOlder), onclick: () => { showOlder = !showOlder; drawFacts(); } },
            showOlder ? "Hide earlier background" : `Show earlier background (${older.length} before 2024)`)));
        if (showOlder) kids.push(...older.map((f) => factItem(f, true)));
      }
      list.replaceChildren(...kids);
    };
    const filterRow = el("div", { class: "filters topic-filter", role: "group", "aria-label": "Filter facts by topic" });
    const drawFilters = () => filterRow.replaceChildren(...topics.map((t) =>
      el("button", { class: "chip-btn", type: "button", "aria-pressed": String(t === active), onclick: () => { active = t; drawFilters(); drawFacts(); } }, t)));
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
          el("div", {}, el("h1", {}, n.name), el("p", { class: "stance" }, `${n.region} · ${n.stance}`),
            el("p", { class: "muted small", style: "margin-top:6px" }, n.oxford ? `#${pos + 1} of the ${nRanked} nations here in the Oxford Insights readiness index` : "Not in the Oxford Insights readiness index"))),
        locatorMap(n)),
      el("p", { class: "summary" }, n.summary),
      el("p", { class: "muted small", style: "margin-top:6px" }, "This summary is an editorial synthesis of the sourced facts below."),
      el("section", { class: "section" }, tiles),
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
        el("div", { class: "card" }, (() => {
          const items = [...n.news].filter(isRecent).sort(byDateDesc);
          return items.length ? items.map((x) => newsItem(x, n, false)) : [el("p", { class: "muted empty" }, "No news items since 2024 in this dataset.")];
        })())),
      el("nav", { class: "section pager", "aria-label": "Neighbouring nations by rank" },
        pos > 0 ? el("a", { href: `#${ranked[pos - 1].id}` }, `← ${ranked[pos - 1].flag} ${ranked[pos - 1].name}`) : el("span", {}),
        pos < ranked.length - 1 ? el("a", { href: `#${ranked[pos + 1].id}` }, `${ranked[pos + 1].flag} ${ranked[pos + 1].name} →`) : el("span", {})),
    );
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
    let nation = "all", level = "all", theme = null;
    if (!NEWS_SORTS.some(([k]) => k === state.newsSort)) state.newsSort = "newest";
    const list = el("div", { class: "card" });
    const row2 = el("div", { class: "filters", role: "group", "aria-label": "Filter by number of sources" });
    const sortRow = el("div", { class: "filters news-sort", role: "group", "aria-label": "Sort the news" });
    const themeRow = el("div", { class: "news-themes" });
    const select = el("select", { class: "select", "aria-label": "Filter by nation" });
    const draw = () => {
      const opts = [["all", "All nations in region"], ...N.filter(inRegion).sort((a, b) => a.name.localeCompare(b.name)).map((n) => [n.id, `${n.flag} ${n.name}`])];
      if (!opts.some(([k]) => k === nation)) nation = "all";
      select.replaceChildren(...opts.map(([k, lab]) => el("option", { value: k, selected: k === nation }, lab)));
      row2.replaceChildren(...[["all", "Any number of sources"], ...["verified", "corroborated", "single"].map((k) => [k, LEVELS[k].label])].map(([k, lab]) =>
        el("button", { class: "chip-btn", type: "button", "aria-pressed": String(level === k), onclick: () => { level = k; draw(); } }, lab)));
      sortRow.replaceChildren(el("span", { class: "filter-label" }, "Sort"),
        ...NEWS_SORTS.flatMap(([k, lab], i) => [i === 1 ? el("span", { class: "sort-sep", "aria-hidden": "true" }) : null,
          el("button", { class: "chip-btn", type: "button", "aria-pressed": String(state.newsSort === k), onclick: () => { state.newsSort = k; theme = null; draw(); } }, lab)]).filter(Boolean));
      const pool = items.filter(({ x, n }) => inRegion(n) && (nation === "all" || n.id === nation) && (level === "all" || x.level === level));
      const ranked = rankNews(pool, state.newsSort);
      const themeRe = theme ? NEWS_THEMES.find(([name]) => name === theme)[1] : null;
      const shown = themeRe ? ranked.list.filter(({ x }) => themeRe.test(`${x.title}. ${x.summary}`)) : ranked.list;
      themeRow.replaceChildren(...(ranked.themes.length ? [el("span", { class: "muted small" }, "Hot topics, last 60 days:"),
        ...ranked.themes.map((t) => el("button", { class: "chip-btn small", type: "button", "aria-pressed": String(theme === t.name), onclick: () => { theme = theme === t.name ? null : t.name; draw(); } }, `${t.name} · ${t.n}`))] : []));
      list.replaceChildren(...(shown.length ? shown.map(({ x, n, why }) => newsItem(x, n, true, why)) : [el("p", { class: "muted" }, "No items match these filters.")]));
    };
    select.addEventListener("change", () => { nation = select.value; draw(); });
    draw();
    view.replaceChildren(
      el("h1", {}, "News feed"),
      el("p", { class: "summary ink2" }, `${items.length} developments since January 2024 across ${N.length} nations. Research cut-off ${fmtDate(D.meta.asOf)}.`),
      el("section", { class: "section" }, sortRow,
        el("p", { class: "muted small news-sort-note" }, "Relevance combines how much an item is trending, its likely impact and how insightful it is, worked out from its text, sources and date; there is no click or popularity data. Each item says why it ranked. See Method."),
        themeRow, regionFilter(draw), el("div", { class: "filters" }, select), row2, list));
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
  // Curved line between two projected points, bowed to one side so overlapping routes stay readable.
  const arc = (p1, p2, bow) => {
    const mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2, dx = p2[0] - p1[0], dy = p2[1] - p1[1];
    return `M${p1[0]},${p1[1]} Q${mx - dy * bow},${my + dx * bow} ${p2[0]},${p2[1]}`;
  };
  // The same between two [lon, lat] points. A route across the date line (e.g. Fiji to Samoa) would otherwise
  // run the whole width of the map, so it is drawn as two short lines leaving each point towards the nearer edge.
  // `center` is the longitude the projection is rotated to face, which moves the map's edge.
  const relLon = (lon, center) => ((lon - center + 540) % 360) - 180;
  const geoArc = (proj, a, b, bow, center = 0) => {
    const ra = relLon(a[0], center), rb = relLon(b[0], center);
    if (Math.abs(ra - rb) <= 180) return arc(proj(a), proj(b), bow);
    const lat = (a[1] + b[1]) / 2, edge = (r) => proj([center + (r > 0 ? 179.9 : -179.9), lat]);
    return `${arc(proj(a), edge(ra), bow)} ${arc(proj(b), edge(rb), -bow)}`;
  };
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
    const world = worldFeatures();
    if (!world) return el("p", { class: "muted" }, "Map libraries failed to load.");
    const W = 560, H = 320;
    const keys = [...new Set(links.map(([, k]) => k))].filter((k) => party(k));
    const pts = [n.geo, ...keys.map((k) => party(k).geo)];
    // Frame the nation and its partners, padded so short hops still show their surroundings. The map is turned
    // to face the nation, so Pacific neighbours across the date line (e.g. Samoa and Fiji) sit side by side.
    const c = n.geo[0];
    const lons = pts.map((p) => relLon(p[0], c)), lats = pts.map((p) => p[1]), pad = 10;
    const box = { type: "MultiPoint", coordinates: [[c + Math.max(-179.9, Math.min(...lons) - pad), Math.max(-58, Math.min(...lats) - pad)], [c + Math.min(179.9, Math.max(...lons) + pad), Math.min(78, Math.max(...lats) + pad)]] };
    const proj = d3.geoNaturalEarth1().rotate([-c, 0]).fitExtent([[56, 26], [W - 56, H - 26]], box);
    const path = d3.geoPath(proj);
    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", class: "np-map",
      "aria-label": `Map of ${n.name}'s AI partners: ${keys.map((k) => party(k).name).join(", ")}.` });
    svg.append(s("rect", { x: 0, y: 0, width: W, height: H, fill: "var(--sea)" }));
    for (const f of world.features) {
      const d = path(f);
      if (d) svg.append(s("path", { d, class: f.id === n.isoN ? "cx-fill" : null, fill: f.id === n.isoN ? null : "var(--land)", stroke: "var(--land-stroke)", "stroke-width": 0.5 }));
    }
    const home = proj(n.geo);
    for (const [c, k] of links) {
      const p = party(k);
      if (!p) continue;
      svg.append(s("path", { d: geoArc(proj, n.geo, p.geo, c.kind === "bilateral" ? 0.2 : 0.1, n.geo[0]), class: `collab-line np-line ${c.kind}` }, s("title", {}, `${c.short}: ${p.name}`)));
    }
    const label = (xy, text, strong) => {
      const flip = xy[0] > W - 120;
      return s("text", { x: flip ? xy[0] - 9 : xy[0] + 9, y: xy[1] + 4, "text-anchor": flip ? "end" : "start", class: "map-label" + (strong ? " is-strong" : "") }, text);
    };
    const few = keys.length <= 10;
    for (const k of keys) {
      const p = party(k), xy = proj(p.geo);
      svg.append(s("g", { class: "collab-dot" + (p.nation ? "" : " is-outside") }, s("circle", { cx: xy[0], cy: xy[1], r: 4 }, s("title", {}, p.name)), few ? label(xy, p.name) : null));
    }
    svg.append(s("g", { class: "collab-dot is-lit" }, s("circle", { cx: home[0], cy: home[1], r: 6.5 }), label(home, n.name, true)));
    return el("div", { class: "chart np-mapwrap" }, svg);
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

  // ---- view switch between the map and the chord diagram
  const collabSwitch = (active) => el("div", { class: "seg", role: "group", "aria-label": "Collaborations view" },
    el("a", { class: "seg-btn", href: "#collab", "aria-current": active === "map" ? "page" : null }, "Map"),
    el("a", { class: "seg-btn", href: "#collab/chord", "aria-current": active === "chord" ? "page" : null }, "Chord diagram"));

  // ---- chord diagram (#collab/chord): every country or body with an agreement sits on a circle, grouped by region;
  // each agreement is a ribbon between the two parties (a group agreement links each member to its host, as on the map).
  const CHORD_GROUPS = [
    ["Europe", "var(--grp-europe)"], ["Middle East", "var(--grp-mideast)"], ["Africa", "var(--grp-africa)"],
    ["Asia-Pacific", "var(--grp-asia)"], ["Americas", "var(--grp-americas)"],
    ["Outside partners", "var(--grp-outside)"], ["International bodies", "var(--grp-body)"],
  ];
  function renderChord() {
    const all = [...(D.collaborations || [])].sort(byDateDesc);
    // Links: one per pair of parties per agreement.
    const links = all.flatMap((c) => (c.kind === "bilateral" ? [[c.a, c.b]] : c.members.map((m) => [c.hub, m]))
      .filter(([a, b]) => party(a) && party(b)).map(([a, b]) => ({ c, a, b })));
    const groupOf = (k) => { const p = party(k); return COLLAB_BODIES.has(k) ? "International bodies" : p.nation ? p.nation.group : "Outside partners"; };
    const deg = new Map();
    for (const l of links) for (const k of [l.a, l.b]) deg.set(k, (deg.get(k) || 0) + 1);
    const order = CHORD_GROUPS.map(([g]) => g);
    const nodes = [...deg.keys()].map((k) => ({ k, p: party(k), g: groupOf(k), deg: deg.get(k) }))
      .sort((x, y) => order.indexOf(x.g) - order.indexOf(y.g) || y.deg - x.deg || x.p.name.localeCompare(y.p.name));

    // Angles: each node gets one base unit plus one per link, with gaps between nodes and wider gaps between groups.
    const TAU = Math.PI * 2, NODE_GAP = 0.004, GROUP_GAP = 0.05;
    const groupsUsed = new Set(nodes.map((n) => n.g)).size;
    const units = nodes.reduce((t, n) => t + 1 + n.deg, 0);
    const unit = (TAU - nodes.length * NODE_GAP - groupsUsed * GROUP_GAP) / units;
    let a = GROUP_GAP / 2, prevG = null;
    for (const n of nodes) {
      if (prevG && n.g !== prevG) a += GROUP_GAP;
      prevG = n.g;
      n.a0 = a; n.a1 = a + (1 + n.deg) * unit; n.mid = (n.a0 + n.a1) / 2;
      a = n.a1 + NODE_GAP;
    }
    const byKey = new Map(nodes.map((n) => [n.k, n]));
    // Each link end gets a slot on its node, ordered by where the other end sits so ribbons do not cross at the node.
    const ends = new Map(nodes.map((n) => [n.k, []]));
    links.forEach((l, i) => { ends.get(l.a).push({ i, other: l.b }); ends.get(l.b).push({ i, other: l.a }); });
    const slot = new Map();
    for (const n of nodes) {
      const rel = (k) => (byKey.get(k).mid - n.mid + TAU) % TAU;
      const list = ends.get(n.k).sort((x, y) => rel(y.other) - rel(x.other));
      const start = n.a0 + unit / 2;
      list.forEach((e, j) => slot.set(`${e.i}:${n.k}`, [start + j * unit, start + (j + 1) * unit]));
    }

    const R = 300, W = 940;
    const pt = (ang, r) => `${(r * Math.sin(ang)).toFixed(1)},${(-r * Math.cos(ang)).toFixed(1)}`;
    const svg = s("svg", { viewBox: `${-W / 2} ${-W / 2} ${W} ${W}`, class: "chord", role: "img",
      "aria-label": `Chord diagram of ${all.length} AI agreements between ${nodes.length} countries and international bodies, grouped by region.` });
    const ribbons = s("g", { class: "ch-ribbons" }), arcs = s("g", {}), labels = s("g", {});
    svg.append(ribbons, arcs, labels);

    const ribbonEls = links.map((l, i) => {
      const [a0, a1] = slot.get(`${i}:${l.a}`), [b0, b1] = slot.get(`${i}:${l.b}`);
      const d = `M${pt(a0, R)} A${R},${R} 0 0 1 ${pt(a1, R)} Q0,0 ${pt(b0, R)} A${R},${R} 0 0 1 ${pt(b1, R)} Q0,0 ${pt(a0, R)} Z`;
      const path = s("path", { d, class: `ch-ribbon ${l.c.kind}`, tabindex: "0", role: "link", "aria-label": `${l.c.title}: ${party(l.a).name} and ${party(l.b).name}` });
      path.addEventListener("pointermove", (e) => showTip(e, [el("div", { class: "tv" }, l.c.short || l.c.title),
        el("div", { class: "tl" }, `${party(l.a).name} ⟷ ${party(l.b).name}`),
        el("div", { class: "tl small" }, `${monthYear(l.c.date)} · ${l.c.kind === "bilateral" ? "two countries" : "group agreement"} · click to open`)]));
      path.addEventListener("pointerleave", hideTip);
      const open = () => { location.hash = `collab/${l.c.id}`; };
      path.addEventListener("click", open);
      path.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
      ribbons.append(path);
      return path;
    });

    const color = (g) => CHORD_GROUPS.find(([name]) => name === g)[1];
    const nodeEls = new Map();
    for (const n of nodes) {
      const r0 = R + 3, r1 = R + 15, big = n.a1 - n.a0 > Math.PI ? 1 : 0;
      const d = `M${pt(n.a0, r1)} A${r1},${r1} 0 ${big} 1 ${pt(n.a1, r1)} L${pt(n.a1, r0)} A${r0},${r0} 0 ${big} 0 ${pt(n.a0, r0)} Z`;
      const deg = (n.mid * 180) / Math.PI, flip = n.mid > Math.PI;
      const g = s("g", { class: "ch-node", tabindex: "0", role: "button", "aria-label": `${n.p.name}: ${n.deg} link${n.deg === 1 ? "" : "s"}` },
        s("path", { d, fill: color(n.g) }),
        s("text", { transform: `rotate(${deg - 90}) translate(${R + 21},0)${flip ? " rotate(180)" : ""}`, "text-anchor": flip ? "end" : "start", dy: "0.35em", class: "ch-label" + (n.p.nation ? "" : " is-outside") },
          `${n.p.flag} ${n.p.nation ? shortName(n.p.nation) : n.p.name}`));
      g.addEventListener("pointermove", (e) => { if (!locked) focus(n.k); showTip(e, [el("div", { class: "tv" }, `${n.p.flag} ${n.p.name}`), el("div", { class: "tl" }, `${agreementsOf(n.k).length} agreement${agreementsOf(n.k).length === 1 ? "" : "s"} · ${n.g}`), el("div", { class: "tl small" }, "Click to list them")]); });
      g.addEventListener("pointerleave", () => { hideTip(); if (!locked) focus(null); });
      g.addEventListener("click", () => select(n.k));
      g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(n.k); } });
      arcs.append(g);
      nodeEls.set(n.k, g);
    }

    // Focus: light up one party's ribbons and partners. A click locks it and lists its agreements beside the diagram.
    let locked = null;
    const agreementsOf = (k) => all.filter((c) => links.some((l) => l.c === c && (l.a === k || l.b === k)));
    function focus(k) {
      svg.classList.toggle("has-focus", !!k);
      const partners = new Set(k ? [k] : []);
      links.forEach((l, i) => {
        const on = !!k && (l.a === k || l.b === k);
        ribbonEls[i].classList.toggle("is-on", on);
        if (on) { partners.add(l.a); partners.add(l.b); }
      });
      for (const [key, g] of nodeEls) g.classList.toggle("is-on", partners.has(key));
    }
    const side = el("div", { class: "card ch-side", "aria-live": "polite" });
    function drawSide() {
      if (!locked) {
        const top = [...nodes].sort((x, y) => agreementsOf(y.k).length - agreementsOf(x.k).length).slice(0, 8);
        side.replaceChildren(
          el("h2", { class: "ch-side-h" }, "Most connected"),
          el("p", { class: "muted small" }, "Click a country on the circle, or one below, to see its agreements. Click a ribbon to open an agreement."),
          el("div", { class: "ch-top" }, top.map((n) => el("button", { class: "cpill ch-pick", type: "button", onclick: () => select(n.k) },
            el("span", { class: "cpill-flag", "aria-hidden": "true" }, n.p.flag), n.p.name, el("span", { class: "sv-count" }, String(agreementsOf(n.k).length))))));
        return;
      }
      const p = party(locked), list = agreementsOf(locked);
      side.replaceChildren(
        el("div", { class: "ch-side-top" },
          el("h2", { class: "ch-side-h" }, `${p.flag} ${p.name}`),
          el("button", { class: "linklike small", type: "button", onclick: () => select(null) }, "Clear")),
        el("p", { class: "muted small" }, `${list.length} agreement${list.length === 1 ? "" : "s"}`, p.nation ? [" · ", el("a", { href: `#${p.key}` }, "Open nation page")] : null),
        el("div", { class: "np-rows" }, list.map((c) => el("a", { class: "cx-row", href: `#collab/${c.id}` }, ...collabRowParts(c, p.nation ? p.key : undefined)))));
    }
    function select(k) {
      locked = k && locked !== k ? k : null;
      focus(locked);
      drawSide();
    }
    svg.addEventListener("click", (e) => { if (e.target === svg) select(null); });
    drawSide();

    const nBil = all.filter((c) => c.kind === "bilateral").length;
    view.replaceChildren(
      el("h1", {}, "AI collaborations between countries"),
      el("p", { class: "summary ink2" }, `${all.length} AI agreements between governments (${nBil} between two countries, ${all.length - nBil} in groups). Each ribbon links two parties; a group agreement links each member to its host, so busy hubs such as the Global Partnership on AI stand out.`),
      collabSwitch("chord"),
      el("section", { class: "section ch-wrap" },
        el("div", { class: "card ch-card" }, el("div", { class: "chart ch-chart" }, svg),
          el("div", { class: "legend" },
            CHORD_GROUPS.filter(([g]) => nodes.some((n) => n.g === g)).map(([g, col]) => el("span", {}, el("i", { style: `background:${col}` }), g)),
            el("span", {}, el("i", { class: "line", style: "background:var(--series-1)" }), "Two countries"),
            el("span", {}, el("i", { class: "line", style: "background:var(--series-2)" }), "Group agreement"))),
        side),
      el("p", { class: "muted small" }, "Arc length grows with a party's number of links. The Africa Declaration on AI has no member list here, so it does not appear."));
  }

  function renderCollab(initialId) {
    if (initialId === "chord") return renderChord();
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
    const W = 960, H = 480;
    const world = worldFeatures();
    const mapCard = el("div", { class: "card cx-map" });
    let proj = null, zoom = null, svg = null;
    let paint = () => {};
    if (!world) mapCard.append(el("p", { class: "muted" }, "Map libraries failed to load."));
    else {
      proj = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], world);
      const path = d3.geoPath(proj);
      svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, role: "img", tabindex: "0", class: "zoomable collab-map",
        "aria-label": `Map of ${all.length} AI agreements between countries. The selected agreement is drawn brightly and its countries are shaded.` });
      svg.append(s("defs", {}, s("clipPath", { id: "collabclip" }, s("rect", { x: 0, y: 0, width: W, height: H, rx: 8 }))));
      const clip = s("g", { "clip-path": "url(#collabclip)" });
      clip.append(s("rect", { x: 0, y: 0, width: W, height: H, fill: "var(--sea)" }));
      const geoLayer = s("g", {});
      geoLayer.append(s("path", { d: path({ type: "Sphere" }), fill: "var(--sea)", stroke: "var(--grid)", "vector-effect": "non-scaling-stroke" }));
      const land = new Map();
      for (const f of world.features) { const d = path(f); if (d) { land.set(f.id, d); geoLayer.append(s("path", { d, fill: "var(--land)", stroke: "var(--land-stroke)", "stroke-width": 0.6, "vector-effect": "non-scaling-stroke" })); } }
      const fillLayer = s("g", {}), lineLayer = s("g", {}), topLayer = s("g", {}), hitLayer = s("g", {});
      geoLayer.append(fillLayer, lineLayer, topLayer, hitLayer);
      const segs = [];
      for (const c of all) {
        const pairs = c.kind === "bilateral" ? [[c.a, c.b]] : c.members.map((m) => [c.hub, m]);
        for (const [k1, k2] of pairs) {
          const a = party(k1), b = party(k2);
          if (!a || !b) continue;
          const d = geoArc(proj, a.geo, b.geo, c.kind === "bilateral" ? 0.2 : 0.08);
          const vis = s("path", { d, class: `collab-line ${c.kind}`, "vector-effect": "non-scaling-stroke" });
          const hit = s("path", { d, class: "collab-hit", "vector-effect": "non-scaling-stroke", "data-id": c.id });
          hit.addEventListener("pointermove", (e) => { if (!svg.classList.contains("is-dragging")) showTip(e, [el("div", { class: "tv" }, c.short || c.title), el("div", { class: "tl" }, partiesOf(c).map((p) => p.name).join(c.kind === "bilateral" ? " ⟷ " : ", ")), el("div", { class: "tl small", style: "margin-top:4px" }, "Click for details")]); });
          hit.addEventListener("pointerleave", hideTip);
          lineLayer.append(vis);
          hitLayer.append(hit);
          segs.push({ c, d, vis });
        }
      }
      // Country dots live in screen space so they keep their size while zooming.
      const dotLayer = s("g", {});
      clip.append(geoLayer, dotLayer);
      svg.append(clip);
      const dots = [...counts.keys()].map((k) => ({ p: party(k), k })).filter((d) => d.p).map((d) => ({ ...d, xy: proj(d.p.geo) }));
      const place = (z) => {
        const c = byCid.get(st.sel);
        const lit = new Set(c ? collabParties(c) : []);
        // Name every country in the selected agreement; for large groups only the host.
        const named = new Set(c ? (lit.size <= 6 ? lit : [c.hub]) : []);
        const shownKeys = new Set(shownList().flatMap(collabParties));
        const node = (d) => {
          const x = d.xy[0] * z.k + z.x, y = d.xy[1] * z.k + z.y;
          const on = lit.has(d.k);
          const r = on ? 6 : 2.5 + Math.min(counts.get(d.k), 5) * 0.5;
          const g = s("g", { class: "collab-dot" + (on ? " is-lit" : "") + (d.p.nation ? "" : " is-outside") + (shownKeys.has(d.k) ? "" : " is-out"), "data-k": d.k, tabindex: on ? "0" : "-1", role: "button",
            "aria-label": `${d.p.name}: ${counts.get(d.k)} agreement${counts.get(d.k) > 1 ? "s" : ""}. Show them.` });
          g.append(s("circle", { cx: x, cy: y, r }));
          if (named.has(d.k)) {
            const flip = x > W - 150;
            g.append(s("text", { x: flip ? x - r - 4 : x + r + 4, y: y + 4, class: "map-label is-strong", "text-anchor": flip ? "end" : "start" }, d.p.name));
          }
          g.addEventListener("pointermove", (e) => showTip(e, [el("div", { class: "tv" }, `${d.p.flag} ${d.p.name}`), el("div", { class: "tl" }, `${counts.get(d.k)} agreement${counts.get(d.k) > 1 ? "s" : ""}`), el("div", { class: "tl small", style: "margin-top:4px" }, "Click to list them")]));
          g.addEventListener("pointerleave", hideTip);
          g.addEventListener("keydown", (e) => { if (e.key === "Enter") selectCountry(d.k); });
          return g;
        };
        const rank = (d) => (named.has(d.k) ? 2 : lit.has(d.k) ? 1 : 0);
        dotLayer.replaceChildren(...[...dots].sort((a, b) => rank(a) - rank(b)).map(node));
      };
      const hintEl = el("div", { class: "map-hint", hidden: true }, "Click the map, or hold ⌘/Ctrl, to zoom with scroll. Drag to pan.");
      let hintTimer = null;
      zoom = attachZoom(svg, W, H, geoLayer, place, { maxK: 10, onUser: () => pause(),
        onHint: () => { hintEl.hidden = false; clearTimeout(hintTimer); hintTimer = setTimeout(() => { hintEl.hidden = true; }, 1600); } });
      zoom.apply();
      // The map captures the pointer while pressed (for dragging), so clicks land on the svg itself:
      // find the dot or line under the pointer from there.
      svg.addEventListener("click", (e) => {
        if (zoom.wasDrag()) return;
        for (const n of document.elementsFromPoint(e.clientX, e.clientY)) {
          const dot = n.closest && n.closest(".collab-dot");
          if (dot) { hideTip(); selectCountry(dot.dataset.k); return; }
          if (n.classList && n.classList.contains("collab-hit")) { hideTip(); select(n.dataset.id, true); return; }
        }
      });
      paint = () => {
        const c = byCid.get(st.sel);
        const shownIds = new Set(shownList().map((x) => x.id));
        segs.forEach(({ c: x, vis }) => vis.classList.toggle("is-out", !shownIds.has(x.id)));
        topLayer.replaceChildren(...segs.filter((x) => c && x.c.id === c.id).flatMap(({ d }) => [
          s("path", { d, class: `collab-glow ${c.kind}`, "vector-effect": "non-scaling-stroke" }),
          s("path", { d, class: `collab-line is-on ${c.kind}`, "vector-effect": "non-scaling-stroke" })]));
        const isos = c ? collabParties(c).map((k) => (byId(k) || PLACES[k] || {}).isoN).filter((i) => i && land.has(i)) : [];
        fillLayer.replaceChildren(...isos.map((i) => s("path", { d: land.get(i), class: "cx-fill", "vector-effect": "non-scaling-stroke" })));
        place(zoom.z);
      };
      mapCard.append(el("div", { class: "map-stage" }, el("div", { class: "chart map-wrap" }, svg), zoomControls(zoom), hintEl));
    }
    // Frame the selected agreement's countries, leaving room for their labels.
    const fit = (c) => {
      if (!zoom || !c) return;
      const pts = partiesOf(c).map((p) => proj(p.geo));
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
      const k = Math.max(1, Math.min((W - 260) / Math.max(x1 - x0, 1), (H - 150) / Math.max(y1 - y0, 1), pts.length > 1 ? 4 : 3));
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      zoom.flyTo({ k, x: W / 2 - cx * k, y: H / 2 - cy * k });
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
    const TOUR_MS = 3000;
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
    if (zoom) zoom.flyTo({ k: 1, x: 0, y: 0 }, 0);
    if (linked) requestAnimationFrame(() => { markRow(true); fit(byCid.get(st.sel)); });
    else play();

    const nBil = all.filter((c) => c.kind === "bilateral").length;
    view.replaceChildren(
      el("h1", {}, "AI collaborations between countries"),
      el("p", { class: "summary ink2" }, `${all.length} AI agreements between governments (${nBil} between two countries, ${all.length - nBil} in groups), each involving at least one nation on this site. The map steps through them every few seconds; pick one from the list to stop and read it.`),
      collabSwitch("map"),
      el("section", { class: "section cx" },
        el("div", { class: "cx-side card" }, el("div", { class: "cx-side-in" }, search, status, rows)),
        stage),
      el("p", { class: "muted small cx-foot" },
        el("span", {}, el("i", { class: "key-dot" }), "Nation on this site"),
        el("span", {}, el("i", { class: "key-dot is-outside" }), "Partner country outside this site"),
        el("span", {}, el("i", { class: "key-line" }), "Two countries"),
        el("span", {}, el("i", { class: "key-line group" }), "Group: lines run to the host")));
  }

  function renderMethod() {
    const claims = allClaims();
    const cnt = (lv) => claims.filter((c) => c.level === lv).length;
    const srcCount = new Set(claims.flatMap((c) => c.sources.map((x) => x.u))).size;
    const grp = (g) => N.filter((n) => n.group === g).length;
    const tally = (label, v, sub) => el("div", { class: "tile" }, el("div", { class: "l" }, label), el("div", { class: "v" }, v), el("div", { class: "s" }, sub));
    view.replaceChildren(el("article", { class: "method" },
      el("h1", {}, "Method & verification"),
      el("p", { class: "summary" }, "How the facts on this site were researched and checked, and what the badges mean."),
      el("div", { class: "tally" },
        tally("Claims", String(claims.length), `across ${N.length} nations`),
        tally("3+ sources", String(cnt("verified")), "independent sources agree"),
        tally("2 sources", String(cnt("corroborated")), "independent sources agree"),
        tally("1 source", String(cnt("single")), "flagged on the claim")),
      el("h2", {}, `Why these ${N.length} nations`),
      el("p", {}, `The site covers sovereign states with fewer than 15 million people. Territories are not included. Coverage spans Europe (${grp("Europe")}, including the South Caucasus), the Middle East (${grp("Middle East")}), Asia-Pacific (${grp("Asia-Pacific")}), Africa (${grp("Africa")}) and the Americas (${grp("Americas")}). The first six (Singapore, Estonia, UAE, Rwanda, Uruguay, Malta) have the deepest profiles. The rest have 1–5 key facts each.`),
      el("h2", {}, "How each claim was checked"),
      el("ul", {},
        el("li", {}, "Each claim was researched across multiple searches and cross-checked against primary sources (government sites, official releases, the publishers' own reports) and independent coverage."),
        el("li", {}, "Each claim's badge says how many independent sources confirm it: 3+ sources, 2 sources or 1 source. Pages from the same organisation, or articles that republish another outlet's text word for word, count as one source, so the badge can show fewer sources than the links listed."),
        el("li", {}, "Which sources count: government and parliament sites, international organisations, established news outlets, law firms and recognised research bodies. Third-party AI-policy tracker sites, auto-generated regulation explainers, compliance-vendor blogs and personal blogs are not used, because they are not independent evidence."),
        el("li", {}, "Where sources disagree (dates, counts, names), the claim gives the best-supported version and the disagreement is shown in a Note."),
        el("li", {}, "Index figures (Oxford Insights, Microsoft, World Bank, Stanford AI Index) were read directly from the publisher's own report, PDF table or API.")),
      el("h2", {}, "The full audit (10 October 2026)"),
      el("p", {}, `After the first build, every claim on the site was re-checked against its sources:`),
      el("ul", {},
        el("li", {}, `All ${srcCount} cited pages were fetched. For each claim, a script extracted its specific dates, numbers and names and checked whether each cited page contained them.`),
        el("li", {}, "Every mismatch was reviewed by hand against the most relevant passage of the page."),
        el("li", {}, "Pages that block automated access were opened in a browser where possible. Pages behind bot challenges (for example Bloomberg and gov.mt) were not bypassed. Readable independent coverage was found to replace them."),
        el("li", {}, "Where no readable source could confirm a detail, the detail was removed or the badge was lowered.")),
      el("h2", {}, "How the news feed ranks items"),
      el("p", {}, "The news feed can be sorted by date or by relevance. The site has no click or popularity data, so relevance is worked out from each item's own text, sources and date. It combines three signals with equal weight, each scaled from 0 to 1 across the items shown, and every item lists the signals that placed it."),
      el("ul", {},
        el("li", {}, "Trending: items are grouped into themes (strategies, laws, data centres, partnerships, skills, AI in government services, rankings, safety and misuse, investment, China and WAICO). A theme is hot when many recent items are about it, weighted towards the last month; an item scores high when it is recent and on hot themes."),
        el("li", {}, "Impact: points for a law or binding rule adopted, a strategy or policy decision, billion- or million-scale money, a new public body, compute infrastructure or an international agreement, minus a little for events and trainings."),
        el("li", {}, "Insight: points for data or an assessment (indices, rankings, surveys, reports), percentages, comparisons, specific figures and a noted caveat or source disagreement."),
        el("li", {}, "Items with more independent sources get a small bonus. These are simple keyword rules, not a judgement of importance.")),
      el("h2", {}, "The last 19 nations (21 October 2026)"),
      el("ul", {},
        el("li", {}, "To cover every sovereign state under 15 million people (Israel aside), 19 were added: Timor-Leste, Vanuatu, Samoa, Kiribati, Micronesia, the Marshall Islands, Nauru, Tuvalu, Turkmenistan, Cuba, Dominica, Saint Vincent and the Grenadines, South Sudan, the Central African Republic, Eritrea, Guinea-Bissau, Equatorial Guinea, Kosovo and the Holy See. Territories are not included."),
        el("li", {}, "Every source was fetched and checked by hand; pages that block automated requests were read in a browser or from an Internet Archive copy. Several of these nations have little or no public AI activity, and their pages say so rather than padding them out."),
        el("li", {}, "Oxford Insights does not rank Kosovo or the Holy See, and the World Bank has no data for the Holy See, so their pages show no figure there."),
        el("li", {}, "Collaborations: Cuba added to WAICO, Dominica and Saint Vincent and the Grenadines to the CARICOM roadmap, and a new Pacific Islands Forum AI principles group.")),
      el("h2", {}, "Collaborations check (21 October 2026)"),
      el("ul", {},
        el("li", {}, "Every agreement was re-read to confirm it is an AI agreement between governments, with sources that say so. 48 remained."),
        el("li", {}, "Removed: Laos–China health AI (the Lao ministry's partners were Chinese companies, not the Chinese government), Haiti–Malaysia (a telecom regulators' memorandum, not about AI) and the SICA regional entry (a digital-strategy presidency, not an AI agreement)."),
        el("li", {}, "Corrected: Serbia added to WAICO (it signed the founding agreement in Shanghai in July 2026), and the CARICOM entry now describes COTED's July 2026 endorsement of the UNESCO Caribbean AI Policy Roadmap, flagged as resting on one source.")),
      el("h2", {}, "Third audit (20 October 2026)"),
      el("ul", {},
        el("li", {}, "Every cited link (about 760) was fetched again and every claim, news item and collaboration was re-checked against its sources. Pages that block automated requests were read in a browser."),
        el("li", {}, "More sources that break the source rule were removed: a policy-tracker site, a compliance vendor's explainers, an AI-law aggregator, a personal blog, consultancy and vendor blogs, and Wikipedia. One dead government page and one page behind a bot check were dropped. 16 badges were lowered to match the sources left."),
        el("li", {}, "Removed: São Tomé and Príncipe's $10 billion 'AI nation' memorandum, which was reported only by a crypto news blog, and a detail on Uruguay's Instituto Vidart (the number of design meetings) that no source now carries."),
        el("li", {}, "Corrected or re-sourced: the US–Uruguay technology memorandum (signed 10 April 2024 in Montevideo, per the US Commerce Department), El Salvador's 20%-of-GDP AI goal, Malta's GPAI membership, Jordan's HUMAIN memorandum, the UAE AI Charter, and the Q1 2026 Microsoft figures for Singapore.")),
      el("h2", {}, "Second audit (14 October 2026)"),
      el("ul", {},
        el("li", {}, "Every cited link was fetched again, and every readiness score, Microsoft usage figure, World Bank statistic and AI Index talent figure was re-checked against its dataset. All matched."),
        el("li", {}, "Sources from AI-policy tracker sites, vendor explainers and personal blogs were removed. Claims that still had credible sources kept them, with badges recalculated. About ten were re-sourced to government, news or international-organisation pages, and 28, mostly 'country X has no AI law' statements that only trackers supported, were deleted."),
        el("li", {}, "Corrected: Panama's strategy approval (Cabinet, 11 August 2026; an unverified resolution number was removed), Sweden's AI Act plan (an October 2025 inquiry naming PTS, not June 2026 interim authorities), Slovenia's National AI Strategy to 2030 (adopted 5 March 2026), and a Singapore MAS item whose main source had disappeared."),
        el("li", {}, "Details found only in removed sources were cut, including Hungary's 2026 decree on AI supervision, Croatia's missed AI Act deadline, and several exact dates and document numbers.")),
      el("h2", {}, "Corrections made"),
      el("ul", {},
        el("li", {}, "Removed: the Stargate UAE '5,000 workers' figure, MAS's '80% of risk officers' figure, Omar Al Olama's age, Norway's '4–6 research centres', a 2028 Swiss date, Slovenia's exact AI-factory launch day, El Salvador's '2031' target year, and Kuwait's unconfirmed '2025–2028' strategy dates."),
        el("li", {}, "Fixed: the UAE AI & Data Authority date (14 June 2026), the UAE strategy's two dates (2017 launch, 2019 adoption), and Finland's gigafactory claim (now the documented Nokia-led bid)."),
        el("li", {}, "Fixed: readiness scores for 13 newly added nations were corrected to match Oxford Insights' table exactly."),
        el("li", {}, "Flagged: some Microsoft figures are regional estimates, not national measurements: Benin, Sierra Leone, Togo, Liberia and Mauritania (9.3%, West Africa); Guyana and Suriname (9.0%, shared with Venezuela and French Guiana); Congo (7.8%, shared with Cameroon, Chad, the Central African Republic and DR Congo); Tajikistan (5.6%, shared with Afghanistan and Turkmenistan); and Burundi (6.8%, shared with several East African countries)."),
        el("li", {}, "Replaced about 50 dead, empty or bot-blocked source links with readable sources that confirm the claim."),
        el("li", {}, "Oxford Insights' December 2025 rankings contained errors. This site uses the validated January 2026 table.")),
      el("h2", {}, "What's shown"),
      el("ul", {},
        el("li", {}, "Nation pages and the News feed focus on developments since January 2024, newest first. Earlier background, such as first strategies, is available behind a 'Show earlier background' toggle."),
        el("li", {}, "Maps can be zoomed (scroll after clicking the map, ⌘/Ctrl + scroll, pinch, double-click, or the +/− buttons) and dragged.")),
      el("h2", {}, "Limits"),
      el("ul", {},
        el("li", {}, `This is a snapshot as of ${fmtDate(D.meta.asOf)}. The news feed does not update itself.`),
        el("li", {}, "Summaries and 'stance' lines are editorial synthesis, not quotations."),
        el("li", {}, "Profiles, saved items and review notes are kept only in this browser. They don't sync between devices, and clearing site data deletes them."),
        el("li", {}, "Programme-reported figures are the programmes' own numbers, not independent evaluations. Government-aligned outlets are labelled where relevant."),
        el("li", {}, "Map boundaries come from Natural Earth (110m scale). They are approximate and don't imply any position on disputed borders."),
        el("li", {}, "Disclosure: this dashboard was compiled by Claude, an AI model made by Anthropic. Anthropic is party to agreements described here (Rwanda MOU, Estonia AI Leap talks). Those claims rely on both parties' public statements.")),
    ));
  }

  // ---------------------------------------------------------------- profiles, saved items and review marks
  // Everything is kept in this browser's localStorage (no server yet): a list of profiles with salted
  // password hashes, and per profile the saved items and review marks (read & vetted / seems suspicious + note).
  const Store = (() => {
    const K_PROFILES = "atlas-profiles", K_USER = "atlas-user";
    const read = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
    const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
    const hash = (salt, pw) => window.atlasGate.sha256(`${salt}:${pw}`);
    const idOf = (name) => name.trim().toLowerCase();
    let user = read(K_USER, null);
    if (user && !read(K_PROFILES, {})[user]) user = null;
    let data = null;
    const load = () => { data = user ? Object.assign({ saved: {}, marks: {} }, read(`atlas-data:${user}`, {})) : null; };
    const save = () => { if (user) write(`atlas-data:${user}`, data); };
    const listeners = new Set();
    const emit = (why) => listeners.forEach((fn) => fn(why));
    load();
    return {
      user: () => user,
      displayName: () => (user ? read(K_PROFILES, {})[user].name : null),
      onChange: (fn) => listeners.add(fn),
      create(name, pw) {
        const id = idOf(name), all = read(K_PROFILES, {});
        if (!/^[\w .-]{2,32}$/.test(name.trim())) return "Use 2–32 letters, numbers, spaces, dots or dashes.";
        if (all[id]) return "That name is taken on this browser. Sign in instead.";
        if (pw.length < 4) return "Use a password of at least 4 characters.";
        const salt = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
        all[id] = { name: name.trim(), salt, hash: hash(salt, pw), created: new Date().toISOString() };
        if (!write(K_PROFILES, all)) return "This browser is not letting the site store anything (private mode?).";
        user = id; write(K_USER, user); load(); emit("auth");
        return null;
      },
      signIn(name, pw) {
        const p = read(K_PROFILES, {})[idOf(name)];
        if (!p || p.hash !== hash(p.salt, pw)) return "Name or password not recognised on this browser.";
        user = idOf(name); write(K_USER, user); load(); emit("auth");
        return null;
      },
      signOut() { user = null; try { localStorage.removeItem(K_USER); } catch {} load(); emit("auth"); },
      deleteProfile() {
        const all = read(K_PROFILES, {});
        delete all[user]; write(K_PROFILES, all);
        try { localStorage.removeItem(`atlas-data:${user}`); } catch {}
        this.signOut();
      },
      data: () => data,
      isSaved: (key) => !!(data && data.saved[key]),
      toggleSave(key, snap) {
        if (data.saved[key]) delete data.saved[key];
        else data.saved[key] = { ...snap, at: new Date().toISOString() };
        save(); emit("data");
      },
      mark: (key) => (data && data.marks[key]) || null,
      // patch: { status?: "vetted" | "sus" | null, note?: string }. A mark with no status and no note is dropped.
      setMark(key, patch, snap) {
        const m = { ...(data.marks[key] || {}), ...snap, ...patch, at: new Date().toISOString() };
        if (!m.status && !(m.note || "").trim()) delete data.marks[key];
        else data.marks[key] = m;
        save(); emit("data");
      },
    };
  })();

  // Sign-in / create-profile dialog. `then` runs after a successful sign-in (e.g. the save the user clicked).
  function accountDialog(then, mode = "signin") {
    const dlg = el("dialog", { class: "acct-dialog", "aria-labelledby": "acctTitle" });
    let typedName = "";
    const draw = () => {
      const creating = mode === "create";
      const err = el("p", { class: "acct-err", role: "alert", hidden: true });
      const field = (label, input) => el("div", { class: "acct-field" }, el("label", { class: "acct-label", for: input.id }, label), input);
      const name = el("input", { class: "acct-input", id: "acctName", autocomplete: "username", required: true, maxlength: "32", value: typedName });
      name.addEventListener("input", () => { typedName = name.value; });
      const pw = el("input", { class: "acct-input", id: "acctPw", type: "password", autocomplete: creating ? "new-password" : "current-password", required: true });
      const pw2 = creating ? el("input", { class: "acct-input", id: "acctPw2", type: "password", autocomplete: "new-password", required: true }) : null;
      const tab = (m, label) => el("button", { class: "seg-btn", type: "button", "aria-pressed": String(mode === m), onclick: () => { if (mode !== m) { mode = m; draw(); } } }, label);
      const form = el("form", { method: "dialog", onsubmit: (e) => {
        e.preventDefault();
        if (creating && pw.value !== pw2.value) { err.textContent = "The two passwords don't match."; err.hidden = false; return; }
        const msg = creating ? Store.create(name.value, pw.value) : Store.signIn(name.value, pw.value);
        if (msg) { err.textContent = msg; err.hidden = false; return; }
        dlg.close();
        if (then) then();
        route(true); // redraw so every icon on the page shows this profile's marks
      } },
        el("button", { class: "acct-close", type: "button", "aria-label": "Close", onclick: () => dlg.close() }, "×"),
        el("div", { class: "acct-head" },
          el("h2", { id: "acctTitle" }, creating ? "Create a profile" : "Welcome back"),
          el("p", { class: "ink2 small" }, then ? "Sign in to save items and leave review notes." : "Save agreements, news and documents, and keep review notes.")),
        el("div", { class: "seg acct-tabs", role: "group", "aria-label": "Sign in or create a profile" }, tab("signin", "Sign in"), tab("create", "Create profile")),
        field("Name", name),
        field("Password", pw),
        creating ? field("Confirm password", pw2) : null,
        err,
        el("button", { class: "acct-btn primary acct-submit", type: "submit" }, creating ? "Create profile" : "Sign in"),
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
    const panel = el("div", { class: "acct-menu", hidden: true },
      el("p", { class: "muted small" }, `Signed in as ${Store.displayName()}`),
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
    let editing = false;
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
      view.replaceChildren(el("h1", {}, "Saved & reviewed"),
        el("p", { class: "summary ink2" }, "Sign in to keep a list of agreements, news and documents, and to mark what you have read and vetted or what looks suspicious, with notes."),
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
        ["note", "Notes", marks.filter(([, m]) => (m.note || "").trim()), "No notes yet. Use ✎ on any agreement, news item or key document."],
      ];
      if (!tabs.some(([k]) => k === state.savedTab)) state.savedTab = "saved";
      const [, , list, empty] = tabs.find(([k]) => k === state.savedTab);
      body.replaceChildren(
        el("div", { class: "seg sv-tabs", role: "group", "aria-label": "Show" }, tabs.map(([k, lab, l]) =>
          el("button", { class: "seg-btn", type: "button", "aria-pressed": String(state.savedTab === k), onclick: () => { state.savedTab = k; draw(); } }, lab, el("span", { class: "sv-count" }, String(l.length))))),
        el("div", { class: "card sv-list" }, list.length ? list.map(([k, x]) => entry(k, x)) : el("p", { class: "muted" }, empty)));
    };
    draw();
    const download = () => {
      const blob = new Blob([JSON.stringify({ profile: Store.displayName(), exported: new Date().toISOString(), ...d }, null, 2)], { type: "application/json" });
      const a = el("a", { href: URL.createObjectURL(blob), download: `atlas-${slug(Store.displayName())}.json` });
      document.body.append(a); a.click(); a.remove();
    };
    view.replaceChildren(
      el("h1", {}, "Saved & reviewed"),
      el("p", { class: "summary ink2" }, `${Store.displayName()}'s saved items and review notes. They are stored only in this browser.`),
      body,
      el("div", { class: "section sv-foot" },
        el("button", { class: "acct-btn", type: "button", onclick: download }, "Download a copy (JSON)"),
        el("button", { class: "acct-btn danger", type: "button", onclick: () => { if (confirm(`Delete the profile "${Store.displayName()}" and everything saved in it from this browser?`)) { Store.deleteProfile(); route(true); } } }, "Delete this profile")));
  }
  // The header count follows every change. Pages redraw on sign-in and sign-out only, so a note being written stays open.
  Store.onChange(renderAccount);

  // ---------------------------------------------------------------- routing
  const tabsEl = document.getElementById("tabs");
  // Nations menu: a button that opens a searchable panel grouped by region (a native <select> sizes itself
  // to its longest option, which left a wide gap in the nav).
  let menuCleanup = null;
  function nationMenu(current) {
    const wrap = el("div", { class: "tab tab-menu", "aria-current": current ? "page" : null });
    const btn = el("button", { type: "button", class: "tab-menu-btn", "aria-haspopup": "true", "aria-expanded": "false" },
      current ? `${current.flag} ${shortName(current)}` : "Nations", el("span", { class: "caret", "aria-hidden": "true" }, "▾"));
    const panel = el("div", { class: "nav-panel", hidden: true, role: "dialog", "aria-label": "Choose a nation" });
    const search = el("input", { type: "search", class: "nav-search", placeholder: `Search ${N.length} nations…`, "aria-label": "Search nations" });
    const lists = el("div", { class: "nav-groups" });
    const draw = (q = "") => {
      const qq = q.trim().toLowerCase();
      lists.replaceChildren(...GROUPS.map((g) => {
        const items = N.filter((n) => n.group === g && (!qq || n.name.toLowerCase().includes(qq) || n.region.toLowerCase().includes(qq)))
          .sort((x, y) => x.name.localeCompare(y.name));
        if (!items.length) return null;
        return el("div", { class: "nav-group" }, el("div", { class: "nav-group-h" }, `${g} · ${items.length}`),
          items.map((n) => el("a", { href: `#${n.id}`, class: "nav-item" + (n === current ? " is-current" : "") }, `${n.flag} ${n.name}`)));
      }).filter(Boolean));
      if (!lists.children.length) lists.append(el("p", { class: "muted small" }, "No nation matches."));
    };
    const close = () => { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); };
    const open = () => {
      panel.hidden = false; btn.setAttribute("aria-expanded", "true"); search.value = ""; draw();
      // Keep the panel inside the viewport.
      panel.style.left = ""; const r = panel.getBoundingClientRect(), pad = 16;
      if (innerWidth > 760 && r.right > innerWidth - pad) panel.style.left = `${Math.max(pad - wrap.getBoundingClientRect().left, -(r.right - (innerWidth - pad)))}px`;
      search.focus();
    };
    btn.addEventListener("click", (e) => { e.stopPropagation(); panel.hidden ? open() : close(); });
    search.addEventListener("input", () => draw(search.value));
    search.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { const first = lists.querySelector(".nav-item"); if (first) location.hash = first.getAttribute("href"); }
    });
    panel.addEventListener("click", (e) => { if (e.target.closest(".nav-item")) close(); });
    const onDoc = (e) => { if (!wrap.contains(e.target)) close(); };
    const onKey = (e) => { if (e.key === "Escape" && !panel.hidden) { close(); btn.focus(); } };
    if (menuCleanup) menuCleanup();
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    menuCleanup = () => { document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onKey); };
    panel.append(search, lists);
    wrap.append(btn, panel);
    return wrap;
  }
  function renderTabs(key) {
    const current = byId(key);
    const isCollab = key === "collab" || (!current && !["news", "overview", "method", "saved"].includes(key));
    tabsEl.replaceChildren(
      el("a", { class: "tab", href: "#collab", "aria-current": isCollab ? "page" : null }, "Collaborations"),
      nationMenu(current),
      el("a", { class: "tab", href: "#news", "aria-current": key === "news" ? "page" : null }, "News"),
      el("a", { class: "tab", href: "#overview", "aria-current": key === "overview" ? "page" : null }, "Overview"),
      el("a", { class: "tab", href: "#method", "aria-current": key === "method" ? "page" : null }, "Method"));
  }
  function route(keepScroll) {
    if (document.documentElement.classList.contains("is-locked")) return;
    hideTip();
    const key = (location.hash || "#collab").slice(1);
    renderTabs(key.startsWith("collab/") ? "collab" : key);
    const n = byId(key);
    if (n) { renderNation(n); document.title = `${n.name} — Atlas`; }
    else if (key === "news") { renderNews(); document.title = "News — Atlas"; }
    else if (key === "overview") { renderOverview(); document.title = "Overview — Atlas"; }
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
  });
})();

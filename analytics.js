// Vercel Web Analytics and Speed Insights. Page views are sent from app.js; both scripts are skipped when running
// locally. Kept in its own file so the site's Content-Security-Policy can refuse all inline scripts (see vercel.json).
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
if (location.protocol === "https:" && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
  const s = document.createElement("script");
  s.defer = true; s.src = "/_vercel/insights/script.js"; s.dataset.disableAutoTrack = "1";
  document.head.appendChild(s);
  const p = document.createElement("script");
  p.defer = true; p.src = "/_vercel/speed-insights/script.js";
  document.head.appendChild(p);
}

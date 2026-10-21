/* Atlas password gate and SHA-256 helper.
   The site is static, so this only keeps casual visitors out: the data files are still public to anyone
   who requests them directly. Real protection needs the host to ask for the password (see README). */
(function () {
  "use strict";

  // SHA-256 of a UTF-8 string, as hex. Synchronous, so it also works where crypto.subtle is missing (plain http).
  function sha256(str) {
    const K = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
      0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
      0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
      0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    const bytes = new TextEncoder().encode(str);
    const len = bytes.length, padded = new Uint8Array(((len + 9 + 63) >> 6) << 6);
    padded.set(bytes); padded[len] = 0x80;
    const dv = new DataView(padded.buffer);
    dv.setUint32(padded.length - 4, len * 8); dv.setUint32(padded.length - 8, Math.floor(len / 0x20000000));
    const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const W = new Uint32Array(64), rot = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < padded.length; o += 64) {
      for (let i = 0; i < 16; i++) W[i] = dv.getUint32(o + i * 4);
      for (let i = 16; i < 64; i++) {
        const s0 = rot(W[i - 15], 7) ^ rot(W[i - 15], 18) ^ (W[i - 15] >>> 3), s1 = rot(W[i - 2], 17) ^ rot(W[i - 2], 19) ^ (W[i - 2] >>> 10);
        W[i] = (W[i - 16] + s0 + W[i - 7] + s1) | 0;
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const t1 = (h + (rot(e, 6) ^ rot(e, 11) ^ rot(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + W[i]) | 0;
        const t2 = ((rot(a, 2) ^ rot(a, 13) ^ rot(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      [a, b, c, d, e, f, g, h].forEach((v, i) => { H[i] = (H[i] + v) | 0; });
    }
    return H.map((v) => (v >>> 0).toString(16).padStart(8, "0")).join("");
  }

  const PASS_HASH = "f288d4466160488d0d2d77cb0b813e00793aaf8d3948d170356a535e1e0f5632";
  const KEY = "atlas-unlock";
  let unlocked = false;
  try { unlocked = localStorage.getItem(KEY) === PASS_HASH || sessionStorage.getItem(KEY) === PASS_HASH; } catch {}
  const waiting = [];

  function unlock(remember) {
    unlocked = true;
    try { (remember ? localStorage : sessionStorage).setItem(KEY, PASS_HASH); } catch {}
    document.documentElement.classList.remove("is-locked");
    const g = document.getElementById("gate");
    if (g) g.remove();
    waiting.splice(0).forEach((fn) => fn());
  }
  function showGate() {
    const form = document.createElement("form");
    form.id = "gate";
    form.className = "gate";
    form.innerHTML =
      '<div class="gate-card">' +
      '<div class="gate-brand"><span class="brand-mark" aria-hidden="true">◐</span> Atlas</div>' +
      '<h1 class="gate-title">This site is private</h1>' +
      '<p class="gate-sub">Enter the password to continue.</p>' +
      '<label class="gate-label" for="gatePw">Password</label>' +
      '<input class="gate-input" id="gatePw" type="password" autocomplete="current-password" required autofocus />' +
      '<label class="gate-check"><input type="checkbox" id="gateRemember" checked /> Remember on this device</label>' +
      '<p class="gate-err" id="gateErr" role="alert" hidden>That password is not right.</p>' +
      '<button class="gate-btn" type="submit">Unlock</button>' +
      "</div>";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pw = form.querySelector("#gatePw");
      if (sha256(pw.value) === PASS_HASH) unlock(form.querySelector("#gateRemember").checked);
      else { form.querySelector("#gateErr").hidden = false; pw.select(); }
    });
    document.body.prepend(form);
    form.querySelector("#gatePw").focus();
  }

  if (!unlocked) {
    document.documentElement.classList.add("is-locked");
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", showGate);
    else showGate();
  }

  window.atlasGate = {
    sha256,
    // Runs fn now if the site is unlocked, otherwise once the password is entered.
    ready(fn) { if (unlocked) fn(); else waiting.push(fn); },
  };
})();

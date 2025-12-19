(function () {
  const path = location.pathname.replace(/\/$/, "");
  const current = path === "" ? "/index.html" : (path.endsWith(".html") ? path : path + ".html");

  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === current || (href === "/index.html" && current === "/index.html")) {
      a.classList.add("active");
    }
  });

  const buildEl = document.getElementById("buildInfo");
  if (buildEl) {
    const now = new Date();
    buildEl.textContent =
      `Build: ${now.toISOString().slice(0,19)}Z | UA: ${navigator.userAgent.split(" ").slice(0,3).join(" ")}`;
  }

  const metricsEl = document.getElementById("metrics");
  if (metricsEl) {
    const fake = [
      { k: "Latency(p95)", v: `${Math.floor(20 + Math.random()*40)} ms`, s: "ok" },
      { k: "Error Rate", v: `${(Math.random()*0.6).toFixed(2)} %`, s: "ok" },
      { k: "Pods Ready", v: `${Math.floor(3 + Math.random()*5)}/8`, s: "warn" },
      { k: "TLS Expiry", v: `${Math.floor(20 + Math.random()*80)} days`, s: "ok" }
    ];
    metricsEl.innerHTML = fake.map(x => `
      <div class="item">
        <div class="k">${x.k}</div>
        <div class="v">${x.v} <span class="tag ${x.s}">${x.s.toUpperCase()}</span></div>
      </div>
    `).join("");
  }
})();

// Hash navigation renders a view and keeps the title and menu in sync.
(() => {
  const routes = new Map([
    ["", "dashboard"],
    ["/", "dashboard"],
    ["/population", "population"],
    ["/economy", "economy"],
    ["/labour", "labour"],
    ["/social", "social"],
    ["/trade", "trade"],
  ]);

  const resolve = hash => routes.get(hash.replace(/^#/, "").split("?")[0]) || "dashboard";

  function renderPage() {
    const route = resolve(window.location.hash || "#/");
    document.getElementById("app").innerHTML = (VIEWS[route] || VIEWS.dashboard)();

    for (const link of document.querySelectorAll("nav a")) {
      link.classList.toggle("active", resolve(link.getAttribute("href") || "") === route);
    }

    const label = route[0].toUpperCase() + route.slice(1);
    document.title = `StatIndo — ${label} | Indonesia ${DATA.year}`;
    window.__shotReady = true;
  }

  window.addEventListener("hashchange", renderPage);
  document.addEventListener("DOMContentLoaded", renderPage);
})();

// StatIndo router. Hash routes: #/ (dashboard), #/population, #/economy,
// #/labour, #/social. No build step; state is read-only (published data).

const ROUTES = {
  "": "dashboard",
  "/": "dashboard",
  "/population": "population",
  "/economy": "economy",
  "/labour": "labour",
  "/social": "social",
};

function currentRoute() {
  const hash = (window.location.hash || "#/").replace(/^#/, "");
  const path = hash.split("?")[0];
  return ROUTES[path] || "dashboard";
}

function render() {
  const route = currentRoute();
  const app = document.getElementById("app");
  const view = VIEWS[route] || VIEWS.dashboard;
  app.innerHTML = view();
  document.querySelectorAll("nav a").forEach(function (a) {
    const href = a.getAttribute("href") || "";
    const p = href.replace(/^#/, "").split("?")[0];
    a.classList.toggle("active", (ROUTES[p] || "dashboard") === route);
  });
  document.title = "StatIndo — " + route.charAt(0).toUpperCase() + route.slice(1) + " | Indonesia " + DATA.year;
  window.__shotReady = true;
}

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", render);

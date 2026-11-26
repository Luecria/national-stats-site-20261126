// StatIndo views. Each view is a pure function of DATA (app/data.js).
// Numbers are formatted once here; every figure on the site comes from DATA.

function fmt(n, decimals) {
  return Number(n).toLocaleString("en-US", {
    minimumFractionDigits: decimals === undefined ? 0 : decimals,
    maximumFractionDigits: decimals === undefined ? 0 : decimals,
  });
}

function trendTable(key) {
  const s = DATA.series[key];
  const rows = DATA.years.map(function (y, i) {
    return "<tr><td>" + y + "</td><td>" + fmt(s.values[i], 2) + "</td></tr>";
  }).join("");
  return "<table><thead><tr><th>Year</th><th>" + s.label + "</th></tr></thead><tbody>" + rows + "</tbody></table><p class=\"src\">Source: " + s.source + "</p>";
}

function barRow(label, value, max, suffix) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return "<div class=\"bar-row\"><span class=\"bar-label\">" + label + "</span><div class=\"bar-track\"><div class=\"bar-fill\" style=\"width:" + pct.toFixed(1) + "%\"></div></div><span class=\"bar-value\">" + fmt(value, 1) + (suffix || "") + "</span></div>";
}

function dashboardView() {
  const cards = DATA.headline.map(function (h) {
    return "<div class=\"card\"><div class=\"card-label\">" + h.label + "</div><div class=\"card-value\">" + fmt(h.value, h.key === "hdi" ? 2 : 2) + " <span class=\"card-unit\">" + h.unit + "</span></div><div class=\"card-note\">" + h.note + "</div></div>";
  }).join("");
  const facts = DATA.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("");
  return "<h1>Indonesia in numbers</h1>" +
    "<p class=\"lede\">National statistics of Indonesia, " + DATA.year + ". Every figure below is a published official statistic — sources: " + DATA.sources + ".</p>" +
    "<div class=\"grid\">" + cards + "</div>" +
    "<h2>Key facts</h2><ul class=\"facts\">" + facts + "</ul>" +
    "<h2>At a glance: growth and poverty</h2>" +
    "<div class=\"two-col\">" +
    "<div>" + trendTable("gdpGrowth") + "</div>" +
    "<div>" + trendTable("poverty") + "</div>" +
    "</div>" +
    "<p class=\"src\">Data as published; see the Economy and Social pages for full tables. Page updated " + DATA.updated + ".</p>";
}

function populationView() {
  const prov = DATA.provinces.map(function (p) {
    return "<tr><td>" + p.name + "</td><td>" + fmt(p.population, 1) + "</td></tr>";
  }).join("");
  return "<h1>Population</h1>" +
    "<p class=\"lede\">" + fmt(DATA.headline[0].value, 1) + " million people (BPS, mid-2024) — the world's 4th largest population.</p>" +
    "<h2>Population, 2020–2024</h2>" + trendTable("population") +
    "<h2>Age structure, 2024</h2>" +
    barRow("Under 15", DATA.social.under15, 100, "%") +
    barRow("65 and older", DATA.social.over65, 100, "%") +
    "<p class=\"src\">Source: Destatis international statistics (BPS-based), 2024.</p>" +
    "<h2>Largest provinces by population (million, BPS 2024 estimates)</h2>" +
    "<table><thead><tr><th>Province</th><th>Population</th></tr></thead><tbody>" + prov + "</tbody></table>" +
    "<p class=\"src\">Source: BPS, 2024 mid-year estimates.</p>";
}

function economyView() {
  const sectors = DATA.sectors.map(function (s) {
    return barRow(s.name, s.share, 100, "%");
  }).join("");
  return "<h1>Economy</h1>" +
    "<p class=\"lede\">GDP (nominal) US$ " + fmt(1396) + " billion in 2024; GDP per capita US$ " + fmt(4958) + " (IMF). Real GDP grew 5.03% in 2024 (BPS).</p>" +
    "<h2>GDP growth, 2020–2024</h2>" + trendTable("gdpGrowth") +
    "<h2>Inflation (Dec, year on year), 2020–2024</h2>" + trendTable("inflation") +
    "<h2>GDP by sector (approximate share, 2024)</h2>" + sectors +
    "<p class=\"src\">Sector shares are approximate (World Bank / BPS) and do not sum to 100% — net taxes on products are excluded.</p>";
}

function labourView() {
  return "<h1>Labour</h1>" +
    "<p class=\"lede\">Labour force " + fmt(DATA.labour.labourForce, 1) + " million; participation rate " + fmt(DATA.labour.participation, 1) + "% (2024).</p>" +
    "<h2>Unemployment rate, 2020–2024</h2>" + trendTable("unemployment") +
    "<h2>Labour market, 2024</h2>" +
    "<table><thead><tr><th>Indicator</th><th>Value</th></tr></thead><tbody>" +
    "<tr><td>Labour force</td><td>" + fmt(DATA.labour.labourForce, 1) + " million</td></tr>" +
    "<tr><td>Employed</td><td>" + fmt(DATA.labour.employed, 1) + " million</td></tr>" +
    "<tr><td>Unemployed</td><td>" + fmt(DATA.labour.unemployed, 1) + " million</td></tr>" +
    "<tr><td>Participation rate</td><td>" + fmt(DATA.labour.participation, 1) + "%</td></tr>" +
    "<tr><td>Youth unemployment (15–24)</td><td>" + fmt(DATA.labour.youthUnemployment, 1) + "%</td></tr>" +
    "</tbody></table>" +
    "<p class=\"src\">Source: BPS (Aug 2024) and Destatis international statistics, 2024.</p>";
}

function socialView() {
  return "<h1>Social indicators</h1>" +
    "<p class=\"lede\">Poverty, human development and living standards in " + DATA.year + ".</p>" +
    "<h2>Poverty rate, 2020–2024</h2>" + trendTable("poverty") +
    "<p>Poverty fell to " + fmt(8.57, 2) + "% in September 2024 — " + fmt(DATA.social.poorPeople, 2) + " million people — the lowest on record (BPS).</p>" +
    "<h2>Human development, 2024</h2>" +
    "<table><thead><tr><th>Indicator</th><th>Value</th></tr></thead><tbody>" +
    "<tr><td>Human Development Index</td><td>" + fmt(DATA.headline[7].value, 2) + "</td></tr>" +
    "<tr><td>Life expectancy at birth</td><td>" + fmt(DATA.social.lifeExpectancy, 1) + " years</td></tr>" +
    "<tr><td>Gini ratio</td><td>" + fmt(DATA.social.gini, 3) + "</td></tr>" +
    "<tr><td>Fertility rate</td><td>" + fmt(DATA.social.fertility, 2) + " births per woman (2023)</td></tr>" +
    "</tbody></table>" +
    "<p class=\"src\">Source: BPS, 2024 (fertility 2023).</p>";
}

const VIEWS = {
  dashboard: dashboardView,
  population: populationView,
  economy: economyView,
  labour: labourView,
  social: socialView,
};

if (typeof module !== "undefined") module.exports = VIEWS;

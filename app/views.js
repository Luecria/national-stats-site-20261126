// Shared markup keeps the five views consistent. DATA is the only data source.
const VIEWS = (() => {
  const format = (value, digits = 0) => Number(value).toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  const indicator = key => DATA.headline.find(item => item.key === key).value;
  const source = text => `<p class="src">${text}</p>`;
  const heading = text => `<h2>${text}</h2>`;
  const page = (title, description, ...content) =>
    `<h1>${title}</h1><p class="lede">${description}</p>${content.join("")}`;

  function table(columns, rows) {
    const header = columns.map(label => `<th>${label}</th>`).join("");
    const body = rows.map(cells =>
      `<tr>${cells.map(value => `<td>${value}</td>`).join("")}</tr>`
    ).join("");
    return `<table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>`;
  }

  function trend(key) {
    const series = DATA.series[key];
    const rows = DATA.years.map((year, index) => [year, format(series.values[index], 2)]);
    return table(["Year", series.label], rows) + source(`Source: ${series.source}`);
  }

  function bar(label, value, maximum = 100, suffix = "%") {
    const width = Math.max(0, Math.min(100, value / maximum * 100)).toFixed(1);
    return `<div class="bar-row"><span class="bar-label">${label}</span><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><span class="bar-value">${format(value, 1)}${suffix}</span></div>`;
  }

  function dashboard() {
    const cards = DATA.headline.map(item =>
      `<div class="card"><div class="card-label">${item.label}</div><div class="card-value">${format(item.value, 2)} <span class="card-unit">${item.unit}</span></div><div class="card-note">${item.note}</div></div>`
    ).join("");
    const facts = DATA.facts.map(text => `<li>${text}</li>`).join("");
    return page("Indonesia in numbers",
      `National statistics of Indonesia, ${DATA.year}. Every figure below is a published official statistic — sources: ${DATA.sources}.`,
      `<div class="grid">${cards}</div>`,
      heading("Key facts"), `<ul class="facts">${facts}</ul>`,
      heading("At a glance: growth and poverty"),
      `<div class="two-col"><div>${trend("gdpGrowth")}</div><div>${trend("poverty")}</div></div>`,
      source(`Data as published; see the Economy and Social pages for full tables. Page updated ${DATA.updated}.`)
    );
  }

  function population() {
    return page("Population",
      `${format(indicator("population"), 1)} million people (BPS, mid-2024) — the world's 4th largest population.`,
      heading("Population, 2020–2024"), trend("population"),
      heading("Age structure, 2024"),
      bar("Under 15", DATA.social.under15),
      bar("65 and older", DATA.social.over65),
      source("Source: Destatis international statistics (BPS-based), 2024."),
      heading("Largest provinces by population (million, BPS 2024 estimates)"),
      table(["Province", "Population"], DATA.provinces.map(province => [province.name, format(province.population, 1)])),
      source("Source: BPS, 2024 mid-year estimates.")
    );
  }

  function economy() {
    return page("Economy",
      `GDP (nominal) US$ ${format(indicator("gdp"))} billion in 2024; GDP per capita US$ ${format(indicator("gdpPerCapita"))} (IMF). Real GDP grew ${format(indicator("gdpGrowth"), 2)}% in 2024 (BPS).`,
      heading("GDP growth, 2020–2024"), trend("gdpGrowth"),
      heading("Inflation (Dec, year on year), 2020–2024"), trend("inflation"),
      heading("GDP by sector (approximate share, 2024)"),
      DATA.sectors.map(sector => bar(sector.name, sector.share)).join(""),
      source("Sector shares are approximate (World Bank / BPS) and do not sum to 100% — net taxes on products are excluded.")
    );
  }

  function labour() {
    const values = DATA.labour;
    const rows = [
      ["Labour force", `${format(values.labourForce, 1)} million`],
      ["Employed", `${format(values.employed, 1)} million`],
      ["Unemployed", `${format(values.unemployed, 1)} million`],
      ["Participation rate", `${format(values.participation, 1)}%`],
      ["Youth unemployment (15–24)", `${format(values.youthUnemployment, 1)}%`],
    ];
    return page("Labour",
      `Labour force ${format(values.labourForce, 1)} million; participation rate ${format(values.participation, 1)}% (2024).`,
      heading("Unemployment rate, 2020–2024"), trend("unemployment"),
      heading("Labour market, 2024"), table(["Indicator", "Value"], rows),
      source("Source: BPS (Aug 2024) and Destatis international statistics, 2024.")
    );
  }

  function social() {
    const values = DATA.social;
    const rows = [
      ["Human Development Index", format(indicator("hdi"), 2)],
      ["Life expectancy at birth", `${format(values.lifeExpectancy, 1)} years`],
      ["Gini ratio", format(values.gini, 3)],
      ["Fertility rate", `${format(values.fertility, 2)} births per woman (2023)`],
    ];
    return page("Social indicators",
      `Poverty, human development and living standards in ${DATA.year}.`,
      heading("Poverty rate, 2020–2024"), trend("poverty"),
      `<p>Poverty fell to ${format(indicator("poverty"), 2)}% in September 2024 — ${format(values.poorPeople, 2)} million people — the lowest on record (BPS).</p>`,
      heading("Human development, 2024"), table(["Indicator", "Value"], rows),
      source("Source: BPS, 2024 (fertility 2023).")
    );
  }

  return { dashboard, population, economy, labour, social };
})();

if (typeof module !== "undefined") module.exports = VIEWS;

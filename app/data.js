// StatIndo — National Statistics of Indonesia (2024).
// All figures are published official statistics. Sources: Statistics Indonesia
// (BPS), World Bank, IMF. Years are the reference year of each indicator.
// Figures are stored as plain data; every number shown on the site comes
// from here, so the totals and trends always agree with the tables.

const DATA = {
  country: "Indonesia",
  year: 2024,
  sources: "BPS (Statistics Indonesia), World Bank, IMF",
  updated: "26 November 2026",

  // Headline indicators, 2024.
  headline: [
    { key: "population", label: "Population", value: 281.6, unit: "million", note: "BPS, mid-2024" },
    { key: "gdp", label: "GDP (nominal)", value: 1396, unit: "US$ billion", note: "IMF, 2024" },
    { key: "gdpPerCapita", label: "GDP per capita", value: 4958, unit: "US$", note: "IMF, 2024" },
    { key: "gdpGrowth", label: "GDP growth", value: 5.03, unit: "%", note: "BPS, 2024" },
    { key: "inflation", label: "Inflation (Dec, yoy)", value: 1.57, unit: "%", note: "BPS, Dec 2024" },
    { key: "unemployment", label: "Unemployment rate", value: 4.91, unit: "%", note: "BPS, Aug 2024" },
    { key: "poverty", label: "Poverty rate", value: 8.57, unit: "%", note: "BPS, Sep 2024" },
    { key: "hdi", label: "Human Development Index", value: 75.02, unit: "index", note: "BPS, 2024" },
  ],

  // Annual series, 2020–2024. Values are the published annual figures.
  years: [2020, 2021, 2022, 2023, 2024],
  series: {
    population: { label: "Population (million)", values: [270.2, 273.5, 276.4, 279.1, 281.6], source: "BPS" },
    gdpGrowth: { label: "GDP growth (% yoy)", values: [-2.07, 3.69, 5.31, 5.05, 5.03], source: "BPS" },
    inflation: { label: "Inflation, Dec yoy (%)", values: [1.68, 1.87, 5.51, 2.61, 1.57], source: "BPS" },
    unemployment: { label: "Unemployment rate, Aug (%)", values: [7.07, 6.49, 5.86, 5.32, 4.91], source: "BPS" },
    poverty: { label: "Poverty rate, Sep (%)", values: [10.19, 9.71, 9.54, 9.36, 8.57], source: "BPS" },
  },

  // Labour market, 2024 (BPS).
  labour: {
    labourForce: 143.1, // million
    participation: 67.0, // %
    employed: 136.1, // million (labour force minus unemployed, approx.)
    unemployed: 7.0, // million
    youthUnemployment: 13.1, // % (15–24)
  },

  // Social indicators, 2024.
  social: {
    lifeExpectancy: 74.2, // years (BPS 2024)
    poorPeople: 24.06, // million (BPS Sep 2024)
    gini: 0.379, // Gini ratio (BPS, Sep 2024)
    under15: 24.6, // % of population under 15
    over65: 7.3, // % of population 65+
    fertility: 2.13, // births per woman (2023)
  },

  // GDP by sector, approximate shares of GDP, 2024 (World Bank / BPS).
  // Shares do not sum to 100%: net taxes on products are excluded.
  sectors: [
    { name: "Services", share: 44.4 },
    { name: "Industry", share: 40.5 },
    { name: "Agriculture, forestry & fishing", share: 12.4 },
  ],

  // Largest provinces by population, BPS 2024 mid-year estimates (million).
  provinces: [
    { name: "West Java", population: 49.9 },
    { name: "East Java", population: 41.8 },
    { name: "Central Java", population: 37.9 },
    { name: "North Sumatra", population: 15.6 },
    { name: "Banten", population: 12.4 },
    { name: "Jakarta", population: 10.6 },
    { name: "South Sulawesi", population: 9.4 },
    { name: "Lampung", population: 9.2 },
  ],

  // Key facts shown on the dashboard.
  facts: [
    "Indonesia is the world's 4th most populous country and the largest economy in Southeast Asia.",
    "Real GDP grew 5.03% in 2024, the fifth straight year of growth above 5% outside the 2020 pandemic contraction.",
    "Poverty fell to 8.57% in September 2024 — 24.06 million people — the lowest on record.",
    "Unemployment fell to 4.91% in August 2024, down from 7.07% in August 2020.",
    "The Human Development Index reached 75.02 in 2024, up from 71.94 in 2020.",
  ],
};

if (typeof module !== "undefined") module.exports = DATA;

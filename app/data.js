// StatIndo: Indonesia's national indicators for the 2024 reference year.
// Sources and reference periods stay alongside the headline and annual data.
// The views read this shared object without modifying the published figures.
const DATA = {
  country: "Indonesia",
  year: 2024,
  sources: "BPS (Statistics Indonesia), World Bank, IMF",
  updated: "26 November 2026",

  headline: [
    {
      key: "population",
      label: "Population",
      value: 281.6,
      unit: "million",
      note: "BPS, mid-2024",
    },
    {
      key: "gdp",
      label: "GDP (nominal)",
      value: 1396,
      unit: "US$ billion",
      note: "IMF, 2024",
    },
    {
      key: "gdpPerCapita",
      label: "GDP per capita",
      value: 4958,
      unit: "US$",
      note: "IMF, 2024",
    },
    {
      key: "gdpGrowth",
      label: "GDP growth",
      value: 5.03,
      unit: "%",
      note: "BPS, 2024",
    },
    {
      key: "inflation",
      label: "Inflation (Dec, yoy)",
      value: 1.57,
      unit: "%",
      note: "BPS, Dec 2024",
    },
    {
      key: "unemployment",
      label: "Unemployment rate",
      value: 4.91,
      unit: "%",
      note: "BPS, Aug 2024",
    },
    {
      key: "poverty",
      label: "Poverty rate",
      value: 8.57,
      unit: "%",
      note: "BPS, Sep 2024",
    },
    {
      key: "hdi",
      label: "Human Development Index",
      value: 75.02,
      unit: "index",
      note: "BPS, 2024",
    },
  ],

  // Each series follows the same chronological order as years.
  years: [2020, 2021, 2022, 2023, 2024],
  series: {
    population: {
      label: "Population (million)",
      values: [270.2, 273.5, 276.4, 279.1, 281.6],
      source: "BPS",
    },
    gdpGrowth: {
      label: "GDP growth (% yoy)",
      values: [-2.07, 3.69, 5.31, 5.05, 5.03],
      source: "BPS",
    },
    inflation: {
      label: "Inflation, Dec yoy (%)",
      values: [1.68, 1.87, 5.51, 2.61, 1.57],
      source: "BPS",
    },
    unemployment: {
      label: "Unemployment rate, Aug (%)",
      values: [7.07, 6.49, 5.86, 5.32, 4.91],
      source: "BPS",
    },
    poverty: {
      label: "Poverty rate, Sep (%)",
      values: [10.19, 9.71, 9.54, 9.36, 8.57],
      source: "BPS",
    },
  },

  // Labour counts are in millions; participation and unemployment are percentages.
  // Employed is approximate, derived from labour force less unemployed.
  labour: {
    labourForce: 143.1,
    participation: 67.0,
    employed: 136.1,
    unemployed: 7.0,
    youthUnemployment: 13.1,
  },

  // Life expectancy is in years, poorPeople in millions, age groups in percent.
  // Gini is a ratio; fertility is births per woman for the 2023 reference year.
  social: {
    lifeExpectancy: 74.2,
    poorPeople: 24.06,
    gini: 0.379,
    under15: 24.6,
    over65: 7.3,
    fertility: 2.13,
  },

  // Approximate 2024 GDP shares exclude net taxes on products (World Bank / BPS).
  sectors: [
    { name: "Services", share: 44.4 },
    { name: "Industry", share: 40.5 },
    { name: "Agriculture, forestry & fishing", share: 12.4 },
  ],

  // BPS mid-year 2024 provincial population estimates, in millions.
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

  facts: [
    "Indonesia is the world's 4th most populous country and the largest economy in Southeast Asia.",
    "Real GDP grew 5.03% in 2024, the fifth straight year of growth above 5% outside the 2020 pandemic contraction.",
    "Poverty fell to 8.57% in September 2024 — 24.06 million people — the lowest on record.",
    "Unemployment fell to 4.91% in August 2024, down from 7.07% in August 2020.",
    "The Human Development Index reached 75.02 in 2024, up from 71.94 in 2020.",
  ],
};

if (typeof module !== "undefined") module.exports = DATA;

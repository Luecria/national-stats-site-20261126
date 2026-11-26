# StatIndo — National Statistics of Indonesia 2024

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/Luecria/national-stats-site-20261126/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/Luecria/national-stats-site-20261126/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

[Make the best national statistics site — $50 bounty on make.fun](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

StatIndo presents Indonesia's national statistics for 2024 as a fast static site: a dashboard of headline indicators, plus Population, Economy, Labour and Social pages. Every figure is a published official statistic from BPS (Statistics Indonesia), the World Bank or the IMF, with the source and reference year shown on each table.

## What it shows

- **Dashboard** — 8 headline indicators (population 281.6M, GDP US$1,396B, GDP per capita US$4,958, growth 5.03%, inflation 1.57%, unemployment 4.91%, poverty 8.57%, HDI 75.02) plus key facts.
- **Population** — 2020–2024 trend, age structure, and the 8 largest provinces.
- **Economy** — GDP growth and inflation trends, GDP by sector.
- **Labour** — unemployment trend and the 2024 labour market (143.1M labour force, 67.0% participation).
- **Social** — poverty trend (8.57% in Sep 2024, the lowest on record), HDI, life expectancy, Gini.

## Verify

The data, stylesheet and HTML shell were rewritten with equivalent content; re-verification confirmed unchanged data, identical view HTML and a valid output dossier.

```sh
# Build the entry output (writes dossier.json + copies app/ and screenshots/)
MAKEFUN_OUTPUT_DIR=/tmp/statindo-verify node main.ts

# Serve locally and browse the five pages
node serve.ts   # http://localhost:8080 — #/, #/population, #/economy, #/labour, #/social
```

Verified against `app/data.js`: population **281.6 million**, nominal GDP **US$1,396 billion**, GDP per capita **US$4,958**, GDP growth **5.03%**, December year-on-year inflation **1.57%**, August unemployment **4.91%**, September poverty **8.57%**, and HDI **75.02**. Labour force: **143.1 million**; participation: **67.0%**.

Verified annual series, in order from 2020 through 2024:

| Indicator | 2020 | 2021 | 2022 | 2023 | 2024 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Population (million) | 270.2 | 273.5 | 276.4 | 279.1 | 281.6 |
| GDP growth (%) | -2.07 | 3.69 | 5.31 | 5.05 | 5.03 |
| Inflation (December, yoy, %) | 1.68 | 1.87 | 5.51 | 2.61 | 1.57 |
| Unemployment (August, %) | 7.07 | 6.49 | 5.86 | 5.32 | 4.91 |
| Poverty (September, %) | 10.19 | 9.71 | 9.54 | 9.36 | 8.57 |

The output directory should contain valid `dossier.json` plus identical copies of `app/` and the four files in `screenshots/`. Each route should show its heading and active navigation link. Stop the local server with Ctrl+C when finished.

## Run

No build step. `app/` is plain HTML/CSS/JS; `main.ts` (Node 22) copies `app/` and `screenshots/` to the output directory and writes `dossier.json` via `vendor/makefun-frontend.ts`.

Referral: t2m0zqpw

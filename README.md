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

```sh
# Build the entry output (writes dossier.json + copies app/ and screenshots/)
MAKEFUN_OUTPUT_DIR=/tmp/statindo-out node main.ts

# Serve locally and browse the five pages
node serve.ts   # http://localhost:8080 — #/, #/population, #/economy, #/labour, #/social
```

## Run

No build step. `app/` is plain HTML/CSS/JS; `main.ts` (Node 22) copies `app/` and `screenshots/` to the output directory and writes `dossier.json` via `vendor/makefun-frontend.ts`.

Referral: t2m0zqpw

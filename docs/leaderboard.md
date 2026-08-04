---
hide:
  - navigation
---

# xRouteBench Leaderboard

xRouteBench evaluates routers on both response quality and inference cost under a single protocol, spanning general NLP, memory-augmented, vision, time-series, and personalized scenarios.

Results below are produced by the evaluation pipeline described in [Training and evaluation](learn/training-and-evaluation.md). To reproduce a row, see [Evaluation workflow](tutorials/evaluation.md).

<div id="xrb-leaderboard"></div>

## Reading the table

- **Family** groups routers by formulation: rule-based baselines, single-turn, multi-turn, and personalized routers.
- **Main track** reports the performance-first setting, where the cost weight is zero. Rankings shift substantially once cost enters the objective — no single router wins at every operating point.
- **Personalized track** is scored on a human-preference split and uses a different router set, so its numbers are not comparable to the main track.

## Updating the data

The table is rendered from `docs/data/leaderboard.json`; no code changes are needed to publish new results. Each row takes a `router` name, a `family`, and a `scores` object keyed by column id. Omit a key to render `—`, or set `"pending": true` to grey out a row whose numbers are still in flight.

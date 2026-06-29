# Decision-Making Framework

## Principles

- **Disagree and commit.** Debate openly, then back the decision.
- **Reversible vs. irreversible.** Make reversible ("two-way door") decisions fast and locally. Make irreversible ("one-way door") decisions slowly with founder sign-off.
- **Decisions are written down.** Use the Decision Record format below.

## RAPID-lite roles

For any significant decision, name:
- **D — Decider:** who makes the final call.
- **R — Recommender:** who proposes the option.
- **C — Consulted:** whose input is required.
- **I — Informed:** who needs to know after.

## Decision tiers

| Tier | Examples | Who decides |
|---|---|---|
| **Tier 1 — Founder** | Fundraising, equity, hiring/firing, pivots, >budget spend, legal commitments | Co-founders (unanimous) |
| **Tier 2 — Lead** | Tooling, process changes, mid-size spend, roadmap priorities | Function lead, founders informed |
| **Tier 3 — Individual** | Day-to-day execution, reversible technical choices | The owner |

## Decision Record (ADR-style) template

Store records in `governance/decisions/` as `YYYY-MM-DD-short-title.md`.

```
# Decision: <title>
- Date:
- Tier:
- Decider / Recommender / Consulted / Informed:
- Context: <what problem and constraints>
- Options considered: <A, B, C with trade-offs>
- Decision: <what we chose and why>
- Consequences: <what changes, risks, follow-ups>
- Review date: <when we revisit>
```

## Founder operating agreement (summary)

- Co-founders meet weekly for a strategy + alignment sync.
- Tier 1 decisions require unanimous founder agreement; if deadlocked, escalate to a defined tie-breaker mechanism in the founders' agreement (see `governance/legal-and-compliance.md`).
- Roles and responsibilities (RACI) are documented and reviewed quarterly.

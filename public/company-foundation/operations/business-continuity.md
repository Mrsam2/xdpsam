# Business Continuity & Risk

## Purpose

Keep the company operating through disruptions (key-person loss, outages, vendor failure, security incidents, economic shocks).

## Risk register

Maintain a living risk register scoring each risk by **likelihood × impact**, with an owner and mitigation.

| Risk | Example mitigation |
|---|---|
| **Key-person dependency** | Document processes (this repo); cross-train; no single point of knowledge |
| **Revenue concentration** | Cap any single client's share; diversify pipeline |
| **Cash/runway shortfall** | Scenario planning; runway thresholds (`finance/budgeting-and-runway.md`) |
| **Security incident / data loss** | Backups + tested restores; incident response plan |
| **Critical vendor outage** | Contingency vendor; avoid lock-in where feasible |
| **Legal/compliance failure** | Counsel engagement; maintained contracts and policies |

## Continuity essentials

- **Documentation:** the business can run because processes are written down (that's what this repo is for).
- **Backups:** code, data, and critical records backed up and restorable.
- **Access recovery:** emergency access to accounts, domains, and secrets (no single person holds the only keys).
- **Succession:** founders' agreement covers incapacity/departure (`governance/legal-and-compliance.md`).

## Review

- Founders review the risk register quarterly and update mitigations.
- After any incident, feed lessons back into the relevant policy via an MR.

# Tooling & Systems

> Our operating stack. Principle: **few, well-integrated tools.** Avoid tool sprawl; every tool must earn its place and its cost.

## Core toolchain (by function)

| Function | Tool category | Notes |
|---|---|---|
| Source, CI/CD, issues | GitLab | Single platform for code, pipelines, work tracking, docs |
| Communication | Team chat + video | Async-first; decisions of record go to GitLab |
| Docs & knowledge | This repo + a wiki/docs space | Durable knowledge versioned in Git |
| Identity & access | Password manager + MFA; SSO at scale | Security baseline |
| Finance | Accounting software + banking | See `finance/financial-policy.md` |
| CRM | Lightweight CRM (or GitLab issues early) | Track pipeline |
| Design | Design tool + design system | See `product/design-principles.md` |
| Secrets | Secrets manager | Never store secrets in code |

## Tool adoption rules

- New tool = a Tier 2 decision (lead) or Tier 1 if costly/strategic.
- Check overlap with existing tools before adding.
- Track all subscriptions, owners, renewal dates, and costs.
- Security-review any tool that touches confidential/customer data.

## Access & accounts

- Provision via least privilege at onboarding; revoke at offboarding.
- Prefer SSO and centralized account management as we scale.
- Maintain an inventory of tools and who owns each.

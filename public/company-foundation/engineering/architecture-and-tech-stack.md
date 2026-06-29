# Architecture & Tech Stack

## Architecture principles

- **Start simple; modularize as you scale.** A well-structured monolith beats premature microservices.
- **Build vs. buy:** buy/borrow undifferentiated capability; build only your differentiation.
- **Cloud-native and automatable.** Infrastructure as code; reproducible environments.
- **Secure and observable by default.** Auth, logging, metrics, and tracing are first-class.
- **Design for change.** Clear interfaces and boundaries so components can evolve independently.

## Tech selection criteria

When choosing a language, framework, or service, evaluate:
1. Fit for the problem and team expertise.
2. Ecosystem maturity and community support.
3. Hiring availability.
4. Total cost of ownership and lock-in risk.
5. Security and compliance posture.

Record significant stack choices as ADRs.

## Default platform direction (to be ratified per project)

| Layer | Default approach |
|---|---|
| Source/CI-CD | GitLab (repos, pipelines, registry) |
| Infrastructure | Cloud provider + Infrastructure as Code |
| Containers | Docker; orchestration as scale demands |
| Observability | Centralized logs, metrics, traces, alerts |
| Secrets | Dedicated secrets manager, never in code |
| Data | Managed databases; backups + tested restores |

## Environments

- Separate **dev / staging / production** with parity where practical.
- Production access is least-privilege and audited.
- Every environment is reproducible from code.

## AI usage in engineering

See `engineering/ai-usage-policy.md` for how we use AI assistants responsibly in the development workflow.

# Engineering Standards

## Principles

- **Quality is built in, not bolted on.** Tested, reviewed, documented.
- **Simplicity first.** Prefer the simplest solution that solves the problem generally.
- **Own your work end-to-end.** You build it, you (help) run it.
- **Leave it better.** Boy-scout rule on every change.

## Definition of Done

A change is done when:
- [ ] Meets the acceptance criteria.
- [ ] Has tests appropriate to the risk (unit/integration/e2e).
- [ ] Passes CI (lint, tests, security scans).
- [ ] Reviewed and approved via merge request.
- [ ] Documented (code comments, docs, or changelog as needed).
- [ ] Observable (logs/metrics where relevant).

## Code quality

- Follow language-specific style guides and enforce with linters/formatters in CI.
- Meaningful names; small functions; clear boundaries.
- No secrets in code (see `security/security-policy.md`). Use a secrets manager.
- Dependencies: pin versions, scan for vulnerabilities, keep them updated.

## Testing strategy

- Test pyramid: many fast unit tests, fewer integration, few end-to-end.
- Critical paths must have automated coverage.
- Treat flaky tests as bugs.

## CI/CD

- Every repo has a GitLab CI pipeline: lint -> test -> security scan -> build -> deploy.
- `main` is always releasable.
- Automate deployments; manual steps are documented and minimized.

## Documentation

- Each repo has a README explaining purpose, setup, and run instructions.
- Architecture decisions recorded as ADRs (see `governance/decision-making.md`).

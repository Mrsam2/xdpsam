# Git & Code Review Workflow

## Branching model

- **`main`** is protected and always deployable.
- Work happens on short-lived **feature branches**: `type/short-description` (e.g., `feat/user-auth`, `fix/login-bug`, `docs/readme`).
- Rebase or merge to keep history clean per repo convention; keep branches small and short-lived.

## Commit conventions

Use **Conventional Commits**:

```
<type>(optional scope): <short summary>

<optional body explaining what and why>
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `ci`.

## Merge requests

- Every change to `main` goes through an MR. No direct pushes.
- MR description states **what** changed and **why**, with links to the issue.
- Keep MRs small and focused for fast, high-quality review.
- CI must pass before merge.

## Code review standards

- At least **one approval** required (two for high-risk/security-sensitive changes).
- Reviewers check: correctness, readability, tests, security, and alignment with standards.
- Be kind and specific. Critique the code, not the person.
- Author addresses every comment (resolve or discuss); don't merge with open blocking threads.
- Aim to review within one business day to keep flow.

## Protected branches & permissions

- Protect `main`: require MR, require approval, require passing pipeline.
- Restrict who can merge to maintainers/leads.

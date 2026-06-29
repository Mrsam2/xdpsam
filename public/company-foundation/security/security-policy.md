# Security Policy

> Security is everyone's job. As a technology company, our security posture is part of our product and our reputation.

## Core controls

- **Strong authentication:** unique passwords via a password manager; **MFA required** on all critical accounts.
- **Least privilege:** access granted by need; reviewed regularly; revoked immediately on departure.
- **No secrets in code:** use a secrets manager; rotate credentials; scan repos for leaked secrets.
- **Device security:** disk encryption, screen lock, up-to-date OS and software, endpoint protection.
- **Secure development:** dependency scanning, SAST in CI, code review, and threat awareness (see engineering docs).

## Data handling

- Classify data (public / internal / confidential / customer/personal).
- Handle each class per `security/data-protection-and-privacy.md`.
- Encrypt sensitive data in transit and at rest.
- Don't put confidential or customer data into unapproved tools (including AI tools).

## Access management

- Central identity where possible; SSO as we scale.
- Maintain an access inventory: who has access to what and why.
- Quarterly access reviews.

## Backups & resilience

- Regular, automated backups of critical data and code.
- **Test restores** periodically; an untested backup is not a backup.

## Third parties / vendors

- Vet vendors' security before sharing data (see `operations/vendor-management.md`).
- Use DPAs where personal data is processed.

## Reporting issues

- Report suspected security issues immediately to a Co-founder.
- Follow `security/incident-response-plan.md` for active incidents.

# On-Call & Incident Response

## Goal

Detect, respond to, and learn from incidents quickly while protecting customers and data.

## Severity levels

| Sev | Definition | Response |
|---|---|---|
| **SEV1** | Critical outage / data loss / security breach | Immediate, all-hands, founder informed |
| **SEV2** | Major degradation, partial outage | Urgent, within the hour |
| **SEV3** | Minor issue, workaround exists | Next business day |

## Incident roles

- **Incident Commander (IC):** coordinates response and communication.
- **Operations lead:** drives technical remediation.
- **Comms lead:** updates stakeholders/customers.

## Response flow

1. **Detect** (alert, report).
2. **Declare** severity and assign IC.
3. **Mitigate** to restore service (stop the bleeding first).
4. **Communicate** status to affected parties on a regular cadence.
5. **Resolve** and confirm recovery.
6. **Review** with a blameless postmortem.

## Blameless postmortems

- Focus on systems and process, not individuals.
- Document timeline, impact, root cause, and **action items with owners and due dates**.
- Track action items to completion.

## On-call (as we scale)

- Define an on-call rotation only when there is a production service to support.
- Sustainable rotations, clear escalation paths, and compensated fairly.
- Security incidents follow `security/incident-response-plan.md`.

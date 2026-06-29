# Security Incident Response Plan

## Purpose

Respond to security incidents (breaches, leaks, intrusions, malware, lost devices) quickly to limit harm, meet legal duties, and learn.

## What counts as a security incident

Any actual or suspected event that compromises the confidentiality, integrity, or availability of systems or data, including: data breach, account compromise, malware, lost/stolen device, leaked credentials/secrets, or unauthorized access.

## Response phases

1. **Identify & report.** Anyone who suspects an incident reports it to a Co-founder **immediately**. Don't wait to be sure.
2. **Contain.** Limit the spread: isolate systems, revoke access, rotate credentials.
3. **Assess.** Determine scope, data involved, and severity. Classify (link to `engineering/oncall-and-incident-response.md` severities).
4. **Eradicate.** Remove the cause (close vulnerability, remove malware, reset access).
5. **Recover.** Restore from clean backups; verify integrity; monitor closely.
6. **Notify.** If personal data is affected, follow legal notification duties and inform affected customers/authorities within required timeframes.
7. **Review.** Blameless postmortem with documented root cause and tracked action items.

## Roles

- **Incident Commander:** coordinates (a Co-founder for serious incidents).
- **Technical lead:** containment and recovery.
- **Comms lead:** customer/legal/authority communication.

## Key principles

- Speed of containment beats perfect diagnosis.
- Preserve evidence/logs for analysis.
- Communicate honestly and promptly with affected parties.
- Treat every incident as a learning opportunity, not a witch hunt.

## Preparation

- Keep an emergency contact list and access to credentials/secrets recovery.
- Maintain and test backups.
- Run occasional tabletop exercises as the team grows.

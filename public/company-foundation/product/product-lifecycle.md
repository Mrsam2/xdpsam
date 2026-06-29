# Product Lifecycle & Delivery

## Lifecycle stages

| Stage | Goal | Exit criteria |
|---|---|---|
| **Idea** | Capture and frame the opportunity | Clear problem statement + target user |
| **Validation** | Confirm demand and feasibility | Evidence of willingness to pay/use |
| **MVP** | Deliver smallest valuable version | Used by real users; metrics defined |
| **Growth** | Improve fit, scale adoption | Retention + repeatable acquisition |
| **Maturity** | Optimize margins, expand | Stable, profitable, defensible |
| **Sunset** | Retire gracefully | Migration/communication complete |

## Delivery workflow (GitLab-native)

- **Epics** capture initiatives; **issues** capture work; **MRs** deliver changes.
- Every issue has: clear description, acceptance criteria, owner, and links to the epic.
- Use a board with columns: Backlog → Ready → In Progress → In Review → Done.
- Keep work-in-progress low; finish before starting.

## Release management

- Release small and often.
- Maintain a changelog and version releases meaningfully.
- Communicate user-facing changes to customers/support.
- Feature-flag risky changes; roll back fast if needed.

## Feedback loops

- Collect user feedback continuously (support tickets, interviews, usage data).
- Feed insights back into `product/product-strategy.md` prioritization.

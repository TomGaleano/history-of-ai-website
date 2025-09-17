
# Data Model

## Entities

### Decade
Represents a specific period in AI history.

**Fields**:
- `id` (string, required): The decade identifier (e.g., "1950s").
- `title` (string, required): The title of the decade (e.g., "The 1950s").
- `milestoneModels` (string, required): A description of the key AI/ML breakthroughs.
- `codingFocus` (string, required): A look at how these developments laid the groundwork for modern coding assistants.
- `interactiveToolShowcase` (string, required): A description of a representative interactive tool or concept from that era.

**Validation Rules**:
- All fields are required.

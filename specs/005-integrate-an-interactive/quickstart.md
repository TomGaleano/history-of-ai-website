
# Quickstart: The Archivist's Key

This document provides a quickstart guide to testing the interactive Prolog puzzle game.

## User Stories

### Story 1: Playing the Game
**As a user**, I want to play a Prolog-based puzzle game in the 1970s decade view.

**Acceptance Criteria**:
- When I navigate to the 1970s decade view, I see the three-panel game interface.
- I can read the story and instructions in the left panel.
- I can type a query into the input field and see the result in the output window.
- I can find the three parts of the combination by exploring the archive.
- I see a success message when I solve the puzzle.

## Test Scenarios

### Scenario 1: Successful Puzzle Completion
1. **Navigate** to the 1970s decade view.
2. **Verify** that the game interface is displayed.
3. **Enter** the query `look(office).` and verify the output.
4. **Enter** a series of queries to find the three combination parts.
5. **Enter** the final query to open the safe.
6. **Verify** that the success message is displayed.

### Scenario 2: Invalid Query
1. **Navigate** to the 1970s decade view.
2. **Enter** an invalid query (e.g., `foo(bar)`).
3. **Verify** that an error message is displayed in the output window.

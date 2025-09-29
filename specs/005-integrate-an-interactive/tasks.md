# Tasks: Interactive Prolog Puzzle Game

**Input**: Design documents from `/specs/005-integrate-an-interactive/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Phase 3.1: Setup
- [x] T001 [P] **Backend**: Add `pytholog` to the dependencies in `backend/pyproject.toml` and install it using `uv`.
- [x] T002 [P] **Frontend**: No new dependencies needed.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [x] T003 [P] **Backend**: Create a contract test for the `POST /api/prolog/query` endpoint in `backend/tests/contract/test_prolog_api.py`. This test should check that the endpoint returns a 200 status code and the expected JSON structure.
- [x] T004 [P] **Frontend**: Create a component test for `PrologGame.jsx` in `frontend/src/components/PrologGame.test.jsx`. This test should check that the component renders the three panels correctly.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [x] T005 **Backend**: Create the `PrologService` in `backend/src/services/prolog_service.py`. This service will be responsible for initializing the Prolog engine and executing queries. It should load the game's facts from a file.
- [x] T006 **Backend**: Create the `prolog_facts.pl` file in `backend/src/services/prolog_facts.pl` with the game's world definition.
- [x] T007 **Backend**: Create the `POST /api/prolog/query` endpoint in `backend/src/api/main.py`. This endpoint will use the `PrologService` to execute queries and return the results.
- [x] T008 **Frontend**: Create the `PrologGame.jsx` component in `frontend/src/components/PrologGame.jsx`. This component will render the three-panel layout and manage the game's state.
- [x] T009 **Frontend**: Create the `api.js` service in `frontend/src/services/api.js` to make API calls to the backend.
- [x] T010 **Frontend**: Integrate the `PrologGame.jsx` component into the `DecadeView.jsx` component, so that it is rendered when the active decade is "1970s".

## Phase 3.4: Integration
- [ ] T011 **E2E**: Create an end-to-end test in `e2e/prolog_game.spec.js` that simulates a user playing the game from start to finish.

## Phase 3.5: Polish
- [ ] T012 [P] **Backend**: Add unit tests for the `PrologService`.
- [ ] T013 [P] **Frontend**: Add unit tests for the `api.js` service.

## Dependencies
- Tests (T003-T004) before implementation (T005-T010)
- T005 blocks T007
- T009 blocks T008
- Implementation before polish (T012-T013)

## Parallel Example
```
# Launch T003-T004 together:
Task: "**Backend**: Create a contract test for the `POST /api/prolog/query` endpoint in `backend/tests/contract/test_prolog_api.py`"
Task: "**Frontend**: Create a component test for `PrologGame.jsx` in `frontend/src/components/PrologGame.test.jsx`"
```

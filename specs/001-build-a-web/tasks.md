# Tasks: History of Vibe Coding

**Input**: Design documents from `/specs/001-build-a-web/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `backend/src/`, `frontend/src/`

## Phase 3.1: Backend Setup
- [ ] T001 Create the `backend` directory.
- [ ] T002 Initialize a Python project with FastAPI and Uvicorn in the `backend` directory.
- [ ] T003 Create the data model for `Decade` in `backend/src/models/decade.py`.

## Phase 3.2: Backend TDD
- [ ] T004 [P] Create a failing contract test for the `GET /api/decades` endpoint in `backend/tests/contract/test_decades.py`.

## Phase 3.3: Backend Implementation
- [ ] T005 Implement the `GET /api/decades` endpoint in `backend/src/api/main.py` to make the contract test pass. The data should be hardcoded.

## Phase 3.4: Frontend Setup
- [ ] T006 Create the `frontend` directory.
- [ ] T007 Initialize a new React project using Vite in the `frontend` directory.
- [ ] T008 [P] Install axios for making API requests.

## Phase 3.5: Frontend Implementation
- [ ] T009 Create a service to fetch data from the backend in `frontend/src/services/api.js`.
- [ ] T010 [P] Create the `DecadeView` component in `frontend/src/components/DecadeView.jsx`.
- [ ] T011 [P] Create the `NavBar` component in `frontend/src/components/NavBar.jsx`.
- [ ] T012 Create the main `App` component in `frontend/src/App.jsx` to manage state and render the other components.

## Phase 3.6: Frontend TDD
- [ ] T013 [P] Write a unit test for the `DecadeView` component in `frontend/src/components/DecadeView.test.jsx`.
- [ ] T014 [P] Write a unit test for the `NavBar` component in `frontend/src/components/NavBar.test.jsx`.
- [ ] T015 Write an integration test for the `App` component in `frontend/src/App.test.jsx`.

## Dependencies
- T001, T002 must be done before T003, T004, T005.
- T004 must be done before T005.
- T006, T007 must be done before T008, T009, T010, T011, T012, T013, T014, T015.
- T010, T011, T012 must be done before T013, T014, T015.

## Parallel Example
```
# Launch T004, T008, T010, T011, T013, T014 together:
Task: "[P] Create a failing contract test for the GET /api/decades endpoint in backend/tests/contract/test_decades.py"
Task: "[P] Install axios for making API requests."
Task: "[P] Create the DecadeView component in frontend/src/components/DecadeView.jsx."
Task: "[P] Create the NavBar component in frontend/src/components/NavBar.jsx."
Task: "[P] Write a unit test for the DecadeView component in frontend/src/components/DecadeView.test.jsx."
Task: "[P] Write a unit test for the NavBar component in frontend/src/components/NavBar.test.jsx."
```

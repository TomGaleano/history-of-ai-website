# Tasks for Feature: Generate E2E Tests for Decades Components

1.  **Task**: Create `TESTING.md` file.
    - **Details**: Create a new file named `TESTING.md` in the root of the repository.
2.  **Task**: Document testing strategy.
    - **Details**: Add documentation to `TESTING.md` explaining the testing strategy, what the tests cover, and how to run them.
3.  **Task**: Create Playwright test file for Prolog game.
    - **Details**: Create a new file named `frontend/e2e/prolog_game.spec.js`.
4.  **Task**: Add "happy path" test for Prolog game.
    - **Details**: Add a Playwright test to `frontend/e2e/prolog_game.spec.js` that verifies a user can successfully answer a question in the Prolog game.
5.  **Task**: Add "sad path" test for Prolog game.
    - **Details**: Add a Playwright test to `frontend/e2e/prolog_game.spec.js` that verifies the system handles incorrect answers correctly.
6.  **Task**: Create pytest test file for Prolog service.
    - **Details**: Create a new file named `backend/tests/contract/test_prolog_service.py`.
7.  **Task**: Add "happy path" test for Prolog service.
    - **Details**: Add a pytest test to `backend/tests/contract/test_prolog_service.py` that verifies the service returns a correct response for a valid query.
8.  **Task**: Add "sad path" test for Prolog service.
    - **Details**: Add a pytest test to `backend/tests/contract/test_prolog_service.py` that verifies the service returns an appropriate error for an invalid query.
9.  **Task**: Run all tests.
    - **Details**: Run both the Playwright and pytest tests to ensure they all pass.

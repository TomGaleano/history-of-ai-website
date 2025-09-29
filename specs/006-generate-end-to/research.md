# Research: E2E Testing for Decades Components

## Decision
- **E2E Testing Framework**: Playwright will be used for end-to-end testing of the React frontend.
- **Backend Testing Framework**: `pytest` will be used for unit and integration testing of the Python backend services.
- **Documentation**: A `TESTING.md` file will be created in the root of the repository to document the testing strategy, what the tests cover, and how to run them.

## Rationale
- **Playwright**: It is a modern and capable E2E testing framework that supports all major browsers, has excellent debugging capabilities, and is well-suited for testing React applications. The project already has `playwright.config.cjs` and some e2e tests, so it's the established tool.
- **pytest**: It is the de-facto standard for testing in Python, with a rich ecosystem of plugins and a simple, yet powerful, syntax. The project already uses `pytest`.
- **TESTING.md**: A dedicated documentation file is the most appropriate place to store information about the testing strategy, ensuring it is easily accessible to developers.

## Alternatives Considered
- **Cypress**: Another popular E2E testing framework. Playwright was chosen due to its broader browser support and more modern architecture.
- **unittest**: Python's built-in testing framework. `pytest` was chosen for its more concise syntax and richer feature set.

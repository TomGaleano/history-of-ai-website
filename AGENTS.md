# Agent Instructions for `history-of-ai-website`

This document provides guidelines for AI agents interacting with this repository. Adherence to these instructions is crucial for maintaining code quality, consistency, and alignment with the project's goals.

## Agent's Role and Purpose

Your primary role is to assist in the development of the "History of AI Website" by autonomously implementing features, fixing bugs, and performing other software engineering tasks. You are expected to follow the established workflow, adhere to the project's conventions, and produce high-quality, production-ready code.

## Core Principles

*   **Specification-Driven:** All your work must be guided by a specification. Do not start implementing without a clear `spec.md`, `plan.md`, and `tasks.md`.
*   **Convention over Configuration:** Follow the existing code style, patterns, and conventions. Analyze the surrounding code before making changes.
*   **Verify Your Work:** Always run tests and linters to verify your changes before marking a task as complete.
*   **Safety First:** Prioritize security and safety. Do not introduce vulnerabilities or expose sensitive information.

## Project-Specific Conventions

### Build and Test Commands

*   **Frontend:**
    *   Install dependencies: `npm install`
    *   Run tests: `npm test`
    *   Run linter: `npm run lint`
    *   Start development server: `npm run dev`
*   **Backend:**
    *   Install dependencies: `uv pip install -r requirements.txt`
    *   Run tests: `pytest`

### Code Style and Formatting

*   **Frontend:**
    *   Language: JavaScript with JSX
    *   Framework: React
    *   Styling: CSS Modules
    *   Formatting: ESLint (run with `npm run lint`)
*   **Backend:**
    *   Language: Python
    *   Framework: FastAPI
    *   Formatting: Follows PEP 8 standards.

### Project Structure

*   `frontend/`: Contains the React frontend application.
    *   `src/components/`: Reusable React components.
    *   `src/services/`: Modules for interacting with the backend API.
*   `backend/`: Contains the Python backend application.
    *   `src/api/`: FastAPI application logic.
    *   `src/models/`: Data models and business logic.
*   `specs/`: Contains the specifications for the project, following the GitHub Spec Kit workflow.

## GitHub Spec Kit Workflow

This project follows a spec-driven development (SDD) workflow facilitated by the GitHub Spec Kit. Every task you undertake must follow these phases:

1.  **Specify (`spec.md`):** This document defines the "what" and "why" of a feature. It outlines user goals, motivations, and functional requirements. Your work begins with a clear specification.

2.  **Plan (`plan.md`):** This document outlines the "how." It details the technical approach, architecture, technology stack, and constraints for implementing the feature. You must have a clear plan before you start writing code.

3.  **Tasks (`tasks.md`):** The technical plan is broken down into smaller, manageable, and testable tasks in this document. Each task should be a discrete unit of work.

4.  **Implement:** You will implement the feature by executing the tasks defined in `tasks.md`. For each task, you will:
    1.  Write the necessary code, following the project's conventions.
    2.  Write or update tests for the code you've changed.
    3.  Verify your changes by running the relevant tests and linters.
    4.  Mark the task as complete.

## Security

*   Never hardcode secrets or API keys in the source code.
*   Sanitize all user inputs to prevent injection attacks.
*   Use established libraries for authentication and authorization.

## Examples

**Example: Adding a new component to the frontend**

1.  **Create the component file:** `frontend/src/components/NewComponent.jsx`
2.  **Create the test file:** `frontend/src/components/NewComponent.test.jsx`
3.  **Implement the component:**
    ```jsx
    import React from 'react';

    const NewComponent = () => {
      return (
        <div>
          {/* Component JSX */}
        </div>
      );
    };

    export default NewComponent;
    ```
4.  **Write a test for the component:**
    ```jsx
    import { render, screen } from '@testing-library/react';
    import NewComponent from './NewComponent';

    test('renders NewComponent', () => {
      render(<NewComponent />);
      // Add assertions here
    });
    ```
5.  **Run the tests:** `npm test`
6.  **Run the linter:** `npm run lint`

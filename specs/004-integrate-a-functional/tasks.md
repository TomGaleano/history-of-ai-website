# Tasks for ELIZA Chatbot Integration

This document outlines the tasks required to implement the ELIZA chatbot feature.

## Execution

### Parallel Execution

The following tasks can be executed in parallel:

```bash
gemini task T001 T005 T009
```

### Sequential Execution

After the parallel tasks are complete, the remaining tasks should be executed in the following order:

1.  `gemini task T004`
2.  `gemini task T003`
3.  `gemini task T002`
4.  `gemini task T008`
5.  `gemini task T007`
6.  `gemini task T006`

## Task List

### Backend

**T001 [P]: Create contract test for the ELIZA API endpoint**
- **File**: `backend/tests/contract/test_eliza_api.py`
- **Details**: Create a new contract test file to validate the request and response schemas for the `POST /api/eliza/chat` endpoint as defined in `specs/004-integrate-a-functional/contracts/api.yaml`.
- **Dependencies**: None

**T002: Implement the ELIZA chat endpoint**
- **File**: `backend/src/api/main.py`
- **Details**: Add the `POST /api/eliza/chat` endpoint. This endpoint will take a user's message, use the `eliza_service` to get a reply, and return the response.
- **Dependencies**: T003, T004

**T003: Implement the ELIZA logic service**
- **File**: `backend/src/services/eliza_service.py`
- **Details**: Create a new service that contains the core ELIZA pattern-matching logic. This service will have a method that takes a string as input and returns ELIZA's response.
- **Dependencies**: T004

**T004: Create Pydantic model for chat request**
- **File**: `backend/src/models/chat.py`
- **Details**: Create a new file and a Pydantic model `ChatRequest` with a single `message` field of type string.
- **Dependencies**: None

### Frontend

**T005 [P]: Create component test for ElizaChatbot**
- **File**: `frontend/src/components/ElizaChatbot.test.jsx`
- **Details**: Create a new component test file. The test should mock the API service and verify that the component correctly displays the user's message and ELIZA's response after the API call resolves.
- **Dependencies**: None

**T006: Add ElizaChatbot to the 1960s DecadeView**
- **File**: `frontend/src/components/DecadeView.jsx`
- **Details**: Import the `ElizaChatbot` component and render it within the `DecadeView` component when the selected decade is the 1960s.
- **Dependencies**: T007

**T007: Create the ElizaChatbot component**
- **File**: `frontend/src/components/ElizaChatbot.jsx`
- **Details**: Create the new `ElizaChatbot` component. This component will manage the chat history state and handle user input. On message submission, it will call the API service to get ELIZA's response.
- **Dependencies**: T008

**T008: Implement the ELIZA API service**
- **File**: `frontend/src/services/api.js`
- **Details**: Add a new function to the `api.js` service that makes a `POST` request to the `/api/eliza/chat` endpoint, sending the user's message and returning the response.
- **Dependencies**: None

**T009 [P]: Create E2E test for the ELIZA chat feature**
- **File**: `frontend/e2e/eliza.spec.js`
- **Details**: Create a new Playwright E2E test. The test should navigate to the 1960s decade page, interact with the chat component, and assert that the conversation is displayed correctly.
- **Dependencies**: None

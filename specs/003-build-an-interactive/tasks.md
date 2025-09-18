# Tasks: Interactive Digit Detector

**Input**: Design documents from `/specs/003-build-an-interactive/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/

## Phase 3.1: Setup
- [ ] T001 [P] Install `react-konva` in the `frontend` directory.
- [ ] T002 [P] Install `scikit-learn` and `joblib` in the `backend` directory.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
- [ ] T003 [P] Create contract test for `POST /predict` in `backend/tests/contract/test_predict.py`.
- [ ] T004 [P] Create component test for `DigitDetector` in `frontend/src/components/DigitDetector.test.jsx`.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T005 [P] Create a script to train a scikit-learn model on the MNIST dataset and save it as `backend/src/models/mnist_model.joblib`.
- [ ] T006 Create the `DigitDetector` component in `frontend/src/components/DigitDetector.jsx`.
- [ ] T007 Implement the `POST /predict` endpoint in `backend/src/api/main.py`.

## Phase 3.4: Integration
- [ ] T008 Integrate the `DigitDetector` component into the `DecadeView` for the 1950s in `frontend/src/components/DecadeView.jsx`.

## Phase 3.5: Polish
- [ ] T009 [P] Add unit tests for the image preprocessing logic.
- [ ] T010 [P] Add documentation for the `DigitDetector` component and the `/predict` endpoint.

# History of Vibe Coding

This project is an interactive, single-page web application that provides a timeline of the history of Artificial Intelligence and Machine Learning. Users can explore key developments, milestone models, and interactive tools from different decades.

## Features

*   **Interactive Timeline:** Explore the history of AI decade by decade, from the 1950s to the 2020s.
*   **Dynamic Content:** The content for each decade is loaded dynamically without page reloads.
*   **Digit Recognizer:** An interactive tool that uses a machine learning model to recognize handwritten digits drawn by the user.

## Getting Started

To get the application up and running, you will need to run both the frontend and backend services.

### Prerequisites

*   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend.
*   [Python](https://www.python.org/) and [uv](https://github.com/astral-sh/uv) for the backend.

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the Python dependencies using `uv`:
    ```bash
    uv pip install -r requirements.txt
    ```
3.  Start the backend server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the Node.js dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```

After starting both the frontend and backend, you can view the application in your browser at the address provided by the frontend development server (usually `http://localhost:5173`).

## Project Structure

The repository is organized into two main parts:

*   `frontend/`: Contains the React-based single-page application that the user interacts with.
*   `backend/`: Contains the Python-based backend server, which uses FastAPI to serve data and machine learning models to the frontend.
*   `specs/`: Contains the project's specification documents, which outline the features and requirements of the application.

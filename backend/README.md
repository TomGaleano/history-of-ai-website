# Backend

This directory contains the backend of the "History of Vibe Coding" application. It is a Python application built with [FastAPI](https://fastapi.tiangolo.com/).

## Description

The backend has two main responsibilities:

1.  **Serving Timeline Data:** It provides the content for the interactive timeline, which is fetched by the frontend.
2.  **Machine Learning Model:** It serves a machine learning model for digit recognition, which is used by the interactive digit detector tool.

## Getting Started

To run the backend, you need to have [Python](https://www.python.org/) and [uv](https://github.com/astral-sh/uv) installed.

### Installation

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    uv pip install -r requirements.txt
    ```

### Running the Server

To start the backend server, run the following command:

```bash
uvicorn main:app --reload
```

This will start the backend server, which will be available at `http://localhost:8000`.

### Running Tests

To run the tests for the backend, use the following command:

```bash
pytest
```

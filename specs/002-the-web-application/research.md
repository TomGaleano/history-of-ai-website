# Research & Best Practices

## Decisions

### CORS Middleware: FastAPI's `CORSMiddleware`
- **Rationale**: FastAPI provides a `CORSMiddleware` that is easy to configure and use. It's the standard way to handle CORS in FastAPI applications.
- **Alternatives considered**: Writing a custom middleware. This is not necessary as FastAPI already provides a solution.

## How to use `CORSMiddleware`

To use `CORSMiddleware`, you need to add it to your FastAPI application.

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

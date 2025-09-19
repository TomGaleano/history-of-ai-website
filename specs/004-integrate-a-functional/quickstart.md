# Quickstart: Testing the ELIZA Chatbot

This guide provides the steps to test the ELIZA chatbot integration.

## 1. Start the Backend Server

Navigate to the `backend` directory and start the FastAPI server:

```bash
cd backend
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt
uvicorn main:app --reload
```

## 2. Start the Frontend Development Server

In a new terminal, navigate to the `frontend` directory and start the Vite development server:

```bash
cd frontend
npm install
npm run dev
```

## 3. Interact with the ELIZA Chatbot

1. Open your web browser and navigate to the URL provided by the Vite development server (usually `http://localhost:5173`).
2. Click on the "1960s" tab in the navigation bar.
3. Scroll down to the "Talk to ELIZA" section.
4. Type a message in the input field and press Enter or click "Send".
5. Verify that your message and a response from ELIZA appear in the chat window.

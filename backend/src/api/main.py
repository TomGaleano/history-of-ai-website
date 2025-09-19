from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ..models.decade import Decade
import joblib
import numpy as np
import os
from pydantic import BaseModel
import base64
import io
from PIL import Image
from ..models.chat import ChatRequest
from ..services.eliza_service import get_eliza_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
model = joblib.load('src/models/mnist_model.joblib')
counter = 0

class DigitDrawing(BaseModel):
    image_data: str

decades_data = {
    "1950s": {
        "id": "1950s",
        "title": "The 1950s: The Dawn of AI",
        "milestoneModels": "The Turing Test, Logic Theorist, and the first neural networks.",
        "codingFocus": "Focus on symbolic reasoning and the beginnings of machine intelligence.",
        "interactiveToolShowcase": "A simulation of the Logic Theorist program.",
    },
    "1960s": {
        "id": "1960s",
        "title": "The 1960s: The Rise of Expert Systems",
        "milestoneModels": "Shakey the robot, ELIZA, and the development of Lisp.",
        "codingFocus": "Development of specialized programming languages for AI.",
        "interactiveToolShowcase": "A chatbot inspired by ELIZA.",
    },
    "1970s": {
        "id": "1970s",
        "title": "The 1970s: The 'AI Winter'",
        "milestoneModels": "The Lighthill Report and the decline in AI research funding.",
        "codingFocus": "A shift towards more practical and commercially viable applications.",
        "interactiveToolShowcase": "A simulation of the effects of the AI winter on research.",
    },
    "1980s": {
        "id": "1980s",
        "title": "The 1980s: The Return of Neural Networks",
        "milestoneModels": "The backpropagation algorithm and the resurgence of connectionism.",
        "codingFocus": "The development of more powerful and efficient learning algorithms.",
        "interactiveToolShowcase": "An interactive visualization of the backpropagation algorithm.",
    },
    "1990s": {
        "id": "1990s",
        "title": "The 1990s: The Rise of Machine Learning",
        "milestoneModels": "Support Vector Machines, and the development of the World Wide Web.",
        "codingFocus": "The application of machine learning to real-world problems.",
        "interactiveToolShowcase": "A tool for classifying data using Support Vector Machines.",
    },
    "2000s": {
        "id": "2000s",
        "title": "The 2000s: The Age of Big Data",
        "milestoneModels": "The development of large-scale distributed computing frameworks like Hadoop and MapReduce.",
        "codingFocus": "The ability to process and analyze massive datasets.",
        "interactiveToolShowcase": "A simulation of a MapReduce job.",
    },
    "2020s": {
        "id": "2020s",
        "title": "The 2020s: The Rise of Large Language Models",
        "milestoneModels": "The development of large language models like GPT-3 and BERT.",
        "codingFocus": "The ability to generate human-like text and code.",
        "interactiveToolShowcase": "A tool for generating text and code using a large language model.",
    },
}

@app.get("/api/decades", response_model=dict[str, Decade])
async def get_decades():
    return decades_data

@app.post("/predict")
async def predict(drawing: DigitDrawing):
    # Preprocess the image data
    image_data = base64.b64decode(drawing.image_data.split(',')[1])
    image = Image.open(io.BytesIO(image_data)).convert('L')
    image = image.resize((28, 28))
    image = np.array(image).reshape(1, 784)
    image = np.abs(image / 255.0 - 1)


    # Make a prediction
    prediction = model.predict(image)
    # prediction_proba = model.predict_proba(image)

    return {"digit": int(prediction[0])}

@app.post("/api/eliza/chat")
async def eliza_chat(chat_request: ChatRequest):
    reply = get_eliza_response(chat_request.message)
    return {"reply": reply}


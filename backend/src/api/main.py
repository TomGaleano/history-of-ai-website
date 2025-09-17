from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ..models.decade import Decade

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
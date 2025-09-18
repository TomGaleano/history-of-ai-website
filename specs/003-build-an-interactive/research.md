# Research: Interactive Digit Detector

**Date**: 2025-09-18

## Research Summary
This document summarizes the research findings for building the interactive digit detector feature.

### Backend: scikit-learn with FastAPI

**Decision**: Use FastAPI to serve a pre-trained scikit-learn model.

**Rationale**:
- FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints.
- It's easy to integrate with scikit-learn models.
- It provides automatic interactive documentation (Swagger UI).

**Implementation Steps**:
1.  Train a scikit-learn model on the MNIST dataset and save it using `joblib`.
2.  Create a FastAPI application.
3.  Load the saved model into the application.
4.  Define Pydantic models for the request (image data) and response (prediction).
5.  Create a `/predict` endpoint that takes the image data, preprocesses it, and returns the model's prediction.

### Frontend: React Canvas Library

**Decision**: Use `react-konva` for the drawing canvas.

**Rationale**:
- `react-konva` is a popular and well-maintained library for working with canvas in React.
- It provides a declarative API for building complex canvas graphics.
- It has good documentation and community support.

**Alternatives Considered**:
- **`react-canvas-draw`**: A simpler library, but less flexible than `react-konva`.
- **Fabric.js**: Another powerful library, but `react-konva` has better React integration.

### Frontend: Canvas Image Preprocessing for MNIST

**Decision**: Implement a preprocessing function in the frontend to prepare the canvas image for the MNIST model.

**Rationale**:
- The model expects a 28x28 grayscale image with white digits on a black background.
- The canvas drawing will likely be black on a white background.
- Preprocessing is necessary to match the model's input requirements.

**Implementation Steps**:
1.  Get the image data from the canvas.
2.  Resize the image to 28x28 pixels.
3.  Convert the image to grayscale.
4.  Invert the colors of the image.
5.  Normalize the pixel values to be between 0 and 1.
6.  Send the preprocessed image data to the backend.

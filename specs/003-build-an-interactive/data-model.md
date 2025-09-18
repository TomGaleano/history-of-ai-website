# Data Model: Interactive Digit Detector

**Date**: 2025-09-18

## Entities

### DigitDrawing
Represents the drawing of a digit sent from the frontend to the backend.

**Fields**:
- `image_data` (string): A base64 encoded string representing the 28x28 grayscale image data from the canvas.

**Validation Rules**:
- The `image_data` string must not be empty.
- The decoded image data must be a 28x28 image.

### PredictionResult
Represents the prediction result returned from the backend.

**Fields**:
- `digit` (integer): The predicted digit (0-9).

**Validation Rules**:
- The `digit` must be an integer between 0 and 9.

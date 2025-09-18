from fastapi.testclient import TestClient
import base64
from fastapi.testclient import TestClient
from src.api.main import app
from PIL import Image
import io

client = TestClient(app)

def test_predict_endpoint():
    # Create a dummy 1x1 black pixel image
    img = Image.new('RGB', (1, 1), color = 'black')
    buffer = io.BytesIO()
    img.save(buffer, format='PNG')
    image_data = base64.b64encode(buffer.getvalue()).decode('utf-8')

    response = client.post("/predict", json={"image_data": f"data:image/png;base64,{image_data}"})
    assert response.status_code == 200
    assert "digit" in response.json()
    assert isinstance(response.json()["digit"], int)

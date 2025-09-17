from fastapi.testclient import TestClient
from src.api.main import app

client = TestClient(app)

def test_get_decades():
    response = client.get("/api/decades")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, dict)
    for decade_id, decade_data in data.items():
        assert "id" in decade_data
        assert "title" in decade_data
        assert "milestoneModels" in decade_data
        assert "codingFocus" in decade_data
        assert "interactiveToolShowcase" in decade_data

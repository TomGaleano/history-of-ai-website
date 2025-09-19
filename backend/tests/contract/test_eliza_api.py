from fastapi.testclient import TestClient
from src.api.main import app

client = TestClient(app)

def test_eliza_chat_contract():
    """Test the contract of the /api/eliza/chat endpoint."""
    response = client.post("/api/eliza/chat", json={"message": "Hello"})
    assert response.status_code == 200
    data = response.json()
    assert "reply" in data
    assert isinstance(data["reply"], str)

import os
from fastapi.testclient import TestClient
from src.api.main import app

client = TestClient(app)

def test_prolog_query():
    response = client.post("/api/prolog/query", json={"query": "location(desk, office)."})
    assert response.status_code == 200
    data = response.json()
    assert data["solutions"]
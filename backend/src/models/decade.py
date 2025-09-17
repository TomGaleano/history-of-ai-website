from pydantic import BaseModel

class Decade(BaseModel):
    id: str
    title: str
    milestoneModels: str
    codingFocus: str
    interactiveToolShowcase: str

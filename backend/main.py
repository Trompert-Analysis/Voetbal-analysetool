from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd

app = FastAPI()

# CORS-instellingen toevoegen vóór je routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Of vervang "*" door je Vercel-URL voor extra veiligheid
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputData(BaseModel):
    speler_id: int
    beoordeling: dict
    zelfbeoordeling: dict

@app.post("/matchscore")
def bereken_matchscore(data: InputData):
    # Dummy response
    return {
        "advies": "Je past het best op de positie CAM – 10",
        "matchscore": 74.2
    }


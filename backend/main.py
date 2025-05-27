from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # of specifieker: ["https://voetbal-analysetool-j6bg.vercel.app"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app = FastAPI()

class InputData(BaseModel):
    speler_id: int
    beoordeling: dict
    zelfbeoordeling: dict

@app.post("/matchscore")
def bereken_matchscore(data: InputData):
    # Dummy matchscore
    return {
        "advies": "Je past het best op de positie CAM – 10",
        "matchscore": 74.2
    }

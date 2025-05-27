from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd

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

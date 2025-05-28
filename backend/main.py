
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Laad profielen
with open("profielen_data.json", "r", encoding="utf-8") as f:
    profielen = json.load(f)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
    input_scores = data.beoordeling

    matchresultaten = []
    for profiel, wegingen in profielen.items():
        totaal_score = 0
        totaal_gewicht = 0
        for vaardigheid, gewicht in wegingen.items():
            speler_score = input_scores.get(vaardigheid)
            if speler_score is not None:
                totaal_score += float(speler_score) * gewicht
                totaal_gewicht += gewicht
        matchscore = round(totaal_score / totaal_gewicht, 2) if totaal_gewicht > 0 else 0
        matchresultaten.append((profiel, matchscore))

    best_match = max(matchresultaten, key=lambda x: x[1])
    return {
        "advies": f"Je past het best op de positie {best_match[0]}",
        "matchscore": best_match[1]
    }

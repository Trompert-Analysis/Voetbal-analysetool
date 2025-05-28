
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open("profielen_data.json", "r", encoding="utf-8") as f:
    profielen_data = json.load(f)

class InputData(BaseModel):
    speler_id: int
    beoordeling: dict
    zelfbeoordeling: dict

@app.post("/matchscore")
def bereken_matchscore(data: InputData):
    gemiddelde_scores = {}
    for vaardigheid in data.beoordeling:
        try:
            gemiddelde_scores[vaardigheid] = (float(data.beoordeling[vaardigheid]) + float(data.zelfbeoordeling[vaardigheid])) / 2
        except:
            gemiddelde_scores[vaardigheid] = 0

    profiel_scores = []
    for profiel in profielen_data:
        score = 0
        totaal_gewicht = 0
        for vaardigheid, gewicht in profiel["vaardigheden"].items():
            vaardigheid_score = gemiddelde_scores.get(vaardigheid, 0)
            score += vaardigheid_score * gewicht
            totaal_gewicht += gewicht
        matchscore = score / totaal_gewicht if totaal_gewicht else 0
        profiel_scores.append({"profiel": profiel["profiel"], "score": round(matchscore, 2)})

    profiel_scores.sort(key=lambda x: x["score"], reverse=True)
    top_3 = profiel_scores[:3]
    bottom_3 = profiel_scores[-3:]

    advies = (
        "Top 3 best passende profielen:\n" +
        "\n".join([f"{p['profiel']}: {p['score']}" for p in top_3]) +
        "\n\nLaagst scorende 3 profielen:\n" +
        "\n".join([f"{p['profiel']}: {p['score']}" for p in bottom_3])
    )

    return {
        "advies": advies,
        "matchscore": top_3[0]["score"]
    }

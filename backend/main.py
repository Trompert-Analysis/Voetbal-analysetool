from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from passlib.context import CryptContext
from jose import JWTError, jwt
import json
from fastapi.security import OAuth2PasswordBearer
from fastapi import status

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# ====== BASISCONFIGURATIE ======
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ====== DATABASE ======
DATABASE_URL = "sqlite:///./voetbaltool.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine, autoflush=False)

# ====== GEBRUIKERSTABEL ======
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String)

Base.metadata.create_all(bind=engine)

# ====== AUTHENTICATIE ======
SECRET_KEY = "geheim123"  # Gebruik in productie een veilige sleutel!
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def hash_wachtwoord(password: str):
    return pwd_context.hash(password)

def verify_wachtwoord(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Niet geautoriseerd",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    return user

def coach_required(current_user: User = Depends(get_current_user)):
    if current_user.role != "coach":
        raise HTTPException(status_code=403, detail="Alleen voor coaches")
    return current_user

def speler_required(current_user: User = Depends(get_current_user)):
    if current_user.role != "speler":
        raise HTTPException(status_code=403, detail="Alleen voor spelers")
    return current_user

def create_access_token(data: dict):
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

# ====== SCHEMAS ======
class RegisterRequest(BaseModel):
    email: str
    password: str
    role: str  # "coach", "speler", of "beoordelaar"

class LoginRequest(BaseModel):
    email: str
    password: str

class InputData(BaseModel):
    speler_id: int
    beoordeling: dict
    zelfbeoordeling: dict

# ====== REGISTRATIE & LOGIN ======
@app.post("/register")
def register_user(data: RegisterRequest, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email is al geregistreerd")
    new_user = User(
        email=data.email,
        hashed_password=hash_wachtwoord(data.password),
        role=data.role
    )
    db.add(new_user)
    db.commit()
    return {"message": "Gebruiker geregistreerd"}

@app.post("/login")
def login_user(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_wachtwoord(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Ongeldige inloggegevens")
    token = create_access_token({"sub": user.email, "role": user.role})
    return {"access_token": token, "token_type": "bearer", "role": user.role}

# ====== PROFIELMATCHING (reeds bestaand) ======
with open("profielen_data.json", "r", encoding="utf-8") as f:
    profielen_data = json.load(f)

@app.post("/matchscore")
def bereken_matchscore(data: InputData):
    gemiddelde_scores = {}
    for vaardigheid in data.beoordeling:
        try:
            gemiddelde_scores[vaardigheid] = (
                float(data.beoordeling[vaardigheid]) + float(data.zelfbeoordeling[vaardigheid])
            ) / 2
        except:
            gemiddelde_scores[vaardigheid] = 0

@app.get("/coach/dashboard")
def coach_dashboard(current_user: User = Depends(coach_required)):
    return {"message": f"Welkom Coach {current_user.email}, je hebt toegang tot het coach-dashboard."}

@app.get("/speler/dashboard")
def speler_dashboard(current_user: User = Depends(speler_required)):
    return {"message": f"Welkom Speler {current_user.email}, je hebt toegang tot het speler-dashboard."}


    profiel_scores = []
    for profiel_naam, eigenschappen in profielen_data.items():
        vaardigheden = eigenschappen["vaardigheden"]
        score = 0
        totaal_gewicht = 0
        for vaardigheid, gewicht in vaardigheden.items():
            vaardigheid_score = gemiddelde_scores.get(vaardigheid, 0)
            score += vaardigheid_score * gewicht
            totaal_gewicht += gewicht
        matchscore = score / totaal_gewicht if totaal_gewicht else 0
        profiel_scores.append({"profiel": profiel_naam, "score": round(matchscore, 2)})

    profiel_scores.sort(key=lambda x: x["score"], reverse=True)
    top_3 = profiel_scores[:3]
    bottom_3 = profiel_scores[-3:]

    max_len = max(len(p["profiel"]) for p in top_3 + bottom_3)

    advies = "🏆 Top 3 best passende profielen:\n"
    for i, p in enumerate(top_3, 1):
        advies += f"  {i}. {p['profiel'].ljust(max_len)} – Score: {p['score']}\n"

    beste_profiel = top_3[0]["profiel"]
    beschrijving = profielen_data[beste_profiel].get("beschrijving", "Geen beschrijving beschikbaar.")
    advies += f"\n📝 Beschrijving van best passend profiel ({beste_profiel}):\n{beschrijving}\n"

    advies += "\n🔻 Laagst scorende 3 profielen:\n"
    for i, p in enumerate(bottom_3, 1):
        advies += f"  {i}. {p['profiel'].ljust(max_len)} – Score: {p['score']}\n"

    return {
        "advies": advies,
        "matchscore": top_3[0]["score"]
    }

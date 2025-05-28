from sqlalchemy import Column, Integer, String, Enum, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
import enum

Base = declarative_base()

class Rol(enum.Enum):
    coach = "coach"
    speler = "speler"
    beoordelaar = "beoordelaar"

class Gebruiker(Base):
    __tablename__ = "gebruikers"

    id = Column(Integer, primary_key=True, index=True)
    naam = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    wachtwoord_hash = Column(String, nullable=False)
    rol = Column(Enum(Rol), nullable=False)

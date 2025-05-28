from database import Base, engine
import models  # Zorg dat je hier je models importeert

Base.metadata.create_all(bind=engine)

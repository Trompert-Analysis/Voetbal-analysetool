
# Voetbal-analysetool MVP

Deze MVP bevat een React-frontend (met Tailwind) en een Python-backend met FastAPI en Pandas.

## 📁 Structuur

- `/frontend/` – React-app, geschikt voor Vercel
- `/backend/` – FastAPI-app met scoreberekening, geschikt voor Render

---

## 🚀 Deploy-instructies

### 1. Zet frontend live via Vercel

1. Ga naar [vercel.com](https://vercel.com)
2. Klik op 'Add New → Project'
3. Selecteer deze repo
4. Kies de map `/frontend`
5. Klik op Deploy

### 2. Zet backend live via Render

1. Ga naar [render.com](https://render.com)
2. Klik op 'New → Web Service'
3. Kies deze GitHub-repo
4. Root directory: `/backend`
5. Build command: `pip install -r requirements.txt`
6. Start command: `uvicorn main:app --host 0.0.0.0 --port 10000`
7. Kies Free Tier en deploy

---

## 🔧 Testen lokaal

### Backend:
```bash
cd backend
uvicorn main:app --reload
```

### Frontend:
```bash
cd frontend
npm install
npm run dev
```

---

Veel succes met jouw eigen voetbal-analysetool!

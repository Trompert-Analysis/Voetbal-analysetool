import React, { useState } from 'react';

function App() {
  const [naam, setNaam] = useState('');
  const [score, setScore] = useState(null);

  const berekenScore = async () => {
    const response = await fetch('http://localhost:8000/matchscore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ speler_id: 1, beoordeling: {}, zelfbeoordeling: {} })
    });
    const data = await response.json();
    setScore(data.advies || "Geen score ontvangen");
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Voetbal Analysetool MVP</h1>
      <input
        type="text"
        placeholder="Naam speler"
        value={naam}
        onChange={(e) => setNaam(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={berekenScore} className="bg-blue-600 text-white px-4 py-2 rounded">
        Bereken Score
      </button>
      {score && <div className="mt-4 text-green-700 font-medium">Advies: {score}</div>}
    </div>
  );
}

export default App;

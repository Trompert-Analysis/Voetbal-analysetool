import React, { useState } from 'react';

function Speler() {
  const [naam, setNaam] = useState('');
  const [scores, setScores] = useState({});
  const [advies, setAdvies] = useState(null);

  const handleChange = (e) => {
    setScores({ ...scores, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://voetbal-analysetool.onrender.com/matchscore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        speler_id: 1,
        beoordeling: scores,
        zelfbeoordeling: scores
      })
    });
    const data = await response.json();
    setAdvies(data.advies || 'Geen advies ontvangen');
  };

  const secties = {
    "Fysiek": ["snelheid", "Sterkte (fysiek)", "uithoudingsvermogen", "Wendbaarheid", "sprongkracht"],
    "Technische vaardigheden": ["1-tegen-1 duel", "Aanvallende loopacties", "Afstandsschot", "Dribbelen", "Koppen", "Passing", "Lange bal", "Positionering", "Pressing zetten", "Schotkracht", "Schotnauwkeurigheid", "Tackelen", "Traptechniek", "Voorzetten"],
    "Mentale vaaardigheden": ["Anticipatie", "Besluitvorming", "Creativiteit", "Leiderschap", "Spelinzicht"],
    "Overige vaardigheden": ["Balverovering", "Buitenspelval gebruiken", "Geschikte voet (links)", "Geschikte voet (rechts)", "Geschikte voet (beide)"],
    "Keeperskwaliteiten": ["Reflexen", "Keeperstechniek", "Uitkomen", "Redding bij 1-tegen-1", "coaching vanuit achteruit"]
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Spelerbeoordeling</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Naam speler"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          className="w-full p-2 border"
        />

        {Object.entries(secties).map(([sectie, vaardigheden]) => (
          <div key={sectie}>
            <h2 className="text-xl font-semibold mb-2">{sectie}</h2>
            {vaardigheden.map((vaardigheid) => (
              <div key={vaardigheid} className="mb-3">
                <label className="block mb-1 capitalize">{vaardigheid}</label>
                <input
                  type="number"
                  name={vaardigheid}
                  value={scores[vaardigheid] || ''}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full p-2 border"
                />
              </div>
            ))}
          </div>
        ))}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Bereken Score
        </button>
      </form>

      {advies && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
          <p className="font-medium text-green-800">Advies:</p>
          <p>{advies}</p>
        </div>
      )}
    </div>
  );
}

export default Speler;

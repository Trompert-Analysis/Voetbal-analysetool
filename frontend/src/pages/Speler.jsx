import React, { useState } from 'react';

function Speler() {
  const [naam, setNaam] = useState('');
  const [scores, setScores] = useState({
    "dribbelen": "",
    "korte_pass": "",
    "lange_pass": "",
    "passing": "",
    "traptechniek": "",
    "voorzetten": "",
    "koppen": "",
    "schotkracht": "",
    "schotnauwkeurigheid": "",
    "afstandsschot": "",
    "spelinzicht": "",
    "anticipatie": "",
    "positionering": "",
    "pressing_zetten": "",
    "balverovering": "",
    "buitenspelval_gebruiken": "",
    "coaching_vanuit_achteruit": "",
    "creativiteit": "",
    "aanvallende_loopacties": "",
    "besluitvorming": "",
    "leiderschap": "",
    "reactievermogen": "",
    "geschikte_voet_links": "",
    "geschikte_voet_rechts": "",
    "geschikte_voet_links_rechts": "",
    "1-tegen-1_duel": "",
    "snelheid": "",
    "sprongkracht": "",
    "uithoudingsvermogen": "",
    "tackelen": "",
    "sterkte_fysiek": "",
    "keeperstechniek": "",
    "reflexen": "",
    "redding_bij_1-tegen-1": "",
    "uitkomen": ""
  });
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

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Spelerbeoordeling</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Naam speler" value={naam} onChange={(e) => setNaam(e.target.value)} className="w-full p-2 border" />
        <h2 className="text-lg font-semibold mt-6 mb-2">Technische vaardigheden</h2>
        <div key="dribbelen">
          <label className="block mb-1 capitalize">Dribbelen</label>
          <input
            type="number"
            name="dribbelen"
            value={scores["dribbelen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="korte_pass">
          <label className="block mb-1 capitalize">Korte pass</label>
          <input
            type="number"
            name="korte_pass"
            value={scores["korte_pass"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="lange_pass">
          <label className="block mb-1 capitalize">Lange pass</label>
          <input
            type="number"
            name="lange_pass"
            value={scores["lange_pass"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="passing">
          <label className="block mb-1 capitalize">Passing</label>
          <input
            type="number"
            name="passing"
            value={scores["passing"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="traptechniek">
          <label className="block mb-1 capitalize">Traptechniek</label>
          <input
            type="number"
            name="traptechniek"
            value={scores["traptechniek"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="voorzetten">
          <label className="block mb-1 capitalize">Voorzetten</label>
          <input
            type="number"
            name="voorzetten"
            value={scores["voorzetten"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="koppen">
          <label className="block mb-1 capitalize">Koppen</label>
          <input
            type="number"
            name="koppen"
            value={scores["koppen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="schotkracht">
          <label className="block mb-1 capitalize">Schotkracht</label>
          <input
            type="number"
            name="schotkracht"
            value={scores["schotkracht"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="schotnauwkeurigheid">
          <label className="block mb-1 capitalize">Schotnauwkeurigheid</label>
          <input
            type="number"
            name="schotnauwkeurigheid"
            value={scores["schotnauwkeurigheid"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="afstandsschot">
          <label className="block mb-1 capitalize">Afstandsschot</label>
          <input
            type="number"
            name="afstandsschot"
            value={scores["afstandsschot"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Tactische vaardigheden</h2>
        <div key="spelinzicht">
          <label className="block mb-1 capitalize">Spelinzicht</label>
          <input
            type="number"
            name="spelinzicht"
            value={scores["spelinzicht"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="anticipatie">
          <label className="block mb-1 capitalize">Anticipatie</label>
          <input
            type="number"
            name="anticipatie"
            value={scores["anticipatie"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="positionering">
          <label className="block mb-1 capitalize">Positionering</label>
          <input
            type="number"
            name="positionering"
            value={scores["positionering"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="pressing_zetten">
          <label className="block mb-1 capitalize">Pressing zetten</label>
          <input
            type="number"
            name="pressing_zetten"
            value={scores["pressing_zetten"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="balverovering">
          <label className="block mb-1 capitalize">Balverovering</label>
          <input
            type="number"
            name="balverovering"
            value={scores["balverovering"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="buitenspelval_gebruiken">
          <label className="block mb-1 capitalize">Buitenspelval gebruiken</label>
          <input
            type="number"
            name="buitenspelval_gebruiken"
            value={scores["buitenspelval_gebruiken"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="coaching_vanuit_achteruit">
          <label className="block mb-1 capitalize">Coaching vanuit achteruit</label>
          <input
            type="number"
            name="coaching_vanuit_achteruit"
            value={scores["coaching_vanuit_achteruit"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="creativiteit">
          <label className="block mb-1 capitalize">Creativiteit</label>
          <input
            type="number"
            name="creativiteit"
            value={scores["creativiteit"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="aanvallende_loopacties">
          <label className="block mb-1 capitalize">Aanvallende loopacties</label>
          <input
            type="number"
            name="aanvallende_loopacties"
            value={scores["aanvallende_loopacties"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="besluitvorming">
          <label className="block mb-1 capitalize">Besluitvorming</label>
          <input
            type="number"
            name="besluitvorming"
            value={scores["besluitvorming"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="leiderschap">
          <label className="block mb-1 capitalize">Leiderschap</label>
          <input
            type="number"
            name="leiderschap"
            value={scores["leiderschap"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Mentale vaardigheden</h2>
        <div key="reactievermogen">
          <label className="block mb-1 capitalize">Reactievermogen</label>
          <input
            type="number"
            name="reactievermogen"
            value={scores["reactievermogen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="geschikte_voet_links">
          <label className="block mb-1 capitalize">Geschikte voet (links)</label>
          <input
            type="number"
            name="geschikte_voet_links"
            value={scores["geschikte_voet_links"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="geschikte_voet_rechts">
          <label className="block mb-1 capitalize">Geschikte voet (rechts)</label>
          <input
            type="number"
            name="geschikte_voet_rechts"
            value={scores["geschikte_voet_rechts"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="geschikte_voet_links_rechts">
          <label className="block mb-1 capitalize">Geschikte voet (links/rechts)</label>
          <input
            type="number"
            name="geschikte_voet_links_rechts"
            value={scores["geschikte_voet_links_rechts"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="1-tegen-1_duel">
          <label className="block mb-1 capitalize">1-tegen-1 duel</label>
          <input
            type="number"
            name="1-tegen-1_duel"
            value={scores["1-tegen-1_duel"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Fysieke vaardigheden</h2>
        <div key="snelheid">
          <label className="block mb-1 capitalize">Snelheid</label>
          <input
            type="number"
            name="snelheid"
            value={scores["snelheid"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="sprongkracht">
          <label className="block mb-1 capitalize">Sprongkracht</label>
          <input
            type="number"
            name="sprongkracht"
            value={scores["sprongkracht"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="uithoudingsvermogen">
          <label className="block mb-1 capitalize">Uithoudingsvermogen</label>
          <input
            type="number"
            name="uithoudingsvermogen"
            value={scores["uithoudingsvermogen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="tackelen">
          <label className="block mb-1 capitalize">Tackelen</label>
          <input
            type="number"
            name="tackelen"
            value={scores["tackelen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="sterkte_fysiek">
          <label className="block mb-1 capitalize">Sterkte (fysiek)</label>
          <input
            type="number"
            name="sterkte_fysiek"
            value={scores["sterkte_fysiek"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Keeperspecifieke vaardigheden</h2>
        <div key="keeperstechniek">
          <label className="block mb-1 capitalize">Keeperstechniek</label>
          <input
            type="number"
            name="keeperstechniek"
            value={scores["keeperstechniek"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="reflexen">
          <label className="block mb-1 capitalize">Reflexen</label>
          <input
            type="number"
            name="reflexen"
            value={scores["reflexen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="redding_bij_1-tegen-1">
          <label className="block mb-1 capitalize">Redding bij 1-tegen-1</label>
          <input
            type="number"
            name="redding_bij_1-tegen-1"
            value={scores["redding_bij_1-tegen-1"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <div key="uitkomen">
          <label className="block mb-1 capitalize">Uitkomen</label>
          <input
            type="number"
            name="uitkomen"
            value={scores["uitkomen"]}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full p-2 border"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Bereken Score</button>
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

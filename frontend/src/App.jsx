function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Voetbal Analysetool</h1>
      <form className="space-y-4">
        <label className="block mt-2">1-tegen-1 duel<input type="range" min="0" max="100" className="w-full" name="1-tegen-1 duel" /></label>
<label className="block mt-2">Aanvallende loopacties<input type="range" min="0" max="100" className="w-full" name="Aanvallende loopacties" /></label>
<label className="block mt-2">Afstandsschot<input type="range" min="0" max="100" className="w-full" name="Afstandsschot" /></label>
<label className="block mt-2">Anticipatie<input type="range" min="0" max="100" className="w-full" name="Anticipatie" /></label>
<label className="block mt-2">Balverovering<input type="range" min="0" max="100" className="w-full" name="Balverovering" /></label>
<label className="block mt-2">Besluitvorming<input type="range" min="0" max="100" className="w-full" name="Besluitvorming" /></label>
<label className="block mt-2">Buitenspelval gebruiken<input type="range" min="0" max="100" className="w-full" name="Buitenspelval gebruiken" /></label>
<label className="block mt-2">Coaching vanuit achteruit<input type="range" min="0" max="100" className="w-full" name="Coaching vanuit achteruit" /></label>
<label className="block mt-2">Creativiteit<input type="range" min="0" max="100" className="w-full" name="Creativiteit" /></label>
<label className="block mt-2">Dribbelen<input type="range" min="0" max="100" className="w-full" name="Dribbelen" /></label>
<label className="block mt-2">Geschikte voet (links)<input type="range" min="0" max="100" className="w-full" name="Geschikte voet (links)" /></label>
<label className="block mt-2">Geschikte voet (links/rechts)<input type="range" min="0" max="100" className="w-full" name="Geschikte voet (links/rechts)" /></label>
<label className="block mt-2">Geschikte voet (rechts)<input type="range" min="0" max="100" className="w-full" name="Geschikte voet (rechts)" /></label>
<label className="block mt-2">Keeperstechniek<input type="range" min="0" max="100" className="w-full" name="Keeperstechniek" /></label>
<label className="block mt-2">Koppen<input type="range" min="0" max="100" className="w-full" name="Koppen" /></label>
<label className="block mt-2">Korte pass<input type="range" min="0" max="100" className="w-full" name="Korte pass" /></label>
<label className="block mt-2">Lange pass<input type="range" min="0" max="100" className="w-full" name="Lange pass" /></label>
<label className="block mt-2">Leiderschap<input type="range" min="0" max="100" className="w-full" name="Leiderschap" /></label>
<label className="block mt-2">Passing<input type="range" min="0" max="100" className="w-full" name="Passing" /></label>
<label className="block mt-2">Positionering<input type="range" min="0" max="100" className="w-full" name="Positionering" /></label>
<label className="block mt-2">Pressing zetten<input type="range" min="0" max="100" className="w-full" name="Pressing zetten" /></label>
<label className="block mt-2">Reactievermogen<input type="range" min="0" max="100" className="w-full" name="Reactievermogen" /></label>
<label className="block mt-2">Redding bij 1-tegen-1<input type="range" min="0" max="100" className="w-full" name="Redding bij 1-tegen-1" /></label>
<label className="block mt-2">Reflexen<input type="range" min="0" max="100" className="w-full" name="Reflexen" /></label>
<label className="block mt-2">Schotkracht<input type="range" min="0" max="100" className="w-full" name="Schotkracht" /></label>
<label className="block mt-2">Schotnauwkeurigheid<input type="range" min="0" max="100" className="w-full" name="Schotnauwkeurigheid" /></label>
<label className="block mt-2">Snelheid<input type="range" min="0" max="100" className="w-full" name="Snelheid" /></label>
<label className="block mt-2">Spelinzicht<input type="range" min="0" max="100" className="w-full" name="Spelinzicht" /></label>
<label className="block mt-2">Sprongkracht<input type="range" min="0" max="100" className="w-full" name="Sprongkracht" /></label>
<label className="block mt-2">Sterkte (fysiek)<input type="range" min="0" max="100" className="w-full" name="Sterkte (fysiek)" /></label>
<label className="block mt-2">Tackelen<input type="range" min="0" max="100" className="w-full" name="Tackelen" /></label>
<label className="block mt-2">Traptechniek<input type="range" min="0" max="100" className="w-full" name="Traptechniek" /></label>
<label className="block mt-2">Uithoudingsvermogen<input type="range" min="0" max="100" className="w-full" name="Uithoudingsvermogen" /></label>
<label className="block mt-2">Uitkomen<input type="range" min="0" max="100" className="w-full" name="Uitkomen" /></label>
<label className="block mt-2">Voorzetten<input type="range" min="0" max="100" className="w-full" name="Voorzetten" /></label>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Bereken Score</button>
      </form>
    </div>
  );
}

export default App;
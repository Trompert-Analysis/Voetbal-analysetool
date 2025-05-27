import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/speler">Speler</Link>
      <Link to="/analyse">Analyse</Link>
      <Link to="/team">Team</Link>
    </nav>
  );
}

export default Navbar;

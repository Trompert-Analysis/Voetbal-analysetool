import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/speler">Speler</Link>
      <Link to="/analyse">Analyse</Link>
      <Link to="/team">Team</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
    </nav>
  );
}

export default Navbar;

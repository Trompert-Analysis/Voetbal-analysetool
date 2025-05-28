import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      {token ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/speler">Speler</Link>
          <Link to="/analyse">Analyse</Link>
          <Link to="/team">Team</Link>
          <button onClick={handleLogout} className="ml-auto">Logout</button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;

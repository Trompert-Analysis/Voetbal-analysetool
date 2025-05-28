import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Speler from './pages/Speler';
import Analyse from './pages/Analyse';
import Team from './pages/Team';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Speler" element={<Speler />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

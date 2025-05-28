import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Speler from './pages/Speler';
import Analyse from './pages/Analyse';
import Team from './pages/Team';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Speler" element={<Speler />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

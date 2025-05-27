import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Speler from "./pages/Speler";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/speler" element={<Speler />} />
      </Routes>
    </Router>
  );
}

export default App;

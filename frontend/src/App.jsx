import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Speler from './pages/Speler';
import Analyse from './pages/Analyse';
import Team from './pages/Team';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route
        path="/Speler"
        element={
          <ProtectedRoute>
            <Speler />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analyse"
        element={
          <ProtectedRoute>
            <Analyse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/team"
        element={
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

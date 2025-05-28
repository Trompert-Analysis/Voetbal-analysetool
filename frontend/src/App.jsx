import ProtectedRoute from './components/ProtectedRoute';

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

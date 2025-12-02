// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Dictation from "./pages/Dictation";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<SignUp onSignup={handleLogin} />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <Dashboard
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
          />
        }
      />
      <Route
        path="/dictation"
        element={
          <Dictation
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
          />
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

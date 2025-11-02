import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import WorkoutPlansPage from './pages/WorkoutPlansPage';
import LogWorkoutPage from './pages/LogWorkoutPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  const { token, logout } = useContext(AuthContext);

  return (
    <Router>
      <nav>
        <ul>
          {token ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/register" element={token ? <Navigate to="/dashboard" /> : <RegisterPage />} />
        <Route path="/dashboard" element={token ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/workout-plans" element={token ? <WorkoutPlansPage /> : <Navigate to="/login" />} />
        <Route path="/log-workout" element={token ? <LogWorkoutPage /> : <Navigate to="/login" />} />
        <Route path="/analytics" element={token ? <AnalyticsPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;

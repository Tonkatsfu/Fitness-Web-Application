import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Overview from './Overview/Overview.jsx';
import WeeklyPlanner from './WeeklyPlanner/WeeklyPlanner.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<Navigate to="/Login" />} />
        <Route path="/weeklyplanner" element={<WeeklyPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;

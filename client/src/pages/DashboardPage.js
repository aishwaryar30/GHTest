import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/workout-plans">Manage Workout Plans</Link>
      <br />
      <Link to="/log-workout">Log a Workout</Link>
      <br />
      <Link to="/analytics">View Progress</Link>
    </div>
  );
};

export default DashboardPage;

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import planService from '../services/planService';
import sessionService from '../services/sessionService';

const LogWorkoutPage = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [sessionData, setSessionData] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await planService.getPlans(token);
      setPlans(res.data);
    };
    fetchPlans();
  }, [token]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Initialize sessionData based on the selected plan's exercises
    // This part would need more logic to fetch plan details
  };

  const handleSetChange = (exerciseIndex, setIndex, field, value) => {
    // Logic to update the sessionData state
  };

  const handleLogSession = async () => {
    // Format sessionData and send to the backend
    // await sessionService.logSession(formattedData, token);
  };

  return (
    <div>
      <h2>Log Workout</h2>
      <select onChange={(e) => handlePlanSelect(plans.find(p => p.plan_id === parseInt(e.target.value)))}>
        <option>Select a plan</option>
        {plans.map(plan => <option key={plan.plan_id} value={plan.plan_id}>{plan.name}</option>)}
      </select>
      {/* Render the workout logging form based on selectedPlan */}
      <button onClick={handleLogSession}>Log Session</button>
    </div>
  );
};

export default LogWorkoutPage;

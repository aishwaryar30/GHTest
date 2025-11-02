import React, { useState, useEffect, useContext } from 'react';
import planService from '../services/planService';
import { AuthContext } from '../context/AuthContext';

const WorkoutPlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await planService.getPlans(token);
        setPlans(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlans();
  }, [token]);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await planService.createPlan(formData, token);
      setPlans([...plans, res.data]);
      setFormData({ name: '', description: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Workout Plans</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Plan Name" value={formData.name} onChange={onChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={onChange}></textarea>
        <button type="submit">Create Plan</button>
      </form>
      <ul>
        {plans.map((plan) => (
          <li key={plan.plan_id}>{plan.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPlansPage;

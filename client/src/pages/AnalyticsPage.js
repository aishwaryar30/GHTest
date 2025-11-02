import React, { useState, useEffect, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AuthContext } from '../context/AuthContext';
import analyticsService from '../services/analyticsService';
import exerciseService from '../services/exerciseService'; // We'll create this service next

const AnalyticsPage = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [chartData, setChartData] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await exerciseService.getExercises(token);
      setExercises(res.data);
    };
    fetchExercises();
  }, [token]);

  useEffect(() => {
    if (selectedExercise) {
      const fetchHistory = async () => {
        const res = await analyticsService.getExerciseHistory(selectedExercise, token);
        setChartData(res.data);
      };
      fetchHistory();
    }
  }, [selectedExercise, token]);

  return (
    <div>
      <h2>Progress Analytics</h2>
      <select onChange={(e) => setSelectedExercise(e.target.value)}>
        <option>Select an exercise</option>
        {exercises.map(ex => <option key={ex.exercise_id} value={ex.exercise_id}>{ex.name}</option>)}
      </select>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="estimated1RM" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default AnalyticsPage;

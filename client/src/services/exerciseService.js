import axios from 'axios';

const API_URL = '/api/exercises/';

// Get all exercises
const getExercises = (token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  return axios.get(API_URL, config);
};

// Create a new custom exercise
const createExercise = (exerciseData, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  return axios.post(API_URL, exerciseData, config);
};

const exerciseService = {
  getExercises,
  createExercise,
};

export default exerciseService;

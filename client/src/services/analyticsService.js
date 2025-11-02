import axios from 'axios';

const API_URL = '/api/sessions/history/';

// Get workout history for a specific exercise
const getExerciseHistory = (exerciseId, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  return axios.get(API_URL + exerciseId, config);
};

const analyticsService = {
  getExerciseHistory,
};

export default analyticsService;

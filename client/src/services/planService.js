import axios from 'axios';

const API_URL = '/api/plans/';

// Get user's workout plans
const getPlans = (token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  return axios.get(API_URL, config);
};

// Create a new workout plan
const createPlan = (planData, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  return axios.post(API_URL, planData, config);
};

const planService = {
  getPlans,
  createPlan,
};

export default planService;

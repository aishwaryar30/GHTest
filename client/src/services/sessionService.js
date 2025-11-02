import axios from 'axios';

const API_URL = '/api/sessions/';

// Log a workout session
const logSession = (sessionData, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  return axios.post(API_URL, sessionData, config);
};

const sessionService = {
  logSession,
};

export default sessionService;

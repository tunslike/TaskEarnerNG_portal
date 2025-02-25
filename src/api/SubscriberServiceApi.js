import axios from 'axios';

const subscriberApi = axios.create({
  baseURL: 'http://localhost:9190/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
subscriberApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default subscriberApi;

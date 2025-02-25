import axios from 'axios';

const taskApi = axios.create({
  baseURL: 'http://localhost:9192/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
taskApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default taskApi;

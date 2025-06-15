import axios from 'axios';


const taskApi = axios.create({
  baseURL: 'http://localhost:9192/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },

});

// Add token to requests if available
taskApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));


// Response Interceptor: auto-refresh or redirect
taskApi.interceptors.response.use(

  response => response,
  error => {

    if(error.response && (error.response.status === 401 || error.response.status === 403)) {

        // local storage
        localStorage.removeItem("token");
        localStorage.removeItem("pass");
  
        delete axios.defaults.headers.common["Authorization"];
  
        window.location.href = '/login';  // Redirect to login

    }

  }
);

// export taskApi
export default taskApi;






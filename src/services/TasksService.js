import api from "../api/BackendApi";

// fetch all tasks
export const fetchAllTasks = async () => {
    const response = await api.get('/tasks/fetchTaskTypes');
    return response.data;
  };

// fetch task types 
export const fetchTaskTypes = async () => {
  const response = await api.get('/tasks/fetchTaskTypes');
  return response.data;
};


//function to post new task
export const postNewTask = async (data) => {
  const response = await api.post('/tasks/newTask', data);
  return response.data;
};


//function to submit completed task
export const submitTask = async (data) => {
  const response = await api.post('/tasks/submitTask', data);
  return response.data;
};

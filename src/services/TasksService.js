import taskApi from "../api/TaskServiceApi";

// fetch task types
export const fetchAllTasks = async () => {
    const response = await taskApi.get('/tasks/fetchTaskTypes');
    return response.data;
  };

  // fetch tasks
export const fetchTasks = async (status) => {
  const response = await taskApi.get(`/tasks/fetchAllTasks?status=${status}`);
  return response.data;
};

// fetch task types 
export const fetchTaskTypes = async () => {
  const response = await taskApi.get('/tasks/fetchTaskTypes');
  return response.data;
};

//function to post new task
export const postNewTask = async (data) => {
  const response = await taskApi.post('/tasks/newTask', data);
  return response.data;
};


//function to submit completed task
export const submitTask = async (data) => {
  const response = await taskApi.post('/tasks/submitTask', data);
  return response.data;
};

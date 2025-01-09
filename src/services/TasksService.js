import api from "../api/BackendApi";

// fetch all tasks
export const fetchAllTasks = async () => {
    const response = await api.get('/tasks/fetchTaskTypes');
    return response.data;
  };
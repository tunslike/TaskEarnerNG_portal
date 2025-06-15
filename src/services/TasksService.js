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

  // load task session
  export const loadTaskSession = async (subscriberId) => {
    const response = await taskApi.get(`/tasks/loadTaskSession?subscriberId=${subscriberId}`);
    return response.data;
  };

// fetch task types 
export const fetchTaskTypes = async () => {
  const response = await taskApi.get('/tasks/fetchTaskTypes');
  return response.data;
};

// fetch task types 
export const fetchEarningBalance = async (subscriberId) => {
  const response = await taskApi.get(`/tasks/fetchEarnings?subscriberId=${subscriberId}`);
  return response.data;
};

// fetch task withdrawals
export const fetchWithdrawalPayment = async (subscriberId) => {
  const response = await taskApi.get(`/tasks/fetchWithdrawals?subscriberId=${subscriberId}`);
  return response.data;
};

// submit withdrawal request
export const submitWithdrawlRequest = async (data) => {
  const response = await taskApi.post('/tasks/saveWithdrawal', data);
  return response.data;
};


// fetch search text 
export const fetchSearchText = async (searchText) => {
  const response = await taskApi.get(`/tasks/fetchSearchTasks?searchText=${searchText}`);
  return response.data;
}

// fetch subscriber completed tasks
export const loadCompletedTask = async (subscriberId) => {
  const response = await taskApi.get(`/tasks/loadCompletedTasks?subscriberId=${subscriberId}`);
  return response.data;
}

// fetch subscriber completed tasks
export const loadSubscribedTask = async (subscriberId) => {
  const response = await taskApi.get(`/tasks/loadSubscribedTasks?subscriberId=${subscriberId}`);
  return response.data;
}

// fetch task earnings and payments
export const loadTaskPayments = async (subscriberId) => {
  const response = await taskApi.get(`/tasks/fetchTaskEarnings?subscriberId=${subscriberId}`);
  return response.data;
}

// save task session
export const saveTaskSession = async (data) => {
  const response = await taskApi.post('/tasks/saveTaskSession', data);
  return response.data;
};

//function to post new task
export const postNewTask = async (data) => {
  const response = await taskApi.post('/tasks/newTask', data);
  return response.data;
};

//function to submit completed task
export const submitTask = async (data, headers) => {
  const response = await taskApi.post('/tasks/submitTask', data, headers);
  return response.data;
};

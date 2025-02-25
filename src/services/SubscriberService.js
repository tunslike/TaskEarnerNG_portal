import subscriberApi from "../api/SubscriberServiceApi";

// login subscriber
export const loginSubscriber = async (data) => {
    const response = await subscriberApi.post('/subscribers/authenticate', data);
    return response.data;
  };

  // register subscriber
export const registerSubcriber = async (data) => {
    const response = await subscriberApi.post('/subscribers/new-subscriber', data);
    return response.data;
  };

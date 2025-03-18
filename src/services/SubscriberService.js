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

    // update profile
export const updateSubscriberProfile = async (data) => {
  const response = await subscriberApi.post('/subscribers/updateProfile', data);
  return response.data;
};

  // fetch profile
  export const fetchSubscriberProfile = async (subscriberId) => {
    const response = await subscriberApi.get(`/subscribers/fetchProfile?subscriberId=${subscriberId}`);
    return response.data;
  }

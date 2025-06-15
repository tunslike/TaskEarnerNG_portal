import subscriberApi from "../api/SubscriberServiceApi";

// login subscriber
export const loginSubscriber = async (data) => {
    const response = await subscriberApi.post('/subscribers/authenticate', data);
    return response.data;
  };

  // logout subscriber
export const logoutSubscriberBackend = async () => {
  const response = await subscriberApi.post('/subscribers/logout-subscriber');
  return response.data;
};

  // register subscriber
export const registerSubcriber = async (data) => {
    const response = await subscriberApi.post('/subscribers/new-subscriber', data);
    return response.data;
  };

    // update profile
export const updateSubscriberProfileDetails = async (data) => {
  const response = await subscriberApi.post('/subscribers/updateProfile', data);
  return response.data;
};

  // fetch profile
  export const fetchSubscriberProfile = async (subscriberId) => {
    const response = await subscriberApi.get(`/subscribers/fetchProfile?subscriberId=${subscriberId}`);
    return response.data;
  }

  // update subscriber account details
  export const updateSubscriberAccount = async (data) => {
    const response = await subscriberApi.post('/subscribers/updateAccountDetails', data);
    return response.data;
  };

    // fetch subscriber referral details
    export const fetchSubscriberReferralDetails = async (subscriberId) => {
      const response = await subscriberApi.get(`/subscribers/fetchReferralDetails?subscriberId=${subscriberId}`);
      return response.data;
    }

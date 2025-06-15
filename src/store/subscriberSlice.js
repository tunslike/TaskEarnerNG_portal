import { createSlice  } from "@reduxjs/toolkit";

// set initial State
const initialState = {
    subscriberData: [],
    subscriberProfile: [],
    earningsBalance: [],
    clientIpAddress: ''
}

export const subscriberSlice = createSlice({
    name: 'subscriber',
    initialState: initialState,
    reducers: {
        updateClientIPAddress: (state, action) => {
            state.clientIpAddress = action.payload
        },
        updateEarningsBalance: (state, action) => {
            state.earningsBalance = action.payload
        },
        updateSubscriberProfile: (state, action) => {
            state.subscriberProfile = action.payload
        },
        updateSubscriberData: (state, action) => {
            state.subscriberData = action.payload
        },
        logoutSubscriber: (state) => {
            state.subscriberData = []
            state.subscriberProfile = []
            state.earningsBalance = []
        }
    },
});

export const {

    updateEarningsBalance,
    updateSubscriberData,
    updateSubscriberProfile,
    logoutSubscriber,
    updateClientIPAddress

} = subscriberSlice.actions;

export default subscriberSlice.reducer;
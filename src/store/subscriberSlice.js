import { createSlice  } from "@reduxjs/toolkit";

// set initial State
const initialState = {
    subscriberData: []
}

export const subscriberSlice = createSlice({
    name: 'subscriber',
    initialState: initialState,
    reducers: {
        updateSubscriberData: (state, action) => {
            state.subscriberData = action.payload
        }
    },
});

export const {
    updateSubscriberData
} = subscriberSlice.actions;

export default subscriberSlice.reducer;
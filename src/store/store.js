import { configureStore } from "@reduxjs/toolkit";
import subscriberReducer from './subscriberSlice';

export const store = configureStore({
    reducer: {
        subscriber: subscriberReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/couter/index'

export const store = configureStore({
    reducer:{
        count: counterReducer
    },
});
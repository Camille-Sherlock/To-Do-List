import { configureStore } from "@reduxjs/toolkit";
import { stateProviderReducer } from "./stateProvider";


export const store = configureStore({
    reducer: {
        stateProvider: stateProviderReducer,
    },
});



import { configureStore } from "@reduxjs/toolkit";
import { stateProviderReducer } from "./stateProvider";

export const store = configureStore({
  reducer: {
    state: stateProviderReducer,
  },
});

import {createSlice} from "@reduxjs/toolkit";
import React from 'react';
import {FILTER_ALL} from '../services/filter';
import {MODE_CREATE} from '../services/mode';
import {getAll} from '../services/todo';

const initialState = {
    query: '',
    mode: MODE_CREATE,
    filter: FILTER_ALL,
    list: getAll()
};

export const stateProviderSlice = createSlice({
    name: "stateProvider",
    initialState,
    reducers: {
        setstateProvider: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state = {...action.payload};
            return state;
        },
    },
});

export const setstateProvider = stateProviderSlice.actions.setstateProvider;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStateProvider = (state) => state.stateProvider;

export const stateProviderReducer = stateProviderSlice.reducer;

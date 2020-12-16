import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: null,
    loading: false,
    error: null,
};

export const accountInfoSlice = createSlice({
    name: "accountInfo",
    initialState,
    reducers: {
        setAccountInfo: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoadingAccountInfo: (state) => {
            state.value = null;
            state.loading = true;
            state.error = null;
        },
        setErrorLoadingAccountInfo: (state, action) => {
            state.value = null;
            state.loading = false;
            state.error = "Failed to load the page with AccountInfo!!!";
        },
    },
});

export const setAccountInfo = accountInfoSlice.actions.setAccountInfo;
export const serLoadingAccountInfo = accountInfoSlice.actions.setLoadingAccountInfo;
export const setErrorLoadingAccountInfo = accountInfoSlice.actions.setErrorLoadingAccountInfo;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAccountInfo = (state) => state.accountInfo.value;
export const selectAccountInfoIsLoading = (state) => state.accountInfo.loading;
export const selectAccountInfoError = (state) => state.accountInfo.error;

export const accountInfoReducer = accountInfoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: () => {},
        logout: () => {},
    },
    selectors: {
        selectIsAuthenticated: (userState) => {
            return userState.isAuthenticated;
        }
    }
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export const { selectIsAuthenticated } = userSlice.selectors;
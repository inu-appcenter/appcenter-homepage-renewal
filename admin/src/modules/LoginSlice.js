import { createSlice } from '@reduxjs/toolkit';

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        },
    },
});

export const { setLogin } = LoginSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: 'null',
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
    },
});

export const { setCurrent } = homeSlice.actions;

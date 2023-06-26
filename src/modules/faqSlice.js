import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    part: 'android',
};

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        setPart: (state, action) => {
            state.part = action.payload;
        },
    },
});

export const { setPart } = faqSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regisModalOpen: false,
    message: '',
};

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        RMopen: (state, action) => {
            state.regisModalOpen = true;
            state.message = action.payload;
        },
        RMclose(state) {
            state.regisModalOpen = false;
        },
    },
});

export const { RMopen, RMclose } = ProductSlice.actions;

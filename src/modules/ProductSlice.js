import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regisModalOpen: false,
    modifyModalOpen: false,
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
        MODopen: (state, action) => {
            state.modifyModalOpen = true;
            state.message = action.payload;
        },
        MODclose(state) {
            state.modifyModalOpen = false;
        },
    },
});

export const { RMopen, RMclose, MODopen, MODclose } = ProductSlice.actions;

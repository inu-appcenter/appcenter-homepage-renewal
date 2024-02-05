import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regisModalOpen: false,
    modifyModalOpen: false,
    memberModalOpen: false,
    roleModalOpen: false,
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
        MemberModalopen: (state, action) => {
            state.memberModalOpen = true;
            state.message = action.payload;
        },
        MemberModalclose(state) {
            state.memberModalOpen = false;
        },
        RoleModalopen: (state, action) => {
            state.roleModalOpen = true;
            state.message = action.payload;
        },
        RoleModalclose(state) {
            state.roleModalOpen = false;
        },
    },
});

export const {
    RMopen,
    RMclose,
    MODopen,
    MODclose,
    MemberModalopen,
    MemberModalclose,
    RoleModalopen,
    RoleModalclose,
} = ProductSlice.actions;

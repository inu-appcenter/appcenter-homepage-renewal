import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    member_id: '',
    role_id: '',
    message: '',
};

export const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setMemberId: (state, action) => {
            state.member_id = action.payload;
        },
        setRoleId: (state, action) => {
            state.role_id = action.payload;
        },
    },
});

export const { setMemberId, setRoleId } = idSlice.actions;

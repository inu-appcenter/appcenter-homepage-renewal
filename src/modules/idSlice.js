import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    member_id: '',
    memberName: '', // 추가
    role_id: '',
    roleName: '', // 추가
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
        setMemberName: (state, action) => {
            state.memberName = action.payload;
        },
        setRoleName: (state, action) => {
            state.roleName = action.payload;
        },
    },
});

export const { setMemberId, setRoleId, setMemberName, setRoleName } =
    idSlice.actions;

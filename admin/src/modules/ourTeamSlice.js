import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
    part: 'android',
    year: dayjs().get('year'),
};

export const ourTeamSlice = createSlice({
    name: 'ourTeam',
    initialState,
    reducers: {
        setPart: (state, action) => {
            state.part = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        },
    },
});

export const { setPart, setYear } = ourTeamSlice.actions;

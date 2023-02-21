import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://127.0.0.1:4000/api/';

export const api = createApi({
    reducerPath: 'RTXquery',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getFaqList: builder.query({
            query: () => ({}),
        }),
    }),
});

export const {

} = api;

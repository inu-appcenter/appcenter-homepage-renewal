import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://inu-appcenter.github.io/appcenter-homepage-data/';

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTeamList: builder.query({
            query: ({ year, team }) => ({
                url: `members/${year}/${team}.json`,
            }),
        }),
    }),
});

export const { useGetTeamListQuery } = dataApi;

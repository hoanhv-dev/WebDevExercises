import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getHome: builder.query({
      query: () => '/home',
    }),
    getOurStory: builder.query({
      query: () => '/our-story',
    }),
    getDetails: builder.query({
      query: () => '/details',
    }),
    getNavigation: builder.query({
      query: () => '/navigation',
    }),
  }),
});

export const {
  useGetHomeQuery,
  useGetOurStoryQuery,
  useGetDetailsQuery,
  useGetNavigationQuery,
} = api;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userQuery = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
    getUserById: builder.query<any, string>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export default userQuery;

export const { useGetUsersQuery, useGetUserByIdQuery } = userQuery;

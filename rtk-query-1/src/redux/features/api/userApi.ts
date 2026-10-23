import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.github.com`,
  }),
  endpoints: (builder) => ({
    getUser: builder.query<Array<any>,number>({
      query: (perPage) => `/users?per_page=${perPage}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;

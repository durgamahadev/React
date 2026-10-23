import { createApi } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  baseQuery: () => {},
  endpoints: (builder) => ({
    getUser: builder.query({
      async queryFn() {
        const result = await fetch("");
        const data = result.json;
        return { data };
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featuredItemApi = createApi({
  reducerPath: "featuredItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://run.mocky.io/v3/",
  }),
  endpoints: (builder) => ({
    getFeaturedItems: builder.query({
      query: () => ({ url: `7f02819f-8254-410a-b8af-ab98572bd26b` }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetFeaturedItemsQuery } = featuredItemApi;

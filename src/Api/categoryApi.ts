import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../types/categoryType';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    createCategory: builder.mutation({
      query: (categoryData: Category) => ({
        url: 'categories',
        method: 'POST',
        body: categoryData,
      }),
    }),
  }),
});

export const { useCreateCategoryMutation } = categoryApi;

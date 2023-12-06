import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, CategoryFormData } from '../types/categoryType';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    createCategory: builder.mutation<unknown, unknown>({
      query: (formData: CategoryFormData) => {
        return {
          url: 'categories',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
    }),
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi;

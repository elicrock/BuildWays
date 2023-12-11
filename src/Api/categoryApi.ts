import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, CategoryFormData } from '../types/categoryType';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: 'Categories' as const, id })), { type: 'Categories', id: 'LIST' }]
          : [{ type: 'Categories', id: 'LIST' }],
    }),
    createCategory: builder.mutation<unknown, unknown>({
      query: (formData: CategoryFormData) => {
        return {
          url: 'categories',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }],
    }),
    deleteCategory: builder.mutation({
      query: (id: number) => {
        return {
          url: `categories/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }],
    }),
    editCategory: builder.mutation<unknown, { formData: FormData; id: number }>({
      query: ({ formData, id }) => {
        return {
          url: `categories/${id}`,
          method: 'PATCH',
          body: formData,
          formData: true,
        };
      },
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery, useDeleteCategoryMutation, useEditCategoryMutation } =
  categoryApi;

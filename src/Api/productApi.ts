import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsData, ProductFormData } from '../types/productType';

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    getProducts: builder.query<ProductsData, void>({
      query: () => 'products',
      providesTags: result =>
        result
          ? [...result.rows.map(({ id }) => ({ type: 'Products' as const, id })), { type: 'Products', id: 'LIST' }]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    createProduct: builder.mutation<unknown, unknown>({
      query: (formData: ProductFormData) => {
        return {
          url: 'products',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsQuery } = productApi;

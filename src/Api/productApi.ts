import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsData, ProductFormData } from '../types/productType';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    getProducts: builder.query<ProductsData, void>({
      query: () => 'products',
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
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsQuery } = productApi;

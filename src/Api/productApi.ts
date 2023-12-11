import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/productType';

interface ProductsData {
  count: number;
  rows: Product[];
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    createProduct: builder.mutation({
      query: (formData: Product) => {
        return {
          url: 'products',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
    }),
    getProducts: builder.query<ProductsData, void>({
      query: () => 'products',
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsQuery } = productApi;

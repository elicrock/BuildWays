import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsData, ProductFormData, Product } from '../types/productType';

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    getProducts: builder.query<ProductsData, void>({
      query: () => 'products?limit=100',
      providesTags: result =>
        result
          ? [...result.products.map(({ id }) => ({ type: 'Products' as const, id })), { type: 'Products', id: 'LIST' }]
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
    deleteProduct: builder.mutation({
      query: (id: number) => {
        return {
          url: `products/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    editProduct: builder.mutation<Product, { formData: FormData; id: number }>({
      query: ({ formData, id }) => {
        return {
          url: `products/${id}`,
          method: 'PATCH',
          body: formData,
          formData: true,
        };
      },
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsQuery, useDeleteProductMutation, useEditProductMutation } =
  productApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types/userType';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/', credentials: 'include' }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: (newUserData: User) => ({
        url: 'signup',
        method: 'POST',
        body: newUserData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userApi: User) => ({
        url: 'signin',
        method: 'POST',
        body: userApi,
      }),
    }),
    getUserProfile: builder.query<User, void>({
      query: () => 'users/me',
    }),
    updateUserProfile: builder.mutation({
      query: (updatedUserData: User) => ({
        url: 'users/me',
        method: 'PATCH',
        body: updatedUserData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = authApi;

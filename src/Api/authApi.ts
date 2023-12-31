import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types/userType';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', credentials: 'include' }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: (newUserData: User) => ({
        url: 'signup',
        method: 'POST',
        body: newUserData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData: User) => ({
        url: 'signin',
        method: 'POST',
        body: userData,
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
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: 'signout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useLogoutUserMutation,
} = authApi;

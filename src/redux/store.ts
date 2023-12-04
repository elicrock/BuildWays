import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import modalSlice from './modalSlice';
import { authApi } from '../Api/authApi';
import { categoryApi } from '../Api/categoryApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalSlice,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

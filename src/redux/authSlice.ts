import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/userType';

type AuthState = {
  isLoggedIn: boolean;
  currentUser: User | null;
  error: string | null;
  successMessage: string | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  error: null,
  successMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    setSuccessMessage: (state, action: PayloadAction<string>) => {
      state.successMessage = action.payload;
    },
  },
});

export const { setUser, setSuccessMessage, logout } = authSlice.actions;
export default authSlice.reducer;

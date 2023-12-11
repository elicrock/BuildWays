import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types/categoryType';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (_state, action) => {
      return action.payload;
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      return state.map(category => (category.id === action.payload.id ? action.payload : category));
    },
  },
});

export const { setCategories, updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

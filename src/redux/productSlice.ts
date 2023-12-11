import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productType';

interface ProductsState {
  count: number;
  rows: Product[];
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {} as ProductsState,
  reducers: {
    setProducts: (_state, action: PayloadAction<ProductsState>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

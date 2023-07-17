import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: { },
});

// export const { toggleState, setPriceRange } = productSlice.actions;

export default bookSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setSearchTerm } = bookSlice.actions;

export default bookSlice.reducer;

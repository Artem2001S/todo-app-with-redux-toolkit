import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const UIDataSlice = createSlice({
  name: 'UIData',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});

export default UIDataSlice.reducer;

export const { startLoading, finishLoading } = UIDataSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: true,
};

export const mySlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    isOpen: (state) => {
      state.show = !state.show; // Toggles the value of 'show'
    },
  },
});

export const { isOpen } = mySlice.actions;

export default mySlice.reducer;

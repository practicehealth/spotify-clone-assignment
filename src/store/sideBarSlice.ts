import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarIsVisible: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarIsVisible = !state.sideBarIsVisible;
    },
  },
});

export const actions = sideBarSlice.actions;

export default sideBarSlice.reducer;

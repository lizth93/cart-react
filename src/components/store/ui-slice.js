import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showingCart: false },
  reducers: {
    toggle(state) {
      state.showingCart = !state.showingCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

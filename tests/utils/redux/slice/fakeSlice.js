import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const fakeSlice = createSlice({
  name: "fake",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const fakeActions = fakeSlice.actions;

export default fakeSlice.reducer;

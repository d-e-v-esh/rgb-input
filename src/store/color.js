import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    controlRed(state, action) {
      state.red = action.payload;
    },
    controlGreen(state, action) {
      state.green = action.payload;
    },
    controlBlue(state, action) {
      state.blue = action.payload;
    },
  },
});

export const { controlRed, controlGreen, controlBlue } = colorSlice.actions;

export default colorSlice.reducer;

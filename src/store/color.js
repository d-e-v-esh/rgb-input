import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

export const controlRed = createAction("controlRed");
export const controlGreen = createAction("controlGreen");
export const controlBlue = createAction("controlBlue");

const counterReducer = createReducer(initialState, {
  [controlRed.type]: (state, action) => state + action.payload,
  [controlGreen.type]: (state, action) => state - action.payload,
});

export default counterReducer;

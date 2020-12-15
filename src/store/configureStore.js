import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./color";

const store = configureStore({
  reducer: colorReducer,
});

export default store;

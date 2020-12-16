import { configureStore } from "@reduxjs/toolkit";
import reducer from "./color";

const store = configureStore({
  reducer: reducer,
});

export default store;

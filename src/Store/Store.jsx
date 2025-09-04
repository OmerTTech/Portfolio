import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/Darkmode.jsx";

export const store = configureStore({
  reducer: {
    darkmode: counterReducer,
  },
});

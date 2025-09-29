import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/DarkmodeSlice.jsx";
import languageReducer from "./Slices/LanguageSlice.jsx";

export const store = configureStore({
  reducer: {
    darkmode: counterReducer,
    language: languageReducer
  },
});

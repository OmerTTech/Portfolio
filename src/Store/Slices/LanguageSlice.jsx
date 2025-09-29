import { createSlice } from "@reduxjs/toolkit";

const storedLang = localStorage.getItem("lang");
const initialState = {
  lang: storedLang || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;

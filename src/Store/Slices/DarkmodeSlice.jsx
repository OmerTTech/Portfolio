import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    darkmodeHandler: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { darkmodeHandler } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;

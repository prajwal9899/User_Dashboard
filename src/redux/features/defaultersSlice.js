import { createSlice } from "@reduxjs/toolkit";

export const defaultersSlice = createSlice({
  name: "defaulter",
  initialState: {
    defaulter: {},
  },
  reducers: {
    setDefaulter: (state, action) => {
      state.defaulter = action.payload;
    },
  },
});

export const { setDefaulter } = defaultersSlice.actions;

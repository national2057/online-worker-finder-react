import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    status: null,
  },
  reducers: {
    // action
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = applicationSlice.actions;
export default applicationSlice.reducer;

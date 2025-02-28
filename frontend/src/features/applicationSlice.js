import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applicants: null,
    status: null,
  },
  reducers: {
    // action
    setApplicants: (state, action) => {
      state.applicants = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus, setApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
   name: "admins",
   initialState: {
      loading: false,
      admin: null,
   },
   reducers: {
      // actions
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
      setAdmin: (state, action) => {
         state.admin = action.payload;
      }
   }
});

export const {setLoading, setAdmin} = adminSlice.actions;
export default adminSlice.reducer;
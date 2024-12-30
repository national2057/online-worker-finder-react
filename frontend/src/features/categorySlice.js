import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
   name: 'category',
   initialState: {
      singleCategory: null,
      allCategories: [],
   },
   reducers: {
      // action
      setSingleCategory: (state, action) => {
         state.singleCategory = action.payload;
      },
      setAllCategories: (state, action) => {
         state.allCategories = action.payload;
      },
   }
})

export const { setSingleCategory, setAllCategories } = categorySlice.actions;
export default categorySlice.reducer;
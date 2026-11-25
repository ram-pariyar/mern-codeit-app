import { createSlice } from "@reduxjs/toolkit";

export const productFilterSlice = createSlice({
  name: "productFilter",
  initialState: {
    filter: {
      limit: 10,
      sort: JSON.stringify({ createdAt: -1 }),
    },
    showFilter: false,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.showFilter = false;
    },
    toggleFilter: (state) => {
      state.showFilter = !state.showFilter;
    },
  },
});

export const { setFilter, toggleFilter } = productFilterSlice.actions;

export default productFilterSlice.reducer;

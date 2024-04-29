import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    UPDATE_SEARCH_QUERY(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

// export actions

export const { UPDATE_SEARCH_QUERY } = searchSlice.actions;
export default searchSlice.reducer;

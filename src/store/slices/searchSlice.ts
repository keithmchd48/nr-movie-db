import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    UPDATE_SEARCH_QUERY(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

// export actions

export const { UPDATE_SEARCH_QUERY } = searchSlice.actions;
export default searchSlice.reducer;

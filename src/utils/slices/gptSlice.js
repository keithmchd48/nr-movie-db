import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    searchQuery: ''
  },
  reducers: {
    UPDATE_SEARCH_QUERY(state, action) {
      state.searchQuery = action.payload;
    }
  }
});

// export actions

export const {UPDATE_SEARCH_QUERY} = gptSlice.actions;
export default gptSlice.reducer;
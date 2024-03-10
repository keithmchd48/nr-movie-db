import {createSlice} from '@reduxjs/toolkit';

const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailer: null
  },
  reducers: {
    ADD_TRAILER(state, action) {
      state.trailer = action.payload;
    }
  }
});

// export actions
export const {ADD_TRAILER} = trailerSlice.actions;

export default trailerSlice.reducer;
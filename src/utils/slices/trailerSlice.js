import {createSlice} from '@reduxjs/toolkit';

const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailer: null,
    isMuted: true
  },
  reducers: {
    ADD_TRAILER(state, action) {
      state.trailer = action.payload;
    },
    TOGGLE_MUTE(state) {
      state.isMuted = !state.isMuted;
    }
  }
});

// export actions
export const {ADD_TRAILER, TOGGLE_MUTE} = trailerSlice.actions;

export default trailerSlice.reducer;
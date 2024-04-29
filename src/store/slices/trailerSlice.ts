import { createSlice } from "@reduxjs/toolkit";
import { TrailerInterface } from "hooks/types";

type SliceState = TrailerInterface | null;

const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailer: null as SliceState,
    isMuted: true,
  },
  reducers: {
    ADD_TRAILER(state, action) {
      state.trailer = action.payload;
    },
    TOGGLE_MUTE(state) {
      state.isMuted = !state.isMuted;
    },
  },
});

// export actions
export const { ADD_TRAILER, TOGGLE_MUTE } = trailerSlice.actions;

export default trailerSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPartialCommonMedia } from "hooks/types";

const tvshowSlice = createSlice({
  name: "tvshows",
  initialState: {
    airingToday: [{}],
    onAirShows: [{}],
    topRatedShows: [{}],
  },
  reducers: {
    ADD_AIRING_TODAY_SHOWS(state, action: PayloadAction<TPartialCommonMedia[]>) {
      state.airingToday = action.payload;
    },
    ADD_ON_AIR_SHOWS(state, action: PayloadAction<TPartialCommonMedia[]>) {
      state.onAirShows = action.payload;
    },
    ADD_TOP_RATED_SHOWS(state, action: PayloadAction<TPartialCommonMedia[]>) {
      state.topRatedShows = action.payload;
    },
  },
});

// export actions
export const { ADD_AIRING_TODAY_SHOWS, ADD_ON_AIR_SHOWS, ADD_TOP_RATED_SHOWS } =
  tvshowSlice.actions;

export default tvshowSlice.reducer;

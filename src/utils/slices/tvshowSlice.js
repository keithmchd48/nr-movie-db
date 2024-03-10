import {createSlice} from '@reduxjs/toolkit';

const tvshowSlice = createSlice({
  name: "tvshows",
  initialState: {
    airingToday: null,
    onAirShows: null,
    topRatedShows: null
  },
  reducers: {
    ADD_AIRING_TODAY_SHOWS(state, action) {
      state.airingToday = action.payload;
    },
    ADD_ON_AIR_SHOWS(state, action) {
      state.onAirShows = action.payload;
    },
    ADD_TOP_RATED_SHOWS(state, action) {
      state.topRatedShows = action.payload;
    }
  }
});

// export actions
export const {ADD_AIRING_TODAY_SHOWS, ADD_ON_AIR_SHOWS, ADD_TOP_RATED_SHOWS} = tvshowSlice.actions;

export default tvshowSlice.reducer;
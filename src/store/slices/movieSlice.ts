import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    ADD_TOP_RATED_MOVIES(state, action) {
      state.topRatedMovies = action.payload;
    },
    ADD_UPCOMING_MOVIES(state, action) {
      state.upcomingMovies = action.payload;
    },
  },
});

// export actions
export const {
  ADD_NOW_PLAYING_MOVIES,
  ADD_TOP_RATED_MOVIES,
  ADD_UPCOMING_MOVIES,
} = movieSlice.actions;

export default movieSlice.reducer;

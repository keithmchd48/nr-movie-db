import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPartialCommonMedia } from "hooks/types";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [{}],
    topRatedMovies: [{}],
    upcomingMovies: [{}],
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES(state, action: PayloadAction<TPartialCommonMedia[]>) {
      state.nowPlayingMovies = action.payload;
    },
    ADD_TOP_RATED_MOVIES(state, action: PayloadAction<TPartialCommonMedia[]>) {
      state.topRatedMovies = action.payload;
    },
    ADD_UPCOMING_MOVIES(state, action: PayloadAction<TPartialCommonMedia[]>) {
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

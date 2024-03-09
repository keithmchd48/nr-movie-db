import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    trailer: null
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    ADD_TRAILER(state, action) {
      state.trailer = action.payload;
    },
    ADD_TOP_RATED_MOVIES(state, action) {
      state.topRatedMovies = action.payload;
    },
    ADD_POPULAR_MOVIES(state, action) {
      state.popularMovies = action.payload;
    }
  }
});

// export actions
export const {ADD_NOW_PLAYING_MOVIES, ADD_TRAILER, ADD_TOP_RATED_MOVIES, ADD_POPULAR_MOVIES} = movieSlice.actions;

export default movieSlice.reducer;
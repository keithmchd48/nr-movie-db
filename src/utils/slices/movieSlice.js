import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    ADD_TRAILER(state, action) {
      state.trailer = action.payload;
    }
  }
});

// export actions
export const {ADD_NOW_PLAYING_MOVIES, ADD_TRAILER} = movieSlice.actions;

export default movieSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES(state, action) {
      state.nowPlayingMovies = action.payload;
    }
  }
});

// export actions
export const {ADD_NOW_PLAYING_MOVIES} = movieSlice.actions;

export default movieSlice.reducer;
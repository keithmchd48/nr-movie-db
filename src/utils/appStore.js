import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import movieReducer from './slices/movieSlice';
import tvShowReducer from './slices/tvshowSlice';
import trailerReducer from './slices/trailerSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvShows: tvShowReducer,
    trailer: trailerReducer
  }
});

export default appStore;
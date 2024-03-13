import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import movieReducer from './slices/movieSlice';
import tvShowReducer from './slices/tvshowSlice';
import trailerReducer from './slices/trailerSlice';
import gptSearchReducer from './slices/gptSlice';
import configReducer from './slices/configSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvShows: tvShowReducer,
    trailer: trailerReducer,
    gptSearch: gptSearchReducer,
    config: configReducer
  }
});

export default appStore;
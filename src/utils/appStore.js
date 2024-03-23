import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import tvShowReducer from "./slices/tvshowSlice";
import trailerReducer from "./slices/trailerSlice";
import searchReducer from "./slices/searchSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvShows: tvShowReducer,
    trailer: trailerReducer,
    search: searchReducer,
    config: configReducer,
  },
});

export default appStore;

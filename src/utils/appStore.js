import { configureStore } from "@reduxjs/toolkit";
import userReducer from "utils/slices/userSlice";
import movieReducer from "utils/slices/movieSlice";
import tvShowReducer from "utils/slices/tvshowSlice";
import trailerReducer from "utils/slices/trailerSlice";
import searchReducer from "utils/slices/searchSlice";
import configReducer from "utils/slices/configSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["user", "movies", "tvShows", "trailer", "search"],
};

const reducers = combineReducers({
  user: userReducer,
  movies: movieReducer,
  tvShows: tvShowReducer,
  trailer: trailerReducer,
  search: searchReducer,
  config: configReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;

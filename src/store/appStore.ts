import { configureStore } from "@reduxjs/toolkit";
import userReducer from "store/slices/userSlice";
import movieReducer from "store/slices/movieSlice";
import tvShowReducer from "store/slices/tvshowSlice";
import trailerReducer from "store/slices/trailerSlice";
import searchReducer from "store/slices/searchSlice";
import configReducer from "store/slices/configSlice";

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch

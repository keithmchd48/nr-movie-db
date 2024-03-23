/* eslint-disable react-hooks/exhaustive-deps */
import { API_REQUEST_OPTIONS, TMDB_API_DOMAIN } from "../../utils/assets";
import { useDispatch } from "react-redux";
import { ADD_NOW_PLAYING_MOVIES } from "../../utils/slices/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      `${TMDB_API_DOMAIN}/movie/now_playing?page=1`,
      API_REQUEST_OPTIONS
    );
    const data = await response.json();
    dispatch(ADD_NOW_PLAYING_MOVIES(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

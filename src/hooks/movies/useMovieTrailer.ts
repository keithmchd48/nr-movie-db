/* eslint-disable react-hooks/exhaustive-deps */
import { API_REQUEST_OPTIONS, TMDB_API_DOMAIN } from "utils/assets";
import { useEffect } from "react";
import { ADD_TRAILER } from "store/slices/trailerSlice";
import { useDispatch } from "react-redux";
import { TrailerInterface } from "hooks/types";

const useMovieTrailer = (movieId: number): void => {
  const dispatch = useDispatch();

  const getMovieVideos = async (): Promise<void> => {
    const response = await fetch(
      `${TMDB_API_DOMAIN}/movie/${movieId}/videos?`,
      API_REQUEST_OPTIONS
    );
    const videos = await response.json();
    const videoTrailer: TrailerInterface =
      videos.results.find((video: TrailerInterface) => video.type === "Trailer") ||
      videos.results[0];

    dispatch(ADD_TRAILER(videoTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

import { API_REQUEST_OPTIONS } from "../utils/assets";
import { useEffect } from "react";
import { ADD_TRAILER } from "../utils/slices/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      API_REQUEST_OPTIONS
    );
    const videos = await response.json();
    const videoTrailer =
      videos.results.find((video) => video.type === "Trailer") ||
      videos.results[0];

    dispatch(ADD_TRAILER(videoTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
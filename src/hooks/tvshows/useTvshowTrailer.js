/* eslint-disable react-hooks/exhaustive-deps */
import { API_REQUEST_OPTIONS, TMDB_API_DOMAIN } from "utils/assets";
import { useEffect } from "react";
import { ADD_TRAILER } from "utils/slices/trailerSlice";
import { useDispatch } from "react-redux";

const useTvshowTrailer = (tvshowId) => {
  const dispatch = useDispatch();

  const getTvshowVideos = async () => {
    const response = await fetch(
      `${TMDB_API_DOMAIN}/tv/${tvshowId}/videos?`,
      API_REQUEST_OPTIONS
    );
    const videos = await response.json();
    const videoTrailer =
      videos.results.find((video) => video.type === "Trailer") ||
      videos.results[0];

    dispatch(ADD_TRAILER(videoTrailer));
  };

  useEffect(() => {
    getTvshowVideos();
  }, []);
};

export default useTvshowTrailer;
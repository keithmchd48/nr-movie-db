/* eslint-disable react-hooks/exhaustive-deps */
import { API_REQUEST_OPTIONS, TMDB_API_DOMAIN } from "utils/assets";
import { useEffect } from "react";
import { ADD_TRAILER } from "store/slices/trailerSlice";
import { useDispatch } from "react-redux";
import { TTrailer } from "hooks/types";

const useTvshowTrailer = (tvshowId: number) => {
  const dispatch = useDispatch();

  const getTvshowVideos = async (): Promise<void> => {
    const response: Response = await fetch(
      `${TMDB_API_DOMAIN}/tv/${tvshowId}/videos?`,
      API_REQUEST_OPTIONS
    );
    const videos = await response.json();
    const videoTrailer: TTrailer =
      videos.results.find((video: TTrailer) => video.type === "Trailer") ||
      videos.results[0];

    dispatch(ADD_TRAILER(videoTrailer));
  };

  useEffect(() => {
    getTvshowVideos();
  }, []);
};

export default useTvshowTrailer;
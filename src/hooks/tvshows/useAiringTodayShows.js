/* eslint-disable react-hooks/exhaustive-deps */
import {API_REQUEST_OPTIONS, TMDB_API_DOMAIN} from 'utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_AIRING_TODAY_SHOWS} from 'utils/slices/tvshowSlice';
import {useEffect} from 'react';

const useAiringTodayShows = () => {
  const dispatch = useDispatch();

  const getNowAiringShows = async () => {
    const response = await fetch(`${TMDB_API_DOMAIN}/tv/airing_today?page=1`, API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_AIRING_TODAY_SHOWS(data.results));
  };

  useEffect(() => {
    getNowAiringShows();
  }, []);
};

export default useAiringTodayShows;
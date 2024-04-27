/* eslint-disable react-hooks/exhaustive-deps */
import {API_REQUEST_OPTIONS, TMDB_API_DOMAIN} from 'utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_ON_AIR_SHOWS} from 'utils/slices/tvshowSlice';
import {useEffect} from 'react';

const useOnAirShows = () => {
  const dispatch = useDispatch();

  const getOnAirShows = async () => {
    const response = await fetch(`${TMDB_API_DOMAIN}/tv/on_the_air?page=1`, API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_ON_AIR_SHOWS(data.results));
  };

  useEffect(() => {
    getOnAirShows();
  }, []);
};

export default useOnAirShows;
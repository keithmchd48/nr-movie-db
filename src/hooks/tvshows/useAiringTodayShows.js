import {API_REQUEST_OPTIONS} from '../../utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_AIRING_TODAY_SHOWS} from '../../utils/slices/tvshowSlice';
import {useEffect} from 'react';

const useAiringTodayShows = () => {
  const dispatch = useDispatch();

  const getNowAiringShows = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_AIRING_TODAY_SHOWS(data.results));
  };

  useEffect(() => {
    getNowAiringShows();
  }, []);
};

export default useAiringTodayShows;
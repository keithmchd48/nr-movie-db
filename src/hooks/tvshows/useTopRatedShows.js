import {API_REQUEST_OPTIONS} from '../../utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_TOP_RATED_SHOWS} from '../../utils/slices/tvshowSlice';
import {useEffect} from 'react';

const useTopRatedShows = () => {
  const dispatch = useDispatch();

  const getTopRatedShows = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_TOP_RATED_SHOWS(data.results));
  };

  useEffect(() => {
    getTopRatedShows();
  }, []);
};

export default useTopRatedShows;
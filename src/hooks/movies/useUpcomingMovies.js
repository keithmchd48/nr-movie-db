import {API_REQUEST_OPTIONS} from '../../utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_UPCOMING_MOVIES} from '../../utils/slices/movieSlice';
import {useEffect} from 'react';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_UPCOMING_MOVIES(data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
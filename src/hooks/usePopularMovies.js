import {API_REQUEST_OPTIONS} from '../utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_POPULAR_MOVIES} from '../utils/slices/movieSlice';
import {useEffect} from 'react';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_POPULAR_MOVIES(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
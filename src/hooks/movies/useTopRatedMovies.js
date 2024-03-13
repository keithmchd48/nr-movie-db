/* eslint-disable react-hooks/exhaustive-deps */
import {API_REQUEST_OPTIONS, TMDB_API_DOMAIN} from '../../utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_TOP_RATED_MOVIES} from '../../utils/slices/movieSlice';
import {useEffect} from 'react';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const response = await fetch(`${TMDB_API_DOMAIN}/movie/top_rated?page=1`, API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_TOP_RATED_MOVIES(data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
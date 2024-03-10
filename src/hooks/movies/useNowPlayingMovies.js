import {API_REQUEST_OPTIONS} from '../../utils/assets';
import {useDispatch} from 'react-redux';
import {ADD_NOW_PLAYING_MOVIES} from '../../utils/slices/movieSlice';
import {useEffect} from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_REQUEST_OPTIONS)
    const data = await response.json();
    dispatch(ADD_NOW_PLAYING_MOVIES(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
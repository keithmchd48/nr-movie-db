import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies';
import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies';
import useAiringTodayShows from '../../hooks/tvshows/useAiringTodayShows';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/movies/useMovieTrailer";
import MainLayout from '../layouts/MainLayout';

const Browse = () => {
  useNowPlayingMovies();
  useAiringTodayShows();
  useTopRatedMovies();
  
  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);

  let content = [
    {
    title: "Now Playing Movies",
    samples: movies?.nowPlayingMovies
    },
    {
      title: "TV Shows",
      samples: tvShows?.airingToday
    },
    {
      title: "Top Rated Movies",
      samples: movies?.topRatedMovies
    }
  ]

  const movie = movies?.nowPlayingMovies?.[0];
  if(!movie) return (<div>Loading...</div>);

  return (
    <MainLayout>
      <HeroContainer sample={movie} fetchTrailer={useMovieTrailer}/>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default Browse
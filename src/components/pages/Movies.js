import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies';
import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies';
import useUpcomingMovies from '../../hooks/movies/useUpcomingMovies';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/movies/useMovieTrailer";
import MainLayout from '../layouts/MainLayout';

const Movies = () => {
  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies);

  let content = [
    {
    title: "Now Playing",
    samples: movies?.nowPlayingMovies
    },
    {
      title: "Upcoming Movies",
      samples: movies?.upcomingMovies
    },
    {
      title: "Top Rated Movies",
      samples: movies?.topRatedMovies
    }
  ]

  const movie = movies?.nowPlayingMovies?.[0];
  if(!movie) return;

  return (
    <MainLayout>
      <HeroContainer sample={movie} fetchTrailer={useMovieTrailer}/>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default Movies
import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies';
import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies';
import useUpcomingMovies from '../../hooks/movies/useUpcomingMovies';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/movies/useMovieTrailer";
import MainLayout from '../layouts/MainLayout';
import useTranslations from '../../hooks/useTranslations';
import { TMDB_DOMAIN_MOVIE } from '../../utils/assets';

const Movies = () => {
  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  const TRANSLATIONS = useTranslations();

  const movies = useSelector((store) => store.movies);

  let content = [
    {
      id: 'movies-now-playing',
      title: TRANSLATIONS.movies.nowPlaying,
      samples: movies?.nowPlayingMovies
    },
    {
      id: 'movies-upcoming',
      title:TRANSLATIONS.movies.upcoming,
      samples: movies?.upcomingMovies
    },
    {
      id: 'movies-top-rated',
      title: TRANSLATIONS.movies.topRated,
      samples: movies?.topRatedMovies
    }
  ]

  const movie = movies?.nowPlayingMovies?.[0];
  if(!movie) return;

  const tmdbLink = `${TMDB_DOMAIN_MOVIE}${movie.id}`;

  return (
    <MainLayout>
      <HeroContainer sample={movie} tmdbLink={tmdbLink} fetchTrailer={useMovieTrailer}/>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default Movies
import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies';
import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies';
import useAiringTodayShows from '../../hooks/tvshows/useAiringTodayShows';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/movies/useMovieTrailer";
import MainLayout from '../layouts/MainLayout';
import {TrailerProvider} from '../contexts/TrailerContext';
import useTranslations from '../../hooks/useTranslations';

const Browse = () => {
  useNowPlayingMovies();
  useAiringTodayShows();
  useTopRatedMovies();
  const TRANSLATIONS = useTranslations();
  
  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);

  let content = [
    {
      id: 'browse-now-playing',
      title: TRANSLATIONS.browse.nowPlaying,
      samples: movies?.nowPlayingMovies
    },
    {
      id: 'browse-airing-today',
      title: TRANSLATIONS.browse.tvShows,
      samples: tvShows?.airingToday
    },
    {
      id: 'browse-top-rated',
      title: TRANSLATIONS.browse.topRatedMovies,
      samples: movies?.topRatedMovies
    }
  ]

  const movie = movies?.nowPlayingMovies?.[0];
  if(!movie) return;

  return (
    <MainLayout>
      <TrailerProvider sampleId={movie.id} fetchTrailer={useMovieTrailer}>
        <HeroContainer sample={movie}/>
      </TrailerProvider>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default Browse
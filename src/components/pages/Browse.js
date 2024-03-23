import useNowPlayingMovies from "../../hooks/movies/useNowPlayingMovies";
import useTopRatedMovies from "../../hooks/movies/useTopRatedMovies";
import useAiringTodayShows from "../../hooks/tvshows/useAiringTodayShows";
import HeroContainer from "../HeroContainer";
import SecondaryContainer from "../SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/movies/useMovieTrailer";
import MainLayout from "../layouts/MainLayout";
import useTranslations from "../../hooks/useTranslations";
import { TMDB_DOMAIN_MOVIE, MEDIA_TYPES } from "../../utils/assets";

const Browse = () => {
  useNowPlayingMovies();
  useAiringTodayShows();
  useTopRatedMovies();
  const TRANSLATIONS = useTranslations();
  const { MOVIE, TV } = MEDIA_TYPES;

  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);

  let content = [
    {
      id: "browse-now-playing",
      title: TRANSLATIONS.browse.nowPlaying,
      samples: movies?.nowPlayingMovies,
      sampleType: MOVIE,
    },
    {
      id: "browse-airing-today",
      title: TRANSLATIONS.browse.tvShows,
      samples: tvShows?.airingToday,
      sampleType: TV,
    },
    {
      id: "browse-top-rated",
      title: TRANSLATIONS.browse.topRatedMovies,
      samples: movies?.topRatedMovies,
      sampleType: MOVIE,
    },
  ];

  const movie = movies?.nowPlayingMovies?.[0];
  if (!movie) return;

  const tmdbLink = `${TMDB_DOMAIN_MOVIE}${movie.id}`;

  return (
    <MainLayout>
      <HeroContainer
        sample={movie}
        tmdbLink={tmdbLink}
        fetchTrailer={useMovieTrailer}
      />
      <SecondaryContainer content={content} />
    </MainLayout>
  );
};

export default Browse;

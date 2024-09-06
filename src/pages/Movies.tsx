import useTopRatedMovies from "hooks/movies/useTopRatedMovies";
import useNowPlayingMovies from "hooks/movies/useNowPlayingMovies";
import useUpcomingMovies from "hooks/movies/useUpcomingMovies";
import HeroContainer from "components/containers/HeroContainer";
import SecondaryContainer from "components/containers/SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieTrailer from "hooks/movies/useMovieTrailer";
import MainLayout from "components/layouts/MainLayout";
import useTranslations from "hooks/useTranslations";
import { TMDB_DOMAIN_MOVIE, EnumMedia } from "utils/assets";
import { type LanguageType } from "utils/translations/types";
import { RootState } from "store/appStore";
import { TMovie, TPartialCommonMedia, TContentIterator } from "hooks/types";

const Movies = () => {
  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  const TRANSLATIONS: LanguageType = useTranslations();


  const movies: TMovie = useSelector((store: RootState) => store.movies);

  let content: TContentIterator[] = [
    {
      id: "movies-now-playing",
      title: TRANSLATIONS.movies.nowPlaying,
      samples: movies?.nowPlayingMovies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "movies-upcoming",
      title: TRANSLATIONS.movies.upcoming,
      samples: movies?.upcomingMovies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "movies-top-rated",
      title: TRANSLATIONS.movies.topRated,
      samples: movies?.topRatedMovies,
      sampleType: EnumMedia.MOVIE,
    },
  ];

  const movie: TPartialCommonMedia | null = movies?.nowPlayingMovies?.[0] || null;
  if (!movie) return;

  const tmdbLink: string = `${TMDB_DOMAIN_MOVIE}${movie.id}`;

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

export default Movies;

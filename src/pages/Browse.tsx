import useNowPlayingMovies from "hooks/movies/useNowPlayingMovies";
import useTopRatedMovies from "hooks/movies/useTopRatedMovies";
import useAiringTodayShows from "hooks/tvshows/useAiringTodayShows";
import HeroContainer from "components/containers/HeroContainer";
import SecondaryContainer from "components/containers/SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieTrailer from "hooks/movies/useMovieTrailer";
import useTranslations from "hooks/useTranslations";
import { TMDB_DOMAIN_MOVIE, EnumMedia } from "utils/assets";
import { RootState } from "store/appStore";
import { type TLanguage } from "utils/translations/types";
import { TMovie, TTvShow, TPartialCommonMedia, TContentIterator } from "hooks/types";

const Browse = () => {
  useNowPlayingMovies();
  useAiringTodayShows();
  useTopRatedMovies();

  const TRANSLATIONS: TLanguage = useTranslations();

  const movies: TMovie = useSelector((store: RootState) => store.movies);
  const tvShows: TTvShow = useSelector((store: RootState) => store.tvShows);

  let content: TContentIterator[] = [
    {
      id: "browse-now-playing",
      title: TRANSLATIONS.browse.nowPlaying,
      samples: movies?.nowPlayingMovies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "browse-airing-today",
      title: TRANSLATIONS.browse.tvShows,
      samples: tvShows?.airingToday,
      sampleType: EnumMedia.TV,
    },
    {
      id: "browse-top-rated",
      title: TRANSLATIONS.browse.topRatedMovies,
      samples: movies?.topRatedMovies,
      sampleType: EnumMedia.MOVIE,
    },
  ];

  const movie: TPartialCommonMedia | null = movies?.nowPlayingMovies?.[0] || null;
  if (!movie || !movie.id) return;

  const tmdbLink: string = `${TMDB_DOMAIN_MOVIE}${movie.id}`;

  return (
    <>
      <HeroContainer
        sample={movie}
        tmdbLink={tmdbLink}
        fetchTrailer={useMovieTrailer}
      />
      <SecondaryContainer content={content} />
    </>
  );
};

export default Browse;

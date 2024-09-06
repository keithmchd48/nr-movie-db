import useNowPlayingMovies from "hooks/movies/useNowPlayingMovies";
import useTopRatedMovies from "hooks/movies/useTopRatedMovies";
import useAiringTodayShows from "hooks/tvshows/useAiringTodayShows";
import HeroContainer from "components/containers/HeroContainer";
import SecondaryContainer from "components/containers/SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieTrailer from "hooks/movies/useMovieTrailer";
import MainLayout from "components/layouts/MainLayout";
import useTranslations from "hooks/useTranslations";
import { TMDB_DOMAIN_MOVIE, EnumMedia } from "utils/assets";
import { RootState } from "store/appStore";
import { type LanguageType } from "utils/translations/types";
import { TMovie, TVInterface, TPartialCommonMedia, ContentIteratorInterface } from "hooks/types";

const Browse = () => {
  useNowPlayingMovies();
  useAiringTodayShows();
  useTopRatedMovies();

  const TRANSLATIONS: LanguageType = useTranslations();

  const movies: TMovie = useSelector((store: RootState) => store.movies);
  const tvShows: TVInterface = useSelector((store: RootState) => store.tvShows);

  let content: ContentIteratorInterface[] = [
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

export default Browse;

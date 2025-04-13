import useNowPlayingMovies from "hooks/movies/useNowPlayingMovies";
import useTopRatedMovies from "hooks/movies/useTopRatedMovies";
import useAiringTodayShows from "hooks/tvshows/useAiringTodayShows";
import HeroContainer from "components/containers/HeroContainer";
import SecondaryContainer from "components/containers/SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieTrailer from "hooks/movies/useMovieTrailer";
import { TMDB_DOMAIN_MOVIE, EnumMedia } from "utils/assets";
import { RootState } from "store/appStore";
import { TMovie, TTvShow, TPartialCommonMedia, TContentIterator } from "hooks/types";
import { useTranslation } from "react-i18next";

const Browse = () => {
  useNowPlayingMovies();
  useAiringTodayShows();
  useTopRatedMovies();
  const { t } = useTranslation();
  const movies: TMovie = useSelector((store: RootState) => store.movies);
  const tvShows: TTvShow = useSelector((store: RootState) => store.tvShows);

  let content: TContentIterator[] = [
    {
      id: "browse-now-playing",
      title: t("nowPlaying"),
      samples: movies?.nowPlayingMovies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "browse-airing-today",
      title: t("tvShows"),
      samples: tvShows?.airingToday,
      sampleType: EnumMedia.TV,
    },
    {
      id: "browse-top-rated",
      title: t("topRatedMovies"),
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

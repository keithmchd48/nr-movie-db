import useTopRatedMovies from "hooks/movies/useTopRatedMovies";
import useNowPlayingMovies from "hooks/movies/useNowPlayingMovies";
import useUpcomingMovies from "hooks/movies/useUpcomingMovies";
import HeroContainer from "components/containers/HeroContainer";
import SecondaryContainer from "components/containers/SecondaryContainer";
import { useSelector } from "react-redux";
import useMovieTrailer from "hooks/movies/useMovieTrailer";
import { TMDB_DOMAIN_MOVIE, EnumMedia } from "utils/assets";
import { RootState } from "store/appStore";
import { TMovie, TPartialCommonMedia, TContentIterator } from "hooks/types";
import { useTranslation } from "react-i18next";

const Movies = () => {
  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  const { t } = useTranslation();

  const movies: TMovie = useSelector((store: RootState) => store.movies);

  let content: TContentIterator[] = [
    {
      id: "movies-now-playing",
      title: t("nowPlaying"),
      samples: movies?.nowPlayingMovies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "movies-upcoming",
      title: t("upcoming"),
      samples: movies?.upcomingMovies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "movies-top-rated",
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

export default Movies;

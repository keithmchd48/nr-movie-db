import useAiringTodayShows from "hooks/tvshows/useAiringTodayShows";
import useOnTheAirShows from "hooks/tvshows/useOnAirShows";
import useTopRatedShows from "hooks/tvshows/useTopRatedShows";
import HeroContainer from "components/containers/HeroContainer";
import SecondaryContainer from "components/containers/SecondaryContainer";
import { useSelector } from "react-redux";
import useTvshowTrailer from "hooks/tvshows/useTvshowTrailer";
import useTranslations from "hooks/useTranslations";
import { TMDB_DOMAIN_SHOW, EnumMedia } from "utils/assets";
import { RootState } from "store/appStore";
import { type TLanguage } from "utils/translations/types";
import { TTvShow, TPartialCommonMedia, TContentIterator } from "hooks/types";

const TVShows = () => {
  useAiringTodayShows();
  useOnTheAirShows();
  useTopRatedShows();
  const TRANSLATIONS: TLanguage = useTranslations();

  const tvShows: TTvShow = useSelector((store: RootState) => store.tvShows);

  let content: TContentIterator[] = [
    {
      id: "tvshows-airing-today",
      title: TRANSLATIONS.shows.airingToday,
      samples: tvShows?.airingToday,
      sampleType: EnumMedia.TV,
    },
    {
      id: "tvshows-on-the-air",
      title: TRANSLATIONS.shows.onTheAir,
      samples: tvShows?.onAirShows,
      sampleType: EnumMedia.TV,
    },
    {
      id: "tvshows-top-rated",
      title: TRANSLATIONS.shows.topRated,
      samples: tvShows?.topRatedShows,
      sampleType: EnumMedia.TV,
    },
  ];

  const show: TPartialCommonMedia | null = tvShows?.topRatedShows?.[0] || null;
  if (!show || !show.id) return;

  const tmdbLink: string = `${TMDB_DOMAIN_SHOW}${show.id}`;

  return (
    <>
      <HeroContainer
        sample={show}
        tmdbLink={tmdbLink}
        fetchTrailer={useTvshowTrailer}
      />
      <SecondaryContainer content={content} />
    </>
  );
};

export default TVShows;

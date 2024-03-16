import useAiringTodayShows from '../../hooks/tvshows/useAiringTodayShows';
import useOnTheAirShows from '../../hooks/tvshows/useOnAirShows';
import useTopRatedShows from '../../hooks/tvshows/useTopRatedShows';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useTvshowTrailer from "../../hooks/tvshows/useTvshowTrailer";
import MainLayout from '../layouts/MainLayout';
import useTranslations from '../../hooks/useTranslations';
import { TMDB_DOMAIN_SHOW } from '../../utils/assets';

const TVShows = () => {
  useAiringTodayShows();
  useOnTheAirShows();
  useTopRatedShows();
  const TRANSLATIONS = useTranslations();

  const tvShows = useSelector((store) => store.tvShows);

  let content = [
    {
      id: 'tvshows-airing-today',
      title: TRANSLATIONS.shows.airingToday,
      samples: tvShows?.airingToday,
      sampleType: 'tv'
    },
    {
      id: 'tvshows-on-the-air',
      title: TRANSLATIONS.shows.onTheAir,
      samples: tvShows?.onAirShows,
      sampleType: 'tv'
    },
    {
      id: 'tvshows-top-rated',
      title: TRANSLATIONS.shows.topRated,
      samples: tvShows?.topRatedShows,
      sampleType: 'tv'
    }
  ]

  const show = tvShows?.topRatedShows?.[0];
  if(!show) return;

  const tmdbLink = `${TMDB_DOMAIN_SHOW}${show.id}`;

  return (
    <MainLayout>
      <HeroContainer sample={show} tmdbLink={tmdbLink} fetchTrailer={useTvshowTrailer}/>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default TVShows
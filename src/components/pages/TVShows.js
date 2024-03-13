import useAiringTodayShows from '../../hooks/tvshows/useAiringTodayShows';
import useOnTheAirShows from '../../hooks/tvshows/useOnAirShows';
import useTopRatedShows from '../../hooks/tvshows/useTopRatedShows';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useTvshowTrailer from "../../hooks/tvshows/useTvshowTrailer";
import MainLayout from '../layouts/MainLayout';
import {TrailerProvider} from '../contexts/TrailerContext';
import useTranslations from '../../hooks/useTranslations';

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
      samples: tvShows?.airingToday
    },
    {
      id: 'tvshows-on-the-air',
      title: TRANSLATIONS.shows.onTheAir,
      samples: tvShows?.onAirShows
    },
    {
      id: 'tvshows-top-rated',
      title: TRANSLATIONS.shows.topRated,
      samples: tvShows?.topRatedShows
    }
  ]

  const show = tvShows?.topRatedShows?.[0];
  if(!show) return;

  return (
    <MainLayout>
      <TrailerProvider sampleId={show.id} fetchTrailer={useTvshowTrailer}>
        <HeroContainer sample={show}/>
      </TrailerProvider>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default TVShows
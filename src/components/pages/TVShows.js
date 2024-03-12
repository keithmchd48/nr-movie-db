import useAiringTodayShows from '../../hooks/tvshows/useAiringTodayShows';
import useOnTheAirShows from '../../hooks/tvshows/useOnAirShows';
import useTopRatedShows from '../../hooks/tvshows/useTopRatedShows';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useTvshowTrailer from "../../hooks/tvshows/useTvshowTrailer";
import MainLayout from '../layouts/MainLayout';
import {TrailerProvider} from '../contexts/TrailerContext';

const TVShows = () => {
  useAiringTodayShows();
  useOnTheAirShows();
  useTopRatedShows();

  const tvShows = useSelector((store) => store.tvShows);

  let content = [
    {
    title: "Airing Today",
    samples: tvShows?.airingToday
    },
    {
      title: "On The Air",
      samples: tvShows?.onAirShows
    },
    {
      title: "Top Rated",
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
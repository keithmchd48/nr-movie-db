import useAiringTodayShows from '../../hooks/tvshows/useAiringTodayShows';
import useOnTheAirShows from '../../hooks/tvshows/useOnAirShows';
import useTopRatedShows from '../../hooks/tvshows/useTopRatedShows';
import HeroContainer from '../HeroContainer';
import SecondaryContainer from '../SecondaryContainer';
import { useSelector } from 'react-redux';
import useTvshowTrailer from "../../hooks/tvshows/useTvshowTrailer";
import MainLayout from '../layouts/MainLayout';

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
  console.log(show);
  if(!show) return;

  return (
    <MainLayout>
      <HeroContainer sample={show} fetchTrailer={useTvshowTrailer}/>
      <SecondaryContainer content={content} />
    </MainLayout>
  )
}

export default TVShows
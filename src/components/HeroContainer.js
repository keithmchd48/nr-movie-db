import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import VideoMeta from './VideoMeta';

const HeroContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const movie = movies?.[0];
  const {original_title, overview, id, adult} = movie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoMeta isAdult={adult} />
      <VideoBackground movieId={id} />
    </div>
  )
};

export default HeroContainer;
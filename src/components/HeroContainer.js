import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import VideoMeta from './VideoMeta';

const HeroContainer = ({sample}) => {
  const {original_title, original_name, overview, id, adult} = sample;
  const title = original_title || original_name;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoMeta isAdult={adult} />
      <VideoBackground id={id} />
    </div>
  )
};

export default HeroContainer;
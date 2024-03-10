import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import VideoMeta from './VideoMeta';
import { useSelector } from "react-redux";

const HeroContainer = ({sample, fetchTrailer}) => {
  const {original_title, overview, id, adult} = sample;

  fetchTrailer(id);
  let trailer = useSelector((store) => store.trailer.trailer);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoMeta isAdult={adult} />
      <VideoBackground id={id} trailer={trailer} />
    </div>
  )
};

export default HeroContainer;
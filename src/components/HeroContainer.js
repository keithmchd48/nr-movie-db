import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import VideoMeta from './VideoMeta';
import { useSelector } from "react-redux";

const HeroContainer = ({sample, fetchTrailer}) => {
  const {original_title, original_name, overview, id, adult} = sample;
  const title = original_title || original_name;

  fetchTrailer(id);
  let trailer = useSelector((store) => store.trailer.trailer);

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoMeta isAdult={adult} />
      <VideoBackground id={id} trailer={trailer} />
    </div>
  )
};

export default HeroContainer;
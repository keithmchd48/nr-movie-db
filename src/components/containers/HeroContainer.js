import VideoTitle from "components/video/VideoTitle";
import VideoMeta from "components/video/VideoMeta";
import YTComponent from "components/video/YTComponent";
import { useSelector } from "react-redux";

const HeroContainer = ({ sample, tmdbLink, fetchTrailer }) => {
  const { original_title, original_name, overview, adult, id } = sample;
  const title = original_title || original_name;

  const isMuted = useSelector((store) => store.trailer.isMuted);

  fetchTrailer(id);
  let trailer = useSelector((store) => store.trailer.trailer);
  return (
    <div className="w-screen">
      <VideoTitle
        title={title}
        overview={overview}
        videoKey={trailer?.key}
        tmdbLink={tmdbLink}
      />
      <VideoMeta isAdult={adult} />
      <YTComponent trailer={trailer} muted={isMuted} />
    </div>
  );
};

export default HeroContainer;

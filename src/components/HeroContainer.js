import { useContext } from "react";
import { TrailerContext } from "./contexts/TrailerContext";
import VideoTitle from "./VideoTitle";
import VideoMeta from "./VideoMeta";
import { YOUTUBE_DOMAIN } from "../utils/assets";

const HeroContainer = ({sample, tmdbLink}) => {
  const {original_title, original_name, overview, adult} = sample;
  const title = original_title || original_name;

  const trailer = useContext(TrailerContext);

  let videoOptions = ``;
  if (trailer?.key) {
    videoOptions = `&autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0&color=white&iv_load_policy=3&disablekb=1&autohide=0&cc_load_policy=0&enablejsapi=1&widgetid=1`;
  }
  return (
    <div className="w-screen"> 
      <VideoTitle title={title} overview={overview} videoKey={trailer?.key} tmdbLink={tmdbLink} />
      <VideoMeta isAdult={adult} />
      <iframe
        className="w-screen aspect-video"
        src={`${YOUTUBE_DOMAIN}embed/${trailer?.key}?${videoOptions}`}
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default HeroContainer;

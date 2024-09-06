import VideoTitle from "components/video/VideoTitle";
import VideoMeta from "components/video/VideoMeta";
import YTComponent from "components/video/YTComponent";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import { TPartialCommonMedia, TTrailer } from "hooks/types";

const HeroContainer = ({ sample, tmdbLink, fetchTrailer }: {
  sample: TPartialCommonMedia | null;
  tmdbLink: string;
  fetchTrailer: (id: number) => void;

}) => {
  const original_title: string = sample?.original_title || "";
  const original_name: string = sample?.original_name || "";
  const overview: string = sample?.overview || "";
  const adult: boolean = sample?.adult || false;
  const id: number = sample?.id || 0;

  const title: string = original_title || original_name;

  const isMuted: boolean = useSelector((store: RootState) => store.trailer.isMuted);

  fetchTrailer(id);
  let trailer: TTrailer | null = useSelector((store: RootState) => store.trailer.trailer);
  return (
    <div className="w-screen">
      {trailer &&
        <VideoTitle
          title={title}
          overview={overview}
          videoKey={trailer.key}
          tmdbLink={tmdbLink}
        />
      }
      <VideoMeta isAdult={adult} />
      <YTComponent trailer={trailer} muted={isMuted} />
    </div>
  );
};

export default HeroContainer;

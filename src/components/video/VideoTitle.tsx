import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { YOUTUBE_DOMAIN } from "utils/assets";
import PrimaryButton from "components/units/PrimaryButton";
import { useTranslation } from "react-i18next";
import VideoMeta from "components/video/VideoMeta";

const VideoTitle = ({ title, overview, videoKey, tmdbLink, isAdult }: {title: string, overview: string, videoKey: string, tmdbLink: string, isAdult: boolean}) => {
  const { t } = useTranslation();

  const onPlay = (): void => {
    window.open(`${YOUTUBE_DOMAIN}watch?v=${videoKey}`, "_blank");
  };

  const onMoreInfo = () => {
    window.open(`${tmdbLink}`, "_blank");
  };

  return (
    <div className="absolute layout-padding pr-0 top-10 pt-[20%] w-screen aspect-video bg-gradient-to-r from-brand-black">
      {/* Title and Overview */}
      <h1 className="lg:text-6xl m:text-3xl xs:text-xl text-white font-bold">
        {title}
      </h1>
      <p className="xs:hidden sm:block lg:text-lg m:text-base xs:text-sm xs:py-3 lg:py-6 xs:w-full sm:w-3/4 lg:w-1/2 text-white">
        {overview}
      </p>
      <div className="flex justify-between">
        {/* Play and More Info buttons */}
        <div className="flex">
          <PrimaryButton onClick={onPlay} className="bg-white text-black hover:bg-white/85">
            <FaPlay className="mr-2" />
            {t("play")}
          </PrimaryButton>
          <PrimaryButton
            onClick={onMoreInfo}
            className="bg-gray-600 text-white ml-3 hover:bg-gray-600/85"
          >
            <LuInfo className="mr-2 font-bold text-2xl" />
            {t("moreInfo")}
          </PrimaryButton>
        </div>
        <VideoMeta isAdult={isAdult} />
        </div>
    </div>
  );
};

export default VideoTitle;

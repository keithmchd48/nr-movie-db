import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import useTranslations from "hooks/useTranslations";
import { YOUTUBE_DOMAIN } from "utils/assets";
import { type TLanguage } from "utils/translations/types";
import PrimaryButton from "components/units/PrimaryButton";

const VideoTitle = ({ title, overview, videoKey, tmdbLink }: {title: string, overview: string, videoKey: string, tmdbLink: string}) => {
  const TRANSLATIONS: TLanguage = useTranslations();

  const onPlay = (): void => {
    window.open(`${YOUTUBE_DOMAIN}watch?v=${videoKey}`, "_blank");
  };

  const onMoreInfo = () => {
    window.open(`${tmdbLink}`, "_blank");
  };

  return (
    <div className="absolute layout-padding top-10 pt-[20%] w-screen aspect-video bg-gradient-to-r from-brand-black">
      {/* Title and Overview */}
      <h1 className="lg:text-6xl m:text-3xl xs:text-xl text-white font-bold">
        {title}
      </h1>
      <p className="xs:hidden sm:block lg:text-lg m:text-base xs:text-sm xs:py-3 lg:py-6 xs:w-full sm:w-3/4 lg:w-1/2 text-white">
        {overview}
      </p>
      {/* Play and More Info buttons */}
      <div className="flex">
        <PrimaryButton onClick={onPlay} className="bg-white text-black">
          <FaPlay className="mr-2" />
          {TRANSLATIONS.play}
        </PrimaryButton>
        <PrimaryButton
          onClick={onMoreInfo}
          className="bg-gray-600 text-white ml-3"
        >
          <LuInfo className="mr-2 font-bold text-2xl" />
          {TRANSLATIONS.moreInfo}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default VideoTitle;

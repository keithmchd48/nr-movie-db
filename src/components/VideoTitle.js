import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import useTranslations from '../hooks/useTranslations';
import { YOUTUBE_DOMAIN } from "../utils/assets";


const VideoTitle = ({title, overview, videoKey, tmdbLink}) => {
  const TRANSLATIONS = useTranslations();

  const onPlay = () => {
    window.open(`${YOUTUBE_DOMAIN}watch?v=${videoKey}`, "_blank");
  };

  const onMoreInfo = () => {
    window.open(`${tmdbLink}`, "_blank");
  };

  return (
    <div className="absolute pt-[20%] lg:px-16 xs:px-8 w-screen aspect-video bg-gradient-to-r from-brand-black">
      {/* Title and Overview */}
      <h1 className="lg:text-6xl m:text-3xl xs:text-xl text-white font-bold">{title}</h1>
      <p className="lg:text-lg m:text-base xs:text-sm py-6 xs:w-full sm:w-3/4 lg:w-1/2 text-white">{overview}</p>
      {/* Play and More Info buttons */}
      <div className="flex">
        <button
          className="lg:text-lg md:text-md s:text-sm lg:p-3 lg:px-10 md:p-2 md:px-5 s:p-2 s:px-3 bg-white text-black flex items-center rounded font-bold cursor-pointer hover:bg-opacity-85"
          onClick={onPlay}>
          <FaPlay className="mr-2" />{TRANSLATIONS.play}
        </button>
        <button
          className="lg:text-lg md:text-md s:text-sm lg:p-3 lg:px-10 md:p-2 md:px-5 s:p-2 s:px-3 bg-gray-600 text-white font-bold flex items-center cursor-pointer rounded-md ml-2 bg-opacity-90 hover:bg-opacity-85"
          onClick={onMoreInfo}>
          <LuInfo className="mr-2 font-bold" />{TRANSLATIONS.moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
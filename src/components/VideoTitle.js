import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import useTranslations from '../hooks/useTranslations';


const VideoTitle = ({title, overview}) => {
  const TRANSLATIONS = useTranslations();

  return (
    <div className="absolute pt-[20%] px-16 w-screen aspect-video bg-gradient-to-r from-brand-black">
      <h1 className="lg:text-6xl md:text-3xl sm:text-lg text-white font-bold">{title}</h1>
      <p className="lg:text-lg md:text-md sm:text-sm py-6 w-1/2 text-white">{overview}</p>
      <div className="flex">
        <button className="lg:text-lg md:text-md sm:text-sm bg-white lg:p-3 lg:px-10 md:p-2 md:px-5 sm:p-2 sm:px-3 text-black flex items-center rounded font-bold cursor-pointer hover:bg-opacity-85">
          <FaPlay className="mr-2" />{TRANSLATIONS.play}
        </button>
        <button className="lg:text-lg md:text-md sm:text-sm bg-gray-600 p-3 px-10 text-white font-bold flex items-center cursor-pointer rounded-md ml-2 bg-opacity-90 hover:bg-opacity-85">
          <LuInfo className="mr-2 font-bold" />{TRANSLATIONS.moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
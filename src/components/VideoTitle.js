import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";


const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute pt-[20%] px-24 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2 text-white">{overview}</p>
      <div className="flex">
        <button className="bg-white p-3 px-10 text-lg text-black flex items-center rounded font-bold cursor-pointer hover:bg-opacity-85">
          <FaPlay className="mr-2" />Play
        </button>
        <button className="bg-gray-600 p-3 px-10 text-lg text-white font-bold flex items-center cursor-pointer rounded-md ml-2 bg-opacity-90 hover:bg-opacity-85">
          <LuInfo className="mr-2 font-bold" />More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
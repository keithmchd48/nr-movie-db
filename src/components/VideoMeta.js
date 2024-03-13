// import { VscUnmute } from "react-icons/vsc";
// import { VscMute } from "react-icons/vsc";


const VideoMeta = ({isAdult}) => {
  // const toggleMute = () => {};

  return (
    <div className="absolute right-0 top-[500px] flex items-center">
      {/*<div onClick={toggleMute} className="w-10 h-10 border border-white rounded-full bg-black bg-opacity-0 mr-3 cursor-pointer flex items-center justify-center hover:bg-opacity-10">
        <VscUnmute className="text-white text-2xl hidden" />
        <VscMute className="text-white text-2xl" />
  </div>*/}

      <div className="bg-gray-400 text-white py-1 pl-3 border-l-4 border-solid min-w-24 bg-opacity-20 text-lg">
        {isAdult ? '18+' : '13+'}
      </div>
    </div>
  );
};

export default VideoMeta;
// import { VscUnmute } from "react-icons/vsc";
// import { VscMute } from "react-icons/vsc";


const VideoMeta = ({isAdult}) => {
  // const toggleMute = () => {};

  return (
    <div className="relative right-0 xs:top-[100px] m:top-[225px] l:top-[275px] md:top-[350px] lg:top-[500px] flex items-center justify-end">
      {/*<div onClick={toggleMute} className="w-10 h-10 border border-white rounded-full bg-black bg-opacity-0 mr-3 cursor-pointer flex items-center justify-center hover:bg-opacity-10">
        <VscUnmute className="text-white text-2xl hidden" />
        <VscMute className="text-white text-2xl" />
  </div>*/}

      <div className="bg-gray-400 text-white py-1 pl-3 border-l-4 border-solid m:min-w-16 lg:min-w-24 bg-opacity-20 xs:text-sm sm:text-lg">
        {isAdult ? '18+' : '13+'}
      </div>
    </div>
  );
};

export default VideoMeta;
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";
import {TOGGLE_MUTE} from '../utils/slices/trailerSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const VideoMeta = ({isAdult}) => {
  const isMuted = useSelector(store => store.trailer.isMuted);
  const dispatch = useDispatch();

  const toggleMute = () => {
    dispatch(TOGGLE_MUTE());
  };

  return (
    <div className="relative right-0 xs:top-36 s:top-36 m:top-50 l:top-56 sm:top-64 md:top-72 lg:top-[500px] flex items-center justify-end">
      <div onClick={toggleMute} className="xs:w-7 xs:h-7 l:w-10 l:h-10 border border-white rounded-full bg-brand-black bg-opacity-0 mr-3 cursor-pointer flex items-center justify-center hover:bg-opacity-10">
        <VscUnmute className={`text-white l:text-2xl ${isMuted ? 'hidden' : 'block'}`} />
        <VscMute className={`text-white l:text-2xl ${isMuted ? 'block' : 'hidden'}`} />
      </div>

      <div className="bg-gray-400 text-white py-1 pl-3 border-l-4 border-solid m:min-w-16 lg:min-w-24 bg-opacity-20 xs:text-sm sm:text-lg">
        {isAdult ? '18+' : '13+'}
      </div>
    </div>
  );
};

export default VideoMeta;
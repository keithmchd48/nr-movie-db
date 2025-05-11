import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";
import { TOGGLE_MUTE } from "store/slices/trailerSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";

const MuteSection = () => {
  const isMuted = useSelector((store: RootState) => store.trailer.isMuted);
  const dispatch = useDispatch();
  const toggleMute = () => {
    dispatch(TOGGLE_MUTE());
  };
  return (
    <div
      onClick={toggleMute}
      className="xs:w-7 xs:h-7 l:w-10 l:h-10 border border-white rounded-full bg-brand-black/0 mr-3 cursor-pointer flex items-center justify-center hover:bg-brand-black/10"
    >
      <VscUnmute
        className={`text-white l:text-2xl ${isMuted ? "hidden" : "block"}`}
      />
      <VscMute
        className={`text-white l:text-2xl ${isMuted ? "block" : "hidden"}`}
      />
    </div>
  );
};

const VideoMeta = ({ isAdult }: {isAdult: boolean}) => {
  return (
    <div className="relative right-0 xs:top-36 s:top-36 m:top-50 l:top-56 sm:top-64 md:top-72 lg:top-[500px] flex items-center justify-end">
      <MuteSection />
      <div className="bg-gray-400/20 text-white py-1 pl-3 border-l-4 border-solid m:min-w-16 lg:min-w-24 xs:text-sm sm:text-lg">
        {isAdult ? "18+" : "13+"}
      </div>
    </div>
  );
};

export default VideoMeta;

import {POSTER_PATH_URL} from '../utils/assets';

const SampleCard = ({sample}) => {
  return (
    <div className="w-60 mx-3">
      <img src={`${POSTER_PATH_URL}${sample.backdrop_path}`} alt="sample_poster" className="rounded-md" />
    </div>
  );
};

export default SampleCard;
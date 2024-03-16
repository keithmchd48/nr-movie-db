import {POSTER_PATH_URL, TMDB_DOMAIN} from '../utils/assets';
import useReadableDate from '../hooks/useReadableDate';

const SampleCard = ({sample, sampleType}) => {
  const {title, original_name, first_air_date, release_date, id} = sample;
  const readableDate = useReadableDate(release_date || first_air_date);

  const openTMDBLink = () => {
    window.open(`${TMDB_DOMAIN}${sampleType}/${id}`);
  };

  return (
    <div onClick={openTMDBLink} className="w-60 relative cursor-pointer">
      <img src={`${POSTER_PATH_URL}${sample.backdrop_path}`} alt="sample_poster" className="rounded-md" />
      <div className="text-white text-left absolute inset-0 flex flex-col justify-end items-start p-2 bg-black bg-opacity-35 hover:bg-opacity-10 transition-bg-opacity ease-in-out duration-200">
        <h4 className="text-xl">{title || original_name}</h4>
        <p className="text-sm">{readableDate}</p>
      </div>
    </div>
  );
};

export default SampleCard;
import {
  POSTER_PATH_URL,
  TMDB_DOMAIN,
  BACKDROP_PLACEHOLDER,
} from "utils/assets";
import { TPartialCommonMedia } from "hooks/types";
import FormattedDate from "components/utils/FormattedDate";

const SampleCard = ({ sample, sampleType }: {sample: TPartialCommonMedia, sampleType: string}) => {
  const title: string = sample?.title || "";
  const original_name: string = sample?.original_name || "";
  const first_air_date: string = sample?.first_air_date || "";
  const release_date: string = sample?.release_date || "";
  const id: number = sample?.id || 0;
  const backdrop_path: string = sample?.backdrop_path || "";

  const backdropSrc: string = backdrop_path
    ? `${POSTER_PATH_URL}${backdrop_path}`
    : BACKDROP_PLACEHOLDER;

  const openTMDBLink = (): void => {
    window.open(`${TMDB_DOMAIN}${sampleType}/${id}`);
  };

  return (
    <div onClick={openTMDBLink} className="relative w-60 rounded-md overflow-hidden cursor-pointer">
      <img
        src={backdropSrc}
        alt="Warfare"
        className="w-full object-cover"
      />

      <div className="absolute bottom-0 p-2 text-white bg-black/35 hover:bg-black/10 transition-colors duration-300 h-full w-full flex flex-col justify-end">
        <h4 className="text-xl">{title || original_name}</h4>
        <FormattedDate date={release_date || first_air_date} />
      </div>
    </div>
  );
};

export default SampleCard;

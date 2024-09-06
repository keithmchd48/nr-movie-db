import {
  POSTER_PATH_URL,
  TMDB_DOMAIN,
  BACKDROP_PLACEHOLDER,
} from "utils/assets";
import useReadableDate from "hooks/utilities/useReadableDate";
import { TPartialCommonMedia } from "hooks/types";

const SampleCard = ({ sample, sampleType }: {sample: TPartialCommonMedia, sampleType: string}) => {
  const title: string = sample?.title || "";
  const original_name: string = sample?.original_name || "";
  const first_air_date: string = sample?.first_air_date || "";
  const release_date: string = sample?.release_date || "";
  const id: number = sample?.id || 0;
  const backdrop_path: string = sample?.backdrop_path || "";

  const readableDate: string = useReadableDate(release_date || first_air_date);

  const backdropSrc: string = backdrop_path
    ? `${POSTER_PATH_URL}${backdrop_path}`
    : BACKDROP_PLACEHOLDER;

  const openTMDBLink = (): void => {
    window.open(`${TMDB_DOMAIN}${sampleType}/${id}`);
  };

  return (
    <div onClick={openTMDBLink} className="w-60 relative cursor-pointer">
      <img src={backdropSrc} alt="sample_poster" className="rounded-md" />
      <div className="text-white text-left absolute inset-0 flex flex-col justify-end items-start p-2 bg-black bg-opacity-35 hover:bg-opacity-10 transition-bg-opacity ease-in-out duration-200">
        <h4 className="text-xl">{title || original_name}</h4>
        <p className="text-sm">{readableDate}</p>
      </div>
    </div>
  );
};

export default SampleCard;

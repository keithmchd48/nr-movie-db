import {POSTER_PATH_URL} from '../utils/assets';

const MovieCard = ({movie}) => {
  return (
    <div className="w-60 mx-3">
      <img src={`${POSTER_PATH_URL}${movie.backdrop_path}`} alt="movie_poster" className="rounded-md" />
    </div>
  );
};

export default MovieCard;
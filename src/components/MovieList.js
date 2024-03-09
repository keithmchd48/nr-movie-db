import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  return (
    <div className="px-16 mb-11 last:mb-0">
      <h1 className="text-white text-2xl mb-3">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex w-100">
            {
              movies && (movies.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />;
              }))
            }
          </div>
      </div>
    </div>
  );
};

export default MovieList;
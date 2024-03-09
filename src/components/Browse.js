import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import HeroContainer from './HeroContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div className="bg-netflix-black">
      <Header/>
      <HeroContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
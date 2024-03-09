import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import HeroContainer from './HeroContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <HeroContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
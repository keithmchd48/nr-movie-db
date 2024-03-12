import Header from '../Header';
import SearchResults from '../pages/SearchResults';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const searchQuery = useSelector(store => store.gptSearch.searchQuery);

  return (
    <div className="bg-netflix-black">
      <Header />
      {searchQuery ? <SearchResults /> : children}
    </div>
  );
}

export default MainLayout;
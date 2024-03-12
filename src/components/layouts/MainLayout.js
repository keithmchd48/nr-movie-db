import Header from '../Header';
import SearchResults from '../pages/SearchResults';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const searchQuery = useSelector(store => store.gptSearch.searchQuery);

  return (
    <div className="w-screen h-screen">
      <Header />
      {searchQuery && <SearchResults />}
      <div className={searchQuery ? 'hidden' : 'block'}>{children}</div>
    </div>
  );
}

export default MainLayout;
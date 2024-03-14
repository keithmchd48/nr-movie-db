import Header from '../Header';
import Footer from '../Footer';
import SearchResults from '../pages/SearchResults';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const searchQuery = useSelector(store => store.gptSearch.searchQuery);

  return (
    <>
      <Header />
      {searchQuery && <SearchResults />}
      <div className={searchQuery ? 'hidden' : 'block'}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
import Header from "components/Header";
import Footer from "components/Footer";
import SearchResults from "components/pages/SearchResults";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const searchQuery = useSelector((store) => store.search.searchQuery);

  return (
    <>
      <Header />
      {searchQuery && <SearchResults />}
      <div className={searchQuery ? "hidden" : "block"}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;

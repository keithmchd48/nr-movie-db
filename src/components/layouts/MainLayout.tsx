import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import SearchResults from "pages/SearchResults";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import React from 'react'

const MainLayout = ({ children }: {children: React.ReactNode}) => {
  const searchQuery: string = useSelector((store: RootState) => store.search.searchQuery);

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

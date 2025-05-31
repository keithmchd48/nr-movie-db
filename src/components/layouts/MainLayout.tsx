import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import SearchResults from "pages/SearchResults";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import React from 'react'
import { useLocation } from "@tanstack/react-router";
import { PATHS } from "utils/assets";

const SearchSection = ({ children }: {children: React.ReactNode}) => {
  const searchQuery: string = useSelector((store: RootState) => store.search.searchQuery);
  return (
    <>
      {searchQuery && <SearchResults />}
      <div className={searchQuery ? "hidden" : "block"}>{children}</div>
    </>
  );
};

const MainLayout = ({ children }: {children: React.ReactNode}) => {
  const location = useLocation();
  return (
    <>
      <Header />
      <SearchSection>{children}</SearchSection>
      {location.pathname !== PATHS.LOGIN && <Footer />}
    </>
  );
};

export default MainLayout;

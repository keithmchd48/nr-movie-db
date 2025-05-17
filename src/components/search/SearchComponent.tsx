import { GoSearch } from "react-icons/go";
import SearchInput from "components/search/SearchInput";
import useClickOutside from "hooks/utilities/useClickOutside";
import { RefObject, useRef, useState } from "react";
import { UPDATE_SEARCH_QUERY } from "store/slices/searchSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef: RefObject<HTMLDivElement | null> = useRef(null);
  const searchIcon: RefObject<HTMLDivElement | null> = useRef(null);
  const { t } = useTranslation();

  useClickOutside(searchInputRef as RefObject<HTMLDivElement>, searchIcon as RefObject<HTMLDivElement>, () => {
    if (isSearchInputVisible && !query) {
      setIsSearchInputVisible(false);
    }
  });

  const toggleSearch = () => {
    setIsSearchInputVisible(true);
  };

  const updateQuery: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(UPDATE_SEARCH_QUERY(e.target.value));
  };

  const clearQuery = () => {
    setQuery("");
    dispatch(UPDATE_SEARCH_QUERY(""));
  };

  return (
    <div>
      <div ref={searchIcon}>
        <GoSearch
          onClick={toggleSearch}
          className={`text-white l:text-xl cursor-pointer ${
            isSearchInputVisible ? "hidden" : "block"
          }`}
        />
      </div>
      <div ref={searchInputRef}>
        <SearchInput
          placeholder={t("searchPlaceholder")}
          value={query}
          onChange={updateQuery}
          onClear={clearQuery}
          isVisible={isSearchInputVisible}
        />
      </div>
    </div>
  );
};

export default SearchComponent;

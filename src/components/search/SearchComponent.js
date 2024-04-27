import { GoSearch } from "react-icons/go";
import SearchInput from "components/search/SearchInput";
import useClickOutside from "hooks/utilities/useClickOutside";
import { useRef, useState } from "react";
import { UPDATE_SEARCH_QUERY } from "store/slices/searchSlice";
import { useDispatch } from "react-redux";
import useTranslations from "hooks/useTranslations";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);
  const searchIcon = useRef(null);

  const TRANSLATIONS = useTranslations();

  useClickOutside(searchInputRef, searchIcon, () => {
    if (isSearchInputVisible && !query) {
      setIsSearchInputVisible(false);
    }
  });

  const toggleSearch = () => {
    setIsSearchInputVisible(true);
  };

  const updateQuery = (e) => {
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
          placeholder={TRANSLATIONS.headerMenu.searchPlaceholder}
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

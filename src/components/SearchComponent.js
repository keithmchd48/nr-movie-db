import { GoSearch } from "react-icons/go";
import SearchInput from './SearchInput';
import useClickOutside from '../hooks/useClickOutside';
import { useRef, useState } from 'react';

const SearchComponent = () => {
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);
  const searchIcon = useRef(null);

  useClickOutside(searchInputRef, searchIcon, () => {
    if (isSearchInputVisible) {
      setIsSearchInputVisible(false);
    }
  });

  const toggleSearch = () => {
    console.log('toggleSearch', isSearchInputVisible);
    setIsSearchInputVisible(true);
  };

  return (
    <div className="mr-6">
      <div ref={searchIcon}>
        <GoSearch onClick={toggleSearch} className={`text-white text-2xl cursor-pointer ${isSearchInputVisible ? 'hidden' : 'block'}`} />
      </div>
      <div ref={searchInputRef}>
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} isVisible={isSearchInputVisible} />
      </div>
    </div>
  );
};

export default SearchComponent;
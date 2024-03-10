import { GoSearch } from "react-icons/go";

const SearchInput = ({ value, onChange, isVisible }) => {
  return (
    <div className={`flex items-center border-[1px] border-white bg-netflix-black px-2 py-1 min-w-60 ${isVisible ? 'block' : 'hidden'}`}>
      <GoSearch className="text-white text-2xl cursor-pointer" />
      <input placeholder="Titles, people, genres" type="text" value={value} onChange={onChange} className="bg-inherit font-thin text-sm text-white px-2 focus:outline-none" />
    </div>
  );
};

export default SearchInput;
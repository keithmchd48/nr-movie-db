import { GoSearch } from "react-icons/go";

const SearchInput = (props) => {
  const {placeholder, value, onChange, isVisible} = props;
  
  return (
    <div className={`flex items-center border-[1px] border-white bg-netflix-black px-2 py-1 min-w-60 ${isVisible ? 'block' : 'hidden'}`}>
      <GoSearch className="text-white text-2xl cursor-pointer" />
      <input placeholder={placeholder} type="text" value={value} onChange={onChange} className="bg-inherit font-thin text-sm text-white pl-2 w-full focus:outline-none" />
    </div>
  );
};

export default SearchInput;
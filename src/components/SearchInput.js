import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


const SearchInput = (props) => {
  let {placeholder, value, onChange, isVisible, onClear} = props;
  
  return (
    <div className={`flex items-center border-[1px] border-white bg-brand-black px-2 py-1 ${isVisible ? 'block' : 'hidden'}`}>
      <GoSearch className="text-white xs:text-sm m:text-xl cursor-pointer" />
      <input placeholder={placeholder} type="text" value={value} onChange={onChange} className="bg-inherit font-thin text-sm text-white pl-2 focus:outline-none" />
      <RxCross2 onClick={onClear} className={`text-white text-xl cursor-pointer ${value ? 'block' : 'hidden'}`} />
    </div>
  );
};

export default SearchInput;
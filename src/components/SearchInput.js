import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


const SearchInput = (props) => {
  let {placeholder, value, onChange, isVisible, onClear} = props;
  
  return (
    <div className={`xs:text-xs m:text-sm lg:text-base xs:max-w-28 l:max-w-full text-white flex items-center border-[1px] border-white bg-brand-black py-1 px-1 ${isVisible ? 'block' : 'hidden'}`}>
      <GoSearch className="cursor-pointer" />
      <input placeholder={placeholder} type="text" value={value} onChange={onChange} className="pl-1 bg-inherit font-thin overflow-hidden text-white focus:outline-none" />
      <RxCross2 onClick={onClear} className={`cursor-pointer ${value ? 'block' : 'hidden'}`} />
    </div>
  );
};

export default SearchInput;
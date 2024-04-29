import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useRef } from "react";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isVisible: boolean;
  onClear: () => void;
};

const SearchInput = (props: SearchInputProps) => {
  let { placeholder, value, onChange, isVisible, onClear } = props;
  const searchInputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (isVisible) {
      (searchInputRef?.current as HTMLInputElement)?.focus();
    }
  }, [isVisible]);

  return (
    <div
      className={`xs:text-xs m:text-sm lg:text-base xs:max-w-28 l:max-w-full text-white flex items-center border-[1px] border-white bg-brand-black py-1 px-1 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <GoSearch className="cursor-pointer" />
      <input
        ref={searchInputRef}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        className="pl-1 bg-inherit font-thin overflow-hidden text-white focus:outline-none"
      />
      <RxCross2
        onClick={onClear}
        className={`cursor-pointer ${value ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default SearchInput;

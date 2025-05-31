import { EnumLanguages } from "utils/translations/types";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_LANGUAGE } from "store/slices/configSlice";
import { RootState } from "store/appStore";
import React from 'react';

const SUPPORTED_LANGUAGES: EnumLanguages[] = [
  EnumLanguages.ENGLISH,
  EnumLanguages.DANISH,
  EnumLanguages.SPANISH,
];

const LangSelect = () => {
  console.log('LangSelect render');
  const dispatch = useDispatch();
  const preferredLang = useSelector((store: RootState) => store.config.preferredLang);

  const selectLanguage: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const target = e.target as HTMLSelectElement;
    dispatch(SELECT_LANGUAGE(target.value));
  };

  return (
    <select
      className="max-w-11 bg-transparent xs:text-xs l:text-sm text-white outline-none"
      value={preferredLang}
      onChange={selectLanguage}
    >
      {SUPPORTED_LANGUAGES.map((lang) => {
        return (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default LangSelect;

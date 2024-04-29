import { SUPPORTED_LANGUAGES } from "utils/translations/languages";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_LANGUAGE } from "store/slices/configSlice";
import { RootState } from "store/appStore";
import React from 'react';

const LangSelect = () => {
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
          <option key={lang.identifier} value={lang.identifier}>
            {lang.label}
          </option>
        );
      })}
    </select>
  );
};

export default LangSelect;

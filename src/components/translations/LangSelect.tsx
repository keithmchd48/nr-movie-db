import { EnumLanguages } from "utils/translations/types";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_LANGUAGE } from "store/slices/configSlice";
import { RootState } from "store/appStore";
import React from 'react';
import i18n from "i18next";

const SUPPORTED_LANGUAGES: EnumLanguages[] = [
  EnumLanguages.ENGLISH,
  EnumLanguages.DANISH,
  EnumLanguages.SPANISH,
];

const LangSelect = () => {
  const dispatch = useDispatch();
  const preferredLang = useSelector((store: RootState) => store.config.preferredLang);

  const selectLanguage: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const target = e.target as HTMLSelectElement;
    i18n.changeLanguage(target.value);
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
            {lang}
          </option>
        );
      })}
    </select>
  );
};

export default LangSelect;

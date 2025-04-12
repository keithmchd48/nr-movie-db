import { EnumLanguages } from "utils/translations/types";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_LANGUAGE } from "store/slices/configSlice";
import { RootState } from "store/appStore";
import React, { useEffect } from 'react';
import i18n from "i18next";

const SUPPORTED_LANGUAGES: EnumLanguages[] = [
  EnumLanguages.ENGLISH,
  EnumLanguages.DANISH,
  EnumLanguages.SPANISH,
];

const LangSelect = () => {
  console.log('LangSelect render');
  const dispatch = useDispatch();
  const preferredLang = useSelector((store: RootState) => store.config.preferredLang);

  useEffect(() => {
    i18n.changeLanguage(preferredLang).catch((error) => {
      console.error("Error changing language:", error);
    });
  }, [preferredLang]);

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

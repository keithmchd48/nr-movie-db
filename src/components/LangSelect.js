import { SUPPORTED_LANGUAGES } from "utils/translations/languages";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_LANGUAGE } from "utils/slices/configSlice";

const LangSelect = () => {
  const dispatch = useDispatch();
  const preferredLang = useSelector((store) => store.config.preferredLang);

  const selectLanguage = (e) => {
    dispatch(SELECT_LANGUAGE(e.target.value));
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

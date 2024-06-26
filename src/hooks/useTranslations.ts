import { LANG } from "utils/translations/languages";
import { LanguageInterface } from "utils/translations/types";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";

const useTranslations = () => {
  const preferredLang = useSelector((store: RootState) => store.config.preferredLang);
  return LANG[preferredLang as keyof LanguageInterface];
};

export default useTranslations;

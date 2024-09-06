import { LANG } from "utils/translations/languages";
import { TLanguages } from "utils/translations/types";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";

const useTranslations = () => {
  const preferredLang: string = useSelector((store: RootState) => store.config.preferredLang);
  return LANG[preferredLang as keyof TLanguages];
};

export default useTranslations;

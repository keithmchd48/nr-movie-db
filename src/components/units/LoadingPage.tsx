import useTranslations from "hooks/useTranslations";
import { type TLanguage } from "utils/translations/types";

const LoadingPage = () => {
  const TRANSLATIONS: TLanguage = useTranslations();

  return (
    <div className="flex items-center justify-center h-screen bg-brand-black text-white text-2xl">
      <h1>{TRANSLATIONS.loadingText}</h1>
    </div>
  );
};

export default LoadingPage;

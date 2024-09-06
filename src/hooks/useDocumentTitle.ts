import { useEffect } from 'react';
import { APP_NAME } from 'utils/assets';
import { useLocation } from "react-router-dom";
import useTranslations from "hooks/useTranslations";
import { useSelector } from "react-redux";
import { type TLanguage } from "utils/translations/types";
import { RootState } from "store/appStore";

const useDocumentTitle: () => void = () => {
  const TRANSLATIONS: TLanguage = useTranslations();
  const location = useLocation();
  const path: string = location.pathname;
  const preferredLang: string = useSelector((store: RootState) => store.config.preferredLang);

  useEffect(() => {
    const HEAD_TITLES: {
      [key: string]: string;
    } = {
      "/": `${APP_NAME} | ${TRANSLATIONS.headTitles.login}`,
      '/login': `${APP_NAME} | ${TRANSLATIONS.headTitles.login}`,
      '/browse': `${APP_NAME} | ${TRANSLATIONS.headTitles.browse}`,
      '/shows': `${APP_NAME} | ${TRANSLATIONS.headTitles.shows}`,
      '/movies': `${APP_NAME} | ${TRANSLATIONS.headTitles.movies}`,
      '/error': `${APP_NAME} | ${TRANSLATIONS.headTitles.error}`,
    };

    document.title = `${HEAD_TITLES[path as keyof typeof HEAD_TITLES]}`;
  }, [preferredLang, path, TRANSLATIONS]);
};
export default useDocumentTitle;
import { useEffect } from 'react';
import { APP_NAME } from '../utils/assets';
import { useLocation } from "react-router-dom";
import useTranslations from "../hooks/useTranslations";
import { useSelector } from "react-redux";

const useDocumentTitle = () => {
  const TRANSLATIONS = useTranslations();
  const location = useLocation();
  const path = location.pathname;
  const preferredLang = useSelector((store) => store.config.preferredLang);

  useEffect(() => {
    const HEAD_TITLES = {
      "/": `${APP_NAME} | ${TRANSLATIONS.headTitles.login}`,
      '/login': `${APP_NAME} | ${TRANSLATIONS.headTitles.login}`,
      '/browse': `${APP_NAME} | ${TRANSLATIONS.headTitles.browse}`,
      '/shows': `${APP_NAME} | ${TRANSLATIONS.headTitles.shows}`,
      '/movies': `${APP_NAME} | ${TRANSLATIONS.headTitles.movies}`,
      '/error': `${APP_NAME} | ${TRANSLATIONS.headTitles.error}`,
    };

    document.title = `${HEAD_TITLES[path]}`;
  }, [preferredLang, path, TRANSLATIONS]);
};
export default useDocumentTitle;
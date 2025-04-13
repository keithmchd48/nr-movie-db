import { useEffect } from 'react';
import { APP_NAME } from 'utils/assets';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import { useTranslation } from 'react-i18next';

const useDocumentTitle: () => void = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const path: string = location.pathname;
  const preferredLang: string = useSelector((store: RootState) => store.config.preferredLang);

  useEffect(() => {
    const HEAD_TITLES: {
      [key: string]: string;
    } = {
      "/": `${APP_NAME} | ${t("login")}`,
      '/login': `${APP_NAME} | ${t("login")}`,
      '/browse': `${APP_NAME} | ${t("browse")}`,
      '/shows': `${APP_NAME} | ${t("shows")}`,
      '/movies': `${APP_NAME} | ${t("movies")}`,
      '/error': `${APP_NAME} | ${t("error")}`,
    };

    document.title = `${HEAD_TITLES[path as keyof typeof HEAD_TITLES]}`;
  }, [preferredLang, path, t]);
};
export default useDocumentTitle;
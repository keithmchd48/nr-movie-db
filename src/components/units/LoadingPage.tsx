import { useTranslation } from "react-i18next";

const LoadingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen bg-brand-black text-white text-2xl">
      <h1>{t("loadingText")}</h1>
    </div>
  );
};

export default LoadingPage;

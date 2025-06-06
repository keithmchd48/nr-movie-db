import { MY_BIO_LINK, APP_NAME } from "utils/assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="xs:text-xs m:text-sm bg-brand-black text-white font-light text-center p-4">
      <p>&copy; {currentYear} {APP_NAME}</p>
      <p className="mt-2">
        {t("createdBy")}
        <a
          rel="noreferrer"
          className="text-brand-orange hover:underline ml-2"
          href={MY_BIO_LINK}
          target="_blank"
        >
          @keithmchd48
        </a>
      </p>
    </footer>
  );
};

export default Footer;

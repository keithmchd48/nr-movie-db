import useTranslations from "../hooks/useTranslations";
import { MY_BIO_LINK } from "../utils/assets";

const Footer = () => {
  const TRANSLATIONS = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="xs:text-xs m:text-sm bg-brand-black text-white font-light text-center p-4">
      <p>&copy; {currentYear} Flixwatch</p>
      <p className="mt-2">
        {TRANSLATIONS.footer.madeBy}
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

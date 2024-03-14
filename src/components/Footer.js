import useTranslations from "../hooks/useTranslations";
import {MY_BIO_LINK} from "../utils/assets";

const Footer = () => {
  const TRANSLATIONS = useTranslations();

  return (
    <footer className="bg-brand-black text-white font-light text-center p-4">
      <p>&copy; 2024 Flixwatch</p>
      <p>{TRANSLATIONS.footer.madeBy}
        <a rel="noreferrer" className="text-brand-orange hover:underline ml-2" href={MY_BIO_LINK} target="_blank">@keithmchd48</a>
      </p>
    </footer>
  );
};

export default Footer;
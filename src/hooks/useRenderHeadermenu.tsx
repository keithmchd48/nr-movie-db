import { HEADER_MENU } from "utils/assets";
import { NavLink } from "react-router-dom";
import useTranslations from "hooks/useTranslations";
import { type LanguageType } from "utils/translations/types";

const useRenderHeadermenu = () => {
  const TRANSLATIONS: LanguageType = useTranslations();

  const activeClassNames = ({ isActive }: {isActive: boolean}) => {
    return isActive ? "text-white font-normal" : "";
  };

  return HEADER_MENU.map((route, index) => {
    return (
      <li key={index}>
        <NavLink to={route.path} className={activeClassNames}>
          {TRANSLATIONS.headerMenu[route.title]}
        </NavLink>
      </li>
    );
  });
};

export default useRenderHeadermenu;

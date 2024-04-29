import { HEADER_MENU } from "utils/assets";
import { NavLink } from "react-router-dom";
import useTranslations from "hooks/useTranslations";
import { type LanguageType } from "utils/translations/types";
import { MenuRouteInterface } from "utils/assets";

const useRenderHeadermenu = () => {
  const TRANSLATIONS: LanguageType = useTranslations();

  const activeClassNames = ({ isActive }: {isActive: boolean}) => {
    return isActive ? "text-white font-normal" : "";
  };

  const headerMenuTranslation: LanguageType["headerMenu"] = TRANSLATIONS.headerMenu;

  const headerMenuArray = HEADER_MENU.map((route: MenuRouteInterface) => ({
    ...route,
    routeName: headerMenuTranslation[route.title as keyof LanguageType["headerMenu"]]
  }));

  return headerMenuArray.map((route, index: number) => {
    return (
      <li key={index}>
        <NavLink to={route.path} className={activeClassNames}>
          {route.routeName}
        </NavLink>
      </li>
    );
  });
};

export default useRenderHeadermenu;

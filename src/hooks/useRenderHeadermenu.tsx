import { HEADER_MENU } from "utils/assets";
import { NavLink } from "react-router-dom";
import useTranslations from "hooks/useTranslations";
import { type TLanguage } from "utils/translations/types";
import { TMenuRoute, THeaderMenu } from "utils/assets";

const useRenderHeadermenu = () => {
  const TRANSLATIONS: TLanguage = useTranslations();

  const activeClassNames = ({ isActive }: {isActive: boolean}): string => {
    return isActive ? "text-white font-normal" : "";
  };

  const headerMenuTranslation: TLanguage["headerMenu"] = TRANSLATIONS.headerMenu;

  const headerMenuArray: THeaderMenu[] = HEADER_MENU.map((route: TMenuRoute) => ({
    ...route,
    routeName: headerMenuTranslation[route.title as keyof TLanguage["headerMenu"]]
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

import { HEADER_MENU } from "utils/assets";
import { NavLink } from "react-router-dom";
import { TMenuRoute, THeaderMenu } from "utils/assets";
import { useTranslation } from "react-i18next";

const useRenderHeadermenu = () => {
  const { t } = useTranslation();

  const activeClassNames = ({ isActive }: {isActive: boolean}): string => {
    return isActive ? "text-white font-normal" : "";
  };

  const headerMenuArray: THeaderMenu[] = HEADER_MENU.map((route: TMenuRoute) => ({
    ...route,
    routeName: t(route.title)
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

import { HEADER_MENU } from "utils/assets";
import { Link } from "@tanstack/react-router";
import { TMenuRoute, THeaderMenu } from "utils/assets";
import { useTranslation } from "react-i18next";

const useRenderHeadermenu = () => {
  const { t } = useTranslation();

  const headerMenuArray: THeaderMenu[] = HEADER_MENU.map((route: TMenuRoute) => ({
    ...route,
    routeName: t(route.title)
  }));

  return headerMenuArray.map((route, index: number) => {
    return (
      <li key={index}>
        <Link to={route.path} className="text-white font-normal">
          {route.routeName}
        </Link>
      </li>
    );
  });
};

export default useRenderHeadermenu;

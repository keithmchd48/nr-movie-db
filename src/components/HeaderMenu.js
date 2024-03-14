import {MAIN_LOGO, HEADER_MENU, PATHS} from '../utils/assets';
import { NavLink } from 'react-router-dom';
import useTranslations from '../hooks/useTranslations';
import { useSelector } from 'react-redux';

const HeaderMenu = () => {
  const TRANSLATIONS = useTranslations();
  const user = useSelector(store => store.user);

  const activeClassNames = ({ isActive }) => {
    return isActive ? 'text-white font-normal' : '';
  }

  return (
    <div className="xs:hidden m:flex">
      {user && (
        <ul className="xs:text-xs l:text-sm flex items-center gap-4 font-light text-gray-200">
        {HEADER_MENU.map((route, index) => {
          return (
            <li key={index}>
              <NavLink to={route.path} className={activeClassNames}>
                {TRANSLATIONS.headerMenu[route.title]}
              </NavLink>
            </li>
          )
        })}
      </ul>
      )}
    </div>
  );
};

export default HeaderMenu;
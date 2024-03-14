import {HEADER_MENU} from '../utils/assets';
import { NavLink } from 'react-router-dom';
import useTranslations from '../hooks/useTranslations';

const HamburgerMenu = () => {
  const TRANSLATIONS = useTranslations();

  const activeClassNames = ({ isActive }) => {
    return isActive ? 'text-white font-normal' : '';
  }

  return (
    <div className="fixed pt-[56px] xs:flex m:hidden flex-col gap-2 bg-brand-black px-4 py-4 z-30">
      <ul className="xs:text-xs m:text-sm flex flex-col gap-2 font-light text-gray-200">
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
    </div>
  );
};

export default HamburgerMenu;
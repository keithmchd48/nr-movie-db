import {HEADER_MENU} from '../utils/assets';
import { NavLink } from 'react-router-dom';
import useTranslations from '../hooks/useTranslations';

const useRenderHeadermenu = () => {
  const TRANSLATIONS = useTranslations();
  
  const activeClassNames = ({ isActive }) => {
    return isActive ? 'text-white font-normal' : '';
  }

  return HEADER_MENU.map((route, index) => {
    return (
      <li key={index}>
        <NavLink to={route.path} className={activeClassNames}>
          {TRANSLATIONS.headerMenu[route.title]}
        </NavLink>
      </li>
    )
  })
};

export default useRenderHeadermenu;
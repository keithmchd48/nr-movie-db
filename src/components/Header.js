import {useEffect, useState} from 'react';
import {MAIN_LOGO, HEADER_MENU, PATHS} from '../utils/assets';
import { useNavigate, NavLink } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';
import {UPDATE_SEARCH_QUERY} from '../utils/slices/gptSlice';
import ProfileDropdown from './ProfileDropdown';
import SearchComponent from './SearchComponent';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LangSelect from './LangSelect';
import useTranslations from '../hooks/useTranslations';

const Header = () => {
  const user = useSelector(store => store.user);
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const TRANSLATIONS = useTranslations();

  const [scroll, setScroll] = useState(false);
  const addGradient = () => {
    setScroll(window.scrollY > 50);
  };

  const activeClassNames = ({ isActive }) => {
    return isActive ? 'text-white font-normal' : '';
  }

  useEffect(() => {
    window.addEventListener("scroll", addGradient);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user auth changed', user);
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(ADD_USER({uid, email, displayName, photoURL}));
        if (location.pathname !== PATHS.AUTH) {
          navigate(location.pathname);
        } else {
          navigate(PATHS.BROWSE);
        }
      } else {
        dispatch(UPDATE_SEARCH_QUERY(''));
        dispatch(LOGOUT_USER());
        navigate(PATHS.AUTH);
      }
    });

    // When component is unmounted, unsubscribe from the listener
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", addGradient);
    };
  }, []);

  return (
    <div className={`fixed w-screen z-30 flex justify-between items-center px-16 py-3 ${scroll ? 'bg-netflix-black' : 'bg-gradient-to-b from-black'}`}>
      <div className="flex">
        <NavLink to={PATHS.AUTH}>
          <img alt="main_logo" src={MAIN_LOGO} className="h-12"></img>
        </NavLink>
        {user && (
          <ul className="ml-4 text-sm flex items-center gap-4 font-light text-gray-200">
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
      <div className="flex items-center gap-4">
        {user && <SearchComponent />}
        <LangSelect />
        <ProfileDropdown />
      </div>
    </div>
  )
}

export default Header;
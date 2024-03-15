/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {PATHS} from '../utils/assets';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';
import {UPDATE_SEARCH_QUERY} from '../utils/slices/gptSlice';
import {TOGGLE_HAMBURGER_MENU} from '../utils/slices/configSlice';
import ProfileDropdown from './ProfileDropdown';
import SearchComponent from './SearchComponent';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LangSelect from './LangSelect';
import HeaderMenu from './HeaderMenu';
import HamburgerMenu from './HamburgerMenu'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import MainLogo from './MainLogo';

const Header = () => {
  const user = useSelector(store => store.user);
  const hamburgerMenuOpen = useSelector(store => store.config.hamburgerMenuOpen);

  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [scroll, setScroll] = useState(false);
  const addGradient = () => {
    setScroll(window.scrollY > 20);
  };

  const openMenu = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(true));
  };

  const closeMenu = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(false));
  };

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
    <div>
      {user && <HamburgerMenu />}
      <div className={`flex fixed w-screen z-30 justify-between items-center lg:px-16 xs:px-4 py-3 ${scroll ? 'bg-brand-black' : 'bg-gradient-to-b from-black'}`}>
        <div className="flex gap-3 items-center">
          {/*Hamburger Icon*/}
          {user && (
            (!hamburgerMenuOpen && <GiHamburgerMenu onClick={openMenu} className="text-white text-xl xs:block m:hidden" />) 
            || (hamburgerMenuOpen && <FaTimes onClick={closeMenu} className="text-white text-xl xs:block m:hidden" />)
          )}
          <MainLogo />
          <HeaderMenu />
        </div>
        <div className="flex items-center xs:gap-1 l:gap-3">
          {user && <SearchComponent />}
          <LangSelect />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  )
}

export default Header;
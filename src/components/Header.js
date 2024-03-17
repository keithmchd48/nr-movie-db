/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState, useRef} from 'react';
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
import useClickOutside from '../hooks/useClickOutside';

const Header = () => {
  const user = useSelector(store => store.user);
  const hamburgerMenuOpen = useSelector(store => store.config.hamburgerMenuOpen);

  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const hbMenuRef = useRef(null);
  const hbIconRef = useRef(null);

  useClickOutside(hbMenuRef, hbIconRef, () => {
    if (hbMenuRef) {
      dispatch(TOGGLE_HAMBURGER_MENU(false));
    }
  });

  const addGradient = () => {
    setScroll(window.scrollY > 20);
  };

  const openMenu = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(true));
  };

  const closeMenu = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(false));
  };

  const isHamburgerIconVisible = user && !hamburgerMenuOpen;

  const isCloseIconVisible = user && hamburgerMenuOpen;

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
      {<HamburgerMenu innerRef={hbMenuRef} />}
      <div className={`layout-padding flex fixed w-screen z-30 justify-between items-center py-3 ${scroll ? 'bg-brand-black' : 'xs:bg-brand-black l:bg-transparent l:bg-gradient-to-b l:from-brand-black'}`}>
        <div className="flex gap-3 items-center">
          {(
          <>
          {/*Hamburger Icon*/}
            <div ref={hbIconRef} onClick={openMenu} className={`m:hidden text-white text-xl ${isHamburgerIconVisible ? 'xs:block' : 'xs:hidden'}`}>
              <GiHamburgerMenu />
            </div>
          {/*close Icon*/}
            <div onClick={closeMenu} className={`m:hidden text-white text-xl ${isCloseIconVisible ? 'xs:block' : 'xs:hidden'}`}>
              <FaTimes  />
            </div>
          </>
          )}
          <MainLogo />
          <HeaderMenu />
        </div>
        <div className="flex items-center xs:gap-1 l:gap-3">
          <LangSelect />
          {user && <SearchComponent />}
          <ProfileDropdown />
        </div>
      </div>
    </div>
  )
}

export default Header;
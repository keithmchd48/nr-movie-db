import React, {useEffect, useState, useRef} from 'react';
import {MAIN_LOGO, AVATAR, HEADER_ROUTES} from '../utils/assets';
import { useNavigate, NavLink } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';
import useClickOutside from '../hooks/useClickOutside';
import ProfileOptions from './ProfileOptions';
import { GoSearch } from "react-icons/go";
import SearchInput from './SearchInput';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const profileDropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchIcon = useRef(null);

  useClickOutside(profileDropdownRef, null, () => {
    if (isProfileOptionsOpen) {
      setIsProfileOptionsOpen(false);
    }
  });

  useClickOutside(searchInputRef, searchIcon, () => {
    if (isSearchInputVisible) {
      setIsSearchInputVisible(false);
    }
  });

  const toggleProfileOptions = () => {
    setIsProfileOptionsOpen(prev => !prev);
  };

  const toggleSearch = () => {
    console.log('toggleSearch', isSearchInputVisible);
    setIsSearchInputVisible(true);
  };

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
        navigate();
      } else {
        dispatch(LOGOUT_USER());
        navigate('/');
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
        <NavLink to="/browse">
          <img alt="main_logo" src={MAIN_LOGO} className="h-12"></img>
        </NavLink>
        <ul className="ml-4 text-sm flex items-center gap-4 font-light text-gray-200">
          {HEADER_ROUTES.map((route, index) => {
            return (
              <li key={index}>
                <NavLink to={route.path} className={activeClassNames}>{route.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mr-6">
          <div ref={searchIcon}>
            <GoSearch onClick={toggleSearch} className={`text-white text-2xl cursor-pointer ${isSearchInputVisible ? 'hidden' : 'block'}`} />
          </div>
          <div ref={searchInputRef}>
            <SearchInput isVisible={isSearchInputVisible} />
          </div>
        </div>
        {user && (
          <div ref={profileDropdownRef} className="relative">
            <button onClick={toggleProfileOptions} tabIndex="0" className="flex items-center">
              <img alt="avatar" src={user.photoURL || AVATAR} className="w-8 sm:w-8 cursor-pointer"></img>
            </button>
            <ProfileOptions isOpen={isProfileOptionsOpen} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;
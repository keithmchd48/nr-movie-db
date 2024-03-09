import React, {useEffect, useState, useRef} from 'react';
import {MAIN_LOGO, AVATAR} from '../utils/assets';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';
import useClickOutside from '../hooks/useClickOutside';
import ProfileOptions from './ProfileOptions';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  useClickOutside(profileDropdownRef, () => {
    if (isProfileOptionsOpen) {
      setIsProfileOptionsOpen(false);
    }
  });

  const toggleProfileOptions = () => {
    setIsProfileOptionsOpen(prev => !prev);
  };

  const [scroll, setScroll] = useState(false);
  const addGradient = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", addGradient);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user auth changed', user);
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(ADD_USER({uid, email, displayName, photoURL}));
        navigate('/browse');
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
    <div className={`fixed w-screen z-10 flex justify-between items-center px-4 ${scroll ? 'bg-netflix-black' : 'bg-gradient-to-b from-black'}`}>
      <img alt="main_logo" src={MAIN_LOGO} className="h-16"></img>
      {user && (
        <div ref={profileDropdownRef} className="relative">
          <button onClick={toggleProfileOptions} tabIndex="0">
            <img alt="avatar" src={user.photoURL || AVATAR} className="h-8 w-8 sm:h-8 sm:w-8 cursor-pointer"></img>
          </button>
          <ProfileOptions isOpen={isProfileOptionsOpen} />
        </div>
      )}
    </div>
  )
}

export default Header;
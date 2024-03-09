import React, {useEffect, useState, useRef} from 'react';
import {MAIN_LOGO, AVATAR} from '../utils/assets';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {signOut, onAuthStateChanged} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';
import useClickOutside from '../hooks/useClickOutside';
import { VscAccount } from "react-icons/vsc";


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
  
  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
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
    };
  }, []);

  return (
    <div className="absolute w-screen z-10 flex justify-between items-center bg-gradient-to-b from-black px-4">
      <img alt="main_logo" src={MAIN_LOGO} className="h-16"></img>
      {user && (
        <div ref={profileDropdownRef} className="relative">
          <button onClick={toggleProfileOptions} tabIndex="0">
            <img alt="avatar" src={user.photoURL || AVATAR} className="h-8 w-8 sm:h-8 sm:w-8 cursor-pointer"></img>
          </button>
          <div className={`absolute right-0 mt-2 w-48 bg-black shadow-lg text-white border-[0.5px] border-gray-400 ${isProfileOptionsOpen ? 'block' : 'hidden'}`}>
            <div className="">
              <div className="p-2 flex items-center">
                <VscAccount className="mr-2"/> {user.displayName && <p>{user.displayName}</p>}
              </div>
              <div className="p-2 border-t-[0.5px]">
                <button onClick={handleLogout} className="block w-full hover:underline align-middle text-center">Sign out</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
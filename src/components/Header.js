import React, {useEffect, useState} from 'react';
import {MAIN_LOGO, AVATAR} from '../utils/assets';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {signOut, onAuthStateChanged} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);
  
  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };

  const openProfileOptions = () => {
    setIsProfileOptionsOpen(prev => !prev);
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
    <div className="px-2 flex justify-between items-center bg-gradient-to-b from-black">
      <img alt="main_logo" src={MAIN_LOGO} className="h-16"></img>
      {user && (
        <div className="relative">
          <button onClick={openProfileOptions} tabIndex="0">
            <img alt="avatar" src={user.photoURL || AVATAR} className="h-8 w-8 sm:h-8 sm:w-8 cursor-pointer"></img>
          </button>
          {isProfileOptionsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black shadow-lg text-white border-[1px] border-gray-400 opacity-80">
              <div className="p-2">
                {user.displayName && <p>{user.displayName}</p>}
                <button onClick={handleLogout} className="block w-full text-left py-2 hover:underline">Sign out</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header
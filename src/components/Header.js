import React, {useEffect, useState} from 'react';
import {MAIN_LOGO, AVATAR} from '../utils/assets';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/firebase';
import {signOut, onAuthStateChanged} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, addUser } from '../utils/slices/userSlice';

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
    setIsProfileOptionsOpen(!isProfileOptionsOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user auth changed', user);
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid, email, displayName, photoURL}));
        navigate('/browse');
      } else {
        dispatch(logoutUser());
        navigate('/');
      }
    });

    // When component is unmounted, unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="px-2 flex justify-between items-center">
      <img alt="main_logo" src={MAIN_LOGO} className="h-16"></img>
      {user && (
        <div className="relative">
          <img onClick={openProfileOptions} alt="avatar" src={user.photoURL || AVATAR} className="h-8 w-8 sm:h-8 sm:w-8 cursor-pointer"></img>
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
import React, {useEffect} from 'react';
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
    <div className="px-2 py-2 sm:py-4 flex justify-between items-center">
      <img alt="main_logo" src={MAIN_LOGO} className="h-16 sm:h-20"></img>
      {user && (
        <div className="flex flex-col items-end">
          <img alt="avatar" src={user.photoURL || AVATAR} className="h-8 w-8 sm:h-8 sm:w-8"></img>
          {user.displayName && <p className="text-white text-sm">{user.displayName}</p>}
          <div className="text-right">
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign out</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
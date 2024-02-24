import React from 'react'
import assets from '../utils/assets'
import { useNavigate } from 'react-router-dom'
import auth from '../utils/firebase';
import {signOut} from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error.message);
      navigate('/error');
    });
  };

  return (
    <div className="px-2 py-2 sm:py-4 flex justify-between items-center">
      <img alt="main_logo" src={assets.mainLogo} className="h-16 sm:h-20"></img>
      {
        user && (<div className="text-right">
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign out</button>
        {user.displayName && <p className="text-white text-lg">{user.displayName}</p>}
      </div>)
      }
    </div>
  )
}

export default Header
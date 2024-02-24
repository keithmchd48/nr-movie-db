import React from 'react'
import assets from '../utils/assets'
import { useNavigate } from 'react-router-dom'
import auth from '../utils/firebase';
import {signOut} from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error.message);
      navigate('/error');
    });
  };

  return (
    <div className="px-4 py-4 sm:py-6 flex justify-between items-center">
      <img alt="main_logo" src={assets.mainLogo} className="h-16 sm:h-20"></img>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign out</button>
    </div>
  )
}

export default Header
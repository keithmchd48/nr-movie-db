import React, {useEffect, useState} from 'react';
import {MAIN_LOGO, HEADER_ROUTES} from '../utils/assets';
import { useNavigate, NavLink } from 'react-router-dom';
import auth from '../utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER, ADD_USER } from '../utils/slices/userSlice';
import ProfileDropdown from './ProfileDropdown';
import SearchComponent from './SearchComponent';


const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
        <SearchComponent />
        <ProfileDropdown />
      </div>
    </div>
  )
}

export default Header;
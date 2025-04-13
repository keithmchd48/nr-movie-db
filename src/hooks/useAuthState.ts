import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import auth from "utils/firebase";
import { PATHS } from "utils/assets";
import { LOGOUT_USER, ADD_USER } from "store/slices/userSlice";
import { UPDATE_SEARCH_QUERY } from "store/slices/searchSlice";

export const useAuthState = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Handle auth state changes
  useEffect(() => {
    console.log('Auth state hook running');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(ADD_USER({ uid, email, displayName, photoURL }));
        
        // Navigation logic
        const allowedPaths = Object.values(PATHS).filter(
          path => path !== PATHS.AUTH && path !== PATHS.LOGIN
        );
        
        if (allowedPaths.includes(location.pathname)) {
          navigate(location.pathname);
        } else {
          navigate(PATHS.BROWSE);
        }
      } else {
        // User is signed out
        dispatch(UPDATE_SEARCH_QUERY(""));
        dispatch(LOGOUT_USER());
      }
    });

    // Clean up subscription
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate, location.pathname]);
  
  // Reset search query when location changes
  useEffect(() => {
    dispatch(UPDATE_SEARCH_QUERY(""));
  }, [location, dispatch]);
};
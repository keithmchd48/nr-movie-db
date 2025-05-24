import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { PATHS } from "utils/assets";
import { LOGOUT_USER, ADD_USER } from "store/slices/userSlice";
import { UPDATE_SEARCH_QUERY } from "store/slices/searchSlice";

export const useAuthState = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Handle auth state changes
  useEffect(() => {
    if (isLoading) return;
    if (isAuthenticated && user) {
      const uid = user.sub || "";
      const email = user.email || null;
      const displayName = user.name || null;
      const photoURL = user.picture || null;
      dispatch(ADD_USER({ uid, email, displayName, photoURL }));
      const allowedPaths = Object.values(PATHS).filter(
        path => path !== PATHS.AUTH && path !== PATHS.LOGIN
      );
      if (allowedPaths.includes(location.pathname)) {
        navigate(location.pathname);
      } else {
        navigate(PATHS.BROWSE);
      }
    } else if (!isAuthenticated && !isLoading) {
      dispatch(UPDATE_SEARCH_QUERY(""));
      dispatch(LOGOUT_USER());
      navigate(PATHS.LOGIN);
    }
  }, [dispatch, navigate, location.pathname, isAuthenticated, isLoading, user]);

  // Reset search query when location changes
  useEffect(() => {
    dispatch(UPDATE_SEARCH_QUERY(""));
  }, [location, dispatch]);
};
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, RefObject } from "react";
import { PATHS } from "utils/assets";
import { useNavigate } from "react-router-dom";
import auth from "utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LOGOUT_USER, ADD_USER, TUser } from "store/slices/userSlice";
import { UPDATE_SEARCH_QUERY } from "store/slices/searchSlice";
import { TOGGLE_HAMBURGER_MENU } from "store/slices/configSlice";
import ProfileDropdown from "components/profile/ProfileDropdown";
import SearchComponent from "components/search/SearchComponent";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import LangSelect from "components/translations/LangSelect";
import ScrollContainer from "components/header/ScrollContainer";
import HeaderMenu from "components/header/HeaderMenu";
import HamburgerIcon from "components/hamburger/HamburgerIcon";
import HamburgerMenu from "components/hamburger/HamburgerMenu";
import XIcon from "components/hamburger/XIcon";
import MainLogo from "components/units/MainLogo";
import useClickOutside from "hooks/utilities/useClickOutside";
import useDocumentTitle from "hooks/useDocumentTitle";
import { RootState } from "store/appStore";

const Header = () => {
  console.log('Header  render');
  useDocumentTitle();
  const user: TUser | null = useSelector((store: RootState) => store.user);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const hbMenuRef: RefObject<HTMLDivElement> = useRef(null);
  const hbIconRef: RefObject<HTMLDivElement> = useRef(null);

  useClickOutside(hbMenuRef, hbIconRef, () => {
    if (hbMenuRef) {
      dispatch(TOGGLE_HAMBURGER_MENU(false));
    }
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(ADD_USER({ uid, email, displayName, photoURL }));
        const allowedPaths = Object.values(PATHS).filter(path => path !== PATHS.AUTH && path !== PATHS.LOGIN);
        if (allowedPaths.includes(location.pathname)) {
          navigate(location.pathname);
        } else {
          navigate(PATHS.BROWSE);
        }
      } else {
        dispatch(UPDATE_SEARCH_QUERY(""));
        dispatch(LOGOUT_USER());
      }
    });

    // When component is unmounted, unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    dispatch(UPDATE_SEARCH_QUERY(""));
  }, [location]);

  return (
    <div>
      <HamburgerMenu innerRef={hbMenuRef} />
      <ScrollContainer>
        <div className="flex gap-3 items-center">
          <>
            {/*Hamburger Icon*/}
            <HamburgerIcon ref={hbIconRef} />
            {/*close Icon*/}
            <XIcon />
          </>
          <MainLogo />
          <HeaderMenu />
        </div>
        <div className="flex items-center xs:gap-1 l:gap-3">
          <LangSelect />
          {user && <SearchComponent />}
          <ProfileDropdown />
        </div>  
      </ScrollContainer>
    </div>
  );
};

export default Header;

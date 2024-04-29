/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { PATHS } from "utils/assets";
import { useNavigate } from "react-router-dom";
import auth from "utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGOUT_USER, ADD_USER } from "store/slices/userSlice";
import { UPDATE_SEARCH_QUERY } from "store/slices/searchSlice";
import { TOGGLE_HAMBURGER_MENU } from "store/slices/configSlice";
import ProfileDropdown from "components/profile/ProfileDropdown";
import SearchComponent from "components/search/SearchComponent";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LangSelect from "components/translations/LangSelect";
import HeaderMenu from "components/header/HeaderMenu";
import HamburgerMenu from "components/hamburger/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import MainLogo from "components/units/MainLogo";
import useClickOutside from "hooks/utilities/useClickOutside";
import useDocumentTitle from "hooks/useDocumentTitle";
import { RootState } from "store/appStore";

const Header = () => {
  useDocumentTitle();
  const user = useSelector((store: RootState) => store.user);
  const hamburgerMenuOpen = useSelector(
    (store: RootState) => store.config.hamburgerMenuOpen
  );

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const hbMenuRef = useRef(null);
  const hbIconRef = useRef(null);

  useClickOutside(hbMenuRef, hbIconRef, () => {
    if (hbMenuRef) {
      dispatch(TOGGLE_HAMBURGER_MENU(false));
    }
  });

  const addGradient = () => {
    setScroll(window.scrollY > 20);
  };

  const openMenu = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(true));
  };

  const closeMenu = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(false));
  };

  const isHamburgerIconVisible: boolean = !!user && !hamburgerMenuOpen;

  const isCloseIconVisible: boolean = !!user && hamburgerMenuOpen;

  useEffect(() => {
    window.addEventListener("scroll", addGradient);

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
        navigate(PATHS.LOGIN);
      }
    });

    // When component is unmounted, unsubscribe from the listener
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", addGradient);
    };
  }, []);

  useEffect(() => {
    dispatch(UPDATE_SEARCH_QUERY(""));
  }, [location]);

  return (
    <div>
      {<HamburgerMenu innerRef={hbMenuRef} />}
      <div
        className={`layout-padding flex fixed w-screen z-30 justify-between items-center py-3 ${
          scroll
            ? "bg-brand-black"
            : "xs:bg-brand-black l:bg-transparent l:bg-gradient-to-b l:from-brand-black"
        }`}
      >
        <div className="flex gap-3 items-center">
          {
            <>
              {/*Hamburger Icon*/}
              <div
                ref={hbIconRef}
                onClick={openMenu}
                className={`sm:hidden text-white text-xl ${
                  isHamburgerIconVisible ? "xs:block" : "xs:hidden"
                }`}
              >
                <GiHamburgerMenu />
              </div>
              {/*close Icon*/}
              <div
                onClick={closeMenu}
                className={`sm:hidden text-white text-xl ${
                  isCloseIconVisible ? "xs:block" : "xs:hidden"
                }`}
              >
                <FaTimes />
              </div>
            </>
          }
          <MainLogo />
          <HeaderMenu />
        </div>
        <div className="flex items-center xs:gap-1 l:gap-3">
          <LangSelect />
          {user && <SearchComponent />}
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;

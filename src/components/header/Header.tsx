/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, RefObject } from "react";
import { TUser } from "store/slices/userSlice";
import { TOGGLE_HAMBURGER_MENU } from "store/slices/configSlice";
import ProfileDropdown from "components/profile/ProfileDropdown";
import SearchComponent from "components/search/SearchComponent";
import { useSelector, useDispatch } from "react-redux";
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

const RenderSearch = () => {
  const user: TUser | null = useSelector((store: RootState) => store.user);
  return (
    user && <SearchComponent />
  );
};

const Header = () => {
  console.log('Header  render');
  useDocumentTitle();

  const dispatch = useDispatch();
  
  const hbMenuRef: RefObject<HTMLDivElement | null> = useRef(null);
  const hbIconRef: RefObject<HTMLDivElement | null> = useRef(null);

  useClickOutside(hbMenuRef as RefObject<HTMLDivElement>, hbIconRef as RefObject<HTMLDivElement>, () => {
    if (hbMenuRef) {
      dispatch(TOGGLE_HAMBURGER_MENU(false));
    }
  });

  return (
    <div>
      <HamburgerMenu innerRef={hbMenuRef as RefObject<HTMLDivElement>} />
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
          <RenderSearch />
          <ProfileDropdown />
        </div>  
      </ScrollContainer>
    </div>
  );
};

export default Header;

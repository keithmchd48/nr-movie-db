import { forwardRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { TUser } from "store/slices/userSlice";
import { RootState } from "store/appStore";
import { TOGGLE_HAMBURGER_MENU } from "store/slices/configSlice";

const HamburgerIcon = forwardRef<HTMLDivElement>((_props, ref) => {
  const dispatch = useDispatch();
  const user: TUser | null = useSelector((store: RootState) => store.user);
  const hamburgerMenuOpen: boolean = useSelector(
    (store: RootState) => store.config.hamburgerMenuOpen
  );
  const isHamburgerIconVisible: boolean = !!user && !hamburgerMenuOpen;
  const openMenu: () => void = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(true));
  };
  return (
    <div
      ref={ref}
      onClick={openMenu}
        className={`sm:hidden text-white text-xl ${
        isHamburgerIconVisible ? "xs:block" : "xs:hidden"
      }`}
    >
      <GiHamburgerMenu />
    </div>
  );
});

export default HamburgerIcon;
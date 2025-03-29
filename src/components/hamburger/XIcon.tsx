import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { TUser } from "store/slices/userSlice";
import { RootState } from "store/appStore";
import { TOGGLE_HAMBURGER_MENU } from "store/slices/configSlice";

const CloseIcon = () => {
  const user: TUser | null = useSelector((store: RootState) => store.user);
  const hamburgerMenuOpen: boolean = useSelector(
    (store: RootState) => store.config.hamburgerMenuOpen
  );
  const isCloseIconVisible: boolean = !!user && hamburgerMenuOpen;
  const dispatch = useDispatch();
  const closeMenu: () => void = () => {
    dispatch(TOGGLE_HAMBURGER_MENU(false));
  };
  return (
    <div
      onClick={closeMenu}
      className={`sm:hidden text-white text-xl ${
        isCloseIconVisible ? "xs:block" : "xs:hidden"
      }`}
    >
      <FaTimes />
    </div>
  );
};

export default CloseIcon;
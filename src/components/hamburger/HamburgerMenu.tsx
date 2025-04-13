import useRenderHeadermenu from "hooks/useRenderHeadermenu";
import { useSelector } from "react-redux";
import { AVATAR } from "utils/assets";
import auth from "utils/firebase";
import { signOut } from "firebase/auth";
import { RootState } from "store/appStore";
import { TUser } from "store/slices/userSlice";
import { useTranslation } from "react-i18next";

const HamburgerMenu = ({ innerRef }: { innerRef: React.RefObject<HTMLDivElement> }) => {
  const menuItems = useRenderHeadermenu();
  const { t } = useTranslation();
  const hamburgerMenuOpen: boolean = useSelector(
    (store: RootState) => store.config.hamburgerMenuOpen
  );
  const user: TUser | null = useSelector((store: RootState) => store.user);

  const isHamburgerMenuOpen = user && hamburgerMenuOpen;

  const handleLogout: () => void = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div
      ref={innerRef}
      className={`${
        isHamburgerMenuOpen ? "xs:flex" : "xs:hidden"
      } xs:text-base fixed pt-[56px] sm:hidden flex-col gap-1 bg-brand-black px-4 py-4 z-30`}
    >
      {user && (
        <div className="flex items-center">
          <img
            alt="avatar"
            src={user.photoURL || AVATAR}
            className="xs:w-6 l:w-8 cursor-pointer"
          ></img>
          {user.displayName && (
            <p className="text-white text-sm ml-2">{user.displayName}</p>
          )}
        </div>
      )}
      <button
        onClick={handleLogout}
        className="w-full py-2 text-white text-sm text-start hover:underline border-b-[0.5px]"
      >
        {t("signOut")}
      </button>
      <ul className="flex flex-col gap-2 font-light text-gray-300">
        {menuItems}
      </ul>
    </div>
  );
};

export default HamburgerMenu;

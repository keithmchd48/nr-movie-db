import useRenderHeadermenu from "hooks/useRenderHeadermenu";
import { useSelector } from "react-redux";
import { AVATAR } from "utils/assets";
import { useAuth0 } from "@auth0/auth0-react";
import { RootState } from "store/appStore";
import { TUser } from "store/slices/userSlice";
import { useTranslation } from "react-i18next";

const User = () => {
  const user: TUser | null = useSelector((store: RootState) => store.user);
  return (
    <>
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
    </>
  );
};

const HamburgerMenu = ({ innerRef }: { innerRef: React.RefObject<HTMLDivElement> }) => {
  const menuItems = useRenderHeadermenu();
  const { t } = useTranslation();
  const hamburgerMenuOpen: boolean = useSelector(
    (store: RootState) => store.config.hamburgerMenuOpen
  );
  const user: TUser | null = useSelector((store: RootState) => store.user);

  const isHamburgerMenuOpen = user && hamburgerMenuOpen;

  const { logout } = useAuth0();

  const handleLogout: () => void = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div
      ref={innerRef}
      className={`${
        isHamburgerMenuOpen ? "xs:flex" : "xs:hidden"
      } xs:text-base fixed pt-[56px] sm:hidden flex-col gap-1 bg-brand-black px-4 py-4 z-30`}
    >
      <User />
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

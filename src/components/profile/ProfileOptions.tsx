import { VscAccount } from "react-icons/vsc";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import { TUser } from "store/slices/userSlice";
import { useTranslation } from "react-i18next";

const LogOut = () => {
  const user: TUser | null = useSelector((store: RootState) => store.user);

  return (
    <div className="p-2 flex items-center text-nowrap	">
      <VscAccount className="mr-2" />
      
      {user && user.displayName && <p>{user.displayName}</p>}
    </div>
  );
};

const ProfileOptions = ({ isOpen }: {isOpen: boolean}) => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <div
      className={`absolute right-0 mt-2 bg-brand-black shadow-lg text-white border-[0.5px] border-gray-400 xs:text-xs m:text-base ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <LogOut />
      <div className="p-2 border-t-[0.5px]">
        <button
          onClick={handleLogout}
          className="block w-full hover:underline align-middle text-center"
        >
          {t("signOut")}
        </button>
      </div>
    </div>
  );
};

export default ProfileOptions;

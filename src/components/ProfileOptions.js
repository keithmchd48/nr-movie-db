import { VscAccount } from "react-icons/vsc";
import auth from '../utils/firebase';
import {signOut} from 'firebase/auth';
import { useSelector } from 'react-redux';
import useTranslations from '../hooks/useTranslations';

const ProfileOptions = ({isOpen}) => {
  const user = useSelector(store => store.user);
  const TRANSLATIONS = useTranslations();

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <div className={`absolute right-0 mt-2 bg-brand-black shadow-lg text-white border-[0.5px] border-gray-400 xs:text-xs m:text-base ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-2 flex items-center text-nowrap	">
        <VscAccount className="mr-2"/> {user.displayName && <p>{user.displayName}</p>}
      </div>
      <div className="p-2 border-t-[0.5px]">
        <button onClick={handleLogout} className="block w-full hover:underline align-middle text-center">
          {TRANSLATIONS.headerMenu.profileDropdown.signOut}
        </button>
      </div>
    </div>
  );
};

export default ProfileOptions;
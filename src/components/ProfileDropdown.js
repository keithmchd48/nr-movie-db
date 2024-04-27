import { AVATAR } from "utils/assets";
import ProfileOptions from "components/ProfileOptions";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import useClickOutside from "hooks/useClickOutside";

const ProfileDropdown = () => {
  const user = useSelector((store) => store.user);
  const profileDropdownRef = useRef(null);
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);

  useClickOutside(profileDropdownRef, null, () => {
    if (isProfileOptionsOpen) {
      setIsProfileOptionsOpen(false);
    }
  });

  const toggleProfileOptions = () => {
    setIsProfileOptionsOpen((prev) => !prev);
  };

  return (
    <div className="xs:hidden sm:block">
      {user && (
        <div ref={profileDropdownRef} className="relative">
          <button
            onClick={toggleProfileOptions}
            tabIndex="0"
            className="flex items-center"
          >
            <img
              alt="avatar"
              src={user.photoURL || AVATAR}
              className="xs:w-6 l:w-8 cursor-pointer"
            ></img>
          </button>
          <ProfileOptions isOpen={isProfileOptionsOpen} />
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

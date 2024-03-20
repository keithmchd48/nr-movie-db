import { useSelector } from 'react-redux';
import useRenderHeadermenu from '../hooks/useRenderHeadermenu';

const HeaderMenu = () => {
  const menuItems = useRenderHeadermenu();
  const user = useSelector(store => store.user);

  return (
    <div className="xs:hidden sm:flex">
      {user && (
        <ul className="xs:text-xs l:text-base flex items-center xs:gap-2 l:gap-3 sm:gap-4 font-light text-gray-200">
          {menuItems}
        </ul>
      )}
    </div>
  );
};

export default HeaderMenu;
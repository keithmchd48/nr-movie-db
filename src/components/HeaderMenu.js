import { useSelector } from 'react-redux';
import useRenderHeadermenu from '../hooks/useRenderHeadermenu';

const HeaderMenu = () => {
  const menuItems = useRenderHeadermenu();
  const user = useSelector(store => store.user);

  return (
    <div className="xs:hidden m:flex">
      {user && (
        <ul className="xs:text-xs m:text-sm l:text-base flex items-center gap-4 font-light text-gray-200">
          {menuItems}
        </ul>
      )}
    </div>
  );
};

export default HeaderMenu;
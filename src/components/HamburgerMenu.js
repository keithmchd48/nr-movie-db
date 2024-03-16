import useRenderHeadermenu from '../hooks/useRenderHeadermenu';
import { useSelector } from 'react-redux';

const HamburgerMenu = ({innerRef}) => {
  const menuItems = useRenderHeadermenu();
  const hamburgerMenuOpen = useSelector(store => store.config.hamburgerMenuOpen);
  const user = useSelector(store => store.user);

  const isHamburgerMenuOpen = user && hamburgerMenuOpen;
  
  return (
    <div ref={innerRef} className={`${isHamburgerMenuOpen ? 'xs:flex' : 'xs:hidden'} fixed pt-[56px] m:hidden flex-col gap-2 bg-brand-black px-4 py-4 z-30`}>
      <ul className="xs:text-lg flex flex-col gap-2 font-light text-gray-300">
        {menuItems}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
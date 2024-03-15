import useRenderHeadermenu from '../hooks/useRenderHeadermenu';

const HamburgerMenu = () => {
  const menuItems = useRenderHeadermenu();
  
  return (
    <div className="fixed pt-[56px] xs:flex m:hidden flex-col gap-2 bg-brand-black px-4 py-4 z-30">
      <ul className="xs:text-xs m:text-sm flex flex-col gap-2 font-light text-gray-200">
        {menuItems}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
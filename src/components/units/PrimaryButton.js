const PrimaryButton = ({ className, children, onClick }) => {
  return (
    <button
      className={`${className} xs:text-xs xs:p-1 xs:px-2 s:text-sm s:p-2 s:px-4 m:text-lg flex items-center rounded font-semibold cursor-pointer hover:bg-opacity-85`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

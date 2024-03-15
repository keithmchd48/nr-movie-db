const PrimaryButton = ({className, children, onClick}) => {
  return (
    <button
      className={`${className} xs:text-sm xs:p-2 xs:px-4 s:text-base s:p-3 s:px-6 flex items-center rounded font-semibold cursor-pointer hover:bg-opacity-85`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
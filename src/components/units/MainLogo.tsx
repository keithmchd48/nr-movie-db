import { PATHS, MAIN_LOGO } from "utils/assets";
import { NavLink } from "react-router-dom";

const MainLogo = () => {
  return (
    <NavLink to={PATHS.AUTH}>
      <img
        data-testid="main-logo-image"
        alt="main_logo"
        src={MAIN_LOGO}
        className="xs:max-w-32 sm:max-w-52"
      ></img>
    </NavLink>
  );
};

export default MainLogo;

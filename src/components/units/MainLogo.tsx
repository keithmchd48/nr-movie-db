import { PATHS, MAIN_LOGO } from "utils/assets";
import { Link } from "@tanstack/react-router";

const MainLogo = () => {
  console.log('MainLogo render');
  return (
    <Link to={PATHS.AUTH}>
      <img
        data-testid="main-logo-image"
        alt="main_logo"
        src={MAIN_LOGO}
        className="xs:max-w-32 sm:max-w-52"
      ></img>
    </Link>
  );
};

export default MainLogo;

import { Outlet } from "react-router-dom";
import { useAuthState } from "hooks/useAuthState";

const RootLayout = () => {
  useAuthState();
  return <Outlet />;
};

export default RootLayout; 
import { TUser } from "store/slices/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from "utils/assets";

const ProtectedRoute = () => {
  const user: TUser | null = useSelector((store: RootState) => store.user);
  if (!user) {
    return <Navigate to={PATHS.LOGIN} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
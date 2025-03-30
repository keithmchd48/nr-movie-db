import { TUser } from "store/slices/userSlice";
import LoadingPage from "components/units/LoadingPage";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from "utils/assets";
import { Suspense } from "react";

const ProtectedRoute = () => {
  const user: TUser | null = useSelector((store: RootState) => store.user);
  if (!user) {
    return <Navigate to={PATHS.LOGIN} />;
  }
  return (
    <Suspense fallback={<LoadingPage/>}>
      <Outlet />
    </Suspense>
  );
}

export default ProtectedRoute;
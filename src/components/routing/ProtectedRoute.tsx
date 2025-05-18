import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "components/units/LoadingPage";
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from "react";
import MainLayout from "components/layouts/MainLayout";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return null; // loginWithRedirect will handle redirect
  }

  return (
    <MainLayout>
      <Suspense fallback={<LoadingPage/>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export default ProtectedRoute;
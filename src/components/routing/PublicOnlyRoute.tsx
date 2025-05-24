import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { PATHS } from "utils/assets";
import React from "react";

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return null; // or a spinner

  if (isAuthenticated) {
    return <Navigate to={PATHS.BROWSE} replace />;
  }

  return <>{children}</>;
};

export default PublicOnlyRoute; 
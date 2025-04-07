import ProtectedRoute from "components/routing/ProtectedRoute";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { PATHS } from "utils/assets";
import { lazy } from 'react';

const Browse = lazy(() => import("pages/Browse"))
const Movies = lazy(() => import("pages/Movies"))
const TVShows = lazy(() => import("pages/TVShows"))
const AuthPage = lazy(() => import("pages/AuthPage"))

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: PATHS.LOGIN, element: <AuthPage /> },
    { path: PATHS.AUTH, element: <Navigate to={PATHS.LOGIN} replace /> },
    {
      element: <ProtectedRoute />,
      children: [
        { path: "*", element: <Browse />},
        { path: PATHS.BROWSE, element: <Browse /> },
        { path: PATHS.MOVIES, element: <Movies /> },
        { path: PATHS.SHOWS, element: <TVShows /> },
      ],
    },
    { path: PATHS.ERROR, element: <h1>Error</h1> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

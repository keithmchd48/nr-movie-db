import ProtectedRoute from "components/routing/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "utils/assets";
import { lazy } from 'react';
import PublicOnlyRoute from "components/routing/PublicOnlyRoute";
import RootLayout from "components/routing/RootLayout";

const Browse = lazy(() => import("pages/Browse"))
const Movies = lazy(() => import("pages/Movies"))
const TVShows = lazy(() => import("pages/TVShows"))
const AuthPage = lazy(() => import("pages/AuthPage"))

const Body = () => {
  console.log('Body render');
  const appRouter = createBrowserRouter([
    {
      element: <RootLayout />, // Top-level layout for auth state
      children: [
        {
          path: PATHS.AUTH,
          element: (
            <PublicOnlyRoute>
              <AuthPage />
            </PublicOnlyRoute>
          ),
        },
        {
          path: PATHS.LOGIN,
          element: (
            <PublicOnlyRoute>
              <AuthPage />
            </PublicOnlyRoute>
          ),
        },
        {
          element: <ProtectedRoute />, // All children require auth
          children: [
            { path: PATHS.BROWSE, element: <Browse /> },
            { path: PATHS.MOVIES, element: <Movies /> },
            { path: PATHS.SHOWS, element: <TVShows /> },
            { path: "*", element: <Browse /> },
          ],
        },
        { path: PATHS.ERROR, element: <h1>Error</h1> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

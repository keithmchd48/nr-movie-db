import AuthPage from "components/pages/AuthPage";
import Browse from "components/pages/Browse";
import TVShows from "components/pages/TVShows";
import Movies from "components/pages/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "utils/assets";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "*", element: <Browse />},
    { path: PATHS.LOGIN, element: <AuthPage /> },
    { path: PATHS.AUTH, element: <AuthPage /> },
    { path: PATHS.BROWSE, element: <Browse /> },
    { path: PATHS.SHOWS, element: <TVShows /> },
    { path: PATHS.MOVIES, element: <Movies /> },
    { path: PATHS.ERROR, element: <h1>Error</h1> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;


import AuthPage from './pages/AuthPage';
import Browse from './pages/Browse';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: '/', element: <AuthPage /> },
    { path: '/browse', element: <Browse /> },
    { path: '/shows', element: <TVShows /> },
    { path: '/movies', element: <Movies /> },
    { path: '/error', element: <h1>Error</h1>}
  ]);


  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
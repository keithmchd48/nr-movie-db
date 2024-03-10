
import AuthPage from './pages/AuthPage'
import Browse from './pages/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: '/', element: <AuthPage /> },
    { path: '/browse', element: <Browse /> },
    { path: '/error', element: <h1>Error</h1>}
  ]);


  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
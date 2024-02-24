import {useEffect} from 'react'
import AuthPage from './AuthPage'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { authStateChangedListener } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { logoutUser, signInUser } from '../utils/slices/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    { path: '/', element: <AuthPage /> },
    { path: '/browse', element: <Browse /> }
  ]);

  useEffect(() => {
    let user = authStateChangedListener();
    console.log('user auth changed login', user);
    if (user) {
      dispatch(signInUser({}));
    } else {
      console.log('user auth changed logout', user);
      dispatch(logoutUser());
    }
  }, []);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
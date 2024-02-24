import {useEffect} from 'react'
import AuthPage from './AuthPage'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import auth from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logoutUser, addUser } from '../utils/slices/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    { path: '/', element: <AuthPage /> },
    { path: '/browse', element: <Browse /> },
    { path: '/error', element: <h1>Error</h1>}
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user auth changed', user);
      if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
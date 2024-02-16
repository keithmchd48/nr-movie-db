import React from 'react'
import AuthPage from './AuthPage'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: '/', element: <AuthPage /> },
    { path: '/browse', element: <Browse /> }
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/1.Home/Home.tsx';
import About from '../pages/2.About/About.tsx';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

const router = createBrowserRouter(routes);
const AppRouter: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;

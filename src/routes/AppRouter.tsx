import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/1.Home/Home.tsx';
import About from '../pages/2.About/About.tsx';
import Skill from '../pages/3.Skill/Skill.tsx';
import Experience from '../pages/4.Experience/experience.tsx';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skill',
    element: <Skill />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
];

const router = createBrowserRouter(routes);
const AppRouter: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;

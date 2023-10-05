import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import PublicRoutes from 'authentication/PublicRoutes';
const AuthLogin = Loadable(lazy(() => import('../views/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/Register')));

// ==============================|| AUTHENTICATION ROUTES ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: (
        <PublicRoutes>
          <AuthLogin />
        </PublicRoutes>
      )
    },
    {
      path: '/register',
      element: (
        <PublicRoutes>
          <AuthRegister />
        </PublicRoutes>
      )
    }
  ]
};

export default AuthenticationRoutes;

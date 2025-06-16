import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import PublicLayout from 'layouts/PublicLayout';
import { RoutePath } from 'shared/constants/RouteConst';
import LoginView from './views/Login';
import RegisterView from './views/Register';

// TODO: turn on lazy after finding a way to keep motion smooth on transition
// const LoginView = lazy(() => import("./views/Login"));
// const RegisterView = lazy(() => import("./views/Register"));
// const ForgetPasswordView = lazy(() => import("./views/ForgetPassword"));
// const ResetPasswordView = lazy(() => import("./views/ResetPassword"));

// const LoginView = lazy(() => import("./views/Login"));
// const RegisterView = lazy(() => import("./views/Register"));
// const ForgetPasswordView = lazy(() => import("./views/ForgetPassword"));
// const ResetPasswordView = lazy(() => import("./views/ResetPassword"));

export const AuthRoutes = [
  {
    path: RoutePath.Auth,
    element: <PublicLayout />,
    children: [
      {
        exact: true,
        path: '',
        element: <Navigate to={RoutePath.Login} replace={true} />,
      },
      {
        path: RoutePath.Login,
        element: <LoginView />,
      },
      {
        path: RoutePath.Register,
        element: <RegisterView />,
      },
    ],
  },
];

export * from './storage/index';

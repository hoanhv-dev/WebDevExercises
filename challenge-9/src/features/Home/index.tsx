import { UserRole } from '@features/Auth/constants';
import PrivateLayout from '@layouts/PrivateLayout';
import { lazy } from 'react';
import ProtectedRoute from '@features/Auth/components/ProtectedRoute';
import { RoutePath } from '@shared/constants/RouteConst';

const HomeView = lazy(() => import('./views/Home'));

export const HomeRoutes = [
  {
    path: RoutePath.Root,
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        path: RoutePath.Root,
        element: (
          <ProtectedRoute roles={[UserRole.ADMIN]}>
            <HomeView />
          </ProtectedRoute>
        ),
      },
      {
        path: RoutePath.Home,
        element: (
          <ProtectedRoute roles={[UserRole.ADMIN]}>
            <HomeView />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getIsAuthenticated } from '../../storage';
// import AccessDenied from '../../views/AccessDenied/index';

const ProtectedRoute = ({
  redirectPath = '/auth/login',
  children,
  roles,
}: {
  redirectPath?: string;
  children: any;
  roles?: string[];
}) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  // TODO: uncomment if need to check permissions
  // const userInfo = useSelector(getUserInfo);
  // const userHasRequiredRole = !roles || (userInfo && roles.includes(userInfo.role) ? true : false);
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // if (isAuthenticated && !userHasRequiredRole) {
  //   return <AccessDenied />;
  // }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

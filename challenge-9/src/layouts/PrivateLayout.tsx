import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => (
  <Suspense fallback={<></>}>
    <Outlet />
  </Suspense>
);

export default PrivateLayout;

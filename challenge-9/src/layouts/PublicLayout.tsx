import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => (
  <Suspense fallback={<></>}>
    <Outlet />
  </Suspense>
);

export default PublicLayout;

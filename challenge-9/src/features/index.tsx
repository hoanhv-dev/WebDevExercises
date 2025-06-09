import { AuthRoutes, authSlice } from './Auth';
import { HomeRoutes } from './Home';
import authQuery from './Auth/services';
import homeQuery from './Home/services';

export const AppRoutes = [
  // Add more modules
  ...HomeRoutes,
  ...AuthRoutes,
];

export const AppSlices = {
  // Add more module slices
  auth: authSlice,
};

export const AppQueries = {
  [homeQuery.reducerPath]: homeQuery.reducer,
  [authQuery.reducerPath]: authQuery.reducer,
};

export const AppMiddleware = [authQuery.middleware, homeQuery.middleware];

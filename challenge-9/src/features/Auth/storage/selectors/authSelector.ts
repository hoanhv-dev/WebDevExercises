import { AppState } from '@storage/store';

export const getIsAuthenticated = (state: AppState) => {
  const token = localStorage.getItem('token');
  return !!token || state.auth.isAuthenticated;
};

export const getUserInfo = (state: AppState) => state.auth.user;

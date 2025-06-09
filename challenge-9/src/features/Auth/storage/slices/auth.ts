import { createSlice } from '@reduxjs/toolkit';

import authQuery from '@features/Auth/services';
import { UserRole } from '@features/Auth/constants';
import { AuthType } from '../types/slices';

const initialState: AuthType = {
  token: null,
  isAuthenticated: false,
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authQuery.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = { ...action.payload, role: UserRole.ADMIN }; // Fake role
      localStorage.setItem('token', action.payload.token);
    });
  },
});

export const { logout } = slice.actions;
export const authSlice = slice.reducer;

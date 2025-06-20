import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../../../services/api';
import type { HomeState } from '../../../../storage/types';

const initialState: HomeState = {
  data: null,
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.getHome.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(api.endpoints.getHome.matchFulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addMatcher(api.endpoints.getHome.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load home data';
      });
  },
});

export default homeSlice.reducer;

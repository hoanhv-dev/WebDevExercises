import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../../storage/store';

// Base selector
const selectHomeState = (state: RootState) => state.home;

// Memoized selectors
export const selectHomeData = createSelector(
  [selectHomeState],
  (homeState) => homeState.data
);

export const selectHomeLoading = createSelector(
  [selectHomeState],
  (homeState) => homeState.loading
);

export const selectHomeError = createSelector(
  [selectHomeState],
  (homeState) => homeState.error
);

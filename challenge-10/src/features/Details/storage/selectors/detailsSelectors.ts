import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../../storage/store';
import type { DetailsState } from '../../../../storage/types';

// Base selector
const selectDetailsState = (state: RootState): DetailsState => state.details as DetailsState;

// Memoized selectors
export const selectDetailsData = createSelector(
  [selectDetailsState],
  (detailsState): DetailsState['data'] => detailsState.data
);

export const selectDetailsLoading = createSelector(
  [selectDetailsState],
  (detailsState): boolean => detailsState.loading
);

export const selectDetailsError = createSelector(
  [selectDetailsState],
  (detailsState): string | null => detailsState.error
);

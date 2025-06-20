import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../../storage/store';

// Base selector
const selectOurStoryState = (state: RootState) => state.ourStory;

// Memoized selectors
export const selectOurStoryData = createSelector(
  [selectOurStoryState],
  (ourStoryState) => ourStoryState.data
);

export const selectOurStoryLoading = createSelector(
  [selectOurStoryState],
  (ourStoryState) => ourStoryState.loading
);

export const selectOurStoryError = createSelector(
  [selectOurStoryState],
  (ourStoryState) => ourStoryState.error
);

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../../storage/store';

// Select the RSVP slice state
const selectRSVPState = (state: RootState) => state.rsvp;

// Select the RSVP data
const selectRSVPData = createSelector(
  [selectRSVPState],
  (rsvpState) => rsvpState.data
);

// Select the loading state
const selectRSVPLoading = createSelector(
  [selectRSVPState],
  (rsvpState) => rsvpState.loading
);

// Select the error state
const selectRSVPError = createSelector(
  [selectRSVPState],
  (rsvpState) => rsvpState.error
);

// Select the success state
const selectRSVPSuccess = createSelector(
  [selectRSVPState],
  (rsvpState) => rsvpState.success
);

export {
  selectRSVPData,
  selectRSVPLoading,
  selectRSVPError,
  selectRSVPSuccess,
};
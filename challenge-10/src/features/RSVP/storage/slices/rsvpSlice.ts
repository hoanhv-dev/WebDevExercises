import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RSVPData, RSVPState } from '../../../../storage/types';

const initialState: RSVPState = {
  data: null,
  loading: false,
  error: null,
  success: false,
};

const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    submitRSVPStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    submitRsvpSuccess(state, action: PayloadAction<RSVPData>) {
      state.loading = false;
      state.data = action.payload;
      state.success = true;
    },
    submitRsvpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetRsvpState(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const {
  submitRSVPStart,
  submitRsvpSuccess,
  submitRsvpFailure,
  resetRsvpState,
} = rsvpSlice.actions;

export default rsvpSlice.reducer;

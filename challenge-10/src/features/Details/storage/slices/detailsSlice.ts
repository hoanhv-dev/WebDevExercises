import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../../../services/api';
import type { DetailsState } from '../../../../storage/types';

const initialState: DetailsState = {
  data: null,
  loading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.getDetails.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(api.endpoints.getDetails.matchFulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addMatcher(api.endpoints.getDetails.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load details';
      });
  },
});

export default detailsSlice.reducer;

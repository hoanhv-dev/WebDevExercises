import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../../../services/api';
import type { OurStoryState } from '../../../../storage/types';

const initialState: OurStoryState = {
  data: null,
  loading: false,
  error: null,
};

const ourStorySlice = createSlice({
  name: 'ourStory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.getOurStory.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(api.endpoints.getOurStory.matchFulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addMatcher(api.endpoints.getOurStory.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load our story data';
      });
  },
});

export default ourStorySlice.reducer;

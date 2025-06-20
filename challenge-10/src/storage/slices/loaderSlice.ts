import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import type { Loader } from "../types/slices.d"

const initialState: Loader = {
  isLoading: false,
  isError: false,
  counter: 0,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.counter = state.counter + 1;
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addMatcher(isFulfilled, (state) => {
        state.counter = state.counter - 1;
        if (state.counter === 0) {
          state.isLoading = false;
        }
      })
      .addMatcher(isRejected, (state) => {
        state.counter = 0;
        state.isError = true;
        if (state.counter === 0) {
          state.isLoading = false;
        }
      });
  },
});

export default loaderSlice.reducer;

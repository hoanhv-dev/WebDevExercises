import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { OurStoryData } from "../../types";

// Base selector
export const selectOurStoryData = (state: RootState): OurStoryData | undefined => 
  state.api.queries?.['getOurStory(undefined)']?.data as OurStoryData | undefined;

// Individual selectors
export const selectTopImage = createSelector(
  [selectOurStoryData],
  (ourStoryData) => ourStoryData?.topImage
);

export const selectTitle = createSelector(
  [selectOurStoryData],
  (ourStoryData) => ourStoryData?.title
);

export const selectStory1 = createSelector(
  [selectOurStoryData],
  (ourStoryData) => ourStoryData?.story1
);

export const selectStory2 = createSelector(
  [selectOurStoryData],
  (ourStoryData) => ourStoryData?.story2
);

export const selectImageSection = createSelector(
  [selectOurStoryData],
  (ourStoryData) => ourStoryData?.imageSection
);

export const selectQuote = createSelector(
  [selectOurStoryData],
  (ourStoryData) => ourStoryData?.quote
);

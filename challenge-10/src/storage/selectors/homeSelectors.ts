import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { HomeData } from '../types';

// Base selector
export const selectHomeData = (state: RootState): HomeData | undefined => 
  state.api.queries?.['getHome(undefined)']?.data as HomeData | undefined;

// Individual selectors
export const selectHero = createSelector(
  [selectHomeData],
  (homeData) => ({
    title: homeData?.hero?.title || 'Welcome'
  })
);

export const selectWedding = createSelector(
  [selectHomeData],
  (homeData) => homeData?.wedding || {
    backgroundImage: '',
    subtitle: '',
    date: '',
    venue: { name: '', location: '' },
    items: {},
    registry: { img: '', title: '', subtitle: '', link: '' }
  }
);

export const selectSubtitle = createSelector(
  [selectWedding],
  (wedding) => wedding.subtitle
);

export const selectBackgroundImage = createSelector(
  [selectWedding],
  (wedding) => wedding.backgroundImage
);

export const selectDate = createSelector(
  [selectWedding],
  (wedding) => wedding.date
);

export const selectVenue = createSelector(
  [selectWedding],
  (wedding) => wedding.venue
);

export const selectItems = createSelector(
  [selectWedding],
  (wedding) => wedding.items
);

export const selectRegistry = createSelector(
  [selectWedding],
  (wedding) => wedding.registry
);

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Base selector
const selectNavigationData = (state: RootState) => 
  state.api.queries?.['getNavigation(undefined)']?.data;

// Individual selectors
export const selectNavMenu = createSelector(
  [selectNavigationData],
  (navData) => navData?.menu || []
);

export const selectNavLogo = createSelector(
  [selectNavigationData],
  (navData) => ({
    mobileMode: navData?.logo?.mobileMode || '',
    desktopMode: navData?.logo?.desktopMode || '',
    date: navData?.date || ''
  })
);

export const selectFooterData = createSelector(
  [selectNavigationData],
  (navData) => ({
    logo: navData?.footer?.logo || '',
    day: navData?.footer?.day || '',
    date: navData?.footer?.date || ''
  })
);

import type { Selector } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import type { Loader } from '../types/slices.d';

export const getLoaderState: Selector<RootState, Loader | undefined> = (state: RootState) => state.loader;

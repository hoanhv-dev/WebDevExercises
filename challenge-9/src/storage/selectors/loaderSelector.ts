import { Selector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { Loader } from '../types/slices';

export const getLoaderState: Selector<AppState, Loader> = (state: AppState) => state.loader;

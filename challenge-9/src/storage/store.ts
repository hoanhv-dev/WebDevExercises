import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import tasksReducer from '@features/Home/storage/slices/tasksSlice';

import { AppMiddleware, AppQueries, AppSlices } from '@features';
import { rtkQueryErrorLogger } from '@shared/middlewares/errorToast';
import loader from './slices/loader';

export const rootReducer = combineReducers({
  // RTK slices
  loader,
  // App slices
  ...AppSlices,
  // RTK queries
  ...AppQueries,
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, rtkQueryErrorLogger, ...AppMiddleware),
});

export type AppState = ReturnType<typeof rootReducer>;
export const userAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;

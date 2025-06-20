import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../services/api';
import { rsvpApi } from '../features/RSVP/storage/api/rsvpApi';
import loaderReducer from './slices/loaderSlice';
import homeReducer from '../features/Home/storage/slices/homeSlice';
import ourStoryReducer from '../features/OurStory/storage/slices/ourStorySlice';
import detailsReducer from '../features/Details/storage/slices/detailsSlice';
import rsvpReducer from '../features/RSVP/storage/slices/rsvpSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [rsvpApi.reducerPath]: rsvpApi.reducer,
    loader: loaderReducer,
    home: homeReducer,
    ourStory: ourStoryReducer,
    details: detailsReducer,
    rsvp: rsvpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(rsvpApi.middleware),
  devTools: import.meta.env.MODE !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

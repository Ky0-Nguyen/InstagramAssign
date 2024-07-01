import {configureStore} from '@reduxjs/toolkit';
import instagramReducer from './reducer';

const store = configureStore({
  reducer: {
    instagram: instagramReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

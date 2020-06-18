import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from 'redux/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
  devTools: true,
});

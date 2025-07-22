// src/state/store.js (Recommended with Redux Toolkit)
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers'; // adjust path if needed

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), // thunk is included by default
});

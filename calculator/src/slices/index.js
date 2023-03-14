import { configureStore } from '@reduxjs/toolkit';
import calcReducer from './calcSlice.js';

export default configureStore({
  reducer: {
    cardData: calcReducer,
  },
});

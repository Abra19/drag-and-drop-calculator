import { configureStore } from '@reduxjs/toolkit';
import dropReducer from './dropStatus.js';

export default configureStore({
  reducer: {
    drop: dropReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import dropPartsReducer from './dropPartsStatus';

export default configureStore({
  reducer: {
    dropParts: dropPartsReducer,
  },
});

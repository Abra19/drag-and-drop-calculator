import { configureStore } from '@reduxjs/toolkit';
import dropPartsReducer from './dropPartsStatus.js';
import calculatorStatus from './calculatorStatus.js';

export default configureStore({
  reducer: {
    dropParts: dropPartsReducer,
    calculator: calculatorStatus,
  },
});

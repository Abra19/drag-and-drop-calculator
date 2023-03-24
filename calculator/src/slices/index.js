import { configureStore } from '@reduxjs/toolkit';
import dropPartsReducer from './dropPartsStatus';
import calculatorStatus from './calculatorStatus';

export default configureStore({
  reducer: {
    dropParts: dropPartsReducer,
    calculator: calculatorStatus,
  },
});

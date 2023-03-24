/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calculatorStatus: false,
};

const calculatorStatusSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    changeCalculatorStatus: (state, { payload }) => {
      state.calculatorStatus = payload;
    },
  },
});

export const {
  changeCalculatorStatus,
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

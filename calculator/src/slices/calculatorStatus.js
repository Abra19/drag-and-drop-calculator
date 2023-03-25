/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calculatorStatus: false,
  disabledButtons: true,
};

const calculatorStatusSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    changeCalculatorStatus: (state, { payload }) => {
      state.calculatorStatus = payload;
    },
    changeDisabledButtons: (state, { payload }) => {
      state.disabledButtons = payload;
    },
  },
});

export const {
  changeCalculatorStatus,
  changeDisabledButtons,
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { cleanArr } from '../utils';

const initialState = {
  calculatorStatus: false,
  disabledButtons: true,
  startValue: '0',
  isOperator: false,
  currentList: [],
  currentResult: '0',
  calculated: false,
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
    pushToCurrentList: (state, { payload }) => {
      state.currentList = cleanArr(state.currentList, payload);
      console.log(state.currentList);
    },
    currentListPop: (state) => {
      state.currentList.pop();
    },
    isOperator: (state, { payload }) => {
      state.isOperator = payload;
    },
    changeInputValue: (state, { payload }) => {
      const condition = payload === '.' && state.startValue.includes('.');
      const startValue = condition ? state.startValue : `${state.startValue}${payload}`;
      state.startValue = (state.isOperator) ? payload : startValue;
      if (payload === '.' && state.startValue === '.') {
        state.startValue = '0.';
      }
      if (state.calculated) {
        state.startValue = payload;
      }
      state.isOperator = false;
    },
    changeCurrentResult: (state, { payload }) => {
      state.currentResult = payload;
      state.isOperator = true;
    },
    initInputValue: (state) => {
      state.startValue = '0';
    },
    isCalculated: (state, { payload }) => {
      state.calculated = payload;
    },
  },
});

export const {
  changeCalculatorStatus,
  changeDisabledButtons,
  pushToCurrentList,
  currentListPop,
  isOperator,
  changeInputValue,
  changeCurrentResult,
  initInputValue,
  isCalculated,
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

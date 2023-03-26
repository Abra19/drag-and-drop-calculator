/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';

import { cleanArr } from '../utils';

const initialState = {
  calculatorStatus: false,
  disabledButtons: true,
  inputValue: '0',
  isOperator: false,
  currentList: [],
  currentResult: '0',
  calculated: false,
  lastValue: '0',
  unarNegative: '',
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
    },
    currentListPop: (state) => {
      state.currentList.pop();
    },
    isOperator: (state, { payload }) => {
      state.isOperator = payload;
    },
    changeInputValue: (state, { payload }) => {
      console.log(current(state));
      const condition = payload === '.' && state.inputValue.includes('.');
      const inputValue = condition ? state.inputValue : `${state.inputValue}${payload}`;
      state.inputValue = (state.isOperator || state.inputValue === '0') ? payload : inputValue;
      if (payload === '.' && state.inputValue === '.') {
        state.inputValue = '0.';
      }
      if (state.calculated) {
        state.inputValue = payload;
      }
      state.isOperator = false;
    },
    changeCurrentResult: (state, { payload }) => {
      state.currentResult = payload;
    },
    isCalculated: (state, { payload }) => {
      state.calculated = payload;
    },
    changeLastValue: (state, { payload }) => {
      state.lastValue = payload;
    },
    initInputValue: (state) => {
      state.inputValue = '0';
      state.isOperator = false;
      state.currentList = [];
      state.currentResult = '0';
      state.calculated = false;
      state.lastValue = '0';
      state.unarNegative = '';
    },
    makeUnarNegative: (state, { payload }) => {
      state.unarNegative = payload;
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
  isCalculated,
  changeLastValue,
  initInputValue,
  makeUnarNegative,
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

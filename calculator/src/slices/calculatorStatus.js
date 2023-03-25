/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calculatorStatus: false,
  disabledButtons: true,
  startValue: '0',
  isOperator: false,
  currentList: [],
  currentResult: '0',
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
      state.currentList.push(payload);
    },
    currentListPop: (state) => {
      state.currentList.pop();
    },
    isOperator: (state, { payload }) => {
      state.isOperator = payload;
    },
    changeInputValue: (state, { payload }) => {
      state.startValue = (state.startValue === '0' || state.isOperator) ? payload : `${state.startValue}${payload}`;
      state.isOperator = false;
    },
    changeCurrentResult: (state, { payload }) => {
      state.currentResult = payload;
      state.isOperator = true;
    },
    initInputValue: (state) => {
      state.startValue = '0';
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
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import { operators } from '../utils/calcResult';

const initialState = {
  calculatorStatus: false,
  disabledButtons: true,
  inputValue: '0',
  currentResult: '',
  currentList: [],
  calcStart: false,
  isFirstOperator: true,
  isFirstDigit: true,
  lastValue: '',
  unarNegative: '',
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
    initInputValue: (state) => {
      state.inputValue = '0';
      state.currentList = [];
      state.currentResult = '';
      state.calculated = false;
      state.lastValue = '';
      state.unarNegative = '';
      state.isFirstOperator = true;
      state.isFirstDigit = true;
    },
    changeCalcStartStatus: (state) => {
      state.calcStart = true;
    },
    pushToCurrentList: (state, { payload }) => {
      state.currentList.push(payload);
      console.log(current(state));
    },
    currentListSlice: (state, { payload }) => {
      state.currentList = state.currentList.slice(0, payload);
    },
    currentListInit: (state) => {
      state.currentList = [];
    },
    changeInputValue: (state, { payload }) => {
      const el = state.currentList[state.currentList.length - 1];
      state.inputValue = (state.inputValue === '0' || operators.includes(el)) ? payload : `${state.inputValue}${payload}`;
      if (payload === ',' && state.inputValue === ',') {
        state.inputValue = '0,';
      }
      if (state.calculated) {
        state.inputValue = payload;
      }
    },
    changeCurrentResult: (state, { payload }) => {
      state.currentResult = payload;
      state.inputValue = payload;
    },
    changeLastValue: (state, { payload }) => {
      state.lastValue = payload;
    },
    notFirstOperator: (state) => {
      state.isFirstOperator = false;
    },
    notFirstDigit: (state) => {
      state.isFirstDigit = false;
    },
    makeUnarNegative: (state, { payload }) => {
      state.unarNegative = payload;
    },
    isCalculated: (state, { payload }) => {
      state.calculated = payload;
    },
  },
});

export const {
  changeCalculatorStatus,
  changeDisabledButtons,
  changeCalcStartStatus,
  pushToCurrentList,
  currentListSlice,
  currentListInit,
  changeInputValue,
  changeCurrentResult,
  changeLastValue,
  initInputValue,
  makeUnarNegative,
  notFirstOperator,
  notFirstDigit,
  isCalculated,
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

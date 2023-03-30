/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import { operators } from '../utils/calcResult';

const initialState = {
  calculatorStatus: false,
  disabledButtons: true,
  inputValue: '0',
  currentResult: '0',
  currentList: [],
  calcStart: false,
  isFirstOperator: true,
  firstDigit: true,
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
    initCalculation: (state) => {
      state.inputValue = '0';
      state.currentList = [];
      state.currentResult = '';
      state.calculated = false;
      state.unarNegative = '';
      state.isFirstOperator = true;
      state.firstDigit = true;
    },
    changeCalcStartStatus: (state) => {
      state.calcStart = true;
    },
    pushToCurrentList: (state, { payload }) => {
      state.currentList = payload.reduce((acc, el) => [...acc, el], state.currentList);
    },
    currentListSlice: (state, { payload }) => {
      state.currentList = state.currentList.slice(0, payload);
    },
    currentListInit: (state) => {
      state.currentList = [];
    },
    changeInputValue: (state, { payload }) => {
      const value = payload.replace('.', ',');
      const el = state.currentList[state.currentList.length - 1];
      state.inputValue = (state.inputValue === '0' || operators.includes(el)) ? value : `${state.inputValue}${value}`;
      if (payload === ',' && state.inputValue === ',') {
        state.inputValue = '0,';
      }
      if (payload === ',' && state.inputValue.slice(0, state.inputValue.length - 1).includes(',')) {
        state.inputValue = state.inputValue.slice(0, state.inputValue.length - 1);
      }
      if (state.calculated) {
        state.inputValue = value;
      }
    },
    changeCurrentResult: (state, { payload }) => {
      console.log(current(state));
      state.currentResult = payload;
      state.inputValue = payload.replace('.', ',');
    },
    notFirstOperator: (state) => {
      state.isFirstOperator = false;
    },
    isFirstDigit: (state, { payload }) => {
      state.firstDigit = payload;
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
  initCalculation,
  makeUnarNegative,
  notFirstOperator,
  isFirstDigit,
  isCalculated,
} = calculatorStatusSlice.actions;
export default calculatorStatusSlice.reducer;

/* eslint-disable new-cap */
// eslint-disable-next-line import/no-extraneous-dependencies
import bigDecimal from 'js-big-decimal';

import { calc } from './utils';

export const operators = ['/', 'x', '-', '+'];

const cleanList = (list) => {
  const deepListCopy = list.slice(0).map((sym) => (sym === ',' ? '.' : sym));
  const cleanedList = deepListCopy.filter((el, i) => {
    const arr = deepListCopy.slice(0, i);
    const pointIndex = arr.lastIndexOf('.');
    const lastOperatorIndex = Math.max(...operators.map((sym) => arr.lastIndexOf(sym)));
    if (el === '.') {
      return pointIndex <= lastOperatorIndex;
    }
    if (operators.includes(el)) {
      return !operators.includes(deepListCopy[i + 1]);
    }
    return el;
  });
  return cleanedList;
};

const makeNums = (list) => {
  const cleanedList = cleanList(list);
  // eslint-disable-next-line functional/no-let
  let el = '';
  const result = cleanedList.reduce((acc, item) => {
    if (operators.includes(item)) {
      if (el !== '') {
        const swap = el;
        el = '';
        return [...acc, swap, item];
      }
    }
    el += item;
    return acc;
  }, []);
  if (!operators.includes(cleanedList[cleanedList.length - 1])) {
    result.push(el);
  }
  return result;
};

const calcMaked = (list) => {
  if (list.length === 1) {
    return list[0];
  }
  const error = 'Не определено';
  if (list.includes(error)) {
    return error;
  }
  if (operators.includes(list[0])) {
    const [operator, firstDigit, ...rest] = list;
    const first = new bigDecimal(firstDigit);
    return rest.length === 0
      ? calc(operator, first, first)
      : calcMaked([calc(operator, first, first), ...rest]);
  }

  const [secondDigit, operator, firstDigit, ...rest] = list;
  const first = new bigDecimal(firstDigit);
  const second = new bigDecimal(secondDigit);
  return rest.length === 0
    ? calc(operator, first, second)
    : calcMaked([calc(operator, first, second), ...rest]);
};

const calcResult = (list) => {
  const maked = makeNums(list);
  const copy = maked.slice(0);
  return calcMaked(copy.reverse());
};

export const calcTop = (list) => {
  const maked = makeNums(list);
  const [firstDigit, operator, secondDigit] = maked.slice(-3);
  const first = new bigDecimal(firstDigit);
  const second = new bigDecimal(secondDigit);
  return calc(operator, first, second);
};

export default calcResult;

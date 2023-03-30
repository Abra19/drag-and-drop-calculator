export const calc = (operator, first, second) => {
  // eslint-disable-next-line functional/no-let
  let divide;
  try {
    divide = first.divide(second);
  } catch {
    divide = 'Не определено';
  }
  switch (operator) {
    case '+':
      return first.add(second).getValue();
    case '-':
      return first.subtract(second).getValue();
    case 'x':
      return first.multiply(second).getValue();
    case '/':
      return typeof divide === 'object' ? parseFloat(divide.getValue()) : divide;
    default:
      throw new Error('operation is not processed');
  }
};

export const foundSubsIndex = (arr) => {
  const lastOperatorIndex = arr.findLastIndex((el) => !el.match(/[\d ,]/));
  const digitIndex = arr.slice(0, lastOperatorIndex).findLastIndex((el) => el.match(/[\d ,]/));
  return arr.slice(0, digitIndex).findLastIndex((el) => !el.match(/[\d ,]/));
};

const handleMouseDown = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

export default handleMouseDown;

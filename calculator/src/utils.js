export const calc = (operator, first, second) => {
  const lenA = Math.trunc(first + second).toString().length;
  const lenS = Math.trunc(first - second).toString().length;
  const lenM = Math.trunc(first * second).toString().length;
  const lenD = Math.trunc(first / second).toString().length;
  switch (operator) {
    case '+':
      return Number((first + second).toFixed(10 - lenA));
    case '-':
      return Number((first - second).toFixed(10 - lenS));
    case 'x':
      return Number((first * second).toFixed(10 - lenM));
    case '/':
      return Number((first / second).toFixed(10 - lenD));
    default:
      throw new Error('operation is not processed');
  }
};

const calcHimself = (operator, num) => {
  const lenA = Math.trunc(2 * num).toString().length;
  const lenS = Math.trunc(num).toString().length;
  const lenM = Math.trunc(num * num).toString().length;
  const lenD = Math.trunc(1 / num).toString().length;
  switch (operator) {
    case '+':
      return Number((2 * num).toFixed(16 - lenA));
    case '-':
      return Number(((-1) * num).toFixed(16 - lenS));
    case 'x':
      return Number((num * num).toFixed(16 - lenM));
    case '/':
      return Number((1 / num).toFixed(16 - lenD));
    default:
      throw new Error('operation is not processed');
  }
};

export const calcResult = (arr) => {
  const len = arr.length;
  const result = arr.reduce((acc, el, i) => {
    const currentN = Number(el);
    const nextN = Number(arr[i + 1]);
    if (currentN && i === 0) {
      return currentN;
    }
    if (!currentN && (nextN || nextN === 0)) {
      return i === len - 1 ? calcHimself(el, acc) : calc(el, acc, nextN);
    }

    return acc;
  }, 0);

  return Number.isFinite(result) ? result.toString() : 'Не определено';
};

export const cleanArr = (list, sym) => {
  const result = list.slice(0);
  const operators = ['/', 'x', '-', '+'];
  const pointIndex = result.lastIndexOf('.');
  const lastOperatorIndex = Math.max(...operators.map((el) => result.lastIndexOf(el)));
  if (sym !== '.' || pointIndex <= lastOperatorIndex) {
    result.push(sym);
  }
  return result;
};

const handleMouseDown = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

export default handleMouseDown;

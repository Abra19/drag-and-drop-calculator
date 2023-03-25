export const calcResult = (arr) => {
  const result = arr.reduce((acc, el, i) => {
    const item = Number(el);
    if (item && i === 0) {
      return item;
    }
    if (!arr[i + 1]) {
      return acc;
    }
    if (el === '+') {
      return Number((acc + Number(arr[i + 1])).toFixed(15));
    }
    if (el === '-') {
      return Number((acc - Number(arr[i + 1])).toFixed(15));
    }
    if (el === 'x') {
      return Number((acc * Number(arr[i + 1])).toFixed(15));
    }
    return Number((acc / Number(arr[i + 1])).toFixed(15));
  }, 0);

  return Number.isFinite(result) ? result.toString() : 'Не определено';
};

const handleMouseDown = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

export default handleMouseDown;

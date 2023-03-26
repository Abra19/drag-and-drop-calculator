export const calcResult = (arr) => {
  const result = arr.reduce((acc, el, i) => {
    const currentN = Number(el);
    const nextN = Number(arr[i + 1]);
    if (currentN && i === 0) {
      return currentN;
    }
    if (el === '+') {
      return Number((acc + nextN).toFixed(15));
    }
    if (el === '-') {
      return Number((acc - nextN).toFixed(15));
    }
    if (el === 'x') {
      return Number((acc * nextN).toFixed(15));
    }
    if (el === '/') {
      return Number((acc / nextN).toFixed(15));
    }
    return acc;
  }, 0);

  return Number.isFinite(result) ? result.toString() : 'Не определено';
};

const handleMouseDown = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

export default handleMouseDown;

import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { currentListPop, changeInputValue, changeCurrentResult } from '../slices/calculatorStatus';
import { calcResult } from '../utils';

const EqualButton = ({ name, onClick, onMouseDown }) => {
  const { disabledButtons, currentList, currentResult } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const operators = ['/', 'x', '-', '+'];
  const separator = ',';

  const handleClick = () => {
    const manageStack = currentList.reduce((acc, el, i) => {
      dispatch(currentListPop());
      if (i === 0) {
        return [...acc, el];
      }
      const next = currentList[i + 1];
      if (operators.includes(el)) {
        return operators.includes(next) ? acc : [...acc, el];
      }
      if (next === separator && el === separator) {
        return acc;
      }
      const item = el === separator ? '.' : el;
      const len = acc.length;
      return operators.includes(acc[len - 1])
        ? [...acc, item]
        : [...acc.slice(0, len - 1), `${acc[len - 1]}${item}`];
    }, []);

    const addOldResult = currentResult === '0' ? manageStack : [currentResult].concat(manageStack);

    const result = calcResult(addOldResult);
    dispatch(changeCurrentResult(result));
    dispatch(changeInputValue(result));
  };

  return (
    <div className={`equality border-4 ${name}`} role="button" onClick={onClick} onMouseDown={onMouseDown}>
      <Button
        className="equal base-text text-white"
        disabled={disabledButtons}
        onClick={handleClick}
      >
        =
      </Button>
    </div>
  );
};

export default EqualButton;

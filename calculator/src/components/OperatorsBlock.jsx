import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import {
  pushToCurrentList,
  makeUnarNegative,
  changeCalcStartStatus,
  changeCurrentResult,
  currentListInit,
  currentListSlice,
  isCalculated,
  isFirstDigit,
} from '../slices/calculatorStatus.js';
import calcResult, { operators, calcTop } from '../utils/calcResult.js';
import { foundSubsIndex, foundOperator } from '../utils/utils.js';

const OperatorsBlock = ({ name, onClick, onMouseDown }) => {
  const dispatch = useDispatch();
  const {
    disabledButtons,
    calcStart,
    isFirstOperator,
    currentList,
  } = useSelector((state) => state.calculator);
  const handleClick = (e) => {
    const { value } = e.target;

    const operator = currentList.length === 0 ? '' : foundOperator(currentList);
    const last = currentList[currentList.length - 1];
    const startCalc = (res) => {
      dispatch(changeCurrentResult(res));
      dispatch(currentListInit());
    };

    if (value === '-' && (!calcStart || currentList.length === 0)) {
      dispatch(makeUnarNegative(value));
      dispatch(changeCalcStartStatus());
      startCalc('0');
    } else if (isFirstOperator) {
      dispatch(isFirstDigit(false));
      dispatch(pushToCurrentList([value]));
    } else if ((value === '+' || value === '-') && !operators.includes(last)) {
      const result = calcResult(currentList);
      dispatch(isCalculated(false));
      startCalc(result);
      dispatch(pushToCurrentList([result, value]));
    } else if (operator === 'x' || operator === '/') {
      const result = calcTop(currentList);
      const index = foundSubsIndex(currentList);
      dispatch(isCalculated(false));
      dispatch(currentListSlice(index + 1));
      dispatch(pushToCurrentList([result, value]));
      dispatch(changeCurrentResult(result));
    } else {
      dispatch(pushToCurrentList([value]));
    }
  };

  return (
    <div className={`calc-operators d-flex border-4 ${name}`} role="button" onClick={onClick} onMouseDown={onMouseDown}>
      {operators.map((el) => (
        <Button
          key={el}
          value={el}
          className="operator base-text"
          variant="light"
          disabled={disabledButtons}
          onClick={(e) => handleClick(e)}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};

export default OperatorsBlock;

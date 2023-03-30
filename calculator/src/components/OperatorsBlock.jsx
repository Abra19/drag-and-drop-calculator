import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import {
  pushToCurrentList,
  makeUnarNegative,
  changeCalcStartStatus,
  changeCurrentResult,
  notFirstOperator,
  currentListInit,
  currentListSlice,
  isCalculated,
} from '../slices/calculatorStatus.js';
import calcResult, { operators, calcTop } from '../utils/calcResult.js';
import { foundSubsIndex } from '../utils/utils.js';

const OperatorsBlock = ({ name, onClick, onMouseDown }) => {
  const dispatch = useDispatch();
  const {
    disabledButtons,
    calcStart,
    isFirstOperator,
    currentList,
    calculated,
  } = useSelector((state) => state.calculator);
  const handleClick = (e) => {
    const { value } = e.target;
    const filter = currentList.filter((el) => operators.includes(el));

    if (value === '-' && (!calcStart || calculated)) {
      dispatch(makeUnarNegative(value));
      dispatch(changeCalcStartStatus());
      dispatch(changeCurrentResult('0'));
      dispatch(currentListInit());
    } else if (isFirstOperator) {
      dispatch(pushToCurrentList([value]));
      dispatch(notFirstOperator());
    } else if (value === '+' || value === '-') {
      const result = calcResult(currentList);
      dispatch(isCalculated(false));
      dispatch(changeCurrentResult(result));
      dispatch(currentListInit());
      dispatch(pushToCurrentList([result, value]));
    } else if (filter[filter.length - 1] === 'x' || filter[filter.length - 1] === '/') {
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

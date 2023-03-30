import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import {
  changeCurrentResult,
  changeInputValue,
  currentListInit,
  isCalculated,
  pushToCurrentList,
} from '../slices/calculatorStatus.js';
import calcResult from '../utils/calcResult.js';

const EqualButton = ({ name, onClick, onMouseDown }) => {
  const { disabledButtons, currentList } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleClick = () => {
    const result = calcResult(currentList);
    dispatch(changeCurrentResult(result));
    if (result === '') {
      dispatch(changeInputValue('0'));
    }
    dispatch(currentListInit());
    dispatch(pushToCurrentList([result]));
    dispatch(isCalculated(true));
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

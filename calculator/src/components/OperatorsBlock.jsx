import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {
  pushToCurrentList,
  isOperator,
  isCalculated,
  changeInputValue,
  makeUnarNegative,
} from '../slices/calculatorStatus';

const OperatorsBlock = ({ name, onClick, onMouseDown }) => {
  const dispatch = useDispatch();
  const {
    disabledButtons,
    currentList,
    unarNegative,
    inputValue,
  } = useSelector((state) => state.calculator);
  const operators = ['/', 'x', '-', '+'];

  const handleClick = (e) => {
    const { value } = e.target;
    if (currentList.length === 0 && value === '-') {
      dispatch(makeUnarNegative(value));
    }
    if (unarNegative.length > 0) {
      dispatch(isOperator(true));
      dispatch(changeInputValue(`${unarNegative}${inputValue}`));
      dispatch(makeUnarNegative(''));
    }
    dispatch(pushToCurrentList(value));
    dispatch(isOperator(true));
    dispatch(isCalculated(false));
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

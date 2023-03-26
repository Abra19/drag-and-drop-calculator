import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { pushToCurrentList, isOperator, isCalculated } from '../slices/calculatorStatus';

const OperatorsBlock = ({ name, onClick, onMouseDown }) => {
  const dispatch = useDispatch();
  const { disabledButtons } = useSelector((state) => state.calculator);
  const operators = ['/', 'x', '-', '+'];

  const handleClick = (e) => {
    dispatch(pushToCurrentList(e.target.value));
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

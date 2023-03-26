import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {
  pushToCurrentList,
  changeInputValue,
  isCalculated,
  isOperator,
  changeCurrentResult,
} from '../slices/calculatorStatus';

const DigitsBlock = ({ name, onClick, onMouseDown }) => {
  const dispatch = useDispatch();

  const { disabledButtons, currentList } = useSelector((state) => state.calculator);
  const values = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const handleClick = (e) => {
    dispatch(pushToCurrentList(e.target.value));
    dispatch(changeInputValue(e.target.value));
    dispatch(isOperator(false));
    dispatch(isCalculated(false));
    if (currentList.length === 0) {
      dispatch(changeCurrentResult('0'));
    }
  };

  return (
    <div
      className={`calc-operators d-grid border-4 ${name}`}
      role="button"
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {values.map((el) => (
        <Button
          key={el}
          value={el}
          className="chiffre base-text"
          variant="light"
          disabled={disabledButtons}
          onClick={(e) => handleClick(e)}
        >
          {el}
        </Button>
      ))}
      <Button
        value="0"
        className="chiffre g-big base-text"
        variant="light"
        disabled={disabledButtons}
        onClick={(e) => handleClick(e)}
      >
        0
      </Button>
      <Button
        value="."
        className="chiffre base-text"
        variant="light"
        disabled={disabledButtons}
        onClick={(e) => handleClick(e)}
      >
        ,
      </Button>
    </div>
  );
};

export default DigitsBlock;

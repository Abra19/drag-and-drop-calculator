import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {
  pushToCurrentList,
  isFirstDigit,
  changeInputValue,
  changeCalcStartStatus,
  isCalculated,
  changeCurrentResult,
  currentListInit,
  makeUnarNegative,
} from '../slices/calculatorStatus.js';

const DigitsBlock = ({ name, onClick, onMouseDown }) => {
  const dispatch = useDispatch();

  const {
    disabledButtons,
    unarNegative,
    firstDigit,
    calculated,
  } = useSelector((state) => state.calculator);
  const values = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];
  const styles = Array(9).fill('chiffre base-text').concat(['chiffre g-big base-text'], ['chiffre base-text']);

  const handleClick = (e) => {
    const { value } = e.target;

    if (firstDigit) {
      dispatch(changeCalcStartStatus());
    }
    if (calculated) {
      dispatch(changeCurrentResult('0'));
      dispatch(currentListInit());
    }

    if (unarNegative === '-' && (firstDigit || calculated)) {
      const item = `${unarNegative}${value}`;
      dispatch(changeInputValue(item));
      dispatch(pushToCurrentList([item]));
      dispatch(makeUnarNegative(''));
      dispatch(isFirstDigit(false));
      dispatch(isCalculated(false));
    } else {
      dispatch(isCalculated(false));
      dispatch(changeInputValue(value));
      dispatch(pushToCurrentList([value]));
    }
  };

  return (
    <div
      className={`calc-operators d-grid border-4 ${name}`}
      role="button"
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {values.map((el, i) => (
        <Button
          key={el}
          value={el}
          className={styles[i]}
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

export default DigitsBlock;

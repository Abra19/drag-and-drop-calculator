import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeCalculatorStatus,
  changeCurrentResult,
  changeDisabledButtons,
  initInputValue,
} from '../slices/calculatorStatus.js';

const ManageButtons = () => {
  const [disabled, setDisabled] = useState(true);
  const { calculatorStatus } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setDisabled((prevState) => !prevState);
    dispatch(changeCalculatorStatus(!calculatorStatus));
    dispatch(changeDisabledButtons(calculatorStatus));
    dispatch(initInputValue());
    dispatch(changeCurrentResult('0'));
  };

  return (
    <div className="manage border-1 mb-28">
      <Button
        variant="light"
        className="runtime position-relative base-text text-black p-button"
        disabled={disabled}
        onClick={(e) => handleClick(e)}
      >
        Runtime
      </Button>
      <Button
        className="constructor position-relative base-text text-black border-1 p-button"
        variant="light"
        disabled={!disabled}
        onClick={(e) => handleClick(e)}
      >
        Constructor
      </Button>
    </div>
  );
};

export default ManageButtons;

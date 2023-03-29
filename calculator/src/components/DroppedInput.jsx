import { useSelector } from 'react-redux';
import Input from './Input';
import handleMouseDown from '../utils/utils.js';

const DroppedInput = ({ onClick }) => {
  const { calculatorStatus } = useSelector((state) => state.calculator);
  const name = calculatorStatus ? 'calcInput mb-12' : 'droppedInput mb-12';

  return (
    <Input
      name={name}
      onClick={onClick}
      onMouseDown={(e) => handleMouseDown(e)}
    />
  );
};

export default DroppedInput;

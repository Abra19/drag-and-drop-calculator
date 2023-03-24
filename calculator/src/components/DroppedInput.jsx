import Input from './Input';
import handleMouseDown from '../utils.js';

const DroppedInput = ({ onClick }) => (
  <Input
    name="droppedInput mb-12"
    onClick={onClick}
    onMouseDown={(e) => handleMouseDown(e)}
  />
);

export default DroppedInput;

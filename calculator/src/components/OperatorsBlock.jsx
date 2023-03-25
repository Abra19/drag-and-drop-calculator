import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const OperatorsBlock = ({ name, onClick, onMouseDown }) => {
  const { disabledButtons } = useSelector((state) => state.calculator);

  return (
    <div className={`calc-operators d-flex border-4 ${name}`} role="button" onClick={onClick} onMouseDown={onMouseDown}>
      <Button className="operator base-text" variant="light" disabled={disabledButtons}>/</Button>
      <Button className="operator base-text" variant="light" disabled={disabledButtons}>x</Button>
      <Button className="operator base-text" variant="light" disabled={disabledButtons}>-</Button>
      <Button className="operator base-text" variant="light" disabled={disabledButtons}>+</Button>
    </div>
  );
};

export default OperatorsBlock;

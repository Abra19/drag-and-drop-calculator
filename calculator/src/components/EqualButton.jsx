import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const EqualButton = ({ name, onClick, onMouseDown }) => {
  const { disabledButtons } = useSelector((state) => state.calculator);

  return (
    <div className={`equality border-4 ${name}`} role="button" onClick={onClick} onMouseDown={onMouseDown}>
      <Button className="equal base-text text-white" disabled={disabledButtons}>=</Button>
    </div>
  );
};

export default EqualButton;

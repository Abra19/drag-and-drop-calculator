import { Button } from 'react-bootstrap';

const EqualButton = ({
  name,
  onClick,
  onMouseDown,
}) => (
  <div className={`equality border-4 ${name}`} role="button" onClick={onClick} onMouseDown={onMouseDown}>
    <Button className="equal base-text text-white" disabled>=</Button>
  </div>
);

export default EqualButton;

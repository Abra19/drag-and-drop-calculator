import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const DigitsBlock = ({ name, onClick, onMouseDown }) => {
  const { disabledButtons } = useSelector((state) => state.calculator);

  return (
    <div
      className={`calc-operators d-grid border-4 ${name}`}
      role="button"
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>7</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>8</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>9</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>4</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>5</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>6</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>1</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>2</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>3</Button>
      <Button className="chiffre g-big base-text" variant="light" disabled={disabledButtons}>0</Button>
      <Button className="chiffre base-text" variant="light" disabled={disabledButtons}>,</Button>
    </div>
  );
};

export default DigitsBlock;

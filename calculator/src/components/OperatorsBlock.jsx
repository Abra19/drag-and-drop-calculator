import { Button } from 'react-bootstrap';

const OperatorsBlock = () => (
  <div className="calc-operators d-flex border-4">
    <Button className="operator base-text text-black" disabled>/</Button>
    <Button className="operator base-text text-black" disabled>x</Button>
    <Button className="operator base-text text-black" disabled>-</Button>
    <Button className="operator base-text text-black" disabled>+</Button>
  </div>
);

export default OperatorsBlock;

import { Button } from 'react-bootstrap';

const Operators = () => (
  <div className="calc-operators d-flex border-4 mb-12">
    <Button className="operator base-text text-black" disabled>/</Button>
    <Button className="operator base-text text-black" disabled>x</Button>
    <Button className="operator base-text text-black" disabled>-</Button>
    <Button className="operator base-text text-black" disabled>+</Button>
  </div>
);

export default Operators;

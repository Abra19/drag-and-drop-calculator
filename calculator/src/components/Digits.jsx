import { Button } from 'react-bootstrap';

const Digits = () => (
  <div className="calc-operators d-grid border-4 mb-12">
    <Button className="chiffre base-text text-black" disabled>7</Button>
    <Button className="chiffre base-text text-black" disabled>8</Button>
    <Button className="chiffre base-text text-black" disabled>9</Button>
    <Button className="chiffre base-text text-black" disabled>4</Button>
    <Button className="chiffre base-text text-black" disabled>5</Button>
    <Button className="chiffre base-text text-black" disabled>6</Button>
    <Button className="chiffre base-text text-black" disabled>1</Button>
    <Button className="chiffre base-text text-black" disabled>2</Button>
    <Button className="chiffre base-text text-black" disabled>3</Button>
    <Button className="chiffre g-big base-text text-black" disabled>0</Button>
    <Button className="chiffre base-text text-black" disabled>,</Button>
  </div>
);

export default Digits;

import Input from '../components/Input.jsx';
import OperatorsBlock from '../components/OperatorsBlock.jsx';
import DigitsBlock from '../components/DigitsBlock.jsx';
import EqualButton from '../components/EqualButton.jsx';

const elements = [
  { id: 1, component: <Input /> },
  { id: 2, component: <OperatorsBlock /> },
  { id: 3, component: <DigitsBlock /> },
  { id: 4, component: <EqualButton /> },
];

export default elements;

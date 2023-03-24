import OperatorsBlock from './OperatorsBlock';
import DigitsBlock from './DigitsBlock';
import EqualButton from './EqualButton';
import DroppedInput from './DroppedInput';
import DroppedComponent from './DroppedParts.jsx';

const DroppedItem = ({ id, onClick }) => {
  const components = [OperatorsBlock, DigitsBlock, EqualButton];

  return (
    id === 1
      ? <DroppedInput onClick={onClick} />
      : <DroppedComponent id={id} Component={components[id - 2]} onClick={onClick} />
  );
};

export default DroppedItem;

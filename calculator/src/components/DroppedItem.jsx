import OperatorsBlock from './OperatorsBlock.jsx';
import DigitsBlock from './DigitsBlock.jsx';
import EqualButton from './EqualButton.jsx';
import DroppedInput from './DroppedInput.jsx';
import DroppedComponent from './DroppedComponent.jsx';

const DroppedItem = ({ id, onClick }) => {
  const components = [OperatorsBlock, DigitsBlock, EqualButton];

  return (
    id === 1
      ? <DroppedInput onClick={onClick} />
      : <DroppedComponent id={id} Component={components[id - 2]} onClick={onClick} />
  );
};

export default DroppedItem;
